import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockRoles } from '../../data/roles';
import { Edit, Trash2 } from 'lucide-react';
import RoleModal from '../../components/user-management/RoleModal';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const RolesList = () => {
    const [roles, setRoles] = useState(mockRoles);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingRole, setEditingRole] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingRoleId, setDeletingRoleId] = useState(null);

    const handleOpenModal = (role = null) => {
        setEditingRole(role);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingRole) {
            setRoles(prev => prev.map(r => r.id === editingRole.id ? { ...r, ...formData } : r));
        } else {
            const newRole = { id: Date.now(), ...formData };
            setRoles(prev => [newRole, ...prev]);
        }
    };

    const openDeleteModal = (id) => {
        setDeletingRoleId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setRoles(prev => prev.filter(r => r.id !== deletingRoleId));
        setDeleteModalOpen(false);
        setDeletingRoleId(null);
    };

    return (
        <AdminPageLayout title="Roles" actionButton="Add Role" onActionClick={() => handleOpenModal()}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Role Name</th>
                            <th className="p-3 font-semibold">Description</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role) => (
                            <tr key={role.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-secondary-900">{role.name}</td>
                                <td className="p-3 text-secondary-700">{role.description}</td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleOpenModal(role)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button onClick={() => openDeleteModal(role.id)} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RoleModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                role={editingRole}
            />
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Role"
                message="Are you sure you want to delete this role?"
            />
        </AdminPageLayout>
    );
};

export default RolesList;

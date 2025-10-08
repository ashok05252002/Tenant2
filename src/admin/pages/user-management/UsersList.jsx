import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockAdminUsers } from '../../data/adminUsers';
import { Edit, Trash2 } from 'lucide-react';
import UserModal from '../../components/user-management/UserModal';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const UsersList = () => {
    const [users, setUsers] = useState(mockAdminUsers);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingUserId, setDeletingUserId] = useState(null);

    const handleOpenModal = (user = null) => {
        setEditingUser(user);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingUser) {
            setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, ...formData } : u));
        } else {
            const newUser = { id: Date.now(), ...formData, avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/88.jpg' };
            setUsers(prev => [newUser, ...prev]);
        }
    };

    const openDeleteModal = (id) => {
        setDeletingUserId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setUsers(prev => prev.filter(u => u.id !== deletingUserId));
        setDeleteModalOpen(false);
        setDeletingUserId(null);
    };

    return (
        <AdminPageLayout title="Users" actionButton="Add User" onActionClick={() => handleOpenModal()}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">User</th>
                            <th className="p-3 font-semibold">Role</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="font-medium text-secondary-900">{user.name}</p>
                                            <p className="text-xs text-secondary-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 text-secondary-700">{user.role}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleOpenModal(user)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button onClick={() => openDeleteModal(user.id)} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <UserModal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                user={editingUser}
            />
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete User"
                message="Are you sure you want to delete this user?"
            />
        </AdminPageLayout>
    );
};

export default UsersList;

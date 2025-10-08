import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockLandlords } from '../../data/users';
import { Eye, Edit, Trash2 } from 'lucide-react';
import AddUserWizard from '../../components/users/AddUserWizard';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const LandlordsList = () => {
    const navigate = useNavigate();
    const [landlords, setLandlords] = useState(mockLandlords);
    const [isWizardOpen, setWizardOpen] = useState(false);
    const [editingLandlord, setEditingLandlord] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingLandlordId, setDeletingLandlordId] = useState(null);

    const getStatusBadge = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
    };

    const handleViewLandlord = (id) => {
        navigate(`/admin/landlords/${id}`);
    };

    const handleWizardSubmit = (formData) => {
        const newLandlord = { 
            id: Date.now(), 
            ...formData, 
            propertiesOwned: 0, 
            status: 'Active',
            avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/89.jpg' 
        };
        setLandlords(prev => [newLandlord, ...prev]);
    };

    const openDeleteModal = (id) => {
        setDeletingLandlordId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setLandlords(prev => prev.filter(l => l.id !== deletingLandlordId));
        setDeleteModalOpen(false);
        setDeletingLandlordId(null);
    };

    return (
        <AdminPageLayout title="Landlords" actionButton="Add Landlord" onActionClick={() => setWizardOpen(true)}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Contact</th>
                            <th className="p-3 font-semibold">Properties Owned</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {landlords.map((landlord) => (
                            <tr key={landlord.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => handleViewLandlord(landlord.id)}>
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <img src={landlord.avatar} alt={landlord.name} className="w-10 h-10 rounded-full object-cover" />
                                        <span className="font-medium text-secondary-900">{landlord.name}</span>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <p className="text-secondary-800">{landlord.email}</p>
                                    <p className="text-secondary-500 text-xs">{landlord.phone}</p>
                                </td>
                                <td className="p-3 text-secondary-700 font-medium">{landlord.propertiesOwned}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(landlord.status)}`}>
                                        {landlord.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={(e) => { e.stopPropagation(); handleViewLandlord(landlord.id); }} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                        <button onClick={(e) => { e.stopPropagation(); alert("Edit functionality to be implemented"); }} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button onClick={(e) => { e.stopPropagation(); openDeleteModal(landlord.id); }} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddUserWizard
                isOpen={isWizardOpen}
                onClose={() => setWizardOpen(false)}
                onSubmit={handleWizardSubmit}
                userType="Landlord"
            />
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Landlord"
                message="Are you sure you want to delete this landlord? This action cannot be undone."
            />
        </AdminPageLayout>
    );
};

export default LandlordsList;

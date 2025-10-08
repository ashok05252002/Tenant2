import React, { useState } from 'react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { mockVendorTechnicians } from '../data/vendorTechnicians';
import { Edit, Trash2 } from 'lucide-react';
import TechnicianModal from '../components/TechnicianModal';

const VendorTechnicians = () => {
    const [technicians, setTechnicians] = useState(mockVendorTechnicians);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingTechnician, setEditingTechnician] = useState(null);

    const handleOpenModal = (tech = null) => {
        setEditingTechnician(tech);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingTechnician) {
            setTechnicians(prev => prev.map(t => t.id === editingTechnician.id ? { ...t, ...formData } : t));
        } else {
            const newTech = { id: Date.now(), ...formData, avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/8.jpg' };
            setTechnicians(prev => [newTech, ...prev]);
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Available': return 'bg-green-100 text-green-700';
            case 'On Job': return 'bg-blue-100 text-blue-700';
            case 'Unavailable': return 'bg-secondary-100 text-secondary-700';
            default: return 'bg-secondary-100 text-secondary-700';
        }
    };

    return (
        <AdminPageLayout title="My Technicians" actionButton="Add Technician" onActionClick={() => handleOpenModal()}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Specialty</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technicians.map((tech) => (
                            <tr key={tech.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <img src={tech.avatar} alt={tech.name} className="w-10 h-10 rounded-full object-cover" />
                                        <span className="font-medium text-secondary-900">{tech.name}</span>
                                    </div>
                                </td>
                                <td className="p-3 text-secondary-700">{tech.specialty}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(tech.status)}`}>
                                        {tech.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleOpenModal(tech)} className="p-1.5 text-secondary-500 hover:text-orange-600"><Edit size={16} /></button>
                                        <button className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <TechnicianModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                technician={editingTechnician}
            />
        </AdminPageLayout>
    );
};

export default VendorTechnicians;

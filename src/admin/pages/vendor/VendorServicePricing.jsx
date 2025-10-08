import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockServicePricing } from '../../data/servicePricing';
import { Edit, Trash2, Check, X } from 'lucide-react';
import ServicePricingModal from '../../components/service/ServicePricingModal';

const VendorServicePricing = () => {
    const [prices, setPrices] = useState(mockServicePricing);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    
    const handleOpenModal = (service = null) => {
        setEditingService(service);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingService) {
            setPrices(prev => prev.map(p => p.id === editingService.id ? { ...p, ...formData } : p));
        } else {
            const newService = { id: Date.now(), ...formData, status: 'pending' };
            setPrices(prev => [newService, ...prev]);
        }
    };

    return (
        <AdminPageLayout title="Service Pricing" actionButton="Add Service" onActionClick={() => handleOpenModal()}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Service Name</th>
                            <th className="p-3 font-semibold">Price (OMR)</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prices.map((service) => (
                            <tr key={service.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium">{service.name}</td>
                                <td className="p-3 font-medium">{service.price.toFixed(2)}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${service.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {service.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        {service.status === 'pending' && <button className="p-1.5 text-green-600 hover:bg-green-100 rounded-full"><Check size={16} /></button>}
                                        <button onClick={() => handleOpenModal(service)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ServicePricingModal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                service={editingService}
            />
        </AdminPageLayout>
    );
};

export default VendorServicePricing;

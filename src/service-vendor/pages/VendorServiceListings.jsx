import React, { useState } from 'react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { mockVendorServices } from '../data/vendorServices';
import { Edit, Trash2 } from 'lucide-react';
import Switch from '../../admin/components/ui/Switch';
import ServiceListingModal from '../components/ServiceListingModal';
import { useServiceVendor } from '../context/ServiceVendorContext';

const VendorServiceListings = () => {
    const [services, setServices] = useState(mockVendorServices);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const { handleGatedAction } = useServiceVendor();

    const handleOpenModal = (service = null) => {
        handleGatedAction(() => {
            setEditingService(service);
            setModalOpen(true);
        });
    };

    const handleModalSubmit = (formData) => {
        if (editingService) {
            setServices(prev => prev.map(s => s.id === editingService.id ? { ...s, ...formData } : s));
        } else {
            const newService = { id: Date.now(), ...formData, available: true };
            setServices(prev => [newService, ...prev]);
        }
    };

    const handleAvailabilityChange = (id) => {
        setServices(prev =>
            prev.map(s => s.id === id ? { ...s, available: !s.available } : s)
        );
    };

    return (
        <AdminPageLayout title="My Service Listings" actionButton="Add Service" onActionClick={() => handleOpenModal()}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Service Name</th>
                            <th className="p-3 font-semibold">Price (OMR)</th>
                            <th className="p-3 font-semibold">Availability</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium">{service.name}</td>
                                <td className="p-3">{service.price.toFixed(2)}</td>
                                <td className="p-3">
                                    <Switch 
                                        checked={service.available} 
                                        onChange={() => handleAvailabilityChange(service.id)} 
                                    />
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleOpenModal(service)} className="p-1.5 text-secondary-500 hover:text-orange-600"><Edit size={16} /></button>
                                        <button className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ServiceListingModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                service={editingService}
            />
        </AdminPageLayout>
    );
};

export default VendorServiceListings;

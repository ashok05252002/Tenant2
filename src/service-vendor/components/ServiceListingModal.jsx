import React, { useState, useEffect } from 'react';
import { X, Plus, Edit, DollarSign } from 'lucide-react';

const ServiceListingModal = ({ isOpen, onClose, onSubmit, service }) => {
    const [formData, setFormData] = useState({ name: '', price: '', description: '', areas: '', available: true });

    useEffect(() => {
        if (service) {
            setFormData(service);
        } else {
            setFormData({ name: '', price: '', description: '', areas: '', available: true });
        }
    }, [service, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, price: parseFloat(formData.price) });
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const isEditing = !!service;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? 'Edit Service' : 'Add New Service'}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Service Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Price (OMR)</label>
                        <div className="relative">
                            <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                            <input type="number" name="price" value={formData.price} onChange={handleInputChange} step="0.01" required className="w-full p-2 pl-9 border rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" className="w-full p-2 border rounded-lg"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Areas Served</label>
                        <input type="text" name="areas" value={formData.areas} onChange={handleInputChange} placeholder="e.g., Muscat, Al Khuwair, Bawshar" className="w-full p-2 border rounded-lg" />
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="available" id="available" checked={formData.available} onChange={handleInputChange} className="h-4 w-4 text-orange-600" />
                        <label htmlFor="available" className="text-sm font-medium text-secondary-700">Service is currently available</label>
                    </div>
                </form>
                <div className="p-4 flex justify-end bg-secondary-50 border-t">
                    <button onClick={handleSubmit} className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium text-sm">
                        {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                        {isEditing ? 'Save Service' : 'Add Service'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceListingModal;

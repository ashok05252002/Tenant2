import React, { useState } from 'react';
import { X, Filter, RotateCcw } from 'lucide-react';

const UserFilterModal = ({ isOpen, onClose, onApply, onReset }) => {
    const initialFilters = {
        status: 'all',
        kycStatus: 'all',
        property: '',
    };
    const [filters, setFilters] = useState(initialFilters);

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleApply = () => {
        onApply(filters);
        onClose();
    };

    const handleReset = () => {
        setFilters(initialFilters);
        onReset();
        onApply(initialFilters);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
                        <Filter size={20} /> Filter Tenants
                    </h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Status</label>
                            <select name="status" value={filters.status} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg text-sm">
                                <option value="all">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Evicted">Evicted</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">KYC Status</label>
                            <select name="kycStatus" value={filters.kycStatus} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg text-sm">
                                <option value="all">All KYC Statuses</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Property</label>
                        <input type="text" name="property" value={filters.property} onChange={handleInputChange} placeholder="Enter property name or ID" className="w-full p-2 border border-secondary-300 rounded-lg text-sm" />
                    </div>
                </div>
                <div className="p-4 flex justify-end gap-3 bg-secondary-50 border-t">
                    <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 bg-secondary-200 text-secondary-800 rounded-lg hover:bg-secondary-300 font-medium text-sm">
                        <RotateCcw size={16} /> Reset Filters
                    </button>
                    <button onClick={handleApply} className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                        <Filter size={16} /> Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserFilterModal;

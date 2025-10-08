import React, { useState } from 'react';
import { X, Filter, RotateCcw } from 'lucide-react';
import { projects } from '../../data/projects';
import { mockLandlords } from '../../data/users';
import { mockBrokers } from '../../../customer/data/brokers';
import { bedroomTypes, bathroomTypes } from '../../data/masters';

const AdvancedFilterModal = ({ isOpen, onClose, onApply, onReset }) => {
    const initialFilters = {
        status: 'all',
        project: 'all',
        landlord: 'all',
        broker: 'all',
        bedrooms: 'all',
        bathrooms: 'all',
        minRent: '',
        maxRent: '',
        startDate: '',
        endDate: '',
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
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
                        <Filter size={20} /> Advanced Filters
                    </h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Status & Project */}
                        <FilterSelect label="Status" name="status" value={filters.status} onChange={handleInputChange} options={['all', 'Occupied', 'Vacant', 'Assigned']} />
                        <FilterSelect label="Project" name="project" value={filters.project} onChange={handleInputChange} options={['all', ...projects.map(p => p.name)]} />
                        {/* Landlord & Broker */}
                        <FilterSelect label="Landlord" name="landlord" value={filters.landlord} onChange={handleInputChange} options={['all', ...mockLandlords.map(l => l.name)]} />
                        <FilterSelect label="Broker" name="broker" value={filters.broker} onChange={handleInputChange} options={['all', ...mockBrokers.map(b => b.name)]} />
                        {/* Bedrooms & Bathrooms */}
                        <FilterSelect label="Bedrooms" name="bedrooms" value={filters.bedrooms} onChange={handleInputChange} options={['all', ...bedroomTypes.map(b => b.name)]} />
                        <FilterSelect label="Bathrooms" name="bathrooms" value={filters.bathrooms} onChange={handleInputChange} options={['all', ...bathroomTypes.map(b => b.name)]} />
                    </div>
                    {/* Rent Range */}
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Rent Range (OMR/month)</label>
                        <div className="flex items-center gap-2">
                            <input type="number" name="minRent" value={filters.minRent} onChange={handleInputChange} placeholder="Min" className="w-full p-2 border border-secondary-300 rounded-lg text-sm" />
                            <span>-</span>
                            <input type="number" name="maxRent" value={filters.maxRent} onChange={handleInputChange} placeholder="Max" className="w-full p-2 border border-secondary-300 rounded-lg text-sm" />
                        </div>
                    </div>
                    {/* Date Range */}
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Application Date</label>
                        <div className="flex items-center gap-2">
                            <input type="date" name="startDate" value={filters.startDate} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg text-sm" />
                            <span>-</span>
                            <input type="date" name="endDate" value={filters.endDate} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg text-sm" />
                        </div>
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

const FilterSelect = ({ label, name, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-medium text-secondary-700 mb-1">{label}</label>
        <select name={name} value={value} onChange={onChange} className="w-full p-2 border border-secondary-300 rounded-lg text-sm">
            {options.map(opt => (
                <option key={opt} value={opt}>{opt === 'all' ? `All ${label}s` : opt}</option>
            ))}
        </select>
    </div>
);

export default AdvancedFilterModal;

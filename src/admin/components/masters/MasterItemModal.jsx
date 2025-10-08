import React, { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';
import IconPicker from './IconPicker';
import { availableIcons } from '../../data/masters';

const MasterItemModal = ({ isOpen, onClose, onSubmit, item, title }) => {
    const [formData, setFormData] = useState({ name: '', icon: '' });

    useEffect(() => {
        if (item) {
            setFormData({ name: item.name, icon: item.icon });
        } else {
            setFormData({ name: '', icon: availableIcons[0] });
        }
    }, [item, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    const isEditing = !!item;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? `Edit ${title}` : `Add New ${title}`}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full p-2 border border-secondary-300 rounded-lg"
                            required
                        />
                    </div>
                    <IconPicker
                        availableIcons={availableIcons}
                        selectedIcon={formData.icon}
                        onSelect={(icon) => setFormData(prev => ({ ...prev, icon }))}
                    />
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                            {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                            {isEditing ? 'Save Changes' : `Add ${title}`}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MasterItemModal;

import React, { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';

const CommissionModelModal = ({ isOpen, onClose, onSubmit, model }) => {
    const [formData, setFormData] = useState({ name: '', description: '', type: 'Percentage', value: '' });

    useEffect(() => {
        if (model) {
            setFormData(model);
        } else {
            setFormData({ name: '', description: '', type: 'Percentage', value: '' });
        }
    }, [model, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, value: parseFloat(formData.value) });
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isEditing = !!model;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? 'Edit Commission Model' : 'Add New Commission Model'}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Model Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border border-secondary-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleInputChange} rows="2" className="w-full p-2 border border-secondary-300 rounded-lg"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Commission Type</label>
                            <select name="type" value={formData.type} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg">
                                <option value="Percentage">Percentage (%)</option>
                                <option value="Fixed">Fixed (OMR)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Value</label>
                            <input type="number" name="value" value={formData.value} onChange={handleInputChange} step="0.01" required className="w-full p-2 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                            {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                            {isEditing ? 'Save Changes' : 'Add Model'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommissionModelModal;

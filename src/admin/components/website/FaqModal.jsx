import React, { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';

const FaqModal = ({ isOpen, onClose, onSubmit, faq }) => {
    const [formData, setFormData] = useState({ q: '', a: '' });

    useEffect(() => {
        if (faq) {
            setFormData({ q: faq.q, a: faq.a });
        } else {
            setFormData({ q: '', a: '' });
        }
    }, [faq, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    const isEditing = !!faq;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? 'Edit FAQ' : 'Add New FAQ'}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Question</label>
                        <input
                            type="text"
                            value={formData.q}
                            onChange={(e) => setFormData(prev => ({ ...prev, q: e.target.value }))}
                            className="w-full p-2 border border-secondary-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Answer</label>
                        <textarea
                            rows="4"
                            value={formData.a}
                            onChange={(e) => setFormData(prev => ({ ...prev, a: e.target.value }))}
                            className="w-full p-2 border border-secondary-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                            {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                            {isEditing ? 'Save Changes' : 'Add FAQ'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FaqModal;

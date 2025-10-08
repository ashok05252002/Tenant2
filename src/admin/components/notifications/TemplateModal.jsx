import React, { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';

const TemplateModal = ({ isOpen, onClose, onSubmit, template }) => {
    const [formData, setFormData] = useState({ name: '', type: 'Email', trigger: '', subject: '', body: '' });

    useEffect(() => {
        if (template) {
            setFormData(template);
        } else {
            setFormData({ name: '', type: 'Email', trigger: '', subject: '', body: '' });
        }
    }, [template, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isEditing = !!template;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? 'Edit Template' : 'Add New Template'}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Template Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Type</label>
                            <select name="type" value={formData.type} onChange={handleInputChange} className="w-full p-2 border rounded-lg">
                                <option>Email</option>
                                <option>SMS</option>
                                <option>In-App</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Trigger</label>
                        <input type="text" name="trigger" value={formData.trigger} onChange={handleInputChange} placeholder="e.g., New User Registration" required className="w-full p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Subject / Title</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Body</label>
                        <textarea name="body" value={formData.body} onChange={handleInputChange} rows="5" required className="w-full p-2 border rounded-lg"></textarea>
                        <p className="text-xs text-secondary-500 mt-1">Use placeholders like `{{userName}}` or `{{propertyName}}`.</p>
                    </div>
                </form>
                <div className="p-4 flex justify-end bg-secondary-50 border-t">
                    <button onClick={handleSubmit} className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                        {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                        {isEditing ? 'Save Template' : 'Create Template'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TemplateModal;

import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, user, onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || ''
            });
        }
    }, [user, isOpen]);

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-secondary-900">Edit Profile</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium">
                            <Save size={18} /> Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;

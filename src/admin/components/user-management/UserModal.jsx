import React, { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';
import { mockRoles } from '../../data/roles';

const UserModal = ({ isOpen, onClose, onSubmit, user }) => {
    const [formData, setFormData] = useState({ name: '', email: '', role: '', status: 'Active' });

    useEffect(() => {
        if (user) {
            setFormData(user);
        } else {
            setFormData({ name: '', email: '', role: mockRoles[0]?.name || '', status: 'Active' });
        }
    }, [user, isOpen]);

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

    const isEditing = !!user;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? 'Edit User' : 'Add New User'}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border border-secondary-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Role</label>
                            <select name="role" value={formData.role} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg">
                                {mockRoles.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Status</label>
                            <select name="status" value={formData.status} onChange={handleInputChange} className="w-full p-2 border border-secondary-300 rounded-lg">
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                            {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                            {isEditing ? 'Save User' : 'Create User'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;

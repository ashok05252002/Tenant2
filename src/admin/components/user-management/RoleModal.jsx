import React, { useState, useEffect } from 'react';
import { X, Plus, Edit } from 'lucide-react';

const modules = [
    'Dashboard', 'People Management', 'Applications', 'Service Management', 'Modules', 
    'Reporting', 'User Management', 'Masters', 'Website Management', 'Settings'
];
const permissions = ['View', 'Create', 'Edit', 'Delete'];

const RoleModal = ({ isOpen, onClose, onSubmit, role }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [perms, setPerms] = useState({});

    useEffect(() => {
        if (role) {
            setName(role.name);
            setDescription(role.description);
            setPerms(role.permissions || {});
        } else {
            setName('');
            setDescription('');
            setPerms({});
        }
    }, [role, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, permissions: perms });
        onClose();
    };

    const handlePermissionChange = (module, permission) => {
        setPerms(prev => {
            const modulePerms = prev[module] || [];
            if (modulePerms.includes(permission)) {
                return { ...prev, [module]: modulePerms.filter(p => p !== permission) };
            } else {
                return { ...prev, [module]: [...modulePerms, permission] };
            }
        });
    };

    const isEditing = !!role;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">{isEditing ? 'Edit Role' : 'Add New Role'}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Role Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border border-secondary-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Description</label>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold text-secondary-800 mb-2">Permissions</h3>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="w-full text-sm">
                                <thead className="bg-secondary-50">
                                    <tr>
                                        <th className="p-2 text-left font-semibold">Module</th>
                                        {permissions.map(p => <th key={p} className="p-2 text-center font-semibold">{p}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {modules.map(module => (
                                        <tr key={module} className="border-t">
                                            <td className="p-2 font-medium">{module}</td>
                                            {permissions.map(p => (
                                                <td key={p} className="p-2 text-center">
                                                    <input 
                                                        type="checkbox" 
                                                        className="h-4 w-4 text-primary-600"
                                                        checked={perms[module]?.includes(p) || false}
                                                        onChange={() => handlePermissionChange(module, p)}
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
                <div className="p-4 flex justify-end bg-secondary-50 border-t">
                    <button onClick={handleSubmit} className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                        {isEditing ? <Edit size={16} /> : <Plus size={16} />}
                        {isEditing ? 'Save Role' : 'Create Role'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleModal;

import React, { useState, useMemo } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import Switch from '../ui/Switch';
import MasterItemModal from './MasterItemModal';
import ConfirmationModal from '../ui/ConfirmationModal';

const MasterPageLayout = ({ title, data: initialData, columns, singularName }) => {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingItemId, setDeletingItemId] = useState(null);

    const filteredData = useMemo(() => {
        return data.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [data, searchTerm, statusFilter]);

    const handleStatusChange = (id) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' } : item
            )
        );
    };

    const openDeleteModal = (id) => {
        setDeletingItemId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setData(prevData => prevData.filter(item => item.id !== deletingItemId));
        setDeleteModalOpen(false);
        setDeletingItemId(null);
    };

    const handleOpenModal = (item = null) => {
        setEditingItem(item);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingItem) {
            setData(prevData =>
                prevData.map(item =>
                    item.id === editingItem.id ? { ...item, ...formData } : item
                )
            );
        } else {
            const newItem = {
                id: data.length > 0 ? Math.max(...data.map(i => i.id)) + 1 : 1,
                ...formData,
                status: 'active'
            };
            setData(prevData => [newItem, ...prevData]);
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold text-secondary-900">{title}</h1>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="py-2 px-3 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <button
                        onClick={() => handleOpenModal()}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
                    >
                        <Plus size={16} /> Add {singularName}
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} className="p-3 font-semibold">{col.header}</th>
                            ))}
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => {
                            const IconComponent = Icons[item.icon];
                            return (
                                <tr key={item.id} className="border-b border-secondary-100 last:border-0">
                                    {columns.map(col => (
                                        <td key={col.key} className="p-3">
                                            {col.key === 'icon' && IconComponent ? <IconComponent size={20} /> : item[col.key]}
                                        </td>
                                    ))}
                                    <td className="p-3">
                                        <Switch checked={item.status === 'active'} onChange={() => handleStatusChange(item.id)} />
                                    </td>
                                    <td className="p-3">
                                        <div className="flex gap-2">
                                            <button onClick={() => handleOpenModal(item)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                            <button onClick={() => openDeleteModal(item.id)} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <MasterItemModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                item={editingItem}
                title={singularName}
            />
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title={`Delete ${singularName}`}
                message={`Are you sure you want to delete this ${singularName.toLowerCase()}? This action cannot be undone.`}
            />
        </div>
    );
};

export default MasterPageLayout;

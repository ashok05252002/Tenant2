import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { DollarSign, Percent, Edit, Trash2 } from 'lucide-react';
import CommissionModelModal from '../../components/brokers/CommissionModelModal';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const mockCommissionModels = [
    { id: 1, name: 'Standard Rental Commission', type: 'Percentage', value: 5, description: 'Standard commission for all rental agreements.' },
    { id: 2, name: 'Premium Property Commission', type: 'Percentage', value: 7.5, description: 'Higher commission for luxury or high-value properties.' },
    { id: 3, name: 'Fixed Fee - New Tenant', type: 'Fixed', value: 100, description: 'A fixed fee for sourcing a new tenant, regardless of rent.' },
];

const CommissionModels = () => {
    const [models, setModels] = useState(mockCommissionModels);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingModel, setEditingModel] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingModelId, setDeletingModelId] = useState(null);

    const handleOpenModal = (model = null) => {
        setEditingModel(model);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingModel) {
            setModels(prev => prev.map(m => m.id === editingModel.id ? { ...m, ...formData } : m));
        } else {
            const newModel = { id: Date.now(), ...formData };
            setModels(prev => [newModel, ...prev]);
        }
    };

    const openDeleteModal = (id) => {
        setDeletingModelId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setModels(prev => prev.filter(m => m.id !== deletingModelId));
        setDeleteModalOpen(false);
        setDeletingModelId(null);
    };

    return (
        <AdminPageLayout title="Commission Models" actionButton="Add New Model" onActionClick={() => handleOpenModal()}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map(model => (
                    <div key={model.id} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                                    {model.type === 'Percentage' ? <Percent size={20} /> : <DollarSign size={20} />}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-900">{model.name}</h3>
                                    <p className="text-sm text-primary-600 font-bold">
                                        {model.type === 'Percentage' ? `${model.value}%` : `OMR ${model.value}`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={() => handleOpenModal(model)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                <button onClick={() => openDeleteModal(model.id)} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <p className="text-sm text-secondary-600 mt-4">{model.description}</p>
                    </div>
                ))}
            </div>
            <CommissionModelModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                model={editingModel}
            />
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Commission Model"
                message="Are you sure you want to delete this commission model?"
            />
        </AdminPageLayout>
    );
};

export default CommissionModels;

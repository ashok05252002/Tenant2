import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockNotificationTemplates } from '../../data/notifications';
import { Edit, Trash2, Mail, MessageSquare, Bell } from 'lucide-react';
import TemplateModal from '../../components/notifications/TemplateModal';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const NotificationTemplates = () => {
    const [templates, setTemplates] = useState(mockNotificationTemplates);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingTemplateId, setDeletingTemplateId] = useState(null);

    const handleOpenModal = (template = null) => {
        setEditingTemplate(template);
        setModalOpen(true);
    };

    const handleModalSubmit = (formData) => {
        if (editingTemplate) {
            setTemplates(prev => prev.map(t => t.id === editingTemplate.id ? { ...t, ...formData } : t));
        } else {
            const newTemplate = { id: Date.now(), ...formData };
            setTemplates(prev => [newTemplate, ...prev]);
        }
    };

    const openDeleteModal = (id) => {
        setDeletingTemplateId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setTemplates(prev => prev.filter(t => t.id !== deletingTemplateId));
        setDeleteModalOpen(false);
        setDeletingTemplateId(null);
    };

    const getIcon = (type) => {
        if (type === 'Email') return <Mail size={18} />;
        if (type === 'SMS') return <MessageSquare size={18} />;
        return <Bell size={18} />;
    };

    return (
        <AdminPageLayout title="Notification Templates" actionButton="Add Template" onActionClick={() => handleOpenModal()}>
            <div className="space-y-6">
                {templates.map(template => (
                    <div key={template.id} className="bg-white p-6 rounded-xl shadow-sm border">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center">
                                    {getIcon(template.type)}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-900">{template.name}</h3>
                                    <p className="text-sm text-secondary-500">{template.type} | Trigger: {template.trigger}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={() => handleOpenModal(template)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                <button onClick={() => openDeleteModal(template.id)} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-secondary-50 rounded-lg">
                            <p className="text-sm font-medium text-secondary-800">{template.subject}</p>
                            <p className="text-sm text-secondary-600 truncate">{template.body}</p>
                        </div>
                    </div>
                ))}
            </div>
            <TemplateModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                template={editingTemplate}
            />
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Template"
                message="Are you sure you want to delete this notification template?"
            />
        </AdminPageLayout>
    );
};

export default NotificationTemplates;

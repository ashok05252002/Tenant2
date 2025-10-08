import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Edit, Trash2 } from 'lucide-react';
import FaqModal from '../../components/website/FaqModal';

const initialFaqs = [
  { id: 1, q: 'How do I apply for a property?', a: 'You can apply directly through the property listing page by clicking the "Apply" button. You will need to have a completed profile to submit an application.' },
  { id: 2, q: 'What documents are required for verification?', a: 'Typically, we require a copy of your Passport/Civil ID, Visa/Residence Card, a recent salary slip, and a bank statement. All documents can be uploaded securely through your profile.' },
  { id: 3, q: 'Can I schedule a viewing before applying?', a: 'Yes! You can schedule a viewing for any available property directly from its detail page. Choose a suitable date and time from the calendar.' },
  { id: 4, q: 'How is the lease agreement signed?', a: 'Once your application is approved, the lease agreement will be sent to you for digital signature through our secure portal. No printing required!' },
];

const FaqManagement = () => {
    const [faqs, setFaqs] = useState(initialFaqs);
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingFaq, setEditingFaq] = useState(null);

    const handleOpenModal = (faq = null) => {
        setEditingFaq(faq);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        setFaqs(prev => prev.filter(f => f.id !== id));
    };

    const handleModalSubmit = (formData) => {
        if (editingFaq) {
            setFaqs(prev => prev.map(f => f.id === editingFaq.id ? { ...f, ...formData } : f));
        } else {
            const newFaq = { id: Date.now(), ...formData };
            setFaqs(prev => [newFaq, ...prev]);
        }
    };

    return (
        <AdminPageLayout title="FAQ Management" actionButton="Add FAQ" onActionClick={() => handleOpenModal()}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200">
                <div className="space-y-2 p-4">
                    {faqs.map(faq => (
                        <div key={faq.id} className="p-4 border-b last:border-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold text-secondary-800">{faq.q}</h4>
                                    <p className="text-sm text-secondary-600 mt-1">{faq.a}</p>
                                </div>
                                <div className="flex gap-2 flex-shrink-0 ml-4">
                                    <button onClick={() => handleOpenModal(faq)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                    <button onClick={() => handleDelete(faq.id)} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FaqModal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
                faq={editingFaq}
            />
        </AdminPageLayout>
    );
};

export default FaqManagement;

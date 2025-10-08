import React, { useState } from 'react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { mockVendorFeedback } from '../data/vendorFeedback';
import { Star, MessageSquare } from 'lucide-react';
import FeedbackResponseModal from '../components/FeedbackResponseModal';

const VendorFeedback = () => {
    const [feedbackList, setFeedbackList] = useState(mockVendorFeedback);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    const handleOpenModal = (feedback) => {
        setSelectedFeedback(feedback);
        setModalOpen(true);
    };

    const handleResponseSubmit = (response) => {
        setFeedbackList(prev => 
            prev.map(fb => fb.id === selectedFeedback.id ? { ...fb, response } : fb)
        );
        setModalOpen(false);
    };

    return (
        <>
            <AdminPageLayout title="Feedback & Ratings">
                <div className="space-y-6">
                    {feedbackList.map(feedback => (
                        <div key={feedback.id} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-secondary-800">{feedback.tenantName} - {feedback.property}</p>
                                    <p className="text-sm text-secondary-500">{feedback.date}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold text-orange-500">{feedback.rating.toFixed(1)}</span>
                                    <Star size={16} className="text-orange-500 fill-current" />
                                </div>
                            </div>
                            <p className="text-secondary-600 italic mt-4">"{feedback.comment}"</p>
                            
                            {feedback.response ? (
                                <div className="mt-4 pt-4 border-t border-secondary-100">
                                    <h4 className="text-sm font-semibold text-secondary-700 mb-2">Your Response:</h4>
                                    <p className="text-sm text-secondary-600 bg-secondary-50 p-3 rounded-lg">{feedback.response}</p>
                                </div>
                            ) : (
                                <div className="mt-4 pt-4 border-t border-secondary-100 flex justify-end">
                                    <button 
                                        onClick={() => handleOpenModal(feedback)}
                                        className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1.5 rounded-md hover:bg-orange-200"
                                    >
                                        <MessageSquare size={14} /> Respond
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </AdminPageLayout>
            <FeedbackResponseModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleResponseSubmit}
                feedback={selectedFeedback}
            />
        </>
    );
};

export default VendorFeedback;

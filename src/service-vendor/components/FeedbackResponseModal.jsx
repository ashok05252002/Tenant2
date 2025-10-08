import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const FeedbackResponseModal = ({ isOpen, onClose, onSubmit, feedback }) => {
    const [response, setResponse] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(response);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-secondary-900">Respond to Feedback</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="p-4 bg-secondary-50 rounded-lg">
                        <p className="text-sm font-medium text-secondary-800">Feedback from {feedback.tenantName}:</p>
                        <p className="text-sm text-secondary-600 italic mt-1">"{feedback.comment}"</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Your Response</label>
                        <textarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            rows="4"
                            className="w-full p-3 border border-secondary-300 rounded-lg"
                            placeholder="Write your response here..."
                        ></textarea>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" disabled={!response} className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium disabled:opacity-50">
                            <Send size={18} /> Submit Response
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackResponseModal;

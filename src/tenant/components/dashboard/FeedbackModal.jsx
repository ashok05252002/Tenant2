import React, { useState } from 'react';
import { X, Send, Star } from 'lucide-react';

const FeedbackModal = ({ isOpen, onClose, onSubmit, propertyName }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ rating, comment, propertyName });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-secondary-900">Submit Feedback for {propertyName}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Overall Rating</label>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={24}
                                    className={`cursor-pointer transition-colors ${index < rating ? 'text-yellow-500 fill-current' : 'text-secondary-300'}`}
                                    onClick={() => setRating(index + 1)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Comments</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows="4"
                            className="w-full p-3 border border-secondary-300 rounded-lg"
                            placeholder="Share your experience with the property and landlord..."
                        ></textarea>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" disabled={rating === 0} className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium disabled:opacity-50">
                            <Send size={18} /> Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackModal;

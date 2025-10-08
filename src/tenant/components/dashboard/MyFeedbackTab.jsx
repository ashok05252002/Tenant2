import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const MyFeedbackTab = ({ feedback }) => {
    if (!feedback || feedback.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8 text-center">
                <h2 className="text-xl font-semibold text-secondary-900 mb-2">My Feedback</h2>
                <p className="text-secondary-600">You haven't submitted any feedback yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary-900">My Feedback</h2>
            {feedback.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold text-secondary-800">Feedback for {item.propertyName}</p>
                            <p className="text-xs text-secondary-500">{item.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-primary-600">{item.rating.toFixed(1)}</span>
                            <Star size={16} className="text-yellow-500 fill-current" />
                        </div>
                    </div>
                    <p className="text-sm text-secondary-700 mt-4 italic">"{item.comment}"</p>
                    
                    {item.response && (
                        <div className="mt-4 pt-4 border-t border-secondary-100">
                             <div className="flex items-center gap-2 text-sm font-semibold text-secondary-700 mb-2">
                                <MessageSquare size={16} />
                                <span>Response</span>
                            </div>
                            <p className="text-sm text-secondary-600 bg-secondary-50 p-3 rounded-lg">{item.response}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MyFeedbackTab;

import React from 'react';
import { Star } from 'lucide-react';

const FeedbackTab = ({ feedback }) => {
    if (!feedback || feedback.length === 0) {
        return <p className="text-secondary-600">No feedback available.</p>;
    }

    return (
        <div className="space-y-4">
            {feedback.map(item => (
                <div key={item.id} className="p-4 border border-secondary-200 rounded-lg bg-secondary-50">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold text-secondary-800">{item.tenantName} on {item.propertyName}</p>
                            <p className="text-xs text-secondary-500">{item.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-primary-600">{item.rating.toFixed(1)}</span>
                            <Star size={16} className="text-yellow-500 fill-current" />
                        </div>
                    </div>
                    <p className="text-sm text-secondary-700 mt-2 italic">"{item.comment}"</p>
                </div>
            ))}
        </div>
    );
};

export default FeedbackTab;

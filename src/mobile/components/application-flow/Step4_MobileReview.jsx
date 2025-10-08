import React from 'react';
import { CheckCircle } from 'lucide-react';

const Step4MobileReview = ({ onNext, formData }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold">Review Your Application</h2>
            <div className="p-4 bg-secondary-50 rounded-lg space-y-2 text-sm">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Applying for Property:</strong> #{formData.propertyId}</p>
            </div>
            <button onClick={() => onNext({ submitted: true })} className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-medium">
                Submit Application <CheckCircle size={16} />
            </button>
        </div>
    );
};

export default Step4MobileReview;

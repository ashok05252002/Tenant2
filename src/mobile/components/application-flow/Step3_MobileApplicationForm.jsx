import React from 'react';
import { ArrowRight } from 'lucide-react';

const Step3MobileApplicationForm = ({ onNext }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold">Application Details</h2>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Preferred Move-in Date</label>
                <input type="date" className="w-full p-3 border border-secondary-300 rounded-lg" />
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Employer</label>
                <input type="text" className="w-full p-3 border border-secondary-300 rounded-lg" />
            </div>
            <button onClick={() => onNext({ form: 'filled' })} className="w-full flex items-center justify-center gap-2 py-3 bg-primary-700 text-white rounded-lg font-medium">
                Continue <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default Step3MobileApplicationForm;

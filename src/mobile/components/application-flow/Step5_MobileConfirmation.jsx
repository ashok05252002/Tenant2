import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PartyPopper } from 'lucide-react';

const Step5MobileConfirmation = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center py-8">
            <PartyPopper size={48} className="mx-auto text-primary-700 mb-4" />
            <h2 className="text-xl font-bold">Application Submitted!</h2>
            <p className="text-secondary-600 mt-2">Thank you! You will be notified of the status shortly.</p>
            <button onClick={() => navigate('/mobile')} className="w-full mt-6 py-3 bg-primary-700 text-white rounded-lg font-medium">
                Back to Home
            </button>
        </div>
    );
};

export default Step5MobileConfirmation;

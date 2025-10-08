import React from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PartyPopper from '../animations/PartyPopper';

const Step6Confirmation = ({ formData }) => {
    const navigate = useNavigate();
    return (
        <div className="text-center relative">
            <PartyPopper />
            <h2 className="text-3xl font-bold text-green-600 mb-4">Application Received!</h2>
            <p className="text-secondary-700 mb-6">
                Thank you, {formData.name}. Your application has been submitted for review. 
                If approved, you will receive an email with credentials and instructions to access your dedicated tenant portal.
            </p>
            
            <div className="flex justify-center">
                <button 
                    onClick={() => navigate('/')} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-700 text-white rounded-lg font-medium max-w-xs"
                >
                    <Home size={18} /> Return to Home
                </button>
            </div>
        </div>
    );
};

export default Step6Confirmation;

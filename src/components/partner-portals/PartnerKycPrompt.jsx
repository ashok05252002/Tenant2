import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';

const PartnerKycPrompt = ({ userType }) => {
    const navigate = useNavigate();
    const basePath = userType.toLowerCase();

    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <ShieldAlert className="h-6 w-6 text-yellow-500 mr-3" />
                    <div>
                        <h3 className="font-bold text-yellow-800">Verification Required</h3>
                        <p className="text-sm text-yellow-700">Please complete your KYC to list properties and access all features.</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate(`/${basePath}/kyc`)}
                    className="flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-800"
                >
                    Verify Now <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default PartnerKycPrompt;

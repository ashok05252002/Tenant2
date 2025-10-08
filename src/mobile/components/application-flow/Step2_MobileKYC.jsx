import React from 'react';
import { ArrowRight, Upload } from 'lucide-react';

const Step2MobileKYC = ({ onNext }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold">KYC Verification</h2>
            <p className="text-sm text-secondary-600">Please upload your National ID (front and back).</p>
            <div className="p-6 border-2 border-dashed rounded-lg text-center">
                <Upload size={32} className="mx-auto text-secondary-400 mb-2" />
                <p>Upload Front</p>
            </div>
            <div className="p-6 border-2 border-dashed rounded-lg text-center">
                <Upload size={32} className="mx-auto text-secondary-400 mb-2" />
                <p>Upload Back</p>
            </div>
            <button onClick={() => onNext({ kyc: 'submitted' })} className="w-full flex items-center justify-center gap-2 py-3 bg-primary-700 text-white rounded-lg font-medium">
                Continue <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default Step2MobileKYC;

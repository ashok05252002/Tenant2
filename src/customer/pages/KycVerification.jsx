import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CustomerLayout from '../components/CustomerLayout';
import DocumentUpload from '../components/kyc/DocumentUpload';
import { ShieldCheck, Check } from 'lucide-react';

const KycVerification = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useAuth();
    const [agreed, setAgreed] = useState(false);
    const [documents, setDocuments] = useState({
        residentIdFront: null,
        residentIdBack: null,
        passport: null,
        photo: null,
        bankStatement: null,
        utilityBill: null,
    });

    const handleFileChange = (key, file) => {
        setDocuments(prev => ({ ...prev, [key]: file }));
    };

    const handleSubmit = () => {
        // Mock submission
        console.log("Submitting KYC documents:", documents);
        updateUser({ kycStatus: 'in_progress' });
        
        // Simulate credit score check after KYC
        setTimeout(() => {
            updateUser({ kycStatus: 'completed', creditScore: 720 });
            navigate('/profile');
        }, 2000);
    };

    const isOmani = true; // This would be dynamic in a real app

    const allDocsUploaded = documents.residentIdFront &&
                            documents.residentIdBack &&
                            documents.photo &&
                            documents.bankStatement &&
                            documents.utilityBill &&
                            (isOmani || documents.passport);

    return (
        <CustomerLayout>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-8">
                    <ShieldCheck size={48} className="mx-auto text-primary-700 mb-4" />
                    <h1 className="text-3xl font-bold text-secondary-900">KYC Verification</h1>
                    <p className="text-secondary-600 mt-2">Securely verify your identity to apply for properties.</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8 space-y-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Mandatory Documents</h3>
                        <p className="text-sm text-secondary-500 mb-4">Please upload clear copies of the following documents.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DocumentUpload label="Resident ID (Front)" onUpload={(file) => handleFileChange('residentIdFront', file)} />
                            <DocumentUpload label="Resident ID (Back)" onUpload={(file) => handleFileChange('residentIdBack', file)} />
                            {!isOmani && <DocumentUpload label="Passport" onUpload={(file) => handleFileChange('passport', file)} />}
                            <DocumentUpload label="Personal Photo" onUpload={(file) => handleFileChange('photo', file)} />
                            <DocumentUpload label="Bank Statement" onUpload={(file) => handleFileChange('bankStatement', file)} />
                            <DocumentUpload label="Utility Bill" onUpload={(file) => handleFileChange('utilityBill', file)} />
                        </div>
                    </div>

                    <div className="pt-4 border-t">
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="terms-kyc"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="mt-1 w-4 h-4 text-primary-700 bg-secondary-100 border-secondary-300 rounded focus:ring-primary-700"
                            />
                            <label htmlFor="terms-kyc" className="text-sm text-secondary-700">
                                I accept the <a href="/terms" target="_blank" className="text-primary-700 underline">Terms & Conditions</a> and Oman tenancy regulations.
                            </label>
                        </div>
                    </div>
                    
                    <button
                        onClick={handleSubmit}
                        disabled={!agreed || !allDocsUploaded}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-medium disabled:opacity-50"
                    >
                        <Check size={20} /> Submit for Verification
                    </button>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default KycVerification;

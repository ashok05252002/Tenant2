import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShieldAlert } from 'lucide-react';

const PartnerKycPromptModal = ({ isOpen, onClose, userType }) => {
  const navigate = useNavigate();
  const basePath = userType.toLowerCase();

  if (!isOpen) return null;

  const handleNavigate = () => {
    onClose();
    navigate(`/${basePath}/kyc`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md text-center p-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center">
            <ShieldAlert size={32} />
          </div>
        </div>
        <h2 className="text-xl font-bold text-secondary-900 mb-2">
          KYC Verification Required
        </h2>
        <p className="text-secondary-600 mb-6">
          To perform this action, you must first complete your KYC verification.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleNavigate}
            className="flex-1 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium transition-colors"
          >
            Verify Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerKycPromptModal;

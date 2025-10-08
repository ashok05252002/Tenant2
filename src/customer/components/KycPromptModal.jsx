import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { X, ShieldAlert } from 'lucide-react';

const KycPromptModal = () => {
  const { kycPromptOpen, setKycPromptOpen } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!kycPromptOpen) return null;

  const handleNavigate = () => {
    setKycPromptOpen(false);
    navigate('/kyc-verification');
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
          {t('kyc.kycRequired')}
        </h2>
        <p className="text-secondary-600 mb-6">
          To apply for a property, you must first complete your profile and KYC verification. This is a required step for all rental applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setKycPromptOpen(false)}
            className="flex-1 px-4 py-3 bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 font-medium transition-colors"
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={handleNavigate}
            className="flex-1 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium transition-colors"
          >
            {t('kyc.getVerified')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycPromptModal;

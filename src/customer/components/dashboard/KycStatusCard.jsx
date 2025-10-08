import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, ShieldAlert, ArrowRight } from 'lucide-react';

const KycStatusCard = () => {
    const { user } = useAuth();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const kycStatus = user?.kycStatus || 'pending';

    if (kycStatus === 'completed') {
        return (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <ShieldCheck size={24} />
                    <div>
                        <h3 className="font-bold">{t('kyc.verification')} {t('kyc.complete')}</h3>
                        <p className="text-sm">You have full access to all features.</p>
                    </div>
                </div>
            </div>
        );
    }

    const progress = kycStatus === 'in_progress' ? 50 : 10;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
                    <ShieldAlert size={24} className="text-yellow-500" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary-900">{t('kyc.profileStatus')}</h3>
                    <p className="text-sm text-secondary-600 mb-4">{t('kyc.onboardingMessage')}</p>
                    
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-secondary-500">
                            <span>{t('kyc.profile')} & {t('kyc.verification')}</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => navigate('/kyc-verification')}
                className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
                {t('kyc.getVerified')} <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default KycStatusCard;

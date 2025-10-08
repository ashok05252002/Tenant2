import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Edit, ShieldCheck, ShieldAlert, ArrowRight } from 'lucide-react';

const PartnerProfileContent = ({ user, userType }) => {
    const navigate = useNavigate();
    const basePath = userType.toLowerCase();

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">My Profile</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-xl shadow-sm border p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Profile Details</h2>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary-700 bg-primary-100 rounded-lg hover:bg-primary-200">
                                <Edit size={16} /> Edit
                            </button>
                        </div>
                        <div className="space-y-4">
                            <InfoItem icon={User} label="Name" value={user.name} />
                            <InfoItem icon={Mail} label="Email" value={user.email} />
                            <InfoItem icon={Phone} label="Phone" value={user.phone} />
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <KycStatusCard status={user.kycStatus} onVerifyClick={() => navigate(`/${basePath}/kyc`)} />
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
        <Icon size={20} className="text-primary-700" />
        <div>
            <p className="text-sm text-secondary-500">{label}</p>
            <p className="font-medium text-secondary-800">{value}</p>
        </div>
    </div>
);

const KycStatusCard = ({ status, onVerifyClick }) => {
    if (status === 'completed') {
        return (
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                <ShieldCheck size={32} className="mx-auto text-green-500 mb-2" />
                <h3 className="font-bold text-green-800">KYC Verified</h3>
            </div>
        );
    }
    return (
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-center">
            <ShieldAlert size={32} className="mx-auto text-yellow-500 mb-2" />
            <h3 className="font-bold text-yellow-800">KYC Pending</h3>
            <p className="text-sm text-yellow-700 my-2">Complete verification to access all features.</p>
            <button onClick={onVerifyClick} className="flex items-center justify-center gap-1 mx-auto text-sm font-medium text-primary-700">
                Verify Now <ArrowRight size={14} />
            </button>
        </div>
    );
};

export default PartnerProfileContent;

import React from 'react';
import CreditScoreCard from '../../../customer/components/dashboard/CreditScoreCard';

const DetailItem = ({ label, value }) => (
    <div>
        <p className="text-xs text-secondary-500">{label}</p>
        <p className="font-medium text-secondary-800">{value || 'N/A'}</p>
    </div>
);

const AdminTenantFinancialsTab = ({ tenant }) => {
    const creditScore = tenant.creditScore || (tenant.kycStatus === 'Completed' ? 720 : null);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailItem label="KYC Status" value={tenant.kycStatus} />
            <DetailItem label="Application Status" value={tenant.applicationStatus} />
            {creditScore && (
                <div className="md:col-span-2">
                    <CreditScoreCard score={creditScore} />
                </div>
            )}
        </div>
    );
};

export default AdminTenantFinancialsTab;

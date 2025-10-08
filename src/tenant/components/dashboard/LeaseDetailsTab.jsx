import React from 'react';
import DocumentVault from './DocumentVault';
import { Calendar, FileText, Home } from 'lucide-react';

const DetailItem = ({ label, value, icon: Icon }) => (
    <div className="bg-secondary-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-secondary-500 text-sm">
            <Icon size={16} />
            <span>{label}</span>
        </div>
        <p className="font-bold text-secondary-900 text-lg mt-1">{value}</p>
    </div>
);

const LeaseDetailsTab = ({ leaseData, documents }) => {
    const { property, lease } = leaseData;

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">Lease Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <DetailItem label="Property" value={property.title} icon={Home} />
                    <DetailItem label="Lease Start Date" value={lease.startDate} icon={Calendar} />
                    <DetailItem label="Lease End Date" value={lease.endDate} icon={Calendar} />
                </div>
            </div>
            <DocumentVault documents={documents} />
        </div>
    );
};

export default LeaseDetailsTab;

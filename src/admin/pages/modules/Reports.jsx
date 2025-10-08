import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { FileText, Download } from 'lucide-react';

const ReportCard = ({ title, description, formats }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={20} />
            </div>
            <div>
                <h3 className="font-semibold text-secondary-900">{title}</h3>
                <p className="text-sm text-secondary-600 mt-1">{description}</p>
            </div>
        </div>
        <div className="mt-4 pt-4 border-t border-secondary-100 flex items-center justify-end gap-2">
            <span className="text-xs text-secondary-500">Export as:</span>
            {formats.map(format => (
                <button key={format} className="flex items-center gap-1 px-3 py-1 bg-secondary-200 text-secondary-700 rounded-md hover:bg-secondary-300 text-xs font-medium">
                    <Download size={12} /> {format}
                </button>
            ))}
        </div>
    </div>
);

const Reports = () => {
    const reports = [
        { title: 'Financial Report', description: 'Detailed report of all transactions, revenues, and payouts.', formats: ['CSV', 'PDF'] },
        { title: 'User Activity Report', description: 'Log of all user actions, logins, and profile changes.', formats: ['CSV'] },
        { title: 'Service Request Report', description: 'Comprehensive list of all maintenance and service requests with statuses.', formats: ['CSV', 'PDF'] },
        { title: 'Property Occupancy Report', description: 'Report on occupancy rates, vacant properties, and lease turnovers.', formats: ['PDF'] },
        { title: 'Compliance Report', description: 'Summary of KYC verifications and document compliance.', formats: ['PDF'] },
        { title: 'Broker Performance Report', description: 'Analytics on broker performance and commissions.', formats: ['CSV', 'PDF'] },
        { title: 'Broker Payout Report', description: 'Detailed report of all commission payouts to brokers.', formats: ['CSV'] },
    ];

    return (
        <AdminPageLayout title="Reporting">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map(report => (
                    <ReportCard key={report.title} {...report} />
                ))}
            </div>
        </AdminPageLayout>
    );
};

export default Reports;

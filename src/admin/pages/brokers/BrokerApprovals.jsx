import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockPartnerApplications } from '../../data/partnerApplications';
import { Check, X } from 'lucide-react';

const BrokerApprovals = () => {
    const [applications, setApplications] = useState(mockPartnerApplications.filter(app => app.type === 'Broker' && app.status === 'Pending'));

    const handleApprove = (id) => {
        setApplications(prev => prev.filter(app => app.id !== id));
        // In a real app, you'd also update the master list or backend
    };

    const handleReject = (id) => {
        setApplications(prev => prev.filter(app => app.id !== id));
    };

    return (
        <AdminPageLayout title="Broker Approvals">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Contact</th>
                            <th className="p-3 font-semibold">Submitted On</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-secondary-900">{app.name}</td>
                                <td className="p-3">
                                    <p>{app.email}</p>
                                    <p className="text-xs text-secondary-500">{app.phone}</p>
                                </td>
                                <td className="p-3 text-secondary-700">{app.submittedDate}</td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleApprove(app.id)} className="p-1.5 text-white bg-green-500 rounded-full hover:bg-green-600" title="Approve"><Check size={14} /></button>
                                        <button onClick={() => handleReject(app.id)} className="p-1.5 text-white bg-red-500 rounded-full hover:bg-red-600" title="Reject"><X size={14} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {applications.length === 0 && <p className="p-4 text-center text-secondary-500">No pending broker applications.</p>}
            </div>
        </AdminPageLayout>
    );
};

export default BrokerApprovals;

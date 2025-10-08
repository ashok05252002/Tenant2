import React, { useState, useEffect } from 'react';
import { mockOngoingApplications } from '../../admin/data/ongoingApplications';
import { Check, X, Clock, Loader } from 'lucide-react';

const LandlordApplications = () => {
    const [applications, setApplications] = useState(
        mockOngoingApplications.filter(app => app.status !== 'Completed')
    );

    const handleApprove = (id) => {
        const appIndex = applications.findIndex(app => app.id === id);
        if (appIndex === -1) return;

        // Set to "Approving" state
        setApplications(prev => prev.map(app => app.id === id ? { ...app, isApproving: true } : app));

        // Simulate auto-approval after 10 seconds
        setTimeout(() => {
            setApplications(prev => prev.map(app => app.id === id ? { ...app, status: 'Approved', isApproving: false } : app));
        }, 10000);
    };

    const getStatusBadge = (status) => {
        if (status === 'Approved') return 'bg-green-100 text-green-700';
        if (status.includes('Approval')) return 'bg-yellow-100 text-yellow-700';
        return 'bg-blue-100 text-blue-700';
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">Rental Applications</h1>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Applicant</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Credit Score</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium">{app.applicantName}</td>
                                <td className="p-3">{app.propertyName}</td>
                                <td className="p-3 font-medium">720</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(app.status)}`}>
                                        {app.isApproving ? 'Approving...' : app.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    {app.status.includes('Approval') && !app.isApproving && (
                                        <div className="flex gap-2">
                                            <button onClick={() => handleApprove(app.id)} className="p-1.5 text-white bg-green-500 rounded-full hover:bg-green-600" title="Approve">
                                                <Check size={14} />
                                            </button>
                                            <button className="p-1.5 text-white bg-red-500 rounded-full hover:bg-red-600" title="Reject">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    )}
                                    {app.isApproving && <Loader size={16} className="animate-spin text-primary-600" />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LandlordApplications;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../../admin/components/AdminPageLayout';
import { mockOngoingApplications } from '../../../admin/data/ongoingApplications';
import ApplicationProgressBar from '../../../admin/components/applications/ApplicationProgressBar';
import { Eye } from 'lucide-react';

const BrokerApplicationsStatus = () => {
    const navigate = useNavigate();

    const getStatusBadge = (status) => {
        if (status === 'Completed') return 'bg-green-100 text-green-700';
        if (status.includes('Approval')) return 'bg-yellow-100 text-yellow-700';
        return 'bg-blue-100 text-blue-700';
    };

    return (
        <AdminPageLayout title="All Applications">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Applicant</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Progress</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockOngoingApplications.map((app) => (
                            <tr key={app.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => navigate(`/broker/applications/${app.id}`)}>
                                <td className="p-3 font-medium text-secondary-900">{app.applicantName}</td>
                                <td className="p-3 text-secondary-700">{app.propertyName}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(app.status)}`}>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex items-center gap-2">
                                        <ApplicationProgressBar progress={app.progress} />
                                        <span className="text-xs font-medium text-secondary-600">{app.progress}%</span>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <button onClick={(e) => { e.stopPropagation(); navigate(`/broker/applications/${app.id}`); }} className="p-1.5 text-secondary-500 hover:text-blue-600">
                                        <Eye size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default BrokerApplicationsStatus;

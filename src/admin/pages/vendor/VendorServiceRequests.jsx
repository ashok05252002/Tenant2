import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockServiceRequests } from '../../data/serviceRequests';

const VendorServiceRequests = () => {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'In Progress': return 'bg-blue-100 text-blue-700';
            case 'Open': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-secondary-100 text-secondary-700';
        }
    };

    return (
        <AdminPageLayout title="Service Requests">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Request ID</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Tenant</th>
                            <th className="p-3 font-semibold">Service</th>
                            <th className="p-3 font-semibold">Assigned To</th>
                            <th className="p-3 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockServiceRequests.map((req) => (
                            <tr key={req.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-primary-600">{req.id}</td>
                                <td className="p-3 text-secondary-800">{req.property}</td>
                                <td className="p-3 text-secondary-700">{req.tenant}</td>
                                <td className="p-3 text-secondary-700">{req.service}</td>
                                <td className="p-3 text-secondary-700">{req.assignedTo || 'Unassigned'}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(req.status)}`}>
                                        {req.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default VendorServiceRequests;

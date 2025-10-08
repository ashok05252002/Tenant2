import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { vacatingRequestsData } from '../../data/vacatingRequests';
import { Check, X, Clock } from 'lucide-react';

const VacatingRequests = () => {
    const [requests, setRequests] = useState(vacatingRequestsData);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Approved':
                return 'bg-green-100 text-green-700';
            case 'Rejected':
                return 'bg-red-100 text-red-700';
            case 'Pending':
            default:
                return 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <AdminPageLayout title="Vacating Requests">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Tenant</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Vacate Date</th>
                            <th className="p-3 font-semibold">Reason</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => (
                            <tr key={req.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium">{req.tenantName}</td>
                                <td className="p-3">{req.property}</td>
                                <td className="p-3">{req.vacateDate}</td>
                                <td className="p-3 max-w-xs truncate">{req.reason}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(req.status)}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    {req.status === 'Pending' && (
                                        <div className="flex gap-2">
                                            <button className="p-1.5 text-white bg-green-500 rounded-full hover:bg-green-600"><Check size={14} /></button>
                                            <button className="p-1.5 text-white bg-red-500 rounded-full hover:bg-red-600"><X size={14} /></button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default VacatingRequests;

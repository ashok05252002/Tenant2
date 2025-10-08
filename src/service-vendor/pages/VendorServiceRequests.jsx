import React, { useState } from 'react';
import { mockVendorRequests } from '../data/vendorRequests';
import ServiceRequestDetailModal from '../components/ServiceRequestDetailModal';
import { Eye } from 'lucide-react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';

const VendorServiceRequests = () => {
    const [requests, setRequests] = useState(mockVendorRequests);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleViewRequest = (request) => {
        setSelectedRequest(request);
        setModalOpen(true);
    };

    const handleUpdateRequest = (updatedRequest) => {
        setRequests(prev => prev.map(r => r.id === updatedRequest.id ? updatedRequest : r));
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'In Progress': return 'bg-blue-100 text-blue-700';
            case 'Accepted': return 'bg-purple-100 text-purple-700';
            case 'Cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-yellow-100 text-yellow-700'; // New Request
        }
    };

    return (
        <AdminPageLayout title="Assigned Service Requests">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Request ID</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Service</th>
                            <th className="p-3 font-semibold">Date</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => (
                            <tr key={req.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-orange-600">{req.id}</td>
                                <td className="p-3 text-secondary-800">{req.property}</td>
                                <td className="p-3 text-secondary-700">{req.service}</td>
                                <td className="p-3 text-secondary-700">{req.date}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(req.status)}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <button onClick={() => handleViewRequest(req)} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedRequest && (
                <ServiceRequestDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    request={selectedRequest}
                    onUpdate={handleUpdateRequest}
                />
            )}
        </AdminPageLayout>
    );
};

export default VendorServiceRequests;

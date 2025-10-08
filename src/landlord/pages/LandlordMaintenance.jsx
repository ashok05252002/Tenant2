import React, { useState } from 'react';
import { mockServiceRequests } from '../../admin/data/serviceRequests';
import { Eye } from 'lucide-react';
import MaintenanceDetailModal from '../../admin/components/maintenance/MaintenanceDetailModal';

const LandlordMaintenance = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'In Progress': return 'bg-blue-100 text-blue-700';
            case 'Open': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-secondary-100 text-secondary-700';
        }
    };

    const handleViewRequest = (request) => {
        setSelectedRequest(request);
        setModalOpen(true);
    };

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold text-secondary-900 mb-6">Maintenance Requests</h1>
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary-50 text-left text-secondary-600">
                            <tr>
                                <th className="p-3 font-semibold">Request ID</th>
                                <th className="p-3 font-semibold">Property</th>
                                <th className="p-3 font-semibold">Service</th>
                                <th className="p-3 font-semibold">Assigned To</th>
                                <th className="p-3 font-semibold">Status</th>
                                <th className="p-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockServiceRequests.map((req) => (
                                <tr key={req.id} className="border-b border-secondary-100 last:border-0">
                                    <td className="p-3 font-medium text-purple-600">{req.id}</td>
                                    <td className="p-3 text-secondary-800">{req.property}</td>
                                    <td className="p-3 text-secondary-700">{req.service}</td>
                                    <td className="p-3 text-secondary-700">{req.assignedTo || 'Unassigned'}</td>
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
            </div>
            {selectedRequest && (
                <MaintenanceDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    request={selectedRequest}
                />
            )}
        </>
    );
};

export default LandlordMaintenance;

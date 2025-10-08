import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockAdminProperties } from '../../../data/properties';
import { Check, X, Eye } from 'lucide-react';
import PropertyApprovalModal from '../../components/properties/PropertyApprovalModal';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const PropertyApprovals = () => {
    const [applications, setApplications] = useState(mockAdminProperties.filter(p => p.status === 'Pending Approval'));
    const [isApprovalModalOpen, setApprovalModalOpen] = useState(false);
    const [isRejectModalOpen, setRejectModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleOpenApprovalModal = (property) => {
        setSelectedProperty(property);
        setApprovalModalOpen(true);
    };

    const handleOpenRejectModal = (property) => {
        setSelectedProperty(property);
        setRejectModalOpen(true);
    };

    const handleApprove = (finalPrice) => {
        console.log(`Approving ${selectedProperty.name} with price ${finalPrice}`);
        setApplications(prev => prev.filter(app => app.id !== selectedProperty.id));
        setApprovalModalOpen(false);
        setSelectedProperty(null);
    };

    const handleReject = () => {
        console.log(`Rejecting ${selectedProperty.name}`);
        setApplications(prev => prev.filter(app => app.id !== selectedProperty.id));
        setRejectModalOpen(false);
        setSelectedProperty(null);
    };

    return (
        <AdminPageLayout title="Property Approvals">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Property Name</th>
                            <th className="p-3 font-semibold">Submitted By</th>
                            <th className="p-3 font-semibold">Requested Price (OMR)</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((prop) => (
                            <tr key={prop.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-secondary-900">{prop.name}</td>
                                <td className="p-3 text-secondary-700">{prop.landlordId === 1 ? 'Abdullah Al-Said' : 'Fatima Al-Hinai'}</td>
                                <td className="p-3 font-medium">{prop.details.price}</td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleOpenApprovalModal(prop)} className="p-1.5 text-white bg-green-500 rounded-full hover:bg-green-600" title="Approve"><Check size={14} /></button>
                                        <button onClick={() => handleOpenRejectModal(prop)} className="p-1.5 text-white bg-red-500 rounded-full hover:bg-red-600" title="Reject"><X size={14} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {applications.length === 0 && <p className="p-4 text-center text-secondary-500">No pending property approvals.</p>}
            </div>

            {selectedProperty && (
                <>
                    <PropertyApprovalModal
                        isOpen={isApprovalModalOpen}
                        onClose={() => setApprovalModalOpen(false)}
                        onApprove={handleApprove}
                        property={selectedProperty}
                    />
                    <ConfirmationModal
                        isOpen={isRejectModalOpen}
                        onClose={() => setRejectModalOpen(false)}
                        onConfirm={handleReject}
                        title="Reject Property"
                        message={`Are you sure you want to reject the property "${selectedProperty.name}"?`}
                    />
                </>
            )}
        </AdminPageLayout>
    );
};

export default PropertyApprovals;

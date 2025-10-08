import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockLandlordPayouts } from '../../data/landlordPayouts';
import { CheckCircle, Clock } from 'lucide-react';
import PayoutModal from '../../components/invoicing/PayoutModal';

const LandlordPayouts = () => {
    const [payouts, setPayouts] = useState(mockLandlordPayouts);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPayout, setSelectedPayout] = useState(null);

    const handleOpenModal = (payout) => {
        setSelectedPayout(payout);
        setModalOpen(true);
    };

    const handleProcessPayout = (payoutData) => {
        console.log("Processing payout:", payoutData);
        setPayouts(prev =>
            prev.map(p => p.id === payoutData.id ? { ...p, status: 'Paid', date: new Date().toISOString().split('T')[0] } : p)
        );
        setModalOpen(false);
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-700';
            case 'Scheduled': return 'bg-blue-100 text-blue-700';
            default: return 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <AdminPageLayout title="Landlord Payouts">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Payout ID</th>
                            <th className="p-3 font-semibold">Landlord</th>
                            <th className="p-3 font-semibold">Amount (OMR)</th>
                            <th className="p-3 font-semibold">Payout Date</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payouts.map((payout) => (
                            <tr key={payout.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-primary-600">{payout.id}</td>
                                <td className="p-3 text-secondary-800">{payout.landlordName}</td>
                                <td className="p-3 font-medium">{payout.amount.toFixed(2)}</td>
                                <td className="p-3 text-secondary-700">{payout.date}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(payout.status)}`}>
                                        {payout.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    {payout.status === 'Scheduled' && (
                                        <button 
                                            onClick={() => handleOpenModal(payout)}
                                            className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md hover:bg-green-200"
                                        >
                                            <CheckCircle size={14} /> Process Payout
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedPayout && (
                <PayoutModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleProcessPayout}
                    payout={selectedPayout}
                />
            )}
        </AdminPageLayout>
    );
};

export default LandlordPayouts;

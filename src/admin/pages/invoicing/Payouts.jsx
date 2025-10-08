import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockLandlordPayouts } from '../../data/landlordPayouts';
import { mockBrokerActivity } from '../../data/brokerActivity';
import { CheckCircle, Clock } from 'lucide-react';
import PayoutModal from '../../components/invoicing/PayoutModal';

const Payouts = () => {
    const [payouts, setPayouts] = useState([
        ...mockLandlordPayouts.map(p => ({...p, type: 'Landlord'})),
        ...mockBrokerActivity.map(p => ({
            id: `B-${p.id}`,
            name: p.brokerName,
            amount: p.commission,
            date: new Date().toISOString().split('T')[0],
            status: p.payoutStatus,
            type: 'Broker'
        }))
    ]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPayout, setSelectedPayout] = useState(null);
    const [filter, setFilter] = useState('All');

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

    const filteredPayouts = filter === 'All' ? payouts : payouts.filter(p => p.type === filter);

    return (
        <AdminPageLayout title="Payouts">
            <div className="mb-4">
                <div className="flex gap-1 bg-secondary-100 p-1 rounded-lg w-max">
                    <button onClick={() => setFilter('All')} className={`px-4 py-1.5 text-sm rounded-md ${filter === 'All' ? 'bg-white shadow-sm' : ''}`}>All</button>
                    <button onClick={() => setFilter('Landlord')} className={`px-4 py-1.5 text-sm rounded-md ${filter === 'Landlord' ? 'bg-white shadow-sm' : ''}`}>Landlords</button>
                    <button onClick={() => setFilter('Broker')} className={`px-4 py-1.5 text-sm rounded-md ${filter === 'Broker' ? 'bg-white shadow-sm' : ''}`}>Brokers</button>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Payout ID / Type</th>
                            <th className="p-3 font-semibold">Recipient</th>
                            <th className="p-3 font-semibold">Amount (OMR)</th>
                            <th className="p-3 font-semibold">Payout Date</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayouts.map((payout) => (
                            <tr key={payout.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3">
                                    <p className="font-medium text-primary-600">{payout.id}</p>
                                    <p className="text-xs text-secondary-500">{payout.type}</p>
                                </td>
                                <td className="p-3 text-secondary-800">{payout.name || payout.landlordName}</td>
                                <td className="p-3 font-medium">{payout.amount.toFixed(2)}</td>
                                <td className="p-3 text-secondary-700">{payout.date}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(payout.status)}`}>
                                        {payout.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    {payout.status !== 'Paid' && (
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

export default Payouts;

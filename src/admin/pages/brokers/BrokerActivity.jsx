import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockBrokerActivity } from '../../data/brokerActivity';
import { CheckCircle, Clock } from 'lucide-react';

const BrokerActivity = () => {
    const [activity, setActivity] = useState(mockBrokerActivity);

    const handleMarkAsPaid = (id) => {
        setActivity(prev => 
            prev.map(item => item.id === id ? { ...item, payoutStatus: 'Paid' } : item)
        );
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-700';
            case 'Pending': default: return 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <AdminPageLayout title="Broker Activity & Payouts" actionButton="Process Payouts">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Broker</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Tenant</th>
                            <th className="p-3 font-semibold">Commission Earned (OMR)</th>
                            <th className="p-3 font-semibold">Payout Status</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activity.map((item) => (
                            <tr key={item.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-secondary-900">{item.brokerName}</td>
                                <td className="p-3 text-secondary-700">{item.property}</td>
                                <td className="p-3 text-secondary-700">{item.tenant}</td>
                                <td className="p-3 font-medium text-green-600">{item.commission.toFixed(2)}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(item.payoutStatus)}`}>
                                        {item.payoutStatus}
                                    </span>
                                </td>
                                <td className="p-3">
                                    {item.payoutStatus === 'Pending' && (
                                        <button 
                                            onClick={() => handleMarkAsPaid(item.id)}
                                            className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md hover:bg-green-200"
                                        >
                                            <CheckCircle size={14} /> Mark as Paid
                                        </button>
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

export default BrokerActivity;

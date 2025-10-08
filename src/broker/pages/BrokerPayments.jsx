import React from 'react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { mockBrokerPayments } from '../data/brokerPayments';
import { CheckCircle, Clock } from 'lucide-react';

const BrokerPayments = () => {
    return (
        <AdminPageLayout title="My Payments">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-secondary-600">Pending Payout</p>
                    <p className="text-3xl font-bold text-secondary-900">OMR 12,522.50</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <p className="text-sm text-secondary-600">Total Paid Out</p>
                    <p className="text-3xl font-bold text-secondary-900">OMR 97.50</p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Transaction ID</th>
                            <th className="p-3 font-semibold">Date</th>
                            <th className="p-3 font-semibold">Amount (OMR)</th>
                            <th className="p-3 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockBrokerPayments.map((payment) => (
                            <tr key={payment.id} className="border-b last:border-0">
                                <td className="p-3 font-medium text-green-600">{payment.id}</td>
                                <td className="p-3">{payment.date}</td>
                                <td className="p-3 font-medium">{payment.amount.toFixed(2)}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-max ${payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {payment.status === 'Paid' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                        {payment.status}
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

export default BrokerPayments;

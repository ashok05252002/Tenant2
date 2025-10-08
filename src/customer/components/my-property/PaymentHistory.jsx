import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

const PaymentHistory = ({ history }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-secondary-500 uppercase bg-secondary-50">
                        <tr>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Amount</th>
                            <th className="px-6 py-3">Method</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(payment => (
                            <tr key={payment.id} className="bg-white border-b last:border-b-0">
                                <td className="px-6 py-4 font-medium text-secondary-900">{payment.date}</td>
                                <td className="px-6 py-4">{payment.amount} OMR</td>
                                <td className="px-6 py-4">{payment.method}</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-1 text-green-600">
                                        <CheckCircle size={14} /> {payment.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-primary-600 hover:text-primary-700">
                                        <Download size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;

import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockVendorPayments } from '../../data/vendorPaymentsData';
import { CheckCircle, Clock } from 'lucide-react';

const VendorServicePayments = () => {
    const [payments, setPayments] = useState(mockVendorPayments);

    const handleMarkAsPaid = (id) => {
        setPayments(prev => 
            prev.map(p => p.id === id ? { ...p, status: 'Paid', paymentDate: new Date().toISOString().split('T')[0] } : p)
        );
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-700';
            case 'Pending': default: return 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <AdminPageLayout title="Vendor Payments">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Payment ID</th>
                            <th className="p-3 font-semibold">Vendor</th>
                            <th className="p-3 font-semibold">Amount (OMR)</th>
                            <th className="p-3 font-semibold">Payment Date</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-primary-600">{payment.id}</td>
                                <td className="p-3 text-secondary-800">{payment.vendorName}</td>
                                <td className="p-3 font-medium">{payment.amount.toFixed(2)}</td>
                                <td className="p-3 text-secondary-700">{payment.paymentDate || 'N/A'}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(payment.status)}`}>
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    {payment.status === 'Pending' && (
                                        <button 
                                            onClick={() => handleMarkAsPaid(payment.id)}
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

export default VendorServicePayments;

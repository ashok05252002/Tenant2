import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockInvoices } from '../../data/invoices';
import { Download } from 'lucide-react';

const InvoicesList = () => {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-700';
            case 'Pending': return 'bg-yellow-100 text-yellow-700';
            case 'Overdue': return 'bg-red-100 text-red-700';
            default: return 'bg-secondary-100 text-secondary-700';
        }
    };

    return (
        <AdminPageLayout title="All Invoices">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Invoice ID</th>
                            <th className="p-3 font-semibold">Tenant</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Amount (OMR)</th>
                            <th className="p-3 font-semibold">Due Date</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockInvoices.map((invoice) => (
                            <tr key={invoice.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-primary-600">{invoice.id}</td>
                                <td className="p-3 text-secondary-800">{invoice.tenantName}</td>
                                <td className="p-3 text-secondary-700">{invoice.property}</td>
                                <td className="p-3 font-medium">{invoice.amount.toFixed(2)}</td>
                                <td className="p-3 text-secondary-700">{invoice.dueDate}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(invoice.status)}`}>
                                        {invoice.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <button className="p-1.5 text-secondary-500 hover:text-blue-600"><Download size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default InvoicesList;

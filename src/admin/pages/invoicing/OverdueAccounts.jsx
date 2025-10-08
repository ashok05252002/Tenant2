import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockInvoices } from '../../data/invoices';
import { Send } from 'lucide-react';

const OverdueAccounts = () => {
    const overdue = mockInvoices.filter(inv => inv.status === 'Overdue');
    return (
        <AdminPageLayout title="Overdue Accounts">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Tenant</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">Amount Due (OMR)</th>
                            <th className="p-3 font-semibold">Due Date</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {overdue.map((invoice) => (
                            <tr key={invoice.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-secondary-900">{invoice.tenantName}</td>
                                <td className="p-3 text-secondary-700">{invoice.property}</td>
                                <td className="p-3 font-medium text-red-600">{invoice.amount.toFixed(2)}</td>
                                <td className="p-3 text-red-600">{invoice.dueDate}</td>
                                <td className="p-3">
                                    <button className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-md hover:bg-blue-200">
                                        <Send size={14} /> Send Reminder
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default OverdueAccounts;

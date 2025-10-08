import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockLandlords } from '../../data/users';
import { DollarSign } from 'lucide-react';

const LandlordFinancials = () => {
    const financials = mockLandlords.map(l => ({
        ...l,
        totalEarnings: (l.propertiesOwned * 5000).toFixed(2),
        pendingPayout: (l.propertiesOwned * 400).toFixed(2),
        lastPayout: '2025-08-15'
    }));

    return (
        <AdminPageLayout title="Landlord Financials & Payouts">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Landlord</th>
                            <th className="p-3 font-semibold">Total Earnings (OMR)</th>
                            <th className="p-3 font-semibold">Pending Payout (OMR)</th>
                            <th className="p-3 font-semibold">Last Payout Date</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {financials.map((item) => (
                            <tr key={item.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 font-medium text-secondary-900">{item.name}</td>
                                <td className="p-3 text-green-600 font-medium">{item.totalEarnings}</td>
                                <td className="p-3 text-yellow-600 font-medium">{item.pendingPayout}</td>
                                <td className="p-3 text-secondary-700">{item.lastPayout}</td>
                                <td className="p-3">
                                    <button className="flex items-center gap-1 text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-md hover:bg-primary-200">
                                        <DollarSign size={14} /> Process Payout
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

export default LandlordFinancials;

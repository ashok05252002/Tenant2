import React from 'react';
import { DollarSign, Download, TrendingUp, TrendingDown } from 'lucide-react';

const mockFinancials = {
    summary: {
        totalEarnings: 'OMR 15,000',
        lastPayout: 'OMR 1,250',
        dueNextMonth: 'OMR 1,250',
        overdue: 'OMR 0'
    },
    payoutHistory: [
        { id: 'PO-001', date: '2025-08-15', amount: '1,250.00', status: 'Completed' },
        { id: 'PO-002', date: '2025-07-15', amount: '1,250.00', status: 'Completed' },
    ]
};

const LandlordFinancials = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">Financials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Earnings" value={mockFinancials.summary.totalEarnings} icon={TrendingUp} color="text-green-600" bgColor="bg-green-100" />
                <StatCard title="Last Payout" value={mockFinancials.summary.lastPayout} icon={DollarSign} color="text-blue-600" bgColor="bg-blue-100" />
                <StatCard title="Due Next Month" value={mockFinancials.summary.dueNextMonth} icon={TrendingUp} color="text-purple-600" bgColor="bg-purple-100" />
                <StatCard title="Overdue Amount" value={mockFinancials.summary.overdue} icon={TrendingDown} color="text-red-600" bgColor="bg-red-100" />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">Payout History</h2>
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary-50 text-left text-secondary-600">
                            <tr>
                                <th className="p-3 font-semibold">Payout ID</th>
                                <th className="p-3 font-semibold">Date</th>
                                <th className="p-3 font-semibold">Amount (OMR)</th>
                                <th className="p-3 font-semibold">Status</th>
                                <th className="p-3 font-semibold">Statement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockFinancials.payoutHistory.map(payout => (
                                <tr key={payout.id} className="border-b last:border-0">
                                    <td className="p-3 font-medium text-purple-600">{payout.id}</td>
                                    <td className="p-3">{payout.date}</td>
                                    <td className="p-3">{payout.amount}</td>
                                    <td className="p-3">
                                        <span className="bg-green-100 text-green-700 px-2 py-1 text-xs font-medium rounded-full">{payout.status}</span>
                                    </td>
                                    <td className="p-3">
                                        <button className="text-secondary-500 hover:text-purple-600"><Download size={16}/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value, color, bgColor }) => {
    const Icon = icon;
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgColor}`}>
                    <Icon size={24} className={color} />
                </div>
                <div>
                    <p className="text-sm text-secondary-600">{title}</p>
                    <p className="text-xl font-bold text-secondary-900">{value}</p>
                </div>
            </div>
        </div>
    );
};

export default LandlordFinancials;

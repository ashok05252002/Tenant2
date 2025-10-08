import React from 'react';
import { Building, Link2, DollarSign, Users } from 'lucide-react';
import CommissionPlanCard from '../components/CommissionPlanCard';
import ChartComponent from '../../admin/components/ui/ChartComponent';

const StatCard = ({ icon, title, value, color, bgColor }) => {
    const Icon = icon;
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor}`}>
                <Icon size={28} className={color} />
            </div>
            <div>
                <p className="text-sm text-secondary-600">{title}</p>
                <p className="text-2xl font-bold text-secondary-900">{value}</p>
            </div>
        </div>
    );
};

const BrokerDashboard = () => {
    const stats = [
        { title: 'Active Listings', value: '15', icon: Building, color: 'text-purple-600', bgColor: 'bg-purple-100' },
        { title: 'Successful Referrals', value: '8', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
        { title: 'Total Commission', value: 'OMR 2,100', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
        { title: 'Pending Invites', value: '4', icon: Link2, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    ];

    const commissionChartOption = {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yAxis: { type: 'value', name: 'OMR' },
        series: [{
            data: [300, 450, 500, 350, 600, 400],
            type: 'line',
            smooth: true,
            color: '#16a34a'
        }],
        grid: { left: '15%', right: '5%', bottom: '10%' }
    };

    const referralFunnelOption = {
        tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {c}" },
        series: [{
            name: 'Referral Funnel',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: { formatter: '{b}' },
            data: [
                { value: 20, name: 'Invited' },
                { value: 12, name: 'Accepted' },
                { value: 8, name: 'Commissioned' }
            ]
        }]
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
            </div>
             <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Commission Trend</h3>
                    <div className="h-64">
                        <ChartComponent option={commissionChartOption} />
                    </div>
                </div>
                <div className="space-y-8">
                    <CommissionPlanCard />
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Referral Funnel</h3>
                        <div className="h-40">
                            <ChartComponent option={referralFunnelOption} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrokerDashboard;

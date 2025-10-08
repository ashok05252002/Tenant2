import React from 'react';
import { DollarSign, Users, Home, Wrench, ShieldCheck, UserCheck } from 'lucide-react';
import ChartComponent from '../components/ui/ChartComponent';

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

const AdminDashboard = () => {
    const stats = [
        { title: 'Total Revenue', value: 'OMR 1.2M', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
        { title: 'Active Leases', value: '1,450', icon: Home, color: 'text-blue-600', bgColor: 'bg-blue-100' },
        { title: 'KYC Verifications', value: '3,210', icon: ShieldCheck, color: 'text-purple-600', bgColor: 'bg-purple-100' },
        { title: 'Open Service Tickets', value: '32', icon: Wrench, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
        { title: 'New Tenants This Month', value: '78', icon: UserCheck, color: 'text-teal-600', bgColor: 'bg-teal-100' },
        { title: 'Active Vendors', value: '25', icon: Users, color: 'text-orange-600', bgColor: 'bg-orange-100' },
    ];

    const financialChartOption = {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yAxis: { type: 'value', name: 'OMR (in thousands)' },
        series: [{
            data: [82, 93, 90, 93, 129, 133, 132, 145],
            type: 'line',
            smooth: true,
            color: '#006782'
        }],
        grid: { left: '10%', right: '5%', bottom: '10%' }
    };

    const funnelChartOption = {
        tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {c}%" },
        series: [{
            name: 'Onboarding Funnel',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                formatter: '{b}'
            },
            data: [
                { value: 100, name: 'Applications' },
                { value: 80, name: 'KYC Passed' },
                { value: 60, name: 'Agreement Sent' },
                { value: 40, name: 'Payment Done' },
                { value: 30, name: 'Moved In' }
            ]
        }]
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h2 className="text-lg font-semibold text-secondary-900 mb-4">Financial Overview</h2>
                    <div className="h-80">
                        <ChartComponent option={financialChartOption} />
                    </div>
                </div>
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h2 className="text-lg font-semibold text-secondary-900 mb-4">Onboarding Funnel</h2>
                    <div className="h-80">
                         <ChartComponent option={funnelChartOption} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

import React from 'react';
import { Building, Users, DollarSign, Wrench } from 'lucide-react';
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

const LandlordDashboard = () => {
    const stats = [
        { title: 'Total Properties', value: '3', icon: Building, color: 'text-purple-600', bgColor: 'bg-purple-100' },
        { title: 'Active Tenants', value: '2', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
        { title: 'Monthly Earnings', value: 'OMR 1,250', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
        { title: 'Maintenance Requests', value: '1', icon: Wrench, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    ];

    const rentCollectionOption = {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yAxis: { type: 'value', name: 'OMR' },
        series: [{
            data: [1250, 1250, 1100, 1250, 1250, 1250],
            type: 'bar',
            color: '#8b5cf6'
        }],
        grid: { left: '15%', right: '5%', bottom: '10%' }
    };

    const occupancyOption = {
        tooltip: { trigger: 'item' },
        legend: { top: 'bottom', left: 'center' },
        series: [{
            name: 'Property Occupancy',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: { show: false, position: 'center' },
            emphasis: {
                label: { show: true, fontSize: '20', fontWeight: 'bold' }
            },
            data: [
                { value: 2, name: 'Occupied', itemStyle: { color: '#8b5cf6' } },
                { value: 1, name: 'Vacant', itemStyle: { color: '#e2e8f0' } }
            ]
        }]
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
            </div>
             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Rent Collection Trend</h3>
                    <div className="h-64">
                        <ChartComponent option={rentCollectionOption} />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Property Occupancy</h3>
                    <div className="h-64">
                        <ChartComponent option={occupancyOption} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandlordDashboard;

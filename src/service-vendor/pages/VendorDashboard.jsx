import React from 'react';
import { Wrench, CheckCircle, DollarSign, Star } from 'lucide-react';
import ChartComponent from '../../admin/components/ui/ChartComponent';
import { mockVendorRequests } from '../data/vendorRequests';

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

const VendorDashboard = () => {
    const stats = [
        { title: 'Open Requests', value: '3', icon: Wrench, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
        { title: 'Jobs Completed (Month)', value: '28', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
        { title: 'Pending Payments', value: 'OMR 450', icon: DollarSign, color: 'text-blue-600', bgColor: 'bg-blue-100' },
        { title: 'Average Rating', value: '4.8', icon: Star, color: 'text-orange-600', bgColor: 'bg-orange-100' },
    ];

    const jobsChartOption = {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yAxis: { type: 'value', name: 'Jobs' },
        series: [{
            data: [18, 25, 22, 30, 26, 28],
            type: 'bar',
            color: '#f97316'
        }],
        grid: { left: '15%', right: '5%', bottom: '10%' }
    };
    
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'In Progress': return 'bg-blue-100 text-blue-700';
            case 'Accepted': return 'bg-purple-100 text-purple-700';
            default: return 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">Service Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
            </div>
             <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Recent Service Requests</h3>
                    <div className="space-y-3">
                        {mockVendorRequests.slice(0, 3).map(req => (
                            <div key={req.id} className="p-3 bg-secondary-50 rounded-lg flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-sm text-secondary-800">{req.service}</p>
                                    <p className="text-xs text-secondary-500">{req.property}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(req.status)}`}>
                                    {req.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance Overview</h3>
                    <div className="h-64">
                         <ChartComponent option={jobsChartOption} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;

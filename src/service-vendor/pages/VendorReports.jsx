import React from 'react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { CheckCircle, Star, DollarSign, BarChart } from 'lucide-react';

const ReportCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
        <div className="flex items-center gap-3 mb-2">
            <Icon size={20} className={color} />
            <h3 className="font-semibold text-secondary-800">{title}</h3>
        </div>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
);

const VendorReports = () => {
    return (
        <AdminPageLayout title="Reports & Analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ReportCard title="Jobs Completed (All Time)" value="128" icon={CheckCircle} color="text-green-500" />
                <ReportCard title="Average Rating" value="4.8 / 5" icon={Star} color="text-orange-500" />
                <ReportCard title="Total Earnings" value="OMR 2,300" icon={DollarSign} color="text-blue-500" />
                <ReportCard title="Completion Rate" value="98%" icon={BarChart} color="text-purple-500" />
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Jobs per Month</h3>
                    <div className="h-64 bg-secondary-100 rounded-lg flex items-center justify-center">
                        <p className="text-secondary-400">Bar Chart Placeholder</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Rating Distribution</h3>
                    <div className="h-64 bg-secondary-100 rounded-lg flex items-center justify-center">
                        <p className="text-secondary-400">Pie Chart Placeholder</p>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
};

export default VendorReports;

import React from 'react';
import { useParams } from 'react-router-dom';
import { mockVendors } from '../../data/vendors';
import DetailHeader from '../../components/DetailHeader';
import TabbedInterface from '../../components/TabbedInterface';
import { Star, Wrench, Clock, CheckCircle } from 'lucide-react';

const DetailItem = ({ label, value }) => (
    <div>
        <p className="text-xs text-secondary-500">{label}</p>
        <p className="font-medium text-secondary-800">{value || 'N/A'}</p>
    </div>
);

const VendorDetail = () => {
    const { id } = useParams();
    const vendor = mockVendors.find(v => v.id.toString() === id);

    if (!vendor) {
        return <div className="p-6">Vendor not found.</div>;
    }

    const getStatusBadge = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
    };

    const getTaskStatusInfo = (status) => {
        switch (status) {
            case 'Completed': return { icon: CheckCircle, color: 'text-green-500' };
            default: return { icon: Clock, color: 'text-yellow-500' };
        }
    };

    const tabs = [
        { 
            name: 'Overview', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Company Name" value={vendor.name} />
                    <DetailItem label="Specialty" value={vendor.specialty} />
                    <DetailItem label="Contact Email" value={vendor.email} />
                    <DetailItem label="Contact Phone" value={vendor.phone} />
                    <DetailItem label="Rating" value={vendor.rating} />
                    <DetailItem label="Jobs Completed" value={vendor.jobsCompleted} />
                </div>
            )
        },
        { 
            name: 'Assigned Requests', 
            content: (
                <div className="space-y-3">
                    {vendor.assignedTasks.map(task => {
                        const StatusIcon = getTaskStatusInfo(task.status).icon;
                        return (
                            <div key={task.id} className="p-3 bg-secondary-50 rounded-lg flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{task.service}</p>
                                    <p className="text-sm text-secondary-600">{task.property}</p>
                                </div>
                                <div className={`flex items-center gap-1 text-sm ${getTaskStatusInfo(task.status).color}`}>
                                    <StatusIcon size={16} />
                                    <span>{task.status}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )
        },
        { 
            name: 'Payment History', 
            content: (
                 <table className="w-full text-sm">
                    <thead className="bg-secondary-100 text-left text-secondary-600">
                        <tr>
                            <th className="p-2 font-semibold">ID</th>
                            <th className="p-2 font-semibold">Date</th>
                            <th className="p-2 font-semibold">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendor.paymentHistory.map(p => (
                            <tr key={p.id} className="border-b last:border-0">
                                <td className="p-2">{p.id}</td>
                                <td className="p-2">{p.date}</td>
                                <td className="p-2 font-medium">{p.amount.toFixed(2)} OMR</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            )
        },
    ];

    return (
        <div>
            <DetailHeader
                title={vendor.name}
                subtitle={vendor.email}
                status={vendor.status}
                statusColor={getStatusBadge(vendor.status)}
                avatar={vendor.avatar}
                backPath="/admin/vendor/list"
            />
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <TabbedInterface tabs={tabs} />
            </div>
        </div>
    );
};

export default VendorDetail;

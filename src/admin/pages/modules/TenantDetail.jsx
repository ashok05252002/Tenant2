import React from 'react';
import { useParams } from 'react-router-dom';
import { mockTenants } from '../../data/users';
import DetailHeader from '../../components/DetailHeader';
import TabbedInterface from '../../components/TabbedInterface';
import { mockBrokers } from '../../../customer/data/brokers';
import RentalHistoryTab from '../../../tenant/components/dashboard/RentalHistoryTab';
import AdminTenantPaymentsTab from '../../components/tenant-detail/AdminTenantPaymentsTab';
import AdminTenantServiceRequestsTab from '../../components/tenant-detail/AdminTenantServiceRequestsTab';
import AdminTenantFinancialsTab from '../../components/tenant-detail/AdminTenantFinancialsTab';
import FeedbackTab from '../../components/feedback/FeedbackTab';
import { paymentHistory, maintenanceRequests } from '../../../customer/data/tenantData';
import { mockFeedback } from '../../data/feedback';

const DetailItem = ({ label, value }) => (
    <div>
        <p className="text-xs text-secondary-500">{label}</p>
        <p className="font-medium text-secondary-800">{value || 'N/A'}</p>
    </div>
);

const TenantDetail = () => {
    const { id } = useParams();
    const tenant = mockTenants.find(t => t.id.toString() === id);

    if (!tenant) {
        return <div className="p-6">Tenant not found.</div>;
    }

    const tenantFeedback = mockFeedback.filter(f => f.tenantId === tenant.id);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700';
            case 'Inactive': return 'bg-yellow-100 text-yellow-700';
            case 'Evicted': return 'bg-red-100 text-red-700';
            default: return 'bg-secondary-100 text-secondary-700';
        }
    };

    const tabs = [
        { 
            name: 'Personal Details', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Full Name" value={tenant.name} />
                    <DetailItem label="Email" value={tenant.email} />
                    <DetailItem label="Phone" value={tenant.phone} />
                    <DetailItem label="Date of Birth" value={tenant.dob} />
                    <DetailItem label="Gender" value={tenant.gender} />
                    <DetailItem label="Address" value={tenant.address} />
                </div>
            )
        },
        { name: 'Documents', content: <p>Documents for {tenant.name} will be shown here. (e.g., Passport, Visa, Lease)</p> },
        { 
            name: 'Lease Info', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Rented Property" value={tenant.property} />
                    <DetailItem label="Lease Start Date" value={tenant.leaseStartDate} />
                    <DetailItem label="Lease End Date" value={tenant.leaseEndDate} />
                    <DetailItem label="Broker" value={mockBrokers[0].name} />
                </div>
            )
        },
        { name: 'Payment History', content: <AdminTenantPaymentsTab history={paymentHistory} /> },
        { name: 'Service Requests', content: <AdminTenantServiceRequestsTab requests={maintenanceRequests} /> },
        { name: 'Rental History', content: <RentalHistoryTab history={tenant.rentalHistory} /> },
        { 
            name: 'Financials & Credit', 
            content: <AdminTenantFinancialsTab tenant={tenant} />
        },
        { name: 'Feedback', content: <FeedbackTab feedback={tenantFeedback} /> },
    ];

    return (
        <div>
            <DetailHeader
                title={tenant.name}
                subtitle={tenant.email}
                status={tenant.status}
                statusColor={getStatusBadge(tenant.status)}
                avatar={tenant.avatar}
                backPath="/admin/tenants"
            />
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <TabbedInterface tabs={tabs} />
            </div>
        </div>
    );
};

export default TenantDetail;

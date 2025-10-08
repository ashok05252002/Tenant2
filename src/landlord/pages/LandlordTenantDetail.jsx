import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTenants } from '../../admin/data/users';
import DetailHeader from '../../admin/components/DetailHeader';
import TabbedInterface from '../../admin/components/TabbedInterface';
import { paymentHistory, maintenanceRequests } from '../../customer/data/tenantData';
import AdminTenantPaymentsTab from '../../admin/components/tenant-detail/AdminTenantPaymentsTab';
import AdminTenantServiceRequestsTab from '../../admin/components/tenant-detail/AdminTenantServiceRequestsTab';
import RentalHistoryTab from '../../tenant/components/dashboard/RentalHistoryTab';
import AdminTenantFinancialsTab from '../../admin/components/tenant-detail/AdminTenantFinancialsTab';
import { ArrowLeft } from 'lucide-react';

const DetailItem = ({ label, value }) => (
    <div>
        <p className="text-xs text-secondary-500">{label}</p>
        <p className="font-medium text-secondary-800">{value || 'N/A'}</p>
    </div>
);

const LandlordTenantDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const tenant = mockTenants.find(t => t.id.toString() === id);

    if (!tenant) {
        return <div className="p-6">Tenant not found.</div>;
    }

    const getStatusBadge = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
    };

    const tabs = [
        {
            name: 'Personal Details',
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Full Name" value={tenant.name} />
                    <DetailItem label="Email" value={tenant.email} />
                    <DetailItem label="Phone" value={tenant.phone} />
                </div>
            )
        },
        {
            name: 'Lease Info',
            content: (
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Rented Property" value={tenant.property} />
                    <DetailItem label="Lease Start Date" value={tenant.leaseStartDate} />
                    <DetailItem label="Lease End Date" value={tenant.leaseEndDate} />
                </div>
            )
        },
        { name: 'Payment History', content: <AdminTenantPaymentsTab history={paymentHistory} /> },
        { name: 'Service Requests', content: <AdminTenantServiceRequestsTab requests={maintenanceRequests} /> },
        { name: 'Rental History', content: <RentalHistoryTab history={tenant.rentalHistory} /> },
        { name: 'Documents', content: <p>Documents for {tenant.name} will be shown here.</p> },
        { name: 'Financials & Credit', content: <AdminTenantFinancialsTab tenant={tenant} /> },
    ];

    return (
        <div>
             <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-secondary-600 hover:text-purple-600 mb-4">
                <ArrowLeft size={16} />
                Back to My Tenants
            </button>
            <DetailHeader
                title={tenant.name}
                subtitle={tenant.email}
                status={tenant.status}
                statusColor={getStatusBadge(tenant.status)}
                avatar={tenant.avatar}
            />
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 mt-6">
                <TabbedInterface tabs={tabs} />
            </div>
        </div>
    );
};

export default LandlordTenantDetail;

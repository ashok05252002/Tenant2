import React from 'react';
import { useParams } from 'react-router-dom';
import { mockLandlords } from '../../data/users';
import { mockAdminProperties } from '../../../data/properties';
import DetailHeader from '../../components/DetailHeader';
import TabbedInterface from '../../components/TabbedInterface';
import PropertyListTable from '../../components/properties/PropertyListTable';
import ActivityLogTab from '../../components/ActivityLogTab';
import { mockLogs } from '../../data/logs';

const DetailItem = ({ label, value }) => (
    <div>
        <p className="text-xs text-secondary-500">{label}</p>
        <p className="font-medium text-secondary-800">{value || 'N/A'}</p>
    </div>
);

const LandlordDetail = () => {
    const { id } = useParams();
    const landlord = mockLandlords.find(l => l.id.toString() === id);
    const ownedProperties = mockAdminProperties.filter(p => p.landlordId === parseInt(id));
    const landlordActivities = mockLogs.filter(log => log.user === landlord.name);

    if (!landlord) {
        return <div className="p-6">Landlord not found.</div>;
    }

    const getStatusBadge = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
    };

    const tabs = [
        { 
            name: 'Personal Details', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Full Name" value={landlord.name} />
                </div>
            )
        },
        { 
            name: 'Properties Owned', 
            content: <PropertyListTable properties={ownedProperties} />
        },
        { name: 'Documents', content: <p>Documents for {landlord.name}. (e.g., Ownership proof, ID)</p> },
        { 
            name: 'Contact Info', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Phone" value={landlord.phone} />
                    <DetailItem label="Email" value={landlord.email} />
                    <DetailItem label="Address" value={landlord.address} />
                </div>
            )
        },
        { name: 'KYC Status', content: <DetailItem label="KYC Status" value={landlord.kycStatus} /> },
        { name: 'Rental Agreements', content: <p>Rental agreements for {landlord.name}.</p> },
        {
            name: 'Activities',
            content: <ActivityLogTab logs={landlordActivities} />
        }
    ];

    return (
        <div>
            <DetailHeader
                title={landlord.name}
                subtitle={landlord.email}
                status={landlord.status}
                statusColor={getStatusBadge(landlord.status)}
                avatar={landlord.avatar}
                backPath="/admin/landlords"
            />
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <TabbedInterface tabs={tabs} />
            </div>
        </div>
    );
};

export default LandlordDetail;

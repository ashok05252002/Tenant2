import React from 'react';
import { useParams } from 'react-router-dom';
import { mockBrokers } from '../../../customer/data/brokers';
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

const BrokerDetail = () => {
    const { id } = useParams();
    const broker = mockBrokers.find(b => b.id.toString() === id);
    const associatedProperties = mockAdminProperties.filter(p => p.brokerId === parseInt(id));
    const brokerActivities = mockLogs.filter(log => log.user === broker.name);

    if (!broker) {
        return <div className="p-6">Broker not found.</div>;
    }

    const getStatusBadge = (verified) => {
        return verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
    };

    const tabs = [
        { 
            name: 'Personal Details', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Full Name" value={broker.name} />
                    <DetailItem label="Tagline" value={broker.tagline} />
                </div>
            )
        },
        { 
            name: 'Contact Information', 
            content: (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <DetailItem label="Phone" value={broker.contact.phone} />
                    <DetailItem label="Email" value={broker.contact.email} />
                    <DetailItem label="Service Area" value={broker.serviceArea} />
                    <DetailItem label="Languages" value={broker.languages.join(', ')} />
                </div>
            )
        },
        { 
            name: 'Associated Properties', 
            content: <PropertyListTable properties={associatedProperties} />
        },
        { name: 'Documents', content: <p>Documents for {broker.name}. (e.g., RERA certification, ID)</p> },
        { 
            name: 'Applications Managed', 
            content: <DetailItem label="Total Applications" value={broker.applicationsManaged} />
        },
        {
            name: 'Activities',
            content: <ActivityLogTab logs={brokerActivities} />
        }
    ];

    return (
        <div>
            <DetailHeader
                title={broker.name}
                subtitle={broker.contact.email}
                status={broker.verified ? 'Active' : 'Inactive'}
                statusColor={getStatusBadge(broker.verified)}
                avatar={broker.photo}
                backPath="/admin/brokers"
            />
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <TabbedInterface tabs={tabs} />
            </div>
        </div>
    );
};

export default BrokerDetail;

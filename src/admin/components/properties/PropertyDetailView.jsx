import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, DollarSign, User, Building, Users, CheckCircle, XCircle, Clock, Home, UserCheck, HelpCircle, Repeat } from 'lucide-react';
import { mockTenants, mockLandlords } from '../../data/users';
import { mockBrokers } from '../../../customer/data/brokers';
import * as Icons from 'lucide-react';

const InfoCard = ({ icon, label, value }) => {
    const Icon = icon;
    return (
        <div className="bg-secondary-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-secondary-500 text-sm">
                <Icon size={16} />
                <span>{label}</span>
            </div>
            <p className="font-bold text-secondary-900 text-lg mt-1">{value}</p>
        </div>
    );
};

const AssignmentCard = ({ title, person, linkTo, type }) => {
    if (!person) return null;
    const Icon = type === 'tenant' ? User : (type === 'landlord' ? Home : Users);
    return (
        <div className="bg-secondary-50 p-4 rounded-lg">
            <p className="text-sm text-secondary-500 mb-1">{title}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon size={18} className="text-primary-600" />
                    <span className="font-semibold text-secondary-900">{person.name}</span>
                </div>
                <Link to={linkTo} className="text-xs font-medium text-primary-600 hover:underline">View Profile</Link>
            </div>
        </div>
    );
};

const PropertyDetailView = ({ property }) => {
    const tenant = property.tenantId ? mockTenants.find(t => t.id === property.tenantId) : null;
    const landlord = property.landlordId ? mockLandlords.find(l => l.id === property.landlordId) : null;
    const broker = property.brokerId ? mockBrokers.find(b => b.id === property.brokerId) : null;

    const getOccupancyInfo = () => {
        switch (property.occupancyStatus) {
            case 'Occupied':
                return { text: 'Occupied', icon: CheckCircle, color: 'text-green-600' };
            case 'Vacant':
                return { text: 'Vacant', icon: XCircle, color: 'text-blue-600' };
            case 'Assigned':
                return { text: 'Assigned', icon: UserCheck, color: 'text-purple-600' };
            default:
                return { text: 'Unknown', icon: HelpCircle, color: 'text-secondary-500' };
        }
    };
    const occupancy = getOccupancyInfo();
    const OccupancyIcon = occupancy.icon;

    return (
        <div className="space-y-6">
            {/* Key Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <InfoCard icon={Repeat} label="Listing Type" value={property.listingType || 'Rent'} />
                    <InfoCard icon={Bed} label="Bedrooms" value={property.details.bedrooms} />
                    <InfoCard icon={Bath} label="Bathrooms" value={property.details.bathrooms} />
                    <InfoCard icon={Square} label="Area (sq ft)" value={property.details.area} />
                    <InfoCard icon={DollarSign} label="Price (OMR/month)" value={property.details.price} />
                </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Description</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{property.details.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Occupancy & Assignments */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Occupancy & Assignments</h3>
                    <div className="space-y-3">
                        <div className="bg-secondary-50 p-4 rounded-lg">
                            <p className="text-sm text-secondary-500 mb-1">Occupancy Status</p>
                            <div className={`flex items-center gap-2 font-semibold ${occupancy.color}`}>
                                <OccupancyIcon size={18} />
                                <span>{occupancy.text}</span>
                            </div>
                        </div>
                        {tenant && <AssignmentCard title="Current Tenant" person={tenant} linkTo={`/admin/people/tenants/${tenant.id}`} type="tenant" />}
                        {landlord && <AssignmentCard title="Assigned Landlord" person={landlord} linkTo={`/admin/people/landlords/${landlord.id}`} type="landlord" />}
                        {broker && <AssignmentCard title="Assigned Broker" person={broker} linkTo={`/admin/people/brokers/${broker.id}`} type="broker" />}
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {property.amenities.map(amenityName => {
                            const IconComponent = Icons[amenityName.replace(/\s/g, '')] || Icons['Check'];
                            return (
                                <div key={amenityName} className="flex items-center gap-2 text-sm text-secondary-700">
                                    <IconComponent size={16} className="text-primary-500" />
                                    <span>{amenityName}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Image Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {property.images.map((img, index) => (
                        <img key={index} src={img} alt={`Property view ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailView;

import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const PropertyOverviewHeader = ({ leaseData }) => {
    const { property, lease } = leaseData;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1">
                    <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2 p-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-secondary-900">{property.title}</h1>
                            <div className="flex items-center gap-2 text-secondary-600 mt-2">
                                <MapPin size={16} />
                                <span>{property.address}</span>
                            </div>
                        </div>
                        <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                            <CheckCircle size={14} />
                            {lease.status}
                        </span>
                    </div>
                    <div className="mt-6 pt-6 border-t border-secondary-100 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-secondary-500">Lease Start Date</p>
                            <p className="font-medium text-secondary-800 flex items-center gap-2"><Calendar size={16} /> {lease.startDate}</p>
                        </div>
                        <div>
                            <p className="text-sm text-secondary-500">Lease End Date</p>
                            <p className="font-medium text-secondary-800 flex items-center gap-2"><Calendar size={16} /> {lease.endDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyOverviewHeader;

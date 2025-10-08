import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, Trash2, Search } from 'lucide-react';

const PropertyListTable = ({ properties = [] }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const getStatusBadge = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
    };

    const filteredProperties = useMemo(() => {
        if (!searchTerm) return properties;
        return properties.filter(prop => 
            prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (prop.project && prop.project.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm, properties]);

    return (
        <div>
            <div className="mb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-xs pl-10 pr-4 py-2 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                    />
                </div>
            </div>
            <div className="overflow-x-auto border border-secondary-200 rounded-lg">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Property Name</th>
                            <th className="p-3 font-semibold">Project</th>
                            <th className="p-3 font-semibold">Location</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Type</th>
                            <th className="p-3 font-semibold">Beds/Baths</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProperties.map((prop) => (
                            <tr key={prop.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50">
                                <td className="p-3 font-medium text-secondary-900">{prop.name}</td>
                                <td className="p-3 text-secondary-700">{prop.project}</td>
                                <td className="p-3 text-secondary-700">{prop.location}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(prop.status)}`}>
                                        {prop.status}
                                    </span>
                                </td>
                                <td className="p-3 text-secondary-700">{prop.details.propertyType || 'Apartment'}</td>
                                <td className="p-3 text-secondary-700">{prop.details.bedrooms} / {prop.details.bathrooms}</td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => navigate(`/admin/modules/properties/${prop.id}`)} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                        <button onClick={() => navigate(`/admin/modules/properties/${prop.id}?edit=true`)} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PropertyListTable;

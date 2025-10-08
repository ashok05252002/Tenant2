import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAdminProperties } from '../../data/properties';
import { Eye, Edit, Trash2 } from 'lucide-react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { useBroker } from '../context/BrokerContext';

const BrokerProperties = () => {
    const navigate = useNavigate();
    const { handleGatedAction } = useBroker();
    // In a real app, this would be filtered by the logged-in broker's ID
    const brokerProperties = mockAdminProperties.filter(p => p.brokerId === 1);

    const handleAddProperty = () => {
        handleGatedAction(() => {
            navigate('/broker/properties/add');
        });
    };
    
    const handleViewProperty = (id) => {
        navigate(`/broker/properties/${id}`);
    };

    const getStatusBadge = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
    };

    return (
        <AdminPageLayout title="My Listings" actionButton="Add Property" onActionClick={handleAddProperty}>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Property Name</th>
                            <th className="p-3 font-semibold">Location</th>
                            <th className="p-3 font-semibold">Occupancy</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brokerProperties.map((prop) => (
                            <tr key={prop.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => handleViewProperty(prop.id)}>
                                <td className="p-3 font-medium text-secondary-900">{prop.name}</td>
                                <td className="p-3 text-secondary-700">{prop.location}</td>
                                <td className="p-3 text-secondary-700">{prop.occupancyStatus}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(prop.status)}`}>
                                        {prop.status}
                                    </span>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={(e) => {e.stopPropagation(); handleViewProperty(prop.id)}} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                        <button onClick={(e) => {e.stopPropagation(); navigate(`/broker/properties/${prop.id}?edit=true`)}} className="p-1.5 text-secondary-500 hover:text-green-600"><Edit size={16} /></button>
                                        <button onClick={(e) => e.stopPropagation()} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default BrokerProperties;

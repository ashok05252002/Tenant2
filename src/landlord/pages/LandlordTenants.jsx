import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockTenants } from '../../admin/data/users';
import { Eye } from 'lucide-react';

const LandlordTenants = () => {
    const navigate = useNavigate();
    const myTenants = mockTenants.filter(t => t.status === 'Active');

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">My Tenants</h1>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Contact</th>
                            <th className="p-3 font-semibold">Rented Property</th>
                            <th className="p-3 font-semibold">Lease End</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myTenants.map((tenant) => (
                            <tr key={tenant.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => navigate(`/landlord/tenants/${tenant.id}`)}>
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <img src={tenant.avatar} alt={tenant.name} className="w-10 h-10 rounded-full object-cover" />
                                        <span className="font-medium text-secondary-900">{tenant.name}</span>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <p className="text-secondary-800">{tenant.email}</p>
                                    <p className="text-secondary-500 text-xs">{tenant.phone}</p>
                                </td>
                                <td className="p-3 text-secondary-700">{tenant.property}</td>
                                <td className="p-3 text-secondary-700">{tenant.leaseEndDate}</td>
                                <td className="p-3">
                                    <button onClick={(e) => {e.stopPropagation(); navigate(`/landlord/tenants/${tenant.id}`)}} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LandlordTenants;

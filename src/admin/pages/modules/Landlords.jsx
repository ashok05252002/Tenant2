import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockLandlords } from '../../data/users';
import { Eye, Edit, Trash2 } from 'lucide-react';

const Landlords = () => {
  const navigate = useNavigate();

  const getStatusBadge = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary-100 text-secondary-700';
  };

  const handleViewLandlord = (id) => {
    navigate(`/admin/landlords/${id}`);
  };

  return (
    <AdminPageLayout title="Landlords" actionButton="Add Landlord">
       <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
          <table className="w-full text-sm">
              <thead className="bg-secondary-50 text-left text-secondary-600">
                  <tr>
                      <th className="p-3 font-semibold">Name</th>
                      <th className="p-3 font-semibold">Contact</th>
                      <th className="p-3 font-semibold">Properties Owned</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {mockLandlords.map((landlord) => (
                      <tr key={landlord.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => handleViewLandlord(landlord.id)}>
                          <td className="p-3">
                              <div className="flex items-center gap-3">
                                  <img src={landlord.avatar} alt={landlord.name} className="w-10 h-10 rounded-full object-cover" />
                                  <span className="font-medium text-secondary-900">{landlord.name}</span>
                              </div>
                          </td>
                          <td className="p-3">
                              <p className="text-secondary-800">{landlord.email}</p>
                              <p className="text-secondary-500 text-xs">{landlord.phone}</p>
                          </td>
                          <td className="p-3 text-secondary-700 font-medium">{landlord.propertiesOwned}</td>
                          <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(landlord.status)}`}>
                                  {landlord.status}
                              </span>
                          </td>
                          <td className="p-3">
                              <div className="flex gap-2">
                                  <button onClick={(e) => { e.stopPropagation(); handleViewLandlord(landlord.id); }} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                  <button onClick={(e) => e.stopPropagation()} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
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

export default Landlords;

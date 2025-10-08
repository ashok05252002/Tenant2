import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockTenants } from '../../data/users';
import { Eye, Edit, Trash2, SlidersHorizontal, Search } from 'lucide-react';
import UserFilterModal from '../../components/filters/UserFilterModal';
import AddUserWizard from '../../components/users/AddUserWizard';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const Tenants = () => {
  const navigate = useNavigate();
  const [tenants, setTenants] = useState(mockTenants);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({});
  
  const [isWizardOpen, setWizardOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingTenantId, setDeletingTenantId] = useState(null);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Inactive':
        return 'bg-yellow-100 text-yellow-700';
      case 'Evicted':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-secondary-100 text-secondary-700';
    }
  };

  const handleViewTenant = (id) => {
    navigate(`/admin/tenants/${id}`);
  };

  const handleWizardSubmit = (formData) => {
    console.log("New Tenant Data:", formData);
    const newTenant = { 
        id: Date.now(), 
        ...formData, 
        property: 'Not Assigned',
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/lego/1.jpg'
    };
    setTenants(prev => [newTenant, ...prev]);
  };

  const openDeleteModal = (id) => {
    setDeletingTenantId(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setTenants(prev => prev.filter(t => t.id !== deletingTenantId));
    setDeleteModalOpen(false);
    setDeletingTenantId(null);
  };

  const filteredTenants = useMemo(() => {
    return tenants.filter(tenant => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const matchesSearch = tenant.name.toLowerCase().includes(lowerSearchTerm) || tenant.email.toLowerCase().includes(lowerSearchTerm);

        const matchesStatus = advancedFilters.status === 'all' || !advancedFilters.status || tenant.status === advancedFilters.status;
        const matchesKyc = advancedFilters.kycStatus === 'all' || !advancedFilters.kycStatus || tenant.kycStatus === advancedFilters.kycStatus;
        const matchesProperty = !advancedFilters.property || tenant.property.toLowerCase().includes(advancedFilters.property.toLowerCase());

        return matchesSearch && matchesStatus && matchesKyc && matchesProperty;
    });
  }, [tenants, searchTerm, advancedFilters]);

  return (
    <AdminPageLayout title="Tenants" actionButton="Add Tenant" onActionClick={() => setWizardOpen(true)}>
        <div className="mb-4 p-4 bg-white rounded-xl shadow-sm border border-secondary-200">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-grow w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Tenant name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                    />
                </div>
                <button onClick={() => setFilterModalOpen(true)} className="w-full md:w-auto flex items-center justify-center gap-2 py-2 px-4 text-sm border border-secondary-300 rounded-lg hover:bg-secondary-100">
                    <SlidersHorizontal size={16} />
                    Advanced Filters
                </button>
            </div>
        </div>

       <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
          <table className="w-full text-sm">
              <thead className="bg-secondary-50 text-left text-secondary-600">
                  <tr>
                      <th className="p-3 font-semibold">Name</th>
                      <th className="p-3 font-semibold">Contact</th>
                      <th className="p-3 font-semibold">Rented Property</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {filteredTenants.map((tenant) => (
                      <tr key={tenant.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => handleViewTenant(tenant.id)}>
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
                          <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(tenant.status)}`}>
                                  {tenant.status}
                              </span>
                          </td>
                          <td className="p-3">
                              <div className="flex gap-2">
                                  <button onClick={(e) => { e.stopPropagation(); handleViewTenant(tenant.id); }} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                  <button onClick={(e) => { e.stopPropagation(); alert("Edit functionality to be implemented"); }} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                  <button onClick={(e) => { e.stopPropagation(); openDeleteModal(tenant.id); }} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
       </div>
       <UserFilterModal 
            isOpen={isFilterModalOpen}
            onClose={() => setFilterModalOpen(false)}
            onApply={setAdvancedFilters}
            onReset={() => setAdvancedFilters({})}
        />
        <AddUserWizard
            isOpen={isWizardOpen}
            onClose={() => setWizardOpen(false)}
            onSubmit={handleWizardSubmit}
            userType="Tenant"
        />
        <ConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={handleDeleteConfirm}
            title="Delete Tenant"
            message="Are you sure you want to delete this tenant? This action cannot be undone."
        />
    </AdminPageLayout>
  );
};

export default Tenants;

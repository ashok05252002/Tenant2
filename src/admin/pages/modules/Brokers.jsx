import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockBrokers } from '../../../customer/data/brokers';
import { Eye, Edit, Trash2, Star } from 'lucide-react';
import AddUserWizard from '../../components/users/AddUserWizard';
import ConfirmationModal from '../../components/ui/ConfirmationModal';

const Brokers = () => {
    const navigate = useNavigate();
    const [brokers, setBrokers] = useState(mockBrokers);
    const [isWizardOpen, setWizardOpen] = useState(false);
    const [editingBroker, setEditingBroker] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deletingBrokerId, setDeletingBrokerId] = useState(null);

    const handleViewBroker = (id) => {
        navigate(`/admin/brokers/${id}`);
    };

    const handleWizardSubmit = (formData) => {
        const newBroker = { 
            id: Date.now(), 
            ...formData, 
            contact: { phone: formData.phone, email: formData.email },
            activeListings: 0, 
            rating: 0, 
            reviews: 0,
            verified: true,
            photo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/lego/2.jpg'
        };
        setBrokers(prev => [newBroker, ...prev]);
    };

    const openDeleteModal = (id) => {
        setDeletingBrokerId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        setBrokers(prev => prev.filter(b => b.id !== deletingBrokerId));
        setDeleteModalOpen(false);
        setDeletingBrokerId(null);
    };

  return (
    <AdminPageLayout title="Brokers" actionButton="Add Broker" onActionClick={() => setWizardOpen(true)}>
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
          <table className="w-full text-sm">
              <thead className="bg-secondary-50 text-left text-secondary-600">
                  <tr>
                      <th className="p-3 font-semibold">Broker</th>
                      <th className="p-3 font-semibold">Contact</th>
                      <th className="p-3 font-semibold">Listings</th>
                      <th className="p-3 font-semibold">Rating</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {brokers.map((broker) => (
                      <tr key={broker.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => handleViewBroker(broker.id)}>
                          <td className="p-3">
                              <div className="flex items-center gap-3">
                                  <img src={broker.photo} alt={broker.name} className="w-10 h-10 rounded-full object-cover" />
                                  <span className="font-medium text-secondary-900">{broker.name}</span>
                              </div>
                          </td>
                          <td className="p-3">
                              <p className="text-secondary-800">{broker.contact.email}</p>
                              <p className="text-secondary-500 text-xs">{broker.contact.phone}</p>
                          </td>
                          <td className="p-3 text-secondary-700 font-medium">{broker.activeListings}</td>
                          <td className="p-3">
                              <div className="flex items-center gap-1">
                                  <Star size={14} className="text-yellow-500 fill-current" />
                                  <span className="font-medium text-secondary-800">{broker.rating}</span>
                                  <span className="text-secondary-500 text-xs">({broker.reviews})</span>
                              </div>
                          </td>
                          <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${broker.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                  {broker.verified ? 'Verified' : 'Pending'}
                              </span>
                          </td>
                          <td className="p-3">
                              <div className="flex gap-2">
                                  <button onClick={(e) => { e.stopPropagation(); handleViewBroker(broker.id); }} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                  <button onClick={(e) => { e.stopPropagation(); alert("Edit functionality to be implemented"); }} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                  <button onClick={(e) => { e.stopPropagation(); openDeleteModal(broker.id); }} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
       </div>
       <AddUserWizard
            isOpen={isWizardOpen}
            onClose={() => setWizardOpen(false)}
            onSubmit={handleWizardSubmit}
            userType="Broker"
        />
        <ConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={handleDeleteConfirm}
            title="Delete Broker"
            message="Are you sure you want to delete this broker? This action cannot be undone."
        />
    </AdminPageLayout>
  );
};

export default Brokers;

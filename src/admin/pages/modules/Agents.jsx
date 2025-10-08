import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockAgents } from '../../../customer/data/agents';
import { Eye, Edit, Trash2, Star } from 'lucide-react';

const Agents = () => {
  return (
    <AdminPageLayout title="Agents" actionButton="Add Agent">
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
          <table className="w-full text-sm">
              <thead className="bg-secondary-50 text-left text-secondary-600">
                  <tr>
                      <th className="p-3 font-semibold">Agent</th>
                      <th className="p-3 font-semibold">Contact</th>
                      <th className="p-3 font-semibold">Listings</th>
                      <th className="p-3 font-semibold">Rating</th>
                      <th className="p-3 font-semibold">Status</th>
                      <th className="p-3 font-semibold">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {mockAgents.map((agent) => (
                      <tr key={agent.id} className="border-b border-secondary-100 last:border-0">
                          <td className="p-3">
                              <div className="flex items-center gap-3">
                                  <img src={agent.photo} alt={agent.name} className="w-10 h-10 rounded-full object-cover" />
                                  <span className="font-medium text-secondary-900">{agent.name}</span>
                              </div>
                          </td>
                          <td className="p-3">
                              <p className="text-secondary-800">{agent.contact.email}</p>
                              <p className="text-secondary-500 text-xs">{agent.contact.phone}</p>
                          </td>
                          <td className="p-3 text-secondary-700 font-medium">{agent.activeListings}</td>
                          <td className="p-3">
                              <div className="flex items-center gap-1">
                                  <Star size={14} className="text-yellow-500 fill-current" />
                                  <span className="font-medium text-secondary-800">{agent.rating}</span>
                                  <span className="text-secondary-500 text-xs">({agent.reviews})</span>
                              </div>
                          </td>
                          <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${agent.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                  {agent.verified ? 'Verified' : 'Pending'}
                              </span>
                          </td>
                          <td className="p-3">
                              <div className="flex gap-2">
                                  <button className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                  <button className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                  <button className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
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

export default Agents;

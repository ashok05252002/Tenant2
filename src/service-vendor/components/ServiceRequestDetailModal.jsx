import React, { useState } from 'react';
import { X, Upload, CheckCircle, Clock, Wrench, User } from 'lucide-react';
import { mockVendorTechnicians } from '../data/vendorTechnicians';

const ServiceRequestDetailModal = ({ isOpen, onClose, request, onUpdate }) => {
    const [status, setStatus] = useState(request?.status || 'New Request');
    const [assignedTechnician, setAssignedTechnician] = useState(request?.technician || '');
    const [completionProof, setCompletionProof] = useState(null);

    if (!isOpen) return null;

    const handleUpdate = () => {
        onUpdate({ ...request, status, technician: assignedTechnician });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Service Request: {request.id}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-6 overflow-y-auto">
                    <div>
                        <h3 className="font-semibold text-secondary-800">{request.service}</h3>
                        <p className="text-sm text-secondary-600">{request.property} | Requested by: {request.tenant}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-secondary-700 mb-2">Issue Description</h4>
                            <p className="text-sm p-3 bg-secondary-50 rounded-lg">{request.description}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-secondary-700 mb-2">Photo of Issue</h4>
                            <img src={request.photo} alt="Issue" className="w-full h-32 object-cover rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium text-secondary-700 mb-2">Update Status</h4>
                        <div className="flex gap-2 flex-wrap">
                            {['Accepted', 'In Progress', 'Completed', 'Cancelled'].map(s => (
                                <button key={s} onClick={() => setStatus(s)} className={`px-3 py-1 text-sm rounded-full ${status === s ? 'bg-orange-500 text-white' : 'bg-secondary-200'}`}>{s}</button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Assign Technician</label>
                            <select value={assignedTechnician} onChange={(e) => setAssignedTechnician(e.target.value)} className="w-full p-2 border border-secondary-300 rounded-lg">
                                <option value="">Unassigned</option>
                                {mockVendorTechnicians.filter(t => t.status === 'Available').map(t => (
                                    <option key={t.id} value={t.name}>{t.name} ({t.specialty})</option>
                                ))}
                            </select>
                        </div>
                        {status === 'Completed' && (
                            <div>
                                <h4 className="font-medium text-secondary-700 mb-2">Upload Completion Proof</h4>
                                <div className="border-2 border-dashed border-secondary-300 rounded-lg p-4 text-center">
                                    <Upload className="mx-auto h-8 w-8 text-secondary-400" />
                                    <label className="cursor-pointer mt-1 text-primary-600 font-medium text-sm">
                                        Upload Photo or Invoice
                                        <input type="file" className="hidden" onChange={(e) => setCompletionProof(e.target.files[0])} />
                                    </label>
                                    {completionProof && <p className="text-xs text-green-600 mt-1">{completionProof.name}</p>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-4 flex justify-end bg-secondary-50 border-t">
                    <button onClick={handleUpdate} className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium text-sm">
                        Update Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceRequestDetailModal;

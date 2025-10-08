import React, { useState } from 'react';
import { X, User, Home, Wrench, Calendar, DollarSign, CheckCircle, Clock, Shield } from 'lucide-react';

const DetailItem = ({ icon: Icon, label, value }) => (
    <div>
        <div className="flex items-center gap-2 text-sm text-secondary-500">
            <Icon size={16} />
            <span>{label}</span>
        </div>
        <p className="font-semibold text-secondary-800 mt-1">{value || 'N/A'}</p>
    </div>
);

const MaintenanceDetailModal = ({ isOpen, onClose, request }) => {
    const [priority, setPriority] = useState(request?.priority || 'Medium');

    if (!isOpen) return null;

    const getStatusInfo = (status) => {
        switch (status) {
            case 'Completed': return { text: 'Completed', color: 'text-green-600' };
            case 'In Progress': return { text: 'In Progress', color: 'text-blue-600' };
            case 'Open': return { text: 'Open', color: 'text-yellow-600' };
            default: return { text: status, color: 'text-secondary-600' };
        }
    };
    const statusInfo = getStatusInfo(request.status);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Maintenance Request: {request.id}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DetailItem icon={Home} label="Property" value={request.property} />
                        <DetailItem icon={User} label="Tenant" value={request.tenant} />
                        <DetailItem icon={Wrench} label="Service" value={request.service} />
                        <DetailItem icon={Calendar} label="Date Submitted" value={request.date} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-secondary-700">Status</p>
                        <p className={`font-bold text-lg ${statusInfo.color}`}>{statusInfo.text}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
                        <DetailItem icon={User} label="Assigned To" value={request.assignedTo} />
                        <DetailItem icon={DollarSign} label="Service Cost" value={request.cost ? `${request.cost.toFixed(2)} OMR` : 'N/A'} />
                        <div className="flex items-center gap-2">
                            {request.paymentStatus === 'Paid' ? <CheckCircle className="text-green-500" /> : <Clock className="text-yellow-500" />}
                            <div>
                                <p className="text-sm text-secondary-500">Payment Status</p>
                                <p className="font-semibold">{request.paymentStatus}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                         <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Priority</label>
                            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full p-2 border border-secondary-300 rounded-lg">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-secondary-50 border-t flex justify-between items-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
                        <X size={16} /> Close Ticket
                    </button>
                    <button onClick={onClose} className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                        Save & Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceDetailModal;

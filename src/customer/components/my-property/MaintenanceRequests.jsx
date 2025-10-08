import React from 'react';
import { PlusCircle, Clock, CheckCircle, Wrench } from 'lucide-react';

const MaintenanceRequests = ({ requests, onNewRequest }) => {
    const getStatusInfo = (status) => {
        switch (status) {
            case 'Open': return { icon: Clock, color: 'text-blue-500' };
            case 'In Progress': return { icon: Wrench, color: 'text-yellow-500 ' };
            case 'Resolved': return { icon: CheckCircle, color: 'text-green-500' };
            default: return { icon: Clock, color: 'text-secondary-500' };
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-secondary-900">Maintenance Requests</h2>
                <button 
                    onClick={onNewRequest}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
                >
                    <PlusCircle size={16} /> New Request
                </button>
            </div>
            <div className="space-y-4">
                {requests.map(req => {
                    const StatusIcon = getStatusInfo(req.status).icon;
                    const color = getStatusInfo(req.status).color;
                    return (
                        <div key={req.id} className="p-4 border border-secondary-200 rounded-lg">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-secondary-800">{req.category}</p>
                                    <p className="text-sm text-secondary-600 mt-1">{req.description}</p>
                                </div>
                                <div className={`flex items-center gap-2 text-sm font-medium ${color}`}>
                                    <StatusIcon size={16} />
                                    <span>{req.status}</span>
                                </div>
                            </div>
                            <p className="text-xs text-secondary-400 mt-2 text-right">Submitted on {req.date}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MaintenanceRequests;

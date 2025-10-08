import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockNotificationLogs } from '../../data/notifications';
import { Mail, MessageSquare, Bell, CheckCircle, XCircle } from 'lucide-react';

const NotificationLogs = () => {
    const getIcon = (type) => {
        if (type === 'Email') return <Mail size={16} />;
        if (type === 'SMS') return <MessageSquare size={16} />;
        return <Bell size={16} />;
    };

    return (
        <AdminPageLayout title="Notification Logs">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Type</th>
                            <th className="p-3 font-semibold">Recipient</th>
                            <th className="p-3 font-semibold">Subject</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockNotificationLogs.map((log) => (
                            <tr key={log.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3">
                                    <div className="flex items-center gap-2">
                                        {getIcon(log.type)}
                                        <span>{log.type}</span>
                                    </div>
                                </td>
                                <td className="p-3 text-secondary-800">{log.recipient}</td>
                                <td className="p-3 text-secondary-700">{log.subject}</td>
                                <td className="p-3">
                                    <span className={`flex items-center gap-1 text-xs font-medium ${log.status === 'Sent' ? 'text-green-600' : 'text-red-600'}`}>
                                        {log.status === 'Sent' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                        {log.status}
                                    </span>
                                </td>
                                <td className="p-3 text-secondary-500">{log.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default NotificationLogs;

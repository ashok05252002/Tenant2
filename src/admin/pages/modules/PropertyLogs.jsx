import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockPropertyLogs } from '../../data/propertyLogs';

const PropertyLogs = () => {
    return (
        <AdminPageLayout title="Property Audit Logs">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Timestamp</th>
                            <th className="p-3 font-semibold">Property</th>
                            <th className="p-3 font-semibold">User</th>
                            <th className="p-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPropertyLogs.map((log) => (
                            <tr key={log.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3 text-secondary-500">{log.timestamp}</td>
                                <td className="p-3 font-medium text-secondary-900">{`Property #${log.propertyId}`}</td>
                                <td className="p-3 text-secondary-700">{log.user}</td>
                                <td className="p-3 text-secondary-700">{log.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default PropertyLogs;

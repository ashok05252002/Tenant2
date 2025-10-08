import React, { useState, useMemo } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockLogs } from '../../data/logs';
import { Search } from 'lucide-react';

const Logs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userTypeFilter, setUserTypeFilter] = useState('All');
    const [moduleFilter, setModuleFilter] = useState('All');

    const filteredLogs = useMemo(() => {
        return mockLogs.filter(log => {
            const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  log.target.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesUserType = userTypeFilter === 'All' || log.userType === userTypeFilter;
            const matchesModule = moduleFilter === 'All' || log.module === moduleFilter;
            return matchesSearch && matchesUserType && matchesModule;
        });
    }, [searchTerm, userTypeFilter, moduleFilter]);

    const userTypes = [...new Set(mockLogs.map(log => log.userType))];
    const modules = [...new Set(mockLogs.map(log => log.module))];

    return (
        <AdminPageLayout title="Activity Logs">
            <div className="mb-4 p-4 bg-white rounded-xl shadow-sm border border-secondary-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative md:col-span-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search logs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                        />
                    </div>
                    <select
                        value={userTypeFilter}
                        onChange={(e) => setUserTypeFilter(e.target.value)}
                        className="w-full py-2 px-3 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                    >
                        <option value="All">All User Types</option>
                        {userTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                     <select
                        value={moduleFilter}
                        onChange={(e) => setModuleFilter(e.target.value)}
                        className="w-full py-2 px-3 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-300"
                    >
                        <option value="All">All Modules</option>
                        {modules.map(mod => <option key={mod} value={mod}>{mod}</option>)}
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">User</th>
                            <th className="p-3 font-semibold">Action</th>
                            <th className="p-3 font-semibold">Target</th>
                            <th className="p-3 font-semibold">Module</th>
                            <th className="p-3 font-semibold">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLogs.map((log) => (
                            <tr key={log.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3">
                                    <p className="font-medium text-secondary-900">{log.user}</p>
                                    <p className="text-xs text-secondary-500">{log.userType}</p>
                                </td>
                                <td className="p-3 text-secondary-700">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">{log.action}</span>
                                </td>
                                <td className="p-3 text-secondary-700">{log.target}</td>
                                <td className="p-3 text-secondary-700">{log.module}</td>
                                <td className="p-3 text-secondary-500">{log.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default Logs;

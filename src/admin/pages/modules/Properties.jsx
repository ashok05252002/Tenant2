import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockAdminProperties } from '../../../data/properties';
import { Eye, Edit, Trash2, Search, SlidersHorizontal } from 'lucide-react';
import AdvancedFilterModal from '../../components/filters/AdvancedFilterModal';
import Switch from '../../components/ui/Switch';

const Properties = () => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState(mockAdminProperties);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterModalOpen, setFilterModalOpen] = useState(false);
    const [advancedFilters, setAdvancedFilters] = useState({});

    const handleAddProperty = () => {
        navigate('/admin/modules/properties/add');
    };

    const handleViewProperty = (id) => {
        navigate(`/admin/modules/properties/${id}`);
    };

    const handleStatusChange = (id, currentStatus) => {
        setProperties(prevProps => 
            prevProps.map(p => p.id === id ? { ...p, status: currentStatus === 'Active' ? 'Inactive' : 'Active' } : p)
        );
    };

    const filteredProperties = useMemo(() => {
        return properties.filter(prop => {
            const lowerSearchTerm = searchTerm.toLowerCase();
            const matchesSearch = prop.name.toLowerCase().includes(lowerSearchTerm);
            
            const matchesAdvProject = advancedFilters.project === 'all' || !advancedFilters.project || prop.project === advancedFilters.project;
            const matchesAdvStatus = advancedFilters.status === 'all' || !advancedFilters.status || prop.occupancyStatus === advancedFilters.status;

            return matchesSearch && matchesAdvProject && matchesAdvStatus;
        });
    }, [properties, searchTerm, advancedFilters]);

    return (
        <AdminPageLayout title="Properties" actionButton="Add Property" onActionClick={handleAddProperty}>
            <div className="mb-4 p-4 bg-white rounded-xl shadow-sm border border-secondary-200">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative flex-grow w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by Property name..."
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
                            <th className="p-3 font-semibold">Property Name</th>
                            <th className="p-3 font-semibold">Location</th>
                            <th className="p-3 font-semibold">Occupancy</th>
                            <th className="p-3 font-semibold">Published</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProperties.map((prop) => (
                            <tr key={prop.id} className="border-b border-secondary-100 last:border-0 hover:bg-secondary-50 cursor-pointer" onClick={() => handleViewProperty(prop.id)}>
                                <td className="p-3 font-medium text-secondary-900">{prop.name}</td>
                                <td className="p-3 text-secondary-700">{prop.location}</td>
                                <td className="p-3 text-secondary-700">{prop.occupancyStatus}</td>
                                <td className="p-3">
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <Switch checked={prop.status === 'Active'} onChange={() => handleStatusChange(prop.id, prop.status)} />
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button onClick={(e) => { e.stopPropagation(); handleViewProperty(prop.id); }} className="p-1.5 text-secondary-500 hover:text-blue-600"><Eye size={16} /></button>
                                        <button onClick={(e) => { e.stopPropagation(); navigate(`/admin/modules/properties/${prop.id}?edit=true`); }} className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button onClick={(e) => e.stopPropagation()} className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AdvancedFilterModal 
                isOpen={isFilterModalOpen}
                onClose={() => setFilterModalOpen(false)}
                onApply={setAdvancedFilters}
                onReset={() => setAdvancedFilters({})}
            />
        </AdminPageLayout>
    );
};

export default Properties;

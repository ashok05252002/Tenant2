import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import FilterPanel from '../components/FilterPanel';
import PropertyCard from '../components/PropertyCard';
import ProjectGroupCard from '../components/ProjectGroupCard';
import ScheduleViewingModal from '../components/ScheduleViewingModal';
import { useAuth } from '../context/AuthContext';
import { List, Grid, ArrowDownUp, Search, Building, LayoutGrid } from 'lucide-react';
import { mockUnits } from '../../data/units';

const PropertySearch = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'project'
  const [filters, setFilters] = useState({});
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedPropertyForSchedule, setSelectedPropertyForSchedule] = useState(null);
  const { handleGatedAction } = useAuth();

  const category = searchParams.get('category') || 'residential';

  const handleOpenScheduleModal = (property) => {
    handleGatedAction(() => {
        setSelectedPropertyForSchedule(property);
        setScheduleModalOpen(true);
    });
  };

  const landlordForModal = selectedPropertyForSchedule 
    ? selectedPropertyForSchedule.landlord
    : null;

  const filteredProperties = useMemo(() => {
    const type = searchParams.get('type');
    
    return mockUnits.filter(property => {
      const typeMatch = !type || property.listingType === type;
      const categoryMatch = !category || property.category === category;
      // Add more advanced filter logic here based on `filters` state
      return typeMatch && categoryMatch;
    });
  }, [searchParams, filters, category]);

  const groupedByProject = useMemo(() => {
    return filteredProperties.reduce((acc, property) => {
      const project = property.project || 'Individual Listings';
      if (!acc[project]) {
        acc[project] = [];
      }
      acc[project].push(property);
      return acc;
    }, {});
  }, [filteredProperties]);

  return (
    <CustomerLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 mb-8">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Find Your Next Space</h1>
          <div className="flex gap-2 p-2 bg-secondary-100 rounded-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location, property, or keywords..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <FilterPanel onFilterChange={setFilters} category={category} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-secondary-700">Showing <span className="font-bold">{filteredProperties.length}</span> results</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ArrowDownUp size={16} className="text-secondary-500" />
                  <select className="border-none bg-transparent text-sm text-secondary-700 focus:ring-0">
                    <option>Sort by: Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
                <div className="flex items-center gap-1 p-1 bg-secondary-200 rounded-lg">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}><LayoutGrid size={18} /></button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}><List size={18} /></button>
                  <button onClick={() => setViewMode('project')} className={`p-2 rounded-md ${viewMode === 'project' ? 'bg-white shadow-sm' : ''}`}><Building size={18} /></button>
                </div>
              </div>
            </div>

            {/* Property List/Grid */}
            {viewMode === 'grid' && (
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} viewMode="grid" onScheduleClick={handleOpenScheduleModal} />
                ))}
              </div>
            )}
            {viewMode === 'list' && (
              <div className="grid gap-8 grid-cols-1">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} viewMode="list" onScheduleClick={handleOpenScheduleModal} />
                ))}
              </div>
            )}
            {viewMode === 'project' && (
              <div className="space-y-8">
                {Object.entries(groupedByProject).map(([projectName, properties]) => (
                    <ProjectGroupCard key={projectName} projectName={projectName} properties={properties} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedPropertyForSchedule && (
        <ScheduleViewingModal 
          isOpen={isScheduleModalOpen}
          onClose={() => setScheduleModalOpen(false)}
          landlord={landlordForModal}
        />
      )}
    </CustomerLayout>
  );
};

export default PropertySearch;

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { mockUnits } from '../../data/units';
import MobilePropertyCard from '../components/MobilePropertyCard';
import MobileFilterPanel from '../components/search/MobileFilterPanel';

const MobileSearch = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const filteredProperties = useMemo(() => {
        if (!hasSearched || !searchTerm) return [];
        return mockUnits.filter(property =>
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, hasSearched]);

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            setHasSearched(true);
        }
    };

    return (
        <div className="bg-secondary-900 min-h-screen text-white">
            <div className="p-4 sticky top-0 bg-secondary-900 z-10">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search properties..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                            className="w-full pl-12 pr-4 py-3 border border-secondary-700 rounded-full bg-secondary-800 text-white"
                        />
                    </div>
                    <button onClick={() => setIsFilterOpen(true)} className="p-3 bg-secondary-800 border border-secondary-700 rounded-full">
                        <SlidersHorizontal size={20} />
                    </button>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {!hasSearched ? (
                    <div className="flex flex-col items-center justify-center text-center pt-24">
                        <Search size={48} className="text-secondary-600 mb-4" />
                        <h2 className="text-xl font-bold">Find Your Next Home</h2>
                        <p className="text-secondary-400">Start by typing in the search bar above.</p>
                    </div>
                ) : filteredProperties.length > 0 ? (
                    filteredProperties.map(property => (
                        <MobilePropertyCard key={property.id} property={property} />
                    ))
                ) : (
                    <div className="text-center pt-24">
                        <p className="text-secondary-400">No properties found for "{searchTerm}".</p>
                    </div>
                )}
            </div>

            {/* Filter Panel */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
                    <div className="w-4/5 h-full bg-secondary-800 p-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
                        </div>
                        <MobileFilterPanel />
                    </div>
                </div>
            )}
        </div>
    );
};
export default MobileSearch;

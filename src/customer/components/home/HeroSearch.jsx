import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Home, DollarSign, Bed, Building, Briefcase, Square } from 'lucide-react';
import FilterDropdown from './FilterDropdown';

// Options for Residential
const residentialPropertyTypeOptions = ['Any', 'Apartment', 'Villa', 'Townhouse', 'Penthouse'];
const residentialPriceOptions = ['Any', 'Under 500 OMR', '500-1000 OMR', '1000-1500 OMR', 'Over 1500 OMR'];
const bedroomOptions = ['Any', '1', '2', '3', '4+'];

// Options for Commercial
const commercialPropertyTypeOptions = ['Any', 'Office', 'Retail Shop', 'Warehouse', 'IT Space'];

const HeroSearch = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Rent');
  const [activeCategory, setActiveCategory] = useState('Residential');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      q: searchQuery,
      ...filters,
      type: activeTab.toLowerCase(),
      category: activeCategory.toLowerCase(),
    });
    if (minArea) queryParams.set('minArea', minArea);
    if (maxArea) queryParams.set('maxArea', maxArea);
    
    navigate(`/search?${queryParams.toString()}`);
  };

  const isResidential = activeCategory === 'Residential';

  return (
    <motion.section 
      className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      {/* Background Image */}
      <div className="absolute z-0 top-0 left-0 w-full h-full">
        <img 
          src="https://connectingtravel.com/AcuCustom/Sitename/DAM/333/muscat_corniche_oman1_Main.webp"
          alt="Muscat Corniche"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Find Your Perfect Space
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-lg text-gray-200"
          >
            Discover verified properties for rent and buy across Oman
          </motion.p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-2xl"
        >
          {/* Tabs */}
          <div className="flex justify-center mb-2">
            <div className="bg-black/20 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setActiveTab('Rent')}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === 'Rent' ? 'bg-white text-secondary-900' : 'text-white hover:bg-white/20'
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setActiveTab('Buy')}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === 'Buy' ? 'bg-white text-secondary-900' : 'text-white hover:bg-white/20'
                }`}
              >
                Buy
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="bg-black/20 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setActiveCategory('Residential')}
                className={`px-4 py-1 text-xs font-medium rounded-full transition-colors flex items-center gap-1 ${
                  activeCategory === 'Residential' ? 'bg-white text-secondary-900' : 'text-white hover:bg-white/20'
                }`}
              >
                <Building size={14} /> Residential
              </button>
              <button
                onClick={() => setActiveCategory('Commercial')}
                className={`px-4 py-1 text-xs font-medium rounded-full transition-colors flex items-center gap-1 ${
                  activeCategory === 'Commercial' ? 'bg-white text-secondary-900' : 'text-white hover:bg-white/20'
                }`}
              >
                <Briefcase size={14} /> Commercial
              </button>
            </div>
          </div>
          
          {/* Search Form */}
          <div className="space-y-3">
            {/* Main Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'Enter location, property name...'}
                className="w-full pl-12 pr-4 py-4 bg-white text-secondary-800 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filters and Search Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <FilterDropdown
                  label="Property Type"
                  icon={Home}
                  options={isResidential ? residentialPropertyTypeOptions : commercialPropertyTypeOptions}
                  onSelect={(value) => handleFilterChange('propertyType', value)}
                />
                <FilterDropdown
                  label="Max Price"
                  icon={DollarSign}
                  options={residentialPriceOptions}
                  onSelect={(value) => handleFilterChange('price', value)}
                />
                {isResidential ? (
                    <FilterDropdown
                        label="Bedrooms"
                        icon={Bed}
                        options={bedroomOptions}
                        onSelect={(value) => handleFilterChange('beds', value)}
                    />
                ) : (
                    <div className="w-full flex items-center justify-between text-left px-2 py-1.5 bg-white text-secondary-700 rounded-lg border border-secondary-300 hover:border-secondary-400">
                        <div className="flex items-center gap-2 w-full">
                            <Square size={16} className="text-secondary-400 ml-2" />
                            <input 
                                type="number" 
                                placeholder="Min sq ft" 
                                className="w-full bg-transparent border-0 p-1.5 focus:ring-0 text-sm placeholder-secondary-500"
                                value={minArea}
                                onChange={(e) => setMinArea(e.target.value)}
                            />
                            <span className="text-secondary-300">|</span>
                            <input 
                                type="number" 
                                placeholder="Max sq ft" 
                                className="w-full bg-transparent border-0 p-1.5 focus:ring-0 text-sm placeholder-secondary-500"
                                value={maxArea}
                                onChange={(e) => setMaxArea(e.target.value)}
                            />
                        </div>
                    </div>
                )}
                 <button 
                    onClick={handleSearch}
                    className="w-full px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Search size={18} />
                    Search
                  </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSearch;

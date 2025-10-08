import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { mockUnits } from '../../data/units';
import MobilePropertyCard from '../components/MobilePropertyCard';
import BannerCarousel from '../components/home/BannerCarousel';
import CategoryGrid from '../components/home/CategoryGrid';

const MobileHome = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            {/* Header with Search */}
            <div className="p-4 bg-white">
                <button 
                    onClick={() => navigate('/mobile/search')}
                    className="w-full flex items-center gap-3 p-3 bg-secondary-100 border border-secondary-200 rounded-full text-secondary-500"
                >
                    <Search size={20} />
                    <span>Search properties...</span>
                </button>
            </div>

            {/* Banner Carousel */}
            <BannerCarousel />

            {/* Categories */}
            <CategoryGrid />
            
            {/* Featured Properties */}
            <div className="px-4 space-y-4">
                <h2 className="text-xl font-bold text-secondary-800">Featured Properties</h2>
                {mockUnits.slice(0, 5).map(property => (
                    <MobilePropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default MobileHome;

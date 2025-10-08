import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Repeat, Building, Home } from 'lucide-react';

const categories = [
    { label: 'Rent', icon: Repeat, type: 'rent', category: 'residential' },
    { label: 'Buy', icon: ShoppingCart, type: 'buy', category: 'residential' },
    { label: 'Residential', icon: Home, type: 'rent', category: 'residential' },
    { label: 'Commercial', icon: Building, type: 'rent', category: 'commercial' },
];

const CategoryGrid = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (type, category) => {
        navigate(`/mobile/search?type=${type}&category=${category}`);
    };

    return (
        <div className="px-4">
            <div className="grid grid-cols-4 gap-4">
                {categories.map(cat => (
                    <button 
                        key={cat.label}
                        onClick={() => handleCategoryClick(cat.type, cat.category)}
                        className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-secondary-100"
                    >
                        <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                            <cat.icon size={20} />
                        </div>
                        <span className="text-xs font-medium text-secondary-700">{cat.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;

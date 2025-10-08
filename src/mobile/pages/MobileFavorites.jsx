import React from 'react';
import { Heart } from 'lucide-react';

const MobileFavorites = () => {
    return (
        <div className="p-4 text-center mt-12">
            <Heart size={48} className="mx-auto text-red-300 mb-4" />
            <h1 className="text-xl font-bold">My Favorites</h1>
            <p className="text-secondary-500 mt-2">Your saved properties will appear here.</p>
        </div>
    );
};
export default MobileFavorites;

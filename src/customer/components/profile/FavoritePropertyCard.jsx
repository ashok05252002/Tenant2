import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const FavoritePropertyCard = ({ property }) => {
    const navigate = useNavigate();
    const { toggleFavorite } = useAuth();

    const handleUnlike = (e) => {
        e.stopPropagation();
        toggleFavorite(property.id);
    };

    return (
        <div 
            onClick={() => navigate(`/property/${property.id}`)}
            className="bg-cream-50 rounded-lg border border-cream-200 overflow-hidden flex gap-4 p-3 cursor-pointer hover:shadow-md"
        >
            <img src={property.images[0]} alt={property.title} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1 flex flex-col">
                <h4 className="font-semibold text-sm text-secondary-800">{property.title}</h4>
                <p className="text-xs text-secondary-500 flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {property.location}
                </p>
                <div className="flex-grow"></div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-md font-bold text-primary-700">{property.price} <span className="text-xs font-normal">/mo</span></p>
                    <button onClick={handleUnlike} className="text-xs text-red-500 hover:underline">
                        Unlike
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FavoritePropertyCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, FileText } from 'lucide-react';
import { useAuth } from '../../customer/context/AuthContext';

const MobilePropertyCard = ({ property }) => {
    const navigate = useNavigate();
    const { handleGatedAction } = useAuth();

    const handleApply = (e) => {
        e.stopPropagation();
        handleGatedAction(() => {
            navigate(`/mobile/apply/${property.id}`);
        });
    };

    return (
        <div 
            onClick={() => navigate(`/mobile/property/${property.id}`)}
            className="bg-white rounded-xl shadow-md border border-secondary-100 overflow-hidden"
        >
            <img src={property.images[0]} alt={property.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg text-secondary-900">{property.title}</h3>
                        <p className="text-sm text-secondary-500 flex items-center gap-1 mt-1">
                            <MapPin size={14} /> {property.location}
                        </p>
                    </div>
                    <p className="text-lg font-bold text-primary-700">{property.price}<span className="text-xs font-normal">/mo</span></p>
                </div>
                <div className="flex items-center gap-4 text-sm text-secondary-600 mt-3 border-t pt-3">
                    <span className="flex items-center gap-1"><Bed size={16} />{property.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={16} />{property.baths}</span>
                    <span className="flex items-center gap-1"><Square size={16} />{property.area} sqft</span>
                </div>
                <button
                    onClick={handleApply}
                    className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800"
                >
                    <FileText size={16} /> Apply Now
                </button>
            </div>
        </div>
    );
};

export default MobilePropertyCard;

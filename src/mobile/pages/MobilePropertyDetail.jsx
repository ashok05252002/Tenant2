import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockUnits } from '../../data/units';
import { MapPin, Bed, Bath, Square, PawPrint, FileText, ChevronLeft } from 'lucide-react';
import ImageCarousel from '../components/property-detail/ImageCarousel';
import NearbyLocations from '../../customer/components/property-detail/NearbyLocations';
import { useAuth } from '../../customer/context/AuthContext';

const MobilePropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { handleGatedAction } = useAuth();
    const property = mockUnits.find(p => p.id === parseInt(id));

    if (!property) return <div className="p-4 text-center">Property not found</div>;

    const handleApply = () => {
        handleGatedAction(() => {
            navigate(`/mobile/apply/${property.id}`);
        });
    };

    return (
        <div>
            <div className="relative">
                <ImageCarousel images={property.images} />
                <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-black/40 text-white p-2 rounded-full z-10">
                    <ChevronLeft size={24} />
                </button>
            </div>
            
            <div className="p-4 space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-secondary-900">{property.title}</h1>
                    <p className="text-md text-secondary-500 flex items-center gap-1 mt-1"><MapPin size={16} /> {property.location}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 text-center bg-cream-100 p-4 rounded-xl border border-cream-200">
                    <div><p className="font-bold text-lg">{property.beds}</p><p className="text-xs text-secondary-500">Beds</p></div>
                    <div><p className="font-bold text-lg">{property.baths}</p><p className="text-xs text-secondary-500">Baths</p></div>
                    <div><p className="font-bold text-lg">{property.area}</p><p className="text-xs text-secondary-500">sq ft</p></div>
                </div>

                {/* Description & Amenities */}
                <div>
                    <h2 className="font-bold text-lg mb-2">About this property</h2>
                    <p className="text-secondary-600 text-sm">A beautifully designed apartment in a prime location. Perfect for professionals or families looking for a stylish and convenient living space.</p>
                    {property.petsAllowed && (
                        <div className="mt-4 flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg">
                            <PawPrint size={20} />
                            <span className="text-sm font-medium">Pets are welcome! ({property.allowedPets.join(', ')})</span>
                        </div>
                    )}
                </div>
                
                {/* Nearby */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <NearbyLocations />
                </div>
            </div>

            {/* Sticky Apply Button */}
            <div className="sticky bottom-16 left-0 right-0 p-4 bg-cream-50/80 backdrop-blur-sm border-t border-cream-200">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-secondary-500">Price</p>
                        <p className="font-bold text-xl text-primary-700">{property.price} OMR/mo</p>
                    </div>
                    <button onClick={handleApply} className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-xl font-bold">
                        <FileText size={18} /> Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobilePropertyDetail;

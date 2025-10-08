import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import ScheduleViewingModal from '../components/ScheduleViewingModal';
import PropertyCard from '../components/PropertyCard';
import OwnerContactPanel from '../components/property-detail/OwnerContactPanel';
import NearbyLocations from '../components/property-detail/NearbyLocations';
import { useAuth } from '../context/AuthContext';
import { MapPin, Bed, Bath, Square, Heart, Wifi, Snowflake, Dumbbell, ArrowLeft, Dog, Car, Users, Building, FileText, Calendar, PawPrint } from 'lucide-react';
import { mockUnits } from '../../data/units';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleGatedAction } = useAuth();

  const property = mockUnits.find(p => p.id === parseInt(id)) || mockUnits[0];

  const [mainImage, setMainImage] = useState(property.images[0]);
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);

  const relatedProperties = mockUnits.filter(p => p.id !== parseInt(id)).slice(0, 3);

  const amenities = [
    { name: 'Free WiFi', icon: Wifi },
    { name: 'Free Parking', icon: Car },
    { name: 'Air Conditioning', icon: Snowflake },
    { name: 'Gym Access', icon: Dumbbell },
  ];

  const handleSchedule = () => {
    handleGatedAction(() => setScheduleModalOpen(true));
  };
  
  const handleApply = () => {
    handleGatedAction(() => {
        navigate(`/application-process/${property.id}`);
    }, { requireKyc: true });
  };
  
  const handleFavorite = (e) => {
    e.stopPropagation();
    handleGatedAction(() => console.log('Favorited property:', id));
  };
  
  const getBuildingAge = (year) => {
    if (!year) return 'N/A';
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age <= 0) return 'Brand New';
    if (age === 1) return '1 year old';
    return `${age} years old`;
  }

  return (
    <CustomerLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-secondary-600 hover:text-primary-700 transition-colors font-medium mb-4"
        >
            <ArrowLeft size={20} />
            Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
                {/* Image Gallery */}
                <div className="bg-cream-100 rounded-xl shadow-sm border border-cream-200 p-4">
                    <div className="relative">
                        <img src={mainImage} alt="Main property view" className="w-full h-[450px] object-cover rounded-xl" />
                        <div className="absolute top-3 right-3">
                            <button onClick={handleFavorite} className="w-10 h-10 bg-cream-100 rounded-full flex items-center justify-center shadow-md hover:bg-cream-200 transition-colors">
                                <Heart size={20} className="text-secondary-500" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 pt-2 mt-2">
                        {property.images.slice(0, 5).map((img, index) => (
                            <img
                            key={index}
                            src={img}
                            alt={`Property view ${index + 1}`}
                            className={`w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity ${mainImage === img ? 'ring-2 ring-primary-700' : ''}`}
                            onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Property Details */}
                <div className="bg-cream-100 rounded-xl shadow-sm border border-cream-200 p-6">
                    <div className="pb-6 border-b border-cream-200">
                        <h2 className="text-2xl font-semibold text-secondary-900">Apartment Details</h2>
                        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-4 text-secondary-700">
                            {property.category === 'residential' ? (
                                <>
                                    <div className="flex items-center gap-2"><Bed size={20} /><span>{property.beds} Bedroom</span></div>
                                    <div className="flex items-center gap-2"><Bath size={20} /><span>{property.baths} Bathroom</span></div>
                                </>
                            ) : null}
                            <div className="flex items-center gap-2"><Square size={20} /><span>{property.area} sq ft</span></div>
                            <div className="flex items-center gap-2"><Car size={20} /><span>{property.parking || '1 Parking Spot'}</span></div>
                            <div className="flex items-center gap-2"><Users size={20} /><span>For {property.preferredTenants || 'Families'}</span></div>
                            <div className="flex items-center gap-2"><Building size={20} /><span>Built in {property.builtYear} ({getBuildingAge(property.builtYear)})</span></div>
                        </div>
                    </div>
                    <div className="py-6 border-b border-cream-200">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Description</h3>
                        <p className="text-secondary-600 leading-relaxed">A beautifully designed apartment in a prime location. Perfect for professionals or families looking for a stylish and convenient living space. Features modern interiors, a spacious living area, and great views. The building offers top-notch amenities.</p>
                    </div>
                    <div className="py-6">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {amenities.map(amenity => {
                            const Icon = amenity.icon;
                            return (
                            <div key={amenity.name} className="flex items-center gap-2 text-secondary-700">
                                <Icon size={20} className="text-primary-700" />
                                <span>{amenity.name}</span>
                            </div>
                            );
                        })}
                        {property.petsAllowed && (
                             <div className="flex items-center gap-2 text-secondary-700">
                                <PawPrint size={20} className="text-primary-700" />
                                <span>Pets Allowed ({property.allowedPets.join(', ')})</span>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8 sticky top-24 h-max">
                <div className="bg-cream-100 rounded-xl shadow-sm border border-cream-200 p-6">
                    <h1 className="text-3xl font-bold text-secondary-900">{property.title}</h1>
                    <div className="flex items-center gap-2 text-secondary-600 mt-2 mb-4">
                        <MapPin size={16} />
                        <span>{property.location}</span>
                    </div>
                    <p className="text-secondary-600">Starting from</p>
                    <p className="text-3xl font-bold text-primary-700 mb-4">{property.price} OMR <span className="text-lg font-normal text-secondary-500">/month</span></p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleApply}
                            className="w-full flex items-center justify-center gap-2 bg-primary-700 text-white py-3 px-4 rounded-lg hover:bg-primary-800 transition-colors font-medium"
                        >
                           <FileText size={18} /> Apply Now
                        </button>
                        <button
                            onClick={handleSchedule}
                            className="w-full flex items-center justify-center gap-2 bg-secondary-200 text-secondary-800 py-3 px-4 rounded-lg hover:bg-secondary-300 transition-colors font-medium"
                        >
                            <Calendar size={18} /> Schedule a Viewing
                        </button>
                    </div>
                </div>
                <OwnerContactPanel property={property} />
            </div>
        </div>

        {/* Nearby Locations */}
        <div className="mt-12 bg-cream-50 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                 <NearbyLocations />
            </div>
        </div>

        {/* Related Properties */}
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} onScheduleClick={handleSchedule} />
                ))}
            </div>
        </div>
      </div>
      <ScheduleViewingModal 
        isOpen={isScheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        landlord={property.landlord}
      />
    </CustomerLayout>
  );
};

export default PropertyDetail;

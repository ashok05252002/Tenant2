import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { MapPin, Bed, Bath, Square, Heart, Star, ChevronLeft, ChevronRight, Phone, Mail, Calendar, FileText } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PropertyCard = ({ property, viewMode = 'grid', onScheduleClick }) => {
  const navigate = useNavigate();
  const { handleGatedAction, isFavorite, toggleFavorite } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    handleGatedAction(() => toggleFavorite(property.id));
  };

  const handleSchedule = (e) => {
    e.stopPropagation();
    if (onScheduleClick) {
      onScheduleClick(property);
    } else {
      handleGatedAction(() => console.log('Scheduling viewing for property:', property.id));
    }
  };
  
  const handleApply = (e) => {
    e.stopPropagation();
    handleGatedAction(() => {
        navigate(`/application-process/${property.id}`);
    }, { requireKyc: true });
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  const cardClasses = viewMode === 'grid'
    ? "bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    : "bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row";

  const imageContainerClasses = viewMode === 'grid'
    ? "relative group"
    : "relative group md:w-1/3";
  
  const imageClasses = viewMode === 'grid'
    ? "w-full h-48 object-cover"
    : "w-full h-full object-cover";

  const contentClasses = viewMode === 'grid'
    ? "p-6 flex flex-col flex-grow"
    : "p-6 flex-1 flex flex-col";

  const isLiked = isFavorite(property.id);

  return (
    <motion.div 
      variants={cardVariants}
      className={cardClasses} 
      onClick={() => navigate(`/property/${property.id}`)} 
      style={{ cursor: 'pointer' }}
    >
      <div className={imageContainerClasses}>
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className={imageClasses}
        />
        {property.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {property.images.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}></div>
              ))}
            </div>
          </>
        )}
        <div className="absolute top-3 right-3">
          <button
            onClick={handleFavoriteClick}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-secondary-100 transition-colors"
          >
            <Heart size={16} className={`transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-secondary-400'}`} />
          </button>
        </div>
        {!property.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Not Available
            </span>
          </div>
        )}
      </div>

      <div className={contentClasses}>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-secondary-700">{property.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-secondary-500">
            <MapPin size={14} />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-secondary-900 mb-2 min-h-[56px]">
          {property.title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-secondary-600">
          <div className="flex items-center gap-1"><Bed size={16} /><span>{property.beds} bed</span></div>
          <div className="flex items-center gap-1"><Bath size={16} /><span>{property.baths} bath</span></div>
          <div className="flex items-center gap-1"><Square size={16} /><span>{property.area} sq ft</span></div>
        </div>

        <div className="flex-grow"></div>

        <div className="mt-auto pt-4 border-t border-secondary-200">
            <div className="flex items-stretch justify-between gap-4">
                {/* Left: Price */}
                <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg bg-secondary-100 pr-4 border-r border-secondary-200">
                    <span className="text-secondary-500 text-xs">Price</span>
                    <span className="text-2xl font-bold text-accent-600 leading-tight">{property.price}</span>
                    <span className="text-secondary-500 text-xs">OMR/month</span>
                </div>
                
                {/* Right: Actions */}
                <div className="flex-1 flex flex-col justify-center gap-2">
                    {/* Top row: Contact Icons */}
                    <div className="flex items-center justify-end gap-2">
                        <a href={`tel:${property.landlord.phone}`} onClick={(e) => e.stopPropagation()} className="p-2 text-secondary-600 hover:text-accent-600 rounded-full hover:bg-secondary-100 transition-colors" title="Call"><Phone size={18} /></a>
                        <a href={`mailto:${property.landlord.email}`} onClick={(e) => e.stopPropagation()} className="p-2 text-secondary-600 hover:text-accent-600 rounded-full hover:bg-secondary-100 transition-colors" title="Email"><Mail size={18} /></a>
                        <a href={`https://wa.me/${property.landlord.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-secondary-600 hover:text-accent-600 rounded-full hover:bg-secondary-100 transition-colors" title="WhatsApp"><WhatsAppIcon size={18} /></a>
                    </div>
                    {/* Bottom row: Schedule and Apply */}
                    {property.available && (
                        <div className="flex items-center justify-end gap-2">
                            <button onClick={handleSchedule} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-secondary-200 text-secondary-800 rounded-lg hover:bg-secondary-300 transition-colors text-sm font-medium" title="Schedule Viewing">
                                <Calendar size={16} />
                                <span>Schedule</span>
                            </button>
                            <button onClick={handleApply} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors text-sm font-medium" title="Apply Now">
                                <FileText size={16} />
                                <span>Apply</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;

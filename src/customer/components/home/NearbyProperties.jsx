import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useGeolocation from '../../hooks/useGeolocation';
import { mockUnits } from '../../../data/units';
import PropertyCard from '../PropertyCard';
import { MapPin, Loader } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const NearbyProperties = ({ onScheduleClick }) => {
    const navigate = useNavigate();
    const { location } = useGeolocation();

    const nearbyProperties = useMemo(() => {
        // In a real app, you'd use location.coordinates to filter.
        // For this demo, we'll just show some properties from Muscat.
        if (location.loaded && !location.error) {
            return mockUnits.filter(p => p.location.includes('Muscat')).slice(0, 3);
        }
        // Default if location is not available
        return mockUnits.slice(0, 3);
    }, [location.loaded, location.error]);

    return (
        <motion.section
            className="bg-cream-100 py-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative text-center mb-8">
                    <h2 className="text-3xl font-bold text-secondary-900">Properties Near You</h2>
                    <button
                        onClick={() => navigate('/search')}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-primary-600 hover:text-primary-700 font-medium hidden sm:block"
                    >
                        View All →
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nearbyProperties.map(property => (
                        <PropertyCard key={property.id} property={property} onScheduleClick={onScheduleClick} />
                    ))}
                </div>
                <div className="text-center mt-8 sm:hidden">
                    <button
                        onClick={() => navigate('/search')}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                        View All →
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default NearbyProperties;

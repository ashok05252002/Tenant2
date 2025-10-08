import React from 'react';
import useGeolocation from '../hooks/useGeolocation';
import { MapPin, Loader } from 'lucide-react';
import SetLocationModal from './SetLocationModal';

const LocationButton = () => {
    const { location, requestLocation, isModalOpen, setModalOpen, setManualLocation } = useGeolocation();

    return (
        <>
            <button
                onClick={requestLocation}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                disabled={location.loading}
            >
                {location.loading ? (
                    <Loader size={16} className="animate-spin" />
                ) : (
                    <MapPin size={16} />
                )}
                <span>{location.address}</span>
            </button>
            <SetLocationModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSetLocation={setManualLocation}
            />
        </>
    );
};

export default LocationButton;

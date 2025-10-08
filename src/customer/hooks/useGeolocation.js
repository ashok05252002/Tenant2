import { useState, useEffect } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState({
        loading: false,
        loaded: false,
        coordinates: { lat: "", lng: "" },
        address: "Set Location",
        error: null,
    });
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const savedLocation = localStorage.getItem('user_location');
        if (savedLocation) {
            setLocation(prev => ({ ...prev, address: savedLocation, loaded: true }));
        }
    }, []);

    const onSuccess = (position) => {
        const newAddress = "Near You"; // In a real app, use a reverse geocoding API
        setLocation({
            loading: false,
            loaded: true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            },
            address: newAddress,
            error: null,
        });
        localStorage.setItem('user_location', newAddress);
    };

    const onError = (error) => {
        setLocation({
            loading: false,
            loaded: true,
            coordinates: { lat: "", lng: "" },
            address: "Set Location",
            error: error.message,
        });
        setModalOpen(true); // Open modal on error
    };

    const requestLocation = () => {
        setLocation(prev => ({ ...prev, loading: true }));
        if (!("geolocation" in navigator)) {
            onError({ message: "Geolocation not supported" });
            return;
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const setManualLocation = (address) => {
        setLocation({
            loading: false,
            loaded: true,
            coordinates: { lat: "", lng: "" }, // No coords for manual entry
            address: address || "Set Location",
            error: null,
        });
        if (address) {
            localStorage.setItem('user_location', address);
        } else {
            localStorage.removeItem('user_location');
        }
        setModalOpen(false);
    };

    return { location, requestLocation, isModalOpen, setModalOpen, setManualLocation };
};

export default useGeolocation;

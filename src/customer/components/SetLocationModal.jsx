import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

const SetLocationModal = ({ isOpen, onClose, onSetLocation }) => {
    const [city, setCity] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSetLocation(city);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Set Your Location</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-4">
                    <p className="text-sm text-secondary-600">
                        We couldn't get your location automatically. Please enter your city or area to see nearby properties.
                    </p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">City / Area</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="e.g., Muscat, Al Khuwair"
                                className="w-full pl-10 p-3 border border-secondary-300 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-secondary-50 border-t flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm"
                    >
                        Set Location
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetLocationModal;

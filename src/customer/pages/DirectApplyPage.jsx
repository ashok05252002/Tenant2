import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import { mockUnits } from '../../data/units';
import { MapPin, Bed, Bath, Square, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DirectApplyPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { handleGatedAction } = useAuth();
    const propertyId = searchParams.get('propertyId');
    const property = mockUnits.find(p => p.id.toString() === propertyId);

    if (!property) {
        return (
            <CustomerLayout>
                <div className="text-center p-12">
                    <h1 className="text-2xl font-bold">Property not found</h1>
                    <p className="text-secondary-600 mt-2">The property you are trying to apply for does not exist or the link is invalid.</p>
                </div>
            </CustomerLayout>
        );
    }

    const handleApply = () => {
        handleGatedAction(() => {
            navigate(`/application-process/${property.id}`);
        }, { requireKyc: true });
    };

    return (
        <CustomerLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg border border-secondary-200 overflow-hidden">
                    <img src={property.images[0]} alt={property.title} className="w-full h-64 object-cover" />
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-secondary-900">{property.title}</h1>
                        <div className="flex items-center gap-2 text-secondary-600 mt-2 mb-4">
                            <MapPin size={16} />
                            <span>{property.location}</span>
                        </div>
                        <div className="flex items-center flex-wrap gap-x-6 gap-y-2 my-4 text-secondary-700 border-t border-b py-4">
                            <div className="flex items-center gap-2"><Bed size={20} /><span>{property.beds} Bedroom</span></div>
                            <div className="flex items-center gap-2"><Bath size={20} /><span>{property.baths} Bathroom</span></div>
                            <div className="flex items-center gap-2"><Square size={20} /><span>{property.area} sq ft</span></div>
                        </div>
                        <p className="text-secondary-600 leading-relaxed mb-6">You are about to start the application process for this property. Please ensure you have all necessary documents ready.</p>
                        <button
                            onClick={handleApply}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 font-medium text-lg"
                        >
                            <FileText size={20} /> Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default DirectApplyPage;

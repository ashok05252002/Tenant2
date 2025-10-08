import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X, ArrowLeft } from 'lucide-react';
import PropertyForm from '../../admin/components/properties/PropertyForm';

const BrokerAddProperty = () => {
    const navigate = useNavigate();

    const handleSave = (formData) => {
        console.log("Saving new property (Broker):", formData);
        navigate('/broker/properties');
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-secondary-600 hover:text-green-600 mb-2">
                        <ArrowLeft size={16} />
                        Back to My Listings
                    </button>
                    <h1 className="text-2xl font-bold text-secondary-900">Add New Property</h1>
                </div>
            </div>
            <PropertyForm onSave={handleSave} isEditing={true} />
            <div className="mt-6 flex justify-end gap-2">
                <button onClick={() => navigate('/broker/properties')} className="flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 font-medium text-sm">
                    <X size={16} /> Cancel
                </button>
                <button
                    type="submit"
                    form="property-form"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm"
                >
                    <Save size={16} /> Save Property
                </button>
            </div>
        </div>
    );
};

export default BrokerAddProperty;

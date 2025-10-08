import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X, ArrowLeft } from 'lucide-react';
import PropertyForm from '../../components/properties/PropertyForm';

const AddProperty = () => {
    const navigate = useNavigate();

    const handleSave = (formData) => {
        console.log("Saving new property:", formData);
        // Add logic to save the data to your backend
        navigate('/admin/modules/properties');
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-600 mb-2">
                        <ArrowLeft size={16} />
                        Back to Properties
                    </button>
                    <h1 className="text-2xl font-bold text-secondary-900">Add New Property</h1>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => navigate('/admin/modules/properties')} className="flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 font-medium text-sm">
                        <X size={16} /> Cancel
                    </button>
                    {/* The save button is inside the form, but you could have one here that triggers the form submission */}
                </div>
            </div>

            <PropertyForm onSave={handleSave} isEditing={true} />

             <div className="mt-6 flex justify-end gap-2">
                <button onClick={() => navigate('/admin/modules/properties')} className="flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 font-medium text-sm">
                    <X size={16} /> Cancel
                </button>
                <button
                    type="submit"
                    form="property-form" // Assuming your PropertyForm has an id="property-form"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm"
                >
                    <Save size={16} /> Save Property
                </button>
            </div>
        </div>
    );
};

export default AddProperty;

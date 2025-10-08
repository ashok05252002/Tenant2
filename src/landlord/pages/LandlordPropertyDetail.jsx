import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { mockAdminProperties } from '../../data/properties';
import { ArrowLeft, Edit, X, Save, Trash2 } from 'lucide-react';
import PropertyForm from '../../admin/components/properties/PropertyForm';
import PropertyDetailView from '../../admin/components/properties/PropertyDetailView';
import ConfirmationModal from '../../admin/components/ui/ConfirmationModal';
import TabbedInterface from '../../admin/components/TabbedInterface';
import UnitsTab from '../../admin/components/properties/UnitsTab';

const LandlordPropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const property = mockAdminProperties.find(p => p.id.toString() === id);

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('edit') === 'true') {
            setIsEditing(true);
        }
    }, [location.search]);

    if (!property) {
        return <div className="p-6">Property not found.</div>;
    }

    const handleSave = (formData) => {
        console.log("Updating property (Landlord):", formData);
        setIsEditing(false);
        navigate(`/landlord/properties/${id}`);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        navigate(`/landlord/properties/${id}`);
    };

    const handleDeleteConfirm = () => {
        console.log("Deleting property:", id);
        setDeleteModalOpen(false);
        navigate('/landlord/properties');
    };

    const tabs = [
        { name: 'Details', content: <PropertyDetailView property={property} /> },
        { name: 'Units', content: <UnitsTab property={property} /> },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <button onClick={() => navigate('/landlord/properties')} className="flex items-center gap-2 text-sm text-secondary-600 hover:text-purple-600 mb-2">
                        <ArrowLeft size={16} />
                        Back to My Properties
                    </button>
                    <h1 className="text-2xl font-bold text-secondary-900">
                        {isEditing ? `Editing: ${property.name}` : property.name}
                    </h1>
                </div>
                <div className="flex gap-2">
                    {isEditing ? (
                        <>
                            <button onClick={handleCancelEdit} className="flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 font-medium text-sm">
                                <X size={16} /> Cancel
                            </button>
                            <button
                                type="submit"
                                form="property-form"
                                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium text-sm"
                            >
                                <Save size={16} /> Save Changes
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setDeleteModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 font-medium text-sm">
                                <Trash2 size={16} /> Delete
                            </button>
                            <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium text-sm">
                                <Edit size={16} /> Edit Property
                            </button>
                        </>
                    )}
                </div>
            </div>
            
            {isEditing ? (
                <PropertyForm propertyData={property} onSave={handleSave} isEditing={isEditing} />
            ) : (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <TabbedInterface tabs={tabs} />
                </div>
            )}

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                title="Delete Property"
                message={`Are you sure you want to delete "${property.name}"? This action cannot be undone.`}
            />
        </div>
    );
};

export default LandlordPropertyDetail;

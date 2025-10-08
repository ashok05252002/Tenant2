import React, { useState, useEffect } from 'react';
import { Bed, Bath, Square, DollarSign, Image, Trash2, Users, Car, Repeat, Building, Home, Dog, Percent, Briefcase } from 'lucide-react';
import { amenities as masterAmenities, bedroomTypes, bathroomTypes, preferredTenants, parkingTypes, listingTypes, petTypes } from '../../data/masters';
import { projects } from '../../data/projects';
import { mockLandlords } from '../../data/users';
import { mockBrokers } from '../../../customer/data/brokers';
import Switch from '../ui/Switch';
import MultiSelectDropdown from '../ui/MultiSelectDropdown';

const PropertyForm = ({ propertyData, onSave, isEditing = false, submittedBy = 'Admin' }) => {
    const [formData, setFormData] = useState({
        name: '',
        status: 'Active',
        listingType: 'Rent',
        category: 'Residential',
        petsAllowed: false,
        allowedPets: [],
        amenities: [],
        details: {
            bedrooms: '',
            bathrooms: '',
            area: '',
            price: '',
            description: '',
            parking: '',
            preferredTenants: ''
        },
        project: '',
        landlordId: '',
        brokerId: '',
        commissionPercentage: '',
    });
    const [propertyImages, setPropertyImages] = useState([]);

    useEffect(() => {
        if (propertyData) {
            setFormData({
                ...propertyData,
                details: propertyData.details || {},
                category: propertyData.category || 'Residential',
                petsAllowed: propertyData.petsAllowed || false,
                allowedPets: propertyData.allowedPets || [],
                amenities: propertyData.amenities || [],
                commissionPercentage: propertyData.commissionPercentage || '',
            });
            if (propertyData.images) {
                setPropertyImages(propertyData.images.map(url => ({ preview: url, file: null })));
            }
        }
    }, [propertyData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDetailChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            details: { ...prev.details, [name]: value }
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            setPropertyImages(prev => [...prev, ...filesArray]);
        }
    };

    const removeImage = (index) => {
        setPropertyImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleAmenityChange = (amenityName) => {
        setFormData(prev => {
            const currentAmenities = prev.amenities || [];
            const newAmenities = currentAmenities.includes(amenityName)
                ? currentAmenities.filter(a => a !== amenityName)
                : [...currentAmenities, amenityName];
            return { ...prev, amenities: newAmenities };
        });
    };
    
    const readOnly = !isEditing;
    const isResidential = formData.category === 'Residential';

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = { ...formData };
        if (submittedBy !== 'Admin') {
            finalData.status = 'Pending Approval';
        }
        onSave(finalData);
    };

    return (
        <form id="property-form" className="space-y-6" onSubmit={handleSubmit}>
            {/* Property Details Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Property Details</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Property Title</label>
                        <input type="text" name="name" value={formData.name || ''} onChange={handleInputChange} readOnly={readOnly} className="w-full p-2 border border-secondary-300 rounded-lg read-only:bg-secondary-100" placeholder="e.g., Qurum Heights, Apt 101" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Listing Type</label>
                            <div className="relative">
                                <Repeat size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <select name="listingType" value={formData.listingType || ''} onChange={handleInputChange} disabled={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg disabled:bg-secondary-100 appearance-none">
                                    <option value="">Select Type</option>
                                    {listingTypes.filter(b => b.status === 'active').map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Category</label>
                            <div className="relative">
                                {isResidential ? <Home size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" /> : <Building size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />}
                                <select name="category" value={formData.category} onChange={handleInputChange} disabled={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg disabled:bg-secondary-100 appearance-none">
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Price (OMR)</label>
                            <div className="relative">
                                <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <input type="number" name="price" value={formData.details.price || ''} onChange={handleDetailChange} readOnly={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg read-only:bg-secondary-100" placeholder="e.g., 800" />
                            </div>
                        </div>
                    </div>

                    {isResidential ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Bedrooms</label>
                                <div className="relative">
                                    <Bed size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                    <select name="bedrooms" value={formData.details.bedrooms || ''} onChange={handleDetailChange} disabled={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg disabled:bg-secondary-100 appearance-none">
                                        <option value="">Select Bedrooms</option>
                                        {bedroomTypes.filter(b => b.status === 'active').map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-1">Bathrooms</label>
                                <div className="relative">
                                    <Bath size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                    <select name="bathrooms" value={formData.details.bathrooms || ''} onChange={handleDetailChange} disabled={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg disabled:bg-secondary-100 appearance-none">
                                        <option value="">Select Bathrooms</option>
                                        {bathroomTypes.filter(b => b.status === 'active').map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Area (sq ft)</label>
                            <div className="relative">
                                <Square size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <input type="number" name="area" value={formData.details.area || ''} onChange={handleDetailChange} readOnly={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg read-only:bg-secondary-100" placeholder="e.g., 1200" />
                            </div>
                        </div>
                    )}
                    
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Description</label>
                        <textarea rows="4" name="description" value={formData.details.description || ''} onChange={handleDetailChange} readOnly={readOnly} className="w-full p-2 border border-secondary-300 rounded-lg read-only:bg-secondary-100" placeholder="Enter a detailed description of the property..."></textarea>
                    </div>
                </div>
            </div>

            {/* Amenities & More Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {masterAmenities.filter(a => a.status === 'active').map(amenity => (
                                <div key={amenity.id} className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        id={`amenity-${amenity.id}`} 
                                        disabled={readOnly} 
                                        checked={formData.amenities?.includes(amenity.name) || false}
                                        onChange={() => handleAmenityChange(amenity.name)}
                                        className="h-4 w-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500 disabled:bg-secondary-200" 
                                    />
                                    <label htmlFor={`amenity-${amenity.id}`} className="ml-2 text-sm text-secondary-700">{amenity.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Parking</label>
                            <div className="relative">
                                <Car size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <select name="parking" value={formData.details.parking || ''} onChange={handleDetailChange} disabled={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg disabled:bg-secondary-100 appearance-none">
                                    <option value="">Select Parking</option>
                                    {parkingTypes.filter(p => p.status === 'active').map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Preferred Tenants</label>
                             <div className="relative">
                                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <select name="preferredTenants" value={formData.details.preferredTenants || ''} onChange={handleDetailChange} disabled={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg disabled:bg-secondary-100 appearance-none">
                                    <option value="">Select Tenant Type</option>
                                    {preferredTenants.filter(t => t.status === 'active').map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pets Section */}
                <div className="mt-8 pt-6 border-t border-secondary-100">
                     <h3 className="text-lg font-semibold text-secondary-900 mb-4">Pet Policy</h3>
                     <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-secondary-700">Pets Allowed</label>
                            <Switch 
                                checked={formData.petsAllowed} 
                                onChange={(e) => !readOnly && setFormData(prev => ({ ...prev, petsAllowed: e.target.checked }))} 
                                disabled={readOnly}
                            />
                        </div>
                        {formData.petsAllowed && (
                            <div className="flex-1">
                                <MultiSelectDropdown
                                    label="Allowed Pets"
                                    options={petTypes.filter(p => p.status === 'active')}
                                    selectedOptions={formData.allowedPets}
                                    onChange={(selected) => !readOnly && setFormData(prev => ({ ...prev, allowedPets: selected }))}
                                    disabled={readOnly}
                                />
                            </div>
                        )}
                     </div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Image Gallery</h3>
                {isEditing && (
                    <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center mb-4">
                        <Image className="mx-auto h-12 w-12 text-secondary-400" />
                        <label className="cursor-pointer mt-2 text-primary-600 font-medium">
                            Click to upload images
                            <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageChange} />
                        </label>
                    </div>
                )}
                {(propertyImages.length > 0) && (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {propertyImages.map((img, index) => (
                            <div key={index} className="relative group">
                                <img src={img.preview} alt="property preview" className="w-full h-24 object-cover rounded-lg" />
                                {isEditing && (
                                    <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 size={14} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Assignments & Status Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                 <h3 className="text-lg font-semibold text-secondary-900 mb-4">Assignments & Status</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Project</label>
                        <select name="project" value={formData.project || ''} onChange={handleInputChange} disabled={readOnly} className="w-full p-2 border border-secondary-300 rounded-lg disabled:bg-secondary-100">
                            <option value="">Select a Project</option>
                            {projects.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Assign Landlord</label>
                        <select name="landlordId" value={formData.landlordId || ''} onChange={handleInputChange} disabled={readOnly} className="w-full p-2 border border-secondary-300 rounded-lg disabled:bg-secondary-100">
                            <option value="">Select a Landlord</option>
                            {mockLandlords.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Assign Broker</label>
                        <select name="brokerId" value={formData.brokerId || ''} onChange={handleInputChange} disabled={readOnly} className="w-full p-2 border border-secondary-300 rounded-lg disabled:bg-secondary-100">
                            <option value="">Select a Broker</option>
                            {mockBrokers.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                        </select>
                    </div>
                    {formData.brokerId && (
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Commission (%)</label>
                            <div className="relative">
                                <Percent size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <input type="number" name="commissionPercentage" value={formData.commissionPercentage || ''} onChange={handleInputChange} readOnly={readOnly} className="w-full p-2 pl-9 border border-secondary-300 rounded-lg read-only:bg-secondary-100" placeholder="e.g., 5" />
                            </div>
                        </div>
                    )}
                    {submittedBy === 'Admin' && (
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Property Status</label>
                            <div className={`flex items-center gap-2 p-2 border border-secondary-300 rounded-lg ${readOnly ? 'bg-secondary-100' : ''}`}>
                                <Switch checked={formData.status === 'Active'} disabled={readOnly} onChange={(e) => !readOnly && setFormData(prev => ({ ...prev, status: e.target.checked ? 'Active' : 'Inactive' }))} />
                                <span className="text-sm text-secondary-700">{formData.status || 'Active'}</span>
                            </div>
                        </div>
                    )}
                 </div>
            </div>
        </form>
    );
};

export default PropertyForm;

import React, { useState, useEffect } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Upload, Eye, Save, X } from 'lucide-react';

const HeroManagement = () => {
    const defaultImage = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop';
    const [heroImage, setHeroImage] = useState(defaultImage);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('heroImageUrl');
        if (savedImage) {
            setHeroImage(savedImage);
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (previewImage) {
            localStorage.setItem('heroImageUrl', previewImage);
            setHeroImage(previewImage);
            setPreviewImage(null);
            // In a real app, you'd show a success toast here
        }
    };

    const handleCancel = () => {
        setPreviewImage(null);
    };

    return (
        <AdminPageLayout title="Hero Section Management">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upload and Preview */}
                <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Upload New Image</h3>
                    <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-secondary-400" />
                        <label className="cursor-pointer mt-2 text-primary-600 font-medium">
                            Click to upload a new hero image
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                        </label>
                        <p className="text-xs text-secondary-500 mt-1">Recommended size: 1920x1080px</p>
                    </div>

                    {previewImage && (
                        <div className="mt-6">
                            <h4 className="text-md font-semibold text-secondary-800 mb-2">New Image Preview:</h4>
                            <img src={previewImage} alt="New hero preview" className="w-full h-48 object-cover rounded-lg shadow-md" />
                            <div className="flex gap-2 mt-4">
                                <button onClick={handleSave} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm">
                                    <Save size={16} /> Save Changes
                                </button>
                                <button onClick={handleCancel} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary-200 text-secondary-800 rounded-lg hover:bg-secondary-300 transition-colors font-medium text-sm">
                                    <X size={16} /> Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Current Image */}
                <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Current Hero Image</h3>
                    <div className="relative">
                        <img src={heroImage} alt="Current hero" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                        <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                            <Eye size={14} />
                            <span>Live Preview</span>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
};

export default HeroManagement;

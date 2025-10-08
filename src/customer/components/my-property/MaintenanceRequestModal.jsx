import React, { useState } from 'react';
import { X, Upload, Send } from 'lucide-react';

const MaintenanceRequestModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        category: 'General',
        description: '',
        photo: null
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-secondary-900">New Maintenance Request</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Category</label>
                        <select name="category" value={formData.category} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg">
                            <option>General</option>
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>Air Conditioning</option>
                            <option>Appliance</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleInputChange} rows="4" className="w-full p-3 border border-secondary-300 rounded-lg" placeholder="Please describe the issue in detail..."></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Upload Photo (Optional)</label>
                        <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center">
                            <Upload className="mx-auto h-12 w-12 text-secondary-400" />
                            <label className="cursor-pointer mt-2 text-primary-600 font-medium">
                                Click to upload
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                            {formData.photo && <p className="text-sm text-green-600 mt-2">{formData.photo.name}</p>}
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium">
                            <Send size={18} /> Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MaintenanceRequestModal;

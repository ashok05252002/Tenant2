import React, { useState } from 'react';
import AdminPageLayout from '../../admin/components/AdminPageLayout';
import { Save, FileText, Edit } from 'lucide-react';

const VendorProfile = () => {
    const [profile, setProfile] = useState({
        companyName: 'Oman Technical Services',
        services: 'Plumbing, Electrical',
        phone: '+968 9333 4444',
        email: 'contact@omantech.com'
    });

    const [documents, setDocuments] = useState([
        { name: 'Trade License.pdf', key: 'tradeLicense' },
        { name: 'VAT Certificate.pdf', key: 'vatCertificate' },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AdminPageLayout title="My Profile">
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Company Name</label>
                            <input type="text" name="companyName" value={profile.companyName} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Services Offered</label>
                            <input type="text" name="services" value={profile.services} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Contact Phone</label>
                            <input type="tel" name="phone" value={profile.phone} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Contact Email</label>
                            <input type="email" name="email" value={profile.email} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">My Documents</h3>
                    <div className="space-y-3">
                        {documents.map(doc => (
                            <div key={doc.key} className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FileText size={18} className="text-secondary-500" />
                                    <span className="text-sm font-medium text-secondary-800">{doc.name}</span>
                                </div>
                                <label className="cursor-pointer flex items-center gap-1 text-xs font-medium text-orange-600 hover:text-orange-700">
                                    <Edit size={14} /> Re-upload
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium text-sm">
                        <Save size={16} /> Save Profile
                    </button>
                </div>
            </div>
        </AdminPageLayout>
    );
};

export default VendorProfile;

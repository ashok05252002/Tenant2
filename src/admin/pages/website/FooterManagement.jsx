import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Save, Trash2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const initialLinks = {
    social: [
        { id: 1, name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
        { id: 2, name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
        { id: 3, name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
        { id: 4, name: 'Linkedin', url: 'https://linkedin.com', icon: 'Linkedin' },
    ],
    copyright: `© ${new Date().getFullYear()} Al Dahab Investments Group. All Rights Reserved.`
};

const icons = { Facebook, Twitter, Instagram, Linkedin };

const FooterManagement = () => {
    const [footerData, setFooterData] = useState(initialLinks);

    const handleSocialChange = (index, field, value) => {
        const newSocial = [...footerData.social];
        newSocial[index][field] = value;
        setFooterData(prev => ({ ...prev, social: newSocial }));
    };
    
    const handleCopyrightChange = (e) => {
        setFooterData(prev => ({ ...prev, copyright: e.target.value }));
    };

    return (
        <AdminPageLayout title="Footer Management">
            <div className="space-y-6">
                {/* Social Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Social Media Links</h3>
                    <div className="space-y-4">
                        {footerData.social.map((link, index) => {
                            const Icon = icons[link.icon];
                            return (
                                <div key={link.id} className="flex items-center gap-4">
                                    {Icon && <Icon className="text-secondary-500" />}
                                    <input 
                                        type="text"
                                        value={link.url}
                                        onChange={(e) => handleSocialChange(index, 'url', e.target.value)}
                                        placeholder="Enter full URL"
                                        className="w-full p-2 border border-secondary-300 rounded-lg"
                                    />
                                    <button className="p-2 text-red-500 hover:bg-red-100 rounded-lg">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Copyright Text */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-4">Copyright Text</h3>
                    <input 
                        type="text"
                        value={footerData.copyright}
                        onChange={handleCopyrightChange}
                        className="w-full p-2 border border-secondary-300 rounded-lg"
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                    <Save size={16} /> Save Footer Settings
                </button>
            </div>
        </AdminPageLayout>
    );
};

export default FooterManagement;

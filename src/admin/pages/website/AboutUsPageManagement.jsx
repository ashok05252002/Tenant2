import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Save } from 'lucide-react';

const AboutUsPageManagement = () => {
    const [story, setStory] = useState("Founded in 2024, Oman Rentals was born from a simple idea: to make finding and renting a home in Oman as seamless and transparent as possible. We saw the challenges faced by both tenants and landlords and decided to build a platform that bridges the gap with modern technology and a user-centric approach.");
    const [mission, setMission] = useState("To provide a trusted, efficient, and user-friendly platform that connects tenants with their ideal homes and empowers landlords to manage their properties with ease.");
    const [vision, setVision] = useState("To be the leading property technology company in Oman, setting new standards for convenience, transparency, and customer satisfaction in the rental market.");

    return (
        <AdminPageLayout title="About Us Page Management">
            <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border">
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Our Story</label>
                    <textarea 
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        rows="5"
                        className="w-full p-2 border border-secondary-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Our Mission</label>
                    <textarea 
                        value={mission}
                        onChange={(e) => setMission(e.target.value)}
                        rows="3"
                        className="w-full p-2 border border-secondary-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Our Vision</label>
                    <textarea 
                        value={vision}
                        onChange={(e) => setVision(e.target.value)}
                        rows="3"
                        className="w-full p-2 border border-secondary-300 rounded-lg"
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                    <Save size={16} /> Save Changes
                </button>
            </div>
        </AdminPageLayout>
    );
};

export default AboutUsPageManagement;

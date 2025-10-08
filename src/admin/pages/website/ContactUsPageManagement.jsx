import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Save } from 'lucide-react';

const ContactUsPageManagement = () => {
    const [address, setAddress] = useState("123 Knowledge Oasis, Muscat, Oman");
    const [email, setEmail] = useState("support@omanrentals.com");
    const [phone, setPhone] = useState("+968 1234 5678");

    return (
        <AdminPageLayout title="Contact Us Page Management">
            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border">
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Office Address</label>
                    <input 
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 border border-secondary-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Support Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-secondary-300 rounded-lg"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Support Phone</label>
                    <input 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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

export default ContactUsPageManagement;

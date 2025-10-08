import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Save } from 'lucide-react';

const PrivacyPolicyPageManagement = () => {
    const [content, setContent] = useState(
        "1. Information We Collect\nWe collect information you provide directly to us, such as when you create an account, complete your KYC profile, or submit a rental application...\n\n" +
        "2. How We Use Your Information\nYour information is used to provide and improve our services, process transactions, verify your identity..."
    );

    return (
        <AdminPageLayout title="Privacy Policy Page Management">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
                <label className="block text-sm font-medium text-secondary-700 mb-2">Page Content (Markdown supported)</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="20"
                    className="w-full p-3 border border-secondary-300 rounded-lg font-mono text-sm"
                />
            </div>
            <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                    <Save size={16} /> Save Changes
                </button>
            </div>
        </AdminPageLayout>
    );
};

export default PrivacyPolicyPageManagement;

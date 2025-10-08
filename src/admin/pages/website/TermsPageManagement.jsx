import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Save } from 'lucide-react';

const TermsPageManagement = () => {
    const [content, setContent] = useState(
        "1. Acceptance of Terms\nBy accessing and using the Al Dahab Investments Group platform, you accept and agree to be bound by the terms and provision of this agreement...\n\n" +
        "2. Service Description\nOur platform provides a marketplace for property rentals and sales, connecting tenants, landlords, and brokers..."
    );

    return (
        <AdminPageLayout title="Terms of Service Page Management">
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

export default TermsPageManagement;

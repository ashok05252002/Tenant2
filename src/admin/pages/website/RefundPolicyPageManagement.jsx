import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Save } from 'lucide-react';

const RefundPolicyPageManagement = () => {
    const [content, setContent] = useState(
        "1. General Policy\nPayments made for security deposits and rent are generally non-refundable once the lease agreement is signed...\n\n" +
        "2. Security Deposits\nSecurity deposits are held in trust and will be refunded at the end of the lease term..."
    );

    return (
        <AdminPageLayout title="Refund Policy Page Management">
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

export default RefundPolicyPageManagement;

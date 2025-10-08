import React from 'react';
import CustomerLayout from '../components/CustomerLayout';

const RefundPolicyPage = () => {
    const content = {
        title: "Refund Policy",
        lastUpdated: "August 26, 2025",
        sections: [
            {
                title: "1. General Policy",
                body: "Payments made for security deposits and rent are generally non-refundable once the lease agreement is signed. Application fees, if any, are non-refundable."
            },
            {
                title: "2. Security Deposits",
                body: "Security deposits are held in trust and will be refunded at the end of the lease term, subject to deductions for damages or unpaid rent as per the terms of your lease agreement and Omani law."
            },
            {
                title: "3. Exceptional Circumstances",
                body: "Refund requests under exceptional circumstances will be reviewed on a case-by-case basis in coordination with the property landlord. Please contact our support team for assistance."
            }
        ]
    };

    return (
        <CustomerLayout>
            <div className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-secondary-900 mb-2">{content.title}</h1>
                    <p className="text-sm text-secondary-500 mb-8">Last updated: {content.lastUpdated}</p>
                    <div className="prose max-w-none">
                        {content.sections.map((section, index) => (
                            <div key={index} className="mb-6">
                                <h2 className="text-xl font-semibold text-secondary-800">{section.title}</h2>
                                <p className="text-secondary-600">{section.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default RefundPolicyPage;

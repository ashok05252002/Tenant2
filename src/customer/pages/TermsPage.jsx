import React from 'react';
import CustomerLayout from '../components/CustomerLayout';

const TermsPage = () => {
    // In a real app, this content would be fetched from the CMS (Admin Panel)
    const content = {
        title: "Terms of Service",
        lastUpdated: "August 26, 2025",
        sections: [
            {
                title: "1. Acceptance of Terms",
                body: "By accessing and using the Al Dahab Investments Group platform, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
            },
            {
                title: "2. Service Description",
                body: "Our platform provides a marketplace for property rentals and sales, connecting tenants, landlords, and brokers. We facilitate property discovery, application processes, and tenant management. We are not a party to any rental agreement between users."
            },
            {
                title: "3. User Obligations",
                body: "You agree to provide accurate, current, and complete information during the registration and application process. You are responsible for maintaining the confidentiality of your account and are fully responsible for all activities that occur under your account."
            },
            {
                title: "4. Limitation of Liability",
                body: "The service is provided 'as is' without warranties of any kind. We do not warrant that the service will be error-free or uninterrupted. In no event shall Al Dahab Investments Group be liable for any direct, indirect, incidental, special, or consequential damages."
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

export default TermsPage;

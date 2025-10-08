import React from 'react';
import CustomerLayout from '../components/CustomerLayout';

const PrivacyPolicyPage = () => {
    const content = {
        title: "Privacy Policy",
        lastUpdated: "August 26, 2025",
        sections: [
            {
                title: "1. Information We Collect",
                body: "We collect information you provide directly to us, such as when you create an account, complete your KYC profile, or submit a rental application. This includes personal identification information, contact details, and financial information."
            },
            {
                title: "2. How We Use Your Information",
                body: "Your information is used to provide and improve our services, process transactions, verify your identity, communicate with you, and comply with legal obligations. We may share necessary information with landlords or brokers for the purpose of your rental application."
            },
            {
                title: "3. Data Security",
                body: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is encrypted during transmission."
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

export default PrivacyPolicyPage;

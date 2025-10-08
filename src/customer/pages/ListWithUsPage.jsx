import React from 'react';
import CustomerLayout from '../components/CustomerLayout';
import PartnerApplicationForm from '../components/list-with-us/PartnerApplicationForm';
import PartnerLoginForm from '../components/list-with-us/PartnerLoginForm';

const ListWithUsPage = () => {
    return (
        <CustomerLayout>
            <div className="min-h-[80vh] bg-cream-50 flex items-center justify-center p-4">
                <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side: Login */}
                    <div className="p-8 sm:p-12 order-2 lg:order-1">
                        <h2 className="text-2xl font-bold text-secondary-900 mb-2">Partner Login</h2>
                        <p className="text-secondary-600 mb-6">Access your portal to manage your listings.</p>
                        <PartnerLoginForm />
                    </div>

                    {/* Right Side: Sign Up */}
                    <div className="p-8 sm:p-12 bg-primary-700 text-white order-1 lg:order-2">
                        <h2 className="text-2xl font-bold mb-2">Become a Partner</h2>
                        <p className="text-primary-100 mb-6">Join our network to reach more tenants.</p>
                        <PartnerApplicationForm />
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default ListWithUsPage;

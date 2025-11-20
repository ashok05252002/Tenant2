import React from 'react';
import CustomerLayout from '../components/CustomerLayout';
import { Building, Users, Target } from 'lucide-react';

const AboutUs = () => {
    return (
        <CustomerLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <div className="relative bg-primary-800 text-white text-center py-20">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold">About Us</h1>
                        <p className="text-lg mt-2 max-w-2xl mx-auto">Simplifying the rental experience in Oman with technology and trust.</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Story</h2>
                            <p className="text-secondary-600 leading-relaxed mb-4">
                                Founded in 2024, PROPX was born from a simple idea: to make finding and renting a home in Oman as seamless and transparent as possible. We saw the challenges faced by both tenants and landlords and decided to build a platform that bridges the gap with modern technology and a user-centric approach.
                            </p>
                            <p className="text-secondary-600 leading-relaxed">
                                From browsing verified listings to secure digital payments and maintenance requests, our goal is to support you at every step of your rental journey.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800" alt="Team working" className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <Building size={40} className="mx-auto text-primary-700 mb-4" />
                            <h3 className="text-xl font-semibold text-secondary-900">Our Mission</h3>
                            <p className="text-secondary-600 mt-2">To provide a trusted, efficient, and user-friendly platform that connects tenants with their ideal homes and empowers landlords to manage their properties with ease.</p>
                        </div>
                        <div className="p-6">
                            <Users size={40} className="mx-auto text-primary-700 mb-4" />
                            <h3 className="text-xl font-semibold text-secondary-900">Our Vision</h3>
                            <p className="text-secondary-600 mt-2">To be the leading property technology company in Oman, setting new standards for convenience, transparency, and customer satisfaction in the rental market.</p>
                        </div>
                        <div className="p-6">
                            <Target size={40} className="mx-auto text-primary-700 mb-4" />
                            <h3 className="text-xl font-semibold text-secondary-900">Our Values</h3>
                            <p className="text-secondary-600 mt-2">Integrity, Innovation, Customer-Centricity, and Excellence. These principles guide every decision we make and every feature we build.</p>
                        </div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default AboutUs;

import React from 'react';
import CustomerLayout from '../components/CustomerLayout';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    return (
        <CustomerLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <div className="relative bg-primary-800 text-white text-center py-20">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold">Contact Us</h1>
                        <p className="text-lg mt-2">We're here to help. Reach out to us with any questions.</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-cream-100 p-8 rounded-xl border border-cream-200">
                            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send us a Message</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-1">Name</label>
                                        <input type="text" className="w-full p-3 border border-secondary-300 rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                                        <input type="email" className="w-full p-3 border border-secondary-300 rounded-lg" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Subject</label>
                                    <input type="text" className="w-full p-3 border border-secondary-300 rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary-700 mb-1">Message</label>
                                    <textarea rows="4" className="w-full p-3 border border-secondary-300 rounded-lg"></textarea>
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 font-medium">
                                        <Send size={18} /> Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-secondary-900">Contact Information</h2>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-800">Our Office</h3>
                                    <p className="text-secondary-600">123 Knowledge Oasis, Muscat, Oman</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-800">Email Us</h3>
                                    <p className="text-secondary-600">support@omanrentals.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-800">Call Us</h3>
                                    <p className="text-secondary-600">+968 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default ContactUs;

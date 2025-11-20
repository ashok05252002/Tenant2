import React from 'react';
import { Link } from 'react-router-dom';

const PartnerLoginLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-cream-50 flex flex-col">
            <header className="bg-white shadow-sm border-b border-secondary-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center">
                            <div>
                                <img 
                                    src="https://i.sstatic.net/xcxEQ.png" 
                                    alt="PROPX Logo" 
                                    className="h-8"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side: Image */}
                    <div className="hidden lg:block">
                        <img 
                            src="https://images.unsplash.com/photo-1582450871972-ab6964574975?w=800&auto=format&fit=crop"
                            alt="Oman Architecture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Right Side: Form */}
                    <div className="p-8 sm:p-12 flex flex-col justify-center">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PartnerLoginLayout;

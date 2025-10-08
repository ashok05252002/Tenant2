import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const PartnerApplicationForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [partnerType, setPartnerType] = useState('landlord');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-primary-800 text-center p-8 rounded-xl">
                <Check size={48} className="mx-auto text-green-400 mb-4" />
                <h2 className="text-2xl font-bold text-white">Application Submitted!</h2>
                <p className="text-primary-100 mt-2">Thank you! Our team will review your application and get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="bg-primary-800 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-primary-100 mb-2">I am a...</label>
                    <div className="flex gap-4">
                        <label className="flex items-center text-white">
                            <input type="radio" name="partnerType" value="landlord" checked={partnerType === 'landlord'} onChange={(e) => setPartnerType(e.target.value)} className="h-4 w-4 text-white bg-primary-600 border-primary-400 focus:ring-white" />
                            <span className="ml-2">Landlord</span>
                        </label>
                        <label className="flex items-center text-white">
                            <input type="radio" name="partnerType" value="broker" checked={partnerType === 'broker'} onChange={(e) => setPartnerType(e.target.value)} className="h-4 w-4 text-white bg-primary-600 border-primary-400 focus:ring-white" />
                            <span className="ml-2">Broker</span>
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary-100 mb-1">Full Name</label>
                    <input type="text" required className="w-full p-3 bg-primary-600 border border-primary-500 rounded-lg text-white placeholder-primary-300" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary-100 mb-1">Email Address</label>
                    <input type="email" required className="w-full p-3 bg-primary-600 border border-primary-500 rounded-lg text-white placeholder-primary-300" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary-100 mb-1">Phone Number</label>
                    <input type="tel" required className="w-full p-3 bg-primary-600 border border-primary-500 rounded-lg text-white placeholder-primary-300" />
                </div>
                <div className="pt-4">
                    <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-primary-700 rounded-lg hover:bg-primary-50 font-bold">
                        <Send size={18} /> Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PartnerApplicationForm;

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const PersonalDetailsStep = ({ onNext, formData, userType }) => {
    const [details, setDetails] = useState({
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        servicesOffered: formData.servicesOffered || '', // For Vendor
    });

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(details);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold">Step 1: Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">{userType === 'Vendor' ? 'Company Name' : 'Full Name'}</label>
                    <input type="text" name="name" value={details.name} onChange={handleChange} required className="w-full p-2 border border-secondary-300 rounded-lg" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                    <input type="email" name="email" value={details.email} onChange={handleChange} required className="w-full p-2 border border-secondary-300 rounded-lg" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Phone</label>
                <input type="tel" name="phone" value={details.phone} onChange={handleChange} required className="w-full p-2 border border-secondary-300 rounded-lg" />
            </div>
            {userType === 'Vendor' && (
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Services Offered</label>
                    <input type="text" name="servicesOffered" value={details.servicesOffered} onChange={handleChange} placeholder="e.g., Plumbing, Electrical" required className="w-full p-2 border border-secondary-300 rounded-lg" />
                </div>
            )}
            <div className="flex justify-end pt-4">
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg">
                    Next <ArrowRight size={16} />
                </button>
            </div>
        </form>
    );
};

export default PersonalDetailsStep;

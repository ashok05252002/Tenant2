import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../../../customer/context/AuthContext';

const Step1MobileRegister = ({ onNext }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { id: phone, name, phone, email: '' };
        login(userData);
        onNext(userData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-lg font-bold">Your Details</h2>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 border border-secondary-300 rounded-lg" />
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Mobile Number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 border border-secondary-300 rounded-lg" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 bg-primary-700 text-white rounded-lg font-medium">
                Continue <ArrowRight size={16} />
            </button>
        </form>
    );
};

export default Step1MobileRegister;

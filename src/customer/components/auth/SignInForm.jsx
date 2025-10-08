import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Phone, Lock } from 'lucide-react';

const SignInForm = () => {
    const { login } = useAuth();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login
        const userData = {
            id: phone,
            name: 'Demo User',
            phone: phone,
            email: 'demo.user@example.com',
        };
        login(userData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Phone Number</label>
                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" 
                        placeholder="+968 1234 5678"
                        required 
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" 
                        placeholder="••••••••"
                        required 
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-primary-700 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-primary-700 text-white py-3 px-4 rounded-lg hover:bg-primary-800 font-medium">
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;

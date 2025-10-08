import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Phone, Mail, Lock } from 'lucide-react';

const SignUpForm = () => {
    const { login } = useAuth();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Simulate signup and login
        const userData = {
            id: phone,
            name,
            phone,
            email,
        };
        login(userData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Name</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" 
                        placeholder="Enter your full name"
                        required 
                    />
                </div>
            </div>
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
                <label className="block text-sm font-medium text-secondary-700 mb-1">Email (Optional)</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" 
                        placeholder="you@example.com"
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
                        placeholder="Create a strong password"
                        required 
                    />
                </div>
            </div>
             <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Confirm Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" 
                        placeholder="Re-enter your password"
                        required 
                    />
                </div>
            </div>
            <button type="submit" className="w-full bg-primary-700 text-white py-3 px-4 rounded-lg hover:bg-primary-800 font-medium">
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;

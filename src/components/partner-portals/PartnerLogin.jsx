import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import PartnerLoginLayout from './PartnerLoginLayout';

const PartnerLogin = ({ userType, onLogin }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <PartnerLoginLayout>
            <div className="w-full">
                <h1 className="text-2xl font-bold text-secondary-900 mb-2">{userType} Portal Login</h1>
                <p className="text-secondary-600 mb-6">Welcome back! Please sign in to your account.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input type="email" required className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input type="password" required className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="text-sm font-medium text-primary-700 hover:underline">Forgot password?</Link>
                    </div>
                    <button type="submit" className="w-full bg-primary-700 text-white py-3 px-4 rounded-lg hover:bg-primary-800 font-medium">
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm mt-6">
                    Not a partner yet?{' '}
                    <Link to="/list-with-us" className="font-medium text-primary-700 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </PartnerLoginLayout>
    );
};

export default PartnerLogin;

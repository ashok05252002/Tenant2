import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../customer/context/AuthContext';
import { User, ChevronRight, Heart, Key, LogOut } from 'lucide-react';

const MobileProfile = () => {
    const { user, logout } = useAuth();

    return (
        <div className="p-4 space-y-6">
            {/* User Header */}
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <User size={32} className="text-primary-700" />
                </div>
                <div>
                    <h1 className="text-xl font-bold">{user ? user.name : 'Guest User'}</h1>
                    <p className="text-sm text-secondary-500">{user ? user.email : 'Please log in'}</p>
                </div>
            </div>

            {/* Menu List */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-100">
                <Link to="/mobile/favorites" className="flex justify-between items-center p-4 border-b">
                    <div className="flex items-center gap-3">
                        <Heart className="text-red-500" />
                        <span className="font-medium">My Favorites</span>
                    </div>
                    <ChevronRight className="text-secondary-400" />
                </Link>
                <Link to="/tenant-portal" className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-3">
                        <Key className="text-yellow-500" />
                        <span className="font-medium">My Property</span>
                    </div>
                    <ChevronRight className="text-secondary-400" />
                </Link>
            </div>
            
            {user && (
                <button 
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 rounded-lg font-medium"
                >
                    <LogOut size={16} /> Logout
                </button>
            )}
        </div>
    );
};

export default MobileProfile;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../customer/context/AuthContext';
import { LogOut } from 'lucide-react';

const TenantTopBar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-cream-100/80 backdrop-blur-md border-b border-cream-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/tenant-portal" className="flex items-center">
                         <div className="bg-black rounded-md p-1">
                            <img 
                                src="https://i.postimg.cc/L6wM906B/adb-logo.png" 
                                alt="Al Dahab Investments Group Logo" 
                                className="h-10"
                            />
                        </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-secondary-700 hidden sm:block">
                            Welcome, {user?.name}
                        </span>
                        <button onClick={logout} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                            <LogOut size={16} />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TenantTopBar;

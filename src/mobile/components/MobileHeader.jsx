import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';

const MobileHeader = () => {
    return (
        <header className="bg-cream-100/80 backdrop-blur-md border-b border-cream-200 sticky top-0 z-40 px-4 py-3">
            <div className="flex justify-between items-center">
                <Link to="/mobile" className="flex items-center">
                    <div className="bg-black rounded-md p-1">
                        <img 
                            src="https://i.postimg.cc/L6wM906B/adb-logo.png" 
                            alt="Al Dahab Investments Group Logo" 
                            className="h-8"
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full hover:bg-cream-200">
                        <Bell size={20} className="text-secondary-600" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;

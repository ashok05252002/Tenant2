import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, MoreHorizontal } from 'lucide-react';
import MoreSheet from './MoreSheet';

const navItems = [
    { path: '/mobile', icon: Home, label: 'Home' },
    { path: '/mobile/search', icon: Search, label: 'Search' },
];

const MobileBottomNav = () => {
    const [isMoreSheetOpen, setMoreSheetOpen] = useState(false);

    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 bg-cream-100 border-t border-cream-200 shadow-t-lg h-16 flex justify-around items-center z-50">
                {navItems.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/mobile'}
                        className={({ isActive }) => 
                            `flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
                                isActive ? 'text-primary-700' : 'text-secondary-500 hover:text-primary-600'
                            }`
                        }
                    >
                        <item.icon size={24} />
                        <span className="text-xs font-medium">{item.label}</span>
                    </NavLink>
                ))}
                <button
                    onClick={() => setMoreSheetOpen(true)}
                    className="flex flex-col items-center justify-center gap-1 w-full h-full text-secondary-500 hover:text-primary-600"
                >
                    <MoreHorizontal size={24} />
                    <span className="text-xs font-medium">More</span>
                </button>
            </nav>
            <MoreSheet isOpen={isMoreSheetOpen} onClose={() => setMoreSheetOpen(false)} />
        </>
    );
};

export default MobileBottomNav;

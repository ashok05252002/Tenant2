import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Wrench, DollarSign, Star, BarChart3, User, LogOut, Users2 } from 'lucide-react';
import SidebarItem from '../../admin/components/SidebarItem';
import { useServiceVendor } from '../context/ServiceVendorContext';

const navConfig = [
    { title: 'Dashboard', path: '/service-vendor/', icon: LayoutDashboard },
    { title: 'My Services', path: '/service-vendor/services', icon: Wrench },
    { title: 'Service Requests', path: '/service-vendor/requests', icon: Wrench },
    { title: 'Technicians', path: '/service-vendor/technicians', icon: Users2 },
    { title: 'Payments', path: '/service-vendor/payments', icon: DollarSign },
    { title: 'Feedback & Ratings', path: '/service-vendor/feedback', icon: Star },
    { title: 'Reports', path: '/service-vendor/reports', icon: BarChart3 },
];

const VendorSidebar = ({ isCollapsed }) => {
    const { user } = useServiceVendor();
    return (
        <aside className={`fixed top-0 left-0 h-full bg-white text-secondary-700 flex flex-col z-50 transition-all duration-300 border-r border-secondary-200 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-center h-20 border-b border-secondary-200">
                <Link to="/service-vendor">
                    <div>
                        <img 
                            src="https://i.ibb.co/GkLzS4q/prop-logo.png" 
                            alt="PROPX Logo" 
                            className="h-10"
                        />
                    </div>
                </Link>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navConfig.map((item) => (
                    <SidebarItem key={item.title} item={item} isCollapsed={isCollapsed} activeColor="bg-accent-100 text-accent-800" parentActiveColor="text-accent-800" />
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-secondary-200">
                 <Link to="/service-vendor/profile" className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <div className={`flex items-center ${isCollapsed ? 'flex-col' : ''}`}>
                         <img src={user.avatar} alt="Vendor" className="w-10 h-10 rounded-full" />
                        {!isCollapsed && (
                            <div className="ml-3">
                                <p className="font-semibold text-white text-sm">{user.name}</p>
                            </div>
                        )}
                    </div>
                    {!isCollapsed && (
                        <button title="Logout" className="p-2 rounded-lg hover:bg-orange-700">
                            <LogOut size={18} />
                        </button>
                    )}
                </Link>
            </div>
        </aside>
    );
};

export default VendorSidebar;

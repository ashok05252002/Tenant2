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
        <aside className={`fixed top-0 left-0 h-full bg-orange-800 text-orange-200 flex flex-col z-50 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-center h-20 border-b border-orange-700">
                <Link to="/service-vendor">
                    <div className="bg-black rounded-md p-1">
                        <img 
                            src="https://i.postimg.cc/L6wM906B/adb-logo.png" 
                            alt="Al Dahab Investments Group Logo" 
                            className="h-10"
                        />
                    </div>
                </Link>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navConfig.map((item) => (
                    <SidebarItem key={item.title} item={item} isCollapsed={isCollapsed} />
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-orange-700">
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

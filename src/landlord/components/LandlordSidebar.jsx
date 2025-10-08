import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Building, Users, FileText, DollarSign, Wrench, LogOut } from 'lucide-react';
import SidebarItem from '../../admin/components/SidebarItem';
import { useLandlord } from '../context/LandlordContext';

const navConfig = [
    { title: 'Dashboard', path: '/landlord/dashboard', icon: LayoutDashboard },
    { title: 'Properties', path: '/landlord/properties', icon: Building },
    { title: 'Tenants', path: '/landlord/tenants', icon: Users },
    {
        title: 'Applications',
        icon: FileText,
        children: [
            { title: 'Approvals Queue', path: '/landlord/applications/approvals' },
            { title: 'All Applications', path: '/landlord/applications/status' },
            { title: 'Property Applications', path: '/landlord/applications/by-property' },
        ]
    },
    { title: 'Financials', path: '/landlord/financials', icon: DollarSign },
    { title: 'Maintenance', path: '/landlord/maintenance', icon: Wrench },
];

const LandlordSidebar = ({ isCollapsed }) => {
    const { user } = useLandlord();
    return (
        <aside className={`fixed top-0 left-0 h-full bg-white text-secondary-700 flex flex-col z-50 transition-all duration-300 border-r border-secondary-200 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-center h-20 border-b border-secondary-200">
                <Link to="/landlord/dashboard">
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
                    <SidebarItem key={item.title} item={item} isCollapsed={isCollapsed} activeColor="bg-purple-100 text-purple-800" parentActiveColor="text-purple-800" />
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-secondary-200">
                 <Link to="/landlord/profile" className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <div className={`flex items-center ${isCollapsed ? 'flex-col' : ''}`}>
                         <img src={user.avatar} alt="Landlord" className="w-10 h-10 rounded-full" />
                        {!isCollapsed && (
                            <div className="ml-3">
                                <p className="font-semibold text-secondary-900 text-sm">{user.name}</p>
                            </div>
                        )}
                    </div>
                    {!isCollapsed && (
                        <button title="Logout" className="p-2 rounded-lg hover:bg-secondary-100">
                            <LogOut size={18} />
                        </button>
                    )}
                </Link>
            </div>
        </aside>
    );
};

export default LandlordSidebar;

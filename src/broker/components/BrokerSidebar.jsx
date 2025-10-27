import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Building, Link2, LogOut, Users, DollarSign, Wrench, FileStack } from 'lucide-react';
import SidebarItem from '../../admin/components/SidebarItem';
import { useBroker } from '../context/BrokerContext';

const navConfig = [
    { title: 'Dashboard', path: '/broker/dashboard', icon: LayoutDashboard },
    { title: 'My Listings', path: '/broker/properties', icon: Building },
    { title: 'My Tenants', path: '/broker/tenants', icon: Users },
    {
        title: 'Applications',
        icon: FileStack,
        children: [
            { title: 'Approvals Queue', path: '/broker/applications/approvals' },
            { title: 'All Applications', path: '/broker/applications/status' },
            { title: 'Property Applications', path: '/broker/applications/by-property' },
        ]
    },
    { title: 'Invites', path: '/broker/invites', icon: Link2 },
    { title: 'Payments', path: '/broker/payments', icon: DollarSign },
    { title: 'Maintenance', path: '/broker/maintenance', icon: Wrench },
];

const BrokerSidebar = ({ isCollapsed }) => {
    const { user } = useBroker();
    return (
        <aside className={`fixed top-0 left-0 h-full bg-white text-secondary-700 flex flex-col z-50 transition-all duration-300 border-r border-secondary-200 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-center h-20 border-b border-secondary-200">
                <Link to="/broker/dashboard">
                    <div className="rounded-md p-1">
                        <img 
                            src="/images/propx1.png" 
                            alt="Al Dahab Investments Group Logo" 
                            className="h-36"
                        />
                    </div>
                </Link>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navConfig.map((item) => (
                    <SidebarItem key={item.title} item={item} isCollapsed={isCollapsed} activeColor="bg-green-100 text-green-800" parentActiveColor="text-green-800" />
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-secondary-200">
                 <Link to="/broker/profile" className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <div className={`flex items-center ${isCollapsed ? 'flex-col' : ''}`}>
                         <img src={user.avatar} alt="Broker" className="w-10 h-10 rounded-full" />
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

export default BrokerSidebar;

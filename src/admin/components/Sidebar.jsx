import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Database, Sliders, Settings, LogOut, FileStack, Wrench, Globe, Users2, BarChart3, UserCog, History, Building, Briefcase, UserPlus, FileSignature, DollarSign, BellRing } from 'lucide-react';
import SidebarItem from './SidebarItem';

const navConfig = [
    {
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Applications',
        icon: FileStack,
        children: [
            { title: 'Approvals Queue', path: '/admin/applications/approvals' },
            { title: 'All Applications', path: '/admin/applications/status' },
            { title: 'Property Applications', path: '/admin/applications/by-property' },
        ]
    },
    {
        title: 'Property Management',
        icon: Sliders,
        children: [
            { title: 'All Properties', path: '/admin/modules/properties' },
            { title: 'Property Approvals', path: '/admin/properties/approvals' },
            { title: 'Property Logs', path: '/admin/modules/property-logs' },
        ]
    },
    {
        title: 'Tenant Management',
        icon: Users2,
        path: '/admin/tenants',
    },
    {
        title: 'Broker Management',
        icon: Briefcase,
        children: [
            { title: 'Brokers List', path: '/admin/brokers' },
            { title: 'Broker Approvals', path: '/admin/brokers/approvals' },
            { title: 'Commission Models', path: '/admin/brokers/commissions' },
            { title: 'Activity & Payouts', path: '/admin/brokers/activity' },
        ]
    },
    {
        title: 'Landlord Management',
        icon: Building,
        children: [
            { title: 'Landlords List', path: '/admin/landlords/list' },
            { title: 'Landlord Approvals', path: '/admin/landlords/approvals' },
            { title: 'Lease Approvals', path: '/admin/landlords/lease-approvals' },
            { title: 'Financials & Payouts', path: '/admin/landlords/financials' },
        ]
    },
     {
        title: 'Vendor Management',
        icon: Wrench,
        children: [
            { title: 'Vendors', path: '/admin/vendor/list' },
            { title: 'Service Requests', path: '/admin/vendor/requests' },
            { title: 'Service Pricing', path: '/admin/vendor/pricing' },
            { title: 'Payments', path: '/admin/vendor/payments' },
        ]
    },
    {
        title: 'Invoicing & Payments',
        icon: DollarSign,
        children: [
            { title: 'All Invoices', path: '/admin/invoicing/invoices' },
            { title: 'Create Bill', path: '/admin/invoicing/create-bill' },
            { title: 'Overdue Accounts', path: '/admin/invoicing/overdue' },
            { title: 'Payouts', path: '/admin/invoicing/payouts' },
        ]
    },
    {
        title: 'Reporting',
        path: '/admin/reporting',
        icon: BarChart3,
    },
    {
        title: 'User Management',
        icon: UserCog,
        children: [
            { title: 'Users', path: '/admin/user-management/users' },
            { title: 'Roles', path: '/admin/user-management/roles' },
        ]
    },
    {
        title: 'Masters',
        icon: Database,
        children: [
            { title: 'Projects', path: '/admin/masters/projects' },
            { title: 'Listing Type Master', path: '/admin/masters/listing-types' },
            { title: 'Amenity Master', path: '/admin/masters/amenities' },
            { title: 'Bedroom Master', path: '/admin/masters/bedrooms' },
            { title: 'Bathroom Master', path: '/admin/masters/bathrooms' },
            { title: 'Property Type Master', path: '/admin/masters/property-types' },
            { title: 'Location Master', path: '/admin/masters/locations' },
            { title: 'Furnishing Master', path: '/admin/masters/furnishing-types' },
            { title: 'Preferred Tenant Master', path: '/admin/masters/preferred-tenants' },
            { title: 'Parking Master', path: '/admin/masters/parking' },
            { title: 'Pet Type Master', path: '/admin/masters/pet-types' },
        ],
    },
    {
        title: 'Website Management',
        icon: Globe,
        children: [
            { title: 'Hero Section', path: '/admin/website/hero' },
            { title: 'How It Works', path: '/admin/website/how-it-works' },
            { title: 'Testimonials', path: '/admin/website/testimonials' },
            { title: 'FAQ', path: '/admin/website/faq' },
            { title: 'Footer', path: '/admin/website/footer' },
            { title: 'About Us Page', path: '/admin/website/about-us' },
            { title: 'Contact Us Page', path: '/admin/website/contact-us' },
            { title: 'Terms Page', path: '/admin/website/terms' },
            { title: 'Privacy Policy Page', path: '/admin/website/privacy-policy' },
            { title: 'Refund Policy Page', path: '/admin/website/refund-policy' },
        ]
    },
    {
        title: 'Notifications',
        icon: BellRing,
        children: [
            { title: 'Templates', path: '/admin/notifications/templates' },
            { title: 'Logs', path: '/admin/notifications/logs' },
        ]
    },
    {
        title: 'Settings',
        icon: Settings,
        children: [
            { title: 'System Settings', path: '/admin/settings/system' },
            { title: 'Logs', path: '/admin/settings/logs' },
        ],
    },
];

const Sidebar = ({ isCollapsed }) => {
    return (
        <aside className={`fixed top-0 left-0 h-full bg-secondary-900 text-secondary-300 flex flex-col z-50 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            {/* Logo */}
            <div className="flex items-center justify-center h-20 border-b border-secondary-800">
                <Link to="/admin/dashboard">
                    <div className="bg-black rounded-md p-1">
                        <img 
                            src="https://i.postimg.cc/L6wM906B/adb-logo.png" 
                            alt="Al Dahab Investments Group Logo" 
                            className="h-10"
                        />
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navConfig.map((item) => (
                    <SidebarItem key={item.title} item={item} isCollapsed={isCollapsed} />
                ))}
            </nav>

            {/* User Profile */}
            <div className="px-4 py-6 border-t border-secondary-800">
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <div className={`flex items-center ${isCollapsed ? 'flex-col' : ''}`}>
                         <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/75.jpg" alt="Admin" className="w-10 h-10 rounded-full" />
                        {!isCollapsed && (
                            <div className="ml-3">
                                <p className="font-semibold text-white text-sm">Admin User</p>
                                <p className="text-xs text-secondary-400">Super Admin</p>
                            </div>
                        )}
                    </div>
                    {!isCollapsed && (
                        <button title="Logout" className="p-2 rounded-lg hover:bg-secondary-800">
                            <LogOut size={18} />
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

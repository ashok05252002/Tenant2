import React from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const AdminHeader = ({ onToggleSidebar, isSidebarCollapsed }) => {
    return (
        <header className="h-20 bg-white border-b border-secondary-200 flex items-center justify-between px-6 flex-shrink-0">
            <div className="flex items-center">
                <button onClick={onToggleSidebar} className="p-2 rounded-full hover:bg-secondary-100 lg:hidden">
                    {isSidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
                </button>
                <button onClick={onToggleSidebar} className="p-2 rounded-full hover:bg-secondary-100 hidden lg:block">
                    {isSidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
                </button>
                <div className="relative ml-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 bg-secondary-100 border border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <button className="p-2 rounded-full hover:bg-secondary-100">
                    <Bell size={20} />
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;

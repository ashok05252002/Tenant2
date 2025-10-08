import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import Breadcrumbs from '../components/Breadcrumbs';

const AdminLayout = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-secondary-50 font-lato">
            <Sidebar isCollapsed={isSidebarCollapsed} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                <AdminHeader 
                    onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} 
                    isSidebarCollapsed={isSidebarCollapsed}
                />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Breadcrumbs />
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;

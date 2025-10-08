import React from 'react';
import { Outlet } from 'react-router-dom';
import TenantTopBar from '../components/TenantTopBar';

const TenantLayout = () => {
    return (
        <div className="min-h-screen bg-cream-50 font-lato flex flex-col">
            <TenantTopBar />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
};

export default TenantLayout;

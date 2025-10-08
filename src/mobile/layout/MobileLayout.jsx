import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';
import MobileHeader from '../components/MobileHeader';
import MobileFooter from '../components/MobileFooter';

const MobileLayout = () => {
  return (
    <div className="bg-cream-50 min-h-screen font-lato">
      <MobileHeader />
      <main className="pb-20"> {/* Padding bottom to avoid overlap with bottom nav */}
        <Outlet />
      </main>
      <MobileFooter />
      <MobileBottomNav />
    </div>
  );
};

export default MobileLayout;

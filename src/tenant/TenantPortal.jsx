import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TenantLayout from './layout/TenantLayout';
import TenantDashboardPage from './pages/TenantDashboardPage';

const TenantPortal = () => {
  return (
    <Routes>
      <Route element={<TenantLayout />}>
        <Route path="/" element={<TenantDashboardPage />} />
        {/* Add other tenant-specific routes here, e.g., for payments, maintenance details */}
      </Route>
    </Routes>
  );
};

export default TenantPortal;

import React, { useState } from 'react';
import VendorDashboardRoutes from './VendorDashboardRoutes';
import PartnerLogin from '../components/partner-portals/PartnerLogin';

const ServiceVendorPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // In a real app, this would involve API calls and token management
    setIsAuthenticated(true);
  };
  
  if (!isAuthenticated) {
    return <PartnerLogin userType="Service Vendor" onLogin={handleLogin} />;
  }

  return <VendorDashboardRoutes />;
};

export default ServiceVendorPortal;

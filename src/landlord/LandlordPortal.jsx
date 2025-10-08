import React, { useState } from 'react';
import LandlordDashboardRoutes from './LandlordDashboardRoutes';
import PartnerLogin from '../components/partner-portals/PartnerLogin';

const LandlordPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // In a real app, this would involve API calls and token management
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PartnerLogin userType="Landlord" onLogin={handleLogin} />;
  }

  return <LandlordDashboardRoutes />;
};

export default LandlordPortal;

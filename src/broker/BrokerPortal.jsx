import React, { useState } from 'react';
import BrokerDashboardRoutes from './BrokerDashboardRoutes';
import PartnerLogin from '../components/partner-portals/PartnerLogin';

const BrokerPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // In a real app, this would involve API calls and token management
    setIsAuthenticated(true);
  };
  
  if (!isAuthenticated) {
    return <PartnerLogin userType="Broker" onLogin={handleLogin} />;
  }

  return <BrokerDashboardRoutes />;
};

export default BrokerPortal;

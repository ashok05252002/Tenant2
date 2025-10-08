import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from './customer/context/AuthContext';

// Portal Components
import CustomerPortal from './customer/CustomerPortal';
import AdminPortal from './admin/AdminPortal';
import BrokerPortal from './broker/BrokerPortal';
import LandlordPortal from './landlord/LandlordPortal';
import TenantPortal from './tenant/TenantPortal';
import ServiceVendorPortal from './service-vendor/ServiceVendorPortal';
import MobilePortal from './mobile/MobilePortal';

// Common Pages
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// Floating Portal Switcher
import FloatingPortalSwitcher from './components/FloatingPortalSwitcher';
import ProtectedRoute from './customer/components/ProtectedRoute';

// Import i18n configuration
import './i18n';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Specific portal routes */}
            <Route path="/admin/*" element={<AdminPortal />} />
            <Route path="/broker/*" element={<BrokerPortal />} />
            <Route path="/landlord/*" element={<LandlordPortal />} />
            <Route path="/service-vendor/*" element={<ServiceVendorPortal />} />
            <Route path="/tenant-portal/*" element={<ProtectedRoute><TenantPortal /></ProtectedRoute>} />
            <Route path="/mobile/*" element={<MobilePortal />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* Customer portal handles all other routes */}
            <Route path="/*" element={<CustomerPortal />} />
          </Routes>
          
          {/* Floating Portal Switcher - Available on all screens */}
          <FloatingPortalSwitcher />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;

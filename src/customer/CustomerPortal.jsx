import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Main Pages
import GuestBrowsing from './pages/GuestBrowsing';
import PropertySearch from './pages/PropertySearch';
import PropertyDetail from './pages/PropertyDetail';
import UserProfile from './pages/UserProfile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ListWithUsPage from './pages/ListWithUsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import KycVerification from './pages/KycVerification'; // New KYC Page

// Application Flow
import ApplicationProcess from './pages/ApplicationProcess';
import DirectApplyPage from './pages/DirectApplyPage';

// Components
import AuthModal from './components/AuthModal';
import KycPromptModal from './components/KycPromptModal';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

const CustomerPortal = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-cream-50 font-lato">
        <Routes>
          {/* Guest/Public Routes */}
          <Route path="/" element={<GuestBrowsing />} />
          <Route path="/search" element={<PropertySearch />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/list-with-us" element={<ListWithUsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          
          {/* Application Flow Routes */}
          <Route path="/apply" element={<DirectApplyPage />} />
          <Route path="/application-process/:propertyId" element={<ProtectedRoute><ApplicationProcess /></ProtectedRoute>} />

          {/* Protected Routes */}
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/kyc-verification" element={<ProtectedRoute><KycVerification /></ProtectedRoute>} />
        </Routes>
        
        {/* Global Modals */}
        <AuthModal />
        <KycPromptModal />
      </div>
    </>
  );
};

export default CustomerPortal;

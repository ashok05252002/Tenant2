import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import VendorLayout from './layout/VendorLayout';
import VendorDashboard from './pages/VendorDashboard';
import VendorProfilePage from './pages/VendorProfilePage';
import VendorKycPage from './pages/VendorKycPage';
import VendorServiceListings from './pages/VendorServiceListings';
import VendorServiceRequests from './pages/VendorServiceRequests';
import VendorPayments from './pages/VendorPayments';
import VendorFeedback from './pages/VendorFeedback';
import VendorReports from './pages/VendorReports';
import VendorTechnicians from './pages/VendorTechnicians';
import { ServiceVendorProvider } from './context/ServiceVendorContext';

const VendorDashboardRoutes = () => {
    return (
        <ServiceVendorProvider>
            <Routes>
                <Route element={<VendorLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<VendorDashboard />} />
                    <Route path="profile" element={<VendorProfilePage />} />
                    <Route path="kyc" element={<VendorKycPage />} />
                    <Route path="services" element={<VendorServiceListings />} />
                    <Route path="requests" element={<VendorServiceRequests />} />
                    <Route path="technicians" element={<VendorTechnicians />} />
                    <Route path="payments" element={<VendorPayments />} />
                    <Route path="feedback" element={<VendorFeedback />} />
                    <Route path="reports" element={<VendorReports />} />
                </Route>
            </Routes>
        </ServiceVendorProvider>
    );
};

export default VendorDashboardRoutes;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandlordLayout from './layout/LandlordLayout';
import LandlordDashboard from './pages/LandlordDashboard';
import LandlordProperties from './pages/LandlordProperties';
import LandlordPropertyDetail from './pages/LandlordPropertyDetail';
import LandlordAddProperty from './pages/LandlordAddProperty';
import LandlordTenants from './pages/LandlordTenants';
import LandlordTenantDetail from './pages/LandlordTenantDetail';
import LandlordFinancials from './pages/LandlordFinancials';
import LandlordMaintenance from './pages/LandlordMaintenance';
import LandlordApplicationApprovals from './pages/applications/LandlordApplicationApprovals';
import LandlordApplicationsStatus from './pages/applications/LandlordApplicationsStatus';
import LandlordPropertyApplications from './pages/applications/LandlordPropertyApplications';
import LandlordApplicationDetail from './pages/applications/LandlordApplicationDetail';
import LandlordProfilePage from './pages/LandlordProfilePage';
import LandlordKycPage from './pages/LandlordKycPage';
import { LandlordProvider } from './context/LandlordContext';

const LandlordDashboardRoutes = () => {
    return (
        <LandlordProvider>
            <Routes>
                <Route element={<LandlordLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<LandlordDashboard />} />
                    <Route path="properties" element={<LandlordProperties />} />
                    <Route path="properties/add" element={<LandlordAddProperty />} />
                    <Route path="properties/:id" element={<LandlordPropertyDetail />} />
                    <Route path="tenants" element={<LandlordTenants />} />
                    <Route path="tenants/:id" element={<LandlordTenantDetail />} />
                    <Route path="applications/approvals" element={<LandlordApplicationApprovals />} />
                    <Route path="applications/status" element={<LandlordApplicationsStatus />} />
                    <Route path="applications/by-property" element={<LandlordPropertyApplications />} />
                    <Route path="applications/:id" element={<LandlordApplicationDetail />} />
                    <Route path="financials" element={<LandlordFinancials />} />
                    <Route path="maintenance" element={<LandlordMaintenance />} />
                    <Route path="profile" element={<LandlordProfilePage />} />
                    <Route path="kyc" element={<LandlordKycPage />} />
                </Route>
            </Routes>
        </LandlordProvider>
    );
};

export default LandlordDashboardRoutes;

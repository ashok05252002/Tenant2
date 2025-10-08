import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BrokerLayout from './layout/BrokerLayout';
import BrokerDashboard from './pages/BrokerDashboard';
import BrokerProperties from './pages/BrokerProperties';
import BrokerPropertyDetail from './pages/BrokerPropertyDetail';
import BrokerAddProperty from './pages/BrokerAddProperty';
import BrokerInvites from './pages/BrokerInvites';
import BrokerTenants from './pages/BrokerTenants';
import BrokerTenantDetail from './pages/BrokerTenantDetail';
import BrokerPayments from './pages/BrokerPayments';
import BrokerMaintenance from './pages/BrokerMaintenance';
import BrokerApplicationApprovals from './pages/applications/BrokerApplicationApprovals';
import BrokerApplicationsStatus from './pages/applications/BrokerApplicationsStatus';
import BrokerPropertyApplications from './pages/applications/BrokerPropertyApplications';
import BrokerApplicationDetail from './pages/applications/BrokerApplicationDetail';
import BrokerProfilePage from './pages/BrokerProfilePage';
import BrokerKycPage from './pages/BrokerKycPage';
import { BrokerProvider } from './context/BrokerContext';

const BrokerDashboardRoutes = () => {
    return (
        <BrokerProvider>
            <Routes>
                <Route element={<BrokerLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<BrokerDashboard />} />
                    <Route path="properties" element={<BrokerProperties />} />
                    <Route path="properties/add" element={<BrokerAddProperty />} />
                    <Route path="properties/:id" element={<BrokerPropertyDetail />} />
                    <Route path="tenants" element={<BrokerTenants />} />
                    <Route path="tenants/:id" element={<BrokerTenantDetail />} />
                    <Route path="applications/approvals" element={<BrokerApplicationApprovals />} />
                    <Route path="applications/status" element={<BrokerApplicationsStatus />} />
                    <Route path="applications/by-property" element={<BrokerPropertyApplications />} />
                    <Route path="applications/:id" element={<BrokerApplicationDetail />} />
                    <Route path="invites" element={<BrokerInvites />} />
                    <Route path="payments" element={<BrokerPayments />} />
                    <Route path="maintenance" element={<BrokerMaintenance />} />
                    <Route path="profile" element={<BrokerProfilePage />} />
                    <Route path="kyc" element={<BrokerKycPage />} />
                </Route>
            </Routes>
        </BrokerProvider>
    );
};

export default BrokerDashboardRoutes;

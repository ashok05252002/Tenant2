import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';

// Masters
import AmenityMaster from './pages/masters/AmenityMaster';
import BedroomMaster from './pages/masters/BedroomMaster';
import BathroomMaster from './pages/masters/BathroomMaster';
import PropertyTypeMaster from './pages/masters/PropertyTypeMaster';
import LocationMaster from './pages/masters/LocationMaster';
import FurnishingMaster from './pages/masters/FurnishingMaster';
import PreferredTenantMaster from './pages/masters/PreferredTenantMaster';
import ParkingMaster from './pages/masters/ParkingMaster';
import ListingTypeMaster from './pages/masters/ListingTypeMaster';
import PetTypeMaster from './pages/masters/PetTypeMaster';
import ProjectMaster from './pages/masters/ProjectMaster';

// New Structure
import Tenants from './pages/modules/Tenants';
import TenantDetail from './pages/modules/TenantDetail';
import Brokers from './pages/modules/Brokers';
import BrokerDetail from './pages/modules/BrokerDetail';
import CommissionModels from './pages/brokers/CommissionModels';
import BrokerActivity from './pages/brokers/BrokerActivity';
import BrokerApprovals from './pages/brokers/BrokerApprovals';

// Landlord Management
import LandlordsList from './pages/landlords/LandlordsList';
import LandlordDetail from './pages/modules/LandlordDetail';
import LeaseApprovals from './pages/landlords/LeaseApprovals';
import LandlordFinancials from './pages/landlords/LandlordFinancials';
import LandlordApprovals from './pages/landlords/LandlordApprovals';

// Applications
import ApplicationApprovals from './pages/modules/applications/ApplicationApprovals';
import ApplicationsStatus from './pages/modules/applications/ApplicationsStatus';
import PropertyApplications from './pages/modules/applications/PropertyApplications';
import ApplicationDetailAdmin from './pages/modules/applications/ApplicationDetailAdmin';

// Modules
import Properties from './pages/modules/Properties';
import AddProperty from './pages/modules/AddProperty';
import PropertyDetailAdmin from './pages/modules/PropertyDetailAdmin';
import PropertyLogs from './pages/modules/PropertyLogs';
import Reports from './pages/modules/Reports';
import PropertyApprovals from './pages/properties/PropertyApprovals';

// Vendor Management (New)
import VendorsList from './pages/vendor/VendorsList';
import VendorDetail from './pages/vendor/VendorDetail';
import VendorServiceRequests from './pages/vendor/VendorServiceRequests';
import VendorServicePricing from './pages/vendor/VendorServicePricing';
import VendorServicePayments from './pages/vendor/VendorServicePayments';

// Website Management
import HeroManagement from './pages/website/HeroManagement';
import HowItWorksManagement from './pages/website/HowItWorksManagement';
import TestimonialsManagement from './pages/website/TestimonialsManagement';
import FaqManagement from './pages/website/FaqManagement';
import FooterManagement from './pages/website/FooterManagement';
import AboutUsPageManagement from './pages/website/AboutUsPageManagement';
import ContactUsPageManagement from './pages/website/ContactUsPageManagement';
import TermsPageManagement from './pages/website/TermsPageManagement';
import PrivacyPolicyPageManagement from './pages/website/PrivacyPolicyPageManagement';
import RefundPolicyPageManagement from './pages/website/RefundPolicyPageManagement';

// User Management
import UsersList from './pages/user-management/UsersList';
import RolesList from './pages/user-management/RolesList';

// Settings
import SystemSettings from './pages/settings/SystemSettings';
import Logs from './pages/settings/Logs';

// Invoicing & Payments
import InvoicesList from './pages/invoicing/InvoicesList';
import OverdueAccounts from './pages/invoicing/OverdueAccounts';
import Payouts from './pages/invoicing/Payouts';
import CreateBill from './pages/invoicing/CreateBill';

// Notifications
import NotificationTemplates from './pages/notifications/NotificationTemplates';
import NotificationLogs from './pages/notifications/NotificationLogs';


const AdminPortal = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        
        {/* New Structure */}
        <Route path="tenants" element={<Tenants />} />
        <Route path="tenants/:id" element={<TenantDetail />} />
        
        {/* Landlord Management */}
        <Route path="landlords/list" element={<LandlordsList />} />
        <Route path="landlords/:id" element={<LandlordDetail />} />
        <Route path="landlords/approvals" element={<LandlordApprovals />} />
        <Route path="landlords/lease-approvals" element={<LeaseApprovals />} />
        <Route path="landlords/financials" element={<LandlordFinancials />} />

        {/* Broker Management */}
        <Route path="brokers" element={<Brokers />} />
        <Route path="brokers/:id" element={<BrokerDetail />} />
        <Route path="brokers/approvals" element={<BrokerApprovals />} />
        <Route path="brokers/commissions" element={<CommissionModels />} />
        <Route path="brokers/activity" element={<BrokerActivity />} />

        {/* Applications */}
        <Route path="applications/approvals" element={<ApplicationApprovals />} />
        <Route path="applications/status" element={<ApplicationsStatus />} />
        <Route path="applications/by-property" element={<PropertyApplications />} />
        <Route path="applications/:id" element={<ApplicationDetailAdmin />} />
        
        {/* Vendor Management */}
        <Route path="vendor/list" element={<VendorsList />} />
        <Route path="vendor/detail/:id" element={<VendorDetail />} />
        <Route path="vendor/requests" element={<VendorServiceRequests />} />
        <Route path="vendor/pricing" element={<VendorServicePricing />} />
        <Route path="vendor/payments" element={<VendorServicePayments />} />

        {/* Invoicing & Payments */}
        <Route path="invoicing/invoices" element={<InvoicesList />} />
        <Route path="invoicing/create-bill" element={<CreateBill />} />
        <Route path="invoicing/overdue" element={<OverdueAccounts />} />
        <Route path="invoicing/payouts" element={<Payouts />} />
        
        {/* Notifications */}
        <Route path="notifications/templates" element={<NotificationTemplates />} />
        <Route path="notifications/logs" element={<NotificationLogs />} />

        {/* Masters */}
        <Route path="masters/listing-types" element={<ListingTypeMaster />} />
        <Route path="masters/amenities" element={<AmenityMaster />} />
        <Route path="masters/bedrooms" element={<BedroomMaster />} />
        <Route path="masters/bathrooms" element={<BathroomMaster />} />
        <Route path="masters/property-types" element={<PropertyTypeMaster />} />
        <Route path="masters/locations" element={<LocationMaster />} />
        <Route path="masters/furnishing-types" element={<FurnishingMaster />} />
        <Route path="masters/preferred-tenants" element={<PreferredTenantMaster />} />
        <Route path="masters/parking" element={<ParkingMaster />} />
        <Route path="masters/pet-types" element={<PetTypeMaster />} />
        <Route path="masters/projects" element={<ProjectMaster />} />

        {/* Property Management */}
        <Route path="modules/properties" element={<Properties />} />
        <Route path="modules/properties/add" element={<AddProperty />} />
        <Route path="modules/properties/:id" element={<PropertyDetailAdmin />} />
        <Route path="modules/property-logs" element={<PropertyLogs />} />
        <Route path="properties/approvals" element={<PropertyApprovals />} />
        
        <Route path="reporting" element={<Reports />} />
        
        {/* User Management */}
        <Route path="user-management/users" element={<UsersList />} />
        <Route path="user-management/roles" element={<RolesList />} />

        {/* Website Management */}
        <Route path="website/hero" element={<HeroManagement />} />
        <Route path="website/how-it-works" element={<HowItWorksManagement />} />
        <Route path="website/testimonials" element={<TestimonialsManagement />} />
        <Route path="website/faq" element={<FaqManagement />} />
        <Route path="website/footer" element={<FooterManagement />} />
        <Route path="website/about-us" element={<AboutUsPageManagement />} />
        <Route path="website/contact-us" element={<ContactUsPageManagement />} />
        <Route path="website/terms" element={<TermsPageManagement />} />
        <Route path="website/privacy-policy" element={<PrivacyPolicyPageManagement />} />
        <Route path="website/refund-policy" element={<RefundPolicyPageManagement />} />

        {/* Settings */}
        <Route path="settings/system" element={<SystemSettings />} />
        <Route path="settings/logs" element={<Logs />} />
      </Route>
    </Routes>
  );
};

export default AdminPortal;

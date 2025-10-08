import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import VendorSidebar from '../components/VendorSidebar';
import VendorHeader from '../components/VendorHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import { useServiceVendor } from '../context/ServiceVendorContext';
import PartnerKycPrompt from '../../components/partner-portals/PartnerKycPrompt';
import PartnerKycPromptModal from '../../components/partner-portals/PartnerKycPromptModal';

const VendorLayout = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const { kycStatus, kycPromptModalOpen, setKycPromptModalOpen } = useServiceVendor();

    return (
        <div className="flex h-screen bg-secondary-50 font-lato">
            <VendorSidebar isCollapsed={isSidebarCollapsed} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                <VendorHeader 
                    onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} 
                    isSidebarCollapsed={isSidebarCollapsed}
                />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Breadcrumbs />
                     {kycStatus !== 'completed' ? (
                        <div className="mt-8">
                            <PartnerKycPrompt userType="Service Vendor" />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
            <PartnerKycPromptModal
                isOpen={kycPromptModalOpen}
                onClose={() => setKycPromptModalOpen(false)}
                userType="Service Vendor"
            />
        </div>
    );
};

export default VendorLayout;

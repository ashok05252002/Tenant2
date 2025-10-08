import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LandlordSidebar from '../components/LandlordSidebar';
import LandlordHeader from '../components/LandlordHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLandlord } from '../context/LandlordContext';
import PartnerKycPrompt from '../../components/partner-portals/PartnerKycPrompt';
import PartnerKycPromptModal from '../../components/partner-portals/PartnerKycPromptModal';

const LandlordLayout = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const { kycStatus, kycPromptModalOpen, setKycPromptModalOpen } = useLandlord();
    const location = useLocation();

    const isKycOrProfilePage = location.pathname.endsWith('/kyc') || location.pathname.endsWith('/profile');

    return (
        <div className="flex h-screen bg-secondary-50 font-lato">
            <LandlordSidebar isCollapsed={isSidebarCollapsed} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                <LandlordHeader 
                    onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} 
                    isSidebarCollapsed={isSidebarCollapsed}
                />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Breadcrumbs />
                     {kycStatus !== 'completed' && !isKycOrProfilePage ? (
                        <div className="mt-8">
                            <PartnerKycPrompt userType="Landlord" />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
             <PartnerKycPromptModal
                isOpen={kycPromptModalOpen}
                onClose={() => setKycPromptModalOpen(false)}
                userType="Landlord"
            />
        </div>
    );
};

export default LandlordLayout;

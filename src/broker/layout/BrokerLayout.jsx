import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BrokerSidebar from '../components/BrokerSidebar';
import BrokerHeader from '../components/BrokerHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import { useBroker } from '../context/BrokerContext';
import PartnerKycPrompt from '../../components/partner-portals/PartnerKycPrompt';
import PartnerKycPromptModal from '../../components/partner-portals/PartnerKycPromptModal';

const BrokerLayout = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const { kycStatus, kycPromptModalOpen, setKycPromptModalOpen } = useBroker();
    const location = useLocation();

    const isKycOrProfilePage = location.pathname.endsWith('/kyc') || location.pathname.endsWith('/profile');

    return (
        <div className="flex h-screen bg-secondary-50 font-lato">
            <BrokerSidebar isCollapsed={isSidebarCollapsed} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                <BrokerHeader 
                    onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} 
                    isSidebarCollapsed={isSidebarCollapsed}
                />
                <main className="flex-1 p-6 overflow-y-auto">
                    <Breadcrumbs />
                    {kycStatus !== 'completed' && !isKycOrProfilePage ? (
                        <div className="mt-8">
                            <PartnerKycPrompt userType="Broker" />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
            <PartnerKycPromptModal
                isOpen={kycPromptModalOpen}
                onClose={() => setKycPromptModalOpen(false)}
                userType="Broker"
            />
        </div>
    );
};

export default BrokerLayout;

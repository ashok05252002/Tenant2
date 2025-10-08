import React from 'react';
import UpcomingPayment from './UpcomingPayment';
import MaintenanceRequests from './MaintenanceRequests';
import Announcements from './Announcements';
import QuickContact from './QuickContact';
import OtherActions from './OtherActions';

const DashboardTab = ({ leaseData, requests, announcements, onNewRequest, onVacateClick }) => {
    return (
        <div className="space-y-8">
            <UpcomingPayment paymentInfo={leaseData.payment} />
            <MaintenanceRequests requests={requests} onNewRequest={onNewRequest} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Announcements announcements={announcements} />
                <div className="space-y-8">
                    <QuickContact contactInfo={leaseData.landlord} />
                    <OtherActions onVacateClick={onVacateClick} />
                </div>
            </div>
        </div>
    );
};

export default DashboardTab;

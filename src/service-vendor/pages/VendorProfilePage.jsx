import React from 'react';
import PartnerProfileContent from '../../components/partner-portals/PartnerProfileContent';
import { useServiceVendor } from '../context/ServiceVendorContext';

const VendorProfilePage = () => {
    const { kycStatus } = useServiceVendor();

    const mockVendor = {
        name: 'Oman Technical Services',
        email: 'contact@omantech.com',
        phone: '+968 9333 4444',
        kycStatus: kycStatus,
    };

    return <PartnerProfileContent user={mockVendor} userType="Service Vendor" />;
};

export default VendorProfilePage;

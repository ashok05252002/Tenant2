import React from 'react';
import PartnerProfileContent from '../../components/partner-portals/PartnerProfileContent';
import { useLandlord } from '../context/LandlordContext';

const LandlordProfilePage = () => {
    const { kycStatus } = useLandlord();

    const mockLandlord = {
        name: 'Abdullah Al-Said',
        email: 'abdullah.landlord@example.com',
        phone: '+968 9111 2233',
        kycStatus: kycStatus,
    };

    return <PartnerProfileContent user={mockLandlord} userType="Landlord" />;
};

export default LandlordProfilePage;

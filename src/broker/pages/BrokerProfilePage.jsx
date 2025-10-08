import React from 'react';
import PartnerProfileContent from '../../components/partner-portals/PartnerProfileContent';
import { useBroker } from '../context/BrokerContext';

const BrokerProfilePage = () => {
    const { kycStatus } = useBroker();

    const mockBroker = {
        name: 'Khalfan Al-Abri',
        email: 'khalfan.broker@realestate.com',
        phone: '+968 9876 5432',
        kycStatus: kycStatus,
    };

    return <PartnerProfileContent user={mockBroker} userType="Broker" />;
};

export default BrokerProfilePage;

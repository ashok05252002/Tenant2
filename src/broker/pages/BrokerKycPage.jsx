import React from 'react';
import { useNavigate } from 'react-router-dom';
import PartnerKycForm from '../../components/partner-portals/PartnerKycForm';
import { useBroker } from '../context/BrokerContext';

const BrokerKycPage = () => {
    const { completeKyc } = useBroker();
    const navigate = useNavigate();

    const requiredDocs = {
        nationalId: 'National ID',
        reraCertificate: 'RERA Certificate',
    };

    const handleSubmit = (documents) => {
        console.log(`Submitting KYC for Broker:`, documents);
        completeKyc();
        navigate(`/broker/profile`);
    };

    return <PartnerKycForm userType="Broker" requiredDocs={requiredDocs} onSubmit={handleSubmit} />;
};

export default BrokerKycPage;

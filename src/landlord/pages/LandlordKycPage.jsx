import React from 'react';
import { useNavigate } from 'react-router-dom';
import PartnerKycForm from '../../components/partner-portals/PartnerKycForm';
import { useLandlord } from '../context/LandlordContext';

const LandlordKycPage = () => {
    const { completeKyc } = useLandlord();
    const navigate = useNavigate();

    const requiredDocs = {
        nationalId: 'National ID',
        propertyOwnership: 'Property Ownership Deed',
    };

    const handleSubmit = (documents) => {
        console.log(`Submitting KYC for Landlord:`, documents);
        completeKyc();
        navigate(`/landlord/profile`);
    };

    return <PartnerKycForm userType="Landlord" requiredDocs={requiredDocs} onSubmit={handleSubmit} />;
};

export default LandlordKycPage;

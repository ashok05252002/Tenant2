import React from 'react';
import { useNavigate } from 'react-router-dom';
import PartnerKycForm from '../../components/partner-portals/PartnerKycForm';
import { useServiceVendor } from '../context/ServiceVendorContext';

const VendorKycPage = () => {
    const { completeKyc } = useServiceVendor();
    const navigate = useNavigate();

    const requiredDocs = {
        tradeLicense: 'Trade License',
        vatCertificate: 'VAT Certificate',
    };

    const handleSubmit = (documents) => {
        console.log(`Submitting KYC for Service Vendor:`, documents);
        completeKyc();
        navigate(`/service-vendor/profile`);
    };

    return <PartnerKycForm userType="Service Vendor" requiredDocs={requiredDocs} onSubmit={handleSubmit} />;
};

export default VendorKycPage;

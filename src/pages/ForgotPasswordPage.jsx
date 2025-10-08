import React from 'react';
import PartnerLoginLayout from '../components/partner-portals/PartnerLoginLayout';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

const ForgotPasswordPage = () => {
    return (
        <PartnerLoginLayout>
            <ForgotPasswordForm />
        </PartnerLoginLayout>
    );
};

export default ForgotPasswordPage;

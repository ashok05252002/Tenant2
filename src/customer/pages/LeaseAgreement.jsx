import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';

const LeaseAgreement = () => {
  const { applicationId } = useParams();
  return (
    <CustomerLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-secondary-900">Lease Agreement for Application: {applicationId}</h1>
        <p className="text-secondary-600 mt-2">This page is under construction. The lease agreement viewer and digital signature panel will be implemented here.</p>
      </div>
    </CustomerLayout>
  );
};

export default LeaseAgreement;

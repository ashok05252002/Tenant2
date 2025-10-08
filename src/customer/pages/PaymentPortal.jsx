import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';

const PaymentPortal = () => {
  const { leaseId } = useParams();
  return (
    <CustomerLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-secondary-900">Payment Portal for Lease: {leaseId}</h1>
        <p className="text-secondary-600 mt-2">This page is under construction. A secure payment interface for rent and other fees will be available here.</p>
      </div>
    </CustomerLayout>
  );
};

export default PaymentPortal;

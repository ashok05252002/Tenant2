import React from 'react';
import CustomerLayout from '../components/CustomerLayout';

const TenantPortal = () => {
  return (
    <CustomerLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-secondary-900">Full Tenant Portal</h1>
        <p className="text-secondary-600 mt-2">This page is under construction. The main portal for tenants, including rent payment, maintenance requests, and document vault, will be here.</p>
      </div>
    </CustomerLayout>
  );
};

export default TenantPortal;

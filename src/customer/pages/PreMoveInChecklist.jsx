import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';

const PreMoveInChecklist = () => {
  const { leaseId } = useParams();
  return (
    <CustomerLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-secondary-900">Pre-Move-in Checklist for Lease: {leaseId}</h1>
        <p className="text-secondary-600 mt-2">This page is under construction. The inventory checklist and move-in scheduling will be managed here.</p>
      </div>
    </CustomerLayout>
  );
};

export default PreMoveInChecklist;

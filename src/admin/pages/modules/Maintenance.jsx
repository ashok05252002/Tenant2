import React from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';

const Maintenance = () => {
  return (
    <AdminPageLayout title="Maintenance">
      <p className="text-secondary-600">Manage all maintenance requests from this page. A table of requests will be displayed here.</p>
    </AdminPageLayout>
  );
};

export default Maintenance;

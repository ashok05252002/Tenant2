import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { preferredTenants } from '../../data/masters';

const PreferredTenantMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Preferred Tenant Master"
            data={preferredTenants}
            columns={columns}
            singularName="Preferred Tenant"
        />
    );
};

export default PreferredTenantMaster;

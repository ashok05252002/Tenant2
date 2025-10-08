import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { propertyTypes } from '../../data/masters';

const PropertyTypeMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Property Type Master"
            data={propertyTypes}
            columns={columns}
            singularName="Property Type"
        />
    );
};

export default PropertyTypeMaster;

import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { bathroomTypes } from '../../data/masters';

const BathroomMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Bathroom Type Master"
            data={bathroomTypes}
            columns={columns}
            singularName="Bathroom Type"
        />
    );
};

export default BathroomMaster;

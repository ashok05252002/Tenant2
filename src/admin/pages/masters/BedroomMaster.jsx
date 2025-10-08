import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { bedroomTypes } from '../../data/masters';

const BedroomMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Bedroom Type Master"
            data={bedroomTypes}
            columns={columns}
            singularName="Bedroom Type"
        />
    );
};

export default BedroomMaster;

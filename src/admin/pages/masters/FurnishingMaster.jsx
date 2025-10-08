import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { furnishingTypes } from '../../data/masters';

const FurnishingMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Furnishing Type Master"
            data={furnishingTypes}
            columns={columns}
            singularName="Furnishing Type"
        />
    );
};

export default FurnishingMaster;

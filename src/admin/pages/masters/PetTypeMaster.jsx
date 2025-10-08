import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { petTypes } from '../../data/masters';

const PetTypeMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Pet Type Master"
            data={petTypes}
            columns={columns}
            singularName="Pet Type"
        />
    );
};

export default PetTypeMaster;

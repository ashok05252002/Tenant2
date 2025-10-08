import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { locations } from '../../data/masters';

const LocationMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Location Master"
            data={locations}
            columns={columns}
            singularName="Location"
        />
    );
};

export default LocationMaster;

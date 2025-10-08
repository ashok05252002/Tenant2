import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { amenities } from '../../data/masters';

const AmenityMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Amenity Master"
            data={amenities}
            columns={columns}
            singularName="Amenity"
        />
    );
};

export default AmenityMaster;

import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { listingTypes } from '../../data/masters';

const ListingTypeMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Listing Type Master"
            data={listingTypes}
            columns={columns}
            singularName="Listing Type"
        />
    );
};

export default ListingTypeMaster;

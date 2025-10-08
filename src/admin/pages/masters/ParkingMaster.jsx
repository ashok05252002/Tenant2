import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { parkingTypes } from '../../data/masters';

const ParkingMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Parking Master"
            data={parkingTypes}
            columns={columns}
            singularName="Parking Type"
        />
    );
};

export default ParkingMaster;

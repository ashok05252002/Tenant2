import React from 'react';
import HeroManagement from '../settings/HeroManagement'; // Re-using the existing component

const HeroManagementPage = () => {
    // This component just wraps the existing one for the new route.
    // In a larger app, you might have different logic here.
    return <HeroManagement />;
};

export default HeroManagementPage;

import React from 'react';
import MasterPageLayout from '../../components/masters/MasterPageLayout';
import { projects } from '../../data/projects';

const ProjectMaster = () => {
    const columns = [
        { key: 'icon', header: 'Icon' },
        { key: 'name', header: 'Name' },
    ];

    return (
        <MasterPageLayout
            title="Project Master"
            data={projects}
            columns={columns}
            singularName="Project"
        />
    );
};

export default ProjectMaster;

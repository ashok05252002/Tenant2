export const mockRoles = [
    {
        id: 1,
        name: 'Super Admin',
        description: 'Full access to all modules and settings.',
        permissions: {
            'Dashboard': ['View'],
            'People Management': ['View', 'Create', 'Edit', 'Delete'],
            'Applications': ['View', 'Create', 'Edit', 'Delete'],
            'Service Management': ['View', 'Create', 'Edit', 'Delete'],
            'Modules': ['View', 'Create', 'Edit', 'Delete'],
            'Reporting': ['View'],
            'User Management': ['View', 'Create', 'Edit', 'Delete'],
            'Masters': ['View', 'Create', 'Edit', 'Delete'],
            'Website Management': ['View', 'Create', 'Edit', 'Delete'],
            'Settings': ['View', 'Create', 'Edit', 'Delete'],
        }
    },
    {
        id: 2,
        name: 'Property Manager',
        description: 'Manages properties, tenants, and applications.',
        permissions: {
            'Dashboard': ['View'],
            'People Management': ['View', 'Edit'],
            'Applications': ['View', 'Edit'],
            'Modules': ['View', 'Create', 'Edit'],
        }
    },
    {
        id: 3,
        name: 'Support',
        description: 'Handles maintenance requests and user queries.',
        permissions: {
            'Dashboard': ['View'],
            'Service Management': ['View', 'Edit'],
        }
    }
];

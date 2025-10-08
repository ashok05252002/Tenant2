export const mockOngoingApplications = [
    {
        id: 'APP-201',
        propertyId: 1,
        tenantId: 3,
        propertyName: 'Qurum Heights, Apt 101',
        applicantName: 'John Smith',
        status: 'KYC & Verification',
        progress: 25,
        submittedDate: '2025-08-20',
        steps: [
            { name: 'Register', status: 'completed' },
            { name: 'KYC & Verification', status: 'current' },
            { name: 'Application Details', status: 'upcoming' },
            { name: 'Sign Agreement', status: 'upcoming' },
            { name: 'Payment', status: 'upcoming' },
            { name: 'Confirmation', status: 'upcoming' },
        ],
        needsApproval: false
    },
    {
        id: 'APP-202',
        propertyId: 2,
        tenantId: 4,
        propertyName: 'The Marina View, Penthouse 5',
        applicantName: 'Jane Doe',
        status: 'Awaiting Admin Approval',
        progress: 60,
        submittedDate: '2025-08-18',
        steps: [
            { name: 'Register', status: 'completed' },
            { name: 'KYC & Verification', status: 'completed' },
            { name: 'Application Details', status: 'completed' },
            { name: 'Sign Agreement', status: 'completed' },
            { name: 'Payment', status: 'current' },
            { name: 'Confirmation', status: 'upcoming' },
        ],
        needsApproval: true,
        approvalTask: 'Lease agreement signed. Review and approve to proceed to payment.'
    },
    {
        id: 'APP-203',
        propertyId: 4,
        tenantId: 6,
        propertyName: 'Bawshar Sands, Unit 23',
        applicantName: 'Peter Jones',
        status: 'Payment',
        progress: 80,
        submittedDate: '2025-08-15',
        steps: [
            { name: 'Register', status: 'completed' },
            { name: 'KYC & Verification', status: 'completed' },
            { name: 'Application Details', status: 'completed' },
            { name: 'Sign Agreement', status: 'completed' },
            { name: 'Payment', status: 'current' },
            { name: 'Confirmation', status: 'upcoming' },
        ],
        needsApproval: false
    },
    {
        id: 'APP-204',
        propertyId: 3,
        tenantId: 7,
        propertyName: 'Khuwair Residences, Villa 8',
        applicantName: 'Mary Johnson',
        status: 'Completed',
        progress: 100,
        submittedDate: '2025-08-10',
        steps: [
            { name: 'Register', status: 'completed' },
            { name: 'KYC & Verification', status: 'completed' },
            { name: 'Application Details', status: 'completed' },
            { name: 'Sign Agreement', status: 'completed' },
            { name: 'Payment', status: 'completed' },
            { name: 'Confirmation', status: 'completed' },
        ],
        needsApproval: false
    }
];

export const mockVendors = [
    {
        id: 1,
        name: 'Oman Technical Services',
        specialty: 'Plumbing, Electrical',
        status: 'Active',
        rating: 4.8,
        jobsCompleted: 125,
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/81.jpg',
        email: 'contact@omantech.com',
        phone: '+968 9333 4444',
        assignedTasks: [
            { id: 'SR-001', property: 'Qurum Heights, Apt 101', service: 'Leaky Faucet Repair', status: 'Completed' },
            { id: 'SR-005', property: 'Khuwair Residences, Villa 8', service: 'Blocked Drain', status: 'In Progress' }
        ],
        paymentHistory: [
            { id: 'PAY-V-001', date: '2025-08-18', amount: 150.00, status: 'Paid' },
            { id: 'PAY-V-002', date: '2025-07-20', amount: 250.00, status: 'Paid' },
        ]
    },
    {
        id: 2,
        name: 'Muscat Maintenance Co.',
        specialty: 'Air Conditioning',
        status: 'Active',
        rating: 4.7,
        jobsCompleted: 210,
        avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/83.jpg',
        email: 'info@muscatmaintenance.com',
        phone: '+968 9988 7767',
        assignedTasks: [],
        paymentHistory: [
            { id: 'PAY-V-003', date: '2025-08-10', amount: 300.00, status: 'Paid' },
        ]
    }
];

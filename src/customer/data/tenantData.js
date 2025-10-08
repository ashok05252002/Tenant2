export const activeLease = {
  property: {
    id: 2,
    title: 'Spacious 2BR Villa',
    address: 'Villa 12, Al Khuwair Street, Muscat',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600'],
  },
  lease: {
    startDate: '2024-08-01',
    endDate: '2025-07-31',
    status: 'Active',
  },
  landlord: {
    name: 'Aisha Al-Harthi',
    phone: '+96891234567',
    email: 'aisha.agent@realestate.com',
  },
  payment: {
    nextDueDate: '2025-09-01',
    amountDue: 800,
    isOverdue: false,
  },
};

export const paymentHistory = [
  { id: 'PAY-005', date: '2025-08-01', amount: 800, method: 'Bank Transfer', status: 'Paid' },
  { id: 'PAY-004', date: '2025-07-01', amount: 800, method: 'Credit Card', status: 'Paid' },
  { id: 'PAY-003', date: '2025-06-01', amount: 800, method: 'Credit Card', status: 'Paid' },
  { id: 'PAY-002', date: '2025-05-01', amount: 800, method: 'Bank Transfer', status: 'Paid' },
];

export const maintenanceRequests = [
  { id: 'REQ-012', category: 'Plumbing', description: 'Kitchen sink is leaking.', status: 'Resolved', date: '2025-07-15' },
  { id: 'REQ-015', category: 'Air Conditioning', description: 'AC in the master bedroom is not cooling properly.', status: 'In Progress', date: '2025-08-10' },
  { id: 'REQ-016', category: 'Electrical', description: 'Light fixture in the living room is flickering.', status: 'Open', date: '2025-08-20' },
];

export const announcements = [
    { id: 1, title: 'Scheduled Water Outage', content: 'Please be advised that there will be a scheduled water outage for maintenance on August 28th from 10 AM to 2 PM.', date: '2025-08-22' },
    { id: 2, title: 'Annual Fire Drill', content: 'The annual fire drill for the complex will be held on September 5th at 11 AM. Please familiarize yourself with the evacuation routes.', date: '2025-08-20' },
];

export const documents = [
    { name: 'Lease Agreement.pdf', type: 'Lease' },
    { name: 'Move-in_Checklist.pdf', type: 'Inventory' },
    { name: 'Receipt_Aug_2025.pdf', type: 'Receipt' },
    { name: 'Community_Rules.pdf', type: 'Notice' },
];

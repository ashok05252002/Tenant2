export const mockBankTransactions = [
    { id: 'B-001', date: '2025-09-01', description: 'Rent - K. Al-Abri', amount: 800, type: 'Credit', status: 'Unmatched' },
    { id: 'B-002', date: '2025-09-01', description: 'Rent - F. Al-Balushi', amount: 400, type: 'Credit', status: 'Matched' },
    { id: 'B-003', date: '2025-08-30', description: 'Service Fee - OmanTech', amount: -50, type: 'Debit', status: 'Matched' },
];

export const mockPlatformTransactions = [
    { id: 'P-001', date: '2025-09-01', description: 'Invoice INV-002', amount: 400, type: 'Credit', status: 'Matched' },
    { id: 'P-002', date: '2025-08-30', description: 'Payout to OmanTech', amount: -50, type: 'Debit', status: 'Matched' },
    { id: 'P-003', date: '2025-09-02', description: 'Invoice INV-005', amount: 600, type: 'Credit', status: 'Unmatched' },
];

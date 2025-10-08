export const mockApplications = [
  {
    id: 'APP-101',
    property: {
        id: 2,
        title: 'Spacious 2BR Villa',
        location: 'Al Khuwair, Muscat',
    },
    date: '2025-01-20',
    status: 'Under Review', // Submitted, Under Review, AgreementPending, DocumentsPending, ReadyForMoveIn, Completed
  },
  {
    id: 'APP-102',
    property: {
        id: 5,
        title: 'Beachfront Apartment',
        location: 'Salalah, Dahariz',
    },
    date: '2025-01-15',
    status: 'AgreementPending',
  },
  {
    id: 'APP-103',
    property: {
        id: 6,
        title: 'Downtown Studio',
        location: 'Ruwi, Muscat',
    },
    date: '2025-01-10',
    status: 'Rejected',
    rejectionReason: 'Unfortunately, the landlord has decided to proceed with another applicant. We encourage you to apply for other properties.'
  },
  {
    id: 'APP-104',
    property: {
        id: 1,
        title: 'Modern Studio Apartment',
        location: 'Al Qurum, Muscat',
    },
    date: '2025-01-22',
    status: 'Completed',
  },
];

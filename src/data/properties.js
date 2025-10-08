export const mockAdminProperties = [
    {
        id: 1,
        name: 'Qurum Heights, Apt 101',
        project: 'Qurum Gardens',
        location: 'Muscat',
        status: 'Active',
        listingType: 'Rent',
        occupancyStatus: 'Occupied',
        tenantId: 1,
        landlordId: 1,
        brokerId: 1,
        details: {
            bedrooms: '2 BHK',
            bathrooms: '2 Bathrooms',
            area: 1200,
            price: 850,
            description: 'A stunning 2-bedroom apartment in the heart of Qurum with breathtaking city views. Features a modern kitchen, spacious living area, and a large balcony. Perfect for families or professionals seeking a premium living experience.',
            applicationDate: '2025-01-15'
        },
        amenities: ['Free WiFi', 'Free Parking', 'Air Conditioning', 'Gym Access', 'Pets Allowed'],
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600'
        ]
    },
    {
        id: 2,
        name: 'The Marina View, Penthouse 5',
        project: 'The Marina View',
        location: 'Al Mouj',
        status: 'Active',
        listingType: 'Buy',
        occupancyStatus: 'Vacant',
        tenantId: null,
        landlordId: 2,
        brokerId: 3,
        details: {
            bedrooms: '4+ BHK',
            bathrooms: '4+ Bathrooms',
            area: 3500,
            price: 250000,
            description: 'Unparalleled luxury in this expansive penthouse at The Marina View. Enjoy panoramic ocean views, a private rooftop pool, and state-of-the-art amenities. An exclusive lifestyle awaits.',
            applicationDate: '2025-02-10'
        },
        amenities: ['Free WiFi', 'Free Parking', 'Air Conditioning', 'Gym Access', 'Swimming Pool', 'Security'],
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600'
        ]
    },
    {
        id: 3,
        name: 'Khuwair Residences, Villa 8',
        project: 'Khuwair Residences',
        location: 'Al Khuwair',
        status: 'Pending Approval',
        listingType: 'Rent',
        occupancyStatus: 'Vacant',
        tenantId: null,
        landlordId: 3,
        brokerId: 2,
        details: {
            bedrooms: '3 BHK',
            bathrooms: '3 Bathrooms',
            area: 1800,
            price: 1100,
            description: 'A beautiful family villa in a quiet residential area. Features a private garden, modern fittings, and close proximity to international schools and shopping centers.',
            applicationDate: '2025-03-01'
        },
        amenities: ['Free Parking', 'Air Conditioning', 'Pets Allowed'],
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600'
        ]
    },
    {
        id: 4,
        name: 'Bawshar Sands, Unit 23',
        project: 'Bawshar Sands',
        location: 'Bawshar',
        status: 'Active',
        listingType: 'Rent',
        occupancyStatus: 'Occupied',
        tenantId: 2,
        landlordId: 1,
        brokerId: 1,
        details: {
            bedrooms: '1 BHK',
            bathrooms: '1 Bathroom',
            area: 750,
            price: 450,
            description: 'A modern and compact 1-bedroom apartment, ideal for singles or young couples. Located in the vibrant Bawshar area with easy access to major highways and malls.',
            applicationDate: '2025-03-20'
        },
        amenities: ['Free WiFi', 'Free Parking', 'Air Conditioning', 'Gym Access'],
        images: [
            'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600'
        ]
    },
    {
        id: 5,
        name: 'Seaside Villas, Villa 3',
        project: 'Seaside Villas',
        location: 'Shatti Al Qurum',
        status: 'Pending Approval',
        listingType: 'Buy',
        occupancyStatus: 'Vacant',
        tenantId: null,
        landlordId: 2,
        brokerId: 3,
        details: {
            bedrooms: '5+ BHK',
            bathrooms: '5+ Bathrooms',
            area: 5000,
            price: 450000,
            description: 'An exclusive beachfront villa with private beach access, infinity pool, and luxurious finishes throughout.',
            applicationDate: '2025-04-01'
        },
        amenities: ['Swimming Pool', 'Security', 'Free Parking'],
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600'
        ]
    },
];

import { MapPin, Star, Award, Languages, Phone, Mail, MessageSquare } from 'lucide-react';

export const mockAgents = [
  {
    id: 1,
    name: 'Khalfan Al-Abri',
    tagline: 'Your trusted partner in Muscat real estate.',
    rating: 4.9,
    reviews: 120,
    experience: 8,
    verified: true,
    specializations: ['Luxury Villas', 'Apartment Rentals', 'Commercial'],
    serviceArea: 'Muscat, Al Qurum',
    languages: ['Arabic', 'English'],
    activeListings: 15,
    photo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'With over 8 years of experience in the Muscat property market, Khalfan has a proven track record of helping clients find their perfect home. He specializes in luxury properties in the Al Qurum and Shatti Al Qurum areas and is known for his exceptional negotiation skills and client-focused approach.',
    experienceTimeline: [
      { year: 2017, role: 'Real Estate Agent', company: 'Muscat Homes' },
      { year: 2019, role: 'Senior Agent', company: 'Savills Oman' },
      { year: 2022, role: 'Top Performer Award', company: 'Savills Oman' },
      { year: 2023, role: 'Principal Agent', company: 'This Platform' },
    ],
    contact: {
      phone: '+96898765432',
      email: 'khalfan.agent@realestate.com',
    },
    clientTestimonials: [
      { name: 'Ahmed Al-Farsi', rating: 5, comment: 'Khalfan was amazing! He found us the perfect villa in just one week.' },
      { name: 'Jane Doe', rating: 5, comment: 'Professional, knowledgeable, and very responsive. Highly recommend.' },
    ]
  },
  {
    id: 2,
    name: 'Aisha Al-Harthi',
    tagline: 'Connecting families with homes in Al Khuwair.',
    rating: 4.8,
    reviews: 95,
    experience: 6,
    verified: true,
    specializations: ['Family Homes', 'Apartment Rentals'],
    serviceArea: 'Muscat, Al Khuwair',
    languages: ['Arabic', 'English', 'French'],
    activeListings: 12,
    photo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Aisha is a dedicated agent with a passion for real estate and a deep understanding of the Al Khuwair and Madinat Al Sultan Qaboos areas. She excels at matching families with homes that fit their lifestyle and budget.',
    experienceTimeline: [
      { year: 2019, role: 'Junior Agent', company: 'Better Homes Oman' },
      { year: 2021, role: 'Real Estate Consultant', company: 'This Platform' },
      { year: 2023, role: 'Rising Star Award', company: 'This Platform' },
    ],
    contact: {
      phone: '+96891234567',
      email: 'aisha.agent@realestate.com',
    },
    clientTestimonials: [
      { name: 'The Khan Family', rating: 5, comment: 'Aisha made our move to Muscat so smooth. She found us a great school and a beautiful home nearby.' },
    ]
  },
  {
    id: 3,
    name: 'Salim Al-Said',
    tagline: 'Expert in Al Mouj and luxury waterfront properties.',
    rating: 5.0,
    reviews: 150,
    experience: 10,
    verified: true,
    specializations: ['Waterfront Properties', 'Luxury Apartments', 'Penthouses'],
    serviceArea: 'Muscat, Al Mouj',
    languages: ['Arabic', 'English'],
    activeListings: 20,
    photo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/60.jpg',
    bio: 'Salim is the go-to expert for luxury properties in Al Mouj. With a decade of experience, he offers unparalleled market insights and access to exclusive listings.',
    experienceTimeline: [
      { year: 2015, role: 'Agent', company: 'Al Mouj Real Estate' },
      { year: 2020, role: 'Luxury Property Specialist', company: 'This Platform' },
    ],
    contact: {
      phone: '+96899887766',
      email: 'salim.agent@realestate.com',
    },
    clientTestimonials: [
      { name: 'Dr. Alistair Finch', rating: 5, comment: 'Salim is a true professional. His knowledge of the Al Mouj market is second to none.' },
    ]
  },
];

export const mockProperties = [
    { id: 1, agentId: 1, title: 'Modern Studio Apartment', location: 'Muscat, Al Qurum', price: 400, beds: 1, baths: 1, area: 650, images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400'], rating: 4.8, available: true, noticePeriod: '30 days' },
    { id: 2, agentId: 2, title: 'Spacious 2BR Villa', location: 'Muscat, Al Khuwair', price: 800, beds: 2, baths: 2, area: 1200, images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400'], rating: 4.9, available: true, noticePeriod: '60 days' },
    { id: 3, agentId: 3, title: 'Luxury Penthouse', location: 'Muscat, Al Mouj', price: 1500, beds: 3, baths: 3, area: 2100, images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400'], rating: 4.7, available: false, noticePeriod: '90 days' },
    { id: 4, agentId: 1, title: 'Cozy Family Home', location: 'Nizwa, Firq', price: 550, beds: 3, baths: 2, area: 1500, images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400'], rating: 4.6, available: true, noticePeriod: '30 days' },
    { id: 5, agentId: 2, title: 'Beachfront Apartment', location: 'Salalah, Dahariz', price: 950, beds: 2, baths: 2, area: 1100, images: ['https://images.unsplash.com/photo-1493809842344-ab6181ba96a2?w=400', 'https://images.unsplash.com/photo-1513584684374-8BAB748fbf90?w=400'], rating: 4.8, available: true, noticePeriod: '60 days' },
    { id: 6, agentId: 3, title: 'Downtown Studio', location: 'Muscat, Ruwi', price: 350, beds: 1, baths: 1, area: 500, images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400'], rating: 4.5, available: false, noticePeriod: '30 days' }
];

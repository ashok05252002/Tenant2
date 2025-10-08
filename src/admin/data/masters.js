import { Wifi, ParkingCircle, Snowflake, Dumbbell, Bed, Bath, Building, Sofa, MapPin, Wind, Users, Car, UserCheck, Repeat, ShoppingCart, Dog, Cat, Bird } from 'lucide-react';

export const listingTypes = [
  { id: 1, name: 'Rent', icon: 'Repeat', status: 'active' },
  { id: 2, name: 'Buy', icon: 'ShoppingCart', status: 'active' },
];

export const petTypes = [
  { id: 1, name: 'Cats Allowed', icon: 'Cat', status: 'active' },
  { id: 2, name: 'Small Dogs Allowed', icon: 'Dog', status: 'active' },
  { id: 3, name: 'Birds Allowed', icon: 'Bird', status: 'active' },
];

export const amenities = [
  { id: 1, name: 'Free WiFi', icon: 'Wifi', status: 'active' },
  { id: 2, name: 'Free Parking', icon: 'ParkingCircle', status: 'active' },
  { id: 3, name: 'Air Conditioning', icon: 'Wind', status: 'active' },
  { id: 4, name: 'Gym Access', icon: 'Dumbbell', status: 'active' },
  { id: 5, name: 'Swimming Pool', icon: 'Waves', status: 'inactive' },
  { id: 6, name: 'Security', icon: 'Shield', status: 'active' },
];

export const bedroomTypes = [
  { id: 1, name: 'Studio', icon: 'UserSquare', status: 'active' },
  { id: 2, name: '1 BHK', icon: 'BedSingle', status: 'active' },
  { id: 3, name: '2 BHK', icon: 'BedDouble', status: 'active' },
  { id: 4, name: '3 BHK', icon: 'Bed', status: 'active' },
  { id: 5, name: '4+ BHK', icon: 'Hotel', status: 'inactive' },
];

export const bathroomTypes = [
    { id: 1, name: '1 Bathroom', icon: 'Bath', status: 'active' },
    { id: 2, name: '2 Bathrooms', icon: 'Bath', status: 'active' },
    { id: 3, name: '3 Bathrooms', icon: 'Bath', status: 'active' },
    { id: 4, name: '4+ Bathrooms', icon: 'Bath', status: 'inactive' },
];

export const propertyTypes = [
    { id: 1, name: 'Apartment', icon: 'Building', status: 'active' },
    { id: 2, name: 'Villa', icon: 'Home', status: 'active' },
    { id: 3, name: 'Townhouse', icon: 'Building2', status: 'active' },
    { id: 4, name: 'Penthouse', icon: 'Castle', status: 'active' },
    { id: 5, name: 'Shop', icon: 'Store', status: 'inactive' },
    { id: 6, name: 'Office', icon: 'Briefcase', status: 'active' },
];

export const locations = [
    { id: 1, name: 'Muscat', icon: 'MapPin', status: 'active' },
    { id: 2, name: 'Salalah', icon: 'MapPin', status: 'active' },
    { id: 3, name: 'Sohar', icon: 'MapPin', status: 'active' },
    { id: 4, name: 'Nizwa', icon: 'MapPin', status: 'inactive' },
    { id: 5, name: 'Sur', icon: 'MapPin', status: 'active' },
];

export const furnishingTypes = [
    { id: 1, name: 'Fully Furnished', icon: 'Sofa', status: 'active' },
    { id: 2, name: 'Semi-Furnished', icon: 'Armchair', status: 'active' },
    { id: 3, name: 'Unfurnished', icon: 'Square', status: 'active' },
];

export const preferredTenants = [
    { id: 1, name: 'Families', icon: 'Users', status: 'active' },
    { id: 2, name: 'Bachelors', icon: 'User', status: 'active' },
    { id: 3, name: 'Couples', icon: 'UserCheck', status: 'active' },
    { id: 4, name: 'Corporate', icon: 'Briefcase', status: 'active' },
];

export const parkingTypes = [
    { id: 1, name: '1 Parking Spot', icon: 'Car', status: 'active' },
    { id: 2, name: '2 Parking Spots', icon: 'Car', status: 'active' },
    { id: 3, name: 'Covered Parking', icon: 'ParkingCircle', status: 'active' },
    { id: 4, name: 'No Parking', icon: 'ParkingSquareOff', status: 'active' },
];

export const availableIcons = [
    'Wifi', 'ParkingCircle', 'Wind', 'Dumbbell', 'Waves', 'Shield', 'UserSquare',
    'BedSingle', 'BedDouble', 'Bed', 'Hotel', 'Bath', 'Building', 'Home', 'Building2',
    'Castle', 'Store', 'Briefcase', 'MapPin', 'Sofa', 'Armchair', 'Square', 'Tv',
    'Refrigerator', 'WashingMachine', 'Utensils', 'Dog', 'Cat', 'Bird', 'TreePalm', 'Sun',
    'Users', 'User', 'UserCheck', 'Car', 'ParkingSquareOff', 'Repeat', 'ShoppingCart'
];

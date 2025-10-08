import React from 'react';
import { useAuth } from '../context/AuthContext';
import CustomerLayout from '../components/CustomerLayout';
import { 
  Heart, 
  Calendar, 
  Home,
  MapPin,
  Clock,
  Search
} from 'lucide-react';

const TenantDashboard = () => {
  const { user } = useAuth();

  const recentViewings = [
    {
      id: 1,
      property: 'Modern Studio Apartment',
      location: 'Al Qurum, Muscat',
      date: '2025-01-25',
      time: '10:00 AM',
      status: 'confirmed'
    },
    {
      id: 2,
      property: 'Spacious 2BR Villa',
      location: 'Al Khuwair, Muscat',
      date: '2025-01-26',
      time: '2:00 PM',
      status: 'pending'
    }
  ];

  const savedProperties = [
    {
      id: 1,
      title: 'Luxury Penthouse',
      location: 'Al Mouj, Muscat',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300'
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'Al Qurum, Muscat',
      price: 800,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300'
    }
  ];

  return (
    <CustomerLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-xl text-white p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-primary-100">
                Manage your saved properties and scheduled viewings.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Home size={40} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Viewings */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-secondary-900 flex items-center gap-2">
                  <Calendar />
                  Upcoming Viewings
                </h2>
                <button className="text-primary-700 hover:text-primary-800 font-medium text-sm">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentViewings.map((viewing) => (
                  <div key={viewing.id} className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Home className="w-6 h-6 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-medium text-secondary-900">{viewing.property}</h3>
                        <p className="text-sm text-secondary-600 flex items-center gap-1">
                          <MapPin size={14} />
                          {viewing.location}
                        </p>
                        <p className="text-sm text-secondary-600 flex items-center gap-1">
                          <Clock size={14} />
                          {viewing.date} at {viewing.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        viewing.status === 'confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {viewing.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Action */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Looking for something new?
                </h3>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
                    <Search size={18} />
                    Search Properties
                </button>
            </div>

            {/* Saved Properties */}
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                  <Heart />
                  Saved Properties
                </h3>
                <button className="text-primary-700 hover:text-primary-800 font-medium text-sm">
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {savedProperties.map((property) => (
                  <div key={property.id} className="flex gap-3">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary-900 text-sm">
                        {property.title}
                      </h4>
                      <p className="text-xs text-secondary-600">{property.location}</p>
                      <p className="text-sm font-semibold text-primary-700">
                        {property.price} OMR/month
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default TenantDashboard;

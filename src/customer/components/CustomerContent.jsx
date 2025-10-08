import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MapPin, Filter } from 'lucide-react';

const CustomerContent = () => {
  const { t } = useTranslation();

  return (
    <main className="flex-1 bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900 font-lato mb-4">
              {t('customer.subtitle')}
            </h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Discover the perfect rental property that meets all your needs and preferences.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2 p-2 bg-secondary-100 rounded-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter location or property type"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-3 bg-secondary-200 text-secondary-700 rounded-md hover:bg-secondary-300 transition-colors">
                  <Filter size={18} />
                  <span className="hidden sm:inline">Filters</span>
                </button>
                <button className="px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{t('customer.searchProperties')}</h3>
              </div>
              <p className="text-secondary-600">Browse available properties in your preferred area</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{t('customer.viewListings')}</h3>
              </div>
              <p className="text-secondary-600">Explore detailed property listings with photos and amenities</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Filter className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">{t('customer.myApplications')}</h3>
              </div>
              <p className="text-secondary-600">Track your rental applications and their status</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomerContent;

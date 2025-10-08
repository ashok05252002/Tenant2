import React from 'react';
import { ArrowRight } from 'lucide-react';

const mockUpdates = [
  { id: 1, category: 'Market News', title: 'Rental Prices in Muscat See a 5% Increase in Q1 2025', date: 'Mar 15, 2025', image: 'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=400' },
  { id: 2, category: 'Tenant Tips', title: '5 Essential Tips for First-Time Renters in Oman', date: 'Mar 10, 2025', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=400' },
  { id: 3, category: 'Featured Area', title: 'Why Al Mouj is a Top Choice for Expat Families', date: 'Mar 05, 2025', image: 'https://images.unsplash.com/photo-1582450871972-ab6964574975?w=400' },
];

const LatestUpdates = () => {
  return (
    <section className="bg-secondary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900">Latest Updates & Insights</h2>
          <p className="text-lg text-secondary-600 mt-2">Stay informed with the latest news, tips, and property highlights.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockUpdates.map(update => (
            <div key={update.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden group">
              <img src={update.image} alt={update.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <p className="text-sm font-medium text-primary-600">{update.category}</p>
                <h3 className="text-lg font-semibold text-secondary-900 mt-2 mb-3 h-14">{update.title}</h3>
                <p className="text-sm text-secondary-500 mb-4">{update.date}</p>
                <a href="#" className="font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;

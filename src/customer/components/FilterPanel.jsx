import React from 'react';
import { useTranslation } from 'react-i18next';
import { SlidersHorizontal } from 'lucide-react';
import { preferredTenants, parkingTypes } from '../../admin/data/masters';

const FilterPanel = ({ onFilterChange, category = 'residential' }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal size={20} className="text-primary-600" />
        <h3 className="text-lg font-semibold text-secondary-900">Filters</h3>
      </div>

      <div className="space-y-6">
        {/* Listing Type */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">Listing Type</label>
          <div className="space-y-2">
            {['Rent', 'Buy'].map(type => (
              <div key={type} className="flex items-center">
                <input type="radio" name="listingType" id={`type-${type}`} className="h-4 w-4 text-primary-600 border-secondary-300 rounded-full" />
                <label htmlFor={`type-${type}`} className="ml-2 text-sm text-secondary-600">{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">Category</label>
          <div className="space-y-2">
            {['Residential', 'Commercial'].map(type => (
              <div key={type} className="flex items-center">
                <input type="radio" name="category" id={`cat-${type}`} defaultChecked={category === type.toLowerCase()} className="h-4 w-4 text-primary-600 border-secondary-300 rounded-full" />
                <label htmlFor={`cat-${type}`} className="ml-2 text-sm text-secondary-600">{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">Price Range (OMR)</label>
          <div className="flex items-center gap-2">
            <input type="number" placeholder="Min" className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm" />
            <span>-</span>
            <input type="number" placeholder="Max" className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm" />
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">Property Type</label>
          <div className="space-y-2">
            {['Apartment', 'Villa', 'Studio', 'Townhouse', 'Office', 'Shop', 'Warehouse'].map(type => (
              <div key={type} className="flex items-center">
                <input type="checkbox" id={`prop-type-${type}`} className="h-4 w-4 text-primary-600 border-secondary-300 rounded" />
                <label htmlFor={`prop-type-${type}`} className="ml-2 text-sm text-secondary-600">{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Conditional Filters */}
        {category === 'residential' ? (
            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Bedrooms</label>
                <select className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Bathrooms</label>
                <select className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                </select>
            </div>
            </div>
        ) : (
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Area (sq ft)</label>
                <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm" />
                    <span>-</span>
                    <input type="number" placeholder="Max" className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm" />
                </div>
            </div>
        )}

        {/* Preferred Tenants */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">Preferred Tenants</label>
          <div className="space-y-2">
            {preferredTenants.filter(t => t.status === 'active').map(tenant => (
              <div key={tenant.name} className="flex items-center">
                <input type="checkbox" id={`tenant-${tenant.id}`} className="h-4 w-4 text-primary-600 border-secondary-300 rounded" />
                <label htmlFor={`tenant-${tenant.id}`} className="ml-2 text-sm text-secondary-600">{tenant.name}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Parking */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">Parking</label>
          <div className="space-y-2">
            {parkingTypes.filter(p => p.status === 'active').map(parking => (
              <div key={parking.name} className="flex items-center">
                <input type="checkbox" id={`parking-${parking.id}`} className="h-4 w-4 text-primary-600 border-secondary-300 rounded" />
                <label htmlFor={`parking-${parking.id}`} className="ml-2 text-sm text-secondary-600">{parking.name}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <div className="pt-4">
          <button className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors font-medium">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;

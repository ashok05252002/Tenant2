import React from 'react';

const MobileFilterPanel = () => {
    return (
        <div className="space-y-6 text-white">
            <div>
                <h3 className="font-semibold mb-2">Listing Type</h3>
                <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-secondary-700 rounded-full">Rent</button>
                    <button className="flex-1 py-2 bg-secondary-900 rounded-full">Buy</button>
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-secondary-700 rounded-full">Residential</button>
                    <button className="flex-1 py-2 bg-secondary-900 rounded-full">Commercial</button>
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="w-full p-2 bg-secondary-900 border border-secondary-700 rounded-lg text-sm" />
                    <span>-</span>
                    <input type="number" placeholder="Max" className="w-full p-2 bg-secondary-900 border border-secondary-700 rounded-lg text-sm" />
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Bedrooms</h3>
                <div className="flex gap-2">
                    {['1', '2', '3', '4+'].map(b => <button key={b} className="flex-1 py-2 bg-secondary-900 border border-secondary-700 rounded-lg">{b}</button>)}
                </div>
            </div>
            <button className="w-full py-3 bg-primary-700 rounded-lg font-bold">Apply Filters</button>
        </div>
    );
};

export default MobileFilterPanel;

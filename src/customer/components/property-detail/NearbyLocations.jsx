import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Hospital, School, ShoppingCart, Utensils, Trees, Bus, Landmark } from 'lucide-react';

const nearbyData = {
    essentials: [
        {
            category: 'Hospitals',
            icon: Hospital,
            items: [
                { name: 'Royal Hospital', distance: '2.1 km', time: '7 mins' },
                { name: 'Muscat Private Hospital', distance: '4.0 km', time: '15 mins' },
            ]
        },
        {
            category: 'Schools',
            icon: School,
            items: [
                { name: 'The American International School', distance: '2.5 km', time: '8 mins' },
                { name: 'British School Muscat', distance: '3.1 km', time: '10 mins' },
            ]
        }
    ],
    utility: [
        {
            category: 'Grocery Stores',
            icon: ShoppingCart,
            items: [
                { name: 'Lulu Hypermarket', distance: '0.8 km', time: '3 mins' },
                { name: 'Carrefour', distance: '1.5 km', time: '5 mins' },
            ]
        },
        {
            category: 'Restaurants',
            icon: Utensils,
            items: [
                { name: 'Kargeen Caffe', distance: '1.8 km', time: '6 mins' },
                { name: 'Ubhar Restaurant', distance: '2.2 km', time: '7 mins' },
            ]
        },
        {
            category: 'Parks',
            icon: Trees,
            items: [
                { name: 'Qurum Natural Park', distance: '3.0 km', time: '9 mins' },
            ]
        },
        {
            category: 'Mosques',
            icon: Landmark, 
            items: [
                { name: 'Sultan Qaboos Grand Mosque', distance: '5.0 km', time: '15 mins' },
            ]
        }
    ],
    transit: [
        {
            category: 'Bus Stations',
            icon: Bus,
            items: [
                { name: 'Al Khuwair Bus Station', distance: '1.2 km', time: '5 mins' },
                { name: 'Muscat Bus Terminus', distance: '3.5 km', time: '12 mins' },
                { name: 'Ruwi Bus Station', distance: '5.1 km', time: '16 mins' },
            ]
        }
    ]
};

const AccordionItem = ({ category, icon: Icon, items }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-cream-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-left"
            >
                <div className="flex items-center gap-3">
                    <Icon size={20} className="text-primary-700" />
                    <span className="font-semibold text-secondary-800">{category}</span>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown size={20} className="text-secondary-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 pl-8 space-y-3">
                            {items.map(item => (
                                <div key={item.name} className="flex justify-between items-center text-sm">
                                    <p className="text-secondary-700">{item.name}</p>
                                    <p className="text-secondary-500">{item.distance} | {item.time}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const NearbyLocations = () => {
    const [activeTab, setActiveTab] = useState('essentials');
    const tabs = [
        { id: 'essentials', name: 'Essentials' },
        { id: 'utility', name: 'Utility' },
        { id: 'transit', name: 'Transit' },
    ];

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Neighbourhood</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map */}
                <div className="bg-secondary-200 rounded-lg h-96 lg:h-auto min-h-[400px] overflow-hidden">
                    <img
                        src="https://i.sstatic.net/xcxEQ.png"
                        alt="Muscat Location Map"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* List */}
                <div className="bg-cream-100 p-4 sm:p-6 rounded-lg border border-cream-200">
                    <div className="border-b border-cream-200">
                        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-primary-700 text-primary-700'
                                            : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="mt-4">
                        {nearbyData[activeTab].map(categoryData => (
                            <AccordionItem key={categoryData.category} {...categoryData} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NearbyLocations;

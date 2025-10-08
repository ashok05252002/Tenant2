import React, { useState } from 'react';

const TabbedInterface = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="border-b border-secondary-200">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(index)}
                            className={`whitespace-nowrap py-3 px-1  border-b-2 font-medium text-sm transition-colors ${
                                activeTab === index
                                    ? 'border-primary-500 text-primary-600'
                                    : 'border-transparent  text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                            }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="mt-6">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default TabbedInterface;

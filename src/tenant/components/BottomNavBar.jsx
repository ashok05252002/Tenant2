import React from 'react';
import { LayoutDashboard, FileText, CreditCard, Wrench, User, MoreHorizontal } from 'lucide-react';

const BottomNavBar = ({ activeTab, setActiveTab, allTabs }) => {
    const mainTabs = allTabs.slice(0, 4);
    const moreTabs = allTabs.slice(4);
    const isMoreActive = moreTabs.some(tab => tab.id === activeTab);

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-cream-100 border-t border-cream-200 shadow-t-lg h-16 flex justify-around items-center z-50 lg:hidden">
            {mainTabs.map(tab => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
                            activeTab === tab.id ? 'text-primary-700' : 'text-secondary-500 hover:text-primary-600'
                        }`}
                    >
                        <Icon size={22} />
                        <span className="text-xs font-medium">{tab.label}</span>
                    </button>
                );
            })}
             <div className="relative group">
                <button
                    className={`flex flex-col items-center justify-center gap-1 w-full h-full px-4 transition-colors ${
                        isMoreActive ? 'text-primary-700' : 'text-secondary-500 hover:text-primary-600'
                    }`}
                >
                    <MoreHorizontal size={22} />
                    <span className="text-xs font-medium">More</span>
                </button>
                <div className="absolute bottom-full right-0 mb-2 w-40 bg-white rounded-lg shadow-lg border p-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    {moreTabs.map(tab => {
                         const Icon = tab.icon;
                         return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left text-secondary-700 hover:bg-secondary-50 rounded-md"
                            >
                               <Icon size={16} /> {tab.label}
                            </button>
                         );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default BottomNavBar;

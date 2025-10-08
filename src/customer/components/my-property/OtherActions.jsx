import React from 'react';
import { LogOut, Phone, HelpCircle } from 'lucide-react';

const OtherActions = ({ onVacateClick }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Other Actions</h3>
            <div className="space-y-3">
                <button 
                    onClick={onVacateClick}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 font-medium transition-colors"
                >
                    <LogOut size={18} /> Request to Vacate
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                    <Phone size={18} /> Add Emergency Contact
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                    <HelpCircle size={18} /> Help & FAQ
                </button>
            </div>
        </div>
    );
};

export default OtherActions;

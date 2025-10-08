import React from 'react';
import { Home, Calendar, Wallet } from 'lucide-react';

const RentalHistoryTab = ({ history }) => {
    if (!history || history.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8 text-center">
                <h2 className="text-xl font-semibold text-secondary-900 mb-2">Rental History</h2>
                <p className="text-secondary-600">You have no past rental records with us.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary-900">Rental History</h2>
            {history.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-secondary-500 flex items-center gap-2"><Home size={14} /> Property</p>
                            <h3 className="text-lg font-semibold text-secondary-800">{item.property}</h3>
                        </div>
                        <span className="text-sm font-medium bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">{item.id}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-secondary-100 grid grid-cols-2 gap-4">
                         <div>
                            <p className="text-sm text-secondary-500 flex items-center gap-2"><Calendar size={14} /> Duration</p>
                            <p className="font-medium text-secondary-700">{item.duration}</p>
                        </div>
                        <div>
                            <p className="text-sm text-secondary-500 flex items-center gap-2"><Wallet size={14} /> Payment Status</p>
                            <p className="font-medium text-secondary-700">{item.payments}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RentalHistoryTab;

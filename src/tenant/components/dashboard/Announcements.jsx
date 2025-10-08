import React from 'react';
import { Megaphone } from 'lucide-react';

const Announcements = ({ announcements }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex items-center gap-2 mb-4">
                <Megaphone size={20} className="text-primary-600" />
                <h3 className="text-lg font-semibold text-secondary-900">Announcements</h3>
            </div>
            <div className="space-y-4">
                {announcements.map(item => (
                    <div key={item.id} className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <p className="font-semibold text-blue-800">{item.title}</p>
                        <p className="text-sm text-blue-700 mt-1">{item.content}</p>
                        <p className="text-xs text-blue-500 mt-2 text-right">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;

import React from 'react';

const ActivityLogTab = ({ logs }) => {
    if (!logs || logs.length === 0) {
        return <p className="text-secondary-600">No activities found for this user.</p>;
    }

    return (
        <div className="space-y-4">
            {logs.map(log => (
                <div key={log.id} className="flex items-start gap-4 p-3 bg-secondary-50 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                        <p className="text-sm text-secondary-800">
                            <span className="font-semibold">{log.user}</span> {log.action.toLowerCase()} the {log.target}.
                        </p>
                        <p className="text-xs text-secondary-500">{log.timestamp}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityLogTab;

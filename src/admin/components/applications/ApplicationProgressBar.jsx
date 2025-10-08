import React from 'react';

const ApplicationProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-secondary-200 rounded-full h-2.5">
            <div 
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ApplicationProgressBar;

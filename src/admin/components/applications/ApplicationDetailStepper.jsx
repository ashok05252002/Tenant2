import React from 'react';
import { CheckCircle, Loader, Circle } from 'lucide-react';

const ApplicationDetailStepper = ({ steps }) => {
    const getStatusInfo = (status) => {
        switch (status) {
            case 'completed': return { icon: CheckCircle, color: 'text-green-500' };
            case 'current': return { icon: Loader, color: 'text-primary-600 animate-spin' };
            case 'upcoming': default: return { icon: Circle, color: 'text-secondary-300' };
        }
    };

    return (
        <div className="space-y-4">
            {steps.map((step, index) => {
                const { icon: Icon, color } = getStatusInfo(step.status);
                const isLast = index === steps.length - 1;

                return (
                    <div key={step.name} className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${color}`}>
                                <Icon size={20} />
                            </div>
                            {!isLast && <div className="w-px h-12 bg-secondary-200 mt-1"></div>}
                        </div>
                        <div>
                            <p className="font-medium text-secondary-800">{step.name}</p>
                            <p className={`text-sm ${step.status === 'current' ? 'text-primary-600' : 'text-secondary-500'}`}>
                                Status: {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ApplicationDetailStepper;

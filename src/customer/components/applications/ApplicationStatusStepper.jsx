import React from 'react';
import { FileText, Search, FileSignature, Key, CheckCircle, Upload } from 'lucide-react';

const ApplicationStatusStepper = ({ currentStatus }) => {
    const steps = [
        { name: 'Submitted', status: 'Submitted', icon: FileText },
        { name: 'Under Review', status: 'Under Review', icon: Search },
        { name: 'Sign Agreement', status: 'AgreementPending', icon: FileSignature },
        { name: 'Submit Docs', status: 'DocumentsPending', icon: Upload },
        { name: 'Move-in Ready', status: 'ReadyForMoveIn', icon: Key },
        { name: 'Completed', status: 'Completed', icon: CheckCircle },
    ];

    const statusOrder = ['Submitted', 'Under Review', 'AgreementPending', 'DocumentsPending', 'ReadyForMoveIn', 'Completed'];
    const currentIndex = statusOrder.indexOf(currentStatus);

    const getStepStatus = (stepIndex) => {
        if (currentStatus === 'Rejected') {
            return 'rejected';
        }
        if (stepIndex < currentIndex) {
            return 'completed';
        }
        if (stepIndex === currentIndex) {
            return 'current';
        }
        return 'upcoming';
    };

    return (
        <div className="w-full overflow-x-auto py-2">
            <div className="flex items-start min-w-max">
                {steps.map((step, index) => {
                    const status = getStepStatus(index);
                    const isLast = index === steps.length - 1;
                    const Icon = step.icon;

                    return (
                        <React.Fragment key={step.name}>
                            <div className="flex flex-col items-center w-24">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                        ${status === 'completed' ? 'bg-green-500 border-green-500 text-white' : ''}
                                        ${status === 'current' ? 'bg-primary-700 border-primary-700 text-white' : ''}
                                        ${status === 'upcoming' ? 'bg-white border-secondary-300 text-secondary-400' : ''}
                                        ${status === 'rejected' ? 'bg-red-500 border-red-500 text-white' : ''}
                                    `}
                                >
                                    {status === 'completed' ? <CheckCircle size={20} /> : <Icon size={20} />}
                                </div>
                                <p className={`mt-2 text-xs text-center font-medium
                                    ${status === 'current' ? 'text-primary-700' : 'text-secondary-600'}
                                `}>
                                    {step.name}
                                </p>
                            </div>
                            {!isLast && (
                                <div className={`flex-1 h-1 mt-5 transition-colors duration-300
                                    ${status === 'completed' ? 'bg-green-500' : 'bg-secondary-200'}
                                `}></div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default ApplicationStatusStepper;

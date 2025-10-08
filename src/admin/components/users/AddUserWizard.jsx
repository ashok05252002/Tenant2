import React, { useState } from 'react';
import { X, User, FileText, Home, CheckCircle } from 'lucide-react';
import PersonalDetailsStep from './steps/PersonalDetailsStep';
import DocumentsStep from './steps/DocumentsStep';
import AssignPropertyStep from './steps/AssignPropertyStep';

const AddUserWizard = ({ isOpen, onClose, onSubmit, userType }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    if (!isOpen) return null;

    const getSteps = () => {
        const baseSteps = [
            { id: 1, name: 'Personal Details', icon: User },
            { id: 2, name: 'Upload Documents', icon: FileText },
        ];
        if (userType === 'Tenant') {
            baseSteps.push({ id: 3, name: 'Assign Property', icon: Home });
        }
        baseSteps.push({ id: userType === 'Tenant' ? 4 : 3, name: 'Confirm', icon: CheckCircle });
        return baseSteps;
    };

    const steps = getSteps();
    const totalSteps = steps.length;

    const handleNext = (stepData) => {
        setFormData(prev => ({ ...prev, ...stepData }));
        setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleFinalSubmit = () => {
        onSubmit(formData);
        onClose();
        // Reset for next time
        setTimeout(() => {
            setCurrentStep(1);
            setFormData({});
        }, 500);
    };
    
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <PersonalDetailsStep onNext={handleNext} formData={formData} />;
            case 2:
                return <DocumentsStep onNext={handleNext} onBack={handleBack} userType={userType} />;
            case 3:
                if (userType === 'Tenant') {
                    return <AssignPropertyStep onNext={handleFinalSubmit} onBack={handleBack} />;
                }
                // For Broker/Landlord, step 3 is confirmation
                return (
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Confirm & Add {userType}</h3>
                        <p className="text-secondary-600 my-4">Review the details and click "Add {userType}" to complete the process.</p>
                        <button onClick={handleFinalSubmit} className="w-full py-2 bg-primary-500 text-white rounded-lg">Add {userType}</button>
                    </div>
                );
            case 4: // Only for Tenant
                return (
                     <div className="text-center">
                        <h3 className="text-lg font-semibold">Confirm & Add {userType}</h3>
                        <p className="text-secondary-600 my-4">Review the details and click "Add {userType}" to complete the process.</p>
                        <button onClick={handleFinalSubmit} className="w-full py-2 bg-primary-500 text-white rounded-lg">Add {userType}</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Add New {userType}</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                
                {/* Stepper */}
                <div className="p-6">
                    <div className="flex items-center justify-center">
                        {steps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep > step.id ? 'bg-green-500 border-green-500 text-white' : currentStep === step.id ? 'bg-primary-500 border-primary-500 text-white' : 'bg-white border-secondary-300 text-secondary-400'}`}>
                                        {currentStep > step.id ? <CheckCircle size={20} /> : <step.icon size={20} />}
                                    </div>
                                    <p className={`mt-1 text-xs text-center ${currentStep >= step.id ? 'text-primary-600' : 'text-secondary-500'}`}>{step.name}</p>
                                </div>
                                {index < steps.length - 1 && <div className={`flex-1 h-px mx-2 ${currentStep > index + 1 ? 'bg-green-500' : 'bg-secondary-200'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="p-6 border-t">
                    {renderStepContent()}
                </div>
            </div>
        </div>
    );
};

export default AddUserWizard;

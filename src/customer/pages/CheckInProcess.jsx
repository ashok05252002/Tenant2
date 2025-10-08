import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import { FileSignature, Clock, Upload, CheckCircle } from 'lucide-react';
import DigitalSignature from '../components/check-in/DigitalSignature';
import ApprovalWait from '../components/check-in/ApprovalWait';
import DocumentSubmission from '../components/check-in/DocumentSubmission';

const CheckInProcess = () => {
    const { applicationId } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, name: 'Sign Agreement', icon: FileSignature },
        { id: 2, name: 'Wait for Approval', icon: Clock },
        { id: 3, name: 'Submit Final Docs', icon: Upload },
        { id: 4, name: 'Complete', icon: CheckCircle },
    ];

    const handleNextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };
    
    const handleCompletion = () => {
        navigate('/check-in-success');
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <DigitalSignature onSigned={handleNextStep} />;
            case 2:
                return <ApprovalWait onApproved={handleNextStep} />;
            case 3:
                return <DocumentSubmission onSubmitted={handleCompletion} />;
            default:
                return null;
        }
    };

    return (
        <CustomerLayout>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-center text-secondary-900 mb-4">Check-in Process</h1>
                <p className="text-center text-secondary-600 mb-8">Complete the final steps to get the keys to your new home.</p>

                {/* Stepper */}
                <div className="flex items-center justify-center mb-12">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                    currentStep > step.id ? 'bg-green-500 border-green-500 text-white' :
                                    currentStep === step.id ? 'bg-primary-700 border-primary-700 text-white' :
                                    'bg-white border-secondary-300 text-secondary-400'
                                }`}>
                                    {currentStep > step.id ? <CheckCircle size={24} /> : <step.icon size={24} />}
                                </div>
                                <p className={`mt-2 text-xs text-center font-medium ${
                                    currentStep >= step.id ? 'text-primary-700' : 'text-secondary-500'
                                }`}>{step.name}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`flex-1 h-1 mx-2 mt-[-1.5rem] ${currentStep > index + 1 ? 'bg-green-500' : 'bg-secondary-200'}`}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
                    {renderStepContent()}
                </div>
            </div>
        </CustomerLayout>
    );
};

export default CheckInProcess;

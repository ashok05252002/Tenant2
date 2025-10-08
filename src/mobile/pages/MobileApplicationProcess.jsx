import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Step1MobileRegister from '../components/application-flow/Step1_MobileRegister';
import Step2MobileKYC from '../components/application-flow/Step2_MobileKYC';
import Step3MobileApplicationForm from '../components/application-flow/Step3_MobileApplicationForm';
import Step4MobileReview from '../components/application-flow/Step4_MobileReview';
import Step5MobileConfirmation from '../components/application-flow/Step5_MobileConfirmation';

const MobileApplicationProcess = () => {
    const { propertyId } = useParams();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({ propertyId });
    const navigate = useNavigate();

    const steps = ['Register', 'KYC', 'Details', 'Review', 'Done!'];

    const handleNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate(`/mobile/property/${propertyId}`);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0: return <Step1MobileRegister onNext={handleNext} />;
            case 1: return <Step2MobileKYC onNext={handleNext} />;
            case 2: return <Step3MobileApplicationForm onNext={handleNext} />;
            case 3: return <Step4MobileReview onNext={handleNext} formData={formData} />;
            case 4: return <Step5MobileConfirmation />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-cream-50 p-4">
            <div className="flex items-center gap-4 mb-6">
                <button onClick={handleBack}><ChevronLeft size={24} /></button>
                <h1 className="text-xl font-bold">Apply for Property</h1>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-secondary-200 rounded-full h-2 mb-8">
                <div 
                    className="bg-primary-700 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-secondary-100">
                {renderStepContent()}
            </div>
        </div>
    );
};

export default MobileApplicationProcess;

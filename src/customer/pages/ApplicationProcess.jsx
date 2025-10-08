import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FileText, FileSignature, Wallet, CheckCircle } from 'lucide-react';

// Import step components
import Step1Register from '../components/application-flow/Step1_Register';
import Step3ApplicationForm from '../components/application-flow/Step3_ApplicationForm';
import Step4ReviewAndSign from '../components/application-flow/Step4_ReviewAndSign';
import Step5Payment from '../components/application-flow/Step5_Payment';
import Step6Confirmation from '../components/application-flow/Step6_Confirmation';

const steps = [
    { name: 'Register', icon: User },
    { name: 'Application Details', icon: FileText },
    { name: 'Sign Agreement', icon: FileSignature },
    { name: 'Payment', icon: Wallet },
    { name: 'Confirmation', icon: CheckCircle },
];

const ApplicationProcess = () => {
    const { propertyId } = useParams();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({ propertyId });
    const navigate = useNavigate();

    const handleNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Final form data:", { ...formData, ...data });
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            navigate(`/apply?propertyId=${propertyId}`);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0: return <Step1Register onNext={handleNext} onBack={handleBack} />;
            case 1: return <Step3ApplicationForm onNext={handleNext} onBack={handleBack} propertyId={propertyId} />;
            case 2: return <Step4ReviewAndSign onNext={handleNext} onBack={handleBack} />;
            case 3: return <Step5Payment onNext={handleNext} onBack={handleBack} />;
            case 4: return <Step6Confirmation formData={formData} />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Stepper */}
                <div className="flex items-center justify-center mb-8">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.name}>
                            <div className="flex flex-col items-center text-center w-24">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                    currentStep > index ? 'bg-green-500 border-green-500 text-white' :
                                    currentStep === index ? 'bg-primary-700 border-primary-700 text-white' :
                                    'bg-white border-secondary-300 text-secondary-400'
                                }`}>
                                    {currentStep > index ? <CheckCircle size={24} /> : <step.icon size={24} />}
                                </div>
                                <p className={`mt-2 text-xs font-medium ${
                                    currentStep >= index ? 'text-primary-700' : 'text-secondary-500'
                                }`}>{step.name}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`flex-1 h-1 mt-[-1.5rem] transition-colors duration-300 ${currentStep > index ? 'bg-green-500' : 'bg-secondary-200'}`}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-xl shadow-lg border border-secondary-200 p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderStepContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ApplicationProcess;

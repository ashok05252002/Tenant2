import React from 'react';
import { Edit3, CheckCircle, Mail, Rocket } from 'lucide-react';

const steps = [
  { icon: Edit3, title: 'Apply Online', description: 'Fill out the simple application form with your contact details.' },
  { icon: CheckCircle, title: 'Admin Approval', description: 'Our team will review your application and verify your details.' },
  { icon: Mail, title: 'Receive Credentials', description: 'Once approved, you will receive an email with your login credentials.' },
  { icon: Rocket, title: 'Start Listing', description: 'Log in to your new portal and start listing your properties!' },
];

const PartnerHowItWorks = () => {
  return (
    <div className="bg-cream-100 p-6 rounded-xl border border-cream-200">
      <h3 className="text-xl font-bold text-secondary-900 mb-4">How It Works</h3>
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center">
                <Icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800">{step.title}</h4>
                <p className="text-sm text-secondary-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerHowItWorks;

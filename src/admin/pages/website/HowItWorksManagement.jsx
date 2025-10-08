import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { Search, MessageSquare, Link, FileText, Key, Save } from 'lucide-react';

const initialSteps = [
  { iconName: 'Search', title: 'Search Properties', description: 'Explore our wide range of properties with detailed information and photos.' },
  { iconName: 'MessageSquare', title: 'Contact Agent', description: 'Connect with the landlord or broker directly via call, email, or WhatsApp.' },
  { iconName: 'Link', title: 'Receive Invite', description: 'The broker will send you a personal link to apply for the property.' },
  { iconName: 'FileText', title: 'Apply Securely', description: 'Use your private link to fill out the application and complete verification.' },
  { iconName: 'Key', title: 'Welcome Home', description: 'Finalize the process and move into your new home.' },
];

const icons = { Search, MessageSquare, Link, FileText, Key };

const HowItWorksManagement = () => {
    const [steps, setSteps] = useState(initialSteps);

    const handleInputChange = (index, field, value) => {
        const newSteps = [...steps];
        newSteps[index][field] = value;
        setSteps(newSteps);
    };

    return (
        <AdminPageLayout title="How It Works Section Management">
            <div className="space-y-6">
                {steps.map((step, index) => {
                    const Icon = icons[step.iconName];
                    return (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                            <div className="flex items-start gap-4">
                                {Icon && <Icon size={24} className="text-primary-600 mt-1" />}
                                <div className="flex-1 space-y-2">
                                    <div>
                                        <label className="text-xs font-medium text-secondary-500">Title</label>
                                        <input 
                                            type="text" 
                                            value={step.title}
                                            onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                            className="w-full p-2 border border-secondary-300 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-secondary-500">Description</label>
                                        <textarea
                                            value={step.description}
                                            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                            rows="2"
                                            className="w-full p-2 border border-secondary-300 rounded-lg text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm">
                    <Save size={16} /> Save Changes
                </button>
            </div>
        </AdminPageLayout>
    );
};

export default HowItWorksManagement;

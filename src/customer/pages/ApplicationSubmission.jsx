import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CustomerLayout from '../components/CustomerLayout';
import { User, Briefcase, FileText, Check, ArrowRight, ArrowLeft, Ticket } from 'lucide-react';

const ApplicationSubmission = () => {
  const { propertyId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ...user,
    coApplicants: [],
    employer: '',
    jobTitle: '',
    incomeProof: null,
    referenceName: '',
    referenceContact: '',
    referralCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = () => {
    console.log('Submitting application:', formData);
    // In a real app, you'd get a real application ID from the backend
    const mockApplicationId = `APP-${Date.now().toString().slice(-4)}`;
    navigate(`/application-success/${mockApplicationId}`);
  };

  const Step = ({ number, title, icon, active }) => {
    const Icon = icon;
    return (
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${active ? 'bg-primary-700 border-primary-700 text-white' : 'bg-white border-secondary-300 text-secondary-400'}`}>
          <Icon size={20} />
        </div>
        <span className={`ml-3 font-medium ${active ? 'text-primary-700' : 'text-secondary-500'}`}>{title}</span>
      </div>
    );
  };

  return (
    <CustomerLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">Rental Application</h1>
        <p className="text-secondary-600 mb-8">For property ID: {propertyId}</p>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-sm border">
          <Step number={1} title="Personal Info" icon={User} active={step >= 1} />
          <div className="flex-1 h-px bg-secondary-200 mx-4"></div>
          <Step number={2} title="Employment" icon={Briefcase} active={step >= 2} />
          <div className="flex-1 h-px bg-secondary-200 mx-4"></div>
          <Step number={3} title="Review" icon={FileText} active={step >= 3} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              <p className="text-sm text-secondary-500 mb-4">This information is pre-filled from your profile. Please verify it's correct.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium">Full Name</label><input type="text" value={formData.name} readOnly className="w-full mt-1 p-2 bg-secondary-100 border rounded" /></div>
                <div><label className="block text-sm font-medium">Email</label><input type="email" value={formData.email} readOnly className="w-full mt-1 p-2 bg-secondary-100 border rounded" /></div>
                <div><label className="block text-sm font-medium">Phone</label><input type="tel" value={formData.phone || ''} readOnly className="w-full mt-1 p-2 bg-secondary-100 border rounded" /></div>
                <div><label className="block text-sm font-medium">Date of Birth</label><input type="text" value={formData.dateOfBirth || ''} readOnly className="w-full mt-1 p-2 bg-secondary-100 border rounded" /></div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Employment & Income</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium">Employer</label><input type="text" className="w-full mt-1 p-2 border rounded" /></div>
                <div><label className="block text-sm font-medium">Job Title</label><input type="text" className="w-full mt-1 p-2 border rounded" /></div>
                <div><label className="block text-sm font-medium">Monthly Income (OMR)</label><input type="number" className="w-full mt-1 p-2 border rounded" /></div>
                <div><label className="block text-sm font-medium">Upload Income Proof</label><input type="file" className="w-full mt-1 text-sm" /></div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>
              <p className="mb-4">Please review all the information before submitting.</p>
              <div className="p-4 bg-secondary-50 rounded-lg space-y-2">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Applying for Property:</strong> {propertyId}</p>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">Broker Referral Code (Optional)</label>
                <div className="relative">
                    <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input 
                        type="text" 
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                        placeholder="Enter code if you have one"
                    />
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm">I confirm that all information provided is true and accurate.</label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-8 mt-8 border-t">
            <button onClick={handleBack} disabled={step === 1} className="flex items-center gap-2 px-6 py-2 text-secondary-600 hover:text-secondary-800 disabled:opacity-50">
              <ArrowLeft size={18} /> Back
            </button>
            {step < 3 ? (
              <button onClick={handleNext} className="flex items-center gap-2 px-6 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800">
                Next <ArrowRight size={18} />
              </button>
            ) : (
              <button onClick={handleSubmit} className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                <Check size={18} /> Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default ApplicationSubmission;

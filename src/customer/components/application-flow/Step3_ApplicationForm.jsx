import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, PlusCircle, Trash2 } from 'lucide-react';

const Step3ApplicationForm = ({ onNext, onBack, propertyId }) => {
    const [formData, setFormData] = useState({
        moveInDate: '',
        dependents: [],
        employer: '',
        jobTitle: '',
    });
    const [dependentName, setDependentName] = useState('');

    const handleInputChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addDependent = () => {
        if (dependentName) {
            setFormData(prev => ({ ...prev, dependents: [...prev.dependents, dependentName] }));
            setDependentName('');
        }
    };
    
    const removeDependent = (index) => {
        setFormData(prev => ({ ...prev, dependents: prev.dependents.filter((_, i) => i !== index) }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">Application Details</h2>
            <p className="text-secondary-600 mb-6">You are applying for property #{propertyId}.</p>
            <div className="space-y-4">
                 <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Preferred Move-in Date</label>
                    <input type="date" name="moveInDate" value={formData.moveInDate} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Employer</label>
                        <input type="text" name="employer" value={formData.employer} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Job Title</label>
                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Dependents/Family Members</label>
                    <div className="flex gap-2">
                        <input type="text" value={dependentName} onChange={(e) => setDependentName(e.target.value)} placeholder="Enter full name" className="flex-grow p-3 border border-secondary-300 rounded-lg" />
                        <button type="button" onClick={addDependent} className="p-3 bg-secondary-200 rounded-lg"><PlusCircle size={20} /></button>
                    </div>
                    <ul className="mt-2 space-y-1">
                        {formData.dependents.map((name, index) => (
                            <li key={index} className="flex justify-between items-center bg-secondary-50 p-2 rounded">
                                <span>{name}</span>
                                <button onClick={() => removeDependent(index)}><Trash2 size={16} className="text-red-500" /></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-secondary-600">
                    <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => onNext(formData)} className="flex items-center gap-2 py-3 px-6 bg-primary-700 text-white rounded-lg font-medium">
                    Next <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default Step3ApplicationForm;

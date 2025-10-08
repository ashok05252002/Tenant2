import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useAuth } from '../../../customer/context/AuthContext';
import { activeLease } from '../../../customer/data/tenantData';

const VacateRequestModal = ({ isOpen, onClose, onSubmit }) => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        vacateDate: '',
        reason: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            tenantName: user.name,
            property: activeLease.property.title,
        };
        onSubmit(submissionData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-secondary-900">Submit Vacate Request</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Intended Vacate Date</label>
                        <input 
                            type="date" 
                            name="vacateDate"
                            value={formData.vacateDate}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-secondary-300 rounded-lg" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">Reason for Vacating</label>
                        <textarea 
                            name="reason" 
                            value={formData.reason}
                            onChange={handleInputChange}
                            rows="4" 
                            className="w-full p-3 border border-secondary-300 rounded-lg" 
                            placeholder="Please provide a brief reason for your move..."
                            required
                        ></textarea>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium">
                            <Send size={18} /> Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VacateRequestModal;

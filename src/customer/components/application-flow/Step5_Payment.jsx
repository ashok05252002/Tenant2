import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CreditCard, Lock } from 'lucide-react';

const Step5Payment = ({ onNext, onBack }) => {
    const [cardInfo, setCardInfo] = useState({ number: '', expiry: '', cvc: '' });

    const handleInputChange = (e) => {
        setCardInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Secure Payment</h2>
            <p className="text-secondary-600 mb-6">Please enter your payment details for the security deposit and first month's rent.</p>
            
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-800">Payment Summary</h3>
                <div className="flex justify-between mt-2 text-sm"><span>First Month's Rent:</span><span>800 OMR</span></div>
                <div className="flex justify-between mt-1 text-sm"><span>Security Deposit:</span><span>400 OMR</span></div>
                <div className="flex justify-between mt-2 pt-2 border-t border-blue-200 font-bold"><span>Total Due:</span><span>1200 OMR</span></div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Card Number</label>
                    <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input type="text" name="number" onChange={handleInputChange} placeholder="•••• •••• •••• ••••" className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Expiry Date</label>
                        <input type="text" name="expiry" onChange={handleInputChange} placeholder="MM/YY" className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">CVC</label>
                        <input type="text" name="cvc" onChange={handleInputChange} placeholder="•••" className="w-full p-3 border border-secondary-300 rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-secondary-600">
                    <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => onNext({ payment: 'success' })} className="flex items-center gap-2 py-3 px-6 bg-primary-700 text-white rounded-lg font-medium">
                    Pay Now <Lock size={16} />
                </button>
            </div>
        </div>
    );
};

export default Step5Payment;

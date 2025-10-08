import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, FileSignature } from 'lucide-react';

const Step4ReviewAndSign = ({ onNext, onBack }) => {
    const [signature, setSignature] = useState('');
    const [agreed, setAgreed] = useState(false);

    return (
        <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Review & Sign Agreement</h2>
            <p className="text-secondary-600 mb-6">Please review the lease agreement and provide your e-signature.</p>
            
            <div className="h-48 border border-secondary-200 rounded-lg p-4 bg-secondary-50 overflow-y-auto mb-4">
                <h3 className="font-bold mb-2">Lease Agreement (Summary)</h3>
                <p className="text-sm text-secondary-600">This is a legally binding agreement. By signing, you agree to all terms and conditions, including rent amount, payment schedule, and property rules...</p>
            </div>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-secondary-700 mb-2">Your Digital Signature</label>
                <input
                    type="text"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="Type your full name"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg font-cursive text-xl"
                    style={{ fontFamily: 'cursive' }}
                />
            </div>

            <div className="flex items-start gap-2 mb-6">
                <input type="checkbox" id="agree-terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1" />
                <label htmlFor="agree-terms" className="text-sm text-secondary-700">I agree to the terms of the lease agreement.</label>
            </div>

            <div className="mt-8 flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-secondary-600">
                    <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => onNext({ signature, agreed })} disabled={!signature || !agreed} className="flex items-center gap-2 py-3 px-6 bg-primary-700 text-white rounded-lg font-medium disabled:opacity-50">
                    Sign & Continue <FileSignature size={16} />
                </button>
            </div>
        </div>
    );
};

export default Step4ReviewAndSign;

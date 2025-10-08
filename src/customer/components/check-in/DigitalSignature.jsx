import React, { useState } from 'react';
import { FileSignature } from 'lucide-react';

const DigitalSignature = ({ onSigned }) => {
    const [signature, setSignature] = useState('');
    const [agreed, setAgreed] = useState(false);

    return (
        <div>
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Review & Sign Lease Agreement</h2>
            <div className="h-64 border border-secondary-200 rounded-lg p-4 bg-secondary-50 overflow-y-auto mb-4">
                <h3 className="font-bold mb-2">Lease Agreement Terms</h3>
                <p className="text-sm text-secondary-600">This agreement is made on this day between the Landlord and the Tenant. The Landlord agrees to lease the property located at [Property Address] to the Tenant for a term of 12 months, beginning on [Start Date] and ending on [End Date]. Rent is [Rent Amount] OMR per month, due on the 1st of each month...</p>
                <p className="text-sm text-secondary-600 mt-2">[...more legal text...]</p>
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
                <input
                    type="checkbox"
                    id="agree-terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 text-primary-700 bg-secondary-100 border-secondary-300 rounded focus:ring-primary-700"
                />
                <label htmlFor="agree-terms" className="text-sm text-secondary-700">
                    I have read and agree to the terms and conditions of the lease agreement.
                </label>
            </div>
            <button
                onClick={onSigned}
                disabled={!signature || !agreed}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 disabled:opacity-50 font-medium"
            >
                <FileSignature size={20} />
                Sign & Continue
            </button>
        </div>
    );
};

export default DigitalSignature;

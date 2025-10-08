import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const PayoutModal = ({ isOpen, onClose, onSubmit, payout }) => {
    const [amount, setAmount] = useState(payout.amount);
    const [method, setMethod] = useState('Bank Transfer');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...payout, paidAmount: amount, method });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Process Payout</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <p className="text-sm">Processing payout for <span className="font-semibold">{payout.landlordName}</span>.</p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Total Amount Due</label>
                        <input type="text" readOnly value={`${payout.amount.toFixed(2)} OMR`} className="w-full p-2 border rounded-lg bg-secondary-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Payout Amount (OMR)</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            max={payout.amount}
                            className="w-full p-2 border border-secondary-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Payment Method</label>
                        <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full p-2 border border-secondary-300 rounded-lg">
                            <option>Bank Transfer</option>
                            <option>Cheque</option>
                            <option>Cash</option>
                        </select>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm">
                            <Check size={16} /> Confirm & Mark as Paid
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PayoutModal;

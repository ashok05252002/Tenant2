import React from 'react';
import { Wallet, AlertTriangle } from 'lucide-react';

const UpcomingPayment = ({ paymentInfo }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Upcoming Payment</h2>
            {paymentInfo.isOverdue && (
                <div className="flex items-center gap-2 bg-red-50 text-red-700 p-3 rounded-lg mb-4">
                    <AlertTriangle size={20} />
                    <p className="font-medium">Your payment is overdue. Please pay immediately to avoid late fees.</p>
                </div>
            )}
            <div className="flex flex-col md:flex-row justify-between items-center bg-primary-50 p-6 rounded-lg">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm text-primary-700">Next Rent Due</p>
                    <p className="text-lg font-medium text-primary-800">{paymentInfo.nextDueDate}</p>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm text-primary-700">Amount Due</p>
                    <p className="text-3xl font-bold text-primary-700">{paymentInfo.amountDue} OMR</p>
                </div>
                <button className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium">
                    <Wallet size={18} /> Pay Now
                </button>
            </div>
        </div>
    );
};

export default UpcomingPayment;

import React from 'react';
import { Percent } from 'lucide-react';

const CommissionPlanCard = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Percent size={20} />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Your Commission Plan</h3>
            </div>
            <p className="text-sm text-secondary-600 mb-4">
                You are currently on the "Standard Rental" plan.
            </p>
            <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-700">5%</p>
                <p className="text-sm text-green-600">of the first month's rent</p>
            </div>
        </div>
    );
};

export default CommissionPlanCard;

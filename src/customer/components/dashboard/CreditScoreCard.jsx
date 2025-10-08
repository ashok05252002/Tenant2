import React from 'react';
import { ShieldCheck, TrendingUp } from 'lucide-react';

const CreditScoreCard = ({ score }) => {
    const getScoreInfo = (s) => {
        if (s >= 800) return { label: 'Excellent', color: 'text-green-500', bg: 'bg-green-100' };
        if (s >= 740) return { label: 'Very Good', color: 'text-green-500', bg: 'bg-green-100' };
        if (s >= 670) return { label: 'Good', color: 'text-blue-500', bg: 'bg-blue-100' };
        if (s >= 580) return { label: 'Fair', color: 'text-yellow-500', bg: 'bg-yellow-100' };
        return { label: 'Poor', color: 'text-red-500', bg: 'bg-red-100' };
    };

    const scoreInfo = getScoreInfo(score);
    const percentage = ((score - 300) / 600) * 100;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-secondary-900 flex items-center gap-2">
                    <TrendingUp size={20} className="text-primary-700" />
                    Credit Score
                </h3>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${scoreInfo.bg} ${scoreInfo.color}`}>
                    {scoreInfo.label}
                </span>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            className="text-secondary-200"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className={scoreInfo.color}
                            strokeWidth="3"
                            strokeDasharray={`${percentage}, 100`}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-secondary-900">{score}</span>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-secondary-600">
                        Your score is a key factor for rental applications. A higher score increases your chances of approval.
                    </p>
                    <p className="text-xs text-secondary-500 mt-2">Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default CreditScoreCard;

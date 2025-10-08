import React from 'react';
import { Info } from 'lucide-react';

const PaymentPlan = ({ plan }) => {
  if (!plan || plan.length === 0) return null;

  return (
    <div className="py-6">
      <h3 className="text-lg font-semibold text-secondary-900 mb-6">Payment Plan</h3>
      <div className="flex justify-between text-xs font-bold text-secondary-500 mb-4 px-4 uppercase tracking-wider">
        <span>Milestone</span>
        <span>% of Property Value to be Paid</span>
      </div>
      <div className="relative">
        {/* Timeline */}
        <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-0.5 bg-secondary-200" style={{ transform: 'translateX(-50%)' }}></div>
        
        <div className="space-y-2">
          {plan.map((item, index) => (
            <div key={index} className="flex items-center pl-1">
              <div className="z-10 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              <div className="flex-1 ml-4 p-4 bg-secondary-50 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-secondary-800">{item.milestone}</span>
                  {item.info && 
                    <div className="relative group">
                      <Info size={14} className="text-secondary-400 cursor-pointer" />
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-secondary-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.info}
                      </span>
                    </div>
                  }
                </div>
                <span className="font-bold text-secondary-900">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;

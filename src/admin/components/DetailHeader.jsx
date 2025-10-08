import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DetailHeader = ({ title, subtitle, status, statusColor, avatar, backPath, children }) => {
    const navigate = useNavigate();

    return (
        <div className="mb-6">
            <button onClick={() => navigate(backPath)} className="flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-600 mb-4">
                <ArrowLeft size={16} />
                Back
            </button>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img src={avatar} alt={title} className="w-24 h-24 rounded-full object-cover border-4 border-secondary-100" />
                    <div className="flex-1 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                            <h1 className="text-2xl font-bold text-secondary-900">{title}</h1>
                            {status && (
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColor}`}>
                                    {status}
                                </span>
                            )}
                        </div>
                        <p className="text-secondary-500 mt-1">{subtitle}</p>
                    </div>
                </div>
                {children && <div className="mt-4 pt-4 border-t border-secondary-100">{children}</div>}
            </div>
        </div>
    );
};

export default DetailHeader;

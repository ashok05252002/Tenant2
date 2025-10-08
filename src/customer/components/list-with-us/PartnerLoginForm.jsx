import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Briefcase } from 'lucide-react';

const PartnerLoginForm = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-4">
            <button 
                onClick={() => navigate('/broker')}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
            >
                <Briefcase size={18} /> Broker Login
            </button>
            <button 
                onClick={() => navigate('/landlord')}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium"
            >
                <Building size={18} /> Landlord Login
            </button>
        </div>
    );
};

export default PartnerLoginForm;

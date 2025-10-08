import React from 'react';
import { useNavigate } from 'react-router-dom';
import PartyPopper from '../components/animations/PartyPopper';
import { Home } from 'lucide-react';

const CheckInSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-cream-50">
            <PartyPopper />
            <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
                    Congratulations!
                </h1>
                <p className="text-xl text-secondary-800 mb-8">
                    You are checked in. Welcome to your new home!
                </p>
                <button
                    onClick={() => navigate('/my-property')}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-semibold text-lg"
                >
                    <Home size={24} />
                    Go to My Property
                </button>
            </div>
        </div>
    );
};

export default CheckInSuccess;

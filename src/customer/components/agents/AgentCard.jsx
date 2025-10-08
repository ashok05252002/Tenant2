import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Award, MapPin, Briefcase, MessageSquare } from 'lucide-react';

const AgentCard = ({ agent, viewMode = 'grid' }) => {
    const navigate = useNavigate();

    const cardClasses = viewMode === 'grid'
        ? "bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
        : "bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center";
    
    const imageContainerClasses = viewMode === 'grid' ? "p-6" : "p-4";
    const imageClasses = "w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary-100";

    const contentClasses = viewMode === 'grid' ? "p-6 pt-0 text-center" : "p-6 flex-1";

    return (
        <div className={cardClasses} onClick={() => navigate(`/agent/${agent.id}`)} style={{ cursor: 'pointer' }}>
            <div className={imageContainerClasses}>
                <img src={agent.photo} alt={agent.name} className={imageClasses} />
            </div>

            <div className={contentClasses}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <h3 className="text-lg font-bold text-secondary-900">{agent.name}</h3>
                    {agent.verified && <Award size={18} className="text-green-500 fill-current" />}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-secondary-600 mb-3">
                    <div className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {agent.rating}</div>
                    <span>•</span>
                    <div>{agent.experience} yrs exp.</div>
                </div>
                <p className="text-sm text-secondary-700 mb-4 italic">"{agent.tagline}"</p>
                
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs bg-secondary-100 text-secondary-700 rounded-full px-3 py-1 mb-4 w-max mx-auto md:mx-0">
                    <MapPin size={12} /> {agent.serviceArea}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary-100">
                    <div className="text-left">
                        <p className="text-xs text-secondary-500">Active Listings</p>
                        <p className="font-bold text-primary-600">{agent.activeListings}</p>
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log('Contacting agent', agent.id);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
                    >
                        <MessageSquare size={16} /> Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentCard;

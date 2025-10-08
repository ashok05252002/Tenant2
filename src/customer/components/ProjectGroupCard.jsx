import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import PropertyCard from './PropertyCard';

const ProjectGroupCard = ({ projectName, properties }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const handleViewProject = () => {
        // In a real app, this might go to a dedicated project page
        // For now, we'll just filter the search
        navigate(`/search?project=${encodeURIComponent(projectName)}`);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200">
            <div 
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-4">
                    <img src={properties[0].images[0]} alt={projectName} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                        <div className="flex items-center gap-2 text-sm text-secondary-500">
                            <Building size={14} />
                            <span>Project</span>
                        </div>
                        <h2 className="text-xl font-bold text-secondary-900">{projectName}</h2>
                        <div className="flex items-center gap-2 text-sm text-secondary-600 mt-1">
                            <MapPin size={14} />
                            <span>{properties[0].location}</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-lg font-bold text-primary-700">{properties.length}</p>
                    <p className="text-sm text-secondary-500">Units Available</p>
                    <div className="flex items-center justify-end gap-1 text-primary-600 mt-2 text-sm">
                        <span>{isExpanded ? 'Hide' : 'Show'} Units</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                </div>
            </div>
            {isExpanded && (
                <div className="p-6 border-t border-secondary-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {properties.map(property => (
                            <PropertyCard key={property.id} property={property} viewMode="grid" />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectGroupCard;

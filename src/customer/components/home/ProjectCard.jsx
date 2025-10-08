import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden flex flex-col flex-shrink-0 w-[320px]">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-secondary-900">{project.title}</h3>
        <p className="text-sm text-secondary-600 mb-2">{project.type}</p>
        <div className="flex items-center gap-2 text-sm text-secondary-500 mb-4">
          <MapPin size={14} />
          <span>{project.location}</span>
        </div>
        
        <div className="flex-grow"></div>

        <div className="grid grid-cols-2 gap-2 text-center p-3 bg-secondary-50 rounded-lg my-3">
          <div>
            <p className="text-xs text-secondary-500">Launch Price</p>
            <p className="font-semibold text-secondary-800">{project.launchPrice}</p>
          </div>
          <div className="border-l border-secondary-200">
            <p className="text-xs text-secondary-500">Handover</p>
            <p className="font-semibold text-secondary-800">{project.handover}</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium">
          <MessageCircle size={18} />
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

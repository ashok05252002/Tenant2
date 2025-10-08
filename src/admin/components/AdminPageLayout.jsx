import React from 'react';
import { Plus } from 'lucide-react';

const AdminPageLayout = ({ title, children, actionButton, onActionClick }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">{title}</h1>
        {actionButton && (
          <button 
            onClick={onActionClick}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
          >
            <Plus size={16} /> {actionButton}
          </button>
        )}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default AdminPageLayout;

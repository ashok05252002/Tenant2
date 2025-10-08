import React from 'react';
import * as Icons from 'lucide-react';

const IconPicker = ({ availableIcons, selectedIcon, onSelect }) => {
  return (
    <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">Icon</label>
        <div className="grid grid-cols-6 gap-2 p-2 border rounded-lg max-h-48 overflow-y-auto">
            {availableIcons.map(iconName => {
                const IconComponent = Icons[iconName];
                if (!IconComponent) return null;

                return (
                    <button
                        key={iconName}
                        type="button"
                        onClick={() => onSelect(iconName)}
                        className={`flex items-center justify-center p-2 rounded-lg transition-colors ${selectedIcon === iconName ? 'bg-primary-500 text-white' : 'hover:bg-secondary-100'}`}
                    >
                        <IconComponent size={20} />
                    </button>
                );
            })}
        </div>
    </div>
  );
};

export default IconPicker;

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

const MultiSelectDropdown = ({ label, options, selectedOptions, onChange, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionName) => {
        const newSelected = selectedOptions.includes(optionName)
            ? selectedOptions.filter(item => item !== optionName)
            : [...selectedOptions, optionName];
        onChange(newSelected);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="block text-sm font-medium text-secondary-700 mb-1">{label}</label>
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className="w-full flex justify-between items-center p-2 border border-secondary-300 rounded-lg bg-white disabled:bg-secondary-100"
            >
                <span className="text-sm text-secondary-700 truncate">
                    {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select options'}
                </span>
                <ChevronDown size={16} className="text-secondary-400" />
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border">
                    <ul className="max-h-60 overflow-auto">
                        {options.map(option => (
                            <li key={option.id}
                                onClick={() => handleSelect(option.name)}
                                className="flex items-center justify-between p-2 text-sm hover:bg-secondary-50 cursor-pointer"
                            >
                                <span>{option.name}</span>
                                {selectedOptions.includes(option.name) && (
                                    <Check size={16} className="text-primary-600" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// A dummy Check icon if lucide-react doesn't have it or for fallback.
const Check = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>
);


export default MultiSelectDropdown;

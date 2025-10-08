import React from 'react';

const Switch = ({ checked, onChange, disabled = false }) => {
  return (
    <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange || (() => {})}
        disabled={disabled}
        className="sr-only peer"
      />
      <div className={`w-11 h-6 bg-secondary-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500 ${disabled ? 'opacity-50' : ''}`}></div>
    </label>
  );
};

export default Switch;

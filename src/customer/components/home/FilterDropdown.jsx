import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

const FilterDropdown = ({ label, icon: Icon, options, onSelect }) => {
  const [selected, setSelected] = useState(options[0] === 'Any' ? label : options[0]);

  const handleSelect = (value) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <Menu as="div" className="relative w-full">
      <Menu.Button className="w-full flex items-center justify-between text-left px-4 py-3 bg-white text-secondary-700 rounded-lg border border-secondary-300 hover:border-secondary-400">
        <div className="flex items-center gap-2 truncate">
          <Icon size={16} className="text-secondary-400" />
          <span className="truncate">{selected}</span>
        </div>
        <ChevronDown size={16} className="text-secondary-400" />
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() => handleSelect(option)}
                    className={`${
                      active ? 'bg-secondary-100 text-secondary-900' : 'text-secondary-700'
                    } group flex w-full items-center px-4 py-2 text-sm`}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterDropdown;

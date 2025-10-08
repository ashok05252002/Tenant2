import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const SidebarItem = ({ item, isCollapsed, activeColor = "bg-primary-700 text-white", parentActiveColor = "text-white" }) => {
    const { pathname } = useLocation();
    
    const isParentActive = item.children 
        ? item.children.some(child => pathname === child.path || pathname.startsWith(child.path + '/'))
        : false;

    const [isOpen, setIsOpen] = useState(isParentActive);

    useEffect(() => {
        if (!isCollapsed) {
            setIsOpen(isParentActive);
        }
    }, [pathname, isParentActive, isCollapsed]);

    const baseClasses = "flex items-center w-full text-sm font-medium rounded-lg transition-colors duration-200";
    const collapsedClasses = "justify-center";
    const expandedClasses = "px-3 py-2.5";
    
    const inactiveClasses = "text-secondary-500 hover:bg-secondary-100 hover:text-secondary-900";

    if (!item.children) {
        return (
            <NavLink
                to={item.path}
                end
                title={isCollapsed ? item.title : ''}
                className={({ isActive }) => 
                    `${baseClasses} ${isCollapsed ? collapsedClasses : expandedClasses} ${isActive ? activeColor : inactiveClasses}`
                }
            >
                <div className={`p-1 ${isCollapsed ? '' : 'mr-2'}`}>
                    <item.icon size={18} />
                </div>
                {!isCollapsed && <span>{item.title}</span>}
            </NavLink>
        );
    }

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title={isCollapsed ? item.title : ''}
                className={`${baseClasses} ${isCollapsed ? collapsedClasses : expandedClasses} ${isParentActive ? parentActiveColor : inactiveClasses}`}
            >
                <div className={`p-1 ${isCollapsed ? '' : 'mr-2'}`}>
                    <item.icon size={18} />
                </div>
                {!isCollapsed && <span className="flex-1 text-left">{item.title}</span>}
                {!isCollapsed && <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
            </button>

            {!isCollapsed && (
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="pt-1 pl-8 space-y-1">
                        {item.children.map((child) => (
                            <NavLink
                                key={child.title}
                                to={child.path}
                                className={({ isActive }) => 
                                    `block px-3 py-1.5 text-sm rounded-lg transition-colors ${isActive ? `font-semibold ${parentActiveColor}` : 'text-secondary-500 hover:text-secondary-900'}`
                                }
                            >
                                {child.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarItem;

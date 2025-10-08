import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../customer/context/AuthContext';
import { 
  Home, 
  Settings, 
  Briefcase, 
  Building, 
  Plus,
  X,
  Key,
  Truck,
  Smartphone,
} from 'lucide-react';

const FloatingPortalSwitcher = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

  const portals = [
    {
      path: '/admin',
      icon: Settings,
      label: t('admin.title'),
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-red-700',
      authRequired: false
    },
    {
      path: '/broker',
      icon: Briefcase,
      label: t('broker.title'),
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-green-700',
      authRequired: false
    },
    {
      path: '/landlord',
      icon: Building,
      label: t('landlord.title'),
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-purple-700',
      authRequired: false
    },
    {
      path: '/service-vendor',
      icon: Truck,
      label: t('serviceVendor.title'),
      color: 'bg-orange-500 hover:bg-orange-600',
      textColor: 'text-orange-700',
      authRequired: false
    },
    {
      path: '/tenant-portal',
      icon: Key,
      label: 'My Property',
      color: 'bg-cyan-500 hover:bg-cyan-600',
      textColor: 'text-cyan-700',
      authRequired: true,
    },
    {
      path: '/mobile',
      icon: Smartphone,
      label: 'Mobile Portal',
      color: 'bg-pink-500 hover:bg-pink-600',
      textColor: 'text-pink-700',
      authRequired: false
    },
    {
      path: '/',
      icon: Home,
      label: t('customer.title'),
      color: 'bg-primary-700 hover:bg-primary-800',
      textColor: 'text-primary-700',
      authRequired: false
    },
  ];

  const getActivePortal = () => {
    const currentPath = location.pathname;
    if (currentPath.startsWith('/admin')) return portals.find(p => p.path === '/admin');
    if (currentPath.startsWith('/broker')) return portals.find(p => p.path === '/broker');
    if (currentPath.startsWith('/landlord')) return portals.find(p => p.path === '/landlord');
    if (currentPath.startsWith('/service-vendor')) return portals.find(p => p.path === '/service-vendor');
    if (currentPath.startsWith('/tenant-portal')) return portals.find(p => p.path === '/tenant-portal');
    if (currentPath.startsWith('/mobile')) return portals.find(p => p.path === '/mobile');
    return portals.find(p => p.path === '/'); // Default to customer
  };
  
  const currentPortal = getActivePortal();

  const handlePortalSwitch = (path) => {
    if (path !== location.pathname) {
      navigate(path);
    }
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Portal Options */}
      <div className={`absolute bottom-16 right-0 transition-all duration-300 ease-in-out ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-3">
          {portals
            .filter(portal => portal.path !== currentPortal?.path && (!portal.authRequired || isAuthenticated))
            .map((portal, index) => {
              const IconComponent = portal.icon;
              return (
                <div key={portal.path} className="flex items-center gap-3">
                  {/* Label */}
                  <div className={`bg-white px-3 py-2 rounded-lg shadow-lg border transition-all duration-200 delay-${index * 50}`}>
                    <span className={`text-sm font-medium whitespace-nowrap ${portal.textColor}`}>
                      {portal.label}
                    </span>
                  </div>
                  
                  {/* Button */}
                  <button
                    onClick={() => handlePortalSwitch(portal.path)}
                    className={`w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110 transform ${portal.color} text-white flex items-center justify-center`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    title={portal.label}
                  >
                    <IconComponent size={20} />
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          currentPortal ? currentPortal.color : 'bg-secondary-500 hover:bg-secondary-600'
        } text-white relative overflow-hidden`}
        title="Switch Portal"
      >
        {/* Background pulse effect when expanded */}
        {isExpanded && (
          <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
        )}
        
        {/* Icon */}
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
          {isExpanded ? <X size={24} /> : <Plus size={24} />}
        </div>
      </button>

      {/* Current Portal Indicator */}
      {currentPortal && !isExpanded && (
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
          <currentPortal.icon size={14} className={currentPortal.textColor} />
        </div>
      )}
    </div>
  );
};

export default FloatingPortalSwitcher;

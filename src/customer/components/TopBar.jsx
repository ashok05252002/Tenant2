import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, ChevronDown, Building, Key } from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import LocationButton from './LocationButton';
import { useAuth } from '../context/AuthContext';

const TopBar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout, setAuthModalOpen } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-secondary-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center">
            <div>
              <img 
                src="https://i.ibb.co/GkLzS4q/prop-logo.png" 
                alt="PROPX Logo" 
                className="h-10"
              />
            </div>
          </Link>

          {/* Navigation and Controls */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/search?type=rent" className="text-sm font-medium text-secondary-700 hover:text-accent-600">Rent</Link>
              <Link to="/search?type=buy" className="text-sm font-medium text-secondary-700 hover:text-accent-600">Buy</Link>
              <Link to="/about" className="text-sm font-medium text-secondary-700 hover:text-accent-600">About Us</Link>
              <Link to="/contact" className="text-sm font-medium text-secondary-700 hover:text-accent-600">Contact</Link>
              <Link to="/list-with-us" className="text-sm font-medium text-secondary-700 hover:text-accent-600 flex items-center gap-1">
                <Building size={14} /> List With Us
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <LocationButton />
              <div className="w-px h-6 bg-secondary-300 hidden sm:block"></div>
              <LanguageSwitcher />
              
              <div className="w-px h-6 bg-secondary-300 hidden sm:block"></div>
              
              {isAuthenticated ? (
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-accent-600"
                  >
                    <User size={16} />
                    <span className="hidden sm:inline">{user.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 border border-secondary-200">
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
                        <Settings size={16} /> {t('common.profile')}
                      </Link>
                       <Link to="/tenant-portal" className="flex items-center gap-3 px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
                        <Key size={16} /> My Property
                      </Link>
                      <button onClick={handleLogout} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-100">
                        <LogOut size={16} /> {t('common.logout')}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setAuthModalOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-accent-600"
                >
                  <User size={16} />
                  <span className="hidden sm:inline">{t('common.login')}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

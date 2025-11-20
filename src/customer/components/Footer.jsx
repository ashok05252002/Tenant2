import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import AppleIcon from './icons/AppleIcon';
import PlayStoreIcon from './icons/PlayStoreIcon';


const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  const usefulLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Properties', href: '/search' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'List With Us', href: '/list-with-us' },
  ];
  
  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'FAQ', href: '/faq' }, // Assuming an FAQ page might exist
  ];

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div>
                <img 
                  src="https://i.sstatic.net/xcxEQ.png" 
                  alt="PROPX Logo" 
                  className="h-12"
                />
              </div>
            </Link>
            <p className="text-sm">
              Your trusted partner in finding the perfect rental property. We simplify the rental process for tenants and brokers alike.
            </p>
             <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} className="text-secondary-400 hover:text-white transition-colors">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get The App</h3>
            <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <AppleIcon className="w-8 h-8" />
                    <div className="text-left">
                        <p className="text-xs">Download on the</p>
                        <p className="text-lg font-semibold leading-tight">App Store</p>
                    </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <PlayStoreIcon className="w-8 h-8" />
                    <div className="text-left">
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-lg font-semibold leading-tight">Google Play</p>
                    </div>
                </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PROPX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

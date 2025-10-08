import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Phone, User, Shield, Lock, Mail } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const OwnerContactPanel = ({ property }) => {
    const { isAuthenticated, setAuthModalOpen } = useAuth();
    const landlord = property.landlord;

    if (!isAuthenticated) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock size={24} className="text-secondary-500" />
                </div>
                <h3 className="font-semibold text-secondary-800 mb-2">Owner & Contact Details</h3>
                <p className="text-sm text-secondary-600 mb-4">Please log in to view contact information and connect with the landlord.</p>
                <button
                    onClick={() => setAuthModalOpen(true)}
                    className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors font-medium"
                >
                    Login to View
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
                {landlord && (
                    <div className="p-3 bg-secondary-50 rounded-lg">
                        <p className="text-xs text-secondary-500">Landlord</p>
                        <p className="font-medium text-secondary-800">{landlord.name}</p>
                    </div>
                )}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
                {landlord && (
                    <>
                        <a href={`tel:${landlord.phone}`} className="flex items-center justify-center gap-2 px-3 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors text-sm">
                            <Phone size={16} /> Call Landlord
                        </a>
                         <a href={`mailto:${landlord.email}`} className="flex items-center justify-center gap-2 px-3 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors text-sm">
                            <Mail size={16} /> Email Landlord
                        </a>
                        <a href={`https://wa.me/${landlord.phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium transition-colors text-sm">
                            <WhatsAppIcon size={16} /> WhatsApp Landlord
                        </a>
                    </>
                )}
            </div>
             <a href="tel:+96812345678" className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 font-medium transition-colors">
                <Shield size={18} /> Call Support
            </a>
        </div>
    );
};

export default OwnerContactPanel;

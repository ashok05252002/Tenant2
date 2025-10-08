import React from 'react';
import { User, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from '../../../customer/components/icons/WhatsAppIcon';

const QuickContact = ({ contactInfo }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Landlord/Broker Contact</h3>
            <div className="flex items-center gap-3 mb-4">
                <User size={20} className="text-primary-700" />
                <span className="font-medium text-secondary-800">{contactInfo.name}</span>
            </div>
            <div className="space-y-3">
                <a href={`tel:${contactInfo.phone}`} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                    <Phone size={18} /> Call
                </a>
                <a href={`mailto:${contactInfo.email}`} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                    <Mail size={18} /> Email
                </a>
                <a href={`https://wa.me/${contactInfo.phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium transition-colors">
                    <WhatsAppIcon size={18} /> WhatsApp
                </a>
            </div>
        </div>
    );
};

export default QuickContact;

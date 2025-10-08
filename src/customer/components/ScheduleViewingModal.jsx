import React, { useState } from 'react';
import CalendarPicker from './CalendarPicker';
import { X, Mail, Phone, CheckCircle } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const ScheduleViewingModal = ({ isOpen, onClose, landlord }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSchedule = (schedule) => {
    console.log('Scheduled:', schedule);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-secondary-200 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-secondary-900">
            {isSubmitted ? 'Viewing Scheduled!' : 'Schedule a Viewing'}
          </h2>
          <button onClick={handleClose} className="text-secondary-400 hover:text-secondary-600">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900">Request Sent Successfully!</h3>
              <p className="text-secondary-600 mt-2">The landlord has been notified. You will receive a confirmation via email and on your dashboard shortly.</p>
              <button 
                onClick={handleClose}
                className="mt-6 w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <CalendarPicker onSchedule={handleSchedule} />
              <div className="mt-6 pt-6 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Or Contact Landlord Directly</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${landlord.phone}`} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                    <Phone size={18} /> Call
                  </a>
                  <a href={`mailto:${landlord.email}`} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                    <Mail size={18} /> Email
                  </a>
                  <a href={`https://wa.me/${landlord.phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium transition-colors">
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ScheduleViewingModal;

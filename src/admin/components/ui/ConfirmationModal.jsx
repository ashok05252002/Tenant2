import React from 'react';
import { X, AlertTriangle, Trash2 } from 'lucide-react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle size={32} />
                    </div>
                    <h2 className="text-xl font-bold text-secondary-900">{title}</h2>
                    <p className="text-secondary-600 mt-2">{message}</p>
                </div>
                <div className="p-4 flex justify-center gap-3 bg-secondary-50 border-t">
                    <button 
                        onClick={onClose}
                        className="flex-1 px-4 py-2 bg-white border border-secondary-300 text-secondary-800 rounded-lg hover:bg-secondary-100 font-medium text-sm"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={onConfirm}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-sm"
                    >
                        <Trash2 size={16} /> Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;

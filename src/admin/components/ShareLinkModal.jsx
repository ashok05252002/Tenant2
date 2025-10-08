import React, { useRef } from 'react';
import { X, Eye, ListChecks } from 'lucide-react';

const ShareLinkModal = ({ isOpen, onClose, link }) => {
    const inputRef = useRef(null);

    if (!isOpen) return null;

    const handleFocusAndSelect = () => {
        if (inputRef.current) {
            inputRef.current.select();
            inputRef.current.setSelectionRange(0, 99999); // For mobile devices
        }
    };

    const handleViewAsTenant = () => {
        // Open the direct application link in a new tab
        window.open(link, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Share Application Link</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <p className="text-sm text-secondary-600 mb-2">Share this link with potential tenants. Click the input field to select and copy the link.</p>
                        <div className="flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={link}
                                readOnly
                                onFocus={handleFocusAndSelect}
                                className="w-full p-2 border border-secondary-300 rounded-lg bg-secondary-50 cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-secondary-100">
                        <h4 className="text-md font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                           <ListChecks size={18} /> Tenant Application Steps
                        </h4>
                        <ol className="list-decimal list-inside text-sm text-secondary-600 space-y-1">
                            <li>Tenant opens the shared link to view property details.</li>
                            <li>They click "Apply Now" to begin.</li>
                            <li>The system prompts them to log in or create an account.</li>
                            <li>They complete the KYC and profile verification.</li>
                            <li>Finally, they submit the application form.</li>
                        </ol>
                    </div>
                </div>
                <div className="p-4 bg-secondary-50 border-t flex justify-end gap-3">
                     <button
                        onClick={handleViewAsTenant}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-100 font-medium text-sm"
                    >
                        <Eye size={16} /> View as Tenant
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium text-sm"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareLinkModal;

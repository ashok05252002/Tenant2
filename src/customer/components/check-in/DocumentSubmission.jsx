import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const DocumentSubmission = ({ onSubmitted }) => {
    const [docs, setDocs] = useState({
        preMoveInChecklist: null,
        paymentReceipt: null,
    });

    const handleFileUpload = (field, file) => {
        setDocs(prev => ({ ...prev, [field]: file }));
    };

    const allDocsUploaded = Object.values(docs).every(doc => doc !== null);

    return (
        <div>
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Final Document Submission</h2>
            <p className="text-secondary-600 mb-6">Please upload the required documents to complete your check-in process.</p>
            <div className="space-y-4">
                {[
                    { key: 'preMoveInChecklist', label: 'Signed Move-in Checklist *' },
                    { key: 'paymentReceipt', label: 'Initial Payment Receipt *' },
                ].map((doc) => (
                    <div key={doc.key} className="border-2 border-dashed border-secondary-300 rounded-lg p-6 hover:border-primary-400 transition-colors">
                        <div className="text-center">
                            <Upload className="mx-auto h-12 w-12 text-secondary-400" />
                            <div className="mt-4">
                                <label className="cursor-pointer">
                                    <span className="text-primary-700 font-medium hover:text-primary-800">
                                        Upload {doc.label}
                                    </span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={(e) => handleFileUpload(doc.key, e.target.files[0])}
                                    />
                                </label>
                            </div>
                            {docs[doc.key] && (
                                <div className="mt-2 text-sm text-green-600 flex items-center justify-center gap-1">
                                    <CheckCircle size={16} />
                                    {docs[doc.key].name}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={onSubmitted}
                disabled={!allDocsUploaded}
                className="w-full mt-6 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 font-medium"
            >
                Complete Check-in
            </button>
        </div>
    );
};

export default DocumentSubmission;

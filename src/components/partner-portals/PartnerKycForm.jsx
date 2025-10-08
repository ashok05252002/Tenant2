import React, { useState } from 'react';
import { ShieldCheck, Check, FileText } from 'lucide-react';

const DocumentUploadBox = ({ label, onUpload, file }) => {
    const [fileName, setFileName] = useState(file ? file.name : '');
    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFileName(uploadedFile.name);
            onUpload(uploadedFile);
        }
    };
    return (
        <div className={`border-2 border-dashed rounded-lg p-6 text-center ${fileName ? 'border-green-300 bg-green-50' : 'border-secondary-300'}`}>
            <FileText className="mx-auto h-10 w-10 text-secondary-400 mb-2" />
            <label className="cursor-pointer text-sm text-primary-700 font-medium">
                {fileName ? 'Change File' : `Upload ${label}`}
                <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
            {fileName && <p className="text-xs text-green-600 mt-1">{fileName}</p>}
        </div>
    );
};

const PartnerKycForm = ({ userType, requiredDocs, onSubmit }) => {
    const [documents, setDocuments] = useState({});

    const handleFileUpload = (docKey, file) => {
        setDocuments(prev => ({ ...prev, [docKey]: file }));
    };

    const handleSubmit = () => {
        onSubmit(documents);
    };

    const allDocsUploaded = Object.keys(requiredDocs).every(key => documents[key]);

    return (
        <div>
            <div className="text-center mb-8">
                <ShieldCheck size={40} className="mx-auto text-primary-700 mb-4" />
                <h1 className="text-3xl font-bold text-secondary-900">{userType} KYC Verification</h1>
                <p className="text-secondary-600 mt-2">Please upload the required documents to verify your account.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(requiredDocs).map(([key, label]) => (
                        <DocumentUploadBox key={key} label={label} file={documents[key]} onUpload={(file) => handleFileUpload(key, file)} />
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={!allDocsUploaded}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-medium disabled:opacity-50"
                >
                    <Check size={20} /> Submit for Verification
                </button>
            </div>
        </div>
    );
};

export default PartnerKycForm;

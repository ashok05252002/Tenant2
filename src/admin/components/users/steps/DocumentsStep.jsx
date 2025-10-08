import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, CheckCircle } from 'lucide-react';

const FileUpload = ({ label, onUpload, file }) => (
    <div className="border-2 border-dashed border-secondary-300 rounded-lg p-4 text-center">
        <Upload className="mx-auto h-8 w-8 text-secondary-400 mb-2" />
        <label className="cursor-pointer text-sm text-primary-700 font-medium">
            {file ? 'Change File' : `Upload ${label}`}
            <input type="file" className="hidden" onChange={(e) => onUpload(e.target.files[0])} />
        </label>
        {file && <p className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1"><CheckCircle size={12}/>{file.name}</p>}
    </div>
);

const DocumentsStep = ({ onNext, onBack, userType }) => {
    const [documents, setDocuments] = useState({});

    const handleFileUpload = (docKey, file) => {
        setDocuments(prev => ({ ...prev, [docKey]: file }));
    };

    const getRequiredDocs = () => {
        switch(userType) {
            case 'Tenant': return { nationalId: 'National ID', visa: 'Visa/Residence' };
            case 'Broker': return { nationalId: 'National ID', reraCertificate: 'RERA Certificate' };
            case 'Landlord': return { nationalId: 'National ID', ownershipDeed: 'Ownership Deed' };
            case 'Vendor': return { tradeLicense: 'Trade License', vatCertificate: 'VAT Certificate' };
            default: return {};
        }
    };

    const requiredDocs = getRequiredDocs();

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 2: Upload Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(requiredDocs).map(([key, label]) => (
                    <FileUpload key={key} label={label} file={documents[key]} onUpload={(file) => handleFileUpload(key, file)} />
                ))}
            </div>
            <div className="flex justify-between pt-4">
                <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 text-secondary-600">
                    <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => onNext({ documents })} className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg">
                    Next <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default DocumentsStep;

import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';

const DocumentUpload = ({ label, onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            onUpload(uploadedFile);
        }
    };

    return (
        <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${file ? 'border-green-300 bg-green-50' : 'border-secondary-300 hover:border-primary-400'}`}>
            <div className="mx-auto h-12 w-12 text-secondary-400">
                {file ? <CheckCircle size={48} className="text-green-500" /> : <Upload size={48} />}
            </div>
            <label className="cursor-pointer mt-2 text-sm font-medium text-primary-700">
                {file ? 'Change File' : `Upload ${label}`}
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
            </label>
            {file && <p className="text-xs text-green-700 mt-1 truncate">{file.name}</p>}
        </div>
    );
};

export default DocumentUpload;

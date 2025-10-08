import React from 'react';
import { Folder, FileText, Download } from 'lucide-react';

const DocumentVault = ({ documents }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex items-center gap-2 mb-4">
                <Folder size={20} className="text-primary-600" />
                <h3 className="text-lg font-semibold text-secondary-900">Document Vault</h3>
            </div>
            <div className="space-y-3">
                {documents.map(doc => (
                    <div key={doc.name} className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <FileText size={18} className="text-secondary-500" />
                            <span className="text-sm font-medium text-secondary-800">{doc.name}</span>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700">
                            <Download size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentVault;

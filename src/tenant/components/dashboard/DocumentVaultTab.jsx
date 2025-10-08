import React from 'react';
import { Folder, FileText, Download, Upload } from 'lucide-react';

const DocumentVaultTab = ({ documents }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                <div className="flex items-center gap-3">
                    <Folder size={24} className="text-primary-600" />
                    <h2 className="text-2xl font-bold text-secondary-900">Document Vault</h2>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm">
                    <Upload size={16} /> Upload New Document
                </button>
            </div>
            
            <p className="text-secondary-600 mb-6">
                Here you can find all your important documents, including your signed lease agreement, receipts, and other notices.
            </p>

            <div className="space-y-3">
                {documents.map(doc => (
                    <div key={doc.name} className="flex justify-between items-center p-4 bg-secondary-50 rounded-lg border border-secondary-100">
                        <div className="flex items-center gap-3">
                            <FileText size={20} className="text-secondary-500" />
                            <div>
                                <p className="text-sm font-medium text-secondary-800">{doc.name}</p>
                                <p className="text-xs text-secondary-500">{doc.type}</p>
                            </div>
                        </div>
                        <button className="p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors">
                            <Download size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentVaultTab;

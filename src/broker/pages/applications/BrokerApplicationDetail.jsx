import React from 'react';
import { useParams } from 'react-router-dom';
import { mockOngoingApplications } from '../../../admin/data/ongoingApplications';
import DetailHeader from '../../../admin/components/DetailHeader';
import ApplicationDetailStepper from '../../../admin/components/applications/ApplicationDetailStepper';
import { FileText, CheckCircle } from 'lucide-react';

const BrokerApplicationDetail = () => {
    const { id } = useParams();
    const application = mockOngoingApplications.find(app => app.id === id);

    if (!application) {
        return <div className="p-6">Application not found.</div>;
    }

    const applicationDocuments = [{ name: 'National_ID.pdf', type: 'KYC' }];
    const eSignature = "John Smith";

    return (
        <div>
            <DetailHeader
                title={`Application: ${application.id}`}
                subtitle={`Applicant: ${application.applicantName} | Property: ${application.propertyName}`}
                backPath="/broker/applications/status"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-6">Application Progress</h3>
                    <ApplicationDetailStepper steps={application.steps} />
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2"><FileText size={18} /> Documents</h3>
                        <ul className="space-y-2">
                            {applicationDocuments.map(doc => (
                                <li key={doc.name} className="text-sm text-blue-600 hover:underline cursor-pointer">{doc.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2"><CheckCircle size={18} /> E-Signature</h3>
                        <p className="font-cursive text-xl text-secondary-800" style={{ fontFamily: 'cursive' }}>{eSignature}</p>
                    </div>
                </div>
            </div>
             {application.needsApproval && (
                <div className="mt-6 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Action Required</h3>
                    <p className="text-yellow-700 mb-4">{application.approvalTask}</p>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                        Approve & Proceed
                    </button>
                </div>
            )}
        </div>
    );
};

export default BrokerApplicationDetail;

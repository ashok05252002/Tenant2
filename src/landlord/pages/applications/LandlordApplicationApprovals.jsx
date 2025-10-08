import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPageLayout from '../../../admin/components/AdminPageLayout';
import { mockOngoingApplications } from '../../../admin/data/ongoingApplications';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { mockTenants } from '../../../admin/data/users';
import Switch from '../../../admin/components/ui/Switch';

const LandlordApplicationApprovals = () => {
    const navigate = useNavigate();
    const approvalQueue = mockOngoingApplications.filter(app => app.needsApproval);

    return (
        <AdminPageLayout title="Approvals Queue">
            <div className="space-y-4">
                {approvalQueue.length > 0 ? (
                    approvalQueue.map(app => {
                        const tenant = mockTenants.find(t => t.id === app.tenantId);
                        return (
                            <div key={app.id} className="bg-white p-4 rounded-xl shadow-sm border border-secondary-200 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <AlertTriangle className="text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-secondary-900">{app.applicantName} - {app.propertyName}</p>
                                        <p className="text-sm text-secondary-600">{app.approvalTask}</p>
                                        <div className="flex items-center gap-4 mt-2 text-xs">
                                            <span>KYC: <span className="font-semibold">{tenant?.kycStatus}</span></span>
                                            <span>Score: <span className="font-semibold">{tenant?.creditScore || 'N/A'}</span></span>
                                            <div className="flex items-center gap-1">
                                                Verified: <Switch checked={tenant?.kycStatus === 'Completed'} disabled />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => navigate(`/landlord/applications/${app.id}`)}
                                    className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700"
                                >
                                    Review <ArrowRight size={16} />
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl border border-secondary-200">
                        <p className="text-secondary-600">The approvals queue is empty.</p>
                    </div>
                )}
            </div>
        </AdminPageLayout>
    );
};

export default LandlordApplicationApprovals;

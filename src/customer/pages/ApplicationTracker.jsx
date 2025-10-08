import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import { mockApplications } from '../data/applications';
import ApplicationStatusStepper from '../components/applications/ApplicationStatusStepper';
import { Home, Calendar, FileSignature, ArrowRight, XCircle } from 'lucide-react';

const ApplicationTracker = () => {
    const navigate = useNavigate();
    return (
        <CustomerLayout>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-secondary-900 mb-8">My Applications</h1>

                <div className="space-y-8">
                    {mockApplications.map(app => (
                        <div key={app.id} className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row justify-between md:items-center pb-4 border-b border-secondary-100">
                                <div>
                                    <p className="text-sm text-secondary-500">{app.id}</p>
                                    <h2 className="text-xl font-semibold text-secondary-900">{app.property.title}</h2>
                                    <p className="text-sm text-secondary-600 flex items-center gap-1 mt-1">
                                        <Home size={14} /> {app.property.location}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <p className="text-sm text-secondary-500 flex items-center justify-end gap-1">
                                        <Calendar size={14} /> Applied on {app.date}
                                    </p>
                                </div>
                            </div>

                            {/* Stepper */}
                            <div className="py-6">
                                <ApplicationStatusStepper currentStatus={app.status} />
                            </div>

                            {/* Conditional Content */}
                            {app.status === 'AgreementPending' && (
                                <div className="p-6 bg-primary-50 rounded-lg flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-primary-800">Action Required: Sign Your Lease</h3>
                                        <p className="text-sm text-primary-700">Please review and sign the digital agreement to proceed.</p>
                                    </div>
                                    <button
                                        onClick={() => navigate(`/check-in-process/${app.id}`)}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 font-medium text-sm"
                                    >
                                        <FileSignature size={16} />
                                        Review & Sign
                                    </button>
                                </div>
                            )}

                            {app.status === 'Rejected' && (
                                <div className="p-4 bg-red-50 rounded-lg flex items-center gap-3">
                                    <XCircle className="text-red-500" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-red-800">Application Rejected</h3>
                                        <p className="text-sm text-red-700">{app.rejectionReason}</p>
                                    </div>
                                </div>
                            )}

                            {['DocumentsPending', 'ReadyForMoveIn'].includes(app.status) && (
                                <div className="p-6 bg-blue-50 rounded-lg flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold text-blue-800">Check-in In Progress</h3>
                                        <p className="text-sm text-blue-700">You're almost there! Complete the final steps to get your keys.</p>
                                    </div>
                                    <button
                                        onClick={() => navigate(`/check-in-process/${app.id}`)}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium text-sm"
                                    >
                                        Continue Check-in
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </CustomerLayout>
    );
};

export default ApplicationTracker;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ApplicationSuccess = () => {
    const navigate = useNavigate();
    const { applicationId } = useParams();

    return (
        <CustomerLayout>
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center bg-white p-12 rounded-xl shadow-lg border border-secondary-200">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-secondary-900">Application Submitted!</h1>
                    <p className="text-secondary-600 mt-2 max-w-md">
                        Your application has been successfully submitted and is now under review.
                        You can track its status on your dashboard. As a next step, let's prepare for your move-in.
                    </p>
                    <button
                        onClick={() => navigate(`/check-in-process/${applicationId}`)}
                        className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium"
                    >
                        Proceed to Check-in
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default ApplicationSuccess;

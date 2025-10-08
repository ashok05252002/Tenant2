import React from 'react';
import { Clock, Loader } from 'lucide-react';

const ApprovalWait = ({ onApproved }) => {
    return (
        <div className="text-center py-8">
            <Clock size={48} className="mx-auto text-primary-700 mb-4" />
            <h2 className="text-xl font-semibold text-secondary-900 mb-2">Awaiting Landlord Approval</h2>
            <p className="text-secondary-600 mb-6">
                Your signed agreement has been sent to the landlord for final approval. We will notify you once it's confirmed.
            </p>
            <button
                onClick={onApproved}
                className="flex items-center justify-center gap-2 mx-auto py-3 px-6 bg-secondary-200 text-secondary-800 rounded-lg hover:bg-secondary-300 font-medium"
            >
                <Loader size={16} className="animate-spin" />
                (Simulate Approval)
            </button>
        </div>
    );
};

export default ApprovalWait;

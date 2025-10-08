import React from 'react';
import PaymentHistory from './PaymentHistory';

const PaymentHistoryTab = ({ history }) => {
    return (
        <div>
            <PaymentHistory history={history} />
        </div>
    );
};

export default PaymentHistoryTab;

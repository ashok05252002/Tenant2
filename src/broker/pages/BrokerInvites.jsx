import React, { useState } from 'react';
import { Link2, Copy, Check, Users, Building } from 'lucide-react';

const mockInvites = [
    { type: 'Tenant', name: 'Khalfan Al-Abri', status: 'Accepted', commission: 'OMR 50.00' },
    { type: 'Landlord', name: 'Fatima Al-Hinai', status: 'Accepted', commission: 'OMR 120.00' },
    { type: 'Tenant', name: 'Salim Al-Said', status: 'Pending', commission: '-' },
];

const BrokerInvites = () => {
    const [copied, setCopied] = useState(false);
    const referralLink = 'https://your-platform.com/invite?ref=BRK123';

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-6">Invites & Commissions</h1>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 mb-8">
                <h2 className="text-lg font-semibold text-secondary-800 mb-2 flex items-center gap-2"><Link2 size={20} /> Your Referral Link</h2>
                <p className="text-sm text-secondary-600 mb-4">Share this link with potential tenants and landlords to earn commissions.</p>
                <div className="flex gap-2">
                    <input type="text" readOnly value={referralLink} className="w-full p-2 border border-secondary-300 rounded-lg bg-secondary-50" />
                    <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm">
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Type</th>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Commission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockInvites.map((invite, index) => (
                            <tr key={index} className="border-b last:border-0">
                                <td className="p-3">
                                    <div className={`flex items-center gap-2 text-sm ${invite.type === 'Tenant' ? 'text-blue-600' : 'text-purple-600'}`}>
                                        {invite.type === 'Tenant' ? <Users size={16} /> : <Building size={16} />}
                                        <span>{invite.type}</span>
                                    </div>
                                </td>
                                <td className="p-3 font-medium">{invite.name}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${invite.status === 'Accepted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {invite.status}
                                    </span>
                                </td>
                                <td className="p-3 font-semibold text-green-700">{invite.commission}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrokerInvites;

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, Phone, Mail, User } from 'lucide-react';

const Step1Register = ({ onNext, onBack }) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [fullName, setFullName] = useState('');
    const { login } = useAuth();

    const handleSendOtp = (e) => {
        e.preventDefault();
        setOtpSent(true);
        // Mock sending OTP
    };

    const handleVerification = () => {
        if (otp === '123456') { // Mock OTP check
            const userData = {
                id: phone,
                name: fullName,
                email: email,
                phone: phone,
                kycStatus: 'pending'
            };
            login(userData); // Log the user in to persist state
            onNext(userData);
        } else {
            alert('Invalid OTP. Please use 123456');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">Create Your Account</h2>
            <p className="text-secondary-600 mb-6">Let's start with your basic details.</p>
            
            {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Full Name (as per National ID)</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Mobile Number*</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                        </div>
                         <p className="text-xs text-secondary-500 mt-1">This is required for OTP verification.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Email (Optional)</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                        </div>
                    </div>
                    
                    <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 bg-primary-700 text-white rounded-lg font-medium">Send OTP</button>
                </form>
            ) : (
                <div className="space-y-4">
                    <p className="text-center">Enter the OTP sent to {phone}. (Hint: 123456)</p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">OTP</label>
                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className="w-full p-3 text-center tracking-[1em] font-bold text-xl border border-secondary-300 rounded-lg" />
                    </div>
                    <button onClick={handleVerification} className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-medium">Verify & Continue</button>
                </div>
            )}

            <div className="mt-6 flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-secondary-600">
                    <ArrowLeft size={16} /> Back to Home
                </button>
            </div>
        </div>
    );
};

export default Step1Register;

import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp === '123456') { // Mock OTP
            setStep(3);
        } else {
            alert("Invalid OTP. Please use 123456 for this demo.");
        }
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        setStep(4);
    };

    if (step === 4) {
        return (
            <div className="text-center">
                <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">Password Reset</h2>
                <p className="text-secondary-600 mb-6">Your password has been successfully reset. You can now log in with your new password.</p>
                <Link to="/broker" className="w-full block bg-primary-700 text-white py-3 px-4 rounded-lg hover:bg-primary-800 font-medium">
                    Back to Login
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">Forgot Password</h2>
            {step === 1 && (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <p className="text-secondary-600 mb-4">Enter your email to receive a verification code.</p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 p-3 border rounded-lg" />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-primary-700 text-white py-3 rounded-lg font-medium">Send Code</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleOtpSubmit} className="space-y-4">
                    <p className="text-secondary-600 mb-4">Enter the 6-digit code sent to {email}. (Hint: 123456)</p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Verification Code</label>
                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className="w-full p-3 border rounded-lg" />
                    </div>
                    <button type="submit" className="w-full bg-primary-700 text-white py-3 rounded-lg font-medium">Verify</button>
                </form>
            )}
            {step === 3 && (
                <form onSubmit={handlePasswordReset} className="space-y-4">
                     <p className="text-secondary-600 mb-4">Create a new password for your account.</p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">New Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Confirm New Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full p-3 border rounded-lg" />
                    </div>
                    <button type="submit" className="w-full bg-primary-700 text-white py-3 rounded-lg font-medium">Reset Password</button>
                </form>
            )}
             <Link to="/broker" className="mt-6 flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-700">
                <ArrowLeft size={16} /> Back to Login
            </Link>
        </div>
    );
};

export default ForgotPasswordForm;

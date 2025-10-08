import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../customer/context/AuthContext';
import { X, Phone, Mail, User, Loader } from 'lucide-react';

const MobileAuthModal = () => {
    const { authModalOpen, setAuthModalOpen, login } = useAuth();
    const [mode, setMode] = useState('signin');
    const [authStep, setAuthStep] = useState('identifier');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [verifying, setVerifying] = useState(false);
    const otpInputs = useRef([]);

    const sheetVariants = {
        hidden: { y: '100%' },
        visible: { y: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
        exit: { y: '100%', transition: { duration: 0.2 } },
    };

    const handleClose = () => {
        setAuthModalOpen(false);
        setTimeout(() => {
            setAuthStep('identifier');
            setMode('signin');
        }, 300);
    };

    const handleIdentifierSubmit = (e) => {
        e.preventDefault();
        setAuthStep('otp');
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleOtpSubmit = () => {
        setVerifying(true);
        setTimeout(() => {
            if (otp.join("") === "123456") {
                const userData = mode === 'signup'
                    ? { id: phone, name, phone }
                    : { id: phone, name: 'Existing User', phone };
                login(userData);
                handleClose();
            } else {
                alert("Invalid OTP. Please use 123456 for this demo.");
            }
            setVerifying(false);
        }, 1000);
    };
    
    const renderIdentifierForm = () => (
        <form onSubmit={handleIdentifierSubmit} className="space-y-4">
            {mode === 'signup' && (
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                    </div>
                </div>
            )}
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Mobile Number</label>
                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" size={18} />
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full pl-10 p-3 border border-secondary-300 rounded-lg" />
                </div>
            </div>
            <button type="submit" className="w-full flex items-center justify-center py-3 bg-primary-700 text-white rounded-lg font-medium">Send OTP</button>
        </form>
    );
    
    const renderOtpForm = () => (
        <div className="text-center">
            <h3 className="text-lg font-semibold text-secondary-800">Enter Verification Code</h3>
            <p className="text-sm text-secondary-600 mt-2 mb-4">A 6-digit code was sent to {phone}. (Hint: 123456)</p>
            <div className="flex justify-center gap-2 mb-4">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="tel"
                        maxLength="1"
                        value={data}
                        onChange={e => handleOtpChange(e.target, index)}
                        onFocus={e => e.target.select()}
                        ref={el => otpInputs.current[index] = el}
                        className="w-12 h-14 text-center text-2xl font-semibold border border-secondary-300 rounded-lg"
                    />
                ))}
            </div>
            <button onClick={handleOtpSubmit} disabled={verifying} className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-medium">
                {verifying ? <Loader className="animate-spin" /> : 'Verify'}
            </button>
        </div>
    );

    return (
        <AnimatePresence>
            {authModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 z-50 flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        variants={sheetVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-cream-100 rounded-t-2xl p-4"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-secondary-800">
                                {authStep === 'identifier' ? (mode === 'signin' ? 'Sign In' : 'Sign Up') : 'Enter Code'}
                            </h2>
                            <button onClick={handleClose} className="p-2 -mr-2"><X size={24} /></button>
                        </div>
                        
                        {authStep === 'identifier' ? renderIdentifierForm() : renderOtpForm()}

                        <div className="text-center text-sm mt-4">
                            {mode === 'signin' ? (
                                <p>No account? <button onClick={() => setMode('signup')} className="font-medium text-primary-700">Sign Up</button></p>
                            ) : (
                                <p>Have an account? <button onClick={() => setMode('signin')} className="font-medium text-primary-700">Sign In</button></p>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileAuthModal;

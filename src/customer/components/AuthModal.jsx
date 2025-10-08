import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X } from 'lucide-react';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';

const AuthModal = () => {
  const { authModalOpen, setAuthModalOpen } = useAuth();
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'

  const handleClose = () => {
    setAuthModalOpen(false);
  };

  if (!authModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1582450871972-ab6964574975?w=800&auto=format&fit=crop"
            alt="Oman Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center relative overflow-y-auto">
          <button onClick={handleClose} className="absolute top-4 right-4 text-secondary-400 hover:text-secondary-600">
            <X size={24} />
          </button>
          
          <div className="w-full">
            <div className="bg-black rounded-md p-1 w-max mb-8">
              <img 
                src="https://i.postimg.cc/L6wM906B/adb-logo.png" 
                alt="Al Dahab Investments Group Logo" 
                className="h-10"
              />
            </div>
          
            {mode === 'signin' ? (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">Welcome Back</h2>
                <p className="text-secondary-600 mb-6">Sign in to continue your journey.</p>
                <SignInForm />
                <p className="text-center text-sm mt-6">
                  Don't have an account?{' '}
                  <button onClick={() => setMode('signup')} className="font-medium text-primary-700 hover:underline">
                    Sign Up
                  </button>
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">Create an Account</h2>
                <p className="text-secondary-600 mb-6">Join us and find your perfect space.</p>
                <SignUpForm />
                <p className="text-center text-sm mt-6">
                  Already have an account?{' '}
                  <button onClick={() => setMode('signin')} className="font-medium text-primary-700 hover:underline">
                    Sign In
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

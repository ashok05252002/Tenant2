import React, { createContext, useContext, useState } from 'react';

const ServiceVendorContext = createContext();

export const useServiceVendor = () => useContext(ServiceVendorContext);

export const ServiceVendorProvider = ({ children }) => {
  const [kycStatus, setKycStatus] = useState('pending'); // 'pending', 'completed'
  const [kycPromptModalOpen, setKycPromptModalOpen] = useState(false);

  // Mock user data
  const user = {
    name: 'Oman Technical Services',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/81.jpg',
  };

  const completeKyc = () => {
    setKycStatus('completed');
  };

  const handleGatedAction = (action) => {
    if (kycStatus !== 'completed') {
      setKycPromptModalOpen(true);
    } else {
      action();
    }
  };

  const value = {
    user,
    kycStatus,
    completeKyc,
    handleGatedAction,
    kycPromptModalOpen,
    setKycPromptModalOpen,
  };

  return (
    <ServiceVendorContext.Provider value={value}>
      {children}
    </ServiceVendorContext.Provider>
  );
};

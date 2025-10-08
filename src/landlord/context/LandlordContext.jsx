import React, { createContext, useContext, useState } from 'react';

const LandlordContext = createContext();

export const useLandlord = () => useContext(LandlordContext);

export const LandlordProvider = ({ children }) => {
  const [kycStatus, setKycStatus] = useState('pending'); // 'pending', 'completed'
  const [kycPromptModalOpen, setKycPromptModalOpen] = useState(false);

  // Mock user data
  const user = {
    name: 'Abdullah Al-Said',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/41.jpg',
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
    <LandlordContext.Provider value={value}>
      {children}
    </LandlordContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

const BrokerContext = createContext();

export const useBroker = () => useContext(BrokerContext);

export const BrokerProvider = ({ children }) => {
  const [kycStatus, setKycStatus] = useState('pending'); // 'pending', 'completed'
  const [kycPromptModalOpen, setKycPromptModalOpen] = useState(false);

  // Mock user data
  const user = {
    name: 'Khalfan Al-Abri',
    avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/32.jpg',
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
    <BrokerContext.Provider value={value}>
      {children}
    </BrokerContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [kycPromptOpen, setKycPromptOpen] = useState(false);
  const [intendedAction, setIntendedAction] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('tenant_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setFavorites(parsedUser.favorites || []);
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    const newUser = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      kycStatus: userData.kycStatus || 'pending',
      creditScore: userData.creditScore || null,
      profileComplete: userData.profileComplete || false,
      favorites: userData.favorites || [],
    };
    setUser(newUser);
    setFavorites(newUser.favorites);
    localStorage.setItem('tenant_user', JSON.stringify(newUser));
    setAuthModalOpen(false);

    if (intendedAction) {
      intendedAction();
      setIntendedAction(null);
    }
  };

  const logout = () => {
    setUser(null);
    setFavorites([]);
    localStorage.removeItem('tenant_user');
  };

  const updateUser = (updates) => {
    if (!user) return;
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('tenant_user', JSON.stringify(updatedUser));
  };
  
  const updateCreditScore = (change) => {
    if (!user || !user.creditScore) return;
    const newScore = Math.max(300, Math.min(900, user.creditScore + change));
    updateUser({ creditScore: newScore });
  };

  const handleGatedAction = (actionCallback, options = { requireKyc: false }) => {
    if (!user) {
      setIntendedAction(() => () => handleGatedAction(actionCallback, options));
      setAuthModalOpen(true);
      return;
    }

    if (options.requireKyc && user.kycStatus !== 'completed') {
      setKycPromptOpen(true);
      return;
    }

    actionCallback();
  };

  const toggleFavorite = (propertyId) => {
    const newFavorites = favorites.includes(propertyId)
      ? favorites.filter(id => id !== propertyId)
      : [...favorites, propertyId];
    setFavorites(newFavorites);
    if (user) {
      updateUser({ favorites: newFavorites });
    }
  };

  const isFavorite = (propertyId) => favorites.includes(propertyId);

  const value = {
    user,
    isLoading,
    authModalOpen,
    setAuthModalOpen,
    kycPromptOpen,
    setKycPromptOpen,
    login,
    logout,
    updateUser,
    updateCreditScore,
    handleGatedAction,
    isAuthenticated: !!user,
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../customer/context/AuthContext';
import MobileLayout from './layout/MobileLayout';
import MobileHome from './pages/MobileHome';
import MobileSearch from './pages/MobileSearch';
import MobilePropertyDetail from './pages/MobilePropertyDetail';
import MobileProfile from './pages/MobileProfile';
import MobileFavorites from './pages/MobileFavorites';
import MobileApplicationProcess from './pages/MobileApplicationProcess';
import MobileAuthModal from './components/MobileAuthModal';

const MobilePortal = () => {
    const { authModalOpen, setAuthModalOpen, isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            const timer = setTimeout(() => {
                setAuthModalOpen(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [setAuthModalOpen, isAuthenticated]);

    return (
        <>
            <Routes>
                <Route element={<MobileLayout />}>
                    <Route index element={<MobileHome />} />
                    <Route path="search" element={<MobileSearch />} />
                    <Route path="property/:id" element={<MobilePropertyDetail />} />
                    <Route path="profile" element={<MobileProfile />} />
                    <Route path="favorites" element={<MobileFavorites />} />
                </Route>
                <Route path="apply/:propertyId" element={<MobileApplicationProcess />} />
            </Routes>
            <MobileAuthModal />
        </>
    );
};

export default MobilePortal;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Key, User, LogOut, X } from 'lucide-react';
import { useAuth } from '../../customer/context/AuthContext';

const MoreSheet = ({ isOpen, onClose }) => {
    const { user, logout } = useAuth();

    const sheetVariants = {
        hidden: { y: '100%' },
        visible: { y: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
        exit: { y: '100%', transition: { duration: 0.2 } },
    };

    const menuItems = [
        { label: 'My Favorites', path: '/mobile/favorites', icon: Heart },
        { label: 'My Property', path: '/tenant-portal', icon: Key },
        { label: 'My Profile', path: '/mobile/profile', icon: User },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 z-50 flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
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
                            <h2 className="text-lg font-bold text-secondary-800">More Options</h2>
                            <button onClick={onClose} className="p-2 -mr-2"><X size={24} /></button>
                        </div>
                        <div className="space-y-2">
                            {menuItems.map(item => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    onClick={onClose}
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-cream-200"
                                >
                                    <item.icon size={20} className="text-primary-700" />
                                    <span className="font-medium text-secondary-800">{item.label}</span>
                                </Link>
                            ))}
                            {user && (
                                <button
                                    onClick={() => { logout(); onClose(); }}
                                    className="w-full flex items-center gap-4 p-3 rounded-lg text-red-600 hover:bg-red-50"
                                >
                                    <LogOut size={20} />
                                    <span className="font-medium">Logout</span>
                                </button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MoreSheet;

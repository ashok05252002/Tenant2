import React, { useState } from 'react';
import { User, Mail, Phone, Edit } from 'lucide-react';
import { useAuth } from '../../../customer/context/AuthContext';
import EditProfileModal from './EditProfileModal';

const ProfileTab = () => {
    const { user, updateUser } = useAuth();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleProfileUpdate = (updatedData) => {
        updateUser(updatedData);
        setModalOpen(false);
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-secondary-900">Your Profile</h2>
                    <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm text-primary-700 bg-primary-100 rounded-lg hover:bg-primary-200">
                        <Edit size={16} /> Edit Profile
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
                        <User size={20} className="text-primary-700" />
                        <div>
                            <p className="text-sm text-secondary-500">Full Name</p>
                            <p className="font-medium text-secondary-800">{user.name}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
                        <Mail size={20} className="text-primary-700" />
                        <div>
                            <p className="text-sm text-secondary-500">Email</p>
                            <p className="font-medium text-secondary-800">{user.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg">
                        <Phone size={20} className="text-primary-700" />
                        <div>
                            <p className="text-sm text-secondary-500">Phone</p>
                            <p className="font-medium text-secondary-800">{user.phone || 'Not Provided'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <EditProfileModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                user={user}
                onSubmit={handleProfileUpdate}
            />
        </>
    );
};

export default ProfileTab;

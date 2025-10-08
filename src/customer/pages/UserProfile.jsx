import React from 'react';
import { useAuth } from '../context/AuthContext';
import CustomerLayout from '../components/CustomerLayout';
import { User, Mail, Phone, Edit, Heart } from 'lucide-react';
import KycStatusCard from '../components/dashboard/KycStatusCard';
import CreditScoreCard from '../components/dashboard/CreditScoreCard';
import { mockUnits } from '../../data/units';
import FavoritePropertyCard from '../components/profile/FavoritePropertyCard';

const UserProfile = () => {
    const { user, favorites } = useAuth();

    if (!user) {
        return null; // Or a loading state
    }

    const favoritedProperties = mockUnits.filter(p => favorites.includes(p.id));

    return (
        <CustomerLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                        <User size={48} className="text-primary-700" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-secondary-900">{user.name}</h1>
                        <p className="text-secondary-600">{user.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Profile Details */}
                        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-secondary-900">Your Profile</h2>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary-700 bg-primary-100 rounded-lg hover:bg-primary-200">
                                    <Edit size={16} /> Edit Profile
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail size={20} className="text-primary-700" />
                                    <div>
                                        <p className="text-sm text-secondary-500">Email</p>
                                        <p className="font-medium text-secondary-800">{user.email || 'Not Provided'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="text-primary-700" />
                                    <div>
                                        <p className="text-sm text-secondary-500">Phone</p>
                                        <p className="font-medium text-secondary-800">{user.phone || 'Not Provided'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Favorite Properties */}
                        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8">
                            <h2 className="text-xl font-semibold text-secondary-900 mb-6 flex items-center gap-2">
                                <Heart className="text-red-500" /> My Favorite Properties
                            </h2>
                            {favoritedProperties.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {favoritedProperties.map(prop => <FavoritePropertyCard key={prop.id} property={prop} />)}
                                </div>
                            ) : (
                                <p className="text-secondary-600 text-center py-8">You haven't favorited any properties yet.</p>
                            )}
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-8">
                        {user.kycStatus === 'completed' ? (
                            <CreditScoreCard score={user.creditScore || 720} />
                        ) : (
                            <KycStatusCard />
                        )}
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
};

export default UserProfile;

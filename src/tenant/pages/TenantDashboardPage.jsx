import React, { useState } from 'react';
import { activeLease, paymentHistory, maintenanceRequests as initialRequests, announcements, documents } from '../../customer/data/tenantData';
import { useAuth } from '../../customer/context/AuthContext';
import { CreditCard, FileText, User, History, Wrench, Folder, Star, MessageSquare, LayoutDashboard } from 'lucide-react';
import MaintenanceRequestModal from '../components/dashboard/MaintenanceRequestModal';
import VacateRequestModal from '../components/dashboard/VacateRequestModal';
import FeedbackModal from '../components/dashboard/FeedbackModal';
import BottomNavBar from '../components/BottomNavBar';

// Import Tab Components
import DashboardTab from '../components/dashboard/DashboardTab';
import LeaseDetailsTab from '../components/dashboard/LeaseDetailsTab';
import PaymentHistoryTab from '../components/dashboard/PaymentHistoryTab';
import ProfileTab from '../components/dashboard/ProfileTab';
import RentalHistoryTab from '../components/dashboard/RentalHistoryTab';
import ServiceRequestsTab from '../components/dashboard/ServiceRequestsTab';
import DocumentVaultTab from '../components/dashboard/DocumentVaultTab';
import MyFeedbackTab from '../components/dashboard/MyFeedbackTab';
import { mockTenants } from '../../admin/data/users';
import { mockFeedback } from '../../admin/data/feedback';

const TenantDashboardPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isMaintenanceModalOpen, setMaintenanceModalOpen] = useState(false);
    const [isVacateModalOpen, setVacateModalOpen] = useState(false);
    const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [requests, setRequests] = useState(initialRequests);
    const { user } = useAuth();
    
    const currentTenant = mockTenants.find(t => t.id.toString() === user?.id?.toString());
    const tenantFeedback = mockFeedback.filter(f => f.tenantId === user?.id);

    const handleAddRequest = (newRequest) => {
        setRequests(prev => [
            {
                id: `REQ-0${prev.length + 13}`,
                ...newRequest,
                status: 'Open',
                date: new Date().toISOString().split('T')[0]
            },
            ...prev
        ]);
        setMaintenanceModalOpen(false);
    };

    const handleVacateSubmit = (vacateData) => {
        console.log("Vacate Request Submitted:", vacateData);
        setVacateModalOpen(false);
    };
    
    const handleFeedbackSubmit = (feedbackData) => {
        console.log("Feedback Submitted:", feedbackData);
        setFeedbackModalOpen(false);
    };

    const tabs = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'lease', label: 'Lease', icon: FileText },
        { id: 'payments', label: 'Payments', icon: CreditCard },
        { id: 'service', label: 'Services', icon: Wrench },
        { id: 'documents', label: 'Docs', icon: Folder },
        { id: 'history', label: 'History', icon: History },
        { id: 'my-feedback', label: 'Feedback', icon: MessageSquare },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'lease':
                return <LeaseDetailsTab leaseData={activeLease} documents={documents} />;
            case 'documents':
                return <DocumentVaultTab documents={documents} />;
            case 'payments':
                return <PaymentHistoryTab history={paymentHistory} />;
            case 'service':
                return <ServiceRequestsTab requests={requests} />;
            case 'history':
                return <RentalHistoryTab history={currentTenant?.rentalHistory || []} />;
            case 'my-feedback':
                return <MyFeedbackTab feedback={tenantFeedback} />;
            case 'profile':
                return <ProfileTab user={user} />;
            case 'dashboard':
            default:
                return (
                    <DashboardTab
                        leaseData={activeLease}
                        requests={requests}
                        announcements={announcements}
                        onNewRequest={() => setMaintenanceModalOpen(true)}
                        onVacateClick={() => setVacateModalOpen(true)}
                    />
                );
        }
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 sticky top-24">
                            <nav className="space-y-1">
                                {tabs.map(tab => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                                                activeTab === tab.id
                                                    ? 'bg-primary-100 text-primary-700'
                                                    : 'text-secondary-700 hover:bg-secondary-50'
                                            }`}
                                        >
                                            <Icon size={18} />
                                            <span>{tab.label}</span>
                                        </button>
                                    );
                                })}
                                <div className="pt-2">
                                    <button
                                        onClick={() => setFeedbackModalOpen(true)}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors text-secondary-700 hover:bg-secondary-50"
                                    >
                                        <Star size={18} />
                                        <span>Submit Feedback</span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {renderContent()}
                    </div>
                </div>
            </div>

            <BottomNavBar 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                allTabs={tabs}
            />

            <MaintenanceRequestModal
                isOpen={isMaintenanceModalOpen}
                onClose={() => setMaintenanceModalOpen(false)}
                onSubmit={handleAddRequest}
            />
            <VacateRequestModal
                isOpen={isVacateModalOpen}
                onClose={() => setVacateModalOpen(false)}
                onSubmit={handleVacateSubmit}
            />
            <FeedbackModal
                isOpen={isFeedbackModalOpen}
                onClose={() => setFeedbackModalOpen(false)}
                onSubmit={handleFeedbackSubmit}
                propertyName={activeLease.property.title}
            />
        </>
    );
};

export default TenantDashboardPage;

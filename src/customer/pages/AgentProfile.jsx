import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import PropertyCard from '../components/PropertyCard';
import ScheduleViewingModal from '../components/ScheduleViewingModal';
import { useAuth } from '../context/AuthContext';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { mockBrokers, mockProperties } from '../data/brokers';
import { Star, Award, Languages, Phone, Mail, Briefcase, Calendar, ArrowLeft, Heart } from 'lucide-react';

const AgentProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const broker = mockBrokers.find(a => a.id === parseInt(id));
    const brokerProperties = mockProperties.filter(p => p.brokerId === parseInt(id));
    
    const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
    const [selectedPropertyForSchedule, setSelectedPropertyForSchedule] = useState(null);
    const { handleGatedAction } = useAuth();

    if (!broker) {
        return <CustomerLayout><div className="text-center p-8">Broker not found.</div></CustomerLayout>;
    }

    const handleOpenScheduleModal = (property) => {
        handleGatedAction(() => {
            setSelectedPropertyForSchedule(property);
            setScheduleModalOpen(true);
        }, { requireKyc: false });
    };

    const brokerForModal = broker;

    return (
        <CustomerLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors font-medium mb-4"
                >
                    <ArrowLeft size={20} />
                    Back to Brokers
                </button>

                {/* Banner */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <img src={broker.photo} alt={broker.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary-200" />
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                <h1 className="text-3xl font-bold text-secondary-900">{broker.name}</h1>
                                {broker.verified && <Award size={24} className="text-green-500 fill-current" title="Verified Broker" />}
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-secondary-600">
                                <div className="flex items-center gap-1"><Star size={16} className="text-yellow-500" /> {broker.rating} ({broker.reviews} reviews)</div>
                                <div className="flex items-center gap-1"><Briefcase size={16} /> {broker.activeListings} listings</div>
                                <div className="flex items-center gap-1"><Languages size={16} /> {broker.languages.join(', ')}</div>
                            </div>
                            <p className="mt-4 text-secondary-700 max-w-2xl mx-auto md:mx-0">{broker.bio}</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-secondary-300 rounded-lg text-sm hover:bg-secondary-100">
                            <Heart size={16} /> Favorite Broker
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Properties Listed */}
                        <div>
                            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Properties Listed ({brokerProperties.length})</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {brokerProperties.map(prop => <PropertyCard key={prop.id} property={prop} onScheduleClick={handleOpenScheduleModal} />)}
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact & Reviews */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-secondary-900 mb-4">Contact {broker.name.split(' ')[0]}</h3>
                            <div className="space-y-3">
                                <a href={`tel:${broker.contact.phone}`} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                                    <Phone size={18} /> Call Now
                                </a>
                                <a href={`mailto:${broker.contact.email}`} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 font-medium transition-colors">
                                    <Mail size={18} /> Send Email
                                </a>
                                <a href={`https://wa.me/${broker.contact.phone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium transition-colors">
                                    <WhatsAppIcon size={18} /> WhatsApp
                                </a>
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 font-medium transition-colors">
                                    <Calendar size={18} /> Request Callback
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                            <h3 className="text-xl font-bold text-secondary-900 mb-4">Client Testimonials</h3>
                            <div className="space-y-4">
                                {broker.clientTestimonials.map((review, index) => (
                                    <div key={index} className="border-b border-secondary-100 pb-4 last:border-b-0">
                                        <div className="flex gap-1 text-yellow-500 mb-1">
                                            {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        </div>
                                        <p className="text-secondary-600 italic text-sm">"{review.comment}"</p>
                                        <p className="text-right text-sm font-medium text-secondary-800 mt-2">- {review.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedPropertyForSchedule && (
                <ScheduleViewingModal 
                    isOpen={isScheduleModalOpen}
                    onClose={() => setScheduleModalOpen(false)}
                    broker={brokerForModal}
                />
            )}
        </CustomerLayout>
    );
};

export default AgentProfile;

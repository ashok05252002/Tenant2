import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerLayout from '../components/CustomerLayout';
import HeroSearch from '../components/home/HeroSearch';
import ZoneProjects from '../components/home/ZoneProjects';
import NearbyProperties from '../components/home/NearbyProperties';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import FaqPreview from '../components/home/FaqPreview';
import ScheduleViewingModal from '../components/ScheduleViewingModal';
import { useAuth } from '../context/AuthContext';

const GuestBrowsing = () => {
  const navigate = useNavigate();
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedPropertyForSchedule, setSelectedPropertyForSchedule] = useState(null);
  const { handleGatedAction } = useAuth();

  const handleOpenScheduleModal = (property) => {
    handleGatedAction(() => {
        setSelectedPropertyForSchedule(property);
        setScheduleModalOpen(true);
    });
  };

  const landlordForModal = selectedPropertyForSchedule 
    ? selectedPropertyForSchedule.landlord
    : null;

  return (
    <CustomerLayout>
      <HeroSearch />
      <NearbyProperties onScheduleClick={handleOpenScheduleModal} />
      <Testimonials />
      <HowItWorks />
      <ZoneProjects onScheduleClick={handleOpenScheduleModal} />
      <FaqPreview />

      {selectedPropertyForSchedule && (
        <ScheduleViewingModal 
          isOpen={isScheduleModalOpen}
          onClose={() => setScheduleModalOpen(false)}
          landlord={landlordForModal}
        />
      )}
    </CustomerLayout>
  );
};

export default GuestBrowsing;

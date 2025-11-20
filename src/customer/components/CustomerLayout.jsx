import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

const CustomerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary-100 font-lato flex flex-col">
      <TopBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout;

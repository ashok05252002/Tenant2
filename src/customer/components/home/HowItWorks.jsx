import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Link, FileText, Key } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Search Properties', description: 'Explore our wide range of properties with detailed information and photos.' },
  { icon: MessageSquare, title: 'Contact Agent', description: 'Connect with the landlord or broker directly via call, email, or WhatsApp.' },
  { icon: Link, title: 'Receive Invite', description: 'The broker will send you a personal link to apply for the property.' },
  { icon: FileText, title: 'Apply Securely', description: 'Use your private link to fill out the application and complete verification.' },
  { icon: Key, title: 'Welcome Home', description: 'Finalize the process and move into your new home.' },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const HowItWorks = () => {
  return (
    <motion.section 
      className="bg-cream-100 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={titleVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900">How It Works</h2>
          <p className="text-lg text-secondary-600 mt-2">A simple and transparent process from start to finish.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-8 h-full w-px bg-cream-200 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
            variants={{
                visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={stepVariants} className="text-center flex flex-col items-center">
                  <div className="bg-primary-100 text-primary-700 w-20 h-20 rounded-full flex items-center justify-center border-4 border-cream-100 shadow-sm mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{step.title}</h3>
                  <p className="text-secondary-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;

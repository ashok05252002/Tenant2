import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'How do I apply for a property?', a: 'You can apply directly through the property listing page by clicking the "Apply" button. You will need to have a completed profile to submit an application.' },
  { q: 'What documents are required for verification?', a: 'Typically, we require a copy of your Passport/Civil ID, Visa/Residence Card, a recent salary slip, and a bank statement. All documents can be uploaded securely through your profile.' },
  { q: 'Can I schedule a viewing before applying?', a: 'Yes! You can schedule a viewing for any available property directly from its detail page. Choose a suitable date and time from the calendar.' },
  { q: 'How is the lease agreement signed?', a: 'Once your application is approved, the lease agreement will be sent to you for digital signature through our secure portal. No printing required!' },
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

const faqItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};


const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={faqItemVariants} className="border-b border-cream-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="font-medium text-secondary-800">{faq.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-secondary-600">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqPreview = () => {
  return (
    <motion.section 
      className="bg-cream-100 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={titleVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900">Frequently Asked Questions</h2>
          <p className="text-lg text-secondary-600 mt-2">Quick answers to common questions.</p>
        </motion.div>
        <motion.div 
            className="space-y-2"
            variants={{
                visible: { transition: { staggerChildren: 0.1 } }
            }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FaqPreview;

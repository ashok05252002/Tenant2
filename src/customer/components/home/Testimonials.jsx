import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Ahmed Al-Farsi', role: 'Tenant', quote: 'The platform made finding and applying for my new apartment incredibly easy. The whole process was digital and hassle-free!', avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Fatima Al-Balushi', role: 'Tenant', quote: 'I love the tenant portal! Paying rent and requesting maintenance has never been more convenient. Highly recommended.', avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'John Smith', role: 'Landlord', quote: 'As a landlord, this platform has streamlined how I manage my properties. Finding qualified tenants is faster than ever.', avatar: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/60.jpg' },
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

const testimonialCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Testimonials = () => {
  return (
    <motion.section 
      className="bg-cream-50 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={titleVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900">What Our Users Say</h2>
          <p className="text-lg text-secondary-600 mt-2">Real stories from satisfied tenants and landlords.</p>
        </motion.div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
                visible: { transition: { staggerChildren: 0.15 } }
            }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={testimonialCardVariants} className="bg-cream-100 rounded-xl shadow-sm border border-cream-200 p-8">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-secondary-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;

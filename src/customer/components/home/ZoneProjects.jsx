import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyCard from '../PropertyCard';
import { mockUnits } from '../../../data/units';

const zones = ['Al Qurum', 'Al Khuwair', 'Al Mouj', 'Bawshar', 'Ruwi'];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const ZoneProjects = ({ onScheduleClick }) => {
  const [activeZone, setActiveZone] = useState(zones[0]);

  const filteredProjects = useMemo(() => {
    return mockUnits.filter(p => p.location.includes(activeZone));
  }, [activeZone]);

  return (
    <motion.section 
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={titleVariants} className="text-center mb-12">
                <h2 className="text-4xl font-bold text-secondary-900">Browse New Projects in Muscat</h2>
                <motion.p 
                    className="text-lg text-secondary-600 mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Discover premier properties in Muscat's most sought-after neighborhoods.
                </motion.p>
            </motion.div>
            
            <motion.div 
                className="flex justify-center flex-wrap gap-3 mb-10"
                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
            {zones.map(zone => (
                <motion.button
                    key={zone}
                    onClick={() => setActiveZone(zone)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
                        activeZone === zone 
                        ? 'bg-primary-700 text-white shadow-lg scale-105' 
                        : 'bg-cream-100 text-secondary-700 border border-cream-200 hover:bg-cream-200 hover:border-secondary-300'
                    }`}
                    variants={tabVariants}
                >
                {zone}
                </motion.button>
            ))}
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeZone}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <PropertyCard key={project.id} property={project} onScheduleClick={onScheduleClick} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-secondary-600">No properties found in {activeZone}.</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    </motion.section>
  );
};

export default ZoneProjects;

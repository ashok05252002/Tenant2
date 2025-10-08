import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Award, MapPin } from 'lucide-react';
import { mockAgents } from '../../data/agents';

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

const buttonVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const agentCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const FeaturedAgents = () => {
    const navigate = useNavigate();
    const featured = mockAgents.slice(0, 3);

    return (
        <motion.section 
            className="bg-white py-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <motion.h2 variants={titleVariants} className="text-3xl font-bold text-secondary-900">Meet Our Top Agents</motion.h2>
                    <motion.button variants={buttonVariants} onClick={() => navigate('/agents')} className="text-primary-600 hover:text-primary-700 font-medium">
                        View All Agents →
                    </motion.button>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {featured.map(agent => (
                        <motion.div 
                            key={agent.id} 
                            variants={agentCardVariants}
                            onClick={() => navigate(`/agent/${agent.id}`)}
                            className="bg-secondary-50 rounded-xl border border-secondary-200 p-6 flex items-start gap-4 hover:shadow-lg hover:border-primary-300 transition-all cursor-pointer"
                        >
                            <img src={agent.photo} alt={agent.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-secondary-900">{agent.name}</h3>
                                    {agent.verified && <Award size={16} className="text-green-500 fill-current" />}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-secondary-600 mb-2">
                                    <Star size={14} className="text-yellow-500 fill-current" />
                                    <span>{agent.rating} ({agent.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-secondary-500">
                                    <MapPin size={12} />
                                    <span>{agent.serviceArea}</span>
                                </div>
                                <p className="text-sm text-secondary-700 mt-2 italic">"{agent.tagline}"</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default FeaturedAgents;

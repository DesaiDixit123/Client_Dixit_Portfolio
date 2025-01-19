import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Concept',
    description: 'Conceptualize Your Dream.',
    points: [
      'Reviewing any existing branding',
      'Target audience and competitors research',
      'Developing a strategy'
    ]
  },
  {
    title: 'Design',
    description: 'Craft a Stunning Design.',
    points: [
      'Developing wireframes and mockup',
      'Choosing typography, color palettes',
      'Refining the design'
    ]
  },
  {
    title: 'Webflow',
    description: 'Bring it to Life with Webflow.',
    points: [
      'Testing the website thoroughly launch',
      'Choosing typography, color palettes',
      'Refining the design'
    ]
  }
];

const ServiceBox = ({ title, description, points }) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 hover:border-green-400 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#F0F8FF',
        borderColor: '#4CAF50',
      }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-[24px] md:text-[30px] font-bold mb-2 text-gray-800 text-center">{title}</h2>
      <p className="mb-4 text-gray-600 font-medium text-center">{description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-500 text-sm md:text-base">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 md:px-12">
      <h1 className="text-[32px] md:text-[45px] font-bold mb-8 text-gray-600 text-center">
        Your Dream Website In Just <span className='text-green-500'>Few Steps</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {services.map((service, index) => (
          <ServiceBox 
            key={index} 
            title={service.title} 
            description={service.description} 
            points={service.points} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

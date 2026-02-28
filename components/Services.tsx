import React from 'react';
import { SERVICES } from '../constants';
import { Heart, Leaf, Brain, Settings, Cpu } from 'lucide-react';

const thrustAreas = [
  { icon: Heart,    label: 'Smart Healthcare & MedTech (IoT)', color: 'text-rose-500' },
  { icon: Leaf,     label: 'Sustainable AgriTech & Smart Farming', color: 'text-green-500' },
  { icon: Brain,    label: 'Artificial Intelligence & ML', color: 'text-blue-500' },
  { icon: Settings, label: 'Smart Manufacturing, Aerospace & Mechatronics', color: 'text-orange-500' },
  { icon: Cpu,      label: 'Electronics, Embedded Systems & VLSI', color: 'text-purple-500' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">What We Offer</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Incubation Support
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            End-to-end support across the full startup lifecycle — from idea validation to scale-up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <div className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Thrust Areas */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-8">
          <div className="text-center mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm">Domains</span>
            <h3 className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">Thrust Areas</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto">CNEST TBI focuses on deep-tech startups across these key domains.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {thrustAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <Icon className={`w-8 h-8 mb-3 ${area.color}`} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">{area.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
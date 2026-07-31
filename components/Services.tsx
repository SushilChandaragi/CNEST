import React from 'react';
import { SERVICES } from '../constants';
import { Heart, Leaf, Brain } from 'lucide-react';

const thrustAreas = [
  { icon: Heart,    label: 'Smart Healthcare & MedTech (IoT)', color: 'text-[#2C4035] dark:text-[#88B098]' },
  { icon: Leaf,     label: 'Sustainable AgriTech & Smart Farming', color: 'text-[#2C4035] dark:text-[#88B098]' },
  { icon: Brain,    label: 'Artificial Intelligence & ML', color: 'text-[#2C4035] dark:text-[#88B098]' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#F7F5F0] dark:bg-[#171614] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#3E5C4B] dark:text-[#88B098] font-mono text-xs uppercase tracking-widest font-bold">What We Offer</span>
          <h2 className="mt-2 text-3xl font-black text-[#2C2926] dark:text-[#F5F2ED] sm:text-4xl tracking-tight">
            Comprehensive Incubation Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#24221F] p-8 rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#E8ECE7] dark:bg-[#1E2B24] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2C4035] dark:group-hover:bg-[#88B098] transition-colors">
                  <div className="text-[#2C4035] dark:text-[#A8C3B3] group-hover:text-white dark:group-hover:text-[#171614] transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-3">{service.title}</h3>
                <p className="text-[#615C56] dark:text-[#A39E96] text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Thrust Areas */}
        <div className="bg-white dark:bg-[#24221F] rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] p-8">
          <div className="text-center mb-8">
            <span className="text-[#3E5C4B] dark:text-[#88B098] font-mono text-xs uppercase tracking-widest font-bold">Domains</span>
            <h3 className="mt-2 text-2xl font-black text-[#2C2926] dark:text-[#F5F2ED]">Thrust Areas</h3>
            <p className="mt-2 text-[#615C56] dark:text-[#A39E96] text-sm max-w-xl mx-auto">CNEST TBI focuses on deep-tech startups across these key domains.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {thrustAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl bg-[#F7F5F0] dark:bg-[#171614] border border-[#E3DFD7]/60 dark:border-[#33302B]/60 hover:border-[#3E5C4B] transition-colors">
                  <Icon className={`w-8 h-8 mb-3 ${area.color}`} />
                  <p className="text-xs font-bold text-[#2C2926] dark:text-[#F5F2ED] leading-snug">{area.label}</p>
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
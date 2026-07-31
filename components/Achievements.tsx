import React from 'react';
import { Award } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-[#F7F5F0] dark:bg-[#171614] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2C4035] via-[#1E2B24] to-[#121110] border border-[#34483E] shadow-xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/20 rounded-full blur-3xl"></div>
          
          <div className="relative px-8 py-16 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-[#88B098] backdrop-blur-sm mb-6 border border-[#88B098]/30 text-xs font-mono uppercase tracking-widest font-bold">
                <Award className="w-4 h-4 mr-2" />
                <span>Major Achievement</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Empowered by ₹10 Crores Funding
              </h2>
              <p className="text-stone-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
                We are proud to announce that the Government of Karnataka has entrusted CNEST with significant funding to accelerate the growth of the startup ecosystem in our region.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3.5 rounded-xl border border-white/15">
                  <span className="block text-xl font-black text-white">Govt of Karnataka</span>
                  <span className="text-stone-300 text-xs font-mono">Supported By</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3.5 rounded-xl border border-white/15">
                  <span className="block text-xl font-black text-white">Expanding</span>
                  <span className="text-stone-300 text-xs font-mono">Our Reach</span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 relative">
               {/* Decorative visual for achievement */}
               <div className="w-56 h-56 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                  <div className="text-center">
                    <span className="block text-5xl font-black text-white drop-shadow-md">₹10Cr</span>
                    <span className="text-[#88B098] font-mono text-xs font-bold tracking-widest uppercase mt-2 block">Grant Support</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
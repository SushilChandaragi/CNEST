import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F5F0] dark:bg-[#171614] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#2C2926] dark:text-[#F5F2ED] sm:text-4xl tracking-tight">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-[#24221F] p-8 rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#E8ECE7] dark:bg-[#1E2B24] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#2C4035] dark:text-[#A8C3B3]" />
            </div>
            <h3 className="text-xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-3">Our Mission</h3>
            <p className="text-[#615C56] dark:text-[#A39E96] leading-relaxed text-sm">
              To foster technology-based entrepreneurship by supporting innovators through structured mentoring, infrastructure, and ecosystem access — bridging academia, industry, and government to strengthen the "Beyond Bengaluru" startup ecosystem.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-[#24221F] p-8 rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#E8ECE7] dark:bg-[#1E2B24] rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#2C4035] dark:text-[#A8C3B3]" />
            </div>
            <h3 className="text-xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-3">Our Vision</h3>
            <p className="text-[#615C56] dark:text-[#A39E96] leading-relaxed text-sm">
              To build a globally competitive, self-sustaining startup ecosystem in North Karnataka — where regional talent drives deep-tech innovation at a global scale.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-white dark:bg-[#24221F] p-8 rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#E8ECE7] dark:bg-[#1E2B24] rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-[#2C4035] dark:text-[#A8C3B3]" />
            </div>
            <h3 className="text-xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-3">Our Goal</h3>
            <p className="text-[#615C56] dark:text-[#A39E96] leading-relaxed text-sm">
              To incubate 50+ startups by 2030, creating scalable enterprises across deep-tech domains — from AI and MedTech to AgriTech and embedded systems.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-[#2C4035] dark:bg-[#1E2B24] rounded-2xl overflow-hidden shadow-xl text-[#F7F5F0] border border-[#34483E]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-black text-[#F7F5F0] mb-4">Innovation Shouldn't Migrate. It Should Multiply.</h3>
                    <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                        CNEST TBI is supported by the <span className="font-bold text-white">Dept. of IT and BT, Government of Karnataka (TBI 2.0)</span> and anchored at KLE Technological University. We support startups from ideation to commercialization.
                    </p>
                    <ul className="text-stone-300 space-y-2 mb-6 text-sm">
                        <li className="flex items-start gap-2"><span className="text-[#88B098] font-bold mt-0.5">•</span>Section 8, professionally governed entity</li>
                        <li className="flex items-start gap-2"><span className="text-[#88B098] font-bold mt-0.5">•</span>5,100 sq. ft. dedicated incubation space</li>
                        <li className="flex items-start gap-2"><span className="text-[#88B098] font-bold mt-0.5">•</span>Strategic tri-state location: Karnataka · Goa · Maharashtra</li>
                    </ul>
                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">Govt</span>
                            <span className="text-stone-300 text-xs font-mono">Recognized</span>
                        </div>
                        <div className="h-10 w-px bg-stone-600"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white">₹10Cr+</span>
                            <span className="text-stone-300 text-xs font-mono">Government Funding</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                    <img 
                        src="/kle-building.jpg" 
                        alt="KLE Tech Campus - Innovation Hub" 
                        className="absolute inset-0 w-full h-full object-cover rounded-r-2xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
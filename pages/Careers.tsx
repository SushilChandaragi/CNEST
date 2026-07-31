import React from 'react';
import { Bell } from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

const Careers: React.FC = () => {
  useDocumentMetadata(
    "Careers & Opportunities | Join CNEST TBI",
    "Explore career opportunities, research projects, and student roles at CNEST Technological Incubator in Belagavi. Join us to support deep-tech startups."
  );
  return (
    <section className="pt-32 pb-20 bg-[#F7F5F0] dark:bg-[#171614] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-6 leading-tight tracking-tight">
            CNEST Recruitments
          </h1>
        </div>

        {/* No Openings Notice */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-[#24221F] rounded-2xl shadow-[0_4px_20px_rgba(44,41,38,0.03)] border border-[#E3DFD7] dark:border-[#33302B] p-16 flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-[#E8ECE7] dark:bg-[#1E2B24] rounded-full flex items-center justify-center">
              <Bell className="w-10 h-10 text-[#3E5C4B] dark:text-[#88B098]" />
            </div>
            <h2 className="text-2xl font-black text-[#2C2926] dark:text-[#F5F2ED]">
              No Current Openings
            </h2>
            <p className="text-[#615C56] dark:text-[#A39E96] text-base leading-relaxed font-normal">
              There are no active recruitment positions at this time. Please check back later for future opportunities at CNEST TBI.
            </p>
            <p className="text-xs font-mono text-[#615C56] dark:text-[#A39E96]">
              New positions will be announced here as they become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;

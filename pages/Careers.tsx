import React from 'react';
import { Bell } from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

const Careers: React.FC = () => {
  useDocumentMetadata(
    "Careers & Opportunities | Join CNEST TBI",
    "Explore career opportunities, research projects, and student roles at CNEST Technological Incubator in Belagavi. Join us to support deep-tech startups."
  );
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            CNEST Recruitments
          </h1>
        </div>

        {/* No Openings Notice */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-16 flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Bell className="w-10 h-10 text-blue-400 dark:text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              No Current Openings
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              There are no active recruitment positions at this time. Please check back later for future opportunities at CNEST TBI.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              New positions will be announced here as they become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;

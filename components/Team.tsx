import React from 'react';
import { Users } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet the Minds
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            The dedicated team behind CNEST working tirelessly to support your startup journey.
          </p>
        </div>

        {/* Empty State / Placeholder as requested */}
        <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 rounded-xl bg-white/50">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900">Team Section Under Construction</h3>
          <p className="text-gray-500 mt-2">We are currently updating our leadership board.</p>
          <p className="text-sm text-gray-400 mt-1">Check back soon to see the experts driving CNEST.</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
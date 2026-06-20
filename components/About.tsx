import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To foster technology-based entrepreneurship by supporting innovators through structured mentoring, infrastructure, and ecosystem access — bridging academia, industry, and government to strengthen the "Beyond Bengaluru" startup ecosystem.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To build a globally competitive, self-sustaining startup ecosystem in North Karnataka — where regional talent drives deep-tech innovation at a global scale.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Goal</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To incubate 50+ startups by 2030, creating scalable enterprises across deep-tech domains — from AI and MedTech to AgriTech and embedded systems.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Innovation Shouldn't Migrate. It Should Multiply.</h3>
                    <p className="text-blue-100 mb-4">
                        CNEST TBI is supported by the <span className="font-semibold text-white">Dept. of IT and BT, Government of Karnataka (TBI 2.0)</span> and anchored at KLE Technological University. We support startups from ideation to commercialization.
                    </p>
                    <ul className="text-blue-100 space-y-2 mb-6 text-sm">
                        <li className="flex items-start gap-2"><span className="text-blue-300 font-bold mt-0.5">•</span>Section 8, professionally governed entity</li>
                        <li className="flex items-start gap-2"><span className="text-blue-300 font-bold mt-0.5">•</span>5,100 sq. ft. dedicated incubation space</li>
                        <li className="flex items-start gap-2"><span className="text-blue-300 font-bold mt-0.5">•</span>Strategic tri-state location: Karnataka · Goa · Maharashtra</li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">Govt</span>
                            <span className="text-blue-200 text-sm">Recognized</span>
                        </div>
                        <div className="h-10 w-px bg-blue-700"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">₹10Cr+</span>
                            <span className="text-blue-200 text-sm">Government Funding</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                    <img 
                        src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=80" 
                        alt="KLE Tech Campus - Innovation Hub" 
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-900/40"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80" 
          alt="Innovation and Entrepreneurship" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          {/* Orientation Certificate Notification Ribbon */}
          <div className="mb-6 inline-block">
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-blue-100 text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300 shadow-sm group hover:border-blue-300"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>🎓 Attended <strong>FLEDGE &apos;26 Orientation</strong>? Claim your certificate</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-300" />
            </Link>
          </div>

          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
            Centre for Next Gen <span className="text-blue-400 dark:text-blue-300">Entrepreneurship</span> in Science & Technology
          </h1>
          <p className="mt-4 text-xl text-gray-300 dark:text-gray-200 mb-8 leading-relaxed">
            A Government of Karnataka–supported Technology Business Incubator at KLE Technological University, Belagavi. We provide the ecosystem, funding, and expertise to help deep-tech startups grow right where they are born.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              Join CNEST
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-400 dark:border-gray-300 text-base font-medium rounded-md text-gray-200 dark:text-gray-100 hover:text-white hover:border-white dark:hover:border-white transition-all duration-300 backdrop-blur-sm bg-white/5 dark:bg-white/10 transform hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
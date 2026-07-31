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
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171614]/85 via-[#1E2B24]/70 to-[#121110]/55"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          <h1 className="text-4xl tracking-tight font-black text-[#F5F2ED] sm:text-5xl md:text-6xl mb-6 leading-tight">
            Centre for Next Gen <span className="text-[#88B098]">Entrepreneurship</span> in Science & Technology
          </h1>
          <p className="mt-4 text-lg text-stone-300 mb-8 leading-relaxed font-normal">
            A Government of Karnataka–supported Technology Business Incubator at KLE Technological University, Belagavi. We provide the ecosystem, funding, and expertise to help deep-tech startups grow right where they are born.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-[#171614] bg-[#88B098] hover:bg-[#A8C3B3] transition-all duration-300 shadow-md hover:shadow-emerald-900/40 transform hover:-translate-y-0.5"
            >
              Join CNEST
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-stone-600 text-sm font-bold rounded-xl text-stone-200 hover:text-white hover:border-stone-300 transition-all duration-300 backdrop-blur-sm bg-white/5 transform hover:-translate-y-0.5"
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
import React from 'react';
import { Rocket, Lightbulb, Users, Cpu, Building2, MapPin } from 'lucide-react';

const WhoWeServe: React.FC = () => {
  const applicants = [
    {
      icon: Rocket,
      color: 'blue',
      title: 'Student Startups',
      desc: 'Innovative student teams with early-stage ideas or prototypes seeking structured incubation and mentorship.',
    },
    {
      icon: Lightbulb,
      color: 'indigo',
      title: 'Faculty-Led Startups',
      desc: 'Research-based ventures aiming to commercialize academic innovations and deep-tech solutions.',
    },
    {
      icon: Users,
      color: 'purple',
      title: 'Early-Stage Entrepreneurs',
      desc: 'Founders at ideation or validation stage looking to build, test, and scale their startups.',
    },
    {
      icon: Cpu,
      color: 'pink',
      title: 'Technology Innovators',
      desc: 'Individuals or teams developing cutting-edge technologies with strong application potential.',
    },
    {
      icon: Building2,
      color: 'orange',
      title: 'MSMEs with Innovation Potential',
      desc: 'Existing MSMEs seeking to innovate, upgrade technology, or develop new products and processes.',
    },
    {
      icon: MapPin,
      color: 'green',
      title: 'Startups from KA, Goa & MH',
      desc: 'Startups across Karnataka, Goa & Maharashtra leveraging CNEST TBI\'s infrastructure and ecosystem.',
    },
  ];

  const colorMap: Record<string, string> = {
    blue:   'bg-blue-50 dark:bg-blue-900/30 border-blue-600 dark:border-blue-400',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-600 dark:border-indigo-400',
    purple: 'bg-purple-50 dark:bg-purple-900/30 border-purple-600 dark:border-purple-400',
    pink:   'bg-pink-50 dark:bg-pink-900/30 border-pink-600 dark:border-pink-400',
    orange: 'bg-orange-50 dark:bg-orange-900/30 border-orange-600 dark:border-orange-400',
    green:  'bg-green-50 dark:bg-green-900/30 border-green-600 dark:border-green-400',
  };
  const iconMap: Record<string, string> = {
    blue:   'bg-blue-600 dark:bg-blue-500',
    indigo: 'bg-indigo-600 dark:bg-indigo-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
    pink:   'bg-pink-600 dark:bg-pink-500',
    orange: 'bg-orange-600 dark:bg-orange-500',
    green:  'bg-green-600 dark:bg-green-500',
  };

  return (
    <section className="py-20 bg-[#F7F5F0] dark:bg-[#171614] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-4 tracking-tight">
            Who Can Apply
          </h2>
          <p className="text-base text-[#615C56] dark:text-[#A39E96] max-w-2xl mx-auto font-normal">
            CNEST TBI welcomes innovators and entrepreneurs with technology-driven ideas across diverse stages and backgrounds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicants.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white dark:bg-[#24221F] rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] p-6 shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-[#2C4035] dark:bg-[#88B098] text-[#F7F5F0] dark:text-[#171614] rounded-xl mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#2C2926] dark:text-[#F5F2ED] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#615C56] dark:text-[#A39E96] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;

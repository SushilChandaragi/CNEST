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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Who Can Apply
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            CNEST TBI welcomes innovators and entrepreneurs with technology-driven ideas across diverse stages and backgrounds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applicants.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 rounded-xl border-l-4 transition-colors duration-300 ${colorMap[item.color]}`}
              >
                <div className={`flex-shrink-0 w-11 h-11 ${iconMap[item.color]} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
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

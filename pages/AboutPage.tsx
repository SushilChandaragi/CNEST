import React from 'react';
import { Target, Eye, Compass, Calendar, Rocket, Award, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const timelineEvents = [
    {
      year: "Foundation",
      title: "CNEST TBI Established",
      description: "CNEST TBI formally established at KLE Technological University under the GoK TBI 2.0 initiative, supported by the Dept. of IT and BT, Government of Karnataka.",
      icon: Rocket,
      color: "blue"
    },
    {
      year: "Infrastructure",
      title: "5,100 Sq. Ft. Incubation Space",
      description: "State-of-the-art 5,100 sq. ft. dedicated incubation facility commissioned with cubicles, collaboration areas, meeting rooms, and prototyping lab access at KLE Tech.",
      icon: Building2,
      color: "indigo"
    },
    {
      year: "Inaugural Cohort",
      title: "First Startups Incubated",
      description: "CNEST TBI welcomed its first cohort of innovators — student teams, faculty ventures, and early-stage entrepreneurs — beginning the journey from idea to enterprise.",
      icon: Users,
      color: "purple"
    },
    {
      year: "Goal: 2027",
      title: "20+ Active Startups",
      description: "Target to scale to 20+ active incubatees across deep-tech thrust areas — AI/ML, MedTech, AgriTech, Smart Manufacturing, and Electronics & VLSI.",
      icon: Award,
      color: "pink"
    },
    {
      year: "Vision: 2030",
      title: "50+ Startups & Tri-State Hub",
      description: "Become the leading deep-tech incubator for the Karnataka–Goa–Maharashtra corridor, graduating 50+ startups and establishing Belagavi as a 'Beyond Bengaluru' innovation hub.",
      icon: Rocket,
      color: "orange"
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About CNEST
          </h1>
        </div>

        {/* Mission, Vision, Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To foster technology-based entrepreneurship by supporting innovators through structured mentoring, infrastructure, and ecosystem access — enabling commercialization of research and bridging academia, industry, and government to strengthen North Karnataka's innovation ecosystem.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To build a globally competitive, self-sustaining startup ecosystem in North Karnataka — empowering innovators in science, engineering, and deep technology so that regional talent drives innovation at a global scale.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-purple-100 dark:border-purple-900 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Goal</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To incubate 50+ high-impact startups by 2030 across deep-tech domains — creating meaningful employment, solving real-world problems, and establishing Belagavi as a nationally recognised innovation destination.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Milestones &amp; Future Goals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From our founding to our 2030 vision — key steps in building North Karnataka’s deep-tech startup hub
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all transform hover:scale-105">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                          <Calendar className="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Icon */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue-500 shadow-lg flex items-center justify-center z-10">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${event.color}-400 to-${event.color}-600 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Innovation Shouldn’t Migrate. It Should Multiply.
              </h3>
              <p className="text-blue-100 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                Anchored at KLE Technological University and backed by the <span className="font-semibold text-white">Dept. of IT &amp; BT, GoK (TBI 2.0)</span>, CNEST TBI bridges academia, industry, and government to power the "Beyond Bengaluru" startup ecosystem.
              </p>
              <ul className="text-blue-100 dark:text-gray-300 space-y-2 mb-6 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-300 font-bold mt-0.5">•</span>Section 8 company with transparent, professional governance</li>
                <li className="flex items-start gap-2"><span className="text-blue-300 font-bold mt-0.5">•</span>Strong academic &amp; research backbone at KLE Tech</li>
                <li className="flex items-start gap-2"><span className="text-blue-300 font-bold mt-0.5">•</span>Strategic location at the Karnataka · Goa · Maharashtra tri-state junction</li>
              </ul>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <span className="block text-4xl font-bold text-white mb-1">₹10Cr+</span>
                  <span className="text-blue-200 text-sm">Government Funding</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <span className="block text-3xl font-bold text-white mb-1">5,100</span>
                  <span className="text-blue-200 text-sm">Sq. Ft. Incubation Space</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <span className="block text-4xl font-bold text-white mb-1">Govt</span>
                  <span className="text-blue-200 text-sm">Recognized (GoK TBI 2.0)</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <span className="block text-4xl font-bold text-white mb-1">50+</span>
                  <span className="text-blue-200 text-sm">Target Startups by 2030</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop" 
                alt="KLE Tech Campus" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

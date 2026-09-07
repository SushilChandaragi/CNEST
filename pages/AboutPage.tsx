import React from 'react';
import {
  ArrowRight,
  Award,
  Banknote,
  Brain,
  Building2,
  Compass,
  Cpu,
  Eye,
  FileText,
  Heart,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Target,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

const floatingAnimationStyles = `
  @keyframes cnest-float {
    0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
    50% { transform: translate3d(0, -12px, 0) rotate(2deg); }
  }

  @keyframes cnest-float-reverse {
    0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
    50% { transform: translate3d(0, 10px, 0) rotate(-3deg); }
  }

  .cnest-float-slow,
  .cnest-float-delayed,
  .cnest-float-reverse {
    will-change: transform;
  }

  .cnest-float-slow {
    animation: cnest-float 9s ease-in-out infinite;
  }

  .cnest-float-delayed {
    animation: cnest-float 7s ease-in-out 1.2s infinite;
  }

  .cnest-float-reverse {
    animation: cnest-float-reverse 11s ease-in-out 0.6s infinite;
  }

  .cnest-reveal,
  .cnest-reveal-stagger > * {
    opacity: 0;
    transform: translate3d(0, 24px, 0) scale(0.98);
    transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--cnest-reveal-delay, 0ms);
  }

  .cnest-reveal-pop {
    transform: translate3d(0, 22px, 0) scale(0.94);
  }

  .cnest-reveal.is-visible,
  .cnest-reveal-stagger.is-visible > * {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }

  .cnest-reveal-stagger > :nth-child(2) { --cnest-reveal-delay: 80ms; }
  .cnest-reveal-stagger > :nth-child(3) { --cnest-reveal-delay: 160ms; }
  .cnest-reveal-stagger > :nth-child(4) { --cnest-reveal-delay: 240ms; }
  .cnest-reveal-stagger > :nth-child(5) { --cnest-reveal-delay: 320ms; }
  .cnest-reveal-stagger > :nth-child(6) { --cnest-reveal-delay: 400ms; }
  .cnest-reveal-stagger > :nth-child(7) { --cnest-reveal-delay: 480ms; }
  .cnest-reveal-stagger > :nth-child(8) { --cnest-reveal-delay: 560ms; }

  @media (prefers-reduced-motion: reduce) {
    .cnest-float-slow,
    .cnest-float-delayed,
    .cnest-float-reverse {
      animation: none;
    }

    .cnest-reveal,
    .cnest-reveal-stagger > * {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
`;

const thrustAreas = [
  {
    icon: Heart,
    title: 'Smart Healthcare & MedTech',
    description: 'IoT, diagnostics, remote monitoring and digital health.',
    cardClass: 'border-rose-100 dark:border-rose-900/60',
    iconClass: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300',
  },
  {
    icon: Leaf,
    title: 'Sustainable AgriTech',
    description: 'Precision farming, smart irrigation and data-driven agriculture.',
    cardClass: 'border-emerald-100 dark:border-emerald-900/60',
    iconClass: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Automation, computer vision, predictive analytics and decision support.',
    cardClass: 'border-blue-100 dark:border-blue-900/60',
    iconClass: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300',
  },
  {
    icon: Building2,
    title: 'Smart Manufacturing & Aerospace',
    description: 'Industry 4.0, robotics, automation, digital manufacturing and aerospace.',
    cardClass: 'border-indigo-100 dark:border-indigo-900/60',
    iconClass: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300',
  },
  {
    icon: Cpu,
    title: 'Electronics, Embedded Systems & VLSI',
    description: 'IoT devices, embedded platforms, semiconductor and VLSI innovation.',
    cardClass: 'border-violet-100 dark:border-violet-900/60',
    iconClass: 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300',
  },
];

const offerings = [
  {
    icon: Lightbulb,
    title: 'Idea & Product Development',
    description: 'Idea validation, problem definition and product roadmaps aligned with market needs.',
  },
  {
    icon: Rocket,
    title: 'Startup Incubation',
    description: 'Structured support to turn innovative ideas into viable, scalable ventures.',
  },
  {
    icon: Users,
    title: 'Mentorship & Expertise',
    description: 'Access to industry mentors, founders, CXOs, faculty researchers and technical advisors.',
  },
  {
    icon: Cpu,
    title: 'Prototype & MVP Development',
    description: 'Technical support, university labs and prototyping facilities for building and testing products.',
  },
  {
    icon: Compass,
    title: 'Business & Market Support',
    description: 'Customer discovery, business models, pricing, positioning and go-to-market strategy.',
  },
  {
    icon: Banknote,
    title: 'Funding Facilitation',
    description: 'Support for GoK, NAIN, SISF, BIRAC and other schemes, plus angel, VC and investor connections.',
  },
  {
    icon: FileText,
    title: 'IP & Legal Support',
    description: 'Guidance on patents, IP strategy, technology transfer, incorporation, contracts and compliance.',
  },
  {
    icon: Building2,
    title: 'Industry & Ecosystem Connections',
    description: 'Links to industries, MSMEs, investors, government agencies and academic researchers.',
  },
];

const infrastructure = [
  {
    icon: Building2,
    title: '5,100 sq. ft. Incubation Space',
    description: 'Dedicated workspace with furnished cubicles and collaboration areas.',
  },
  {
    icon: Users,
    title: 'Meeting Rooms & Auditorium',
    description: 'For mentoring, reviews, training, investor interactions and demo days.',
  },
  {
    icon: Cpu,
    title: 'Labs & Prototyping',
    description: 'Access to university laboratories and prototyping facilities for development, testing and validation.',
  },
];

const applicants = [
  'Student startups',
  'Faculty-led ventures',
  'Early-stage entrepreneurs',
  'Technology innovators',
  'MSMEs with innovation potential',
  'Startups from Karnataka, Goa & Maharashtra',
];

const reasons = [
  {
    icon: Award,
    title: 'Government Supported',
    description: 'Backed by the Government of Karnataka under TBI 2.0.',
  },
  {
    icon: Building2,
    title: 'Academic & Research Backbone',
    description: 'Anchored at KLE Technological University with access to academic expertise, research and laboratories.',
  },
  {
    icon: Rocket,
    title: 'Deep-Tech & Impact Focus',
    description: 'Supports technology solutions addressing real-world economic and societal challenges.',
  },
  {
    icon: MapPin,
    title: 'Tri-State Advantage',
    description: 'Belagavi connects talent, markets and industries across Karnataka, Goa and Maharashtra.',
  },
  {
    icon: Users,
    title: 'Strong Ecosystem',
    description: 'Industry collaborations, alumni and mentor networks, and national and international exposure.',
  },
];

const AboutPage: React.FC = () => {
  useDocumentMetadata(
    'About CNEST TBI | Technology Business Incubator in Belagavi',
    'Learn how CNEST TBI supports science, engineering and deep-tech innovators through incubation, mentoring, infrastructure, research commercialization and ecosystem connections.'
  );

  const pageRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const revealElements = page.querySelectorAll<HTMLElement>('.cnest-reveal, .cnest-reveal-stagger');
    const showAll = () => revealElements.forEach((element) => element.classList.add('is-visible'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={pageRef} className="pt-28 pb-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <style>{floatingAnimationStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page introduction */}
        <header className="relative max-w-5xl mx-auto text-center mb-20 cnest-reveal cnest-reveal-pop">
          <div className="absolute top-8 left-[8%] w-16 h-16 rounded-full bg-blue-200/60 dark:bg-blue-500/20 blur-sm cnest-float-slow pointer-events-none" aria-hidden="true"></div>
          <div className="absolute top-24 right-[7%] w-10 h-10 rounded-xl bg-indigo-200/70 dark:bg-indigo-400/20 rotate-12 cnest-float-delayed pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true"></span>
              CNEST TBI
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Centre for Next-Gen{' '}
              <span className="text-blue-600 dark:text-blue-400">Entrepreneurs</span>{' '}
              in Science & Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A Government of Karnataka-supported Technology Business Incubator at KLE Technological University, Dr. M. S. Sheshgiri Campus, Belagavi.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
              <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                Government of Karnataka | TBI 2.0
              </span>
              <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                KLE Technological University
              </span>
            </div>
          </div>
        </header>

        {/* About CNEST */}
        <section id="about-cnest" className="mb-24 cnest-reveal" aria-labelledby="about-cnest-heading">
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute -top-10 right-[18%] w-28 h-28 rounded-full bg-blue-300/10 blur-xl cnest-float-reverse pointer-events-none" aria-hidden="true"></div>
            <div className="absolute -bottom-8 left-[42%] w-20 h-20 rounded-2xl bg-indigo-300/10 rotate-12 cnest-float-delayed pointer-events-none" aria-hidden="true"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-14">
                <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-4">About CNEST TBI</p>
                <h2 id="about-cnest-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  From promising ideas to technology-driven ventures.
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  CNEST TBI is a technology business incubator at KLE Technological University, supported by the Government of Karnataka under TBI 2.0. It helps innovators and technology-driven startups move from idea validation and prototyping to commercialization and scale-up, with a focus on North Karnataka and the &quot;Beyond Bengaluru&quot; ecosystem.
                </p>
              </div>
              <div className="lg:col-span-2 bg-white/10 border-t lg:border-t-0 lg:border-l border-white/20 p-8 md:p-12 flex flex-col justify-center gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center cnest-float-slow">
                    <Rocket className="w-7 h-7 text-blue-200" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-white">Idea to scale</p>
                    <p className="text-blue-200 text-sm">Structured startup support</p>
                  </div>
                </div>
                <div className="h-px bg-white/20" aria-hidden="true"></div>
                <div>
                  <p className="text-4xl font-extrabold text-white">North Karnataka</p>
                  <p className="text-blue-200 text-sm">Powering the Beyond Bengaluru ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and mission */}
        <section id="vision-mission" className="mb-24 cnest-reveal" aria-labelledby="vision-mission-heading">
          <div className="text-center mb-12">
            <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Vision & Mission</p>
            <h2 id="vision-mission-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Building the region&apos;s next generation of innovators
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 cnest-reveal-stagger">
            <article className="group bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border-2 border-indigo-100 dark:border-indigo-900/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-7 h-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Build a globally competitive, self-sustaining startup ecosystem in North Karnataka by empowering science, engineering and deep-tech innovators.
              </p>
            </article>
            <article className="group bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border-2 border-blue-100 dark:border-blue-900/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Support technology-based entrepreneurship through mentoring, infrastructure, research commercialization and strong academia-industry-government connections.
              </p>
            </article>
          </div>
        </section>

        {/* Thrust areas */}
        <section id="thrust-areas" className="mb-24 cnest-reveal" aria-labelledby="thrust-areas-heading">
          <div className="max-w-3xl mb-10">
            <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our focus</p>
            <h2 id="thrust-areas-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Thrust areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We focus on technology-led ventures that can create measurable economic and societal impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 cnest-reveal-stagger">
            {thrustAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${area.cardClass} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${area.iconClass}`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">{area.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section id="what-we-offer" className="mb-24 cnest-reveal" aria-labelledby="what-we-offer-heading">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">What CNEST offers</p>
            <h2 id="what-we-offer-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Support for every stage of the journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Practical support, expert guidance and ecosystem access to help founders move confidently from concept to scale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 cnest-reveal-stagger">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article
                  key={offering.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">{offering.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{offering.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="mb-24 cnest-reveal" aria-labelledby="infrastructure-heading">
          <div className="bg-gray-900 dark:bg-gray-950 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-3">Infrastructure</p>
                <h2 id="infrastructure-heading" className="text-3xl md:text-4xl font-extrabold text-white">
                  Space and facilities to build what&apos;s next
                </h2>
              </div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white self-start lg:self-auto">
                <Building2 className="w-5 h-5 text-blue-300" aria-hidden="true" />
                <span className="font-bold">5,100 sq. ft. dedicated incubation space</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 cnest-reveal-stagger">
              {infrastructure.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group p-6 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-300 mb-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Applicants */}
        <section id="who-can-apply" className="mb-24 cnest-reveal" aria-labelledby="who-can-apply-heading">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Who can apply</p>
              <h2 id="who-can-apply-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                If you are building with technology, we want to hear from you.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                CNEST welcomes innovators and entrepreneurs at different stages, from first idea to early scale-up.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 cnest-reveal-stagger">
              {applicants.map((applicant) => (
                <div key={applicant} className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="w-8 h-8 flex-shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{applicant}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CNEST */}
        <section id="why-cnest" className="mb-24 cnest-reveal" aria-labelledby="why-cnest-heading">
          <div className="text-center mb-12">
            <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Why CNEST</p>
            <h2 id="why-cnest-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              A strong foundation for ambitious founders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cnest-reveal-stagger">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="text-5xl font-black text-blue-100 dark:text-blue-900/50 absolute top-4 right-5" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">{reason.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Location and governance */}
        <section id="location-governance" className="mb-24 cnest-reveal" aria-labelledby="location-governance-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 cnest-reveal-stagger">
            <article className="group bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-orange-600 dark:text-orange-400" aria-hidden="true" />
              </div>
              <p className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">Location advantage</p>
              <h2 id="location-governance-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Belagavi connects three innovation corridors.
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Strategically located at the Karnataka-Goa-Maharashtra intersection, Belagavi has an emerging EV and drone ecosystem, a strong MSME and manufacturing base, and access to academic and medical institutions.
              </p>
            </article>
            <article className="group bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-purple-600 dark:text-purple-400" aria-hidden="true" />
              </div>
              <p className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-sm mb-3">Governance</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Professional, transparent and accountable.
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                CNEST is a Section 8 Company with transparent processes, separate audited accounts, structured committees, and alignment with GoK and KITS guidelines.
              </p>
            </article>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="join-cnest" className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white cnest-reveal cnest-reveal-pop" aria-labelledby="join-cnest-heading">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-3">Join the CNEST journey</p>
              <h2 id="join-cnest-heading" className="text-3xl md:text-4xl font-extrabold mb-5">
                Building Startups. Backing Innovation.
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                For founders, innovators, mentors, investors and collaborators looking to turn ideas into technology-driven ventures.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-4 text-blue-50">
              <a href="mailto:arun.tigadi@klescet.ac.in" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-200" aria-hidden="true" />
                <span>arun.tigadi@klescet.ac.in</span>
              </a>
              <a href="tel:+919886719354" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-200" aria-hidden="true" />
                <span>+91 98867 19354</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-200 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>KLE Technological University, Dr. M. S. Sheshgiri Campus, Belagavi - 590008</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Connect with CNEST
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <p className="border-t border-white/20 mt-10 pt-6 text-center text-blue-100 font-semibold">
            Powering &quot;Beyond Bengaluru&quot;.
          </p>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;

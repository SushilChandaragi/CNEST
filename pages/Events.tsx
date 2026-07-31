import React from 'react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import EventCard from '../components/EventCard';

const Events: React.FC = () => {
  useDocumentMetadata(
    "Events | CNEST",
    "Explore upcoming and past events conducted by CNEST."
  );

  return (
    <section className="pt-32 pb-20 bg-[#F7F5F0] dark:bg-[#171614] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-6 tracking-tight">
            Events
          </h1>

          <p className="text-base text-[#615C56] dark:text-[#A39E96] max-w-3xl mx-auto font-normal">
            Explore webinars, startup pitches, incubation programs,
            workshops, hackathons and innovation events organized by CNEST.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-8 border-l-4 border-[#3E5C4B] dark:border-[#88B098] pl-4 tracking-tight">
            Upcoming Events
          </h2>

          <div className="bg-white dark:bg-[#24221F] rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] p-8">
            <h3 className="text-2xl font-bold text-[#2C2926] dark:text-[#F5F2ED] mb-3">
              No Upcoming Events
            </h3>

            <p className="text-[#615C56] dark:text-[#A39E96] text-sm">
              There are currently no upcoming events. Please check back later for
              new webinars, workshops and startup programs.
            </p>
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-8 border-l-4 border-[#3E5C4B] dark:border-[#88B098] pl-4 tracking-tight">
            Past Events
          </h2>
          <div className="mb-8">
  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
    Event Archive
  </h3>

  <p className="text-gray-600 dark:text-gray-400 mt-2">
    Browse the archive of CNEST's past workshops, hackathons, startup pitches,
    technical training programs, and innovation events.
  </p>
</div>

          <EventCard
  title="Initial Startup Pitch Presentation"
  images={[
    "/events/startup-pitch/img1.jpg",
    "/events/startup-pitch/img2.jpg"
  ]}
  description="KLE-CNEST – Centre for Next-Gen Entrepreneurship in Science and Technology Foundation successfully conducted its Initial Startup Pitch Presentation, where promising startups showcased their innovative ideas before an expert evaluation panel. The session provided founders with valuable feedback and an opportunity to take the first step towards incubation at CNEST."
  highlights={[
    "Startup Idea Presentations",
    "Expert Evaluation Panel",
    "Mentorship & Feedback",
    "Incubation Opportunity"
  ]}
/>
          <EventCard
  title="3-Day Training on Real-Time Simulation of Electrical Systems"
  date="22–24 June 2026"
  images={[
    "/events/casper-lab/poster.jpg",
    "/events/casper-lab/inauguration.jpg",
    "/events/casper-lab/day1.jpg",
    "/events/casper-lab/day2.jpg",
    "/events/casper-lab/day2(2).jpg",
    "/events/casper-lab/day3.jpg"
  ]}
  description="The Centre for Advanced Smart Power and Energy Research (CASPER) Lab, Department of Electrical and Electronics Engineering, KLE Technological University, in association with KLE-CNEST and OPAL-RT Technologies, organized a three-day hands-on training program on Real-Time Simulation of Electrical Systems."
  highlights={[
    "Hands-on OPAL-RT RT-LAB Training",
    "Hardware-in-the-Loop (HIL) Simulation",
    "Smart Grid Applications",
    "E-Certificates for Participants"
  ]}
/>
<EventCard
  title="Asteria 2026: Code the Cosmos"
  date="30 April – 3 May 2026"
  images={[
    "/events/asteria/poster.jpg"
  ]}
  description="Asteria 2026: Code the Cosmos was a national-level technical festival organized by the Arcstack Tech Club in association with the Department of Computer Science and Engineering, CSE (AI), and CNEST TBI 2.0."
  highlights={[
    "24-Hour Hackathon",
    "Coding Competitions",
    "UI/UX Challenge",
    "Industry Panel Discussions"
  ]}
/>
<EventCard
  title="Civilathon"
  date="28–29 April 2026"
  images={[
    "/events/civilathon/poster.jpg",
    "/events/civilathon/1.jpg",
    "/events/civilathon/2.jpg",
    "/events/civilathon/3.jpg",
    "/events/civilathon/day1.jpg",
    "/events/civilathon/day2.jpg"
  ]}
  description="CIVILATHON, organized by the Department of Civil Engineering at KLE Technological University in association with CNEST TBI 2.0, encouraged students to ideate, build, and exhibit innovative engineering solutions."
  highlights={[
    "Ideate, Build & Exhibit",
    "Model Building",
    "Innovation Challenge",
    "Project Presentation"
  ]}
/>
<EventCard
  title="Resonance 2.0"
  date="16–17 April 2026"
  images={[
    "/events/resonance-2/poster.jpg",
    "/events/resonance-2/inauguration.jpg",
    "/events/resonance-2/image1.jpg",
    "/events/resonance-2/image2.jpg",
    "/events/resonance-2/image3.jpg",
    "/events/resonance-2/img1.jpg"
  ]}
  description="Resonance 2.0, organized by the Department of Electronics and Communication Engineering in association with CNEST TBI 2.0, brought together students for a two-day innovation event featuring hardware hackathons, poster presentations, project demonstrations, and technical competitions."
  highlights={[
    "Hardware Hackathon",
    "Spinovate Poster Presentation",
    "Transistron Project Showcase",
    "Prize Distribution"
  ]}
/>
<EventCard
  title="Innoverse 2025"
  date="24 December 2025"
  images={[
    "/events/innoverse/img1.jpg",
    "/events/innoverse/img2.jpg",
    "/events/innoverse/img3.jpg",
    "/events/innoverse/img4.jpg"
  ]}
  description="INNOVERSE 2025, organized by KLE CTIE in association with Make in BVB (MiB), encouraged students to showcase creativity, teamwork, and innovation through engaging challenges and collaborative activities."
  highlights={[
    "Treasure Hunt",
    "Buildathon",
    "Innovation & Creativity",
    "Team Collaboration"
  ]}
/>
        </div>

      </div>
    </section>
  );
};

export default Events;
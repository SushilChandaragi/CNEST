import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-[#F7F5F0] dark:bg-[#171614] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#2C2926] dark:text-[#F5F2ED] sm:text-4xl tracking-tight">
            Meet the Minds
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#615C56] dark:text-[#A39E96] mx-auto font-normal">
            The dedicated team behind CNEST working tirelessly to support your startup journey.
          </p>
        </div>

        {/* Coordinator Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-[#24221F] rounded-2xl shadow-[0_4px_20px_rgba(44,41,38,0.03)] overflow-hidden border border-[#E3DFD7] dark:border-[#33302B] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 p-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-xl overflow-hidden bg-[#F7F5F0] dark:bg-[#171614] mx-auto md:mx-0 shadow-md border border-[#E3DFD7] dark:border-[#33302B]">
                  <img 
                    src="/arunsir.png" 
                    alt="Dr. Arun Sadanand Tigadi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-1">
                  Dr. Arun Sadanand Tigadi
                </h3>
                <p className="text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] uppercase tracking-wider mb-4">
                  PI CNEST TBI 2.0 | Associate Professor, Dept of E and C
                </p>
                <p className="text-[#615C56] dark:text-[#A39E96] text-sm leading-relaxed mb-5 font-normal">
                  With 15+ years of experience and a Ph.D. in Electrical &amp; Electronics Engineering, 
                  Dr. Tigadi leads CNEST in shaping the future of technology and entrepreneurship in North Karnataka.
                </p>

                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start mb-5">
                  <a
                    href="mailto:cnest.mss@kletech.ac.in"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] hover:underline transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    cnest.mss@kletech.ac.in
                  </a>
                  <a
                    href="tel:08312491836"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] hover:underline transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    0831-2491836
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dr-arun-sadanand-tigadi-2b024055/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] hover:underline transition-colors"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    LinkedIn Profile
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="inline-block px-6 py-2.5 bg-[#2C4035] hover:bg-[#1E2B24] dark:bg-[#88B098] dark:hover:bg-[#A8C3B3] text-[#F7F5F0] dark:text-[#171614] font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xs"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
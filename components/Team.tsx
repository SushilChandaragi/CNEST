import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Meet the Minds
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            The dedicated team behind CNEST working tirelessly to support your startup journey.
          </p>
        </div>

        {/* Coordinator Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 p-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 mx-auto md:mx-0 shadow-md">
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Dr. Arun Sadanand Tigadi
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  PI , CEO CNEST TBI 2.0 | Associate Professor, Dept of E and C
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                  With 15+ years of experience and a Ph.D. in Electrical &amp; Electronics Engineering, 
                  Dr. Tigadi leads CNEST in shaping the future of technology and entrepreneurship in North Karnataka.
                </p>

                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start mb-5">
                  <a
                    href="arun.tigadi@klescet.ac.in"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    cnest.mss@kletech.ac.in
                  </a>
                  <a
                    href="tel:08312491836"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    0831-2491836
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dr-arun-sadanand-tigadi-2b024055/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    LinkedIn Profile
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
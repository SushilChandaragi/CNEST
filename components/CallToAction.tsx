import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2C4035] via-[#1E2B24] to-[#121110] text-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Ready to Innovate */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Ready to Innovate?
            </h2>
            <p className="text-base text-stone-300 mb-8 leading-relaxed font-normal">
              Whether you have a breakthrough idea or an early-stage startup, CNEST is here to help you scale. Get in touch with us to apply for incubation or seed funding.
            </p>

            {/* Visit Us */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-6 h-6 text-[#88B098] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-black mb-1 text-white">Visit Us</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    CNEST, CTIE Office<br />
                    KLE Technological University<br />
                    Udyambagh, Belgaum, Karnataka
                  </p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-[#88B098] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-black mb-1 text-white">Email Us</h3>
                  <a 
                    href="mailto:cnest.mss@kletech.ac.in" 
                    className="text-stone-300 hover:text-white transition-colors text-sm font-mono"
                  >
                    cnest.mss@kletech.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-[#88B098] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-black mb-1 text-white">Call Us</h3>
                  <a 
                    href="tel:08312491836" 
                    className="text-stone-300 hover:text-white transition-colors text-sm font-mono"
                  >
                    0831 - 2491836
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Apply for Incubation */}
          <div className="bg-[#F7F5F0] dark:bg-[#24221F] rounded-2xl p-10 shadow-2xl border border-[#E3DFD7] dark:border-[#33302B]">
            <h2 className="text-3xl md:text-4xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-4 text-center tracking-tight">
              Apply for Incubation
            </h2>
            <p className="text-[#615C56] dark:text-[#A39E96] text-center mb-8 text-base font-normal">
              Fill out our inquiry form and our team will get back to you with the next steps.
            </p>

            <Link
              to="/contact#contact-form"
              className="flex items-center justify-center gap-3 w-full bg-[#2C4035] hover:bg-[#1E2B24] dark:bg-[#88B098] dark:hover:bg-[#A8C3B3] text-[#F7F5F0] dark:text-[#171614] font-bold text-base py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Join CNEST
              <ExternalLink className="w-5 h-5" />
            </Link>

            <p className="text-[#615C56] dark:text-[#A39E96] text-xs text-center mt-4 font-mono">
              *By clicking, you will be redirected to the contact form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

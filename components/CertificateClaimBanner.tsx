import React, { useState } from 'react';
import { Search, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CertificateClaimBanner: React.FC = () => {
  const [srn, setSrn] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = srn.trim().toUpperCase();
    if (clean) {
      navigate(`/certificates?srn=${encodeURIComponent(clean)}`);
    } else {
      navigate('/certificates');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Claim Your <span className="text-blue-400">FLEDGE &apos;26</span> Certificate
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Attended the Student Orientation? Enter your University SRN to verify your attendance and download your official participation PDF.
            </p>
          </div>

          {/* Right Wide Search Bar */}
          <div className="w-full lg:max-w-md">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300">
                  <GraduationCap className="w-5 h-5 text-blue-300" />
                </div>
                <input
                  type="text"
                  value={srn}
                  onChange={(e) => setSrn(e.target.value.toUpperCase())}
                  placeholder="Enter SRN (e.g. 02FE23BCS136)"
                  autoCapitalize="characters"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-blue-300/30 text-white placeholder:text-blue-200/70 placeholder:font-normal placeholder:normal-case font-mono font-bold text-base focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md uppercase transition-all"
                />
              </div>

              <button
                type="submit"
                className="py-3.5 px-6 rounded-xl bg-blue-500 hover:bg-blue-400 active:scale-[0.98] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Verify</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificateClaimBanner;

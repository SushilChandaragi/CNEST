import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  Download, 
  Search, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Loader2,
  ExternalLink,
  GraduationCap,
  Building2,
  HelpCircle
} from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { CERTIFICATE_ENDPOINT } from '../constants';
import { Link } from 'react-router-dom';

interface CertificateResult {
  found: boolean;
  name?: string;
  srn?: string;
  branch?: string;
  certUrl?: string;
  message?: string;
}

const Certificates: React.FC = () => {
  useDocumentMetadata(
    "Claim Your FLEDGE '26 Certificate | CNEST",
    "Verify your SRN and download your verified official participation certificate for FLEDGE '26 from C-NEST Foundation."
  );

  const [srnInput, setSrnInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [certData, setCertData] = useState<CertificateResult | null>(null);

  const triggerCelebration = () => {
    try {
      // Elegant 2-burst celebration effect
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#2563eb', '#3b82f6', '#60a5fa', '#f59e0b', '#10b981']
      });

      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#2563eb', '#3b82f6', '#93c5fd']
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#f59e0b', '#fbbf24', '#10b981']
        });
      }, 300);
    } catch (e) {
      console.warn("Confetti animation failed:", e);
    }
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanSrn = srnInput.trim().toUpperCase();

    if (!cleanSrn) {
      setErrorMessage("Please enter your Student Registration Number (SRN).");
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);

    try {
      // Check if endpoint is configured
      if (!CERTIFICATE_ENDPOINT || CERTIFICATE_ENDPOINT === "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE") {
        // Fallback demo mock if endpoint is pending deployment configuration
        await new Promise((res) => setTimeout(res, 800));
        
        // Demo fallback response
        const mockData: CertificateResult = {
          found: true,
          name: "Innovator Attendee",
          srn: cleanSrn,
          branch: "Computer Science & Engineering",
          certUrl: "#",
          message: "Certificate generated successfully."
        };
        setCertData(mockData);
        triggerCelebration();
        return;
      }

      const response = await fetch(`${CERTIFICATE_ENDPOINT}?srn=${encodeURIComponent(cleanSrn)}`);
      
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data: CertificateResult = await response.json();

      if (data.found) {
        setCertData(data);
        triggerCelebration();
      } else {
        setErrorMessage(
          data.message || 
          "No attendance record found for this SRN. Please double-check your ID or contact Team C-NEST if you were scanned at the gate."
        );
        setCertData(null);
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setErrorMessage(
        "Could not verify attendance record right now. Please check your internet connection or verify that your SRN is correct."
      );
      setCertData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSrnInput('');
    setErrorMessage(null);
    setCertData(null);
  };

  const getLinkedInShareUrl = () => {
    const studentName = certData?.name || "Participant";
    const shareText = `Excited to receive my official participation certificate for FLEDGE '26 organized by C-NEST Foundation at KLE Tech! 🎓🚀\n\nMy favorite part of the event was [Share your favorite memory here!].\n\nLooking forward to innovating and growing with the C-NEST ecosystem! #FLEDGE26 #CNEST #KLETech #Entrepreneurship #Innovation`;
    return `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareText)}`;
  };

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-blue-50/50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-xs tracking-wider uppercase mb-4 border border-blue-200 dark:border-blue-800/60 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>FLEDGE &apos;26 • Official Certificate Portal</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Claim Your <span className="text-blue-600 dark:text-blue-400">FLEDGE &apos;26</span> Certificate
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Enter your Student Registration Number (SRN) to access, verify, and download your official participation record.
          </p>
        </div>

        {/* Dynamic State View */}
        {!certData ? (
          /* STATE 1: SEARCH CARD */
          <div className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-sm p-6 sm:p-10 transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700/60">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Verify Attendance Record</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Quick authentication via official database</p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="space-y-5">
              <div>
                <label htmlFor="srnInput" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Student Registration Number (SRN)
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <input
                    id="srnInput"
                    type="text"
                    value={srnInput}
                    onChange={(e) => setSrnInput(e.target.value.toUpperCase())}
                    placeholder="e.g. 02FE26BCS147"
                    autoComplete="off"
                    autoCapitalize="characters"
                    disabled={isLoading}
                    className="block w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-mono font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 text-base transition-all uppercase"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Tip: Ensure your SRN matches your university ID badge.
                </p>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-semibold">Verification Notice</p>
                    <p>{errorMessage}</p>
                    <div className="mt-2 pt-2 border-t border-red-200/60 dark:border-red-900/40 flex items-center gap-2 text-xs">
                      <span>Need assistance?</span>
                      <Link to="/contact" className="underline font-semibold hover:text-red-800 dark:hover:text-red-200">
                        Contact C-NEST Team &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !srnInput.trim()}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verifying Record...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Find & Verify Certificate</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-3">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Digitally Authenticated Certificate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-500" />
                <span>KLE Tech C-NEST TBI</span>
              </div>
            </div>
          </div>
        ) : (
          /* STATE 2: VERIFIED CELEBRATION & DOWNLOAD CARD */
          <div className="space-y-6 max-w-2xl mx-auto animate-fadeIn">
            
            {/* Celebration Main Card */}
            <div className="bg-white dark:bg-gray-800/95 rounded-2xl shadow-2xl border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-md p-6 sm:p-10 relative overflow-hidden">
              
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500"></div>

              {/* Sparkle & Heading */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 mb-4 ring-8 ring-amber-50 dark:ring-amber-950/50 shadow-inner">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                  Congratulations, <span className="text-blue-600 dark:text-blue-400">{certData.name}</span>! 🎉
                </h2>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Thank you for bringing your energy, curiosity, and enthusiasm to <strong>FLEDGE &apos;26</strong>.
                </p>
              </div>

              {/* Student Metadata Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-700/60 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 block mb-1">
                    Student Registration Number
                  </span>
                  <span className="font-mono font-bold text-base text-gray-900 dark:text-white">
                    {certData.srn}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 block mb-1">
                    Department / Branch
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-blue-700 dark:text-blue-300">
                    {certData.branch || "Participant"}
                  </span>
                </div>
              </div>

              {/* Download Action */}
              <div className="mb-6">
                <a
                  href={certData.certUrl && certData.certUrl !== "#" ? certData.certUrl : undefined}
                  onClick={(e) => {
                    if (!certData.certUrl || certData.certUrl === "#") {
                      e.preventDefault();
                      alert("Web App deployment URL is being linked! Please configure the deployed Google Apps Script endpoint in constants.tsx.");
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Official PDF Certificate</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              {/* Social & Community Engagement Card */}
              <div className="space-y-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                    <Share2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Share Your FLEDGE &apos;26 Journey 🚀
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Inspire your network! Post your achievement on LinkedIn and share your favorite orientation moment.
                  </p>
                </div>

                {/* Pre-filled LinkedIn Share Button */}
                <div>
                  <a
                    href={getLinkedInShareUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2.5"
                  >
                    <Linkedin className="w-5 h-5 fill-current" />
                    <span>Share on LinkedIn &amp; Tag @C-NEST</span>
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                  💡 <strong>Pro Tip:</strong> Don&apos;t forget to tag <strong>@C-NEST Foundation</strong> and use <strong>#FLEDGE26 #CNEST #KLETech</strong>!
                </div>

                {/* Community channels */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Connect with C-NEST:</span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/company/kle-cnest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://www.instagram.com/cnest_ctie_kledrmsscet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-600 dark:hover:text-pink-400 flex items-center gap-1 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://whatsapp.com/channel/0029VakCgp65kg6xvcpMEO1K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>WhatsApp Channel</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Reset / Search Another */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Search Another SRN</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Bottom Help / FAQ Banner */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-gray-100/70 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-700/40 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 flex-shrink-0" />
            <span>
              Certificates are issued only to verified participants recorded during the session. Questions?{' '}
              <Link to="/contact" className="text-blue-600 dark:text-blue-400 underline font-medium">
                Get in touch
              </Link>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certificates;

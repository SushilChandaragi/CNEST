import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Download, 
  Search, 
  Share2, 
  Sparkles, 
  AlertCircle, 
  ArrowLeft, 
  Linkedin, 
  Loader2,
  ExternalLink,
  GraduationCap,
  Copy,
  Check
} from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { CERTIFICATE_ENDPOINT } from '../constants';
import { Link, useSearchParams } from 'react-router-dom';

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
    "FLEDGE '26 Certificates | CNEST",
    "Claim and download your official participation certificate for FLEDGE '26 by C-NEST Foundation at KLE Technological University."
  );

  const [searchParams] = useSearchParams();
  const [srnInput, setSrnInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [certData, setCertData] = useState<CertificateResult | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Auto-verify if SRN is in URL query parameter
  useEffect(() => {
    const urlSrn = searchParams.get('srn');
    if (urlSrn) {
      setSrnInput(urlSrn.toUpperCase());
      performVerification(urlSrn.toUpperCase());
    }
  }, [searchParams]);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#f59e0b', '#10b981', '#ec4899', '#8b5cf6']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 65,
          origin: { x: 0.15, y: 0.65 },
          colors: ['#3b82f6', '#60a5fa', '#f59e0b']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 65,
          origin: { x: 0.85, y: 0.65 },
          colors: ['#10b981', '#ec4899', '#3b82f6']
        });
      }, 250);
    } catch (e) {
      console.warn("Confetti animation failed:", e);
    }
  };

  const performVerification = async (targetSrn: string) => {
    const cleanSrn = targetSrn.trim().toUpperCase();

    if (!cleanSrn) {
      setErrorMessage("Please enter your SRN to continue.");
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);

    try {
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
          `We couldn't find an attendance check-in for SRN "${cleanSrn}". If you were there and scanned at the gate, reach out to us!`
        );
        setCertData(null);
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setErrorMessage(
        "Couldn't reach the verification server right now. Check your connection and give it one more shot."
      );
      setCertData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    performVerification(srnInput);
  };

  const handleReset = () => {
    setSrnInput('');
    setErrorMessage(null);
    setCertData(null);
    setCopiedLink(false);
  };

  const [copiedCaption, setCopiedCaption] = useState(false);

  const LINKEDIN_POST_TEXT = `Thrilled to receive my official certificate for FLEDGE '26 by C-NEST Foundation! Incredible energy, inspiring sessions, and a great start to my entrepreneurial journey at KLE Tech. 🚀✨ #FLEDGE26 #CNEST #KLETech #Innovation #Entrepreneurship`;

  const copyCertLink = () => {
    if (certData?.certUrl) {
      navigator.clipboard.writeText(certData.certUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareOnLinkedIn = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(LINKEDIN_POST_TEXT);
        setCopiedCaption(true);
        setTimeout(() => setCopiedCaption(false), 4000);
      }
    } catch (e) {
      console.warn("Could not copy caption to clipboard automatically:", e);
    }

    const encodedText = encodeURIComponent(LINKEDIN_POST_TEXT);
    const targetUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedText}`;
    
    // Open LinkedIn in a new tab/window
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-blue-50/50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Wide Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
            Claim Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">FLEDGE &apos;26</span> Certificate
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            You showed up, took part in the energy, and took your first step with C-NEST. Enter your SRN below to grab your official PDF certificate.
          </p>
        </div>

        {/* Dynamic State View */}
        {!certData ? (
          /* STATE 1: WIDE OPEN SEARCH BAR */
          <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500">
                <div className="relative w-full flex items-center">
                  <div className="absolute left-4.5 flex items-center pointer-events-none text-blue-600 dark:text-blue-400 z-10">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <input
                    id="srnInput"
                    type="text"
                    value={srnInput}
                    onChange={(e) => setSrnInput(e.target.value.toUpperCase())}
                    placeholder="Enter University SRN (e.g. 02FE23BCS136)"
                    autoComplete="off"
                    autoCapitalize="characters"
                    disabled={isLoading}
                    className="w-full pl-14 pr-4 py-3.5 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal placeholder:normal-case font-mono font-bold text-base sm:text-lg focus:outline-none uppercase"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading || !srnInput.trim()}
                  className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-base shadow-md shadow-blue-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Checking...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Get Certificate 🚀</span>
                    </>
                  )}
                </button>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-bold">Heads up!</p>
                    <p>{errorMessage}</p>
                    <div className="mt-2 pt-2 border-t border-amber-200 dark:border-amber-900/40 flex items-center gap-2 text-xs">
                      <span>Were you checked in?</span>
                      <Link to="/contact" className="underline font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700">
                        Let the team know &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* STATE 2: VERIFIED CELEBRATION & DOWNLOAD CARD (WIDE) */
          <div className="space-y-6 max-w-2xl mx-auto">
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 relative overflow-hidden">
              
              {/* Confetti & Sparkles Top */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-900 shadow-md mb-3">
                  <Sparkles className="w-8 h-8 animate-bounce" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                  Way to go, {certData.name}! 🎉
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Your participation certificate for <strong>FLEDGE &apos;26</strong> is ready.
                </p>
              </div>

              {/* Student Pass Chip */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-gray-900/80 border border-blue-100 dark:border-gray-700 mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 block">
                    SRN
                  </span>
                  <span className="font-mono font-black text-lg text-blue-700 dark:text-blue-300">
                    {certData.srn}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 block">
                    Department
                  </span>
                  <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                    {certData.branch || "Participant"}
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <div className="space-y-3 mb-6">
                <a
                  href={certData.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-2.5 group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download PDF Certificate</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                {certData.certUrl && (
                  <button
                    onClick={copyCertLink}
                    className="w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Link Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gray-400" />
                        <span>Copy Certificate URL</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <hr className="my-6 border-gray-100 dark:border-gray-800" />

              {/* Share & Brag */}
              <div className="space-y-4">
                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Share the achievement on LinkedIn 🚀
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Tag <strong>@C-NEST Foundation</strong> and show your network you were there.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Option 1 Caption Box */}
                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="italic select-all leading-normal">&ldquo;{LINKEDIN_POST_TEXT}&rdquo;</p>
                  </div>

                  {/* Share CTA */}
                  <button
                    type="button"
                    onClick={handleShareOnLinkedIn}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#004182] active:scale-[0.99] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                    <span>Share on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                  </button>

                  {/* Copy confirmation toast */}
                  {copiedCaption && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Caption copied to clipboard! Just paste it into your post ✨</span>
                    </div>
                  )}
                </div>

                {/* Social community chips */}
                <div className="pt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Connect with C-NEST:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/kle-cnest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                    >
                      LinkedIn
                    </a>
                    <span>•</span>
                    <a
                      href="https://www.instagram.com/cnest_ctie_kledrmsscet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-600 dark:hover:text-pink-400 font-semibold"
                    >
                      Instagram
                    </a>
                    <span>•</span>
                    <a
                      href="https://whatsapp.com/channel/0029VakCgp65kg6xvcpMEO1K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Reset / Search Another */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Check another SRN</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Footer Support Callout */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Having trouble finding your record?{' '}
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 underline font-semibold">
              Drop us a message
            </Link>{' '}
            and our team will assist you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Certificates;

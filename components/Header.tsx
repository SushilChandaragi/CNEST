import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#F7F5F0]/95 dark:bg-[#171614]/95 shadow-sm border-b border-[#E3DFD7] dark:border-[#33302B] py-2' 
        : 'bg-[#F7F5F0]/80 dark:bg-[#171614]/80 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#2C4035] dark:bg-[#88B098] rounded-xl flex items-center justify-center text-[#F7F5F0] dark:text-[#171614] font-black text-xl shadow-sm">
              C
            </div>
            <div className="flex flex-col text-[#2C2926] dark:text-[#F5F2ED]">
              <span className="font-black text-lg leading-tight tracking-tight">CNEST</span>
              <span className="text-xs text-[#615C56] dark:text-[#A39E96] font-medium">KLE Technological University</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-1.5 lg:space-x-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3.5 py-2 rounded-xl text-sm md:text-[15px] font-bold transition-all ${
                    location.pathname === item.href
                      ? 'text-[#2C4035] dark:text-[#88B098] bg-[#E8ECE7] dark:bg-[#1E2B24] border border-[#C5D1C8] dark:border-[#34483E]'
                      : 'text-[#615C56] dark:text-[#A39E96] hover:text-[#2C2926] dark:hover:text-[#F5F2ED] hover:bg-[#E8ECE7]/50 dark:hover:bg-[#24221F]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <DarkModeToggle />
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#2C2926] dark:text-[#F5F2ED] hover:bg-[#E8ECE7] dark:hover:bg-[#24221F] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F7F5F0] dark:bg-[#171614] shadow-xl absolute w-full top-full left-0 border-t border-[#E3DFD7] dark:border-[#33302B]">
          <div className="px-3 pt-3 pb-4 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-bold ${
                  location.pathname === item.href
                    ? 'text-[#2C4035] dark:text-[#88B098] bg-[#E8ECE7] dark:bg-[#1E2B24]'
                    : 'text-[#615C56] dark:text-[#A39E96] hover:text-[#2C2926] dark:hover:text-[#F5F2ED]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
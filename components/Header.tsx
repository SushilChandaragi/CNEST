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
        ? 'bg-white dark:bg-gray-950 shadow-md py-2' 
        : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <div className="flex flex-col text-gray-900 dark:text-white">
              <span className="font-bold text-lg leading-tight">CNEST</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">KLE Technological University</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <div className="flex items-center space-x-2 xl:space-x-4">
              {NAV_ITEMS.map((item) => {
                const isCert = item.href === '/certificates';
                const isActive = location.pathname === item.href;
                
                if (isCert) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`ml-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-blue-500/30'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white border border-blue-200/80 dark:border-blue-800/80'
                      }`}
                    >
                      <span className="text-sm">🎓</span>
                      <span>{item.label}</span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-2.5 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <DarkModeToggle />
          </div>

          <div className="hidden md:flex lg:hidden items-center gap-2">
            <Link
              to="/certificates"
              className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white flex items-center gap-1 shadow-sm"
            >
              <span>🎓</span>
              <span>Certificates</span>
            </Link>
            <DarkModeToggle />
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="md:hidden bg-white dark:bg-gray-950 shadow-xl absolute w-full top-full left-0 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
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
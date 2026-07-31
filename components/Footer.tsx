import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121110] text-[#F5F2ED] py-14 border-t border-[#33302B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-3 text-white tracking-tight">CNEST</h3>
            <p className="text-stone-400 text-xs leading-relaxed">
              Centre for Next Gen Entrepreneurship in Science & Technology
            </p>
            <div className="mt-4 text-stone-500 text-xs font-mono">
              KLE Technological University
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-stone-300 font-mono">Pages</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/" className="hover:text-[#88B098] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#88B098] transition-colors">About</Link></li>
              <li><Link to="/gallery" className="hover:text-[#88B098] transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="hover:text-[#88B098] transition-colors">Events</Link></li>
              <li><Link to="/team" className="hover:text-[#88B098] transition-colors">Team</Link></li>
              <li><Link to="/careers" className="hover:text-[#88B098] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#88B098] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-stone-300 font-mono">Contact</h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#88B098]" />
                <span>KLE Tech University, Dr. M.S. Sheshgiri Campus, Belagavi</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#88B098]" />
                <a href="mailto:cnest.mss@kletech.ac.in" className="hover:text-[#88B098] transition-colors font-mono">cnest.mss@kletech.ac.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#88B098]" />
                <a href="tel:08312491836" className="hover:text-[#88B098] transition-colors font-mono">0831-2491836</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-stone-300 font-mono">Government Funded</h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Supported by the Government of Karnataka with ₹10 Crores funding
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#292523] text-center text-xs text-stone-500 font-mono">
          <p>&copy; {new Date().getFullYear()} CNEST - Centre for Next Gen Entrepreneurship in Science & Technology. All rights reserved.</p>
          <p className="mt-2 text-[11px] text-stone-600">KLE Technological University, Belagavi, Karnataka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
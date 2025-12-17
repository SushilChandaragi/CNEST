import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CNEST</h3>
            <p className="text-gray-400 text-sm">
              Centre for Next Gen Entrepreneurship in Science Technology and Foundation.
            </p>
            <div className="mt-4 text-gray-500 text-xs">
              Under CTIE, KLE Technological University.
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Achievements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="cursor-pointer hover:text-white">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-white">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CNEST. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import ContactPage from './pages/ContactPage';
import StudentTeam from './pages/StudentTeam';
import Events from './pages/Events';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-[#F7F5F0] dark:bg-[#171614] text-[#2C2926] dark:text-[#F5F2ED] transition-colors duration-300 font-sans">
          <Header />
          <ScrollToTop />
          <main className="transition-opacity duration-300 ease-in-out">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events" element={<Events />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/team" element={<StudentTeam />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
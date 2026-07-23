import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhoWeServe from '../components/WhoWeServe';
import Services from '../components/Services';
import Achievements from '../components/Achievements';

import CallToAction from '../components/CallToAction';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

const Home: React.FC = () => {
  useDocumentMetadata(
    "CNEST - Centre for Next Gen Entrepreneurship in Science & Technology | Belagavi",
    "CNEST is a premier incubation center at KLE Technological University, Belagavi, funded by the Government of Karnataka. We nurture innovative startups in science and technology with funding, mentorship, and world-class infrastructure."
  );
  return (
    <>
      <Hero />
      <About />
      <WhoWeServe />
      <Achievements />
      <Services />
      <CallToAction />

    </>
  );
};

export default Home;

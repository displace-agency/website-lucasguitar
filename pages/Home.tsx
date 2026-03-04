import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';

import ForKidsPreview from '../components/ForKidsPreview';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ForKidsPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Home;
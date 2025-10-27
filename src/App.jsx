import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </div>
  );
};

export default App;

"use client"
import React, { useState, useEffect } from 'react';

// Components
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import EventsSection from './EventsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Sponser from './Sponser';
import Footer from './Footer';
import About from './About'

export default function CommunityLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation scrollY={scrollY} />
      <HeroSection />
      <FeaturesSection />
      {/* <StatsSection /> */}
      <EventsSection />
      <TestimonialsSection />
      <Sponser />
      <About/>
      <CTASection />
      <Footer />
    </div>
  );
}
import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { StemLabSection } from '../components/sections/StemLabSection';
import { LearningApproach } from '../components/sections/LearningApproach';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { BlogPreview } from '../components/sections/BlogPreview';
import { ContactSection } from '../components/sections/ContactSection';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'IQONIX LABS — Hands-on Robotics, Aeronautics & STEM Education for Schools';
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <StemLabSection />
      <LearningApproach />
      <GalleryPreview />
      <BlogPreview />
      <ContactSection />
    </>
  );
};

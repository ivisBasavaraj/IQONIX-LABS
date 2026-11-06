import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { WhatWeOfferPreview } from '../components/sections/WhatWeOfferPreview';
import { StemLabPreview } from '../components/sections/StemLabPreview';
import { LearningApproachPreview } from '../components/sections/LearningApproachPreview';
import { HomeGalleryPreview } from '../components/sections/HomeGalleryPreview';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'IQONIX LABS — Hands-on Robotics, Aeronautics & STEM Education for Schools';
  }, []);

  return (
    <>
      {/* Section 1: Hero with 3D Animated Engineering Robot */}
      <Hero />

      {/* Section 2: What We Offer (4 preview cards: Robotics, Aeronautics, Programming, STEM Learning) */}
      <WhatWeOfferPreview />

      {/* Section 3: STEM Lab Solutions (Image-and-content turnkey school lab solutions) */}
      <StemLabPreview />

      {/* Section 4: Learning Approach (3-step illustrative learning flow: Explore, Build, Experiment) */}
      <LearningApproachPreview />

      {/* Section 5: Gallery Preview (4 curated lab and student project previews) */}
      <HomeGalleryPreview />

      {/* Section 6: Final Call to Action (High-contrast institutional partnership banner) */}
      <FinalCTASection />
    </>
  );
};

export default Home;

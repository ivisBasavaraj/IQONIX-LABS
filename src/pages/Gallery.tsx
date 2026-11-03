import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { GalleryPreview } from '../components/sections/GalleryPreview';

export const Gallery: React.FC = () => {
  useEffect(() => {
    document.title = 'Gallery & Lab Documentation — IQONIX LABS';
  }, []);

  return (
    <div className="py-12 md:py-16">
      <Container className="mb-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 text-caption-caps font-bold text-primary mb-3">
            Visual Documentation
          </div>
          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-3">
            STEM Laboratory & Project Gallery
          </h1>
          <p className="text-body sm:text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            Explore authentic workstation setups, aeronautics and robotics testbeds, student hardware prototypes, and inter-school technical exhibitions.
          </p>
        </div>
      </Container>

      <GalleryPreview isFullPage={true} />
    </div>
  );
};

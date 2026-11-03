import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { BlogPreview } from '../components/sections/BlogPreview';

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog & News — IQONIX LABS | STEM Education Insights';
  }, []);

  return (
    <div className="py-12 md:py-16">
      <Container className="mb-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 text-caption-caps font-bold text-primary mb-3">
            Insights & Updates
          </div>
          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-3">
            Educational Articles & Institutional News
          </h1>
          <p className="text-body sm:text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            Curriculum integration guides, aeronautical science demonstrations, laboratory design best practices, and educator enablement notes.
          </p>
        </div>
      </Container>

      <BlogPreview isFullListing={true} />
    </div>
  );
};

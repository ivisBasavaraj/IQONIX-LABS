import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { GALLERY_ITEMS } from '../../data/gallery';

export const HomeGalleryPreview: React.FC = () => {
  // Take 4 curated items from GALLERY_ITEMS
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-surface-container-low relative border-b border-primary-container/10">
      <Container>
        <SectionHeading
          tag="Visual Showcase"
          title="Laboratory & Activity Gallery"
          description="A visual preview of our hardware setups, aeronautics test rigs, and tactile student project environments."
          action={
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-btn font-semibold text-primary-container hover:text-secondary-container transition-colors group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        {/* Modern Asymmetric 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {previewItems.map((item, index) => {
            // Asymmetric sizing: item 0 takes 7 cols, item 1 takes 5 cols, item 2 takes 5 cols, item 3 takes 7 cols
            const colSpan =
              index === 0
                ? 'lg:col-span-7'
                : index === 1
                ? 'lg:col-span-5'
                : index === 2
                ? 'lg:col-span-5'
                : 'lg:col-span-7';

            return (
              <div
                key={item.id}
                className={`${colSpan} group relative rounded-2xl overflow-hidden bg-surface-container border border-primary-container/20 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-72`}
              >
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Category & Placeholder indicator */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-caption-caps font-bold bg-white/90 text-primary backdrop-blur-md shadow-xs">
                    {item.categoryLabel}
                  </span>
                  {item.isPlaceholder && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md border border-white/20">
                      {item.date}
                    </span>
                  )}
                </div>

                {/* Bottom Content on Card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-body sm:text-card-title font-bold text-white mb-1 group-hover:text-primary-fixed transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-caption text-white/80 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for all screens */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center h-11 px-7 rounded-lg bg-surface-container-lowest text-primary-container border border-primary-container/25 text-btn font-semibold shadow-sm hover:bg-on-tertiary-container hover:border-primary-container/40 transition-all gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Explore Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomeGalleryPreview;

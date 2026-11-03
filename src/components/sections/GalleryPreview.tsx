import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { GALLERY_ITEMS } from '../../data/gallery';
import { GalleryCategory, GalleryItem } from '../../types/gallery';

interface GalleryPreviewProps {
  isFullPage?: boolean;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ isFullPage = false }) => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterButtons: { label: string; value: GalleryCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Lab Setups', value: 'labs' },
    { label: 'Student Projects', value: 'projects' },
    { label: 'STEM Activities', value: 'activities' },
    { label: 'Events', value: 'events' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="gallery">
      <Container>
        {/* Header with Title and Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5">
          <div>
            <span className="text-caption-caps font-bold text-primary block mb-1.5">
              Documentation
            </span>
            <h2 className="text-section-title font-semibold text-on-surface tracking-tight">
              Gallery
            </h2>
            <p className="text-body-sm sm:text-body text-on-surface-variant max-w-md mt-1.5 leading-relaxed">
              Authentic laboratory configurations, prototype builds, and practical school STEM learning sessions.
            </p>
          </div>

          {/* Filter Tabs matching Stitch design */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                type="button"
                onClick={() => setActiveFilter(btn.value)}
                className={`px-3.5 py-1.5 rounded-lg text-btn font-semibold transition-all ${
                  activeFilter === btn.value
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-white border border-primary-container/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* SRS Compliance Notice Banner */}
        <div className="mb-8 p-3.5 rounded-xl bg-on-tertiary-container/60 border border-primary-container/20 flex items-start gap-3 text-caption text-on-surface-variant leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span>
            <strong>Consent & Content Notice:</strong> Media shown represents sample setups and curriculum demonstrations. Identifiable student photos and recordings are published only with appropriate institutional & guardian consent.
          </span>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-lowest rounded-2xl border border-primary-container/15 p-8">
            <Sparkles className="w-10 h-10 text-primary-container/40 mx-auto mb-2.5" />
            <h3 className="text-card-title font-semibold text-on-surface">No Items in this Category</h3>
            <p className="text-body-sm text-on-surface-variant mt-1 max-w-md mx-auto">
              Approved media for this category will be published following institutional review.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 rounded-lg bg-primary-container text-white text-btn font-medium"
            >
              View All Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-surface-container-lowest border border-primary-container/15 shadow-sm hover:shadow-md hover:border-primary-container/30 transition-all flex flex-col group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-0.5 bg-surface-container-lowest/90 backdrop-blur-md rounded-md text-primary font-bold text-caption-caps">
                    {item.categoryLabel}
                  </span>

                  {item.isPlaceholder && (
                    <span className="absolute top-3.5 right-3.5 placeholder-tag">
                      Demo Sample
                    </span>
                  )}

                  {/* Hover zoom indicator */}
                  <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/90 text-primary-container flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-card-title font-semibold text-on-surface mb-1.5 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-caption text-outline font-medium">
                    <span>{item.date}</span>
                    <span className="text-primary-container font-semibold group-hover:underline">
                      Inspect Details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All CTA for home preview */}
        {!isFullPage && (
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest border border-primary-container/20 text-btn font-semibold text-primary-container hover:bg-on-tertiary-container hover:border-primary-container/40 transition-all shadow-sm"
            >
              <span>Explore Full Gallery & Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-on-surface/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-primary-container/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface hover:bg-white flex items-center justify-center shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.altText}
                  className="max-h-[65vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-on-tertiary-container text-primary text-caption-caps font-bold">
                    {selectedImage.categoryLabel}
                  </span>
                  {selectedImage.isPlaceholder && (
                    <span className="placeholder-tag">Curriculum Sample</span>
                  )}
                </div>
                <h3 className="text-card-title font-bold text-on-surface mb-1.5 tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

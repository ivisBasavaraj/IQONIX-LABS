import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { ContactSection } from '../components/sections/ContactSection';
import { HelpCircle, Clock, Calendar, CheckSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact & Consultation — IQONIX LABS';
  }, []);

  return (
    <div className="py-12 md:py-16">
      {/* Top Header */}
      <Container className="mb-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 text-caption-caps font-bold text-primary mb-3">
            School Consultation Desk
          </div>
          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-3">
            Schedule an On-Campus Demo or STEM Lab Consultation
          </h1>
          <p className="text-body sm:text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            Interested in establishing a dedicated robotics, aeronautics, or coding facility at your campus? Submit an enquiry below and our academic engineering team will coordinate with your school management.
          </p>
        </div>
      </Container>

      {/* Main Contact Section with Enquiry Form */}
      <ContactSection />

      {/* Consultation FAQ / What to Expect */}
      <section className="py-14 bg-surface-bright">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-caption-caps font-bold text-primary">
                Consultation Guide
              </span>
            </div>
            <h2 className="text-section-title font-bold text-on-surface tracking-tight mb-6">
              What Happens After Submitting an Enquiry?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 md:p-6 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-on-tertiary-container flex items-center justify-center text-primary-container font-bold text-btn mb-3">
                  1
                </div>
                <h4 className="text-card-title font-semibold text-on-surface mb-1.5 tracking-tight">
                  Requirement Call
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  Our academic advisor reviews student cohort sizes (Grades 5–10), preferred syllabus track (CBSE/ICSE), and available campus spaces.
                </p>
              </div>

              <div className="p-5 md:p-6 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-on-tertiary-container flex items-center justify-center text-primary-container font-bold text-btn mb-3">
                  2
                </div>
                <h4 className="text-card-title font-semibold text-on-surface mb-1.5 tracking-tight">
                  On-Campus Demo
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  We schedule an interactive hardware demonstration showcasing robotics kits, drone rigs, and student coding tasks for school leadership.
                </p>
              </div>

              <div className="p-5 md:p-6 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-on-tertiary-container flex items-center justify-center text-primary-container font-bold text-btn mb-3">
                  3
                </div>
                <h4 className="text-card-title font-semibold text-on-surface mb-1.5 tracking-tight">
                  Proposal & Roadmap
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  A tailored implementation plan with room zoning, kit quantities, teacher training timeline, and transparent logistics is presented.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

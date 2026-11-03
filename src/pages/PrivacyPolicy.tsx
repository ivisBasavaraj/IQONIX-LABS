import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { ShieldCheck, Mail, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — IQONIX LABS';
  }, []);

  return (
    <div className="py-12 md:py-20 bg-surface">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8 pb-5 border-b border-primary-container/15">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container text-primary text-caption-caps font-bold mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal & Institutional Privacy</span>
            </div>
            <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-2">
              Privacy Policy
            </h1>
            <p className="text-caption text-outline">
              Last Updated: October 2026 • IQONIX LABS Policy Version 1.0 (Baseline for Review)
            </p>
          </div>

          <div className="space-y-6 text-body-sm text-on-surface-variant leading-relaxed">
            {/* Introduction */}
            <section className="space-y-2.5">
              <h2 className="text-card-title font-semibold text-on-surface">1. Introduction</h2>
              <p>
                IQONIX LABS ("we", "our", or "us") provides hands-on robotics, aeronautics, coding, and STEM education infrastructure for schools (Grades 5–10). This Privacy Policy explains our practices regarding the collection, use, and protection of information submitted through our public website (iqonixlabs.com).
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-2.5">
              <h2 className="text-card-title font-semibold text-on-surface">2. Information We Collect</h2>
              <p>
                We only collect information directly provided by website visitors, schools, educators, and institutional representatives through our consultation and demo request forms:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact person name and role/designation.</li>
                <li>School or institution name, campus address, and city/state.</li>
                <li>Institutional email address and telephone/mobile contact number.</li>
                <li>Expressed interest area (Robotics, Aeronautics, Coding, or STEM Lab Setup).</li>
                <li>Optional notes concerning student cohort dimensions and curriculum objectives.</li>
              </ul>
              <p className="text-caption italic bg-surface-container-low p-3 rounded-lg border border-primary-container/10">
                We do not collect sensitive student biometric data, government IDs, or payment details through this website.
              </p>
            </section>

            {/* Purpose */}
            <section className="space-y-2.5">
              <h2 className="text-card-title font-semibold text-on-surface">3. Purpose and Use of Collected Data</h2>
              <p>The information submitted is utilized exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coordinating on-campus STEM demonstrations and equipment walkthroughs.</li>
                <li>Preparing tailored curriculum blueprints and lab zoning proposals for school administrators.</li>
                <li>Communicating schedule updates and academic consultation details.</li>
                <li>Internal quality checks and administrative coordination.</li>
              </ul>
            </section>

            {/* Media & Student Protection */}
            <section className="space-y-2.5">
              <h2 className="text-card-title font-semibold text-on-surface">4. Student Protection & Media Consent</h2>
              <p>
                In strict adherence to educational safeguarding standards, photos or video documentation featuring students engaged in lab sessions or events are published on our website only with prior institutional verification and explicit guardian consent. Sample materials shown during development are marked as demonstrations.
              </p>
            </section>

            {/* Data Access & Security */}
            <section className="space-y-2.5">
              <h2 className="text-card-title font-semibold text-on-surface">5. Data Access & Security</h2>
              <p>
                Information submitted through our consultation forms is accessible only to authorized IQONIX LABS academic and administrative personnel. We never sell, rent, or trade institutional enquiry data to third-party commercial marketing brokers.
              </p>
            </section>

            {/* User Rights */}
            <section className="space-y-2.5">
              <h2 className="text-card-title font-semibold text-on-surface">6. Data Correction and Deletion Requests</h2>
              <p>
                Schools and individuals have the right to request access to their submitted contact records, request corrections, or ask for complete deletion from our records. To submit a request, contact our administrative desk:
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-primary-container/20 flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <div className="text-caption font-bold text-on-surface">Privacy Officer / Administrative Desk</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-caption text-primary-container font-medium hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="space-y-2 pt-3 border-t border-primary-container/10 text-caption text-outline">
              <p>
                This baseline policy reflects requirements outlined in IQONIX LABS Website SRS v1.0. Final terms and conditions are subject to review by legal counsel upon commercial deployment.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { AboutSection } from '../components/sections/AboutSection';
import { LearningApproach } from '../components/sections/LearningApproach';
import { COMPANY_INFO } from '../utils/constants';
import { BookOpen, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us — IQONIX LABS | Hands-on STEM & Robotics Education';
  }, []);

  return (
    <div className="py-12 md:py-16">
      {/* Page Header */}
      <Container className="mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 text-caption-caps font-bold text-primary mb-3.5">
            Educational Purpose
          </div>
          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-4">
            Building the Innovators of Tomorrow Through Practical Engineering
          </h1>
          <p className="text-body sm:text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            IQONIX LABS is dedicated to introducing hands-on robotics, aeronautics, and programming infrastructure directly to CBSE and ICSE schools for students across Grades 5 through 10.
          </p>
        </div>
      </Container>

      {/* Core About Pillars */}
      <AboutSection showExtendedInfo={true} />

      {/* Detailed Learning Philosophy Section */}
      <section className="py-14 bg-surface-container-low border-y border-primary-container/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-caption-caps font-bold text-primary block">
                Educational Philosophy
              </span>
              <h2 className="text-section-title font-bold text-on-surface tracking-tight">
                How Practical STEM Activities Reinforce Classroom Syllabus
              </h2>
              <p className="text-body-sm sm:text-body text-on-surface-variant leading-relaxed">
                In standard science curriculums, concepts like acceleration, electromagnetic induction, aerodynamics, and logical conditionals often remain theoretical equations in textbooks.
              </p>
              <p className="text-body-sm sm:text-body text-on-surface-variant leading-relaxed">
                At IQONIX LABS, every physical kit and lab station is mapped to core syllabus standards. When students build a motorized gripper, assemble an airfoil test section, or script sensor thresholds, classroom science transforms into observable, repeatable physical phenomena.
              </p>

              <div className="space-y-2.5 pt-1.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-body-sm text-on-surface font-medium">
                    Strict alignment with CBSE and ICSE science and math topics for Grades 5–10.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-body-sm text-on-surface font-medium">
                    Tactile problem-solving that develops analytical stamina and engineering intuition.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-body-sm text-on-surface font-medium">
                    Turnkey support ensuring teachers have structured guides and verified equipment.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-primary-container/20 shadow-xl bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Students engaged in collaborative robotics and STEM engineering"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Practical Learning Showcase */}
      <LearningApproach />

      {/* Institutional Focus & Open Items Notice */}
      <section className="py-14 bg-surface-bright">
        <Container>
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-primary-container/15 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary-container" />
              <h3 className="text-card-title font-bold text-on-surface">Institutional Information Status</h3>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-relaxed mb-4">
              In accordance with official requirements (SRS v1.0), specific company milestones, certified partner rosters, and executive leadership profiles will be published here upon official owner authorization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5 border-t border-primary-container/10">
              <div className="flex items-center gap-2 text-caption text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>Primary Base: <strong>Bengaluru, Karnataka</strong></span>
              </div>
              <div className="flex items-center gap-2 text-caption text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>Audience: <strong>CBSE & ICSE Schools (Grades 5–10)</strong></span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-primary-container/10 flex justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-container text-white text-btn font-semibold hover:bg-secondary-container transition-all"
              >
                Contact Our Academic Team
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

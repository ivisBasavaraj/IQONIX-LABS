import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Wrench, RefreshCw, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const LearningApproachPreview: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Explore',
      subtitle: 'Understand Concepts Through Guided Exploration',
      description:
        'Students deconstruct real physical phenomena, examine mechanics and circuit behaviors, and discover engineering principles before assembly.',
      icon: Compass,
      focusTag: 'Concept Discovery',
      accentColor: 'border-blue-500/20 bg-blue-50/50 text-blue-600',
    },
    {
      step: '02',
      title: 'Build',
      subtitle: 'Create Practical Robotics & Engineering Projects',
      description:
        'Translating theory into tangible hardware: constructing drive chassis, mounting servomotors, wiring microcontrollers, and coding algorithms.',
      icon: Wrench,
      focusTag: 'Tactile Construction',
      accentColor: 'border-indigo-500/20 bg-indigo-50/50 text-indigo-600',
    },
    {
      step: '03',
      title: 'Experiment',
      subtitle: 'Test, Observe & Improve Through Hands-on Activities',
      description:
        'Testing prototypes under real conditions, logging telemetry feeds, identifying mechanical tolerances, and iterating on project designs.',
      icon: RefreshCw,
      focusTag: 'Iterative Refinement',
      accentColor: 'border-cyan-500/20 bg-cyan-50/50 text-cyan-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-bright relative border-b border-primary-container/10">
      <Container>
        <SectionHeading
          tag="Pedagogical Philosophy"
          title="Our Learning Approach"
          description="An illustrative 3-step learning flow designed to transform passive textbook learning into active engineering intuition."
          action={
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-btn font-semibold text-primary-container hover:text-secondary-container transition-colors group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-surface-container-lowest border border-primary-container/15 hover:border-primary-container/40 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-primary-container/20 group-hover:text-primary-container/40 transition-colors">
                      {item.step}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${item.accentColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-full text-caption-caps font-bold bg-on-tertiary-container text-primary mb-3">
                    {item.focusTag}
                  </div>

                  <h3 className="text-section-title text-xl font-bold text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <h4 className="text-body-sm font-semibold text-on-surface-variant mb-3">
                    {item.subtitle}
                  </h4>

                  <p className="text-body-sm text-on-surface-variant/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-primary-container/10 flex items-center justify-between">
                  <span className="text-caption text-on-surface-variant/70 font-medium">
                    Illustrative flow
                  </span>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1 text-caption-caps font-bold text-primary group-hover:text-secondary-container transition-colors"
                  >
                    <span>Read Philosophy</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Illustrative Flow */}
        <div className="mt-8 p-4 rounded-xl bg-surface-container-low border border-primary-container/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-caption text-on-surface-variant">
            <strong>Illustrative Flow Note:</strong> This sequence represents our hands-on engineering mindset. Specific classroom syllabus tracks are tailored in partnership with each school.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center h-9 px-4 rounded-lg bg-white border border-primary-container/20 text-caption font-semibold text-primary hover:bg-on-tertiary-container transition-all shrink-0 gap-1.5"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LearningApproachPreview;

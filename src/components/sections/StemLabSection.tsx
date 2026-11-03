import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, BookOpen, Wrench, RefreshCw, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const StemLabSection: React.FC = () => {
  const components = [
    {
      icon: Cpu,
      title: 'Equipment & Kit Categories',
      description:
        'Modular robotics hardware, aeronautical wind tables, microcontroller racks, sensor kits, and precision workbenches.',
    },
    {
      icon: BookOpen,
      title: 'Curriculum Support',
      description:
        'Grade-appropriate step-by-step manuals, lesson blueprints, and teaching guides aligned directly with CBSE and ICSE boards.',
    },
    {
      icon: Wrench,
      title: 'Implementation',
      description:
        'Full physical installation, ergonomic workspace layout, safety compliance verification, and on-site teacher training.',
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Learning Activities',
      description:
        'Continuous lab replenishment, periodic student challenges, inter-school project exhibitions, and technical mentor visits.',
    },
  ];

  const roadmapSteps = [
    {
      step: '01',
      title: 'Enquiry',
      description:
        'The school submits initial requirements, student demographics, campus layout, and curriculum scope.',
    },
    {
      step: '02',
      title: 'Requirement Discussion',
      description:
        'Technical consultation with school administrators to define lab sizing, grade allocations (5–10), and kit counts.',
    },
    {
      step: '03',
      title: 'Proposed Setup',
      description:
        'Detailed lab layout architectural schema, equipment manifests, and pedagogical timelines for administrative review.',
    },
    {
      step: '04',
      title: 'Implementation',
      description:
        'On-site installation, workspace ergonomic arrangement, safety verification, and teacher enablement workshops.',
    },
    {
      step: '05',
      title: 'Support',
      description:
        'Scheduled ongoing pedagogical assistance, kit replenishment, and technical consultation visits.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-inverse-surface text-on-primary-container" id="stem-lab-setup">
      <Container>
        <SectionHeading
          tag="Institutional Turnkey"
          title="STEM Lab Setup for Schools"
          description="Complete, turnkey educational laboratory setup tailored to individual campus infrastructure and academic syllabi."
          inverted
        />

        {/* 4 Core Setup Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {components.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 md:p-7 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-white/25 hover:bg-white/[0.09] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-container text-white flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-card-title font-semibold text-white mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-body-sm text-on-primary-container/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Implementation Roadmap Process (01 to 05) */}
        <div className="p-6 md:p-8 rounded-3xl bg-white/[0.05] border border-white/10 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-caption-caps font-bold text-primary-fixed block mb-1">
                Structured Engagement
              </span>
              <h3 className="text-subheading sm:text-card-title font-semibold text-white">
                Implementation Roadmap
              </h3>
            </div>
            <p className="text-caption text-on-primary-container/70 max-w-sm mt-2 md:mt-0 leading-relaxed">
              Clear five-stage process ensuring smooth institution onboarding from consultation to active classroom running.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {roadmapSteps.map((step) => (
              <div key={step.step} className="flex flex-col relative group">
                <div className="text-3xl lg:text-4xl font-bold text-primary-fixed-dim/40 group-hover:text-primary-fixed-dim/80 transition-colors mb-1.5">
                  {step.step}
                </div>
                <h5 className="text-base font-semibold text-white mb-1.5">
                  {step.title}
                </h5>
                <p className="text-caption text-on-primary-container/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-7 rounded-lg bg-white text-on-surface font-semibold text-btn hover:bg-on-tertiary-container hover:text-primary-container transition-all shadow-lg gap-2"
          >
            <span>Request Lab Setup Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/stem-lab-setup"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-transparent text-primary-fixed border border-primary-container/30 text-btn font-semibold hover:bg-white/10 transition-all"
          >
            Explore Turnkey Specifications
          </Link>
        </div>
      </Container>
    </section>
  );
};

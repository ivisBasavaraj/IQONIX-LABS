import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, BookOpen, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';

export const StemLabPreview: React.FC = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'Equipment & Kit Categories',
      description:
        'Standardized modular robotics kits, aerodynamic test rigs, microcontrollers, sensor modules, and electronic breadboards.',
    },
    {
      icon: BookOpen,
      title: 'Structured Curriculum Support',
      description:
        'Step-by-step teacher manuals, student lab workbooks, and project guides mapped strictly to CBSE and ICSE science syllabi.',
    },
    {
      icon: Wrench,
      title: 'Turnkey Implementation',
      description:
        'Complete spatial planning, physical bench installation, electrical safety compliance, and hands-on faculty enablement.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container-low relative border-b border-primary-container/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-primary-container/20 shadow-xl bg-surface-container-lowest p-2.5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern school STEM laboratory installation with modular lab tables"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Telemetry Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-xl border border-primary-container/20 shadow-md">
                  <div className="flex items-center justify-between text-caption-caps font-bold text-primary mb-1">
                    <span>Lab Infrastructure</span>
                    <span className="text-on-surface-variant font-normal">CBSE / ICSE Ready</span>
                  </div>
                  <p className="text-body-sm font-semibold text-on-surface">
                    Turnkey 24–36 Seat Active STEM Laboratory
                  </p>
                </div>
              </div>

              {/* Status highlight badges */}
              <div className="grid grid-cols-3 gap-2 p-3 mt-1 text-center">
                <div className="p-2 rounded-lg bg-surface-bright border border-primary-container/10">
                  <div className="text-caption-caps font-bold text-primary">Kits</div>
                  <div className="text-xs font-semibold text-on-surface mt-0.5">Modular</div>
                </div>
                <div className="p-2 rounded-lg bg-surface-bright border border-primary-container/10">
                  <div className="text-caption-caps font-bold text-primary">Training</div>
                  <div className="text-xs font-semibold text-on-surface mt-0.5">On-Site</div>
                </div>
                <div className="p-2 rounded-lg bg-surface-bright border border-primary-container/10">
                  <div className="text-caption-caps font-bold text-primary">Safety</div>
                  <div className="text-xs font-semibold text-on-surface mt-0.5">Compliant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-caption-caps font-bold text-primary block mb-2">
                Infrastructure & Turnkey Solutions
              </span>
              <h2 className="text-section-title font-bold text-on-surface tracking-tight">
                STEM Lab Solutions Engineered for Schools
              </h2>
              <p className="mt-3 text-body text-on-surface-variant leading-relaxed max-w-2xl">
                We help institutions design, build, and operate dedicated practical STEM labs. By uniting tactile engineering hardware with structured lesson plans and on-site teacher development, your students engage with technology through systematic experimentation.
              </p>
            </div>

            {/* 3 Core Highlights */}
            <div className="space-y-4 pt-1">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest border border-primary-container/15 hover:border-primary-container/30 transition-colors shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-lg bg-on-tertiary-container flex items-center justify-center text-primary-container shrink-0 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-body font-semibold text-on-surface mb-1">
                        {h.title}
                      </h3>
                      <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/stem-lab-setup"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary-container text-white text-btn font-semibold shadow-md hover:bg-secondary-container hover:shadow-[0_4px_16px_rgba(23,105,224,0.28)] transition-all gap-2"
              >
                <span>Explore STEM Lab Setup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center text-btn font-semibold text-primary hover:text-secondary-container transition-colors py-2"
              >
                Schedule Campus Consultation →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StemLabPreview;

import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Plane, Code2, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const WhatWeOfferPreview: React.FC = () => {
  const offerings = [
    {
      id: 'robotics',
      num: '01',
      title: 'Robotics',
      badge: 'Kinematic Systems',
      description:
        'Multi-axis mechanics, sensor-actuator integration, and microcontroller assembly built from raw structural and drive components.',
      icon: Bot,
      color: 'from-blue-500/10 to-indigo-500/5',
      accentColor: 'text-blue-600',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/60',
    },
    {
      id: 'aeronautics',
      num: '02',
      title: 'Aeronautics',
      badge: 'Flight Dynamics',
      description:
        'Flight physics, airfoil contour testing, drone electronics, and live telemetry instrumentation mapped to Newtonian mechanics.',
      icon: Plane,
      color: 'from-sky-500/10 to-cyan-500/5',
      accentColor: 'text-sky-600',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200/60',
    },
    {
      id: 'programming',
      num: '03',
      title: 'Programming / Coding',
      badge: 'Hardware Scripting',
      description:
        'Computational logic and embedded firmware scripting where code immediately drives tangible real-world actuators and sensor loops.',
      icon: Code2,
      color: 'from-indigo-500/10 to-purple-500/5',
      accentColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
    },
    {
      id: 'stem-learning',
      num: '04',
      title: 'Related STEM Learning',
      badge: 'Applied Physics & Math',
      description:
        'Interdisciplinary investigations connecting physics, mathematical modeling, and environmental sensing through tactile lab setups.',
      icon: Sparkles,
      color: 'from-cyan-500/10 to-emerald-500/5',
      accentColor: 'text-cyan-700',
      iconBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-bright relative border-b border-primary-container/10">
      <Container>
        <SectionHeading
          tag="Educational Offerings"
          title="What We Offer"
          description="Four interconnected disciplines engineered specifically for CBSE and ICSE school students in Grades 5–10 to build foundational technical intuition."
          action={
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-btn font-semibold text-primary-container hover:text-secondary-container transition-colors group"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-container-lowest border border-primary-container/15 hover:border-primary-container/40 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${item.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-on-surface-variant/50 tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-caption-caps font-bold bg-on-tertiary-container text-primary mb-3">
                    {item.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-card-title font-semibold text-on-surface mb-2.5 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-6 mt-6 border-t border-primary-container/10 flex items-center justify-between">
                  <span className="text-caption font-semibold text-on-surface-variant/80">
                    Grades 5–10
                  </span>
                  <Link
                    to={`/programs`}
                    className="inline-flex items-center gap-1 text-caption-caps font-bold text-primary group-hover:text-secondary-container transition-colors"
                  >
                    <span>Curriculum</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/programs"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-surface-container-low text-primary-container border border-primary-container/20 text-btn font-semibold shadow-sm w-full gap-2"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeOfferPreview;

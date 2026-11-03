import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { Bot, Plane, Code2, Sparkles, BookOpen, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Programs: React.FC = () => {
  useEffect(() => {
    document.title = 'Programs — IQONIX LABS | Robotics, Aeronautics, Coding & STEM Modules';
  }, []);

  return (
    <div className="py-12 md:py-16">
      {/* Header */}
      <Container className="mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 text-caption-caps font-bold text-primary mb-3">
            Curriculum Framework
          </div>
          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-3.5">
            Four Core STEM Modules for Grades 5 to 10
          </h1>
          <p className="text-body sm:text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            Engineered specifically to support CBSE and ICSE science and computer application syllabi. Every program pairs structured theory with physical laboratory kits and real-world experiments.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-primary-container/15">
          <a
            href="#robotics"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest border border-primary-container/20 text-btn font-semibold text-on-surface hover:border-primary-container hover:text-primary-container transition-all shadow-sm"
          >
            <Bot className="w-3.5 h-3.5 text-primary" />
            <span>01. Robotics</span>
          </a>
          <a
            href="#aeronautics"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest border border-primary-container/20 text-btn font-semibold text-on-surface hover:border-primary-container hover:text-primary-container transition-all shadow-sm"
          >
            <Plane className="w-3.5 h-3.5 text-primary" />
            <span>02. Aeronautics</span>
          </a>
          <a
            href="#programming"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest border border-primary-container/20 text-btn font-semibold text-on-surface hover:border-primary-container hover:text-primary-container transition-all shadow-sm"
          >
            <Code2 className="w-3.5 h-3.5 text-primary" />
            <span>03. Programming / Coding</span>
          </a>
          <a
            href="#stem-learning"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest border border-primary-container/20 text-btn font-semibold text-on-surface hover:border-primary-container hover:text-primary-container transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>04. Related STEM Learning</span>
          </a>
        </div>
      </Container>

      {/* Program Modules in Full Detail */}
      <ProgramsSection showFullDetails={true} />

      {/* School Customization Callout */}
      <section className="py-14 bg-surface-bright">
        <Container>
          <div className="p-7 md:p-10 rounded-3xl bg-inverse-surface text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl">
              <span className="text-caption-caps font-bold text-primary-fixed mb-1.5 block">
                Tailored Integration
              </span>
              <h3 className="text-card-title sm:text-subheading font-bold mb-2">
                Need a Custom Syllabus Combination for Your Campus?
              </h3>
              <p className="text-body-sm text-on-primary-container/80 leading-relaxed">
                Whether you wish to start with an introductory Grade 6 Robotics workshop series or a complete four-track Grade 5–10 STEM Lab installation, we adapt to your school timetable.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 h-11 rounded-lg bg-primary-container text-white font-semibold text-btn hover:bg-secondary-container transition-all shadow-md shrink-0"
            >
              Discuss School Requirements
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

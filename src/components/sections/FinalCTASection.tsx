import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-inverse-surface text-white overflow-hidden">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-caption-caps font-bold text-primary-fixed mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary-fixed" />
            <span>Institutional Partnerships • Grades 5–10</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Bring Practical STEM Learning to Your School
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore robotics, aeronautics and STEM learning opportunities for your school. Partner with IQONIX LABS to introduce turnkey lab setups, hardware kits, and syllabus-aligned activities for your students.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-caption sm:text-body-sm text-white/90 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-fixed" />
              <span>CBSE & ICSE Syllabi Alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-fixed" />
              <span>Hardware & Workstation Kits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-fixed" />
              <span>On-Site Faculty Training</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?type=demo"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary-container text-white text-btn font-semibold shadow-lg hover:bg-secondary-container hover:shadow-[0_0_25px_rgba(23,105,224,0.45)] transition-all gap-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact?type=stem-lab"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-btn font-semibold backdrop-blur-md transition-all"
            >
              Discuss a STEM Lab
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;

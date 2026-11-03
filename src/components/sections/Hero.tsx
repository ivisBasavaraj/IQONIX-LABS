import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Compass, Cpu, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full bg-surface-container-low overflow-hidden py-14 md:py-20 lg:py-24 border-b border-primary-container/10">
      {/* Decorative aerospace grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,105,224,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,105,224,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-caption-caps font-bold text-primary">
                Grades 5–10 CBSE & ICSE Aligned
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-hero-title font-bold tracking-tight text-on-surface max-w-xl">
              Hands-on Robotics, Aeronautics & STEM Education
            </h1>

            {/* Supporting Copy (SRS approved wording) */}
            <p className="text-body sm:text-subheading text-on-surface-variant max-w-lg leading-relaxed">
              Practical STEM education for school students, targeting CBSE and ICSE schools across Grades 5–10. Bridging textbook concepts with precision engineering laboratories.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary-container text-white text-btn font-semibold shadow-md hover:bg-secondary-container hover:shadow-[0_4px_16px_rgba(23,105,224,0.28)] transition-all gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/stem-lab-setup"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-surface-container-lowest text-primary-container border border-primary-container/20 text-btn font-semibold shadow-sm hover:bg-on-tertiary-container hover:border-primary-container/40 transition-all"
              >
                Discuss a STEM Lab
              </Link>
            </div>

            {/* Micro Spec Bar */}
            <div className="grid grid-cols-3 gap-4 pt-5 w-full border-t border-primary-container/15">
              <div>
                <div className="text-caption-caps font-bold text-primary">
                  Target Level
                </div>
                <div className="text-sm sm:text-base font-semibold text-on-surface mt-1">
                  Grades 5–10
                </div>
              </div>
              <div>
                <div className="text-caption-caps font-bold text-primary">
                  Curricula
                </div>
                <div className="text-sm sm:text-base font-semibold text-on-surface mt-1">
                  CBSE & ICSE
                </div>
              </div>
              <div>
                <div className="text-caption-caps font-bold text-primary">
                  Methodology
                </div>
                <div className="text-sm sm:text-base font-semibold text-on-surface mt-1">
                  Project-Based
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual (Image & Telemetry HUD) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-2xl border border-primary-container/20 group">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
                alt="Precision multi-axis robotic arm and engineering workstation"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Gradient overlay for aesthetic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-60" />

              {/* Telemetry Overlay Badge - Top Left */}
              <div className="absolute top-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-primary-container/20">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
                  <span className="text-caption-caps font-bold text-primary">
                    Laboratory Module
                  </span>
                </div>
                <p className="text-caption text-on-surface mt-0.5 font-semibold flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                  Robotics & Aeronautics Testbed
                </p>
              </div>

              {/* Telemetry Overlay Badge - Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-inverse-surface/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-xl text-white border border-white/10">
                <div className="text-caption-caps font-bold text-primary-fixed-dim flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-primary-fixed" />
                  Hands-on Verification
                </div>
                <div className="text-caption mt-0.5 flex items-center gap-2.5 text-on-primary-container/90">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3 h-3 text-primary-fixed-dim" /> Practical Build
                  </span>
                  <span className="w-1 h-1 rounded-full bg-primary-fixed-dim" />
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-primary-fixed-dim" /> Direct Calibration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

import React from 'react';
import { Cpu, Plane, FolderGit2, GraduationCap, Info } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { COMPANY_INFO } from '../../utils/constants';

interface AboutSectionProps {
  showExtendedInfo?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ showExtendedInfo = false }) => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Hands-on STEM Education',
      description:
        'Moving past passive textbook recitation through direct mechanical exploration, circuit configuration, and tactile prototyping.',
      tag: 'Active Experimentation',
    },
    {
      icon: Plane,
      title: 'Robotics, Aeronautics & Code',
      description:
        'Integrated curriculum bridging physical robotics architectures, aerodynamic flight systems, and embedded microcontroller coding.',
      tag: 'Integrated Disciplines',
    },
    {
      icon: FolderGit2,
      title: 'Practical, Project-Based Learning',
      description:
        'Every unit culminates in functional mechanical and electronic deliverables built, tuned, and tested by school students.',
      tag: 'Project-Centric',
    },
    {
      icon: GraduationCap,
      title: 'Supporting Classroom Learning',
      description:
        'Practical STEM activities built specifically to reinforce CBSE and ICSE science and mathematics frameworks in Grades 5–10.',
      tag: 'Curricular Synergy',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-bright relative" id="about-us">
      <span id="about" className="absolute -top-20" aria-hidden="true" />
      <Container>
        <SectionHeading
          tag="Introduction"
          title="About Us"
          description={COMPANY_INFO.shortDescription}
        />

        {/* 4 Core Pillars matching Stitch layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 md:p-7 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm hover:shadow-md hover:border-primary-container/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-on-tertiary-container flex items-center justify-center text-primary-container mb-5 shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-card-title font-semibold text-on-surface mb-2.5 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-5 font-bold text-caption-caps text-primary">
                  {pillar.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision Placeholders (as strictly required by SRS) */}
        {showExtendedInfo && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 md:p-7 rounded-2xl bg-surface-container-lowest border border-dashed border-primary-container/30">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="placeholder-tag">Placeholder</span>
                <h4 className="text-card-title font-semibold text-on-surface">Mission Statement</h4>
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {COMPANY_INFO.missionPlaceholder}
              </p>
              <div className="mt-3.5 flex items-center gap-1.5 text-caption text-primary">
                <Info className="w-3.5 h-3.5" />
                <span>To be confirmed by company owner before production publication.</span>
              </div>
            </div>

            <div className="p-6 md:p-7 rounded-2xl bg-surface-container-lowest border border-dashed border-primary-container/30">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="placeholder-tag">Placeholder</span>
                <h4 className="text-card-title font-semibold text-on-surface">Vision Statement</h4>
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {COMPANY_INFO.visionPlaceholder}
              </p>
              <div className="mt-3.5 flex items-center gap-1.5 text-caption text-primary">
                <Info className="w-3.5 h-3.5" />
                <span>To be confirmed by company owner before production publication.</span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

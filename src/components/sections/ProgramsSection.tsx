import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { PROGRAMS } from '../../data/programs';

interface ProgramsSectionProps {
  showFullDetails?: boolean;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ showFullDetails = false }) => {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="programs">
      <Container>
        <SectionHeading
          tag="Curriculum Modules"
          title="Programs"
          description="Four structured core educational tracks targeted for schools and students across Grades 5 through 10."
          action={
            !showFullDetails ? (
              <Link
                to="/programs"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary-container hover:text-secondary-container transition-colors"
              >
                <span>View Full Curriculum Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : undefined
          }
        />

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              id={program.slug}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-primary-container/15 shadow-sm hover:shadow-md hover:border-primary-container/30 transition-all flex flex-col justify-between"
            >
              {/* Optional top image on full details mode */}
              {showFullDetails && (
                <div className="h-48 md:h-56 w-full overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                    Program {program.number}
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Header Tag and Target */}
                <div className="flex items-center justify-between mb-3.5 flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-on-tertiary-container text-primary text-caption-caps font-bold">
                    Program {program.number}
                  </span>
                  <span className="text-caption font-medium text-on-surface-variant">
                    {program.grades} ({program.curriculumAlignment})
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-card-title font-semibold text-on-surface mb-2.5 tracking-tight">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-on-surface-variant mb-5 leading-relaxed">
                  {showFullDetails ? program.detailedDescription : program.shortDescription}
                </p>

                {/* Key Learning Outcomes Inset Box */}
                <div className="p-4 rounded-xl bg-surface-container-low border border-primary-container/10 mb-5">
                  <span className="text-caption-caps font-bold text-primary block mb-1.5">
                    Key Learning Outcomes
                  </span>
                  {showFullDetails ? (
                    <ul className="space-y-1.5 mt-2">
                      {program.learningOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-caption sm:text-body-sm text-on-surface">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-caption sm:text-body-sm text-on-surface leading-relaxed">
                      {program.learningOutcomes.slice(0, 3).join('. ')}.
                    </p>
                  )}
                </div>

                {/* Full Details Extra Specs */}
                {showFullDetails && program.keyTopics && (
                  <div className="mb-5">
                    <span className="text-caption-caps font-bold text-on-surface block mb-2">
                      Core Syllabus Topics
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.keyTopics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="text-caption text-on-surface-variant px-3 py-1.5 rounded-lg bg-surface-bright border border-primary-container/10"
                        >
                          • {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 flex items-center justify-between">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-btn font-semibold text-primary-container hover:text-secondary-container transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-caption text-outline">CBSE / ICSE</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

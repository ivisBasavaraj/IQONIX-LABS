import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const LearningApproach: React.FC = () => {
  const items = [
    {
      badge: 'Hardware Lab',
      tag: 'Active Kinematics',
      title: 'Physical Bench Prototyping',
      description:
        'Students physically assemble microcontrollers, wire breadboard connections, and calibrate precision drive mechanisms.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'High precision robotics laboratory cleanroom bench with engineering equipment',
    },
    {
      badge: 'Aero Bench',
      tag: 'Aerodynamic Rig',
      title: 'Flight & Payload Rigging',
      description:
        'Direct aerodynamic testing using small-scale wind tunnels and rotor balancing rigs to master lift, drag, and thrust.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Aerospace drone testing flight bench with aerodynamic measurement instrumentation',
    },
    {
      badge: 'Coding Studio',
      tag: 'Embedded Logic',
      title: 'Scripted Hardware Execution',
      description:
        'Writing algorithmic code that immediately commands physical stepper motors, LED feedback loops, and sensor triggers.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Modern technical classroom with students collaborating on algorithmic programming',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-bright" id="learning-approach">
      <Container>
        <SectionHeading
          tag="Methodology In Practice"
          title="Practical Learning"
          description="Practical, project-based STEM activities that support classroom learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-surface-container-lowest border border-primary-container/15 shadow-sm hover:shadow-md hover:border-primary-container/30 transition-all flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3.5 left-3.5 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-md text-primary text-caption-caps font-bold">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-card-title font-semibold text-on-surface mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-5 text-caption-caps font-bold text-outline">
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

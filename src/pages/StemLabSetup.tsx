import React, { useEffect } from 'react';
import { Container } from '../components/common/Container';
import { StemLabSection } from '../components/sections/StemLabSection';
import { Check, Shield, Layers, Users, Wrench, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StemLabSetup: React.FC = () => {
  useEffect(() => {
    document.title = 'STEM Lab Setup for Schools — IQONIX LABS | Turnkey Infrastructure';
  }, []);

  const labZones = [
    {
      title: 'Robotics & Hardware Assembly Zone',
      description:
        'Anti-static modular workbenches with precision hand tools, soldering stations with fume extractors, multimeters, and component organizers for mechanical linkages and servo assembly.',
      capacity: 'Accommodates 20–30 students in pairs',
    },
    {
      title: 'Aeronautics & Drone Testing Bay',
      description:
        'Dedicated enclosure with protective perimeter netting, sub-scale aerodynamic testing channels, drone balancing jigs, and calibrated digital load cells.',
      capacity: 'Safe multi-rotor hovering & wind velocity experiments',
    },
    {
      title: 'Coding & Firmware Programming Hub',
      description:
        'Dedicated workstations equipped with programming IDEs, microcontroller serial debuggers, and interactive simulation toolsets.',
      capacity: 'Code compiling and real-time controller flashing',
    },
    {
      title: 'Component Storage & Inventory Station',
      description:
        'Structured, lockable storage cabinets with individual student kit totes, safety glasses, battery charging bays, and spare replenishment drawers.',
      capacity: 'Streamlined period-end inventory verification',
    },
  ];

  return (
    <div className="py-12 md:py-16">
      {/* Header */}
      <Container className="mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container border border-primary-container/20 text-caption-caps font-bold text-primary mb-3">
            Campus Infrastructure
          </div>
          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-3.5">
            Turnkey STEM Lab Setup for Secondary Schools
          </h1>
          <p className="text-body sm:text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            From initial campus room layout planning to hardware installation, curriculum handbooks, and faculty enablement — we provide complete engineering laboratories tailored to CBSE and ICSE institutions.
          </p>
        </div>
      </Container>

      {/* Main Section */}
      <StemLabSection />

      {/* Spatial Zoning Blueprint */}
      <section className="py-14 bg-surface-bright">
        <Container>
          <div className="max-w-2xl mb-10">
            <span className="text-caption-caps font-bold text-primary block mb-1.5">
              Facility Planning
            </span>
            <h2 className="text-section-title font-bold text-on-surface tracking-tight mb-2">
              Recommended Lab Spatial Architecture
            </h2>
            <p className="text-body-sm sm:text-body text-on-surface-variant leading-relaxed">
              Optimized for secondary school footprints (typically 600 to 1,200 sq. ft.) to guarantee student safety, ergonomic flow, and effective teacher supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labZones.map((zone, idx) => (
              <div
                key={idx}
                className="p-6 md:p-7 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm hover:shadow-md hover:border-primary-container/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-caption-caps font-bold text-primary px-2.5 py-0.5 rounded bg-on-tertiary-container">
                      Zone 0{idx + 1}
                    </span>
                    <span className="text-caption text-outline">{zone.capacity}</span>
                  </div>
                  <h3 className="text-card-title font-semibold text-on-surface mb-2 tracking-tight">
                    {zone.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {zone.description}
                  </p>
                </div>
                <div className="pt-5 border-t border-primary-container/10 mt-5 flex items-center gap-2 text-caption text-primary font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Configured according to institutional room dimensions</span>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Compliance Disclaimer */}
          <div className="mt-8 p-3.5 rounded-xl bg-surface-container-low border border-primary-container/20 flex items-start gap-2.5 text-caption text-on-surface-variant leading-relaxed">
            <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>
              <strong>Note on Customization:</strong> Final bill of materials, kit allocations, and training packages are customized per school based on cohort volume and space availability, subject to project owner approval.
            </span>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 h-11 rounded-lg bg-primary-container text-white font-semibold text-btn hover:bg-secondary-container transition-all shadow-md gap-2"
            >
              <span>Request Lab Setup Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

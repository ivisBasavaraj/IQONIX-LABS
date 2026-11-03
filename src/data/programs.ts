import { Program } from '../types/program';

export const PROGRAMS: Program[] = [
  {
    id: 'program-01',
    number: '01',
    title: 'Robotics',
    slug: 'robotics',
    grades: 'Grades 5–10',
    curriculumAlignment: 'CBSE & ICSE Aligned',
    shortDescription:
      'Practical multi-axis robotics, sensor-actuator integration, deterministic kinematics, and microcontroller assembly. Students construct functional mechanisms from raw drive assemblies.',
    detailedDescription:
      'Our Robotics curriculum bridges foundational physics and engineering mechanics with hands-on robotic systems. School students in Grades 5–10 transition from basic mechanical linkages to microprocessor-controlled multi-sensor robotics platforms. Classroom instruction reinforces core science syllabus requirements through tactile building, gear ratio calculation, and real-time electronic calibration.',
    learningOutcomes: [
      'Electro-mechanical intuition and structural assembly principles',
      'Sensor feedback calibration (ultrasonic, infrared, and tactile)',
      'Algorithmic problem-solving and kinematic path planning',
      'Diagnostic circuit debugging and power regulation basics',
    ],
    keyTopics: [
      'Kinematic drive assemblies and motor gear trains',
      'Microcontroller architecture and sensor interfacing',
      'Closed-loop feedback systems and obstacle navigation',
      'Autonomous robotics behaviors and state control',
    ],
    equipmentSample: [
      'Modular robotics build kits with precision servomotors',
      'Programmable controller boards with sensor arrays',
      'Multimeters, electronic testing breadboards, and jumper cables',
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'High-precision robotics testing and microcontroller assembly station',
  },
  {
    id: 'program-02',
    number: '02',
    title: 'Aeronautics',
    slug: 'aeronautics',
    grades: 'Grades 5–10',
    curriculumAlignment: 'CBSE & ICSE Aligned',
    shortDescription:
      'Principles of flight dynamics, airfoil geometry, drone systems, telemetry streaming, and UAV piloting fundamentals. Direct wind testing and flight attitude adjustments.',
    detailedDescription:
      'The Aeronautics module brings the physics of flight into secondary school laboratories. Students explore Bernoulli’s principle, lift and drag forces, and multirotor aerodynamics through wind-tunnel style desktop test rigs and aerial prototyping. The program connects textbook Newtonian mechanics directly with aerospace flight behavior.',
    learningOutcomes: [
      'Aerodynamic stability analysis and airfoil contour understanding',
      'Structural payload balance and thrust-to-weight calculation',
      'Flight controller telemetry monitoring and gyro calibration',
      'Aviation safety protocols and quadcopter piloting fundamentals',
    ],
    keyTopics: [
      'Four forces of flight: Lift, Weight, Thrust, and Drag',
      'Airfoil design, angle of attack, and stall characteristics',
      'Drone electronics: Electronic Speed Controllers (ESCs) and brushless motors',
      'Inertial Measurement Units (IMU) and flight stabilization loops',
    ],
    equipmentSample: [
      'Sub-scale wind test channel and lift measurement meters',
      'Modular quadcopter training kits with prop guards',
      'Flight telemetry ground station software interfaces',
    ],
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Aerospace drone aerodynamics and flight instrumentation test bench',
  },
  {
    id: 'program-03',
    number: '03',
    title: 'Programming / Coding',
    slug: 'programming',
    grades: 'Grades 5–10',
    curriculumAlignment: 'CBSE & ICSE Aligned',
    shortDescription:
      'Computational thinking, block-to-syntax logic, embedded hardware scripting, and real-time controller firmware. Students write code that immediately controls physical laboratory machinery.',
    detailedDescription:
      'Designed specifically for school students to bridge graphical block-based programming with real text-based languages (such as Python and C++ firmware). The focus is firmly on hardware-driven coding: loops, conditionals, and functions that manipulate tangible real-world actuators and respond to live sensor input in real time.',
    learningOutcomes: [
      'Algorithmic decomposition and structured computational reasoning',
      'Syntax logic mastery transitioning from blocks to syntax-based scripts',
      'Hardware debugging loops and live serial monitor telemetry analysis',
      'Collaborative versioned project creation and testing',
    ],
    keyTopics: [
      'Foundations of imperative programming and variable scoping',
      'Event-driven execution and timer interrupts on microcontrollers',
      'Parsing analog and digital sensor streams with conditional triggers',
      'State-machine architecture for autonomous hardware actions',
    ],
    equipmentSample: [
      'Dual-display programming workstations with code IDEs',
      'Hardware simulation platforms and serial monitors',
      'Embedded microcontroller breakout development units',
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Students learning programming and embedded code for STEM robotics',
  },
  {
    id: 'program-04',
    number: '04',
    title: 'Related STEM Learning',
    slug: 'stem-learning',
    grades: 'Grades 5–10',
    curriculumAlignment: 'CBSE & ICSE Aligned',
    shortDescription:
      'Interdisciplinary inquiry connecting physics, mathematical modeling, mechanical systems, and environmental sensing through structured experiments and laboratory assignments.',
    detailedDescription:
      'This interdisciplinary module ties together curriculum science and mathematics topics with practical physical applications. From calculating velocities and gravitational acceleration to analyzing environmental sensor feeds and structural load-bearing trusses, students experience science as an active investigative discipline.',
    learningOutcomes: [
      'Scientific inquiry methodology and controlled variable experimentation',
      'Data-driven reasoning and graphing of physical sensor observations',
      'Cross-disciplinary prototyping integrating math, physics, and electronics',
      'Systemic thinking and engineering design process fundamentals',
    ],
    keyTopics: [
      'Kinematics, forces, work, energy, and momentum in physical experiments',
      'Environmental monitoring: atmospheric temperature, humidity, and light',
      'Structural engineering: truss design, compression, and tension',
      'Mathematical functions mapped to physical laboratory transducers',
    ],
    equipmentSample: [
      'Precision digital measurement instrumentation and sensor kits',
      'Structural bridge and truss mechanical testing apparatus',
      'Environmental logging modules with real-time data plotting',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Interdisciplinary STEM science experimentation and data analysis',
  },
];

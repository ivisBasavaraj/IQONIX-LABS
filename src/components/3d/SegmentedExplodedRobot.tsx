import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export type AnimationStage =
  | 'idle'
  | 'disassembly'
  | 'reassembly'
  | 'inspect_hands'
  | 'auto';

interface SegmentedExplodedRobotProps {
  currentStage?: AnimationStage;
  onStageChange?: (stage: AnimationStage, label: string) => void;
  speedMultiplier?: number;
}

// Smooth cubic easing for mechanical transitions
function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export const SegmentedExplodedRobot: React.FC<SegmentedExplodedRobotProps> = ({
  currentStage = 'auto',
  onStageChange,
  speedMultiplier = 1.0,
}) => {
  // Main root
  const rootRef = useRef<THREE.Group>(null);

  // Segmented Body Parts
  const headGroupRef = useRef<THREE.Group>(null);
  const neckRef = useRef<THREE.Group>(null);

  const chestLeftPlateRef = useRef<THREE.Group>(null);
  const chestRightPlateRef = useRef<THREE.Group>(null);
  const arcCoreRef = useRef<THREE.Group>(null);
  const arcTurbineRef = useRef<THREE.Group>(null);
  const coreLightRef = useRef<THREE.PointLight>(null);

  const spineGroupRef = useRef<THREE.Group>(null);
  const pelvisRef = useRef<THREE.Group>(null);

  // Left Arm Chain
  const leftUpperArmRef = useRef<THREE.Group>(null);
  const leftForearmRef = useRef<THREE.Group>(null);
  const leftHandRef = useRef<THREE.Group>(null);
  const leftFingersRef = useRef<(THREE.Group | null)[]>([]);

  // Right Arm Chain
  const rightUpperArmRef = useRef<THREE.Group>(null);
  const rightForearmRef = useRef<THREE.Group>(null);
  const rightHandRef = useRef<THREE.Group>(null);
  const rightFingersRef = useRef<(THREE.Group | null)[]>([]);

  // Legs Chain
  const leftThighRef = useRef<THREE.Group>(null);
  const leftCalfRef = useRef<THREE.Group>(null);
  const leftFootRef = useRef<THREE.Group>(null);

  const rightThighRef = useRef<THREE.Group>(null);
  const rightCalfRef = useRef<THREE.Group>(null);
  const rightFootRef = useRef<THREE.Group>(null);

  // Floating Mechanical Telemetry Rings
  const holoRingsRef = useRef<THREE.Group>(null);

  // Materials
  const materials = useMemo(() => {
    return {
      whiteArmor: new THREE.MeshStandardMaterial({
        color: '#f8fafc',
        metalness: 0.38,
        roughness: 0.16,
      }),
      silverTitanium: new THREE.MeshStandardMaterial({
        color: '#94a3b8',
        metalness: 0.94,
        roughness: 0.2,
      }),
      darkExoskeleton: new THREE.MeshStandardMaterial({
        color: '#0f172a',
        metalness: 0.85,
        roughness: 0.35,
      }),
      electricBlue: new THREE.MeshStandardMaterial({
        color: '#00e5ff',
        emissive: '#00b4d8',
        emissiveIntensity: 3.0,
        toneMapped: false,
      }),
      electricBlueIntense: new THREE.MeshStandardMaterial({
        color: '#38bdf8',
        emissive: '#0284c7',
        emissiveIntensity: 4.2,
        toneMapped: false,
      }),
      visorGlass: new THREE.MeshStandardMaterial({
        color: '#030712',
        metalness: 0.96,
        roughness: 0.06,
      }),
      goldAccent: new THREE.MeshStandardMaterial({
        color: '#eab308',
        metalness: 0.9,
        roughness: 0.25,
      }),
      holoGrid: new THREE.MeshBasicMaterial({
        color: '#00d2ff',
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    };
  }, []);

  // Internal Animation Timeline State
  const timeRef = useRef(0);
  const lastReportedStage = useRef<string>('');

  useFrame((state, delta) => {
    const pointer = state.pointer;
    timeRef.current += delta * speedMultiplier;

    // Timeline duration in seconds:
    // 0.0 - 2.5: Stage 1 (Initial Idle)
    // 2.5 - 6.5: Stage 2 (Mechanical Disassembly Exploded-View)
    // 6.5 - 7.5: Exploded Hold / Inspection
    // 7.5 - 11.5: Stage 3 (Reassembly & Snap-Lock)
    // 11.5 - 20.0: Stage 4 (Hands Inspection Sequence)
    // 20.0 - 24.0: Stage 5 (Natural Idle, then loop)
    const TOTAL_LOOP = 24.0;
    let t = timeRef.current % TOTAL_LOOP;

    // Manual override if a specific stage was forced via props
    if (currentStage === 'disassembly') {
      t = 6.8; // Hold at full exploded view
    } else if (currentStage === 'reassembly') {
      t = 11.2; // Right after snap reassembly
    } else if (currentStage === 'inspect_hands') {
      t = 14.5; // Mid hand inspection
    } else if (currentStage === 'idle') {
      t = 1.0; // Idle
    }

    // Determine current logical stage & notify parent
    let activeStageKey: AnimationStage = 'idle';
    let stageLabel = 'Stage 1: System Online — Idle';

    if (t >= 2.5 && t < 7.5) {
      activeStageKey = 'disassembly';
      stageLabel = 'Stage 2: Exploded Mechanical Disassembly';
    } else if (t >= 7.5 && t < 11.5) {
      activeStageKey = 'reassembly';
      stageLabel = 'Stage 3: High-Precision Reassembly & Locking';
    } else if (t >= 11.5 && t < 20.0) {
      activeStageKey = 'inspect_hands';
      stageLabel = 'Stage 4: Servo & Hand Diagnostics Inspection';
    } else {
      activeStageKey = 'idle';
      stageLabel = 'Stage 5: Calibration Complete — Idle Standby';
    }

    if (lastReportedStage.current !== activeStageKey) {
      lastReportedStage.current = activeStageKey;
      if (onStageChange) onStageChange(activeStageKey, stageLabel);
    }

    // Calculate disassembly exploded factor: 0.0 (assembled) -> 1.0 (fully exploded)
    let explodeFactor = 0;
    if (t >= 2.5 && t < 6.5) {
      // Disassembling outwards
      const progress = (t - 2.5) / 4.0;
      explodeFactor = easeInOutCubic(progress);
    } else if (t >= 6.5 && t < 7.5) {
      // Holding exploded view
      explodeFactor = 1.0;
    } else if (t >= 7.5 && t < 11.2) {
      // Reassembling smoothly back
      const progress = (t - 7.5) / 3.7;
      explodeFactor = 1.0 - easeInOutCubic(progress);
    } else {
      explodeFactor = 0;
    }

    // Reassembly snap energy flash at t = 11.0 to 11.6
    let energyPulse = 0;
    if (t >= 11.0 && t <= 11.8) {
      energyPulse = Math.sin((t - 11.0) / 0.8 * Math.PI) * 4.0;
    }
    if (coreLightRef.current) {
      coreLightRef.current.intensity = 2.5 + energyPulse + (explodeFactor * 2.0);
    }
    materials.electricBlueIntense.emissiveIntensity = 4.2 + energyPulse;

    // Turbine spin
    if (arcTurbineRef.current) {
      arcTurbineRef.current.rotation.z += delta * (1.5 + explodeFactor * 3.0);
    }

    // Floating telemetry rings
    if (holoRingsRef.current) {
      holoRingsRef.current.rotation.y += delta * 0.4;
      holoRingsRef.current.rotation.x = Math.sin(t * 0.7) * 0.12;
      holoRingsRef.current.scale.setScalar(1.0 + explodeFactor * 0.4);
    }

    // =========================================================================
    // 1. ROOT GROUP: Subtle breathing & hover
    // =========================================================================
    if (rootRef.current) {
      const breath = Math.sin(t * 1.8) * 0.03;
      rootRef.current.position.y = -0.15 + breath;
      // Cursor yaw influence during idle
      if (explodeFactor < 0.1 && (t < 11.5 || t >= 20.0)) {
        rootRef.current.rotation.y = THREE.MathUtils.lerp(
          rootRef.current.rotation.y,
          pointer.x * 0.15,
          0.05
        );
      } else {
        rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, 0, 0.05);
      }
    }

    // =========================================================================
    // 2. HEAD & NECK
    // =========================================================================
    if (headGroupRef.current) {
      // Disassembly exploded offset: moves UPWARDS +Y
      const baseY = 0.85;
      const targetY = baseY + explodeFactor * 0.55;
      headGroupRef.current.position.y = targetY;
      headGroupRef.current.position.z = explodeFactor * 0.1;

      // Hand Inspection & Tracking rotations:
      if (t >= 11.5 && t < 14.5) {
        // Looking down at Left Hand
        headGroupRef.current.rotation.x = THREE.MathUtils.lerp(headGroupRef.current.rotation.x, 0.32, 0.08);
        headGroupRef.current.rotation.y = THREE.MathUtils.lerp(headGroupRef.current.rotation.y, -0.42, 0.08);
        headGroupRef.current.rotation.z = THREE.MathUtils.lerp(headGroupRef.current.rotation.z, -0.1, 0.08);
      } else if (t >= 14.5 && t < 17.5) {
        // Turning to look at Right Hand
        headGroupRef.current.rotation.x = THREE.MathUtils.lerp(headGroupRef.current.rotation.x, 0.32, 0.08);
        headGroupRef.current.rotation.y = THREE.MathUtils.lerp(headGroupRef.current.rotation.y, 0.42, 0.08);
        headGroupRef.current.rotation.z = THREE.MathUtils.lerp(headGroupRef.current.rotation.z, 0.1, 0.08);
      } else if (t >= 17.5 && t < 19.5) {
        // Centering and looking down at both hands
        headGroupRef.current.rotation.x = THREE.MathUtils.lerp(headGroupRef.current.rotation.x, 0.28, 0.08);
        headGroupRef.current.rotation.y = THREE.MathUtils.lerp(headGroupRef.current.rotation.y, 0, 0.08);
        headGroupRef.current.rotation.z = THREE.MathUtils.lerp(headGroupRef.current.rotation.z, 0, 0.08);
      } else {
        // Idle: smooth cursor tracking
        const cursorX = pointer.x * 0.45;
        const cursorY = -pointer.y * 0.28;
        headGroupRef.current.rotation.x = THREE.MathUtils.lerp(headGroupRef.current.rotation.x, cursorY, 0.06);
        headGroupRef.current.rotation.y = THREE.MathUtils.lerp(headGroupRef.current.rotation.y, cursorX, 0.06);
        headGroupRef.current.rotation.z = THREE.MathUtils.lerp(headGroupRef.current.rotation.z, 0, 0.06);
      }
    }

    if (neckRef.current) {
      neckRef.current.position.y = 0.62 + explodeFactor * 0.25;
      neckRef.current.scale.setScalar(1.0 + explodeFactor * 0.15);
    }

    // =========================================================================
    // 3. CHEST PLATES & ARC CORE (Explode Forward and Outwards)
    // =========================================================================
    if (chestLeftPlateRef.current) {
      chestLeftPlateRef.current.position.x = -0.19 - explodeFactor * 0.32;
      chestLeftPlateRef.current.position.y = 0.28 + explodeFactor * 0.15;
      chestLeftPlateRef.current.position.z = 0.22 + explodeFactor * 0.38;
      chestLeftPlateRef.current.rotation.y = -0.1 - explodeFactor * 0.3;
    }

    if (chestRightPlateRef.current) {
      chestRightPlateRef.current.position.x = 0.19 + explodeFactor * 0.32;
      chestRightPlateRef.current.position.y = 0.28 + explodeFactor * 0.15;
      chestRightPlateRef.current.position.z = 0.22 + explodeFactor * 0.38;
      chestRightPlateRef.current.rotation.y = 0.1 + explodeFactor * 0.3;
    }

    if (arcCoreRef.current) {
      arcCoreRef.current.position.z = 0.24 + explodeFactor * 0.55;
      arcCoreRef.current.position.y = 0.25 + explodeFactor * 0.1;
    }

    // Spine and Pelvis
    if (spineGroupRef.current) {
      spineGroupRef.current.position.z = -explodeFactor * 0.25;
      spineGroupRef.current.position.y = 0.05 + explodeFactor * 0.08;
    }
    if (pelvisRef.current) {
      pelvisRef.current.position.y = -0.32 - explodeFactor * 0.18;
    }

    // =========================================================================
    // 4. ARMS, FOREARMS, HANDS, & FINGERS (Disassembly + Inspection Sequence)
    // =========================================================================
    // LEFT ARM EXPLODED POSITIONS
    if (leftUpperArmRef.current) {
      leftUpperArmRef.current.position.x = -0.46 - explodeFactor * 0.45;
      leftUpperArmRef.current.position.y = 0.38 + explodeFactor * 0.18;
      leftUpperArmRef.current.position.z = explodeFactor * 0.1;
    }
    if (leftForearmRef.current) {
      leftForearmRef.current.position.y = -0.34 - explodeFactor * 0.32;
      leftForearmRef.current.position.x = -explodeFactor * 0.22;
    }
    if (leftHandRef.current) {
      leftHandRef.current.position.y = -0.32 - explodeFactor * 0.28;
    }

    // RIGHT ARM EXPLODED POSITIONS
    if (rightUpperArmRef.current) {
      rightUpperArmRef.current.position.x = 0.46 + explodeFactor * 0.45;
      rightUpperArmRef.current.position.y = 0.38 + explodeFactor * 0.18;
      rightUpperArmRef.current.position.z = explodeFactor * 0.1;
    }
    if (rightForearmRef.current) {
      rightForearmRef.current.position.y = -0.34 - explodeFactor * 0.32;
      rightForearmRef.current.position.x = explodeFactor * 0.22;
    }
    if (rightHandRef.current) {
      rightHandRef.current.position.y = -0.32 - explodeFactor * 0.28;
    }

    // Individual Finger Disassembly Spacing
    for (let i = 0; i < 5; i++) {
      const leftF = leftFingersRef.current[i];
      if (leftF) {
        leftF.position.y = -0.08 - explodeFactor * (0.04 + i * 0.015);
        leftF.position.x = (-0.045 + i * 0.022) * (1.0 + explodeFactor * 0.9);
      }
      const rightF = rightFingersRef.current[i];
      if (rightF) {
        rightF.position.y = -0.08 - explodeFactor * (0.04 + i * 0.015);
        rightF.position.x = (-0.045 + i * 0.022) * (1.0 + explodeFactor * 0.9);
      }
    }

    // STAGE 4: HAND INSPECTION KINEMATICS (When fully assembled)
    if (explodeFactor === 0) {
      // Left Arm Kinematics
      if (t >= 11.5 && t < 14.5) {
        // Inspect Left Hand: Raise arm, bend elbow, rotate wrist inward to expose palm
        const progress = Math.min(1.0, (t - 11.5) / 0.8);
        const ease = easeInOutCubic(progress);

        if (leftUpperArmRef.current) {
          leftUpperArmRef.current.rotation.x = THREE.MathUtils.lerp(0.12, -0.92, ease);
          leftUpperArmRef.current.rotation.z = THREE.MathUtils.lerp(0.18, 0.42, ease);
          leftUpperArmRef.current.rotation.y = THREE.MathUtils.lerp(0, 0.35, ease);
        }
        if (leftForearmRef.current) {
          leftForearmRef.current.rotation.x = THREE.MathUtils.lerp(-0.35, -0.95, ease);
        }
        if (leftHandRef.current) {
          // Rotate wrist to present palm directly to head
          leftHandRef.current.rotation.z = THREE.MathUtils.lerp(0, 1.45, ease);
          leftHandRef.current.rotation.y = THREE.MathUtils.lerp(0, 0.45, ease);
        }

        // Fingers Sequential Calibration Flex: thumb to pinky
        for (let i = 0; i < 5; i++) {
          const finger = leftFingersRef.current[i];
          if (finger) {
            const flexWave = Math.sin((t - 12.0) * 4.5 - i * 0.6);
            finger.rotation.x = THREE.MathUtils.clamp(flexWave * 0.8, -0.1, 1.1);
          }
        }
      } else if (t >= 17.5 && t < 19.5) {
        // Both hands check together
        if (leftUpperArmRef.current) {
          leftUpperArmRef.current.rotation.x = -0.65;
          leftUpperArmRef.current.rotation.z = 0.35;
          leftUpperArmRef.current.rotation.y = 0.2;
        }
        if (leftForearmRef.current) leftForearmRef.current.rotation.x = -0.8;
        if (leftHandRef.current) leftHandRef.current.rotation.z = 0.8;
        for (let i = 0; i < 5; i++) {
          const finger = leftFingersRef.current[i];
          if (finger) finger.rotation.x = Math.sin(t * 3.5 + i * 0.4) * 0.35 + 0.3;
        }
      } else {
        // Natural relaxed rest pose
        if (leftUpperArmRef.current) {
          leftUpperArmRef.current.rotation.x = THREE.MathUtils.lerp(leftUpperArmRef.current.rotation.x, 0.12, 0.08);
          leftUpperArmRef.current.rotation.z = THREE.MathUtils.lerp(leftUpperArmRef.current.rotation.z, 0.18, 0.08);
          leftUpperArmRef.current.rotation.y = THREE.MathUtils.lerp(leftUpperArmRef.current.rotation.y, 0, 0.08);
        }
        if (leftForearmRef.current) {
          leftForearmRef.current.rotation.x = THREE.MathUtils.lerp(leftForearmRef.current.rotation.x, -0.35, 0.08);
        }
        if (leftHandRef.current) {
          leftHandRef.current.rotation.z = THREE.MathUtils.lerp(leftHandRef.current.rotation.z, 0, 0.08);
          leftHandRef.current.rotation.y = THREE.MathUtils.lerp(leftHandRef.current.rotation.y, 0, 0.08);
        }
        for (let i = 0; i < 5; i++) {
          const finger = leftFingersRef.current[i];
          if (finger) finger.rotation.x = THREE.MathUtils.lerp(finger.rotation.x, 0.1, 0.08);
        }
      }

      // Right Arm Kinematics
      if (t >= 14.5 && t < 17.5) {
        // Inspect Right Hand: Raise right arm, rotate wrist, flex digits
        const progress = Math.min(1.0, (t - 14.5) / 0.8);
        const ease = easeInOutCubic(progress);

        if (rightUpperArmRef.current) {
          rightUpperArmRef.current.rotation.x = THREE.MathUtils.lerp(0.12, -0.92, ease);
          rightUpperArmRef.current.rotation.z = THREE.MathUtils.lerp(-0.18, -0.42, ease);
          rightUpperArmRef.current.rotation.y = THREE.MathUtils.lerp(0, -0.35, ease);
        }
        if (rightForearmRef.current) {
          rightForearmRef.current.rotation.x = THREE.MathUtils.lerp(-0.35, -0.95, ease);
        }
        if (rightHandRef.current) {
          rightHandRef.current.rotation.z = THREE.MathUtils.lerp(0, -1.45, ease);
          rightHandRef.current.rotation.y = THREE.MathUtils.lerp(0, -0.45, ease);
        }

        // Right Fingers Sequential Calibration Flex
        for (let i = 0; i < 5; i++) {
          const finger = rightFingersRef.current[i];
          if (finger) {
            const flexWave = Math.sin((t - 15.0) * 4.5 - i * 0.6);
            finger.rotation.x = THREE.MathUtils.clamp(flexWave * 0.8, -0.1, 1.1);
          }
        }
      } else if (t >= 17.5 && t < 19.5) {
        // Both hands check together
        if (rightUpperArmRef.current) {
          rightUpperArmRef.current.rotation.x = -0.65;
          rightUpperArmRef.current.rotation.z = -0.35;
          rightUpperArmRef.current.rotation.y = -0.2;
        }
        if (rightForearmRef.current) rightForearmRef.current.rotation.x = -0.8;
        if (rightHandRef.current) rightHandRef.current.rotation.z = -0.8;
        for (let i = 0; i < 5; i++) {
          const finger = rightFingersRef.current[i];
          if (finger) finger.rotation.x = Math.sin(t * 3.5 + i * 0.4) * 0.35 + 0.3;
        }
      } else {
        // Natural relaxed rest pose
        if (rightUpperArmRef.current) {
          rightUpperArmRef.current.rotation.x = THREE.MathUtils.lerp(rightUpperArmRef.current.rotation.x, 0.12, 0.08);
          rightUpperArmRef.current.rotation.z = THREE.MathUtils.lerp(rightUpperArmRef.current.rotation.z, -0.18, 0.08);
          rightUpperArmRef.current.rotation.y = THREE.MathUtils.lerp(rightUpperArmRef.current.rotation.y, 0, 0.08);
        }
        if (rightForearmRef.current) {
          rightForearmRef.current.rotation.x = THREE.MathUtils.lerp(rightForearmRef.current.rotation.x, -0.35, 0.08);
        }
        if (rightHandRef.current) {
          rightHandRef.current.rotation.z = THREE.MathUtils.lerp(rightHandRef.current.rotation.z, 0, 0.08);
          rightHandRef.current.rotation.y = THREE.MathUtils.lerp(rightHandRef.current.rotation.y, 0, 0.08);
        }
        for (let i = 0; i < 5; i++) {
          const finger = rightFingersRef.current[i];
          if (finger) finger.rotation.x = THREE.MathUtils.lerp(finger.rotation.x, 0.1, 0.08);
        }
      }
    }

    // =========================================================================
    // 5. LEGS, CALVES, & FEET (Disassemble Downward & Outward)
    // =========================================================================
    if (leftThighRef.current) {
      leftThighRef.current.position.x = -0.18 - explodeFactor * 0.28;
      leftThighRef.current.position.y = -0.48 - explodeFactor * 0.32;
      leftThighRef.current.position.z = -explodeFactor * 0.12;
    }
    if (leftCalfRef.current) {
      leftCalfRef.current.position.y = -0.42 - explodeFactor * 0.35;
      leftCalfRef.current.position.z = explodeFactor * 0.15;
    }
    if (leftFootRef.current) {
      leftFootRef.current.position.y = -0.42 - explodeFactor * 0.25;
      leftFootRef.current.position.z = 0.08 + explodeFactor * 0.18;
    }

    if (rightThighRef.current) {
      rightThighRef.current.position.x = 0.18 + explodeFactor * 0.28;
      rightThighRef.current.position.y = -0.48 - explodeFactor * 0.32;
      rightThighRef.current.position.z = -explodeFactor * 0.12;
    }
    if (rightCalfRef.current) {
      rightCalfRef.current.position.y = -0.42 - explodeFactor * 0.35;
      rightCalfRef.current.position.z = explodeFactor * 0.15;
    }
    if (rightFootRef.current) {
      rightFootRef.current.position.y = -0.42 - explodeFactor * 0.25;
      rightFootRef.current.position.z = 0.08 + explodeFactor * 0.18;
    }
  });

  return (
    <group ref={rootRef} position={[0, -0.1, 0]}>
      {/* ===================================================================
          1. HEAD & VISOR SENSORY SUITE
      =================================================================== */}
      <group ref={headGroupRef} position={[0, 0.85, 0]}>
        {/* Aerodynamic Skull Carapace */}
        <mesh material={materials.whiteArmor} castShadow receiveShadow>
          <sphereGeometry args={[0.26, 32, 28]} />
        </mesh>

        {/* Crown Telemetry Crest */}
        <mesh position={[0, 0.2, 0.04]} material={materials.silverTitanium}>
          <boxGeometry args={[0.09, 0.1, 0.32]} />
        </mesh>
        <mesh position={[0, 0.24, 0.05]} material={materials.electricBlue}>
          <boxGeometry args={[0.03, 0.015, 0.26]} />
        </mesh>

        {/* Dark Polycarbonate Visor Faceplate */}
        <mesh position={[0, 0.01, 0.18]} rotation={[0.1, 0, 0]} material={materials.visorGlass}>
          <boxGeometry args={[0.34, 0.19, 0.14]} />
        </mesh>

        {/* Dual Concentric Electric-Blue Ocular Sensors */}
        <group position={[0, 0.02, 0.25]}>
          <mesh position={[-0.085, 0, 0]} material={materials.electricBlueIntense}>
            <sphereGeometry args={[0.036, 16, 16]} />
          </mesh>
          <mesh position={[-0.085, 0, -0.01]} material={materials.silverTitanium}>
            <ringGeometry args={[0.038, 0.055, 24]} />
          </mesh>
          <mesh position={[0.085, 0, 0]} material={materials.electricBlueIntense}>
            <sphereGeometry args={[0.036, 16, 16]} />
          </mesh>
          <mesh position={[0.085, 0, -0.01]} material={materials.silverTitanium}>
            <ringGeometry args={[0.038, 0.055, 24]} />
          </mesh>
          <mesh position={[0, -0.055, 0]} material={materials.electricBlue}>
            <boxGeometry args={[0.16, 0.012, 0.01]} />
          </mesh>
        </group>

        {/* Titanium Cheekbones & Chin Bar */}
        <mesh position={[-0.16, -0.1, 0.08]} rotation={[0, 0.25, -0.2]} material={materials.whiteArmor}>
          <boxGeometry args={[0.07, 0.16, 0.18]} />
        </mesh>
        <mesh position={[0.16, -0.1, 0.08]} rotation={[0, -0.25, 0.2]} material={materials.whiteArmor}>
          <boxGeometry args={[0.07, 0.16, 0.18]} />
        </mesh>
        <mesh position={[0, -0.18, 0.11]} material={materials.silverTitanium}>
          <boxGeometry args={[0.14, 0.07, 0.12]} />
        </mesh>

        {/* Lateral Audio/Telemetry Earpieces */}
        <mesh position={[-0.26, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.silverTitanium}>
          <cylinderGeometry args={[0.07, 0.07, 0.05, 20]} />
        </mesh>
        <mesh position={[0.26, 0, 0]} rotation={[0, 0, -Math.PI / 2]} material={materials.silverTitanium}>
          <cylinderGeometry args={[0.07, 0.07, 0.05, 20]} />
        </mesh>
      </group>

      {/* Cervical Gimbal / Neck */}
      <group ref={neckRef} position={[0, 0.62, 0]}>
        <mesh material={materials.darkExoskeleton}>
          <cylinderGeometry args={[0.09, 0.11, 0.18, 16]} />
        </mesh>
        <mesh position={[0, 0, 0]} material={materials.electricBlue}>
          <torusGeometry args={[0.11, 0.01, 12, 24]} />
        </mesh>
      </group>

      {/* ===================================================================
          2. TORSO, CHEST CARAPACE, & ARC CORE
      =================================================================== */}
      {/* Central Inner Exoskeleton Frame */}
      <mesh position={[0, 0.25, 0]} material={materials.darkExoskeleton} castShadow>
        <boxGeometry args={[0.54, 0.52, 0.32]} />
      </mesh>

      {/* Clavicle Beam */}
      <mesh position={[0, 0.48, 0.04]} material={materials.silverTitanium}>
        <boxGeometry args={[0.62, 0.06, 0.2]} />
      </mesh>

      {/* Disassemblable Left Chest Plate */}
      <group ref={chestLeftPlateRef} position={[-0.19, 0.28, 0.22]}>
        <mesh material={materials.whiteArmor} castShadow>
          <boxGeometry args={[0.26, 0.28, 0.09]} />
        </mesh>
        <mesh position={[0, -0.11, 0.05]} material={materials.electricBlue}>
          <boxGeometry args={[0.2, 0.012, 0.01]} />
        </mesh>
      </group>

      {/* Disassemblable Right Chest Plate */}
      <group ref={chestRightPlateRef} position={[0.19, 0.28, 0.22]}>
        <mesh material={materials.whiteArmor} castShadow>
          <boxGeometry args={[0.26, 0.28, 0.09]} />
        </mesh>
        <mesh position={[0, -0.11, 0.05]} material={materials.electricBlue}>
          <boxGeometry args={[0.2, 0.012, 0.01]} />
        </mesh>
      </group>

      {/* Central Arc Core Energy Cell */}
      <group ref={arcCoreRef} position={[0, 0.25, 0.24]}>
        <mesh material={materials.silverTitanium} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.06, 32]} />
        </mesh>
        <pointLight ref={coreLightRef} color="#00d4ff" intensity={3.5} distance={2.4} decay={2} />
        <mesh position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]} material={materials.electricBlueIntense}>
          <cylinderGeometry args={[0.075, 0.075, 0.05, 32]} />
        </mesh>
        <group ref={arcTurbineRef} position={[0, 0, 0.038]}>
          <mesh material={materials.silverTitanium}>
            <boxGeometry args={[0.11, 0.016, 0.008]} />
          </mesh>
          <mesh material={materials.silverTitanium} rotation={[0, 0, Math.PI / 3]}>
            <boxGeometry args={[0.11, 0.016, 0.008]} />
          </mesh>
          <mesh material={materials.silverTitanium} rotation={[0, 0, -Math.PI / 3]}>
            <boxGeometry args={[0.11, 0.016, 0.008]} />
          </mesh>
        </group>
      </group>

      {/* Articulated Spine Vertebrae (Back) */}
      <group ref={spineGroupRef} position={[0, 0.1, -0.18]}>
        {[0.14, 0.04, -0.06, -0.16].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.silverTitanium}>
            <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} />
          </mesh>
        ))}
        <mesh position={[0, -0.01, -0.03]} material={materials.electricBlue}>
          <boxGeometry args={[0.015, 0.42, 0.01]} />
        </mesh>
      </group>

      {/* Pelvis / Hip Girdle */}
      <group ref={pelvisRef} position={[0, -0.32, 0]}>
        <mesh material={materials.whiteArmor} castShadow>
          <cylinderGeometry args={[0.26, 0.2, 0.16, 24]} />
        </mesh>
        <mesh position={[0, -0.06, 0]} material={materials.silverTitanium}>
          <torusGeometry args={[0.23, 0.015, 12, 28]} />
        </mesh>
        <mesh position={[0, -0.06, 0]} material={materials.electricBlue}>
          <torusGeometry args={[0.21, 0.008, 12, 28]} />
        </mesh>
      </group>

      {/* ===================================================================
          3. LEFT ARM HIERARCHY (Upper Arm -> Forearm -> Hand -> 5 Fingers)
      =================================================================== */}
      <group ref={leftUpperArmRef} position={[-0.46, 0.38, 0]}>
        {/* Shoulder Glenoid Ball & Pauldron */}
        <mesh material={materials.silverTitanium}>
          <sphereGeometry args={[0.12, 20, 16]} />
        </mesh>
        <mesh position={[-0.04, 0.04, 0]} rotation={[0, 0, -0.28]} material={materials.whiteArmor}>
          <boxGeometry args={[0.19, 0.14, 0.22]} />
        </mesh>
        <mesh position={[-0.05, 0.08, 0]} rotation={[0, 0, -0.28]} material={materials.electricBlue}>
          <boxGeometry args={[0.16, 0.012, 0.18]} />
        </mesh>

        {/* Bicep Cylinder */}
        <mesh position={[-0.04, -0.16, 0]} material={materials.darkExoskeleton}>
          <cylinderGeometry args={[0.06, 0.055, 0.22, 16]} />
        </mesh>
        <mesh position={[-0.04, -0.16, 0.04]} material={materials.whiteArmor}>
          <boxGeometry args={[0.09, 0.18, 0.04]} />
        </mesh>

        {/* Elbow Servo Joint -> Forearm */}
        <group ref={leftForearmRef} position={[-0.04, -0.34, 0]}>
          <mesh material={materials.silverTitanium} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
          </mesh>
          <mesh material={materials.goldAccent} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, 0.14, 12]} />
          </mesh>

          {/* Forearm Shroud */}
          <mesh position={[0, -0.15, 0.02]} material={materials.whiteArmor}>
            <boxGeometry args={[0.11, 0.24, 0.12]} />
          </mesh>
          <mesh position={[0, -0.15, 0.082]} material={materials.electricBlue}>
            <boxGeometry args={[0.015, 0.2, 0.01]} />
          </mesh>

          {/* Wrist Joint -> Hand Palm */}
          <group ref={leftHandRef} position={[0, -0.32, 0]}>
            <mesh material={materials.silverTitanium}>
              <boxGeometry args={[0.09, 0.07, 0.04]} />
            </mesh>
            <mesh position={[0, 0, 0.022]} material={materials.electricBlue}>
              <boxGeometry args={[0.06, 0.01, 0.005]} />
            </mesh>

            {/* 5 Articulated Individual Left Fingers */}
            {[-0.036, -0.018, 0, 0.018, 0.036].map((x, idx) => (
              <group
                key={idx}
                ref={(el) => (leftFingersRef.current[idx] = el)}
                position={[x, -0.08, idx === 0 ? 0.012 : 0]}
              >
                {/* Proximal Phalanx */}
                <mesh material={materials.silverTitanium}>
                  <cylinderGeometry args={[0.009, 0.008, 0.05, 8]} />
                </mesh>
                {/* Distal Phalanx */}
                <mesh position={[0, -0.04, 0]} material={materials.darkExoskeleton}>
                  <cylinderGeometry args={[0.007, 0.006, 0.04, 8]} />
                </mesh>
              </group>
            ))}
          </group>
        </group>
      </group>

      {/* ===================================================================
          4. RIGHT ARM HIERARCHY (Upper Arm -> Forearm -> Hand -> 5 Fingers)
      =================================================================== */}
      <group ref={rightUpperArmRef} position={[0.46, 0.38, 0]}>
        {/* Shoulder Glenoid Ball & Pauldron */}
        <mesh material={materials.silverTitanium}>
          <sphereGeometry args={[0.12, 20, 16]} />
        </mesh>
        <mesh position={[0.04, 0.04, 0]} rotation={[0, 0, 0.28]} material={materials.whiteArmor}>
          <boxGeometry args={[0.19, 0.14, 0.22]} />
        </mesh>
        <mesh position={[0.05, 0.08, 0]} rotation={[0, 0, 0.28]} material={materials.electricBlue}>
          <boxGeometry args={[0.16, 0.012, 0.18]} />
        </mesh>

        {/* Bicep Cylinder */}
        <mesh position={[0.04, -0.16, 0]} material={materials.darkExoskeleton}>
          <cylinderGeometry args={[0.06, 0.055, 0.22, 16]} />
        </mesh>
        <mesh position={[0.04, -0.16, 0.04]} material={materials.whiteArmor}>
          <boxGeometry args={[0.09, 0.18, 0.04]} />
        </mesh>

        {/* Elbow Servo Joint -> Forearm */}
        <group ref={rightForearmRef} position={[0.04, -0.34, 0]}>
          <mesh material={materials.silverTitanium} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
          </mesh>
          <mesh material={materials.goldAccent} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, 0.14, 12]} />
          </mesh>

          {/* Forearm Shroud */}
          <mesh position={[0, -0.15, 0.02]} material={materials.whiteArmor}>
            <boxGeometry args={[0.11, 0.24, 0.12]} />
          </mesh>
          <mesh position={[0, -0.15, 0.082]} material={materials.electricBlue}>
            <boxGeometry args={[0.015, 0.2, 0.01]} />
          </mesh>

          {/* Wrist Joint -> Hand Palm */}
          <group ref={rightHandRef} position={[0, -0.32, 0]}>
            <mesh material={materials.silverTitanium}>
              <boxGeometry args={[0.09, 0.07, 0.04]} />
            </mesh>
            <mesh position={[0, 0, 0.022]} material={materials.electricBlue}>
              <boxGeometry args={[0.06, 0.01, 0.005]} />
            </mesh>

            {/* 5 Articulated Individual Right Fingers */}
            {[-0.036, -0.018, 0, 0.018, 0.036].map((x, idx) => (
              <group
                key={idx}
                ref={(el) => (rightFingersRef.current[idx] = el)}
                position={[x, -0.08, idx === 4 ? 0.012 : 0]}
              >
                {/* Proximal Phalanx */}
                <mesh material={materials.silverTitanium}>
                  <cylinderGeometry args={[0.009, 0.008, 0.05, 8]} />
                </mesh>
                {/* Distal Phalanx */}
                <mesh position={[0, -0.04, 0]} material={materials.darkExoskeleton}>
                  <cylinderGeometry args={[0.007, 0.006, 0.04, 8]} />
                </mesh>
              </group>
            ))}
          </group>
        </group>
      </group>

      {/* ===================================================================
          5. LEFT LEG (Thigh -> Knee -> Calf / Shin -> Foot)
      =================================================================== */}
      <group ref={leftThighRef} position={[-0.18, -0.48, 0]}>
        {/* Hip Joint Ball */}
        <mesh material={materials.silverTitanium}>
          <sphereGeometry args={[0.09, 16, 16]} />
        </mesh>
        {/* Thigh Armor */}
        <mesh position={[0, -0.18, 0]} material={materials.whiteArmor}>
          <boxGeometry args={[0.13, 0.28, 0.15]} />
        </mesh>
        <mesh position={[0, -0.18, 0.078]} material={materials.electricBlue}>
          <boxGeometry args={[0.015, 0.22, 0.01]} />
        </mesh>

        {/* Knee Servo -> Calf */}
        <group ref={leftCalfRef} position={[0, -0.42, 0]}>
          <mesh material={materials.silverTitanium} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.065, 0.065, 0.12, 16]} />
          </mesh>
          <mesh position={[0, -0.18, 0.01]} material={materials.darkExoskeleton}>
            <boxGeometry args={[0.11, 0.28, 0.13]} />
          </mesh>
          <mesh position={[0, -0.18, 0.078]} material={materials.whiteArmor}>
            <boxGeometry args={[0.09, 0.24, 0.02]} />
          </mesh>

          {/* Ankle -> Foot */}
          <group ref={leftFootRef} position={[0, -0.42, 0.08]}>
            <mesh material={materials.silverTitanium}>
              <boxGeometry args={[0.12, 0.07, 0.24]} />
            </mesh>
            <mesh position={[0, -0.02, 0.12]} material={materials.whiteArmor}>
              <boxGeometry args={[0.11, 0.04, 0.06]} />
            </mesh>
            <mesh position={[0, 0.02, 0]} material={materials.electricBlue}>
              <boxGeometry args={[0.08, 0.01, 0.18]} />
            </mesh>
          </group>
        </group>
      </group>

      {/* ===================================================================
          6. RIGHT LEG (Thigh -> Knee -> Calf / Shin -> Foot)
      =================================================================== */}
      <group ref={rightThighRef} position={[0.18, -0.48, 0]}>
        {/* Hip Joint Ball */}
        <mesh material={materials.silverTitanium}>
          <sphereGeometry args={[0.09, 16, 16]} />
        </mesh>
        {/* Thigh Armor */}
        <mesh position={[0, -0.18, 0]} material={materials.whiteArmor}>
          <boxGeometry args={[0.13, 0.28, 0.15]} />
        </mesh>
        <mesh position={[0, -0.18, 0.078]} material={materials.electricBlue}>
          <boxGeometry args={[0.015, 0.22, 0.01]} />
        </mesh>

        {/* Knee Servo -> Calf */}
        <group ref={rightCalfRef} position={[0, -0.42, 0]}>
          <mesh material={materials.silverTitanium} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.065, 0.065, 0.12, 16]} />
          </mesh>
          <mesh position={[0, -0.18, 0.01]} material={materials.darkExoskeleton}>
            <boxGeometry args={[0.11, 0.28, 0.13]} />
          </mesh>
          <mesh position={[0, -0.18, 0.078]} material={materials.whiteArmor}>
            <boxGeometry args={[0.09, 0.24, 0.02]} />
          </mesh>

          {/* Ankle -> Foot */}
          <group ref={rightFootRef} position={[0, -0.42, 0.08]}>
            <mesh material={materials.silverTitanium}>
              <boxGeometry args={[0.12, 0.07, 0.24]} />
            </mesh>
            <mesh position={[0, -0.02, 0.12]} material={materials.whiteArmor}>
              <boxGeometry args={[0.11, 0.04, 0.06]} />
            </mesh>
            <mesh position={[0, 0.02, 0]} material={materials.electricBlue}>
              <boxGeometry args={[0.08, 0.01, 0.18]} />
            </mesh>
          </group>
        </group>
      </group>

      {/* ===================================================================
          7. SURROUNDING HOLOGRAPHIC TELEMETRY RINGS
      =================================================================== */}
      <group ref={holoRingsRef} position={[0, 0, 0]}>
        <mesh rotation={[Math.PI / 2.2, 0, 0]} material={materials.holoGrid}>
          <ringGeometry args={[1.35, 1.4, 48]} />
        </mesh>
        <mesh rotation={[-Math.PI / 2.4, 0.25, 0]} material={materials.holoGrid}>
          <ringGeometry args={[1.05, 1.09, 36]} />
        </mesh>
        <mesh position={[1.38, 0, 0]} material={materials.electricBlueIntense}>
          <sphereGeometry args={[0.028, 12, 12]} />
        </mesh>
        <mesh position={[-1.07, 0.25, 0.1]} material={materials.electricBlueIntense}>
          <sphereGeometry args={[0.025, 12, 12]} />
        </mesh>
      </group>
    </group>
  );
};

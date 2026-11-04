import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProceduralRobotProps {
  isInteracting?: boolean;
  onInteract?: () => void;
}

export const ProceduralHumanoidRobot: React.FC<ProceduralRobotProps> = ({
  onInteract,
}) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const neckRef = useRef<THREE.Group>(null);
  const chestRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const coreLightRef = useRef<THREE.PointLight>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const rightForearmRef = useRef<THREE.Group>(null);
  const rightHandRef = useRef<THREE.Group>(null);
  const holoRingsRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>(null);

  // High-performance shared materials
  const materials = useMemo(() => {
    return {
      whiteArmor: new THREE.MeshStandardMaterial({
        color: '#f8fafc',
        metalness: 0.4,
        roughness: 0.18,
      }),
      silverMetal: new THREE.MeshStandardMaterial({
        color: '#94a3b8',
        metalness: 0.92,
        roughness: 0.22,
      }),
      darkChassis: new THREE.MeshStandardMaterial({
        color: '#0f172a',
        metalness: 0.85,
        roughness: 0.35,
      }),
      electricBlue: new THREE.MeshStandardMaterial({
        color: '#00e5ff',
        emissive: '#00b4d8',
        emissiveIntensity: 2.8,
        toneMapped: false,
      }),
      electricBlueGlow: new THREE.MeshStandardMaterial({
        color: '#38bdf8',
        emissive: '#0284c7',
        emissiveIntensity: 3.5,
        toneMapped: false,
      }),
      visorGlass: new THREE.MeshStandardMaterial({
        color: '#030712',
        metalness: 0.95,
        roughness: 0.08,
      }),
      goldPin: new THREE.MeshStandardMaterial({
        color: '#eab308',
        metalness: 0.88,
        roughness: 0.25,
      }),
      hologramLine: new THREE.MeshBasicMaterial({
        color: '#00d2ff',
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      }),
    };
  }, []);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setClickedTime(Date.now());
    if (onInteract) onInteract();
  };

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // 1. Organic Idle Float & Breathing
    if (rootGroupRef.current) {
      // Gentle floating hover motion
      rootGroupRef.current.position.y = Math.sin(t * 1.6) * 0.06 - 0.2;
      // Subtle organic sway
      rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        rootGroupRef.current.rotation.y,
        Math.sin(t * 0.8) * 0.05 + pointer.x * 0.15,
        0.05
      );
    }

    // 2. Interactive Head Tracking (smooth damp towards cursor)
    if (headRef.current) {
      const targetHeadY = pointer.x * 0.55;
      const targetHeadX = -pointer.y * 0.35;
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetHeadY,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetHeadX + Math.sin(t * 1.6) * 0.02,
        0.08
      );
      headRef.current.rotation.z = THREE.MathUtils.lerp(
        headRef.current.rotation.z,
        -pointer.x * 0.12,
        0.08
      );
    }

    // 3. Neck Piston sync
    if (neckRef.current && headRef.current) {
      neckRef.current.rotation.y = headRef.current.rotation.y * 0.45;
      neckRef.current.rotation.x = headRef.current.rotation.x * 0.45;
    }

    // 4. Chest Core Rotation & Energy Pulse
    if (coreRef.current) {
      coreRef.current.rotation.z += delta * 1.5;
    }
    if (coreLightRef.current) {
      const isClickedRecently = clickedTime && Date.now() - clickedTime < 800;
      const pulseBase = Math.sin(t * 3.5) * 0.5 + 2.5;
      coreLightRef.current.intensity = isClickedRecently ? 6.0 : (hovered ? 4.5 : pulseBase);
    }

    // 5. Eye Sensor Intensity on Hover
    const eyeIntensity = hovered ? 4.5 : Math.sin(t * 2.0) * 0.5 + 2.8;
    materials.electricBlueGlow.emissiveIntensity = eyeIntensity;

    // 6. Natural Arm Movement & Responsive Greeting Gesture
    const isClicked = clickedTime && Date.now() - clickedTime < 1800;

    if (rightArmRef.current && rightForearmRef.current && rightHandRef.current) {
      if (isClicked) {
        // High-tech acknowledgment / salute gesture
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
          rightArmRef.current.rotation.x,
          -0.65,
          0.1
        );
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
          rightArmRef.current.rotation.z,
          0.35,
          0.1
        );
        rightForearmRef.current.rotation.x = THREE.MathUtils.lerp(
          rightForearmRef.current.rotation.x,
          -1.1,
          0.12
        );
        rightHandRef.current.rotation.y = Math.sin(t * 8.0) * 0.25;
      } else {
        // Natural resting / active assistant pose with micro-articulation
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
          rightArmRef.current.rotation.x,
          0.12 + Math.sin(t * 1.6 + 0.5) * 0.04,
          0.05
        );
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
          rightArmRef.current.rotation.z,
          -0.18 + (hovered ? -0.1 : 0),
          0.05
        );
        rightForearmRef.current.rotation.x = THREE.MathUtils.lerp(
          rightForearmRef.current.rotation.x,
          -0.45 + (hovered ? -0.2 : 0) + Math.cos(t * 1.6) * 0.03,
          0.05
        );
        rightHandRef.current.rotation.y = THREE.MathUtils.lerp(
          rightHandRef.current.rotation.y,
          -0.15,
          0.05
        );
      }
    }

    // Left arm natural counter-balance
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = 0.15 + Math.cos(t * 1.6) * 0.04;
      leftArmRef.current.rotation.z = 0.18;
    }

    // 7. Holographic Data Rings Rotation
    if (holoRingsRef.current) {
      holoRingsRef.current.rotation.y += delta * 0.45;
      holoRingsRef.current.rotation.x = Math.sin(t * 0.6) * 0.12;
    }
  });

  return (
    <group
      ref={rootGroupRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={handleClick}
    >
      {/* ==================== HEAD & SENSORS ==================== */}
      <group ref={headRef} position={[0, 1.35, 0.05]}>
        {/* Main Cranium / Helmet */}
        <mesh material={materials.whiteArmor} castShadow receiveShadow>
          <sphereGeometry args={[0.34, 32, 28]} />
        </mesh>

        {/* Aerodynamic Crown Ridge / Sensor Crest */}
        <mesh position={[0, 0.24, 0.04]} material={materials.silverMetal}>
          <boxGeometry args={[0.12, 0.14, 0.42]} />
        </mesh>
        <mesh position={[0, 0.29, 0.05]} material={materials.electricBlue}>
          <boxGeometry args={[0.04, 0.02, 0.34]} />
        </mesh>

        {/* Dark Polycarbonate Visor Faceplate */}
        <mesh position={[0, 0.02, 0.22]} rotation={[0.12, 0, 0]} material={materials.visorGlass}>
          <boxGeometry args={[0.42, 0.24, 0.18]} />
        </mesh>

        {/* Dual Expressive Electric-Blue Optical Lenses */}
        <group position={[0, 0.03, 0.32]}>
          {/* Left Eye */}
          <mesh ref={eyeLeftRef} position={[-0.11, 0, 0]} material={materials.electricBlueGlow}>
            <sphereGeometry args={[0.045, 16, 16]} />
          </mesh>
          <mesh position={[-0.11, 0, -0.01]} material={materials.silverMetal}>
            <ringGeometry args={[0.048, 0.068, 24]} />
          </mesh>

          {/* Right Eye */}
          <mesh ref={eyeRightRef} position={[0.11, 0, 0]} material={materials.electricBlueGlow}>
            <sphereGeometry args={[0.045, 16, 16]} />
          </mesh>
          <mesh position={[0.11, 0, -0.01]} material={materials.silverMetal}>
            <ringGeometry args={[0.048, 0.068, 24]} />
          </mesh>

          {/* Central Ocular Data Sensor Line */}
          <mesh position={[0, -0.07, 0]} material={materials.electricBlue}>
            <boxGeometry args={[0.22, 0.015, 0.02]} />
          </mesh>
        </group>

        {/* Angular Titanium Cheekbones & Jaw Carapace */}
        <mesh position={[-0.22, -0.12, 0.1]} rotation={[0, 0.28, -0.2]} material={materials.whiteArmor}>
          <boxGeometry args={[0.1, 0.22, 0.25]} />
        </mesh>
        <mesh position={[0.22, -0.12, 0.1]} rotation={[0, -0.28, 0.2]} material={materials.whiteArmor}>
          <boxGeometry args={[0.1, 0.22, 0.25]} />
        </mesh>
        <mesh position={[0, -0.24, 0.15]} material={materials.silverMetal}>
          <boxGeometry args={[0.18, 0.1, 0.16]} />
        </mesh>

        {/* Lateral Audio/Telemetry Earpieces */}
        <group position={[-0.34, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh material={materials.silverMetal}>
            <cylinderGeometry args={[0.09, 0.09, 0.06, 24]} />
          </mesh>
          <mesh position={[0, 0.035, 0]} material={materials.electricBlue}>
            <torusGeometry args={[0.06, 0.012, 12, 24]} />
          </mesh>
        </group>
        <group position={[0.34, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.silverMetal}>
            <cylinderGeometry args={[0.09, 0.09, 0.06, 24]} />
          </mesh>
          <mesh position={[0, 0.035, 0]} material={materials.electricBlue}>
            <torusGeometry args={[0.06, 0.012, 12, 24]} />
          </mesh>
        </group>
      </group>

      {/* ==================== CERVICAL GIMBAL & NECK ==================== */}
      <group ref={neckRef} position={[0, 1.05, 0.02]}>
        <mesh material={materials.darkChassis}>
          <cylinderGeometry args={[0.13, 0.15, 0.24, 20]} />
        </mesh>
        {/* Cervical hydraulic actuators */}
        <mesh position={[-0.12, 0, -0.05]} material={materials.silverMetal}>
          <cylinderGeometry args={[0.025, 0.025, 0.22, 12]} />
        </mesh>
        <mesh position={[0.12, 0, -0.05]} material={materials.silverMetal}>
          <cylinderGeometry args={[0.025, 0.025, 0.22, 12]} />
        </mesh>
        {/* Blue neck data collar */}
        <mesh position={[0, -0.06, 0]} material={materials.electricBlue}>
          <torusGeometry args={[0.16, 0.014, 12, 28]} />
        </mesh>
      </group>

      {/* ==================== TORSO & CHEST ==================== */}
      <group ref={chestRef} position={[0, 0.55, 0]}>
        {/* Core Torso Structural Frame */}
        <mesh material={materials.darkChassis} castShadow>
          <boxGeometry args={[0.76, 0.72, 0.44]} />
        </mesh>

        {/* Ergonomic White Chest Plates (Left & Right) */}
        <group position={[-0.22, 0.16, 0.22]} rotation={[-0.1, 0.1, -0.05]}>
          <mesh material={materials.whiteArmor} castShadow>
            <boxGeometry args={[0.34, 0.36, 0.12]} />
          </mesh>
          <mesh position={[0, -0.15, 0.065]} material={materials.electricBlue}>
            <boxGeometry args={[0.26, 0.015, 0.01]} />
          </mesh>
        </group>

        <group position={[0.22, 0.16, 0.22]} rotation={[-0.1, -0.1, 0.05]}>
          <mesh material={materials.whiteArmor} castShadow>
            <boxGeometry args={[0.34, 0.36, 0.12]} />
          </mesh>
          <mesh position={[0, -0.15, 0.065]} material={materials.electricBlue}>
            <boxGeometry args={[0.26, 0.015, 0.01]} />
          </mesh>
        </group>

        {/* Central Arc Core Energy Cell (Power Hub) */}
        <group position={[0, 0.12, 0.24]}>
          {/* Bezel Ring */}
          <mesh material={materials.silverMetal} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 0.06, 32]} />
          </mesh>
          {/* Pulsating Glowing Core Light */}
          <pointLight
            ref={coreLightRef}
            color="#00d4ff"
            intensity={3.2}
            distance={2.5}
            decay={2}
          />
          {/* Inner Glowing Lens */}
          <mesh position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]} material={materials.electricBlueGlow}>
            <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
          </mesh>
          {/* Rotating Turbine Core Blades */}
          <group ref={coreRef} position={[0, 0, 0.04]}>
            <mesh material={materials.silverMetal}>
              <boxGeometry args={[0.13, 0.02, 0.01]} />
            </mesh>
            <mesh material={materials.silverMetal} rotation={[0, 0, Math.PI / 3]}>
              <boxGeometry args={[0.13, 0.02, 0.01]} />
            </mesh>
            <mesh material={materials.silverMetal} rotation={[0, 0, -Math.PI / 3]}>
              <boxGeometry args={[0.13, 0.02, 0.01]} />
            </mesh>
          </group>
        </group>

        {/* Clavicle Structural Beam & Gold Pins */}
        <mesh position={[0, 0.38, 0.08]} material={materials.silverMetal}>
          <boxGeometry args={[0.78, 0.08, 0.28]} />
        </mesh>
        <mesh position={[-0.32, 0.38, 0.18]} material={materials.goldPin}>
          <cylinderGeometry args={[0.02, 0.02, 0.09, 12]} />
        </mesh>
        <mesh position={[0.32, 0.38, 0.18]} material={materials.goldPin}>
          <cylinderGeometry args={[0.02, 0.02, 0.09, 12]} />
        </mesh>

        {/* Lateral Rib Armor Slits */}
        {[-0.1, -0.22, -0.32].map((yOffset, i) => (
          <React.Fragment key={i}>
            <mesh position={[-0.38, yOffset, 0.1]} material={materials.silverMetal}>
              <boxGeometry args={[0.08, 0.05, 0.24]} />
            </mesh>
            <mesh position={[-0.41, yOffset, 0.1]} material={materials.electricBlue}>
              <boxGeometry args={[0.01, 0.02, 0.18]} />
            </mesh>
            <mesh position={[0.38, yOffset, 0.1]} material={materials.silverMetal}>
              <boxGeometry args={[0.08, 0.05, 0.24]} />
            </mesh>
            <mesh position={[0.41, yOffset, 0.1]} material={materials.electricBlue}>
              <boxGeometry args={[0.01, 0.02, 0.18]} />
            </mesh>
          </React.Fragment>
        ))}

        {/* Exposed Spinal Column in Back */}
        <group position={[0, 0.02, -0.24]}>
          {[0.2, 0.08, -0.04, -0.16, -0.28].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.silverMetal}>
              <cylinderGeometry args={[0.09, 0.09, 0.06, 16]} />
            </mesh>
          ))}
          <mesh position={[0, 0, -0.04]} material={materials.electricBlue}>
            <boxGeometry args={[0.02, 0.58, 0.01]} />
          </mesh>
        </group>

        {/* ==================== LEFT ARM & HAND ==================== */}
        <group ref={leftArmRef} position={[-0.48, 0.28, 0]}>
          {/* Shoulder Pauldron Sphere & Cowling */}
          <mesh material={materials.silverMetal}>
            <sphereGeometry args={[0.15, 24, 20]} />
          </mesh>
          <mesh position={[-0.05, 0.05, 0]} rotation={[0, 0, -0.3]} material={materials.whiteArmor}>
            <boxGeometry args={[0.24, 0.18, 0.28]} />
          </mesh>
          <mesh position={[-0.07, 0.11, 0]} rotation={[0, 0, -0.3]} material={materials.electricBlue}>
            <boxGeometry args={[0.2, 0.015, 0.24]} />
          </mesh>

          {/* Bicep Segment */}
          <group position={[-0.08, -0.26, 0]}>
            <mesh material={materials.darkChassis}>
              <cylinderGeometry args={[0.08, 0.07, 0.32, 16]} />
            </mesh>
            <mesh position={[0, 0, 0.06]} material={materials.whiteArmor}>
              <boxGeometry args={[0.13, 0.26, 0.06]} />
            </mesh>

            {/* Elbow Servo Joint */}
            <group position={[0, -0.2, 0]} rotation={[0.4, 0, 0]}>
              <mesh material={materials.silverMetal} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.08, 0.08, 0.16, 20]} />
              </mesh>
              <mesh material={materials.goldPin} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.03, 0.03, 0.18, 16]} />
              </mesh>

              {/* Forearm & Wrist */}
              <group position={[0, -0.26, 0.05]}>
                <mesh material={materials.whiteArmor}>
                  <boxGeometry args={[0.14, 0.34, 0.16]} />
                </mesh>
                <mesh position={[0, 0, 0.082]} material={materials.electricBlue}>
                  <boxGeometry args={[0.02, 0.28, 0.01]} />
                </mesh>

                {/* Left Hand / Articulated Fingers */}
                <group position={[0, -0.22, 0]}>
                  <mesh material={materials.silverMetal}>
                    <boxGeometry args={[0.11, 0.09, 0.06]} />
                  </mesh>
                  {/* Stylized robotic finger digits */}
                  {[-0.04, -0.012, 0.016, 0.044].map((x, idx) => (
                    <mesh key={idx} position={[x, -0.08, 0.01]} material={materials.darkChassis}>
                      <cylinderGeometry args={[0.012, 0.01, 0.09, 8]} />
                    </mesh>
                  ))}
                </group>
              </group>
            </group>
          </group>
        </group>

        {/* ==================== RIGHT ARM & HAND (INTERACTIVE) ==================== */}
        <group ref={rightArmRef} position={[0.48, 0.28, 0]}>
          {/* Shoulder Pauldron */}
          <mesh material={materials.silverMetal}>
            <sphereGeometry args={[0.15, 24, 20]} />
          </mesh>
          <mesh position={[0.05, 0.05, 0]} rotation={[0, 0, 0.3]} material={materials.whiteArmor}>
            <boxGeometry args={[0.24, 0.18, 0.28]} />
          </mesh>
          <mesh position={[0.07, 0.11, 0]} rotation={[0, 0, 0.3]} material={materials.electricBlue}>
            <boxGeometry args={[0.2, 0.015, 0.24]} />
          </mesh>

          {/* Bicep Segment */}
          <group position={[0.08, -0.26, 0]}>
            <mesh material={materials.darkChassis}>
              <cylinderGeometry args={[0.08, 0.07, 0.32, 16]} />
            </mesh>
            <mesh position={[0, 0, 0.06]} material={materials.whiteArmor}>
              <boxGeometry args={[0.13, 0.26, 0.06]} />
            </mesh>

            {/* Elbow Servo Joint */}
            <group position={[0, -0.2, 0]} rotation={[-0.4, 0, 0]}>
              <mesh material={materials.silverMetal} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.08, 0.08, 0.16, 20]} />
              </mesh>
              <mesh material={materials.goldPin} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.03, 0.03, 0.18, 16]} />
              </mesh>

              {/* Forearm (Animated ref) */}
              <group ref={rightForearmRef} position={[0, -0.26, 0.05]}>
                <mesh material={materials.whiteArmor}>
                  <boxGeometry args={[0.14, 0.34, 0.16]} />
                </mesh>
                <mesh position={[0, 0, 0.082]} material={materials.electricBlue}>
                  <boxGeometry args={[0.02, 0.28, 0.01]} />
                </mesh>

                {/* Right Hand / Articulated Fingers */}
                <group ref={rightHandRef} position={[0, -0.22, 0]}>
                  <mesh material={materials.silverMetal}>
                    <boxGeometry args={[0.11, 0.09, 0.06]} />
                  </mesh>
                  {/* Fingers */}
                  {[-0.044, -0.016, 0.012, 0.04].map((x, idx) => (
                    <mesh key={idx} position={[x, -0.08, 0.01]} material={materials.darkChassis}>
                      <cylinderGeometry args={[0.012, 0.01, 0.09, 8]} />
                    </mesh>
                  ))}
                  {/* Thumb */}
                  <mesh position={[-0.06, -0.04, 0.02]} rotation={[0, 0, 0.6]} material={materials.silverMetal}>
                    <cylinderGeometry args={[0.013, 0.01, 0.07, 8]} />
                  </mesh>
                </group>
              </group>
            </group>
          </group>
        </group>

        {/* ==================== ABDOMINAL & PELVIC BASE ==================== */}
        <group position={[0, -0.5, 0]}>
          {/* Dual Abdominal Piston Actuators */}
          <mesh position={[-0.16, 0, 0]} material={materials.silverMetal}>
            <cylinderGeometry args={[0.04, 0.04, 0.28, 16]} />
          </mesh>
          <mesh position={[0.16, 0, 0]} material={materials.silverMetal}>
            <cylinderGeometry args={[0.04, 0.04, 0.28, 16]} />
          </mesh>
          <mesh material={materials.darkChassis}>
            <cylinderGeometry args={[0.16, 0.2, 0.24, 20]} />
          </mesh>

          {/* Heavy-Duty Engineering Pelvis / Chassis Mount */}
          <group position={[0, -0.22, 0]}>
            <mesh material={materials.whiteArmor} castShadow>
              <cylinderGeometry args={[0.32, 0.24, 0.2, 28]} />
            </mesh>
            <mesh position={[0, -0.08, 0]} material={materials.silverMetal}>
              <torusGeometry args={[0.3, 0.02, 12, 32]} />
            </mesh>
            <mesh position={[0, -0.08, 0]} material={materials.electricBlue}>
              <torusGeometry args={[0.26, 0.01, 12, 32]} />
            </mesh>
          </group>
        </group>
      </group>

      {/* ==================== HOLOGRAPHIC TELEMETRY RINGS ==================== */}
      <group ref={holoRingsRef} position={[0, -0.2, 0]}>
        {/* Outer Orbital Telemetry Ring */}
        <mesh rotation={[Math.PI / 2.2, 0, 0]} material={materials.hologramLine}>
          <ringGeometry args={[1.05, 1.09, 48]} />
        </mesh>
        {/* Inner Counter-Rotating Ring */}
        <mesh rotation={[-Math.PI / 2.5, 0.2, 0]} material={materials.hologramLine}>
          <ringGeometry args={[0.82, 0.85, 36]} />
        </mesh>
        {/* Orbital Node Markers */}
        <mesh position={[1.07, 0, 0]} material={materials.electricBlueGlow}>
          <sphereGeometry args={[0.025, 12, 12]} />
        </mesh>
        <mesh position={[-0.83, 0.2, 0.1]} material={materials.electricBlueGlow}>
          <sphereGeometry args={[0.02, 12, 12]} />
        </mesh>
      </group>
    </group>
  );
};

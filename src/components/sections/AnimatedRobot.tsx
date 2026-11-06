import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, useGLTF, useAnimations } from '@react-three/drei';
import { SegmentedExplodedRobot } from '../3d/SegmentedExplodedRobot';
import { Bot } from 'lucide-react';

interface AnimatedRobotProps {
  modelUrl?: string;
  className?: string;
}

// Fallback loader while 3D assets initialize
const RobotLoader: React.FC = () => (
  <div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center p-6">
    <div className="relative w-16 h-16 flex items-center justify-center mb-4">
      <div className="absolute inset-0 rounded-full border-2 border-primary-container/20 border-t-primary-container animate-spin" />
      <div className="w-10 h-10 rounded-full bg-on-tertiary-container flex items-center justify-center text-primary-container">
        <Bot className="w-5 h-5 animate-pulse" />
      </div>
    </div>
    <div className="text-caption-caps font-bold text-primary tracking-wider uppercase mb-1">
      Initializing Mechanical Systems
    </div>
    <p className="text-caption text-on-surface-variant text-center max-w-xs">
      Loading segmented kinematic robotics architecture...
    </p>
  </div>
);

// Optional External Rigged GLTF Model Loader (architecture-ready)
const ExternalGLTFModel: React.FC<{ url: string }> = ({ url }) => {
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />;
};

export const AnimatedRobot: React.FC<AnimatedRobotProps> = ({
  modelUrl,
  className = '',
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className={`relative w-full h-[480px] sm:h-[520px] lg:h-[560px] flex items-center justify-center ${className}`}
    >
      {/* Soft Ambient Radial Blue Glow on Page Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-primary-container/12 blur-3xl pointer-events-none" />

      {/* 3D Canvas Viewport seamlessly integrated into page */}
      <div className="relative w-full h-full">
        <Suspense fallback={<RobotLoader />}>
          <Canvas
            camera={{ position: [0, 0.05, 4.4], fov: 44 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Ambient and Specular Key Light */}
            <ambientLight intensity={1.25} color="#e6f0ff" />

            <directionalLight
              position={[3.5, 4.5, 3.5]}
              intensity={2.6}
              color="#ffffff"
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />

            {/* Electric-Blue Edge Rim Lighting */}
            <directionalLight
              position={[-3.5, 2.5, -3.5]}
              intensity={3.4}
              color="#1769e0"
            />

            {/* Sub-Surface Cyan Accent Fill */}
            <pointLight
              position={[0, -1.0, 1.4]}
              intensity={2.0}
              color="#00d4ff"
              distance={4.5}
            />

            {/* Segmented Humanoid Robot or External GLTF */}
            {modelUrl ? (
              <ExternalGLTFModel url={modelUrl} />
            ) : (
              <SegmentedExplodedRobot
                currentStage="auto"
                speedMultiplier={prefersReducedMotion ? 0.3 : 1.0}
              />
            )}

            {/* Realistic Contact Shadow on Webpage Ground */}
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.55}
              scale={6.0}
              blur={2.5}
              far={3.5}
              color="#00224d"
            />

            {/* Constrained Orbit Controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.6}
              maxPolarAngle={Math.PI / 1.7}
              minAzimuthAngle={-Math.PI / 4.2}
              maxAzimuthAngle={Math.PI / 4.2}
              rotateSpeed={0.65}
            />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default AnimatedRobot;

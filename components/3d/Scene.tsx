import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random positions for particles
  const [positions, colors] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#6366f1"); // Indigo
    const color2 = new THREE.Color("#06b6d4"); // Cyan

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25; // z

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const FloatingShapes = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        {/* Abstract geometric shapes in background */}
        <mesh position={[4, 2, -5]} rotation={[0, 0, 0]}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.3} />
        </mesh>
        <mesh position={[-4, -2, -4]} rotation={[0, 0, 0]}>
            <octahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#10b981" wireframe transparent opacity={0.2} />
        </mesh>
         <mesh position={[5, -4, -8]} rotation={[0, 0, 0]}>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.15} />
        </mesh>
    </Float>
  )
}

const Scene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#0f172a', 5, 25]} />
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default Scene;
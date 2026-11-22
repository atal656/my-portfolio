
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const meshRef = useRef<THREE.Mesh>(null);

  
useFrame((state, delta) => {
  if (!meshRef.current) return;

  const time = state.clock.elapsedTime;

  // Continuous rotation with subtle cursor influence
  const targetY = time * 0.2 + state.pointer.x * 0.35;
  const targetX = Math.sin(time * 0.25) * 0.15
    - state.pointer.y * 0.25;

  meshRef.current.rotation.y = THREE.MathUtils.damp(
    meshRef.current.rotation.y,
    targetY,
    2,
    delta
  );

  meshRef.current.rotation.x = THREE.MathUtils.damp(
    meshRef.current.rotation.x,
    targetX,
    2,
    delta
  );
});


  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.32, 180, 24]} />
        <meshStandardMaterial
          color="#9AAFFF"
          metalness={0.85}
          roughness={0.18}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[3, 4, 5]}
          intensity={3}
          color="#4F7CFF"
        />
        <pointLight
          position={[-3, -2, 3]}
          intensity={2}
          color="#FFFFFF"
        />
        <Environment preset="city" />
        <Sculpture />
      </Canvas>
    </div>
  );
}

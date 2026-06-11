"use client";

import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function SphereObject() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.7}>
      <Sphere ref={mesh} args={[1.7, 96, 96]}>
        <MeshDistortMaterial
          color="#8b8b8b"
          distort={0.38}
          speed={2.5}
          roughness={0.18}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroSphere() {
  return (
    <div className="pointer-events-none absolute right-[-12%] top-[53%] hidden h-[620px] w-[620px] -translate-y-1/2 opacity-75 lg:block">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 4, 5]} intensity={2.5} />
        <pointLight position={[-3, -2, 3]} intensity={1.5} />
        <Stars radius={80} depth={40} count={900} factor={3} fade speed={1} />
        <SphereObject />
      </Canvas>
    </div>
  );
}
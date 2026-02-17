"use client";

import { GradientTexture, Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    // Intro Animation: Scale up from 0
    if (meshRef.current) {
        meshRef.current.scale.set(0, 0, 0);
        gsap.to(meshRef.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 2,
            ease: "elastic.out(1, 0.5)",
            delay: 0.5
        });
    }
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Icosahedron args={[1, 0]} ref={meshRef}> {/* 1 = radius, 0 = detail (low poly look) */}
        <MeshDistortMaterial
          color="#333"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.5}
          distort={0.4}
          speed={2}
        >
             {/* Optional Gradient */}
             <GradientTexture stops={[0, 1]} colors={['#ffffff', '#1a1a1a']} size={1024} />
        </MeshDistortMaterial>
      </Icosahedron>
    </Float>
  );
}

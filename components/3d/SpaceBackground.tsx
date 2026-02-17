"use client";
import { Stars, Sparkles, Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SpaceBackground() {
  const starsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Dynamic "Live Wallpaper" movement
      // Rotate the galaxy
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.03; 
      starsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1; // Gentle sway
      
      // Pulse scale slightly for breathing effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.02;
      starsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={starsRef}>
      {/* Deep Space Background Color - Handled in MainScene or here via color attach */}
      {/* Layer 1: Distant dense stars - Fast parallax */}
      <Stars radius={300} depth={50} count={7000} factor={4} saturation={0} fade speed={2} />
      
      {/* Layer 2: Closer, brighter stars - Slower parallax */}
      <Stars radius={100} depth={50} count={2000} factor={6} saturation={10} fade speed={3} />
      
      {/* Layer 3: Galaxy Dust (Nebula effect using Sparkles) */}
      <Sparkles 
        count={500}
        scale={[20, 20, 20]} // Large area
        size={4}
        speed={0.4}
        opacity={0.6}
        color="#a855f7" // Vivid Purple
      />
      
       <Sparkles 
        count={300}
        scale={[25, 25, 25]} 
        size={3}
        speed={0.3}
        opacity={0.5}
        color="#22d3ee" // Bright Cyan
      />
      
      {/* Optional: Add a subtle fog for depth IF the scene allows, usually handled in MainScene or Canvas */}
    </group>
  );
}

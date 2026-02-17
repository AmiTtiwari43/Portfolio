"use client";

import HeroObject from "@/components/3d/HeroObject";
import Lights from "@/components/3d/Lights";
import CameraController from "@/components/3d/CameraController";
import SpaceBackground from "@/components/3d/SpaceBackground";

export default function MainScene() {
  return (
    <>
      {/* Deep Void Purple/Blue Background */}
      <color attach="background" args={['#02020a']} /> 
      <fog attach="fog" args={['#02020a', 50, 600]} /> {/* Fade out for depth */}
      
      <Lights />
      <SpaceBackground />
      {/* <CameraController /> Removed to allow OrbitControls free movement */}
      {/* <HeroObject /> Disabled to let Solar System shine */}
    </>
  );
}

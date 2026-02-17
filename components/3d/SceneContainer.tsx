"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { View } from "@react-three/drei";

interface SceneContainerProps {
  children?: React.ReactNode;
}

export default function SceneContainer({ children }: SceneContainerProps) {
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    // Adaptive DPR
    setDpr(Math.min(window.devicePixelRatio, 2));
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
       {/* pointer-events-none so UI layer (z-10+) receives clicks, 
           need to enable pointer events on specific 3D meshes if interactive */}
      <Canvas
        dpr={dpr}
        gl={{ antialias: true, alpha: true }}
        shadows
        className="pointer-events-auto" // Re-enable pointer events for the canvas itself
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Suspense fallback={null}>
            {children}
        </Suspense>
      </Canvas>
    </div>
  );
}

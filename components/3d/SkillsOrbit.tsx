import { Float, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Map skills to icons
const SKILLS = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" }, // white by default usually
    { name: "Three.js", icon: "devicon-threejs-original" }, // white/black
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" }
];

export default function SkillsOrbit() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group position={[-2, 0, 5]} ref={groupRef}> 
       {SKILLS.map((skill, i) => {
         const angle = (i / SKILLS.length) * Math.PI * 2;
         const radius = 5; // Slightly wider for icons
         const x = Math.cos(angle) * radius;
         const z = Math.sin(angle) * radius;
         return (
           <Float key={skill.name} speed={2} rotationIntensity={0.5} floatIntensity={1}>
             <Html position={[x, 0, z]} transform center>
                <div className="flex flex-col items-center gap-2 group cursor-pointer select-none">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-105">
                        <i className={`${skill.icon} text-2xl md:text-3xl drop-shadow-md`} />
                    </div>
                </div>
             </Html>
           </Float>
         );
       })}
    </group>
  );
}

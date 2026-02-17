import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCameraScroll() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    // Initial State
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // Master Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main", // wrapper
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      defaults: { ease: "none" }
    });

    // Sequence
    // 1. Move to "About" (Section 1)
    tl.to(camera.position, {
        z: 6,
        x: 2,
    }, 0); // Start at beginning (relative to scroll)

    // 2. Move to "Skills" (Section 2)
    tl.to(camera.position, {
        z: 12,
        x: -5,
        y: 2,
    }, 0.33);

    // 3. Move to "Projects" (Section 3)
    tl.to(camera.position, {
        z: 4,
        x: 0,
        y: 0 
    }, 0.5);

    // 4. Move to "Experience" (Section 4)
    tl.to(camera.position, {
        z: 7,
        x: 3,
        y: -1
    }, 0.65);

    // 5. Move to "Achievements" (Section 5)
    tl.to(camera.position, {
        z: 5,
        x: -2,
        y: 0
    }, 0.8);

    // 6. Move to "Contact" (Section 6)
    tl.to(camera.position, {
        z: 8,
        x: 0,
        y: 1
    }, 1);

    // Ensure cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);
}

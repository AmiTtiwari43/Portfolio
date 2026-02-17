import SceneContainer from "@/components/3d/SceneContainer";
import MainScene from "@/scenes/MainScene";
import HeroOverlay from "@/components/layout/HeroOverlay";
import SideNav from "@/components/ui/SideNav";
import PageNavigation from "@/components/ui/PageNavigation";
import AboutSection from "@/components/layout/AboutSection";
import ProjectsSection from "@/components/layout/ProjectsSection";
import ExperienceTimeline from "@/components/layout/ExperienceTimeline";
import ContactSection from "@/components/layout/ContactSection";
import SkillsBento from "@/components/layout/SkillsBento";
import AchievementsSection from "@/components/layout/AchievementsSection";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* 3D Layer */}
      <SceneContainer>
        <MainScene />
      </SceneContainer>
      
      {/* HTML Content Overlay */}
      <div className="relative z-[70] w-full pointer-events-none">
        <SideNav />
        <PageNavigation />
        <HeroOverlay />
        
        <AboutSection />
        
        <div id="skills">
            <SkillsBento />
        </div>

        <ProjectsSection />

        <ExperienceTimeline />
        
        <AchievementsSection />

        <ContactSection />
      </div>
    </main>
  );
}

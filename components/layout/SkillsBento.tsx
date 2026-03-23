"use client";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { Database, Award, Globe2, Server, Cloud } from "lucide-react";

// Helper to map skill names to devicon identifiers
const getIconClass = (skill: string) => {
  const map: Record<string, string> = {
    "JavaScript": "devicon-javascript-plain colored",
    "Python": "devicon-python-plain colored",
    "Java": "devicon-java-plain colored",
    "C": "devicon-c-plain colored",
    "C++": "devicon-cplusplus-plain colored",
    "PHP": "devicon-php-plain colored",
    "HTML": "devicon-html5-plain colored",
    "CSS": "devicon-css3-plain colored",
    "React.js": "devicon-react-original colored",
    "Next.js": "devicon-nextjs-plain",
    "Node.js": "devicon-nodejs-plain-wordmark colored",
    "Express.js": "devicon-express-original",
    "Redux": "devicon-redux-original colored",
    "Flask": "devicon-flask-original",
    "Tailwind CSS": "devicon-tailwindcss-plain colored",
    "MySQL": "devicon-mysql-plain colored",
    "MongoDB": "devicon-mongodb-plain colored",
    "PostgreSQL": "devicon-postgresql-plain colored",
    "Git": "devicon-git-plain colored",
    "GitHub": "devicon-github-original",
    "VS Code": "devicon-vscode-plain colored",
    "Docker": "devicon-docker-plain colored",
    "Vercel": "devicon-vercel-original",
    "Netlify": "devicon-netlify-plain colored",
    "GCP": "devicon-googlecloud-plain colored",
    "Figma": "devicon-figma-plain colored",
    "Render": "devicon-render-plain",
  };
  return map[skill] || "devicon-devicon-plain"; // Fallback
};

const SkillIconGrid = ({ skills }: { skills: string[] }) => (
  <div className="flex flex-wrap gap-4 mt-2">
    {skills.map((skill) => (
       <div key={skill} className="flex flex-col items-center gap-1 group/icon cursor-pointer">
          <i className={`${getIconClass(skill)} text-3xl md:text-4xl transition-transform duration-300 group-hover/icon:scale-125`} />
          <span className="text-[10px] text-neutral-400 opacity-0 group-hover/icon:opacity-100 transition-opacity">
            {skill}
          </span>
       </div>
    ))}
  </div>
);

import { motion } from "framer-motion";

export default function SkillsBento() {
  return (
    <section id="skills-bento" className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 pointer-events-auto z-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full px-4 md:pl-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
          Technical Arsenal
        </h2>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {/* Frontend */}
          <BentoGridItem 
             title="Frontend"
             description={<SkillIconGrid skills={SKILLS.frontend} />}
             header={<Globe2 className="w-10 h-10 text-blue-500" />}
             className="md:col-span-1"
             icon={<Globe2 className="h-4 w-4 text-neutral-500" />}
          />
          
          {/* Backend */}
          <BentoGridItem 
             title="Backend"
             description={<SkillIconGrid skills={SKILLS.backend} />}
             header={<Server className="w-10 h-10 text-green-500" />}
             className="md:col-span-2"
             icon={<Server className="h-4 w-4 text-neutral-500" />}
          />
          
          {/* Databases */}
          <BentoGridItem 
             title="Database"
             description={<SkillIconGrid skills={SKILLS.database} />}
             header={<Database className="w-10 h-10 text-yellow-500" />}
             className="md:col-span-1"
             icon={<Database className="h-4 w-4 text-neutral-500" />}
          />

          {/* Cloud & Tools */}
          <BentoGridItem 
             title="Cloud"
             description={<SkillIconGrid skills={SKILLS.cloud} />}
             header={<Cloud className="w-10 h-10 text-cyan-500" />}
             className="md:col-span-1"
             icon={<Cloud className="h-4 w-4 text-neutral-500" />}
          />
          

        </BentoGrid>
      </motion.div>
    </section>
  );
}

"use client";

import { useMemo, useState, useCallback } from "react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard"; // We will lazy load the list if needed, but for small sets, direct import is fine
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 3;

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import ProjectModal from "@/components/ui/ProjectModal";

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return PROJECTS.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handleNextProject = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  }, [selectedProject]);

  const handlePrevProject = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  }, [selectedProject]);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-black/40 backdrop-blur-md py-20"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full px-4 md:pl-24 z-10 pointer-events-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="wait">
             {currentProjects.map((project) => (
               <ProjectCard 
                 key={project.id} 
                 project={project} 
                 onOpen={() => setSelectedProject(project)}
               />
             ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
          >
            <ChevronLeft />
          </button>
          
          <span className="text-neutral-400 font-mono">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </motion.div>

      {/* Project Modal Overlay */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={handleCloseModal} 
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </section>
  );
}

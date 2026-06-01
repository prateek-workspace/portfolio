import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { PROFILE, PROJECTS, type Project } from "../data/resume";

const HALFTONE = "radial-gradient(circle, #000 1px, transparent 1px)";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: (index % 2) * 0.1,
      }}
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-stroke bg-surface text-left ${project.span} ${project.aspect}`}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Halftone overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
        style={{ backgroundImage: HALFTONE, backgroundSize: "4px 4px" }}
      />

      {/* Bottom gradient + always-visible title */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 md:p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
          {project.category}
        </p>
        <h3 className="font-display text-2xl italic text-white md:text-3xl">
          {project.title}
        </h3>
        <div className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover blur layer */}
      <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
        <span className="relative inline-flex rounded-full p-[1.5px]">
          <span className="accent-gradient-animated absolute inset-0 animate-gradient-shift rounded-full" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm text-black">
            View — <span className="font-display italic">{project.title}</span>
          </span>
        </span>
      </div>
    </motion.button>
  );
}

export default function SelectedWorks() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          heading="Featured *projects*"
          subtext="AI agents, real-time platforms, and full-stack systems — from concept to production. Tap any card for the full breakdown."
          ctaLabel="View all on GitHub"
          onCta={() => window.open(PROFILE.github, "_blank")}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

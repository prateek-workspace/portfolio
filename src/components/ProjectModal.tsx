import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "../data/resume";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-stroke bg-surface"
          >
            {/* Header image */}
            <div className="relative h-44 overflow-hidden md:h-56">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
                {project.category}
              </p>
              <h3 className="mb-5 font-display text-3xl italic text-text-primary md:text-4xl">
                {project.title}
              </h3>

              <ul className="mb-6 flex flex-col gap-3">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-text-primary/85 md:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-7 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-stroke bg-bg px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex rounded-full"
              >
                <span
                  className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ inset: "-2px" }}
                />
                <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3 text-sm text-bg transition-colors duration-300 group-hover:bg-surface group-hover:text-text-primary">
                  Visit project
                  <span aria-hidden>↗</span>
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

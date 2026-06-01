import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { POSITIONS, CERTIFICATIONS } from "../data/resume";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay: i * 0.06 },
  viewport: { once: true, margin: "-60px" },
});

export default function Leadership() {
  return (
    <section id="leadership" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Community"
          heading="Leadership & *certifications*"
          subtext="Positions of responsibility and the courses that shaped how I build."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Positions */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
              Positions of Responsibility
            </h3>
            {POSITIONS.map((pos, i) => (
              <motion.div
                key={pos.org}
                {...fade(i)}
                className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface p-5 md:p-6"
              >
                <span className="accent-gradient pointer-events-none absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h4 className="font-display text-xl italic text-text-primary md:text-2xl">
                  {pos.role}
                </h4>
                <p className="mt-1 text-sm text-muted">{pos.org}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">
              Certifications
            </h3>
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert}
                {...fade(i)}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-stroke bg-surface p-5 md:p-6"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-stroke text-text-primary">
                  ✓
                </span>
                <p className="text-sm text-text-primary/85 md:text-base">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Toolkit"
          heading="The *tech* I build with"
          subtext="Languages, frameworks, databases, and tools I reach for to ship reliable software."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: (i % 2) * 0.08,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-3xl border border-stroke bg-surface p-6 md:p-8"
            >
              {/* hover gradient wash */}
              <span className="accent-gradient pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-display text-3xl italic text-text-primary/30">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg text-text-primary md:text-xl">
                    {group.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stroke bg-bg px-3.5 py-1.5 text-sm text-text-primary/80 transition-colors duration-300 hover:border-transparent hover:text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

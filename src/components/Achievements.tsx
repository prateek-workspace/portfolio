import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ACHIEVEMENTS, type Achievement } from "../data/resume";

function AchievementRow({
  item,
  index,
}: {
  item: Achievement;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.06 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full"
    >
      {/* Index badge */}
      <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full sm:h-20 sm:w-20">
        <span className="accent-gradient-animated absolute inset-0 animate-gradient-shift opacity-90" />
        <span className="absolute inset-[2px] grid place-items-center rounded-full bg-surface">
          <span className="font-display text-2xl italic text-text-primary sm:text-3xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>
      </div>

      {/* Title + detail */}
      <div className="min-w-0 flex-1">
        <h3 className="text-base text-text-primary md:text-xl">{item.title}</h3>
        <p className="mt-0.5 truncate text-xs text-muted sm:text-sm">
          {item.detail}
        </p>
      </div>

      {/* Meta */}
      <div className="hidden shrink-0 items-center gap-6 pr-4 sm:flex">
        <span className="rounded-full border border-stroke px-3 py-1 text-xs text-muted">
          {item.meta}
        </span>
        <span
          aria-hidden
          className="text-text-primary transition-transform duration-300 group-hover:translate-x-1"
        >
          ★
        </span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Recognition"
          heading="Notable *achievements*"
          subtext="Hackathon wins, community leadership, and the milestones I'm proud of."
        />

        <div className="flex flex-col gap-4">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

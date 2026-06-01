import { motion } from "framer-motion";
import { STATS } from "../data/resume";

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <span className="font-display text-5xl italic text-text-primary md:text-7xl lg:text-8xl">
                {stat.value}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

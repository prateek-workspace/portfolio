import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { EDUCATION } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Education"
          heading="Academic *foundation*"
          subtext="Electronics Engineering at HBTU Kanpur, building on a Diploma in IT."
        />

        <div className="overflow-hidden rounded-3xl border border-stroke bg-surface">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.exam}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.08,
              }}
              viewport={{ once: true, margin: "-60px" }}
              className={`group flex flex-col gap-2 p-6 transition-colors duration-300 hover:bg-bg/40 md:grid md:grid-cols-[1.6fr_1.4fr_0.8fr_0.9fr] md:items-center md:gap-6 md:p-7 ${
                i !== EDUCATION.length - 1 ? "border-b border-stroke" : ""
              }`}
            >
              <div>
                <h3 className="text-base text-text-primary md:text-lg">
                  {edu.exam}
                </h3>
                <p className="mt-0.5 text-xs text-muted md:hidden">
                  {edu.institute} · {edu.year}
                </p>
              </div>
              <p className="hidden text-sm text-muted md:block">
                {edu.institute}
                <span className="block text-xs opacity-70">{edu.board}</span>
              </p>
              <p className="hidden text-sm text-muted md:block">{edu.year}</p>
              <span className="inline-flex w-fit rounded-full border border-stroke bg-bg px-3 py-1 text-sm text-text-primary md:justify-self-end">
                {edu.score}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

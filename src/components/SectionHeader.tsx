import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  /** Heading text with the word to italicize wrapped in *asterisks*. */
  heading: string;
  subtext: string;
  ctaLabel?: string;
  onCta?: () => void;
}

/** Renders heading text, italicizing the segment wrapped in *asterisks*. */
function HeadingText({ heading }: { heading: string }) {
  const parts = heading.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className="text-accent-gradient font-display italic">
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  ctaLabel,
  onCta,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
    >
      <div className="max-w-xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </span>
        </div>
        <h2 className="mb-4 text-4xl leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          <HeadingText heading={heading} />
        </h2>
        <p className="max-w-md text-sm text-muted md:text-base">{subtext}</p>
      </div>

      {ctaLabel && (
        <button
          onClick={onCta}
          className="group relative hidden self-start rounded-full md:inline-flex md:self-end"
        >
          <span className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: "-1.5px" }} />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-sm text-text-primary">
            {ctaLabel}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </span>
        </button>
      )}
    </motion.div>
  );
}

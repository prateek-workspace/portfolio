import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Engineer", "Automate", "Innovate"];
const DURATION = 2700;

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef<number | null>(null);

  // requestAnimationFrame counter 000 -> 100 over DURATION ms.
  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cycle rotating words every 900ms.
  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      900
    );
    return () => clearInterval(id);
  }, []);

  // On complete: 400ms delay then onComplete.
  useEffect(() => {
    if (count >= 100) {
      const id = setTimeout(() => {
        setExiting(true);
        setTimeout(onComplete, 600);
      }, 400);
      return () => clearTimeout(id);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Top-left label */}
      <motion.div
        className="p-6 md:p-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted">
          Portfolio
        </span>
      </motion.div>

      {/* Center rotating words */}
      <div className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {WORDS[wordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <div className="flex items-end justify-end p-6 md:p-10">
        <span className="font-display text-6xl tabular-nums text-text-primary md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Bottom progress bar */}
      <div className="h-[3px] w-full bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}

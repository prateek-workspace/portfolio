import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function Lightbox({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (src) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
        >
          <motion.img
            src={src}
            alt="Exploration"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useHlsVideo } from "../hooks/useHlsVideo";
import { scrollToSection } from "../lib/scroll";
import { PROFILE } from "../data/resume";

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const ROLES = PROFILE.roles;

export default function Hero() {
  const videoRef = useHlsVideo(HLS_SRC);
  const rootRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle roles every 2s.
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  // GSAP entrance.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        0
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mt-[12vh] flex flex-col items-center px-4 text-center md:mt-[16vh]">
        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          {PROFILE.name}
        </h1>

        <p className="blur-in mb-4 text-lg text-text-primary/90 md:text-xl">
          A{" "}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in font-display italic text-text-primary"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          engineer, lives in {PROFILE.location}.
        </p>

        <p className="blur-in mb-12 max-w-xl text-sm text-muted md:text-base">
          {PROFILE.tagline}
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("work")}
            className="group relative rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-all duration-300 hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px", zIndex: -1 }}
            />
            <span className="relative">See Works</span>
          </button>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group relative grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-stroke bg-bg text-text-primary transition-all duration-300 hover:scale-105 hover:border-transparent"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px", zIndex: -1 }}
            />
            <GithubIcon />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group relative grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-stroke bg-bg text-text-primary transition-all duration-300 hover:scale-105 hover:border-transparent"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px", zIndex: -1 }}
            />
            <LinkedinIcon />
          </a>

          <a
            href={PROFILE.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-5 py-3.5 text-sm text-muted underline-offset-4 transition-colors hover:text-text-primary hover:underline"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

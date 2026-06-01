import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center">
      <span className="font-display text-8xl italic text-text-primary md:text-9xl">
        404
      </span>
      <p className="max-w-md text-sm text-muted">
        This page drifted off into the void. Let's get you back home.
      </p>
      <Link
        to="/"
        className="group relative inline-flex rounded-full"
      >
        <span
          className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ inset: "-2px" }}
        />
        <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
          Back home
          <span aria-hidden>→</span>
        </span>
      </Link>
    </div>
  );
}

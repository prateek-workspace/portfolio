/**
 * Global texture layer — film grain + tactile dot pattern + edge vignette.
 * Sits above section backgrounds but is pointer-events-none, so it adds a
 * subtle 3D, tactile depth across the whole site without blocking clicks.
 * Sits below the navbar (z-50) and modals (z-9998+).
 */
export default function TextureOverlay() {
  return (
    <>
      <div className="texture-depth" aria-hidden />
      <div className="texture-grain" aria-hidden />
      <div className="texture-vignette" aria-hidden />
    </>
  );
}

/** Smooth-scroll to a section by id, accounting for the floating navbar. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: id === "home" ? 0 : top, behavior: "smooth" });
}

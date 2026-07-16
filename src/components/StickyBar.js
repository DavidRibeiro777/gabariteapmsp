/**
 * StickyBar Component
 * Shows a compact CTA bar after the user scrolls past the hero section.
 */
export function initStickyBar() {
  const bar = document.getElementById('sticky-bar');
  if (!bar) return;

  const hero = document.getElementById('hero');
  if (!hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        bar.classList.add('visible');
      } else {
        bar.classList.remove('visible');
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(hero);
}

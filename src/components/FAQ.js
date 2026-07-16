/**
 * FAQ Component
 * Initialises FAQ accordion and smooth open/close transitions.
 * Native <details> / <summary> provides accessibility for free.
 */
export function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      // Close all other open items (accordion behaviour)
      if (item.open) {
        items.forEach((other) => {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
}

/**
 * CountdownTimer Component
 * Renders a countdown to a deadline to create urgency.
 * Deadline is set to 4 hours from the current session start.
 * If the stored deadline is already expired, it resets automatically.
 */
export function initCountdownTimer() {
  const el = document.getElementById('countdown');
  if (!el) return;

  const STORAGE_KEY = 'pmsp_deadline_v2';
  const DURATION_MS = 4 * 60 * 60 * 1000; // 4 horas

  let deadline = localStorage.getItem(STORAGE_KEY);

  if (!deadline || parseInt(deadline, 10) <= Date.now()) {
    // Sem deadline salvo OU já expirou — reseta para 4h a partir de agora
    deadline = Date.now() + DURATION_MS;
    localStorage.setItem(STORAGE_KEY, deadline);
  } else {
    deadline = parseInt(deadline, 10);
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, deadline - now);

    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1_000);

    const hoursEl = el.querySelector('[data-timer="hours"]');
    const minsEl  = el.querySelector('[data-timer="mins"]');
    const secsEl  = el.querySelector('[data-timer="secs"]');

    if (hoursEl) hoursEl.textContent = pad(h);
    if (minsEl)  minsEl.textContent  = pad(m);
    if (secsEl)  secsEl.textContent  = pad(s);

    // Pulsa o timer quando restam menos de 60 segundos
    if (diff < 60_000 && diff > 0) {
      el.classList.add('timer-urgent');
    }

    if (diff > 0) {
      setTimeout(tick, 1000);
    } else {
      // Quando expirar, reseta automaticamente para mais 4h
      localStorage.removeItem(STORAGE_KEY);
      setTimeout(() => initCountdownTimer(), 100);
    }
  }

  tick();
}

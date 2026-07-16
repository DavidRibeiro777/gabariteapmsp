/**
 * main.js — Entry point
 * Initialises all components in the correct order.
 */

import './style.css';

import { initStickyBar }      from './components/StickyBar.js';
import { initCountdownTimer } from './components/CountdownTimer.js';
import { initRevealOnScroll } from './components/RevealOnScroll.js';
import { initFAQ }            from './components/FAQ.js';

document.addEventListener('DOMContentLoaded', () => {
  initStickyBar();
  initCountdownTimer();
  initRevealOnScroll();
  initFAQ();
});

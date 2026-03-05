/* ============================================================
   CREFC Animated Template System — Animation Engine v2
   Corporate Optics / Steven Simmons

   Works with the PNG-layer-based template system.
   Layers use data-anim attributes:
     data-anim="bg"     → background fade-in
     data-anim="lines"  → diagonal-line overlay fade-in
     data-anim="shapes" → geometric shapes slide-in
     data-anim="text"   → text layers stagger-up (uses data-delay)
     data-anim="logo"   → CREFC logo fade-in
     data-anim="cta"    → CTA scale-in with bounce
   ============================================================ */

class CREFCAnimator {
  constructor(canvas) {
    this.canvas = canvas;
    if (!this.canvas) return;
    this.timeouts = [];
    this.isPlaying = false;
    this.init();
  }

  init() {
    this.bgLayers     = this.canvas.querySelectorAll('[data-anim="bg"]');
    this.lineLayers   = this.canvas.querySelectorAll('[data-anim="lines"]');
    this.shapeLayers  = this.canvas.querySelectorAll('[data-anim="shapes"]');
    this.textLayers   = this.canvas.querySelectorAll('[data-anim="text"]');
    this.logoLayers   = this.canvas.querySelectorAll('[data-anim="logo"]');
    this.ctaLayer     = this.canvas.querySelector('[data-anim="cta"]');
    this.ctaButton    = this.canvas.querySelector('.cta-button');
    this.zeigarnikFill = this.canvas.querySelector('.zeigarnik-bar-fill');
    this.reset();
  }

  /* ── Reset to pre-animation state ──────────────────────── */
  reset() {
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];
    this.isPlaying = false;

    // Background
    this.bgLayers.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '0';
    });

    // Diagonal lines
    this.lineLayers.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '0';
    });

    // Shapes
    this.shapeLayers.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateX(-60px)';
    });

    // Text
    this.textLayers.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
    });

    // Logo
    this.logoLayers.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
    });

    // CTA
    if (this.ctaLayer) {
      this.ctaLayer.style.transition = 'none';
      this.ctaLayer.style.opacity = '0';
      this.ctaLayer.style.transform = 'scale(0.85)';
    }
    if (this.ctaButton) {
      this.ctaButton.classList.remove('pulsing');
    }

    // Zeigarnik bar
    if (this.zeigarnikFill) {
      this.zeigarnikFill.classList.remove('animate');
      this.zeigarnikFill.style.width = '0%';
    }
  }

  /* ── Transition helper ─────────────────────────────────── */
  reveal(el, delay, duration, easing, props = {}) {
    const t = setTimeout(() => {
      el.style.transition = `opacity ${duration}s ${easing}, transform ${duration}s ${easing}`;
      el.style.opacity = '1';
      el.style.transform = props.transform || 'translate(0,0) scale(1)';
    }, delay);
    this.timeouts.push(t);
  }

  /* ── Master Entrance Sequence ──────────────────────────── */
  play() {
    if (this.isPlaying) return;
    this.reset();

    const t = setTimeout(() => {
      this.isPlaying = true;
      this.runEntrance();
    }, 80);
    this.timeouts.push(t);
  }

  runEntrance() {
    const ease = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)';
    const easeOut = 'cubic-bezier(0.0, 0.0, 0.2, 1.0)';
    const bounce = 'cubic-bezier(0.34, 1.56, 0.64, 1.0)';

    // ── Phase 1: Background fade in (0ms)
    this.bgLayers.forEach(el => this.reveal(el, 0, 0.8, ease));

    // ── Phase 2: Diagonal lines fade in (200ms)
    this.lineLayers.forEach(el => this.reveal(el, 200, 0.8, ease));

    // ── Phase 3: Shapes slide in from left (400ms)
    this.shapeLayers.forEach((el, i) => {
      this.reveal(el, 400 + i * 150, 1.0, easeOut, {
        transform: 'translateX(0)'
      });
    });

    // ── Phase 4: Text layers stagger up (700ms+)
    this.textLayers.forEach(el => {
      const delay = parseInt(el.dataset.delay || '0', 10);
      this.reveal(el, 700 + delay, 0.7, easeOut, {
        transform: 'translateY(0)'
      });
    });

    // ── Phase 5: Logo fades in (1400ms)
    this.logoLayers.forEach(el => {
      this.reveal(el, 1400, 0.7, ease, { transform: 'translateY(0)' });
    });

    // ── Phase 6: CTA scales in with bounce (1800ms)
    if (this.ctaLayer) {
      this.reveal(this.ctaLayer, 1800, 0.6, bounce, {
        transform: 'scale(1)'
      });
    }

    // ── Phase 7: CTA begins glow pulse (2500ms)
    const t1 = setTimeout(() => {
      if (this.ctaButton) this.ctaButton.classList.add('pulsing');
    }, 2500);
    this.timeouts.push(t1);

    // ── Phase 8: Zeigarnik bar fills to ~88% (2200ms)
    const t2 = setTimeout(() => {
      if (this.zeigarnikFill) this.zeigarnikFill.classList.add('animate');
    }, 2200);
    this.timeouts.push(t2);
  }

  pause() {
    this.isPlaying = false;
    this.timeouts.forEach(t => clearTimeout(t));
  }

  restart() {
    this.reset();
    setTimeout(() => this.play(), 120);
  }
}

/* ── Auto-initialize ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas')
    || document.querySelector('.canvas')
    || document.querySelector('.template-canvas');
  if (canvas) {
    window.crefcAnimator = new CREFCAnimator(canvas);
    setTimeout(() => window.crefcAnimator.play(), 400);
  }
});

/* ── Expose for CommonJS ──────────────────────────────────── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CREFCAnimator;
}

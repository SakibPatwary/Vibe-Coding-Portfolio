import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';

export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Show the entrance while the document loads, with a bounded fallback.
    let exitTimer: ReturnType<typeof setTimeout>;
    const ready = () => { exitTimer = setTimeout(() => setLoading(false), 650); };
    const fallback = setTimeout(() => setLoading(false), 2400);
    if (document.readyState === 'complete') ready();
    else window.addEventListener('load', ready, { once: true });
    return () => { clearTimeout(exitTimer); clearTimeout(fallback); window.removeEventListener('load', ready); };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sections = document.querySelectorAll('main > section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.06 });
    sections.forEach(section => { section.classList.add('reveal-section'); observer.observe(section); });
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return () => observer.disconnect();
    let frame = 0;
    let width = 0, height = 0, last = 0;
    let pointer = { x: -1000, y: -1000, active: false };
    const puffs: { x: number; y: number; vx: number; vy: number; life: number; size: number; red: boolean }[] = [];
    const resize = () => {
      width = innerWidth; height = innerHeight;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || media.matches) return;
      pointer = { x: event.clientX, y: event.clientY, active: true };
      const card = (event.target as HTMLElement).closest<HTMLElement>('.border');
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
      }
      for (let i = 0; i < 2; i++) puffs.push({ x: pointer.x, y: pointer.y, vx: (Math.random() - .5) * 1.8, vy: -Math.random() * 1.2 - .25, life: 1, size: 14 + Math.random() * 20, red: Math.random() > .65 });
      if (puffs.length > 70) puffs.splice(0, puffs.length - 70);
      start();
    };
    const leave = () => { pointer.active = false; };
    const draw = (time: number) => {
      frame = 0;
      const delta = Math.min((time - last) / 16.67 || 1, 2); last = time;
      ctx.clearRect(0, 0, width, height);
      if (media.matches || document.hidden) { puffs.length = 0; return; }
      ctx.globalCompositeOperation = 'lighter';
      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];
        p.life -= .018 * delta; p.x += p.vx * delta; p.y += p.vy * delta; p.size += .65 * delta;
        if (p.life <= 0) { puffs.splice(i, 1); continue; }
        const color = p.red ? '239,55,74' : '53,114,255';
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(${color},${p.life * .12})`);
        gradient.addColorStop(.4, `rgba(${color},${p.life * .055})`);
        gradient.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = gradient; ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      }
      if (pointer.active && puffs.length) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 155);
        glow.addColorStop(0, 'rgba(65,120,255,.055)'); glow.addColorStop(1, 'rgba(65,120,255,0)');
        ctx.fillStyle = glow; ctx.fillRect(pointer.x - 155, pointer.y - 155, 310, 310);
      }
      ctx.globalCompositeOperation = 'source-over';
      if (puffs.length) frame = requestAnimationFrame(draw);
    };
    const start = () => { if (!frame) { last = performance.now(); frame = requestAnimationFrame(draw); } };
    const visibility = () => { if (document.hidden) { leave(); puffs.length = 0; ctx.clearRect(0, 0, width, height); } };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      observer.disconnect(); sections.forEach(s => s.classList.remove('reveal-section', 'is-visible'));
      cancelAnimationFrame(frame); window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  return <>
    <canvas ref={canvasRef} className="pointer-smoke" aria-hidden="true" />
    <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden="true" />
    <AnimatePresence>
      {loading && <motion.div key="loader" className="site-loader" role="status" aria-label="Loading portfolio" exit={{ opacity: 0, filter: 'blur(12px)' }} transition={{ duration: .5 }}>
        <div className="loader-emblem" aria-hidden="true"><span /> <span /><b>&lt;/&gt;</b></div>
        <div className="loader-caption">LOADING PORTFOLIO<span className="loader-dots">...</span></div>
        <div className="loader-track"><span /></div>
      </motion.div>}
    </AnimatePresence>
  </>;
}

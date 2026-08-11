import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-8"
        >
          <MapPin size={14} className="text-primary" />
          <span>Shigar, Gilgit Baltistan, Pakistan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 max-w-4xl"
        >
          <span className="text-foreground">Muhammad </span>
          <span
            className="text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), #60a5fa)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
          >
            Saleem
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-10 max-w-2xl"
        >
          Graphic Designer <span className="text-primary/50">&bull;</span> Web Developer <span className="text-primary/50">&bull;</span> Educator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:opacity-90 transition-all group border-none cursor-pointer w-full sm:w-auto justify-center"
            data-testid="btn-view-work"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center justify-center gap-2 bg-transparent text-foreground px-8 py-4 rounded-full text-base font-semibold border border-border hover:bg-secondary/80 hover:border-primary/50 transition-all cursor-pointer w-full sm:w-auto"
            data-testid="btn-contact-hero"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, hsl(var(--muted-foreground)), transparent)' }} />
      </motion.div>
    </section>
  );
}

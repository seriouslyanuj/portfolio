'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 section-padding overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-base"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.4),transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] -z-10 opacity-20 bg-[radial-gradient(circle,rgba(59,130,246,0.3),transparent)] blur-3xl animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] -z-10 opacity-20 bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent)] blur-3xl animate-glow-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-muted text-sm md:text-base mb-4"
        >
          Anuj Gupta · Prayagraj, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-4"
        >
          <span className="text-white">Engineering Scalable </span>
          <span className="bg-gradient-to-r from-primary via-secondary to-accent-violet bg-clip-text text-transparent">
            Distributed Systems
          </span>
          <span className="text-white"> and </span>
          <span className="bg-gradient-to-r from-accent-cyan via-primary to-secondary bg-clip-text text-transparent">
            Autonomous AI Agents
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-accent-muted mb-6"
        >
          Specialist Programmer at Infosys | Fintech Systems | Agentic AI |
          System Design
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-slate-300 max-w-2xl mb-10"
        >
          Architecting high-availability systems that scale. From fault-tolerant
          payment routing engines to multi-agent AI orchestration — reliability,
          observability, and design rigor drive every decision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href="#philosophy"
            className="group inline-flex items-center justify-center px-6 py-3 sm:py-3.5 text-sm font-medium bg-gradient-to-r from-primary via-secondary to-accent-violet bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-500 text-white rounded-lg shadow-glow hover:shadow-glow-cyan min-h-[44px] touch-manipulation"
          >
            View Architecture
          </a>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center justify-center px-6 py-3 sm:py-3.5 text-sm font-medium border border-primary/50 text-primary-light rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 min-h-[44px] touch-manipulation"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-6 py-3 sm:py-3.5 text-sm font-medium text-accent-muted hover:text-accent-cyan transition-colors duration-300 min-h-[44px] touch-manipulation"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}

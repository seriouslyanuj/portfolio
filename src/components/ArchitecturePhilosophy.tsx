'use client'

import { motion } from 'framer-motion'

const principles = [
  {
    title: 'Reliability-first engineering',
    description:
      'Systems must degrade gracefully. Every component is designed with failure modes in mind.',
  },
  {
    title: 'Designing for failure',
    description:
      'Assume partial outages. Circuit breakers, retries, and fallbacks are core architecture.',
  },
  {
    title: 'Observability',
    description:
      'Logging, metrics, and tracing are non-negotiable. You cannot fix what you cannot see.',
  },
  {
    title: 'Automation',
    description:
      'Manual processes do not scale. CI/CD, IaC, and self-healing are table stakes.',
  },
  {
    title: 'Scalability over shortcuts',
    description:
      'Technical debt compounds. Choose designs that grow with load and complexity.',
  },
]

export default function ArchitecturePhilosophy() {
  return (
    <section
      id="philosophy"
      className="section-padding relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-base via-base-50/80 to-base"
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-10"
        >
          <span className="gradient-text">Architecture Philosophy</span>
        </motion.h2>
        <div className="space-y-6 md:space-y-8">
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6 md:p-8 border-primary/10 hover:border-primary/25 transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-slate-300 text-base md:text-lg">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

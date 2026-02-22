'use client'

import { motion } from 'framer-motion'

const badgeColors: Record<string, string> = {
  Python: 'badge-cyan',
  LangChain: 'badge-violet',
  Watchdog: 'badge-amber',
  OCR: 'badge-blue',
  'Spring Boot': 'badge-emerald',
  React: 'badge-cyan',
  PostgreSQL: 'badge-indigo',
}

const projects = [
  {
    name: 'AI Invoice Auditor',
    date: 'Jan 2026',
    stack: ['Python', 'LangChain', 'Watchdog', 'OCR'],
    bullets: [
      'Event-driven architecture with directory monitoring via Watchdog',
      'Autonomous audit workflows with Human-in-the-Loop validation',
      'Multilingual invoice translation and structured LLM outputs',
      'AI agent orchestration for end-to-end processing',
    ],
    diagram: true,
  },
  {
    name: 'Full-Stack E-Commerce Platform',
    date: 'May 2025',
    stack: ['Spring Boot', 'React', 'PostgreSQL'],
    bullets: [
      'Optimized database indexing for high-volume queries',
      '47% reduction in cart abandonment',
      'Scalable REST backend with clean architecture principles',
    ],
    diagram: false,
  },
]

function getBadgeClass(tech: string): string {
  return (
    badgeColors[tech] ||
    'bg-primary/20 text-primary-light border border-primary/30'
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-base-50/60 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-12"
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="space-y-10 md:space-y-14">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group glass-card p-6 md:p-8 transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <div className="flex flex-col sm:items-end gap-2">
                  <span className="text-sm text-accent-dim">{project.date}</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md ${getBadgeClass(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-300 text-base"
                  >
                    <span className="text-primary shrink-0 mt-1">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {project.diagram && (
                <div
                  className="h-40 sm:h-48 glass-card flex items-center justify-center border-dashed"
                  aria-label="Architecture diagram placeholder"
                >
                  <span className="text-accent-dim text-sm">
                    Architecture diagram
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

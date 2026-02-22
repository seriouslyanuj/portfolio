'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Infosys',
    role: 'Specialist Programmer',
    period: 'Nov 2025 – Present',
    bullets: [
      'Advanced System Design training and architecture-focused development',
      'Agentic AI systems using LangChain, LangGraph, MCP',
      'Tool-augmented LLM agents for enterprise workflow automation',
      'Multi-step reasoning pipelines and external API integrations',
      'Architecture-oriented solutions with emphasis on scalability',
    ],
    diagram: true,
  },
  {
    company: 'LuckPay Solutions',
    role: 'Software Engineer Trainee',
    period: 'July 2025 – Oct 2025',
    bullets: [
      'Architected Dynamic Routing Engine for payment processing',
      'Integrated Easebuzz, NDML, JioPay payment gateways',
      'Automated failover ensuring 99.9% uptime',
      'JWT and Base24 (ISO 8583) authentication implementation',
      'Built 20+ Spring Boot microservices',
      'Pagination strategies for high-volume dashboards',
      'CI/CD with Jenkins and SonarQube; reduced vulnerabilities by 25%',
    ],
    diagram: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-12"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="space-y-8 md:space-y-10">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-card-hover hover:border-primary/20"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-primary-light">{exp.role}</p>
                  </div>
                  <p className="text-sm text-accent-dim">{exp.period}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-slate-300 text-base"
                    >
                      <span className="text-primary shrink-0 mt-1">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {exp.diagram && (
                  <div
                    className="h-48 sm:h-56 glass-card flex items-center justify-center border-dashed"
                    aria-label="Architecture diagram placeholder"
                  >
                    <span className="text-accent-dim text-sm">
                      Architecture diagram
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

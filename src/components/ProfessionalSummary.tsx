'use client'

import { motion } from 'framer-motion'

const highlights = [
  'Top 3 rank (89%) in Infosys Specialist Programmer cohort',
  'Advanced System Design and Cloud Architecture expertise',
  'Built autonomous Agentic AI systems using LangChain, LangGraph, MCP',
  'Designed high-availability fintech routing engine',
  'Built 20+ Spring Boot microservices',
  'Focus on reliability, scalability, and fault tolerance',
]

export default function ProfessionalSummary() {
  return (
    <section
      id="summary"
      className="relative section-padding bg-base-50/60"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-6"
        >
          <span className="gradient-text">Professional Summary</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-slate-300 text-base md:text-lg"
              >
                <span className="text-primary shrink-0 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const badgeGradients: Record<string, string> = {
  Languages: 'bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-amber-200 border-amber-500/40',
  'Backend & Architecture':
    'bg-gradient-to-r from-blue-500/25 to-indigo-500/25 text-blue-200 border-blue-500/40',
  'AI & Machine Learning':
    'bg-gradient-to-r from-violet-500/25 to-purple-500/25 text-violet-200 border-violet-500/40',
  DevOps: 'bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-emerald-200 border-emerald-500/40',
  'Databases & Cloud':
    'bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-200 border-cyan-500/40',
  'Hardware & IoT':
    'bg-gradient-to-r from-rose-500/25 to-pink-500/25 text-rose-200 border-rose-500/40',
}

const skillCategories = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'SQL', 'C++', 'Dart'],
  },
  {
    title: 'Backend & Architecture',
    items: [
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'System Design',
      'JWT',
      'Base24',
    ],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      'Agentic AI',
      'LangChain',
      'LangGraph',
      'MCP',
      'LLMs',
      'AI Agents',
    ],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Jenkins', 'SonarQube', 'Git', 'Maven'],
  },
  {
    title: 'Databases & Cloud',
    items: ['PostgreSQL', 'MySQL', 'AWS', 'Firebase', 'Redis'],
  },
  {
    title: 'Hardware & IoT',
    items: ['ESP32', 'BLE', 'Circuit Design', 'Sensor Integration'],
  },
]

export default function TechnicalSkills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-10"
        >
          <span className="gradient-text">Technical Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-5 md:p-6 border-l-4 border-l-primary hover:border-primary/40 transition-colors"
            >
              <h3 className="text-sm font-medium text-accent-muted uppercase tracking-wider mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 text-sm rounded-md border ${badgeGradients[category.title] || 'bg-base-100/50 text-slate-300 border-white/10'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

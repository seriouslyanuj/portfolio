'use client'

import { motion } from 'framer-motion'

const achievements = [
  'Patent Published – FSPMS',
  'Patent Published – Smart Wristband',
  'GATE 2024 Qualified (First Attempt)',
  'Bosch Autovision X Semi-Finalist',
  '2× Innotech Hackathon Top 10 Finalist',
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-base-50/60 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-8"
        >
          <span className="gradient-text">Achievements</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative glass-card p-4 md:p-5 border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true" />
              <div className="relative flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-primary-light text-sm font-medium">
                  {i + 1}
                </span>
                <span className="text-slate-300 text-sm md:text-base">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

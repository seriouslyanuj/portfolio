'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Email', href: 'mailto:contact@anujgupta.dev', icon: '✉' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anujgupta',
    icon: 'in',
  },
  { label: 'GitHub', href: 'https://github.com/anujgupta', icon: 'gh' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/anujgupta', icon: 'lc' },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 500))
    setStatus('sent')
    setFormState({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="section-padding bg-base-50/60 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold mb-10"
        >
          <span className="gradient-text">Contact</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-sm font-medium text-accent-dim uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-accent-muted hover:text-primary-light transition-colors"
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary-light group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-accent-muted mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-base-50 border border-white/10 rounded-lg text-white placeholder:text-accent-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors min-h-[44px]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-accent-muted mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-base-50 border border-white/10 rounded-lg text-white placeholder:text-accent-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors min-h-[44px]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-accent-muted mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-base-50 border border-white/10 rounded-lg text-white placeholder:text-accent-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 min-h-[44px] touch-manipulation shadow-glow"
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                  ? 'Sent'
                  : 'Send'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

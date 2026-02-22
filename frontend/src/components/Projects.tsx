const projects = [
  {
    title: "AI Invoice Auditor",
    date: "Jan 2026",
    tags: ["Python", "LangChain", "Watchdog", "OCR"],
    color: "blue",
    bullets: [
      "Event-driven architecture with directory monitoring via Watchdog",
      "Autonomous audit workflows with Human-in-the-Loop validation",
      "Multilingual invoice translation and structured LLM outputs",
      "AI agent orchestration for end-to-end processing",
    ],
  },
  {
    title: "Full-Stack E-Commerce Platform",
    date: "May 2025",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    color: "cyan",
    bullets: [
      "Optimized database indexing for high-volume queries",
      "47% reduction in cart abandonment",
      "Scalable REST backend with clean architecture principles",
    ],
  },
];

const tagColors: Record<string, string> = {
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  LangChain: "bg-green-500/10 text-green-400 border-green-500/20",
  Watchdog: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  OCR: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Spring Boot": "bg-green-500/10 text-green-400 border-green-500/20",
  React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PostgreSQL: "bg-blue-500/10 text-blue-300 border-blue-500/20",
};
const defaultTag = "bg-gray-500/10 text-gray-400 border-gray-500/20";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">03</span>
          <div className="h-px flex-1 max-w-[60px] bg-blue-400/40" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{proj.title}</h3>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{proj.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${tagColors[tag] || defaultTag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2.5 flex-1">
                {proj.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-600 mt-2" />
                    <span className="text-gray-400 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

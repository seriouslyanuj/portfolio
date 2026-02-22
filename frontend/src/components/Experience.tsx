const jobs = [
  {
    company: "Infosys",
    role: "Specialist Programmer",
    period: "Nov 2025 – Present",
    color: "blue",
    bullets: [
      "Advanced System Design training and architecture-focused development",
      "Agentic AI systems using LangChain, LangGraph, MCP",
      "Tool-augmented LLM agents for enterprise workflow automation",
      "Multi-step reasoning pipelines and external API integrations",
      "Architecture-oriented solutions with emphasis on scalability",
    ],
  },
  {
    company: "LuckPay Solutions",
    role: "Software Engineer Trainee",
    period: "July 2025 – Oct 2025",
    color: "purple",
    bullets: [
      "Architected Dynamic Routing Engine for payment processing",
      "Integrated Easebuzz, NDML, JioPay payment gateways",
      "Automated failover ensuring 99.9% uptime",
      "JWT and Base24 (ISO 8583) authentication implementation",
      "Built 20+ Spring Boot microservices",
      "CI/CD with Jenkins and SonarQube; reduced vulnerabilities by 25%",
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-500/5",
  purple: "border-purple-500/30 bg-purple-500/5",
};
const dotMap: Record<string, string> = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">02</span>
          <div className="h-px flex-1 max-w-[60px] bg-blue-400/40" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-3 hidden md:block" />
          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-6 h-6 rounded-full border-2 border-gray-950 ${dotMap[job.color]} hidden md:flex items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-gray-950" />
                </div>
                <div className={`rounded-2xl border p-6 md:p-8 ${colorMap[job.color]}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <p className="text-gray-400 text-sm mt-1">{job.role}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-500 mt-2" />
                        <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

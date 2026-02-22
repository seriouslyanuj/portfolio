export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>
        <p className="text-gray-400 text-lg font-medium mb-4 tracking-wide">
          Anuj Gupta &nbsp;·&nbsp; Prayagraj, India
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Scalable
          </span>
          <br />
          Distributed Systems
          <br />
          <span className="text-gray-400">&amp;</span>{" "}Autonomous
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            AI Agents
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-4">
          Specialist Programmer at{" "}
          <span className="text-white font-medium">Infosys</span>
          {" "}·{" "}
          <span className="text-blue-400">Fintech Systems</span>
          {" "}·{" "}
          <span className="text-blue-400">Agentic AI</span>
          {" "}·{" "}
          <span className="text-blue-400">System Design</span>
        </p>
        <p className="text-gray-500 text-base max-w-xl leading-relaxed mb-10">
          Architecting high-availability systems that scale. From fault-tolerant
          payment routing engines to multi-agent AI orchestration &mdash;
          reliability, observability, and design rigor drive every decision.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#philosophy"
            className="px-6 py-3 text-sm font-semibold text-white rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-200"
          >
            View Architecture
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/10"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold text-blue-400 rounded-lg border border-blue-400/30 hover:bg-blue-400/10 transition-all duration-200"
          >
            Contact
          </a>
        </div>
        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-10">
          {[
            { value: "20+", label: "Microservices Built" },
            { value: "2×", label: "Patents Published" },
            { value: "Top 3", label: "Infosys Cohort Rank" },
            { value: "99.9%", label: "System Uptime" },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const highlights = [
  "Top 3 rank (89%) in Infosys Specialist Programmer cohort",
  "Advanced System Design and Cloud Architecture expertise",
  "Built autonomous Agentic AI systems using LangChain, LangGraph, MCP",
  "Designed high-availability fintech routing engine",
  "Built 20+ Spring Boot microservices",
  "Focus on reliability, scalability, and fault tolerance",
];

export default function Summary() {
  return (
    <section id="summary" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01</span>
          <div className="h-px flex-1 max-w-[60px] bg-blue-400/40" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Professional Summary</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Philosophy = () => {
  const principles = [
    {
      number: '01',
      title: 'Reliability-first engineering',
      description: 'Systems must degrade gracefully. Every component is designed with failure modes in mind.'
    },
    {
      number: '02',
      title: 'Designing for failure',
      description: 'Assume partial outages. Circuit breakers, retries, and fallbacks are core architecture.'
    },
    {
      number: '03',
      title: 'Observability over debugging',
      description: 'Logs, metrics, and traces first. Blind systems cannot be trusted in production.'
    },
    {
      number: '04',
      title: 'Simplicity under pressure',
      description: 'Fight complexity at every layer. The best abstraction is the one you do not need.'
    },
    {
      number: '05',
      title: 'API-first thinking',
      description: 'Contracts between services are sacred. Design APIs before implementation.'
    },
    {
      number: '06',
      title: 'Automation',
      description: 'Manual processes do not scale. CI/CD, IaC, and self-healing are table stakes.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 px-6 bg-[#070B14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-blue-400 font-mono text-sm font-medium">06</span>
          <div className="h-px w-12 bg-blue-400/50"></div>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Architecture Philosophy</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Principles that guide every design decision, from system architecture to code review.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-white/[0.06] font-mono mb-4 group-hover:text-blue-500/20 transition-colors">
                {p.number}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

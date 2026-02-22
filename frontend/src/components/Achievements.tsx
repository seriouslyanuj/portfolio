const achievements = [
  { num: "01", title: "Patent Published", detail: "FSPMS – Fingerprint-based Smart Payment & Monitoring System" },
  { num: "02", title: "Patent Published", detail: "Smart Wristband for real-time health monitoring" },
  { num: "03", title: "GATE 2024 Qualified", detail: "Qualified in Data Science & AI on first attempt" },
  { num: "04", title: "Bosch Autovision X", detail: "Semi-Finalist in national automotive AI challenge" },
  { num: "05", title: "2x Innotech Hackathon", detail: "Top 10 Finalist in two consecutive editions" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">05</span>
          <div className="h-px flex-1 max-w-[60px] bg-blue-400/40" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Achievements</h2>
        <div className="space-y-3">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-6 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 group"
            >
              <span className="text-3xl font-extrabold text-white/10 group-hover:text-blue-500/20 transition-colors font-mono min-w-[3rem]">
                {a.num}
              </span>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-white font-semibold text-sm">{a.title}</div>
                <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{a.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

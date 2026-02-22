const categories = [
  { title: "Languages", items: ["Java", "Python", "SQL", "C++", "Dart"] },
  { title: "Backend & Architecture", items: ["Spring Boot", "Microservices", "REST APIs", "System Design", "JWT", "Base24"] },
  { title: "AI & Machine Learning", items: ["Agentic AI", "LangChain", "LangGraph", "MCP", "LLMs", "AI Agents"] },
  { title: "DevOps", items: ["Docker", "Jenkins", "SonarQube", "Git", "Maven"] },
  { title: "Databases & Cloud", items: ["PostgreSQL", "MySQL", "AWS", "Firebase", "Redis"] },
  { title: "Hardware & IoT", items: ["ESP32", "BLE", "Circuit Design", "Sensor Integration"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">04</span>
          <div className="h-px flex-1 max-w-[60px] bg-blue-400/40" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const agents = [
  "GPT-5",
  "Claude",
  "Gemini",
  "DeepSeek",
];

export default function DashboardAgents() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-5 text-lg font-semibold text-white">
        Active AI Models
      </h3>

      <div className="space-y-4">
        {agents.map((agent) => (
          <div
            key={agent}
            className="flex items-center justify-between"
          >
            <span className="text-slate-300">
              {agent}
            </span>

            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-sm text-emerald-400">
                Online
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
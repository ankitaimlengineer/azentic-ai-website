"use client";

const metrics = [
  {
    title: "AI Agents",
    value: "24",
  },
  {
    title: "Running Tasks",
    value: "132",
  },
  {
    title: "Accuracy",
    value: "99.8%",
  },
  {
    title: "Clients",
    value: "50+",
  },
];

export default function DashboardMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <p className="text-sm text-slate-400">
            {item.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
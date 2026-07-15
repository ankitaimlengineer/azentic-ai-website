"use client";

const activity = [
  "Customer Support Completed",
  "Invoice Generated",
  "Workflow Finished",
];

export default function DashboardActivity() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-5 text-lg font-semibold text-white">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activity.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            <p className="text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
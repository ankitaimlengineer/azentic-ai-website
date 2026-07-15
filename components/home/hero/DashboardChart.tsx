"use client";

export default function DashboardChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-5 text-lg font-semibold text-white">
        AI Performance
      </h3>

      <div className="flex h-40 items-end justify-between gap-2">
        {[45, 70, 55, 90, 80, 100, 95].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-blue-500"
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
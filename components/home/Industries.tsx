export default function Industries() {
  const industries = ["Healthcare", "FinTech", "Real Estate", "E-commerce", "Manufacturing"];
  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/5">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest">Industries <br/> <span className="text-zinc-600 text-xl font-light">We Empower</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <span key={i} className="px-8 py-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white transition-all text-sm font-bold uppercase tracking-widest">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
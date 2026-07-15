export default function HeroStats() {
  const stats = [
    {
      number: "50+",
      label: "Projects",
    },
    {
      number: "25+",
      label: "Clients",
    },
    {
      number: "99%",
      label: "Satisfaction",
    },
  ];

  return (
    <div className="mt-12 flex gap-12">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-white">
            {item.number}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}
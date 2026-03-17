export function FeatureCard({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-5 backdrop-blur transition hover:bg-card/55">
      <div className="absolute -right-10 -top-10 size-28 rounded-full bg-linear-to-tr from-indigo-500/10 via-sky-500/10 to-violet-500/10 blur-2xl transition group-hover:opacity-80" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <span className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
            {badge}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

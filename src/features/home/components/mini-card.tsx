export function MiniCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card/40 p-5 backdrop-blur">
      <p className="text-sm font-semibold tracking-tight">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

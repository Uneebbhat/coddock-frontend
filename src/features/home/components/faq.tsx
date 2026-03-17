export function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-[2.5rem] border border-border bg-card/40 p-6 backdrop-blur">
      <p className="text-sm font-semibold tracking-tight">{q}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{a}</p>
    </div>
  );
}

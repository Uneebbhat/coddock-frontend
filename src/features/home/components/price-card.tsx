import Link from "next/link";

export function PriceCard({
  title,
  price,
  description,
  features,
  cta,
  featured,
  footnote,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  footnote?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[2.5rem] border p-6 backdrop-blur",
        featured
          ? "border-indigo-300/30 bg-linear-to-b from-indigo-500/15 via-card/40 to-card/40 shadow-2xl shadow-black/40"
          : "border-border bg-card/40",
      ].join(" ")}
    >
      {featured ? (
        <div className="absolute right-5 top-5 rounded-full border border-indigo-200/20 bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold text-indigo-100">
          Most popular
        </div>
      ) : null}

      <p className="text-sm font-semibold tracking-tight">{title}</p>
      <p className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-tight">{price}</span>
        <span className="pb-1 text-sm text-muted-foreground">/mo</span>
      </p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-block size-1.5 rounded-full bg-emerald-300/80" />
            <span className="leading-6">{f}</span>
          </li>
        ))}
      </ul>

      {cta.href.startsWith("/") ? (
        <Link
          href={cta.href}
          className={[
            "mt-7 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition",
            featured
              ? "bg-primary text-primary-foreground shadow-sm shadow-black/25 hover:opacity-90"
              : "border border-border bg-background/40 text-foreground backdrop-blur hover:bg-background/70",
          ].join(" ")}
        >
          {cta.label}
        </Link>
      ) : (
        <a
          href={cta.href}
          className={[
            "mt-7 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition",
            featured
              ? "bg-primary text-primary-foreground shadow-sm shadow-black/25 hover:opacity-90"
              : "border border-border bg-background/40 text-foreground backdrop-blur hover:bg-background/70",
          ].join(" ")}
        >
          {cta.label}
        </a>
      )}

      {footnote ? (
        <p className="mt-3 text-xs text-muted-foreground">{footnote}</p>
      ) : null}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "left" ? "" : "text-center"}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p
        className={[
          "mt-3 text-pretty text-sm leading-6 text-muted-foreground sm:text-base",
          align === "left" ? "max-w-xl" : "mx-auto max-w-2xl",
        ].join(" ")}
      >
        {subtitle}
      </p>
    </div>
  );
}

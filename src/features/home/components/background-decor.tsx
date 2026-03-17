import Image from "next/image";

export function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(99,102,241,0.20),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(56,189,248,0.14),transparent_50%),radial-gradient(900px_circle_at_60%_90%,rgba(168,85,247,0.14),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.20]">
        <Image
          src="/dotted-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/10 to-background" />
    </div>
  );
}

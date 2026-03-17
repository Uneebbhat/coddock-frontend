import Image from "next/image";

export function HeroImage() {
  return (
    <>
      <Image
        src="/hero-img.png"
        alt="CodDock product preview"
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/5 to-transparent" />
    </>
  );
}

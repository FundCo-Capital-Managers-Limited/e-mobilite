import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
  imageAlt,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/80 to-dark/90" />
        </>
      )}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28">
        {breadcrumb && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

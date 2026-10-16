import Image from "next/image";
import Link from "next/link";

/*
  Concept websites by Iris & Oak, each with its own page in this project.
*/
const concepts = [
  {
    name: "Willow & Gray",
    type: "Restaurant",
    href: "/willowandgrayrestaurant",
    image: "/images/hero-food.jpg",
    alt: "Willow & Gray restaurant concept homepage",
  },
  {
    name: "Northline Auto",
    type: "Automotive",
    href: "/automotivegarage",
    image: "/images/concepts/northline-automotive/northline-automotive-concept.png",
    alt: "Northline Automotive concept website",
  },
  {
    name: "Café",
    type: "Marlow & Bean café",
    href: "/marlowandbeancafe",
    image: "/images/concepts/marlow-bean/marlow-bean-concept.png",
    alt: "Marlow & Bean café concept website",
  },
  {
    name: "Salon",
    type: "Atelier Rue hair salon",
    href: "/atelierruehairsalon",
    image: "/images/concepts/atelier-rue/atelier-rue-concept.png",
    alt: "Atelier Rue hair salon concept website",
  },
];

export default function ConceptsHome() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <header className="max-w-3xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#7a6a52]">
          Iris &amp; Oak Concepts
        </p>

        <h1 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          Concept websites
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#20231f]/75">
          Example websites designed and built by Iris &amp; Oak for different
          kinds of independent business.
        </p>
      </header>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-16">
        {concepts.map((concept) => (
          <li key={concept.name}>
            <Link href={concept.href} className="group block">
              <span className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-[#e8e1d4]">
                <Image
                  src={concept.image}
                  alt={concept.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </span>

              <span className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-[family-name:var(--font-display)] text-3xl font-medium">
                  {concept.name}
                </span>
                <span aria-hidden="true" className="text-lg transition group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="mt-1 block text-sm text-[#20231f]/65">
                {concept.type}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="mt-20 border-t border-[#20231f]/15 pt-6 text-sm text-[#20231f]/65">
        Concept websites by{" "}
        <a href="https://irisoak.dev" className="underline underline-offset-4">
          Iris &amp; Oak
        </a>
      </footer>
    </main>
  );
}

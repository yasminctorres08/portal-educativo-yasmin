import { ArrowRight, BookOpen, Cpu, Lightbulb } from "lucide-react";
import heroImg from "@/assets/hero-portal.jpg";

const highlights = [
  { icon: BookOpen, label: "Aprendizaje práctico" },
  { icon: Cpu, label: "Tecnología educativa" },
  { icon: Lightbulb, label: "Innovación en el aula" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden gradient-hero pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-soft uppercase">
            Formación · Tecnología · Innovación
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-semibold text-navy-foreground sm:text-5xl lg:text-6xl">
            Portal Educativo
          </h1>
          <div className="mt-5 gold-rule" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Un espacio para aprender con recursos claros, tecnología aplicada e
            innovación educativa: materiales, clases y herramientas digitales
            organizadas para acompañar el estudio y la práctica docente.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#recursos"
              className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Explorar recursos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/30 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Conocer más
            </a>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-navy-foreground/15 bg-navy/40 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="min-w-0 text-sm font-medium text-navy-foreground/90">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import { ArrowUpRight, FileText, Link2, PlayCircle, FileType2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { categorias, recursos, type Recurso } from "./data";

const iconoTipo = {
  PDF: FileText,
  Enlace: Link2,
  Video: PlayCircle,
  Documento: FileType2,
} as const;

function Tarjeta({ recurso, delay }: { recurso: Recurso; delay: number }) {
  const Icono = iconoTipo[recurso.tipo];
  const disponible = Boolean(recurso.href);

  return (
    <Reveal
      as="li"
      delay={delay}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <span className="inline-flex min-w-0 items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          <span className="truncate">{recurso.categoria}</span>
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/12 text-navy">
          <Icono className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{recurso.titulo}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {recurso.descripcion}
      </p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {recurso.tipo}
        </span>
        {disponible ? (
          <a
            href={recurso.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
          >
            Acceder
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Recurso en preparación"
            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-dashed border-border px-4 py-2 text-sm font-semibold text-muted-foreground"
          >
            En preparación
          </button>
        )}
      </div>
    </Reveal>
  );
}

export function Recursos() {
  const [filtro, setFiltro] = useState<string>("Todos");
  const lista = useMemo(
    () => (filtro === "Todos" ? recursos : recursos.filter((r) => r.categoria === filtro)),
    [filtro],
  );
  const opciones = ["Todos", ...categorias];

  return (
    <section id="recursos" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Recursos educativos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Materiales organizados por categoría
          </h2>
          <div className="mt-4 gold-rule" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Cada tarjeta está preparada para enlazar documentos, presentaciones,
            videos o herramientas reales cuando estén disponibles.
          </p>
        </Reveal>

        <div
          role="group"
          aria-label="Filtrar recursos por categoría"
          className="mt-8 flex flex-wrap gap-2"
        >
          {opciones.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFiltro(c)}
              aria-pressed={filtro === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                filtro === c
                  ? "border-gold bg-navy text-navy-foreground shadow-lift"
                  : "border-border bg-card text-muted-foreground hover:border-gold/60 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((r, i) => (
            <Tarjeta key={r.id} recurso={r} delay={(i % 3) * 80} />
          ))}
        </ul>
      </div>
    </section>
  );
}

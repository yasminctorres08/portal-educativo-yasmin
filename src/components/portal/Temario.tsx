import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { modulos } from "./data";

export function Temario() {
  return (
    <section id="temario" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Temario
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Módulos y contenidos sugeridos
          </h2>
          <div className="mt-4 gold-rule" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Estructura de referencia totalmente editable: los módulos y sus
            contenidos pueden ajustarse, ampliarse o reorganizarse según el curso.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Accordion
            type="single"
            collapsible
            defaultValue={modulos[0]?.id}
            className="space-y-4"
          >
            {modulos.map((m, i) => (
              <AccordionItem
                key={m.id}
                value={m.id}
                className="rounded-2xl border border-border bg-card px-5 shadow-card transition-colors hover:border-gold/60 data-[state=open]:border-gold/70"
              >
                <AccordionTrigger className="gap-4 py-5 text-left hover:no-underline">
                  <span className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy text-sm font-semibold text-navy-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-base font-semibold text-foreground sm:text-lg">
                        {m.titulo}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {m.descripcion}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {m.contenidos.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        <span className="min-w-0 text-muted-foreground">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-lg border border-dashed border-border bg-muted/60 px-4 py-3 text-xs text-muted-foreground">
                    Contenido editable: sustituye o amplía estos puntos con el
                    programa oficial del módulo.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

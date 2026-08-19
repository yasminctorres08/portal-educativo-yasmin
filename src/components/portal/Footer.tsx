import { GraduationCap } from "lucide-react";

const enlaces = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "recursos", label: "Recursos educativos" },
  { id: "temario", label: "Temario" },
  { id: "contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-lg font-semibold">
                  Portal Educativo
                </span>
                <span className="block truncate text-xs tracking-wide text-gold-soft/80">
                  Yasmin Torres
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-foreground/70">
              Recursos, temario y herramientas digitales para acompañar la
              formación, la práctica docente y la innovación educativa.
            </p>
          </div>

          <nav aria-label="Navegación secundaria" className="min-w-0">
            <h2 className="text-sm font-semibold text-gold-soft">Secciones</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {enlaces.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-navy-foreground/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} Portal Educativo Yasmin Torres. Contenido
          educativo en construcción.
        </div>
      </div>
    </footer>
  );
}

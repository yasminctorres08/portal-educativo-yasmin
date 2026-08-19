import { ClipboardList, MonitorSmartphone, PenTool, School } from "lucide-react";
import { Reveal } from "./Reveal";

const roles = [
  {
    icon: PenTool,
    titulo: "Diseñadora de contenido",
    texto:
      "Diseño y organización de materiales educativos claros, coherentes y adaptados al contexto de aprendizaje.",
  },
  {
    icon: School,
    titulo: "Profesora de bachillerato",
    texto:
      "Acompañamiento académico con enfoque en la comprensión, la práctica y la autonomía del estudiante.",
  },
  {
    icon: ClipboardList,
    titulo: "Registro y Control de Estudios",
    texto:
      "Responsable de procesos académicos y administrativos con orden, seguimiento y precisión.",
  },
  {
    icon: MonitorSmartphone,
    titulo: "Tecnología educativa",
    texto:
      "Integración de herramientas digitales para apoyar la enseñanza y facilitar el acceso a los recursos.",
  },
];

export function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Sobre mí
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Yasmin Torres
            </h2>
            <div className="mt-4 gold-rule" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Mi trabajo se enfoca en la formación, la tecnología educativa y el
              aprendizaje práctico. Diseño contenidos, acompaño procesos de
              enseñanza en bachillerato y gestiono la organización académica desde
              Registro y Control de Estudios.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Este portal reúne materiales, temario y herramientas en un solo lugar,
              con una estructura pensada para crecer e incorporar nuevos recursos.
            </p>
            <p className="mt-6 rounded-lg border border-dashed border-border bg-muted/60 p-4 text-sm text-muted-foreground">
              Sección editable: aquí puedes ampliar tu trayectoria, enfoque
              pedagógico o áreas de interés cuando lo desees.
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {roles.map(({ icon: Icon, titulo, texto }, i) => (
              <Reveal
                as="li"
                key={titulo}
                delay={i * 90}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gold/15 group-hover:text-navy">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {texto}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

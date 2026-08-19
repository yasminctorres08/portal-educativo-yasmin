import { useState, type FormEvent } from "react";
import { Loader2, Mail, MapPin, Send, Phone, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Errores = Partial<Record<"nombre" | "correo" | "asunto" | "mensaje", string>>;

export function Contacto() {
  const [estado, setEstado] = useState<"idle" | "enviando" | "enviado">("idle");
  const [errores, setErrores] = useState<Errores>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const correo = String(fd.get("correo") ?? "").trim();
    const asunto = String(fd.get("asunto") ?? "").trim();
    const mensaje = String(fd.get("mensaje") ?? "").trim();

    const err: Errores = {};
    if (nombre.length < 2) err.nombre = "Escribe tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) err.correo = "Introduce un correo válido.";
    if (asunto.length < 3) err.asunto = "Indica un asunto.";
    if (mensaje.length < 10) err.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    setErrores(err);
    if (Object.keys(err).length > 0) return;

    setEstado("enviando");
    const form = e.currentTarget;
    window.setTimeout(() => {
      setEstado("enviado");
      form.reset();
    }, 900);
  };

  const campo =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";

  return (
    <section id="contacto" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            ¿Tienes una consulta?
          </h2>
          <div className="mt-4 gold-rule" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Completa el formulario y describe tu solicitud. La información de
            contacto oficial se incorporará próximamente.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    className={campo}
                    placeholder="Tu nombre"
                    aria-invalid={Boolean(errores.nombre)}
                    aria-describedby={errores.nombre ? "err-nombre" : undefined}
                  />
                  {errores.nombre && (
                    <p id="err-nombre" className="mt-1.5 text-xs text-destructive">
                      {errores.nombre}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="correo" className="text-sm font-medium text-foreground">
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    className={campo}
                    placeholder="nombre@correo.com"
                    aria-invalid={Boolean(errores.correo)}
                    aria-describedby={errores.correo ? "err-correo" : undefined}
                  />
                  {errores.correo && (
                    <p id="err-correo" className="mt-1.5 text-xs text-destructive">
                      {errores.correo}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="text-sm font-medium text-foreground">
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  className={campo}
                  placeholder="Motivo de tu mensaje"
                  aria-invalid={Boolean(errores.asunto)}
                  aria-describedby={errores.asunto ? "err-asunto" : undefined}
                />
                {errores.asunto && (
                  <p id="err-asunto" className="mt-1.5 text-xs text-destructive">
                    {errores.asunto}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  className={cn(campo, "resize-y")}
                  placeholder="Cuéntame en qué puedo ayudarte"
                  aria-invalid={Boolean(errores.mensaje)}
                  aria-describedby={errores.mensaje ? "err-mensaje" : undefined}
                />
                {errores.mensaje && (
                  <p id="err-mensaje" className="mt-1.5 text-xs text-destructive">
                    {errores.mensaje}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-all hover:-translate-y-0.5 hover:bg-navy-deep disabled:translate-y-0 disabled:opacity-70"
                >
                  {estado === "enviando" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
                </button>
                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {estado === "enviado" && (
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                      Mensaje registrado. El envío real se activará al conectar el
                      servicio de correo.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border bg-navy p-6 text-navy-foreground shadow-card sm:p-8">
            <h3 className="font-display text-xl font-semibold">Datos de contacto</h3>
            <div className="mt-4 gold-rule" />
            <ul className="mt-6 space-y-5 text-sm">
              {[
                { icon: Mail, label: "Correo electrónico" },
                { icon: Phone, label: "Teléfono" },
                { icon: MapPin, label: "Ubicación" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium">{label}</span>
                    <span className="block text-navy-foreground/70">
                      Pendiente de completar
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-lg border border-dashed border-navy-foreground/30 p-4 text-xs text-navy-foreground/75">
              Bloque preparado para incorporar los datos de contacto oficiales
              cuando estén disponibles.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

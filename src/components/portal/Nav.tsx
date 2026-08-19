import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "recursos", label: "Recursos educativos" },
  { id: "temario", label: "Temario" },
  { id: "contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-deep/95 shadow-lift backdrop-blur"
          : "bg-navy-deep/70 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between"
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 text-navy-foreground"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold">
              Portal Educativo
            </span>
            <span className="block truncate text-xs tracking-wide text-gold-soft/80">
              Yasmin Torres
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-gold",
                  active === l.id && "text-gold",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300",
                    active === l.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-navy-foreground/20 text-navy-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-navy-foreground/10 bg-navy-deep lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-3 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-navy hover:text-gold",
                  active === l.id && "text-gold",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

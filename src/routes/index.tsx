import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portal/Nav";
import { Hero } from "@/components/portal/Hero";
import { SobreMi } from "@/components/portal/SobreMi";
import { Recursos } from "@/components/portal/Recursos";
import { Temario } from "@/components/portal/Temario";
import { Contacto } from "@/components/portal/Contacto";
import { Footer } from "@/components/portal/Footer";

const titulo = "Portal Educativo Yasmin Torres";
const descripcion =
  "Portal educativo con recursos didácticos, temario por módulos y herramientas digitales orientadas al aprendizaje práctico y la innovación educativa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <SobreMi />
        <Recursos />
        <Temario />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Asesorías Jurídicas" },
      { name: "description", content: "Cómo protegemos tu información personal." },
      { property: "og:title", content: "Política de privacidad | Asesorías Jurídicas" },
      { property: "og:description", content: "Cómo protegemos tu información personal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <div className="contenedor py-24">
      <p className="eyebrow">En construcción</p>
      <h1 className="display-lg mt-4">Política de privacidad</h1>
      <p className="lectura mt-6 text-tinta-suave">Cómo protegemos tu información personal.</p>
    </div>
  );
}

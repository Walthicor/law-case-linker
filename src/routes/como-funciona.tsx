import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Cómo funciona | Asesorías Jurídicas" },
      { name: "description", content: "Tres pasos" },
      { property: "og:title", content: "Cómo funciona | Asesorías Jurídicas" },
      { property: "og:description", content: "Tres pasos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <div className="contenedor py-24">
      <p className="eyebrow">En construcción</p>
      <h1 className="display-lg mt-4">Cómo funciona</h1>
      <p className="lectura mt-6 text-tinta-suave">Tres pasos</p>
    </div>
  );
}

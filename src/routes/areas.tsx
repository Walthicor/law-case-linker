import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de práctica | Asesorías Jurídicas" },
      { name: "description", content: "Las 13 áreas del derecho en las que te conectamos con abogados especialistas en Colombia." },
      { property: "og:title", content: "Áreas de práctica | Asesorías Jurídicas" },
      { property: "og:description", content: "Las 13 áreas del derecho en las que te conectamos con abogados especialistas en Colombia." },
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
      <h1 className="display-lg mt-4">Áreas de práctica</h1>
      <p className="lectura mt-6 text-tinta-suave">Las 13 áreas del derecho en las que te conectamos con abogados especialistas en Colombia.</p>
    </div>
  );
}

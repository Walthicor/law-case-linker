import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cobertura")({
  head: () => ({
    meta: [
      { title: "Cobertura | Asesorías Jurídicas" },
      { name: "description", content: "Ciudades de Colombia donde conectamos casos con abogados especialistas." },
      { property: "og:title", content: "Cobertura | Asesorías Jurídicas" },
      { property: "og:description", content: "Ciudades de Colombia donde conectamos casos con abogados especialistas." },
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
      <h1 className="display-lg mt-4">Cobertura</h1>
      <p className="lectura mt-6 text-tinta-suave">Ciudades de Colombia donde conectamos casos con abogados especialistas.</p>
    </div>
  );
}

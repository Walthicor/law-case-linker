import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies | Asesorías Jurídicas" },
      { name: "description", content: "Uso de cookies en Asesorías Jurídicas Colombia." },
      { property: "og:title", content: "Política de cookies | Asesorías Jurídicas" },
      { property: "og:description", content: "Uso de cookies en Asesorías Jurídicas Colombia." },
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
      <h1 className="display-lg mt-4">Política de cookies</h1>
      <p className="lectura mt-6 text-tinta-suave">Uso de cookies en Asesorías Jurídicas Colombia.</p>
    </div>
  );
}

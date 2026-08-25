import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gracias")({
  validateSearch: (search: Record<string, unknown>): { radicado?: string | undefined } => ({
    radicado:
      typeof search["radicado"] === "string" && search["radicado"] ? search["radicado"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Gracias | Asesorías Jurídicas" },
      { name: "description", content: "Recibimos tu caso. Te contactamos en 24 horas hábiles." },
      { property: "og:title", content: "Gracias | Asesorías Jurídicas" },
      { property: "og:description", content: "Recibimos tu caso. Te contactamos en 24 horas hábiles." },
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
      <h1 className="display-lg mt-4">Gracias</h1>
      <p className="lectura mt-6 text-tinta-suave">Recibimos tu caso. Te contactamos en 24 horas hábiles.</p>
    </div>
  );
}

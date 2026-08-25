import { createFileRoute } from "@tanstack/react-router";

export type BusquedaCaso = { area?: string; ciudad?: string; estado?: string };

export const Route = createFileRoute("/iniciar-caso")({
  validateSearch: (search: Record<string, unknown>): BusquedaCaso => ({
    area: typeof search.area === "string" ? search.area : undefined,
    ciudad: typeof search.ciudad === "string" ? search.ciudad : undefined,
    estado: typeof search.estado === "string" ? search.estado : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contar mi caso | Asesorías Jurídicas" },
      { name: "description", content: "Cuéntanos tu caso en 3 pasos y te conectamos con un abogado especialista verificado." },
      { property: "og:title", content: "Contar mi caso | Asesorías Jurídicas" },
      { property: "og:description", content: "Cuéntanos tu caso en 3 pasos y te conectamos con un abogado especialista verificado." },
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
      <h1 className="display-lg mt-4">Contar mi caso</h1>
      <p className="lectura mt-6 text-tinta-suave">Cuéntanos tu caso en 3 pasos y te conectamos con un abogado especialista verificado.</p>
    </div>
  );
}

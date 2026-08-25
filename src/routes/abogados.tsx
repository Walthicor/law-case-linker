import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/abogados")({
  head: () => ({
    meta: [
      { title: "Directorio de abogados | Asesorías Jurídicas" },
      { name: "description", content: "Abogados especialistas verificados con tarjeta profesional vigente." },
      { property: "og:title", content: "Directorio de abogados | Asesorías Jurídicas" },
      { property: "og:description", content: "Abogados especialistas verificados con tarjeta profesional vigente." },
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
      <h1 className="display-lg mt-4">Directorio de abogados</h1>
      <p className="lectura mt-6 text-tinta-suave">Abogados especialistas verificados con tarjeta profesional vigente.</p>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/unete")({
  head: () => ({
    meta: [
      { title: "Únete como abogado | Asesorías Jurídicas" },
      { name: "description", content: "Recibe casos perfilados y calificados en tu área de especialidad." },
      { property: "og:title", content: "Únete como abogado | Asesorías Jurídicas" },
      { property: "og:description", content: "Recibe casos perfilados y calificados en tu área de especialidad." },
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
      <h1 className="display-lg mt-4">Únete como abogado</h1>
      <p className="lectura mt-6 text-tinta-suave">Recibe casos perfilados y calificados en tu área de especialidad.</p>
    </div>
  );
}

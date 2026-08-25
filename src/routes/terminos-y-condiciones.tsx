import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Asesorías Jurídicas" },
      { name: "description", content: "Condiciones de uso de la plataforma Asesorías Jurídicas Colombia." },
      { property: "og:title", content: "Términos y condiciones | Asesorías Jurídicas" },
      { property: "og:description", content: "Condiciones de uso de la plataforma Asesorías Jurídicas Colombia." },
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
      <h1 className="display-lg mt-4">Términos y condiciones</h1>
      <p className="lectura mt-6 text-tinta-suave">Condiciones de uso de la plataforma Asesorías Jurídicas Colombia.</p>
    </div>
  );
}

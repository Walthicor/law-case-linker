import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guias")({
  head: () => ({
    meta: [
      { title: "Guías legales | Asesorías Jurídicas" },
      { name: "description", content: "Guías prácticas para entender tus derechos y los plazos que te aplican." },
      { property: "og:title", content: "Guías legales | Asesorías Jurídicas" },
      { property: "og:description", content: "Guías prácticas para entender tus derechos y los plazos que te aplican." },
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
      <h1 className="display-lg mt-4">Guías legales</h1>
      <p className="lectura mt-6 text-tinta-suave">Guías prácticas para entender tus derechos y los plazos que te aplican.</p>
    </div>
  );
}

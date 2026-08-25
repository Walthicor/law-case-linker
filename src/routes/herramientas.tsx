import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/herramientas")({
  head: () => ({
    meta: [
      { title: "Herramientas legales gratis | Asesorías Jurídicas" },
      { name: "description", content: "Calculadoras y generadores de documentos legales gratuitos, sin registro." },
      { property: "og:title", content: "Herramientas legales gratis | Asesorías Jurídicas" },
      { property: "og:description", content: "Calculadoras y generadores de documentos legales gratuitos, sin registro." },
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
      <h1 className="display-lg mt-4">Herramientas legales gratis</h1>
      <p className="lectura mt-6 text-tinta-suave">Calculadoras y generadores de documentos legales gratuitos, sin registro.</p>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-tratamiento-de-datos")({
  head: () => ({
    meta: [
      { title: "Política de tratamiento de datos | Asesorías Jurídicas" },
      { name: "description", content: "Tratamiento de datos personales conforme a la Ley 1581 de 2012." },
      { property: "og:title", content: "Política de tratamiento de datos | Asesorías Jurídicas" },
      { property: "og:description", content: "Tratamiento de datos personales conforme a la Ley 1581 de 2012." },
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
      <h1 className="display-lg mt-4">Política de tratamiento de datos</h1>
      <p className="lectura mt-6 text-tinta-suave">Tratamiento de datos personales conforme a la Ley 1581 de 2012.</p>
    </div>
  );
}

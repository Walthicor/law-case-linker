import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Asesorías Jurídicas" },
      { name: "description", content: "Escríbenos por WhatsApp o correo. Respondemos en 24 horas hábiles." },
      { property: "og:title", content: "Contacto | Asesorías Jurídicas" },
      { property: "og:description", content: "Escríbenos por WhatsApp o correo. Respondemos en 24 horas hábiles." },
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
      <h1 className="display-lg mt-4">Contacto</h1>
      <p className="lectura mt-6 text-tinta-suave">Escríbenos por WhatsApp o correo. Respondemos en 24 horas hábiles.</p>
    </div>
  );
}

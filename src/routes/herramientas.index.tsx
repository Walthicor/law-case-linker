import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/herramientas/")({
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
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link to="/herramientas/calculadora-liquidacion-laboral" className="tarjeta group block h-full">
          <p className="eyebrow">CALCULADORA</p>
          <h2 className="mt-3 font-semibold group-hover:text-esmeralda">
            Calculadora de liquidación laboral 2026
          </h2>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">
            Cesantías, intereses, prima, vacaciones e indemnización. Gratis y sin registro.
          </p>
        </Link>
      </div>
    </div>
  );
}

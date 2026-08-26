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
        <Link to="/herramientas/derecho-de-peticion" className="tarjeta group block h-full">
          <p className="eyebrow">GENERADOR</p>
          <h2 className="mt-3 font-semibold group-hover:text-esmeralda">
            Generador de derecho de petición 2026
          </h2>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">
            Con la estructura de la Ley 1755 de 2015. Se escribe mientras llenas los campos.
          </p>
        </Link>
        <Link to="/herramientas/accion-de-tutela" className="tarjeta group block h-full">
          <p className="eyebrow">GENERADOR</p>
          <h2 className="mt-3 font-semibold group-hover:text-esmeralda">
            Generador de acción de tutela 2026
          </h2>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">
            Requisitos del Decreto 2591 de 1991, con juramento y medida provisional.
          </p>
        </Link>
        <Link to="/herramientas/contrato-de-arrendamiento" className="tarjeta group block h-full">
          <p className="eyebrow">GENERADOR</p>
          <h2 className="mt-3 font-semibold group-hover:text-esmeralda">
            Contrato de arrendamiento de vivienda 2026
          </h2>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">
            Ajustado a la Ley 820 de 2003: canon, incremento IPC, garantía e inventario.
          </p>
        </Link>
      </div>

    </div>
  );
}

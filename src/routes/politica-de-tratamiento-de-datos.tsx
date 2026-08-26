import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluta, metaSeo } from "@/lib/seo";
import { PAGINAS, ULTIMA_REVISION } from "@/lib/seo-inventario";
import { PaginaLegal } from "@/components/sitio/legal/PaginaLegal";
import { ACTUALIZACION, TRATAMIENTO } from "@/lib/legal";

const TITLE = "Política de tratamiento de datos personales";
const DESC =
  "Cómo tratamos tus datos conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015: finalidades, datos sensibles, derechos y plazos.";

export const Route = createFileRoute("/politica-de-tratamiento-de-datos")({
  head: () => ({
    ...metaSeo(PAGINAS.tratamiento),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: PAGINAS.tratamiento.titulo,
          description: PAGINAS.tratamiento.descripcion,
          url: absoluta(PAGINAS.tratamiento.ruta),
          inLanguage: "es-CO",
          dateModified: ULTIMA_REVISION,
        }),
      },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <PaginaLegal
      titulo={TITLE}
      entradilla="Este documento explica qué datos personales recolectamos, para qué los usamos, con quién los compartimos y cómo puedes ejercer tus derechos como titular."
      actualizacion={ACTUALIZACION}
      secciones={TRATAMIENTO}
      pie={
        <p className="text-[0.95rem] leading-relaxed text-tinta-suave">
          ¿Buscas la versión corta?{" "}
          <Link to="/politica-de-privacidad" className="font-semibold text-esmeralda underline">
            Lee la política de privacidad resumida
          </Link>
          .
        </p>
      }
    />
  );
}

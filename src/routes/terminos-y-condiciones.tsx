import { createFileRoute, Link } from "@tanstack/react-router";
import { PaginaLegal } from "@/components/sitio/legal/PaginaLegal";
import { ACTUALIZACION, TERMINOS } from "@/lib/legal";

const TITLE = "Términos y condiciones";
const DESC = "Condiciones de uso de la plataforma Asesorías Jurídicas Colombia.";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Asesorías Jurídicas" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/terminos-y-condiciones" }],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <PaginaLegal
      titulo={TITLE}
      entradilla="Estas condiciones rigen el uso del sitio. Lo esencial: somos un intermediario tecnológico, no un despacho de abogados, y no prestamos servicios jurídicos."
      actualizacion={ACTUALIZACION}
      secciones={TERMINOS}
      pie={
        <p className="text-[0.95rem] leading-relaxed text-tinta-suave">
          El tratamiento de tus datos personales se rige por la{" "}
          <Link
            to="/politica-de-tratamiento-de-datos"
            className="font-semibold text-esmeralda underline"
          >
            política de tratamiento de datos
          </Link>
          .
        </p>
      }
    />
  );
}

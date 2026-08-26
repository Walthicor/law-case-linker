import { createFileRoute, Link } from "@tanstack/react-router";
import { PaginaLegal } from "@/components/sitio/legal/PaginaLegal";
import { ACTUALIZACION, PRIVACIDAD } from "@/lib/legal";

const TITLE = "Política de privacidad";
const DESC = "Versión resumida y legible de cómo tratamos tu información personal.";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Asesorías Jurídicas" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidad" }],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <PaginaLegal
      titulo={TITLE}
      entradilla="Esta es la versión corta, escrita para leerse en dos minutos. El documento completo y vinculante es la política de tratamiento de datos."
      actualizacion={ACTUALIZACION}
      secciones={PRIVACIDAD}
      pie={
        <Link to="/politica-de-tratamiento-de-datos" className="btn-secundario">
          Ver la política completa
        </Link>
      }
    />
  );
}

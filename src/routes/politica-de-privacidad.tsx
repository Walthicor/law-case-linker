import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { PaginaLegal } from "@/components/sitio/legal/PaginaLegal";
import { ACTUALIZACION, PRIVACIDAD } from "@/lib/legal";

const TITLE = "Política de privacidad";
const DESC = "Versión resumida y legible de cómo tratamos tu información personal.";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    ...metaSeo(PAGINAS.privacidad),
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

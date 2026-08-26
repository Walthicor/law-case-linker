import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { PaginaLegal } from "@/components/sitio/legal/PaginaLegal";
import { ACTUALIZACION, TERMINOS } from "@/lib/legal";

const TITLE = "Términos y condiciones";
const DESC = "Condiciones de uso de la plataforma Asesorías Jurídicas Colombia.";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    ...metaSeo(PAGINAS.terminos),
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

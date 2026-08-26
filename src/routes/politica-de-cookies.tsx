import { createFileRoute } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { PaginaLegal } from "@/components/sitio/legal/PaginaLegal";
import { ACTUALIZACION, COOKIES } from "@/lib/legal";
import { BotonConfigurarCookies } from "@/components/sitio/BannerCookies";

const TITLE = "Política de cookies";
const DESC = "Qué cookies usamos, para qué sirven y cuánto duran.";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    ...metaSeo(PAGINAS.cookies),
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <PaginaLegal
      titulo={TITLE}
      entradilla="Usamos cookies para que el sitio funcione y para entender cómo se usa. Las analíticas y de marketing solo se cargan si las aceptas."
      actualizacion={ACTUALIZACION}
      secciones={COOKIES}
      pie={<BotonConfigurarCookies />}
    />
  );
}

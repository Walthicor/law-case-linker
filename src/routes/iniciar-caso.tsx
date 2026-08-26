import { createFileRoute } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { ShieldCheck } from "lucide-react";
import { Logo } from "@/components/sitio/Logo";
import { FormularioCaso } from "@/components/sitio/FormularioCaso";

export type BusquedaCaso = {
  area?: string | undefined;
  ciudad?: string | undefined;
  estado?: string | undefined;
  valor?: string | undefined;
};

const texto = (v: unknown) => (typeof v === "string" && v ? v : undefined);

export const Route = createFileRoute("/iniciar-caso")({
  validateSearch: (search: Record<string, unknown>): BusquedaCaso => ({
    area: texto(search["area"]),
    ciudad: texto(search["ciudad"]),
    estado: texto(search["estado"]),
    valor: texto(search["valor"]),
  }),
  head: () => ({
    ...metaSeo(PAGINAS.iniciarCaso),
  }),
  component: Pagina,
});

function Pagina() {
  const { area, ciudad, estado, valor } = Route.useSearch();

  return (
    <div className="min-h-screen bg-papel-hueso">
      <header className="border-b border-linea bg-papel">
        <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4 px-5 py-4">
          <Logo />
          <p className="flex items-center gap-2 text-right text-[0.78rem] leading-tight text-tinta-suave">
            <ShieldCheck className="h-5 w-5 shrink-0 text-esmeralda" aria-hidden="true" />
            <span>
              Tus datos están protegidos
              <span className="hidden sm:inline"> · 100% confidencial</span>
            </span>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[720px] px-5 py-10 sm:py-14">
        <FormularioCaso inicial={{ area, ciudad, estado, valor }} />
        <p className="mt-6 text-center text-[0.8rem] text-tinta-suave">
          Asesorías Jurídicas Colombia conecta personas con abogados independientes verificados. No
          somos una firma de abogados.
        </p>
      </div>
    </div>
  );
}

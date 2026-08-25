import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/sitio/Logo";
import { siloDesdeArea } from "@/lib/silos";

export type BusquedaGracias = {
  radicado?: string | undefined;
  area?: string | undefined;
  ciudad?: string | undefined;
};

const texto = (v: unknown) => (typeof v === "string" && v ? v : undefined);

export const Route = createFileRoute("/gracias")({
  validateSearch: (search: Record<string, unknown>): BusquedaGracias => ({
    radicado: texto(search["radicado"]),
    area: texto(search["area"]),
    ciudad: texto(search["ciudad"]),
  }),
  head: () => ({
    meta: [
      { title: "Recibimos tu caso | Asesorías Jurídicas Colombia" },
      { name: "description", content: "Recibimos tu caso. Te contactamos en 24 horas hábiles." },
      { property: "og:title", content: "Recibimos tu caso | Asesorías Jurídicas Colombia" },
      { property: "og:description", content: "Recibimos tu caso. Te contactamos en 24 horas hábiles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  const { radicado, area, ciudad } = Route.useSearch();
  const silo = siloDesdeArea(area ?? "");
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!copiado) return;
    const t = window.setTimeout(() => setCopiado(false), 2000);
    return () => window.clearTimeout(t);
  }, [copiado]);

  const copiar = () => {
    if (!radicado) return;
    void navigator.clipboard.writeText(radicado);
    setCopiado(true);
  };

  return (
    <div className="min-h-screen bg-papel-hueso">
      <header className="border-b border-linea bg-papel">
        <div className="mx-auto flex max-w-[640px] items-center justify-between gap-4 px-5 py-4">
          <Logo />
        </div>
      </header>

      <main className="mx-auto max-w-[640px] px-5 py-12 sm:py-16">
        {!radicado ? (
          <div className="rounded-[6px] border border-linea bg-papel p-6 text-center">
            <p className="eyebrow">RADICADO NO ENCONTRADO</p>
            <h1 className="display-lg mt-3">No encontramos tu radicado</h1>
            <p className="mt-4 text-tinta-suave">
              Si acabas de enviar tu caso, revisa la barra de direcciones o vuelve a{" "}
              <Link to="/iniciar-caso" className="text-esmeralda underline underline-offset-4">
                contar tu caso
              </Link>
              .
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center text-center">
              <div className="check-circulo" aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path className="check-trazo" d="M8 17 L14 23 L24 9" />
                </svg>
              </div>
              <h1 className="display-lg mt-6">Recibimos tu caso</h1>
            </div>

            <div className="mt-8 rounded-[6px] border border-linea bg-papel p-6 text-center">
              <p className="eyebrow">TU RADICADO</p>
              <p className="mt-2 font-mono text-[1.75rem] font-semibold tracking-[0.05em] text-tinta">
                {radicado}
              </p>
              <button
                type="button"
                onClick={copiar}
                className="btn-secundario mt-4 text-sm"
                aria-live="polite"
              >
                {copiado ? "Copiado ✓" : "Copiar"}
              </button>
              <p className="mt-4 text-[0.85rem] text-tinta-suave">
                Guarda este número. Es la referencia de tu caso.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-tinta">Qué sigue ahora</h2>
              <ol className="mt-5 space-y-4">
                <li className="flex gap-4">
                  <span className="font-mono text-[0.9rem] font-semibold text-esmeralda">01</span>
                  <p className="text-tinta">
                    Estamos revisando tu caso y buscando el abogado adecuado en{" "}
                    {ciudad || "tu ciudad"}.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[0.9rem] font-semibold text-esmeralda">02</span>
                  <p className="text-tinta">
                    Te va a contactar por WhatsApp o al correo que registraste.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[0.9rem] font-semibold text-esmeralda">03</span>
                  <p className="text-tinta">
                    Si es un caso urgente, en las próximas horas. Si no, dentro de las próximas 24
                    horas hábiles.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-8 rounded-[6px] border border-linea bg-papel p-6">
              <p className="eyebrow">MIENTRAS TANTO</p>
              <p className="mt-2 text-tinta">
                Preparamos una guía sobre {silo.area} que te puede servir para llegar mejor preparado
                a esa primera conversación.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link to={silo.guia} className="btn-secundario text-sm">
                  Leer la guía de {silo.area} →
                </Link>
                <Link
                  to={silo.herramienta}
                  className="text-sm text-esmeralda underline underline-offset-4"
                >
                  Ver herramienta del silo
                </Link>
              </div>
            </div>

            <p className="mt-8 text-center text-[0.8rem] text-tinta-suave">
              Si necesitas corregir algo de tu caso, escríbenos por WhatsApp al +57 300 123 4567
              mencionando tu radicado.
            </p>
          </>
        )}
      </main>
    </div>
  );
}

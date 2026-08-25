import { createFileRoute, Link } from "@tanstack/react-router";
import { Balanza } from "@/components/sitio/Balanza";
import { HeroVideo } from "@/components/sitio/HeroVideo";
import { SellosConfianza } from "@/components/sitio/SellosConfianza";
import { CaratulaExpediente } from "@/components/sitio/CaratulaExpediente";

const TITULO = "Cuéntanos qué te pasó. Nosotros encontramos el abogado.";
const DESC =
  "Leemos tu caso, identificamos qué especialista necesitas y te conectamos con un abogado con tarjeta verificada en tu ciudad. Sin costo para ti.";

function scrollAFormulario() {
  const form = document.getElementById("caratula-expediente");
  if (!form) return;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
  const primerCampo = form.querySelector<HTMLElement>("select, input");
  setTimeout(() => primerCampo?.focus(), 400);
}

const CAPA =
  "linear-gradient(100deg, rgba(18,33,43,.94) 0%, rgba(18,33,43,.88) 46%, rgba(18,33,43,.72) 100%), repeating-linear-gradient(to bottom, rgba(224,219,209,.05) 0 1px, transparent 1px 32px)";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asesorías jurídicas en Colombia | Abogados especialistas" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] bg-tinta">
      <HeroVideo />
      <div aria-hidden="true" className="absolute inset-0 z-[1]" style={{ background: CAPA }} />

      <div className="contenedor relative z-[2] grid items-center gap-12 pb-20 pt-28 lg:grid-cols-[56fr_44fr] lg:gap-16 lg:pb-24 lg:pt-32">
        {/* En móvil el formulario va primero */}
        <div className="order-1 lg:order-2">
          <CaratulaExpediente />
        </div>

        <div className="order-2 lg:order-1">
          <p className="eyebrow text-esmeralda-lum">
            Plataforma de conexión jurídica · Colombia
          </p>
          <h1 className="display-xl mt-5 text-papel">
            Cuéntanos qué te pasó.
            <br />
            Nosotros encontramos el <span className="text-esmeralda-lum">abogado</span>.
          </h1>
          <p
            className="mt-6 text-[1.125rem] leading-relaxed"
            style={{ maxWidth: 540, color: "rgba(251,250,247,.82)" }}
          >
            Tú no eliges entre 500 abogados. Nosotros leemos tu caso, identificamos qué tipo de
            especialista necesitas y te conectamos con uno que tenga tarjeta verificada en tu
            ciudad. Sin costo para ti.
          </p>

          <div className="mt-10">
            <Balanza
              izquierda={
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={scrollAFormulario}
                    aria-label="Abrir formulario de caso"
                    className="btn-anillo flex h-14 w-14 items-center justify-center rounded-full border text-esmeralda-lum"
                    style={{ borderColor: "rgba(251,250,247,.4)" }}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h5" />
                      <path d="M16 15.5l1 1 2-2" />
                    </svg>
                  </button>
                  <span className="text-[0.75rem]" style={{ color: "rgba(251,250,247,.6)" }}>
                    Formulario
                  </span>
                </div>
              }
              derecha={
                <Link to="/iniciar-caso" className="btn-primario btn-pulso">
                  Contar mi caso →
                </Link>
              }
            />
          </div>

          <div className="mt-12 border-t border-papel/15 pt-8">
            <SellosConfianza />
          </div>
        </div>
      </div>
    </section>
  );
}

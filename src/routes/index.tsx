import { createFileRoute, Link } from "@tanstack/react-router";
import { Balanza } from "@/components/sitio/Balanza";
import { HeroVideo } from "@/components/sitio/HeroVideo";
import { SellosConfianza } from "@/components/sitio/SellosConfianza";
import { CaratulaExpediente } from "@/components/sitio/CaratulaExpediente";

const TITULO = "Cuéntanos qué te pasó. Nosotros encontramos el abogado.";
const DESC =
  "Leemos tu caso, identificamos qué especialista necesitas y te conectamos con un abogado con tarjeta verificada en tu ciudad. Sin costo para ti.";

const WA =
  "https://wa.me/573001234567?text=" +
  encodeURIComponent("Hola, necesito asesoría jurídica.");

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
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Escríbenos por WhatsApp"
                    className="btn-anillo flex h-14 w-14 items-center justify-center rounded-full border text-esmeralda-lum"
                    style={{ borderColor: "rgba(251,250,247,.4)" }}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.35 2.47.96 2.97.77 3.51.72.54-.05 1.75-.71 2-1.41.25-.7.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.19 4.23-9.41 9.42-9.41a9.36 9.36 0 0 1 9.41 9.42c0 5.19-4.23 9.41-9.42 9.41ZM12.05 1.75C6.02 1.75 1.13 6.64 1.13 12.66c0 1.93.5 3.81 1.46 5.47L1 24l6.02-1.58a10.9 10.9 0 0 0 5.03 1.28h.01c6.02 0 10.92-4.89 10.92-10.91 0-2.92-1.14-5.66-3.2-7.72a10.83 10.83 0 0 0-7.72-3.2Z" />
                    </svg>
                  </a>
                  <span className="text-[0.75rem]" style={{ color: "rgba(251,250,247,.6)" }}>
                    Escríbenos
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

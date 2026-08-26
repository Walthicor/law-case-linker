import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Iconos from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { AvisoPlazo } from "@/components/sitio/AvisoPlazo";
import { BloqueNorma } from "@/components/sitio/BloqueNorma";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { PILARES, pilarPorSlug, tituloSeo, type Pilar } from "@/lib/pilares";

export const Route = createFileRoute("/areas/$silo")({
  loader: ({ params }) => {
    const pilar = pilarPorSlug(params.silo);
    if (!pilar) throw notFound();
    return { pilar };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Área no disponible" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.pilar;
    const title = tituloSeo(`Abogados ${p.area} en Colombia`);
    const description = `¿Buscas abogado ${p.area} en Colombia? Cuéntanos tu caso y te conectamos con un especialista.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd(p)),
        },
      ],
    };
  },
  component: Pagina,
});

const CIUDADES = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga"];

function jsonLd(p: Pilar) {
  const url = `https://asesoriasjuridicas.co/areas/${p.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `Abogados ${p.area} en Colombia`,
      description: p.entrada,
      url,
      serviceType: p.titulo,
      areaServed: CIUDADES.map((c) => ({ "@type": "City", name: c })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://asesoriasjuridicas.co/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Áreas",
          item: "https://asesoriasjuridicas.co/areas",
        },
        { "@type": "ListItem", position: 3, name: p.titulo, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
  ];
}

function Icono({ nombre, clase }: { nombre: string; clase?: string }) {
  const Comp = (Iconos as unknown as Record<string, LucideIcon>)[nombre] ?? Iconos.Scale;
  return <Comp aria-hidden="true" className={clase ?? "h-6 w-6 text-esmeralda"} strokeWidth={1.6} />;
}

function Pagina() {
  const { pilar: p } = Route.useLoaderData();
  const relacionados = p.relacionados
    .map((s) => PILARES.find((x) => x.slug === s))
    .filter((x): x is Pilar => Boolean(x))
    .slice(0, 2);

  return (
    <div>
      {/* HERO */}
      <section className="bg-papel-hueso py-14 lg:py-20">
        <div className="contenedor">
          <Migas
            items={[
              { titulo: "Inicio", to: "/" },
              { titulo: "Áreas", to: "/areas" },
              { titulo: p.titulo },
            ]}
          />

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[60fr_40fr]">
            <Revelar>
              <p className="eyebrow">ÁREA DE PRÁCTICA</p>
              <h1 className="display-lg mt-3">{p.h1}</h1>
              <p className="lectura mt-5 text-tinta-suave">{p.entrada}</p>
              <Link
                to="/iniciar-caso"
                search={{ area: p.areaFormulario }}
                className="btn-primario btn-pulso mt-8 inline-flex"
              >
                Contar mi caso {p.area} →
              </Link>
            </Revelar>

            <Revelar retardo={80}>
              <div className="tarjeta">
                <h2 className="text-[1.05rem] font-semibold">En qué te podemos ayudar</h2>
                <ul className="mt-4 space-y-3">
                  {p.situaciones.map((s) => (
                    <li key={s} className="flex gap-3 text-[0.92rem] leading-snug">
                      <Check
                        aria-hidden="true"
                        strokeWidth={2}
                        className="mt-0.5 h-4 w-4 shrink-0 text-esmeralda"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* CASOS MÁS COMUNES */}
      <section className="bg-papel py-16 lg:py-20">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">Casos más comunes</h2>
          </Revelar>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.subareas.map((s, i) => (
              <Revelar
                key={s.slug}
                retardo={(i % 3) * 60}
                className={s.destacada ? "sm:col-span-2 lg:col-span-3" : undefined}
              >
                <article
                  id={s.slug}
                  className={`tarjeta h-full scroll-mt-28 ${
                    s.destacada ? "border-l-2 border-l-esmeralda bg-papel-hueso" : ""
                  }`}
                >
                  {s.destacada ? <p className="eyebrow">SUBÁREA DESTACADA</p> : null}
                  <Icono nombre={p.icono} clase="mt-2 h-5 w-5 text-esmeralda" />
                  <h3
                    className={`mt-3 font-semibold ${s.destacada ? "text-[1.2rem]" : "text-[1rem]"}`}
                  >
                    <Link
                      to="/areas/$silo"
                      params={{ silo: p.slug }}
                      hash={s.slug}
                      className="hover:text-esmeralda"
                    >
                      {s.titulo}
                    </Link>
                  </h3>
                  <p
                    className={`mt-2 text-[0.9rem] leading-relaxed text-tinta-suave ${
                      s.destacada ? "max-w-[820px]" : ""
                    }`}
                  >
                    {s.texto ?? `Contenido en preparación para ${s.titulo.toLowerCase()}.`}
                  </p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO DESARROLLADO */}
      {p.secciones && p.secciones.length > 0 ? (
        <section className="bg-papel py-4 lg:py-8">
          <div className="contenedor">
            <div className="lectura space-y-12">
              {p.secciones.map((sec) => (
                <Revelar key={sec.titulo}>
                  <article>
                    <h2 className="display-md">{sec.titulo}</h2>
                    {sec.parrafos.map((t) => (
                      <p key={t.slice(0, 40)} className="mt-4 leading-relaxed text-tinta-suave">
                        {t}
                      </p>
                    ))}
                    {sec.lista ? (
                      <ul className="mt-5 space-y-3">
                        {sec.lista.map((li) => (
                          <li key={li} className="flex gap-3 text-[0.95rem] text-tinta-suave">
                            <Check
                              aria-hidden="true"
                              strokeWidth={2}
                              className="mt-1 h-4 w-4 shrink-0 text-esmeralda"
                            />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </Revelar>
              ))}
            </div>
          </div>
        </section>
      ) : null}


      {/* QUÉ DICE LA LEY */}
      <section className="bg-papel-hueso py-16 lg:py-20">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">Qué dice la ley</h2>
          </Revelar>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {p.normas.map((n) => (
              <Revelar key={n.articulo}>
                <BloqueNorma {...n} />
              </Revelar>
            ))}
          </div>
          <Revelar className="mt-8 max-w-[720px]">
            <AvisoPlazo titulo={p.plazo.titulo} texto={p.plazo.texto} />
          </Revelar>
        </div>
      </section>

      {/* ¿NECESITAS ABOGADO? */}
      <section className="bg-papel py-16 lg:py-20">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">¿Necesitas un abogado para esto?</h2>
          </Revelar>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Revelar>
              <div className="tarjeta h-full">
                <h3 className="text-[1.02rem] font-semibold">Puedes hacerlo tú mismo si…</h3>
                <ul className="mt-4 space-y-3 text-[0.92rem] text-tinta-suave">
                  {p.solo.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="font-mono text-esmeralda" aria-hidden="true">
                        —
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Revelar>
            <Revelar retardo={80}>
              <div className="tarjeta h-full border-l-2 border-l-esmeralda">
                <h3 className="text-[1.02rem] font-semibold">Necesitas un abogado si…</h3>
                <ul className="mt-4 space-y-3 text-[0.92rem] text-tinta-suave">
                  {p.abogado.map((t) => (
                    <li key={t} className="flex gap-3">
                      <Check
                        aria-hidden="true"
                        strokeWidth={2}
                        className="mt-0.5 h-4 w-4 shrink-0 text-esmeralda"
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Revelar>
          </div>

          <Revelar>
            <p className="lectura mt-10 text-tinta-suave">
              Trabajamos con abogados {p.area} verificados en Bogotá, Medellín, Cali, Barranquilla y
              las demás ciudades principales del país.
            </p>
          </Revelar>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-papel-hueso py-16 lg:py-20">
        <div className="contenedor max-w-[820px]">
          <Revelar>
            <h2 className="display-md">Preguntas frecuentes</h2>
          </Revelar>
          <div className="mt-8">
            <Acordeon items={p.faqs} />
          </div>
        </div>
      </section>

      {/* GUÍAS DEL SILO */}
      <section className="bg-papel py-16 lg:py-20">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">Guías de {p.titulo.toLowerCase()}</h2>
          </Revelar>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {p.guias.map((g, i) => (
              <Revelar key={g.slug} retardo={(i % 3) * 60}>
                <article className="tarjeta h-full">
                  <p className="eyebrow">GUÍA</p>
                  <h3 className="mt-2 text-[1rem] font-semibold leading-snug">
                    <Link to="/guias" className="hover:text-esmeralda">
                      {g.titulo}
                    </Link>
                  </h3>
                </article>
              </Revelar>
            ))}
          </div>

          {p.herramienta ? (
            <Revelar className="mt-10">
              <div className="tarjeta flex flex-col gap-4 border-l-2 border-l-esmeralda sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="eyebrow">HERRAMIENTA</p>
                  <h3 className="mt-2 text-[1.05rem] font-semibold">{p.herramienta.titulo}</h3>
                  <p className="mt-2 text-[0.9rem] text-tinta-suave">
                    {p.herramienta.descripcion}
                  </p>
                </div>
                <Link to="/herramientas" className="btn-secundario shrink-0">
                  Usar la herramienta →
                </Link>
              </div>
            </Revelar>
          ) : null}

          {relacionados.length > 0 ? (
            <Revelar className="mt-10">
              <p className="eyebrow">ÁREAS RELACIONADAS</p>
              <ul className="mt-3 flex flex-wrap gap-4 text-[0.92rem]">
                {relacionados.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/areas/$silo"
                      params={{ silo: r.slug }}
                      className="underline decoration-linea underline-offset-4 transition-colors hover:text-esmeralda"
                    >
                      {r.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </Revelar>
          ) : null}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-esmeralda-claro py-16">
        <div className="contenedor text-center">
          <h2 className="display-md">Cuéntanos tu caso {p.area}</h2>
          <p className="lectura mx-auto mt-4 text-tinta-suave">
            Tarda 3 minutos. Lo revisamos y te conectamos con un abogado verificado.
          </p>
          <Link
            to="/iniciar-caso"
            search={{ area: p.areaFormulario }}
            className="btn-primario btn-pulso mt-8 inline-flex"
          >
            Contar mi caso →
          </Link>
        </div>
      </section>
    </div>
  );
}

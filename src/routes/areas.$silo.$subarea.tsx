import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SITIO } from "@/lib/seo";
import { ArrowRight, Wrench } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { AvisoPlazo } from "@/components/sitio/AvisoPlazo";
import { BloqueNorma } from "@/components/sitio/BloqueNorma";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { contenidoSubarea, type SubareaResuelta } from "@/lib/subareas";

export const Route = createFileRoute("/areas/$silo/$subarea")({
  loader: ({ params }) => {
    const datos = contenidoSubarea(params.silo, params.subarea);
    if (!datos) throw notFound();
    return { datos };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Página no disponible" }, { name: "robots", content: "noindex" }] };
    }
    const d = loaderData.datos;
    const url = `/areas/${params.silo}/${params.subarea}`;
    return {
      meta: [
        { title: d.title },
        { name: "description", content: d.description },
        { property: "og:title", content: d.title },
        { property: "og:description", content: d.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd(d, url)) }],
    };
  },
  component: Pagina,
});

const BASE = SITIO;

function jsonLd(d: SubareaResuelta, ruta: string) {
  const url = BASE + ruta;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: d.h1,
      description: d.description,
      url,
      serviceType: d.subarea.titulo,
      category: d.pilar.titulo,
      areaServed: { "@type": "Country", name: "Colombia" },
      provider: { "@type": "LegalService", name: "Asesorías Jurídicas Colombia" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Áreas", item: `${BASE}/areas` },
        {
          "@type": "ListItem",
          position: 3,
          name: d.pilar.titulo,
          item: `${BASE}/areas/${d.pilar.slug}`,
        },
        { "@type": "ListItem", position: 4, name: d.subarea.titulo, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.slice(0, 5).map((f) => ({
        "@type": "Question",
        name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
  ];
}

function Pagina() {
  const { datos: d } = Route.useLoaderData();
  const p = d.pilar;

  return (
    <div>
      {/* ENCABEZADO + RESPUESTA DIRECTA */}
      <section className="bg-papel-hueso py-12 lg:py-16">
        <div className="contenedor">
          <Migas
            items={[
              { titulo: "Inicio", to: "/" },
              { titulo: "Áreas", to: "/areas" },
              { titulo: p.titulo, to: `/areas/${p.slug}` },
              { titulo: d.subarea.titulo },
            ]}
          />

          <Revelar>
            <p className="eyebrow mt-8">{p.titulo.toUpperCase()}</p>
            <h1 className="display-lg mt-3 max-w-[900px]">{d.h1}</h1>
            {/* Respuesta directa: primer párrafo, pensado para el fragmento destacado */}
            <p className="lectura mt-5 text-[1.05rem] leading-relaxed text-tinta">{d.respuesta}</p>
            <Link
              to="/iniciar-caso"
              search={{ area: p.areaFormulario }}
              className="btn-primario btn-pulso mt-8 inline-flex"
            >
              Contar mi caso →
            </Link>
          </Revelar>
        </div>
      </section>

      {/* QUÉ DICE LA LEY + PLAZO */}
      <section className="bg-papel py-14 lg:py-18">
        <div className="contenedor">
          <div className="grid gap-10 lg:grid-cols-[58fr_42fr]">
            <Revelar>
              <h2 className="display-md">Qué dice la ley</h2>
              <div className="mt-6">
                <BloqueNorma
                  articulo={d.norma.articulo}
                  norma={d.norma.norma}
                  texto={d.norma.texto}
                />
              </div>
              {d.parrafos.length > 0 ? (
                <div className="lectura mt-6 space-y-4 text-tinta-suave">
                  {d.parrafos.map((t) => (
                    <p key={t.slice(0, 40)}>{t}</p>
                  ))}
                </div>
              ) : null}
            </Revelar>

            <Revelar retardo={80}>
              <AvisoPlazo titulo={d.plazo.titulo} texto={d.plazo.texto} />
              <p className="mt-6 text-[0.9rem] leading-relaxed text-tinta-suave">
                Este caso hace parte de{" "}
                <Link
                  to="/areas/$silo"
                  params={{ silo: p.slug }}
                  className="text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
                >
                  {p.titulo.toLowerCase()}
                </Link>
                . Ahí encuentras las demás situaciones que cubre esta área.
              </p>
            </Revelar>
          </div>
        </div>
      </section>

      {/* QUÉ PUEDES RECLAMAR / CÓMO SE RESUELVE */}
      <section className="bg-papel-hueso py-14 lg:py-18">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">{d.reclamar.titulo}</h2>
            <div className="lectura mt-6 space-y-4 text-tinta-suave">
              {d.reclamar.parrafos.map((t) => (
                <p key={t.slice(0, 40)}>{t}</p>
              ))}
            </div>
            {d.reclamar.lista && d.reclamar.lista.length > 0 ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {d.reclamar.lista.map((item) => (
                  <li key={item} className="tarjeta text-[0.92rem] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </Revelar>
        </div>
      </section>

      {/* BLOQUES TEMÁTICOS ADICIONALES */}
      {d.bloques && d.bloques.length > 0
        ? d.bloques.map((b, i) => (
            <section
              key={b.titulo}
              className={i % 2 === 0 ? "bg-papel py-14 lg:py-18" : "bg-papel-hueso py-14 lg:py-18"}
            >
              <div className="contenedor">
                <Revelar>
                  <h2 className="display-md">{b.titulo}</h2>
                  <div className="lectura mt-6 space-y-4 text-tinta-suave">
                    {b.parrafos.map((t) => (
                      <p key={t.slice(0, 40)}>{t}</p>
                    ))}
                  </div>
                  {b.lista && b.lista.length > 0 ? (
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {b.lista.map((item) => (
                        <li key={item} className="tarjeta text-[0.92rem] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Revelar>
              </div>
            </section>
          ))
        : null}
      {/* CRUCE AUTORIZADO DE SILO (excepción única) */}
      {d.cruce ? (
        <section className="bg-papel py-10">
          <div className="contenedor">
            <Revelar>
              <p className="lectura text-[0.95rem] leading-relaxed text-tinta-suave">
                {d.cruce.texto}{" "}
                <Link
                  to="/areas/$silo/$subarea"
                  params={{ silo: d.cruce.silo, subarea: d.cruce.subarea }}
                  className="text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
                >
                  {d.cruce.enlace}
                </Link>
                .
              </p>
            </Revelar>
          </div>
        </section>
      ) : null}


      {/* PASO A PASO */}
      <section className="bg-papel py-14 lg:py-18">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">Paso a paso</h2>
          </Revelar>
          <ol className="mt-8 space-y-6">
            {d.pasos.map((paso, i) => (
              <Revelar key={paso.titulo} retardo={(i % 4) * 60}>
                <li className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-esmeralda/35 bg-papel-hueso font-mono text-[0.9rem] font-semibold text-esmeralda"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lectura">
                    <h3 className="text-[1.05rem] font-semibold">{paso.titulo}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta-suave">
                      {paso.texto}
                    </p>
                  </div>
                </li>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* GUÍAS Y HERRAMIENTA DEL MISMO SILO */}
      <section className="bg-papel-hueso py-14 lg:py-18">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">Sigue en {p.titulo.toLowerCase()}</h2>
          </Revelar>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {d.guiasDelSilo.map((g, i) => (
              <Revelar key={g.slug} retardo={i * 60}>
                <Link to="/guias" className="tarjeta group block h-full">
                  <p className="eyebrow">GUÍA</p>
                  <h3 className="mt-3 font-semibold group-hover:text-esmeralda">{g.titulo}</h3>
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={1.7}
                    className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Revelar>
            ))}
            {d.herramienta ? (
              <Revelar retardo={120}>
                <Link
                  to="/herramientas"
                  className="tarjeta group block h-full border-l-2 border-l-esmeralda"
                >
                  <p className="eyebrow">HERRAMIENTA</p>
                  <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                    {d.herramienta.titulo}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">
                    {d.herramienta.descripcion}
                  </p>
                  <Wrench
                    aria-hidden="true"
                    strokeWidth={1.7}
                    className="mt-4 h-4 w-4 text-esmeralda"
                  />
                </Link>
              </Revelar>
            ) : null}
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-papel py-14 lg:py-18">
        <div className="contenedor">
          <Revelar>
            <h2 className="display-md">Preguntas frecuentes</h2>
          </Revelar>
          <div className="mt-8 max-w-[820px]">
            <Acordeon items={d.faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-tinta py-16 text-papel lg:py-20">
        <div className="contenedor text-center">
          <Revelar>
            <h2 className="display-md">Cuéntanos tu caso de {d.subarea.titulo.toLowerCase()}</h2>
            <p className="mx-auto mt-4 max-w-[620px] text-[0.98rem] leading-relaxed text-papel/70">
              Nos tomas 3 minutos, lo revisamos y te conectamos con un abogado verificado de esta
              área. Sin costo y confidencial.
            </p>
            <Link
              to="/iniciar-caso"
              search={{ area: p.areaFormulario }}
              className="btn-primario btn-pulso mt-8 inline-flex"
            >
              Contar mi caso →
            </Link>
          </Revelar>
        </div>
      </section>
    </div>
  );
}

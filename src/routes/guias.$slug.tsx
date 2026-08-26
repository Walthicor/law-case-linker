import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SITIO } from "@/lib/seo";
import { ArrowRight, Wrench } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Bloque, NecesitasAbogado } from "@/components/sitio/guias/BloquesGuia";
import { CompartirGuia } from "@/components/sitio/guias/CompartirGuia";
import { TablaContenido, type ItemToc } from "@/components/sitio/guias/TablaContenido";
import { fechaLarga, guiaPorSlug, type GuiaResuelta } from "@/lib/guias";

const BASE = SITIO;

export const Route = createFileRoute("/guias/$slug")({
  loader: ({ params }) => {
    const guia = guiaPorSlug(params.slug);
    if (!guia) throw notFound();
    return { guia };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Guía no disponible" }, { name: "robots", content: "noindex" }] };
    }
    const g = loaderData.guia;
    const url = `/guias/${params.slug}`;
    return {
      meta: [
        { title: g.title },
        { name: "description", content: g.description },
        { property: "og:title", content: g.title },
        { property: "og:description", content: g.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      // Canonical autorreferencial, sin fecha en la URL.
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd(g, url)) }],
    };
  },
  component: Pagina,
});

function jsonLd(g: GuiaResuelta, ruta: string) {
  const url = BASE + ruta;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.h1,
      description: g.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "es-CO",
      datePublished: g.publicada,
      dateModified: g.actualizada,
      articleSection: g.pilar.titulo,
      author: {
        "@type": "Organization",
        name: "Asesorías Jurídicas Colombia",
        url: `${BASE}/`,
      },
      publisher: {
        "@type": "Organization",
        name: "Asesorías Jurídicas Colombia",
        url: `${BASE}/`,
      },
      reviewedBy: {
        "@type": "Person",
        name: g.revisor.nombre,
        jobTitle: "Abogado",
        identifier: g.revisor.tarjeta,
        knowsAbout: g.revisor.area,
        url: BASE + g.revisor.perfil,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#resumen-destacado"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faqs.slice(0, 5).map((f) => ({
        "@type": "Question",
        name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Guías", item: `${BASE}/guias` },
        {
          "@type": "ListItem",
          position: 3,
          name: g.pilar.titulo,
          item: `${BASE}/areas/${g.pilar.slug}`,
        },
        { "@type": "ListItem", position: 4, name: g.h1, item: url },
      ],
    },
  ];
}

function Pagina() {
  const { guia: g } = Route.useLoaderData();
  const p = g.pilar;

  const toc: ItemToc[] = [
    ...g.apartados.map((a) => ({ id: a.id, titulo: a.titulo })),
    { id: "necesitas-abogado", titulo: "Cuándo necesitas abogado" },
    { id: "preguntas-frecuentes", titulo: "Preguntas frecuentes" },
  ];

  return (
    <div className="bg-papel">
      <div className="contenedor pb-10 pt-28 lg:pb-14 lg:pt-32">
        <Migas
          items={[
            { titulo: "Inicio", to: "/" },
            { titulo: "Guías", to: "/guias" },
            { titulo: p.titulo, to: `/areas/${p.slug}` },
            { titulo: g.h1 },
          ]}
        />

        <div className="mt-8 gap-14 lg:flex lg:items-start">
          {/* ── CONTENIDO ─────────────────────────────────────── */}
          <article className="w-full lg:max-w-[680px]">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-esmeralda">
              {p.titulo}
            </p>
            <h1 className="display-lg mt-3">{g.h1}</h1>

            {/* Metadatos E-E-A-T: sin revisor no se publica la guía. */}
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.78rem] text-tinta-suave">
              <span>Actualizado el {fechaLarga(g.actualizada)}</span>
              <span aria-hidden="true">·</span>
              <span>{g.minutos} min de lectura</span>
              <span aria-hidden="true">·</span>
              <span>
                Revisado por {g.revisor.nombre}, {g.revisor.tarjeta}
              </span>
            </p>

            {/* Resumen destacado: gana el fragmento destacado */}
            <p
              id="resumen-destacado"
              className="mt-6 border-l-[3px] border-esmeralda pl-5 text-[1.15rem] leading-[1.7] text-tinta"
            >
              {g.resumen}
            </p>

            {/* TOC colapsable en móvil */}
            <div className="mt-8 lg:hidden">
              <TablaContenido items={toc} colapsable />
            </div>

            <div className="mt-12 space-y-14">
              {g.apartados.map((a) => (
                <section key={a.id} id={a.id} className="scroll-mt-24">
                  <h2 className="display-md">{a.titulo}</h2>
                  <div className="mt-5 space-y-6">
                    {a.bloques.map((b, i) => (
                      <Bloque key={i} bloque={b} />
                    ))}
                  </div>
                </section>
              ))}

              {/* Enlazado interno del cuerpo: mínimo 3, siempre del mismo silo */}
              {g.enlaces.length > 0 ? (
                <section>
                  <h2 className="display-md">Sigue leyendo en {p.titulo.toLowerCase()}</h2>
                  <ul className="mt-5 space-y-3">
                    {g.enlaces.slice(0, 4).map((e) => (
                      <li key={e.to}>
                        <Link
                          to={e.to}
                          className="inline-flex items-center gap-2 text-[1.0625rem] text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
                        >
                          {e.texto}
                          <ArrowRight aria-hidden="true" strokeWidth={1.7} className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <section id="necesitas-abogado" className="scroll-mt-24">
                <h2 className="display-md">Cuándo necesitas abogado y cuándo no</h2>
                <div className="mt-5">
                  <NecesitasAbogado solo={g.solo} abogado={g.abogado} />
                </div>
              </section>

              <section id="preguntas-frecuentes" className="scroll-mt-24">
                <h2 className="display-md">Preguntas frecuentes</h2>
                <div className="mt-6">
                  <Acordeon items={g.faqs.slice(0, 5)} />
                </div>
              </section>

              {/* CTA al pilar del silo */}
              <section>
                <Link
                  to="/areas/$silo"
                  params={{ silo: p.slug }}
                  className="tarjeta group flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="eyebrow">Área</p>
                    <h2 className="mt-2 text-[1.05rem] font-semibold group-hover:text-esmeralda">
                      Todo sobre {p.titulo.toLowerCase()} en Colombia
                    </h2>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-suave">
                      Subáreas, normas aplicables, plazos y cuándo conviene un abogado.
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={1.7}
                    className="mt-1 h-5 w-5 shrink-0 text-esmeralda transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </section>
            </div>
          </article>

          {/* ── BARRA LATERAL PEGAJOSA ────────────────────────── */}
          <aside className="mt-14 w-full lg:mt-0 lg:w-[280px] lg:shrink-0 lg:sticky lg:top-24">
            <div className="hidden lg:block">
              <TablaContenido items={toc} />
            </div>

            <div className="mt-8 rounded-[6px] border border-linea bg-papel-hueso p-5">
              <p className="font-semibold">¿Necesitas ayuda con esto?</p>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-tinta-suave">
                Cuéntanos qué pasó y te conectamos con un abogado {p.area} con tarjeta verificada en
                tu ciudad.
              </p>
              <Link
                to="/iniciar-caso"
                search={{ area: p.areaFormulario }}
                className="btn-primario btn-pulso mt-4 w-full justify-center"
              >
                Contar mi caso →
              </Link>
            </div>

            {g.herramienta ? (
              <Link
                to={g.herramienta.to}
                className="tarjeta group mt-5 block"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-esmeralda-claro text-esmeralda">
                  <Wrench className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <p className="eyebrow mt-3">Herramienta</p>
                <p className="mt-2 font-semibold leading-snug group-hover:text-esmeralda">
                  {g.herramienta.titulo}
                </p>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-tinta-suave">
                  {g.herramienta.descripcion}
                </p>
              </Link>
            ) : null}

            <div className="mt-8">
              <CompartirGuia titulo={g.h1} ruta={`/guias/${g.slug}`} />
            </div>
          </aside>
        </div>
      </div>

      {/* ── PIE: REVISOR ──────────────────────────────────────── */}
      <section className="border-t border-linea bg-papel py-12">
        <div className="contenedor">
          <div className="flex flex-col gap-5 rounded-[6px] border border-linea p-5 sm:flex-row sm:items-start sm:p-6">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[6px] bg-esmeralda font-mono text-[1.05rem] font-semibold text-papel"
            >
              {g.revisor.iniciales}
            </span>
            <div>
              <p className="eyebrow">Revisado por</p>
              <p className="mt-2 text-[1.05rem] font-semibold">{g.revisor.nombre}</p>
              <p className="mt-1 font-mono text-[0.82rem] text-tinta-suave">{g.revisor.tarjeta}</p>
              <p className="mt-2 text-[0.92rem] text-tinta-suave">
                {g.revisor.area} · {g.revisor.ciudad}
              </p>
              <Link
                to={g.revisor.perfil}
                className="mt-3 inline-flex items-center gap-2 text-[0.9rem] text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
              >
                Ver perfil del revisor
                <ArrowRight aria-hidden="true" strokeWidth={1.7} className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANDA CTA ─────────────────────────────────────────── */}
      <section className="bg-esmeralda-claro py-14">
        <div className="contenedor flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-md">¿Tu caso ya tiene plazos corriendo?</h2>
            <p className="mt-2 max-w-[52ch] text-[0.98rem] leading-relaxed text-tinta-suave">
              Leemos tu caso y te conectamos con el especialista indicado. Sin costo para ti.
            </p>
          </div>
          <Link
            to="/iniciar-caso"
            search={{ area: p.areaFormulario }}
            className="btn-primario btn-pulso shrink-0"
          >
            Contar mi caso →
          </Link>
        </div>
      </section>

      {/* ── RELACIONADAS DEL MISMO SILO ───────────────────────── */}
      <section className="bg-papel py-14 lg:py-18">
        <div className="contenedor">
          {g.relacionadas.length > 0 ? (
            <>
              <h2 className="display-md">Guías relacionadas</h2>
              <ul className="mt-6 grid gap-5 md:grid-cols-3">
                {g.relacionadas.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/guias/$slug"
                      params={{ slug: r.slug }}
                      className="tarjeta group flex h-full flex-col"
                    >
                      <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-esmeralda">
                        {r.siloTitulo}
                      </p>
                      <h3 className="mt-3 text-[1rem] font-semibold leading-snug group-hover:text-esmeralda">
                        {r.titulo}
                      </h3>
                      <p className="mt-auto pt-5 font-mono text-[0.75rem] uppercase tracking-[0.06em] text-tinta-suave">
                        {r.minutos} min de lectura
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {g.herramienta ? (
            <div className="mt-12">
              <h2 className="display-md">Herramienta relacionada</h2>
              <Link to={g.herramienta.to} className="tarjeta group mt-6 block md:max-w-[520px]">
                <p className="eyebrow">Gratis · sin registro</p>
                <h3 className="mt-2 text-[1.05rem] font-semibold group-hover:text-esmeralda">
                  {g.herramienta.titulo}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-suave">
                  {g.herramienta.descripcion}
                </p>
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

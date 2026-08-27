import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { metaSeo, SITIO } from "@/lib/seo";
import { seoAbogado } from "@/lib/seo-inventario";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { AvatarAbogado } from "@/components/sitio/AvatarAbogado";
import { Migas } from "@/components/sitio/Migas";
import {
  AREAS_ABOGADO,
  AREA_FORMULARIO,
  abogadoPorSlug,
  type Abogado,
} from "@/lib/abogados";
import { CONTENIDO_GUIAS } from "@/lib/guias";

const BASE = SITIO;

export const Route = createFileRoute("/abogados/$slug")({
  loader: ({ params }) => {
    const abogado = abogadoPorSlug(params.slug);
    if (!abogado) throw notFound();
    return { abogado };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Perfil no disponible" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.abogado;
    const url = `/abogados/${params.slug}`;
    return {
      ...metaSeo(seoAbogado(a)),
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd(a, url)) }],
    };
  },
  component: Pagina,
});

function jsonLd(a: Abogado, ruta: string) {
  const url = BASE + ruta;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: a.nombre,
      jobTitle: "Abogado",
      identifier: `T.P. ${a.tarjeta}`,
      url,
      knowsLanguage: a.idiomas,
      knowsAbout: [
        ...a.areas.map((s) => AREAS_ABOGADO[s] ?? s),
        ...a.competencias,
      ],
      alumniOf: a.formacion.map((f) => ({
        "@type": "EducationalOrganization",
        name: f.universidad,
      })),
      workLocation: a.ciudades.map((c) => ({ "@type": "City", name: c })),
      worksFor: {
        "@type": "Organization",
        name: "Asesorías Jurídicas Colombia",
        url: `${BASE}/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Abogados", item: `${BASE}/abogados` },
        { "@type": "ListItem", position: 3, name: a.nombre, item: url },
      ],
    },
  ];
}

function Pagina() {
  const { abogado: a } = Route.useLoaderData();
  const areaFormulario = AREA_FORMULARIO[a.areas[0] ?? ""] ?? "No estoy seguro";
  const guiasRevisadas = Object.values(CONTENIDO_GUIAS).filter(
    (g) => g.revisor.nombre === a.nombre,
  );

  return (
    <div className="bg-papel">
      <div className="contenedor pb-20 pt-10 lg:pb-28 lg:pt-14">
        <Migas
          items={[
            { titulo: "Inicio", to: "/" },
            { titulo: "Abogados", to: "/abogados" },
            { titulo: a.nombre },
          ]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div>
            <header className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <AvatarAbogado
                nombre={a.nombre}
                iniciales={a.iniciales}
                foto={a.foto}
                tamano={112}
              />
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-esmeralda-claro px-3 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-esmeralda">
                  <BadgeCheck aria-hidden="true" strokeWidth={2} className="h-3.5 w-3.5" />
                  Verificado
                </span>
                <h1 className="display-md mt-3">{a.nombre}</h1>
                <p className="mt-2 font-mono text-[0.85rem] text-tinta-suave">T.P. {a.tarjeta}</p>
                <p className="mt-1 text-[0.98rem] text-tinta-suave">
                  {a.ciudad} · {a.aniosExperiencia} años de ejercicio
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {a.areas.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-linea bg-papel-hueso px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-tinta-suave"
                    >
                      {AREAS_ABOGADO[s] ?? s}
                    </li>
                  ))}
                </ul>
              </div>
            </header>

            <section className="mt-14" aria-labelledby="formacion">
              <h2 id="formacion" className="display-sm">
                Formación académica
              </h2>
              <ul className="mt-5 divide-y divide-linea border-y border-linea">
                {a.formacion.map((f) => (
                  <li key={`${f.universidad}-${f.anio}`} className="flex flex-wrap gap-x-4 py-4">
                    <span className="font-semibold">{f.titulo}</span>
                    <span className="text-tinta-suave">{f.universidad}</span>
                    <span className="ml-auto font-mono text-[0.8rem] text-tinta-suave">
                      {f.anio}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12" aria-labelledby="posgrados">
              <h2 id="posgrados" className="display-sm">
                Especializaciones y posgrados
              </h2>
              <ul className="mt-5 space-y-3">
                {a.posgrados.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.98rem] leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-esmeralda" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12" aria-labelledby="competencias">
              <h2 id="competencias" className="display-sm">
                Competencias procesales
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.competencias.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-esmeralda bg-esmeralda-claro px-3 py-1.5 text-[0.88rem] font-medium text-esmeralda"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12" aria-labelledby="cargos">
              <h2 id="cargos" className="display-sm">
                Cargos y asuntos que atiende
              </h2>
              <ul className="mt-5 space-y-3">
                {a.cargos.map((c) => (
                  <li key={c} className="flex gap-3 text-[0.98rem] leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-esmeralda" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12" aria-labelledby="ejercicio">
              <h2 id="ejercicio" className="display-sm">
                Dónde y cómo ejerce
              </h2>
              <dl className="mt-5 divide-y divide-linea border-y border-linea">
                <Dato titulo="Ciudades donde ejerce" valor={a.ciudades.join(" · ")} />
                <Dato titulo="Años de ejercicio" valor={`${a.aniosExperiencia}`} />
                <Dato titulo="Idiomas" valor={a.idiomas.join(" · ")} />
                <Dato titulo="Tarjeta profesional" valor={`T.P. ${a.tarjeta}`} />
              </dl>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-tinta-suave">
                La información de este perfil se limita a nombre, títulos, especializaciones, cargos
                y asuntos que atiende, conforme al artículo 31 de la Ley 1123 de 2007. No publicamos
                resultados de procesos ni calificaciones.
              </p>
            </section>

            {guiasRevisadas.length > 0 ? (
              <section className="mt-12" aria-labelledby="guias-revisadas">
                <h2 id="guias-revisadas" className="display-sm">
                  Guías revisadas por {a.nombre.split(" ")[0]}
                </h2>
                <ul className="mt-5 divide-y divide-linea border-y border-linea">
                  {guiasRevisadas.map((g) => (
                    <li key={g.slug}>
                      <Link
                        to="/guias/$slug"
                        params={{ slug: g.slug }}
                        className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-esmeralda"
                      >
                        <span className="font-semibold">{g.h1}</span>
                        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[6px] border border-linea bg-papel-hueso p-5 sm:p-6">
              <h2 className="text-[1.05rem] font-semibold leading-snug">
                ¿Quieres que {a.nombre.split(" ")[0]} revise tu caso?
              </h2>
              <Link
                to="/iniciar-caso"
                search={{ area: areaFormulario, ciudad: a.ciudad }}
                className="btn-primario btn-pulso mt-5 inline-flex w-full justify-center"
              >
                Contar mi caso
              </Link>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-tinta-suave">
                Tu caso pasa primero por nuestra revisión. Si {a.nombre.split(" ")[0]} está
                disponible y tu caso corresponde a su área, se lo asignamos.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Dato({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 py-3">
      <dt className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-tinta-suave">
        {titulo}
      </dt>
      <dd className="ml-auto text-right text-[0.95rem]">{valor}</dd>
    </div>
  );
}

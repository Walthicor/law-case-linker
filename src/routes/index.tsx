import { createFileRoute, Link } from "@tanstack/react-router";
import { Balanza } from "@/components/sitio/Balanza";

const TITULO = "Asesorías jurídicas en Colombia con abogados especialistas";
const DESC =
  "Cuéntanos tu problema jurídico, lo perfilamos y te conectamos con un abogado especialista verificado. Sin costo y confidencial.";

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
    <>
      <section className="relative flex min-h-[86vh] items-center bg-tinta pt-18 text-papel">
        <div className="contenedor py-24">
          <p className="eyebrow text-papel/60">MARDIGITAL SAS · Colombia</p>
          <h1 className="display-xl lectura mt-6">{TITULO}</h1>
          <p className="lectura mt-6 text-papel/75">{DESC}</p>

          <Balanza
            izquierda={
              <Link to="/iniciar-caso" className="btn-primario btn-pulso">
                Contar mi caso
              </Link>
            }
            derecha={
              <Link to="/como-funciona" className="btn-secundario-claro">
                Cómo funciona
              </Link>
            }
          />
        </div>
      </section>

      <section className="contenedor border-b border-linea py-16">
        <p className="eyebrow">Fundación lista</p>
        <h2 className="display-md mt-4">Sistema de diseño “el expediente”</h2>
        <p className="lectura mt-4 text-tinta-suave">
          Tokens, tipografía, componentes base, los tres efectos, header, footer y barra de
          captación ya están montados. El contenido de las áreas, herramientas y guías se
          construye en los siguientes pasos.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="aviso-plazo">
            <p className="mono-tag text-sello">PLAZO · 3 años</p>
            <p className="mt-2 text-sm text-tinta-suave">
              Ejemplo de aviso de plazo. El color sello se usa solo para caducidad y urgencia.
            </p>
          </div>
          <div className="bloque-norma">
            <p className="mono-tag text-esmeralda">Art. 64 · Código Sustantivo del Trabajo</p>
            <p className="mt-2 text-sm text-tinta-suave">
              Ejemplo de bloque de norma con el artículo en monoespaciada.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { GeneradorTutela } from "@/components/sitio/generadores/GeneradorTutela";

const BASE = "https://asesoriasjuridicas.co";
const RUTA = "/herramientas/accion-de-tutela";
const TITLE = "Generador de acción de tutela 2026 | Gratis";
const DESCRIPTION =
  "Arma tu escrito de tutela con los requisitos del Decreto 2591 de 1991 y descárgalo en PDF gratis.";

const FAQS = [
  {
    pregunta: "¿Necesito abogado para presentar una acción de tutela?",
    respuesta:
      "No. La tutela es informal: puede presentarla cualquier persona en nombre propio, incluso de forma verbal cuando no sabe escribir o es un caso urgente. Tampoco requiere pago de ningún tipo.",
  },
  {
    pregunta: "¿Ante qué juez se presenta la tutela?",
    respuesta:
      "Ante cualquier juez del lugar donde ocurrió la vulneración o donde se produjeron sus efectos. No se escoge el juez: se radica en la oficina de reparto y el sistema lo asigna.",
  },
  {
    pregunta: "¿Cuánto tarda el fallo de tutela?",
    respuesta:
      "El juez tiene 10 días hábiles para fallar desde que admite la tutela. Si concede el amparo, la orden suele cumplirse en 48 horas, y contra el fallo procede impugnación dentro de los 3 días siguientes a la notificación.",
  },
  {
    pregunta: "¿Cuándo procede la tutela?",
    respuesta:
      "Cuando se vulnera o amenaza un derecho fundamental y no existe otro medio de defensa judicial idóneo y eficaz, o cuando existiendo, se necesita evitar un perjuicio irremediable. También procede como mecanismo transitorio mientras se resuelve el proceso ordinario.",
  },
  {
    pregunta: "¿Qué es la medida provisional?",
    respuesta:
      "Una orden urgente que el juez puede dictar desde el auto admisorio, con base en el artículo 7 del Decreto 2591 de 1991, para evitar un daño irreparable mientras se decide el fondo: autorizar un procedimiento médico, suspender un cobro o detener un desalojo, por ejemplo.",
  },
  {
    pregunta: "¿Tengo un plazo para presentar la tutela?",
    respuesta:
      "No hay término de caducidad, pero sí un requisito de inmediatez: debe presentarse en un plazo razonable desde la vulneración. Cuando pasan años sin justificación, los jueces suelen declararla improcedente.",
  },
  {
    pregunta: "¿Qué pasa si la entidad no cumple el fallo?",
    respuesta:
      "Procede el incidente de desacato ante el mismo juez, que puede imponer arresto hasta de 6 meses y multa hasta de 20 salarios mínimos al funcionario responsable, sin perjuicio del cumplimiento de la orden.",
  },
  {
    pregunta: "¿Puedo presentar dos tutelas por los mismos hechos?",
    respuesta:
      "No. Hacerlo configura actuación temeraria, se rechazan las solicitudes y puede haber sanciones. Por eso el escrito incluye el juramento del artículo 37 del Decreto 2591 de 1991.",
  },
];

export const Route = createFileRoute("/herramientas/accion-de-tutela")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: RUTA },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: RUTA }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Generador de acción de tutela",
            url: BASE + RUTA,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: DESCRIPTION,
            inLanguage: "es-CO",
            offers: { "@type": "Offer", price: "0", priceCurrency: "COP" },
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo redactar una acción de tutela",
            step: [
              {
                "@type": "HowToStep",
                name: "Identifica el derecho vulnerado y al accionado",
                text: "Marca los derechos fundamentales afectados y la entidad o particular responsable.",
              },
              {
                "@type": "HowToStep",
                name: "Narra los hechos con fechas",
                text: "Cronología clara con radicados y respuestas recibidas.",
              },
              {
                "@type": "HowToStep",
                name: "Formula la petición y la medida provisional",
                text: "Pide órdenes concretas y, si hay urgencia, solicita medida provisional del artículo 7.",
              },
              {
                "@type": "HowToStep",
                name: "Firma el juramento y radica en reparto",
                text: "Declara que no has presentado otra tutela por los mismos hechos y radica en físico o en línea.",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Herramientas",
                item: `${BASE}/herramientas`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Generador de acción de tutela",
                item: BASE + RUTA,
              },
            ],
          },
        ]),
      },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <div className="bg-papel">
      <div className="contenedor py-12 lg:py-16">
        <div className="no-imprimir">
          <Migas
            items={[
              { titulo: "Inicio", to: "/" },
              { titulo: "Herramientas", to: "/herramientas" },
              { titulo: "Generador de acción de tutela" },
            ]}
          />

          <Revelar>
            <h1 className="display-lg mt-8">Generador de acción de tutela 2026</h1>
            <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
              Arma tu escrito de tutela con los requisitos del Decreto 2591 de 1991.
            </p>
            <p className="mono-tag mt-5 inline-block rounded-full bg-esmeralda-claro px-3 py-1 text-esmeralda">
              GRATIS · SIN REGISTRO
            </p>
          </Revelar>
        </div>

        <div className="mt-10">
          <GeneradorTutela />
        </div>

        <div className="no-imprimir mx-auto mt-16 max-w-[900px] space-y-14">
          <div className="tarjeta flex gap-3 border-l-2 border-l-esmeralda">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-esmeralda"
              aria-hidden="true"
              strokeWidth={1.7}
            />
            <p className="text-[0.95rem] leading-relaxed text-tinta">
              La tutela se presenta ante cualquier juez del lugar donde ocurrió la vulneración. No
              necesitas abogado. El juez tiene 10 días hábiles para fallar. Puedes presentarla en
              físico en la oficina de reparto o en línea en la página de la Rama Judicial.
            </p>
          </div>

          <section>
            <h2 className="display-md">Qué es la acción de tutela y cuándo procede</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La acción de tutela es el mecanismo del artículo 86 de la Constitución que permite a
                cualquier persona reclamar ante los jueces, en todo momento y lugar, la protección
                inmediata de sus derechos fundamentales cuando resultan vulnerados o amenazados por
                la acción o la omisión de una autoridad pública o, en los casos que la ley señala, de
                un particular. Se tramita por un procedimiento preferente y sumario: sin abogado, sin
                costos y con un fallo en diez días hábiles.
              </p>
              <p>
                Su procedencia depende de tres requisitos. Primero, que el derecho invocado sea
                fundamental: salud, vida digna, petición, debido proceso, mínimo vital, seguridad
                social, educación, trabajo, igualdad, habeas data, entre otros. Segundo, la
                subsidiariedad: que no exista otro medio de defensa judicial idóneo y eficaz, o que
                existiendo, resulte insuficiente para evitar un perjuicio irremediable. Tercero, la
                inmediatez: que se presente en un plazo razonable desde la vulneración.
              </p>
              <p>
                La subsidiariedad es el filtro que más tutelas frena, y también el más
                malinterpretado. No basta con que exista otro proceso: la Corte Constitucional exige
                evaluar si ese proceso es realmente eficaz para el caso concreto. Un proceso ordinario
                laboral de cuatro años no es eficaz para una persona en situación de discapacidad sin
                ingresos; un proceso ejecutivo no protege a quien está a punto de perder un
                tratamiento médico. En esos escenarios la tutela procede, incluso como mecanismo
                transitorio mientras el proceso ordinario avanza.
              </p>
              <p>
                Frente a particulares la tutela procede en tres hipótesis: cuando prestan un servicio
                público (EPS, colegios, servicios domiciliarios), cuando cumplen funciones públicas y
                cuando el solicitante está en estado de subordinación o indefensión frente a ellos,
                que es la vía por la que se tutelan casos contra bancos, aseguradoras,
                administraciones de propiedad horizontal, empleadores y plataformas digitales.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Qué debe contener el escrito de tutela</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                El artículo 14 del Decreto 2591 de 1991 exige muy poco: la acción, el derecho
                vulnerado, el nombre de la autoridad o particular y la descripción de los hechos. La
                informalidad es una garantía, no una invitación al desorden: los escritos que
                obtienen amparo comparten una estructura reconocible.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Hechos numerados con fechas
              </h3>
              <p>
                El juez decide en diez días con lo que tiene a la vista. Una cronología clara —fecha,
                radicado, respuesta recibida, consecuencia— permite verificar la vulneración sin
                pedir pruebas adicionales. Los relatos emocionales sin fechas obligan al juez a
                requerir información y consumen el término.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Petición en forma de órdenes
              </h3>
              <p>
                La tutela no pide «justicia»: pide órdenes ejecutables. «Ordenar a la EPS autorizar
                la cirugía de reemplazo de cadera dentro de las 48 horas siguientes al fallo» es una
                pretensión que el juez puede escribir en la parte resolutiva. Cuanto más concreta la
                orden, más difícil el desacato posterior.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Medida provisional y juramento
              </h3>
              <p>
                Si esperar el fallo puede causar un daño irreparable, el artículo 7 permite pedir
                medida provisional desde el auto admisorio. Y el artículo 37 exige el juramento de no
                haber presentado otra tutela por los mismos hechos: omitirlo puede llevar al rechazo
                por temeridad, que además tiene consecuencias sancionatorias.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Cómo se radica y qué pasa después</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La tutela se radica ante la oficina de reparto de los juzgados del lugar donde
                ocurrió la vulneración o donde se produjeron sus efectos. No se escoge juez ni
                especialidad: el reparto asigna. También puede enviarse por los canales digitales de
                la Rama Judicial, con los documentos escaneados y firmados, y esa vía tiene el mismo
                valor que la presentación física.
              </p>
              <p>
                Admitida la tutela, el juez notifica a la entidad accionada y le da un término breve
                para responder, normalmente entre uno y tres días. Puede decretar pruebas de oficio y
                debe fallar dentro de los diez días hábiles siguientes a la admisión. El fallo puede
                impugnarse dentro de los tres días siguientes a la notificación, y el superior
                resuelve en veinte días. Después, la Corte Constitucional puede seleccionar el caso
                para revisión, aunque esa etapa es excepcional.
              </p>
              <p>
                Cuando la orden no se cumple, el camino es el incidente de desacato ante el mismo
                juez que falló. Es un trámite corto que puede terminar en arresto hasta de seis meses
                y multa hasta de veinte salarios mínimos para el funcionario responsable, y su
                verdadera utilidad es que casi siempre produce el cumplimiento antes de la sanción.
              </p>
              <p>
                Hay dos escenarios en los que conviene acompañamiento profesional aunque la ley no lo
                exija: cuando la tutela ya fue negada y hay que impugnar con argumentos
                jurisprudenciales, y cuando el caso combina la vulneración con un litigio de fondo
                —pensional, laboral, contractual— que la tutela sola no resuelve. En esos casos el
                escrito debe construirse pensando en las dos vías al mismo tiempo.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link
                to="/areas/$silo"
                params={{ silo: "administrativo" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">ÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Derecho administrativo
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "administrativo", subarea: "tutela" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Cuándo procede la tutela
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/herramientas/derecho-de-peticion"
                className="tarjeta group block h-full border-l-2 border-l-esmeralda"
              >
                <p className="eyebrow">HERRAMIENTA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Generador de derecho de petición
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </section>

          <section>
            <h2 className="display-md">Preguntas frecuentes</h2>
            <div className="mt-7">
              <Acordeon items={FAQS} />
            </div>
          </section>

          <div className="tarjeta">
            <p className="text-[0.95rem] leading-relaxed text-tinta">
              Si tu caso es complejo o ya te negaron la tutela, cuéntanos: revisamos el escrito, la
              impugnación y las vías de fondo que puedan quedar abiertas.
            </p>
            <Link
              to="/iniciar-caso"
              search={{ area: "Administrativo" }}
              className="btn-secundario mt-5 inline-flex"
            >
              Contar mi caso →
            </Link>
          </div>

          <p className="rounded-[4px] border border-linea bg-papel-hueso px-4 py-4 text-[0.8rem] leading-relaxed text-tinta-suave">
            Este generador produce un borrador con base en la estructura legal vigente. Revisa el
            documento antes de presentarlo y ajústalo a tu caso. No constituye asesoría jurídica.
          </p>
        </div>
      </div>
    </div>
  );
}

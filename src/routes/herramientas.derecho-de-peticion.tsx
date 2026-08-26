import { createFileRoute, Link } from "@tanstack/react-router";
import { AlarmClock, ArrowRight } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { GeneradorPeticion } from "@/components/sitio/generadores/GeneradorPeticion";

const BASE = "https://asesoriasjuridicas.co";
const RUTA = "/herramientas/derecho-de-peticion";
const TITLE = "Generador de derecho de petición 2026 | Gratis";
const DESCRIPTION =
  "Redacta tu derecho de petición con la estructura de la Ley 1755 de 2015 y descárgalo en PDF gratis.";

const FAQS = [
  {
    pregunta: "¿Qué es un derecho de petición y para qué sirve?",
    respuesta:
      "Es el derecho fundamental del artículo 23 de la Constitución que permite a cualquier persona pedir información, documentos, copias, una consulta o una actuación a una autoridad pública o a un particular que preste un servicio público, y obtener respuesta de fondo dentro de un plazo legal.",
  },
  {
    pregunta: "¿Cuánto tiempo tienen para responder un derecho de petición?",
    respuesta:
      "15 días hábiles como regla general; 10 días hábiles cuando se piden información y documentos; y 30 días hábiles cuando es una consulta sobre materias a cargo de la entidad. Si la entidad no puede responder a tiempo debe informarlo antes del vencimiento y señalar un plazo razonable.",
  },
  {
    pregunta: "¿Necesito abogado para presentar un derecho de petición?",
    respuesta:
      "No. Puede presentarlo cualquier persona, en nombre propio o de un tercero, incluso de forma verbal. No requiere formalidades especiales ni pago de ningún tipo.",
  },
  {
    pregunta: "¿Puedo presentar un derecho de petición ante una empresa privada?",
    respuesta:
      "Sí, cuando el particular presta un servicio público, cumple funciones públicas o está en posición dominante frente al peticionario. Es el caso de EPS, bancos, aseguradoras, colegios, operadores de telecomunicaciones y empresas de servicios públicos.",
  },
  {
    pregunta: "¿Qué hago si no me responden?",
    respuesta:
      "Vencido el plazo puedes presentar una acción de tutela por violación del derecho de petición. El juez tiene 10 días hábiles para fallar y suele ordenar a la entidad responder de fondo en 48 horas.",
  },
  {
    pregunta: "¿Sirve como respuesta que me digan que están estudiando el caso?",
    respuesta:
      "No. La respuesta debe ser de fondo, clara, precisa, congruente con lo pedido y puesta en conocimiento del peticionario. Una respuesta evasiva o incompleta equivale a no responder y habilita la tutela.",
  },
  {
    pregunta: "¿Puedo pedir documentos que contienen datos de otras personas?",
    respuesta:
      "La entidad puede negar el acceso a información clasificada o reservada, como datos personales sensibles, información sometida a secreto profesional o documentos de investigaciones en curso, pero debe motivar la negativa y citar la norma que la sustenta.",
  },
  {
    pregunta: "¿Cómo radico el derecho de petición?",
    respuesta:
      "Por ventanilla de correspondencia con sello de recibido, por el canal virtual de PQRS de la entidad o por correo electrónico oficial. Guarda siempre el radicado con fecha: es la prueba desde la cual se cuenta el plazo.",
  },
];

export const Route = createFileRoute("/herramientas/derecho-de-peticion")({
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
            name: "Generador de derecho de petición",
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
            name: "Cómo redactar un derecho de petición",
            step: [
              {
                "@type": "HowToStep",
                name: "Identifica el tipo de petición",
                text: "Información, documentos, consulta, queja o solicitud de actuación. De ello depende el plazo de respuesta.",
              },
              {
                "@type": "HowToStep",
                name: "Escribe los hechos y la petición",
                text: "Narra los hechos con fechas y formula una petición concreta y numerada.",
              },
              {
                "@type": "HowToStep",
                name: "Cita el fundamento y los anexos",
                text: "Artículo 23 de la Constitución y Ley 1755 de 2015, con la relación de anexos.",
              },
              {
                "@type": "HowToStep",
                name: "Radica y guarda la constancia",
                text: "Radica por ventanilla o canal virtual y conserva el número de radicado con fecha.",
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
                name: "Generador de derecho de petición",
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
              { titulo: "Generador de derecho de petición" },
            ]}
          />

          <Revelar>
            <h1 className="display-lg mt-8">Generador de derecho de petición 2026</h1>
            <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
              Redacta tu derecho de petición con la estructura que exige la Ley 1755 de 2015.
              Gratis, en 3 minutos y descargable en PDF.
            </p>
            <p className="mono-tag mt-5 inline-block rounded-full bg-esmeralda-claro px-3 py-1 text-esmeralda">
              GRATIS · SIN REGISTRO
            </p>
          </Revelar>
        </div>

        <div className="mt-10">
          <GeneradorPeticion />
        </div>

        <div className="no-imprimir mx-auto mt-16 max-w-[900px] space-y-14">
          <div className="aviso-plazo flex gap-3">
            <AlarmClock
              className="mt-0.5 h-5 w-5 shrink-0 text-sello"
              aria-hidden="true"
              strokeWidth={1.7}
            />
            <div>
              <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-sello">
                Plazos de respuesta
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta">
                La entidad tiene 15 días hábiles para responder tu petición general, 10 días hábiles
                si es de información y documentos, y 30 días hábiles si es una consulta. Si no
                responde en ese plazo, puedes presentar una acción de tutela por violación del
                derecho de petición. {/* VERIFICAR CON ABOGADO */}
              </p>
              <Link to="/herramientas/accion-de-tutela" className="btn-primario btn-pulso mt-5 inline-flex">
                Si ya pasó el plazo y no te han respondido → Crear mi tutela
              </Link>
            </div>
          </div>

          <section>
            <h2 className="display-md">Qué es el derecho de petición y qué puedes pedir</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                El derecho de petición es la herramienta más poderosa y menos usada del
                ordenamiento colombiano. El artículo 23 de la Constitución permite a toda persona
                presentar peticiones a las autoridades por motivos de interés general o particular y
                obtener pronta resolución, y la Ley 1755 de 2015 reguló su ejercicio con plazos,
                deberes y consecuencias concretas. No cuesta nada, no requiere abogado, no exige
                formalidades y obliga a la entidad a pronunciarse de fondo.
              </p>
              <p>
                Con un derecho de petición puedes pedir información sobre un trámite, copias de
                documentos que reposan en un expediente, una consulta sobre la interpretación de una
                norma que la entidad aplica, presentar una queja o un reclamo, o solicitar una
                actuación administrativa concreta: que se resuelva una solicitud represada, que se
                corrija un cobro, que se practique una visita, que se emita un acto.
              </p>
              <p>
                No se dirige únicamente a entidades públicas. Procede también frente a particulares
                que prestan servicios públicos, cumplen funciones públicas o están en posición
                dominante: EPS, fondos de pensiones, bancos, aseguradoras, colegios y universidades,
                operadores de telefonía e internet, empresas de acueducto y energía, y
                administraciones de propiedad horizontal. En esos casos la petición se rige por las
                mismas reglas y el incumplimiento habilita la misma tutela.
              </p>
              <p>
                La petición puede presentarse verbalmente o por escrito, en nombre propio o de un
                tercero, e incluso de forma anónima cuando se trata de denunciar irregularidades. La
                entidad no puede exigir requisitos no previstos en la ley, negar la radicación,
                condicionarla al pago de una tasa o devolverla porque «no es el formato». Si falta
                algún dato indispensable debe requerirlo dentro de los diez días siguientes,
                indicando con precisión qué hace falta.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Qué debe contener para que funcione</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La ley no exige una estructura sacramental, pero la práctica administrativa premia
                los escritos ordenados. Un derecho de petición que se responde rápido tiene ocho
                partes: ciudad y fecha, destinatario correcto, referencia, identificación completa
                del peticionario, hechos numerados con fechas, petición concreta y separada por
                puntos, fundamentos de derecho, anexos y dirección de notificaciones.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                El destinatario correcto
              </h3>
              <p>
                Dirigirlo a la entidad equivocada es la causa más frecuente de demora. Si te
                equivocas, la entidad debe remitirlo a la competente dentro de los cinco días
                siguientes e informarte, pero eso consume tiempo. Verifica la entidad y, si conoces
                la dependencia, nómbrala.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Hechos con fechas y radicados
              </h3>
              <p>
                Cada hecho debe ser verificable: fecha, número de radicado, nombre del funcionario
                si aplica. Los hechos vagos producen respuestas vagas. Una petición que cita
                radicados obliga a la entidad a revisar el expediente y a pronunciarse sobre lo que
                efectivamente ocurrió.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Petición concreta, numerada y verificable
              </h3>
              <p>
                «Solicito una solución» no es una petición. «Solicito copia del acta de la visita
                del 12 de marzo de 2026» sí lo es. La regla práctica es simple: cada punto debe poder
                responderse con un sí, un no, un documento o una fecha. Cuando la petición está bien
                delimitada, la respuesta evasiva se vuelve visible y la tutela posterior resulta
                casi automática.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Plazos y cómo se cuentan</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                Los plazos se cuentan en días hábiles desde el día siguiente a la radicación, y no
                incluyen sábados, domingos ni festivos. Son quince días hábiles para la petición
                general, diez para información y documentos, y treinta para consultas. Cuando la
                entidad no puede responder dentro del término, debe informarlo antes de que se venza,
                explicar por qué y fijar un plazo razonable que no exceda el doble del inicial.
              </p>
              <p>
                Existen reglas especiales que conviene tener presentes: en materia de acceso a la
                información pública, la Ley 1712 de 2014 impone plazos y deberes de motivación
                reforzados; en salud, la negativa de un servicio incluido en el plan de beneficios
                tiene términos administrativos propios y suele resolverse por tutela con mayor
                celeridad; y en peticiones de personas en situación de vulnerabilidad —adultos
                mayores, menores, personas con discapacidad— la jurisprudencia exige trámite
                prioritario.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Paso a paso para presentarlo</h2>
            <ol className="mt-7 space-y-6">
              {[
                {
                  t: "Define qué pides y a quién",
                  d: "Escoge el tipo de petición y verifica la entidad competente. El tipo determina el plazo legal de respuesta.",
                },
                {
                  t: "Redacta hechos y petición",
                  d: "Hechos numerados con fechas y radicados; petición concreta punto por punto, cada uno respondible con un documento o una fecha.",
                },
                {
                  t: "Adjunta la prueba",
                  d: "Copias de radicados anteriores, respuestas incompletas, facturas, historia clínica o cualquier documento que soporte los hechos.",
                },
                {
                  t: "Radica y guarda la constancia",
                  d: "Por ventanilla con sello, por el canal de PQRS o por correo oficial. El radicado con fecha es la prueba del inicio del plazo.",
                },
                {
                  t: "Si no responden, tutela",
                  d: "Vencido el plazo, la tutela por violación del derecho de petición se falla en 10 días hábiles y no requiere abogado.",
                },
              ].map((p, i) => (
                <li key={p.t} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-esmeralda/35 bg-papel-hueso font-mono text-[0.9rem] font-semibold text-esmeralda"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lectura">
                    <h3 className="text-[1.05rem] font-semibold">{p.t}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta-suave">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="display-md">Qué hacer si la respuesta es evasiva o negativa</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                Una respuesta que no resuelve lo pedido, que remite a otra dependencia sin
                pronunciarse o que se limita a decir que el caso «está en estudio» no satisface el
                derecho de petición. La Corte Constitucional ha sido constante: la respuesta debe ser
                oportuna, de fondo, clara, precisa, congruente con lo pedido y notificada al
                peticionario. Si falta alguno de esos elementos, el derecho sigue vulnerado.
              </p>
              <p>
                Frente a una negativa motivada hay dos caminos. Si la negativa se apoya en reserva
                legal, puede insistirse pidiendo la norma exacta que la sustenta y la parte no
                reservada del documento. Si la negativa afecta un derecho sustancial —una prestación,
                un reconocimiento, una autorización—, la vía es el recurso administrativo cuando
                exista acto, o la acción de nulidad y restablecimiento del derecho, que caduca en
                cuatro meses desde la notificación.
              </p>
              <p>
                Cuando el problema es el silencio, la tutela es el camino natural y funciona. El juez
                ordena responder en un término breve y, si la entidad incumple, procede el incidente
                de desacato con sanciones de arresto y multa para el funcionario responsable. Además,
                el silencio puede tener consecuencias disciplinarias: la Ley 1755 de 2015 califica la
                falta de respuesta como falta disciplinaria del servidor público.
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
                params={{ silo: "administrativo", subarea: "derecho-de-peticion" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Qué hacer si no responden tu derecho de petición
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
            </div>
          </section>

          <section>
            <h2 className="display-md">Preguntas frecuentes</h2>
            <div className="mt-7">
              <Acordeon items={FAQS} />
            </div>
          </section>

          <p className="rounded-[4px] border border-linea bg-papel-hueso px-4 py-4 text-[0.8rem] leading-relaxed text-tinta-suave">
            Este generador produce un borrador con base en la estructura legal vigente. Revisa el
            documento antes de presentarlo y ajústalo a tu caso. No constituye asesoría jurídica.
          </p>
        </div>
      </div>
    </div>
  );
}

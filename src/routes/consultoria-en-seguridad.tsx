import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Check,
  FileSearch,
  Gavel,
  Globe2,
  GraduationCap,
  Landmark,
  Leaf,
  Lock,
  MapPinned,
  Radar,
  Scale,
  Send,
  ShieldCheck,
  ShieldAlert,
  UserRound,
  Users,
} from "lucide-react";
import { absoluta, metaSeo, NOMBRE_SITIO, SITIO } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { Acordeon, type ItemAcordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { enviarConsultoria } from "@/lib/envio.functions";
import { evento } from "@/lib/analitica";
import { FOTOS, Foto, urlFoto, type ClaveFoto } from "@/components/sitio/FotoSeguridad";

const SEO = PAGINAS.consultoriaSeguridad;

/* ── Contenido ────────────────────────────────────────────────────── */

const CLIENTES = [
  {
    Icono: Building2,
    titulo: "Empresas",
    detalle:
      "Compañías con operaciones, sedes o personal expuestos a extorsión, hurto, fraude, cibercrimen o riesgo de orden público.",
  },
  {
    Icono: Landmark,
    titulo: "Alcaldías y gobernaciones",
    detalle:
      "Administraciones que deben formular, actualizar o ejecutar su Plan Integral de Seguridad y Convivencia Ciudadana.",
  },
  {
    Icono: Users,
    titulo: "Entidades e instituciones",
    detalle:
      "Entidades públicas, organizaciones sociales y de cooperación que trabajan en zonas con presencia de conflicto o crimen organizado.",
  },
  {
    Icono: UserRound,
    titulo: "Particulares",
    detalle:
      "Personas y familias que necesitan evaluar un riesgo concreto y recibir una estrategia de protección clara.",
  },
] as const;

const SERVICIOS = [
  {
    Icono: Radar,
    titulo: "Análisis de riesgos de seguridad",
    detalle:
      "Identificamos actores, amenazas y factores de riesgo de su operación o territorio y los convertimos en un mapa de prioridades.",
    puntos: ["Diagnóstico de orden público", "Matriz de riesgos", "Escenarios y alertas tempranas"],
  },
  {
    Icono: Building2,
    titulo: "Estudios de seguridad para empresas",
    detalle:
      "Evaluamos instalaciones, procesos y personal para cerrar las brechas que facilitan el hurto, el fraude o la extorsión.",
    puntos: [
      "Seguridad de instalaciones",
      "Protocolos y planes de contingencia",
      "Seguridad de la información",
    ],
  },
  {
    Icono: Landmark,
    titulo: "Planes de seguridad para entidades territoriales",
    detalle:
      "Acompañamos a alcaldías y gobernaciones en la formulación, actualización y seguimiento de su PISCC y de sus políticas de seguridad.",
    puntos: ["Formulación del PISCC", "Política pública de seguridad", "Indicadores y seguimiento"],
  },
  {
    Icono: FileSearch,
    titulo: "Investigación y análisis criminal",
    detalle:
      "Estudiamos fenómenos criminales con trabajo de campo y análisis de información para entregar productos concretos y verificables.",
    puntos: [
      "Crimen organizado y multicrimen",
      "Narcotráfico y economías ilícitas",
      "Homicidios y desplazamiento",
    ],
  },
  {
    Icono: ShieldAlert,
    titulo: "Prevención del delito",
    detalle:
      "Diseñamos estrategias para prevenir y desarticular delitos que afectan a empresas y comunidades.",
    puntos: ["Extorsión y secuestro", "Cibercrimen", "Prevención en entornos urbanos y rurales"],
  },
  {
    Icono: Gavel,
    titulo: "Acompañamiento jurídico penal",
    detalle:
      "Abogados penalistas y ex funcionarios judiciales orientan la ruta legal: denuncias, protección y articulación con autoridades.",
    puntos: ["Ruta de denuncia", "Apoyo en investigación judicial", "Articulación con autoridades"],
  },
  {
    Icono: Scale,
    titulo: "Derechos humanos, paz y reincorporación",
    detalle:
      "Asesoría en derechos humanos, derecho internacional humanitario, mantenimiento de la paz y reincorporación comunitaria.",
    puntos: ["DD. HH. y DIH", "Construcción de paz", "Reincorporación de excombatientes"],
  },
  {
    Icono: Leaf,
    titulo: "Seguridad ambiental",
    detalle:
      "Estrategias de protección del medio ambiente, la fauna y la flora frente a delitos ambientales y efectos del cambio climático.",
    puntos: ["Delitos ambientales", "Protección de ecosistemas", "Riesgo climático"],
  },
  {
    Icono: GraduationCap,
    titulo: "Capacitación especializada",
    detalle:
      "Formación teórico-práctica para equipos directivos, de seguridad y funcionarios en cada uno de los temas del portafolio.",
    puntos: ["Talleres para directivos", "Formación de equipos", "Simulacros y casos prácticos"],
  },
] as const;

const EQUIPO = [
  "Analistas especializados en narcotráfico, terrorismo y crimen organizado.",
  "Investigadores con amplia trayectoria en policía judicial.",
  "Abogados especializados en derecho penal.",
  "Exfiscales de direcciones especializadas y exjueces de la República.",
  "Oficiales y suboficiales de la reserva activa de la Policía Nacional y las Fuerzas Militares.",
  "Profesionales con diplomados de la ONU en seguridad y defensa.",
  "Cartógrafos especializados en análisis de situación y planeación.",
  "Trabajadores sociales con experiencia en zonas de conflicto.",
] as const;

const PASOS = [
  {
    titulo: "Nos cuenta la necesidad",
    detalle:
      "Llena el formulario o escríbanos. La información se trata con reserva desde el primer contacto.",
  },
  {
    titulo: "Diagnóstico inicial",
    detalle:
      "Un especialista revisa el caso, define el alcance y propone una reunión, presencial o virtual.",
  },
  {
    titulo: "Propuesta a la medida",
    detalle: "Recibe una propuesta con objetivos, entregables, cronograma y valor. Sin compromiso.",
  },
  {
    titulo: "Ejecución y seguimiento",
    detalle:
      "Trabajo de análisis y de campo, entrega de productos concretos y acompañamiento en su implementación.",
  },
] as const;

const FAQS: ItemAcordeon[] = [
  {
    pregunta: "¿Qué es una consultoría en seguridad?",
    respuesta:
      "Es un servicio profesional que analiza los riesgos de seguridad de una empresa, una entidad o un territorio y entrega un diagnóstico y una estrategia para reducirlos. No es un servicio de vigilancia ni de escoltas: es análisis, planeación, acompañamiento y capacitación.",
  },
  {
    pregunta: "¿Qué incluye un estudio de seguridad para una empresa?",
    respuesta:
      "Normalmente incluye la identificación de amenazas y vulnerabilidades, la revisión de instalaciones, accesos, procesos y manejo de información, una matriz de riesgos y un plan de acción con medidas priorizadas por impacto y costo.",
  },
  {
    pregunta: "¿Qué es el PISCC y quién debe tenerlo?",
    respuesta:
      "El Plan Integral de Seguridad y Convivencia Ciudadana es el documento con el que alcaldías y gobernaciones definen sus prioridades, programas e inversiones en seguridad para su periodo de gobierno. Lo formula cada administración territorial con la Policía, las Fuerzas Militares, la Fiscalía y demás autoridades, y se ejecuta con recursos como los del fondo territorial de seguridad (FONSET).",
  },
  {
    pregunta: "¿Atienden en todo el país?",
    respuesta:
      "Sí. Trabajamos en todo el territorio colombiano, con capacidad de trabajo de campo en regiones y apoyo de aliados en otros países de América y Europa.",
  },
  {
    pregunta: "¿Cuánto cuesta una consultoría en seguridad?",
    respuesta:
      "Depende del alcance: no es lo mismo un diagnóstico puntual para una sede que la formulación de un plan para un departamento. Después de la primera conversación recibe una propuesta con valor cerrado y entregables definidos.",
  },
  {
    pregunta: "¿La información que comparto es confidencial?",
    respuesta:
      "Sí. La información del cliente solo la conoce el equipo asignado y se trata conforme a la Ley 1581 de 2012. Si lo requiere, firmamos un acuerdo de confidencialidad antes de iniciar.",
  },
];

/* ── Ruta ─────────────────────────────────────────────────────────── */

export const Route = createFileRoute("/consultoria-en-seguridad")({
  head: () => ({
    ...metaSeo({ ...SEO, imagen: absoluta(urlFoto("consultoria-en-seguridad-sala-de-analisis", 1200)) }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consultoría en seguridad",
            serviceType: "Consultoría en seguridad y análisis de riesgos",
            description: SEO.descripcion,
            url: absoluta(SEO.ruta),
            image: (Object.keys(FOTOS) as ClaveFoto[]).map((c) => ({
              "@type": "ImageObject",
              contentUrl: absoluta(urlFoto(c, 1200)),
              thumbnailUrl: absoluta(urlFoto(c, 600)),
              name: FOTOS[c].titulo,
              description: FOTOS[c].alt,
              width: 1200,
              height: 800,
              encodingFormat: "image/webp",
            })),
            areaServed: { "@type": "Country", name: "Colombia" },
            audience: {
              "@type": "Audience",
              audienceType: "Empresas, alcaldías, gobernaciones, entidades e instituciones",
            },
            provider: { "@type": "Organization", name: NOMBRE_SITIO, url: `${SITIO}/` },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de consultoría en seguridad",
              itemListElement: SERVICIOS.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.titulo, description: s.detalle },
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITIO}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Consultoría en seguridad",
                item: absoluta(SEO.ruta),
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
        ]),
      },
    ],
  }),
  component: Pagina,
});

/* ── Página ───────────────────────────────────────────────────────── */

function Pagina() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-tinta text-papel">
        <div className="contenedor py-14 md:py-20">
          <div className="[&_a]:text-papel/80 [&_li]:text-papel/60 [&_span]:text-papel/80">
            <Migas
              items={[{ titulo: "Inicio", to: "/" }, { titulo: "Consultoría en seguridad" }]}
            />
          </div>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <header>
              <p className="eyebrow text-papel/60">Empresas · Gobiernos · Instituciones</p>
              <h1 className="display-lg mt-3 text-papel">
                Consultoría en seguridad para empresas, gobiernos e instituciones
              </h1>
              <p className="mt-5 max-w-[60ch] text-[1.05rem] leading-relaxed text-papel/80">
                Análisis de riesgos, estudios de seguridad y planes de seguridad territorial
                elaborados por un equipo de abogados penalistas, investigadores judiciales y
                oficiales de la reserva activa. Cobertura en toda Colombia.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#solicitar" className="btn-primario btn-pulso">
                  Solicitar diagnóstico
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-[6px] border border-papel/40 px-5 py-3 text-[0.95rem] font-semibold text-papel transition-colors hover:border-papel"
                >
                  Ver servicios
                </a>
              </div>
            </header>

            <Foto
              clave="consultoria-en-seguridad-sala-de-analisis"
              prioridad
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="border border-papel/15"
            />
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icono: Radar,
                t: "Análisis de riesgos",
                d: "Amenazas y vulnerabilidades priorizadas",
              },
              { Icono: Landmark, t: "Planes PISCC", d: "Para alcaldías y gobernaciones" },
              { Icono: FileSearch, t: "Investigación criminal", d: "Análisis y trabajo de campo" },
              { Icono: MapPinned, t: "Cobertura nacional", d: "Todo el territorio colombiano" },
            ].map(({ Icono, t, d }) => (
              <li key={t} className="rounded-[6px] border border-papel/15 bg-papel/5 p-5">
                <Icono aria-hidden="true" strokeWidth={1.6} className="h-6 w-6 text-papel" />
                <p className="mt-3 text-[0.98rem] font-semibold text-papel">{t}</p>
                <p className="mt-1 text-[0.86rem] leading-relaxed text-papel/70">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="contenedor py-14 md:py-20">
        {/* QUÉ ES */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="display-md">Qué es una consultoría en seguridad y para qué sirve</h2>
            <p className="lectura mt-5 text-tinta-suave">
              Una consultoría en seguridad estudia los riesgos reales de una organización o de un
              territorio —quién amenaza, cómo, dónde y con qué probabilidad— y los convierte en
              decisiones concretas: qué proteger primero, qué cambiar en los procesos, cómo
              articularse con las autoridades y cuánto invertir.
            </p>
            <p className="lectura mt-4 text-tinta-suave">
              No es vigilancia ni escoltas. Es análisis, planeación estratégica, acompañamiento
              jurídico y formación, hechos por personas que conocen el fenómeno criminal desde la
              investigación judicial, la fuerza pública y el trabajo en las regiones.
            </p>
            <Foto clave="analisis-de-riesgos-de-seguridad" className="mt-8" />
          </div>
          <div className="rounded-[6px] border border-linea bg-papel-hueso p-6">
            <h3 className="text-[1rem] font-semibold">Para quién trabajamos</h3>
            <ul className="mt-5 space-y-5">
              {CLIENTES.map(({ Icono, titulo, detalle }) => (
                <li key={titulo} className="flex gap-4">
                  <Icono
                    aria-hidden="true"
                    strokeWidth={1.7}
                    className="mt-0.5 h-5 w-5 shrink-0 text-esmeralda"
                  />
                  <div>
                    <p className="text-[0.97rem] font-semibold">{titulo}</p>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-tinta-suave">{detalle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mt-18 scroll-mt-24 border-t border-linea pt-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="display-md">Servicios de consultoría en seguridad</h2>
              <p className="lectura mt-4 text-tinta-suave">
                Cada servicio se puede contratar por separado o como parte de un plan integral:
                desde el estudio de seguridad de una sede empresarial hasta la estrategia de
                seguridad de un departamento.
              </p>
            </div>
            <Foto clave="estudio-de-seguridad-empresa" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map(({ Icono, titulo, detalle, puntos }, i) => (
              <Revelar key={titulo} retardo={(i % 3) * 60}>
                <article className="h-full rounded-[6px] border border-linea bg-papel-hueso p-6">
                  <Icono aria-hidden="true" strokeWidth={1.6} className="h-6 w-6 text-esmeralda" />
                  <h3 className="mt-4 text-[1.05rem] font-semibold">{titulo}</h3>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-tinta-suave">{detalle}</p>
                  <ul className="mt-4 space-y-2 border-t border-linea pt-4">
                    {puntos.map((p) => (
                      <li key={p} className="flex gap-2 text-[0.88rem] text-tinta-suave">
                        <Check
                          aria-hidden="true"
                          strokeWidth={2}
                          className="mt-0.5 h-4 w-4 shrink-0 text-esmeralda"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Revelar>
            ))}
          </div>
        </section>

        {/* PISCC */}
        <section className="mt-18 rounded-[6px] border border-esmeralda bg-esmeralda-claro p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <p className="eyebrow">Para alcaldías y gobernaciones</p>
              <h2 className="display-md mt-3">
                Plan Integral de Seguridad y Convivencia Ciudadana (PISCC)
              </h2>
              <p className="lectura mt-5 text-tinta-suave">
                El PISCC es la hoja de ruta de seguridad de cada municipio y departamento durante el
                periodo de gobierno: define problemas priorizados, programas, metas, responsables e
                inversiones, y se ejecuta en buena parte con recursos del fondo territorial de
                seguridad (FONSET).
              </p>
              <p className="lectura mt-4 text-tinta-suave">
                Un plan bien hecho parte de un diagnóstico real del territorio, no de una plantilla.
                Por eso combinamos análisis de cifras, trabajo de campo y mesas con las autoridades
                y la comunidad.
              </p>
            </div>
            <div className="space-y-4 self-center">
              <Foto
                clave="plan-integral-de-seguridad-piscc"
                sizes="(max-width: 1023px) 100vw, 40vw"
              />
              <ul className="space-y-3">
                {[
                  "Diagnóstico de seguridad y convivencia del territorio",
                  "Priorización de delitos y comportamientos contrarios a la convivencia",
                  "Programas, proyectos, metas e indicadores",
                  "Articulación con Policía, Fuerzas Militares y Fiscalía",
                  "Plan de inversión y seguimiento",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 rounded-[6px] bg-papel p-4 text-[0.93rem] leading-relaxed"
                  >
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
          </div>
        </section>

        {/* EQUIPO */}
        <section className="mt-18 border-t border-linea pt-12">
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-esmeralda" />
            <h2 className="display-md">Un equipo que conoce el fenómeno criminal desde adentro</h2>
          </div>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <Foto clave="investigacion-y-analisis-criminal" />
            <div>
              <p className="lectura text-tinta-suave">
                Los servicios los presta un equipo interdisciplinario con experiencia directa en
                investigación, justicia y seguridad pública:
              </p>
              <ul className="mt-6 grid gap-4">
                {EQUIPO.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 border-t border-esmeralda pt-4 text-[0.95rem] leading-relaxed text-tinta-suave"
                  >
                    <Check
                      aria-hidden="true"
                      strokeWidth={2}
                      className="mt-1 h-4 w-4 shrink-0 text-esmeralda"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-[6px] border border-linea bg-papel-hueso p-6">
              <Globe2
                aria-hidden="true"
                strokeWidth={1.7}
                className="mt-0.5 h-6 w-6 shrink-0 text-esmeralda"
              />
              <div>
                <h3 className="text-[1rem] font-semibold">Alcance nacional e internacional</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-suave">
                  Trabajo en todo el territorio colombiano y red de apoyo en Estados Unidos, México,
                  Brasil, Perú, Panamá, Costa Rica, Ecuador, España e Italia.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-[6px] border border-linea bg-papel-hueso p-6">
              <Lock
                aria-hidden="true"
                strokeWidth={1.7}
                className="mt-0.5 h-6 w-6 shrink-0 text-esmeralda"
              />
              <div>
                <h3 className="text-[1rem] font-semibold">Reserva total</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-suave">
                  La información del cliente solo la conoce el equipo asignado. Firmamos acuerdo de
                  confidencialidad cuando el caso lo requiere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="mt-18 border-t border-linea pt-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="display-md">Cómo trabajamos</h2>
              <p className="lectura mt-4 text-tinta-suave">
                Del primer contacto a la entrega de resultados, con capacitación a los equipos que
                van a aplicar la estrategia.
              </p>
            </div>
            <Foto clave="capacitacion-en-seguridad" />
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p, i) => (
              <li key={p.titulo}>
                <p className="font-mono text-[0.8rem] font-semibold tracking-[0.06em] text-esmeralda">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[1.02rem] font-semibold">{p.titulo}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-tinta-suave">{p.detalle}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt-18 border-t border-linea pt-12">
          <h2 className="display-md">Preguntas frecuentes sobre consultoría en seguridad</h2>
          <div className="mt-8 max-w-[820px]">
            <Acordeon items={FAQS} />
          </div>
        </section>

        {/* FORMULARIO */}
        <section
          id="solicitar"
          className="mt-18 scroll-mt-24 grid gap-10 rounded-[6px] border border-linea bg-papel-hueso p-6 md:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14"
        >
          <div>
            <p className="eyebrow">Solicitud confidencial</p>
            <h2 className="display-md mt-3">Solicite un diagnóstico de seguridad</h2>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-tinta-suave">
              Cuéntenos qué necesita. Un especialista le responde en máximo 24 horas hábiles para
              agendar la primera conversación, sin costo y sin compromiso.
            </p>
            <p className="mt-6 text-[0.88rem] leading-relaxed text-tinta-suave">
              ¿Tiene un problema penal personal, como una denuncia o un proceso en curso?{" "}
              <Link
                to="/areas/$silo"
                params={{ silo: "penal" }}
                className="font-semibold text-esmeralda underline"
              >
                Vea derecho penal
              </Link>{" "}
              y lo conectamos con un abogado.
            </p>
          </div>
          <Formulario />
        </section>
      </div>
    </div>
  );
}

/* ── Formulario ───────────────────────────────────────────────────── */

const TIPOS = [
  "Empresa privada",
  "Alcaldía o gobernación",
  "Entidad pública",
  "Organización social o de cooperación",
  "Particular",
  "Otro",
];

function Formulario() {
  const [estado, setEstado] = useState<"listo" | "enviando" | "enviado">("listo");
  const [error, setError] = useState("");

  if (estado === "enviado") {
    return (
      <div role="status" className="rounded-[6px] border border-esmeralda bg-papel p-8">
        <p className="eyebrow">Solicitud recibida</p>
        <h3 className="display-md mt-3 text-[1.4rem]">Gracias, ya tenemos su solicitud</h3>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-tinta-suave">
          Un especialista le escribirá en máximo 24 horas hábiles por correo o WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      aria-label="Solicitud de consultoría en seguridad"
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const v = (k: string) => String(f.get(k) ?? "").trim();
        const params = new URLSearchParams(window.location.search);
        setEstado("enviando");
        setError("");
        try {
          await enviarConsultoria({
            data: {
              nombre: v("nombre"),
              organizacion: v("organizacion"),
              cargo: v("cargo"),
              tipo: v("tipo"),
              servicio: v("servicio"),
              ubicacion: v("ubicacion"),
              correo: v("correo"),
              whatsapp: v("whatsapp"),
              mensaje: v("mensaje"),
              autorizaDatos: true,
              utm_source: params.get("utm_source") ?? "",
              utm_medium: params.get("utm_medium") ?? "",
              utm_campaign: params.get("utm_campaign") ?? "",
              gclid: params.get("gclid") ?? "",
              pagina_origen: window.location.href,
              referrer: document.referrer,
            },
          });
          evento("consultoria_seguridad_enviada", { tipo: v("tipo"), servicio: v("servicio") });
          setEstado("enviado");
        } catch {
          setEstado("listo");
          setError("No pudimos enviar la solicitud. Revise los datos e intente de nuevo.");
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Campo id="seg-nombre" etiqueta="Nombre completo">
          <input
            id="seg-nombre"
            name="nombre"
            required
            minLength={3}
            className="campo"
            autoComplete="name"
          />
        </Campo>
        <Campo id="seg-tipo" etiqueta="Tipo de cliente">
          <select id="seg-tipo" name="tipo" required className="campo" defaultValue="">
            <option value="" disabled>
              Seleccione
            </option>
            {TIPOS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Campo>
        <Campo id="seg-organizacion" etiqueta="Empresa o entidad (opcional)">
          <input
            id="seg-organizacion"
            name="organizacion"
            className="campo"
            autoComplete="organization"
          />
        </Campo>
        <Campo id="seg-cargo" etiqueta="Cargo (opcional)">
          <input id="seg-cargo" name="cargo" className="campo" autoComplete="organization-title" />
        </Campo>
        <Campo id="seg-servicio" etiqueta="Servicio de interés">
          <select id="seg-servicio" name="servicio" required className="campo" defaultValue="">
            <option value="" disabled>
              Seleccione
            </option>
            {SERVICIOS.map((s) => (
              <option key={s.titulo}>{s.titulo}</option>
            ))}
            <option>No estoy seguro</option>
          </select>
        </Campo>
        <Campo id="seg-ubicacion" etiqueta="Ciudad y departamento">
          <input
            id="seg-ubicacion"
            name="ubicacion"
            required
            minLength={2}
            className="campo"
            placeholder="Ej.: Popayán, Cauca"
            autoComplete="address-level2"
          />
        </Campo>
        <Campo id="seg-correo" etiqueta="Correo electrónico">
          <input
            id="seg-correo"
            name="correo"
            type="email"
            required
            className="campo"
            autoComplete="email"
          />
        </Campo>
        <Campo id="seg-whatsapp" etiqueta="Celular o WhatsApp">
          <input
            id="seg-whatsapp"
            name="whatsapp"
            type="tel"
            required
            minLength={7}
            className="campo"
            autoComplete="tel"
            placeholder="300 000 0000"
          />
        </Campo>
      </div>

      <Campo id="seg-mensaje" etiqueta="¿Qué necesita?">
        <textarea
          id="seg-mensaje"
          name="mensaje"
          rows={5}
          required
          minLength={10}
          className="campo resize-y"
          placeholder="Describa la situación en términos generales. Los detalles sensibles los tratamos en la reunión."
        />
      </Campo>

      <label className="flex gap-3 text-[0.85rem] leading-relaxed text-tinta-suave">
        <input
          type="checkbox"
          name="autoriza"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-esmeralda"
        />
        <span>
          Autorizo el tratamiento de mis datos para responder esta solicitud, conforme a la{" "}
          <Link
            to="/politica-de-tratamiento-de-datos"
            className="font-semibold text-esmeralda underline"
          >
            política de tratamiento de datos
          </Link>
          .
        </span>
      </label>

      {error && (
        <p role="alert" className="text-[0.9rem] font-semibold text-destructive">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primario" disabled={estado === "enviando"}>
        <Send aria-hidden="true" strokeWidth={1.8} className="h-4 w-4" />
        {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}

function Campo({
  id,
  etiqueta,
  children,
}: {
  id: string;
  etiqueta: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.85rem] font-semibold text-tinta">
        {etiqueta}
      </label>
      {children}
    </div>
  );
}

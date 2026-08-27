import { createFileRoute } from "@tanstack/react-router";
import { metaSeo, SITIO } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { MapPin, Scale, ShieldCheck, Users } from "lucide-react";
import { Acordeon, type ItemAcordeon } from "@/components/sitio/Acordeon";
import { CaratulaExpediente } from "@/components/sitio/CaratulaExpediente";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import {
  CIUDADES_COBERTURA,
  REGIONES_COBERTURA,
  areaServedSchema,
  departamentoDe,
} from "@/lib/cobertura";

const BASE = SITIO;
const TITLE = "Cobertura: abogados en 19 ciudades de Colombia";
const DESC =
  "Conectamos con abogados verificados en Bogotá, Medellín, Cali y 16 ciudades más del país.";

const FAQS: ItemAcordeon[] = [
  {
    pregunta: "¿Atienden casos en municipios pequeños?",
    respuesta:
      "Sí. Recibimos casos de todo el país. Lo que determina la viabilidad no es el tamaño del municipio, sino el circuito judicial donde se tramita el proceso: muchos asuntos se llevan en la cabecera del circuito y no en el municipio donde vive el usuario.",
  },
  {
    pregunta: "¿Tienen oficina en cada ciudad?",
    respuesta:
      "No. Somos una plataforma de conexión: los abogados de la red son profesionales independientes con tarjeta profesional vigente que ejercen en su ciudad. No operamos sedes ni sucursales.",
  },
  {
    pregunta: "¿Qué pasa si no hay abogado disponible para mi caso?",
    respuesta:
      "Te lo decimos con claridad y sin rodeos, dentro del mismo día hábil. Preferimos informarte que no tenemos a la persona adecuada antes que dejarte esperando una llamada que no va a llegar.",
  },
  {
    pregunta: "Mi caso ocurrió en otra ciudad, ¿importa dónde vivo?",
    respuesta:
      "Para la asignación importa más dónde se tramita el proceso. La competencia se determina normalmente por el lugar de los hechos o por el domicilio del demandado, y por eso el formulario pregunta dónde ocurrió el caso.",
  },
  {
    pregunta: "¿Puedo atender el caso a distancia?",
    respuesta:
      "En buena parte sí. Las audiencias virtuales, la radicación electrónica y el expediente digital permiten que muchos procesos avancen sin desplazamientos; el abogado te indica en qué diligencias sí se requiere presencia.",
  },
];

export const Route = createFileRoute("/cobertura")({
  head: () => ({
    ...metaSeo(PAGINAS.cobertura),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd()) }],
  }),
  component: Pagina,
});

function jsonLd() {
  const url = `${BASE}/cobertura`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Conexión con abogados verificados en Colombia",
      description: DESC,
      url,
      serviceType: "Asesoría y representación jurídica",
      provider: {
        "@type": "Organization",
        name: "Asesorías Jurídicas Colombia",
        url: `${BASE}/`,
      },
      areaServed: areaServedSchema(),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Cobertura", item: url },
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
  ];
}

const CRITERIOS = [
  {
    icono: Scale,
    titulo: "Área del derecho",
    texto:
      "Primero clasificamos el caso en una de las 13 áreas. Un asunto laboral no lo asigna un abogado penalista, aunque esté disponible.",
  },
  {
    icono: MapPin,
    titulo: "Ciudad donde se tramita",
    texto:
      "Buscamos abogado en el circuito judicial competente, que suele ser el del lugar de los hechos o el del domicilio del demandado.",
  },
  {
    icono: ShieldCheck,
    titulo: "Especialidad acreditada",
    texto:
      "Verificamos tarjeta profesional vigente ante el Consejo Superior de la Judicatura y experiencia comprobable en ese tipo de proceso.",
  },
  {
    icono: Users,
    titulo: "Disponibilidad real",
    texto:
      "Solo asignamos a quien puede tomar el caso ahora. Si nadie de la red puede, te lo informamos en vez de dejarte esperando.",
  },
];

function Pagina() {
  return (
    <div className="bg-papel">
      <div className="contenedor pb-16 pt-10 lg:pb-24 lg:pt-14">
        <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Cobertura" }]} />

        <header className="mt-6 max-w-[46rem]">
          <p className="eyebrow">Cobertura nacional</p>
          <h1 className="display-lg mt-4">Dónde operamos</h1>
          <p className="lectura mt-6 text-[1.15rem] leading-[1.7] text-tinta-suave">
            Trabajamos con abogados verificados en 19 ciudades de Colombia, en las 13 áreas del
            derecho. Recibimos casos de todo el país.
          </p>
        </header>

        {/* Ciudades: tarjetas por región, sin enlaces individuales por ciudad. */}
        <section className="mt-16 lg:mt-20" aria-labelledby="ciudades">
          <h2 id="ciudades" className="display-sm">
            Ciudades con red de abogados
          </h2>
          <p className="lectura mt-4 text-tinta-suave">
            Agrupadas por región para que ubiques la más cercana al circuito donde se tramita tu
            caso.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONES_COBERTURA.map((r, i) => (
              <Revelar key={r.region} retardo={i * 60}>
                <div className="h-full rounded-[6px] border border-linea bg-papel-hueso p-5 sm:p-6">
                  <p className="font-mono text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-esmeralda">
                    {r.region}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {r.ciudades.map((c) => (
                      <li key={c} className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold">{c}</span>
                        <span className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-tinta-suave">
                          {departamentoDe(c)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Revelar>
            ))}
          </div>

          <p className="mt-6 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-tinta-suave">
            {CIUDADES_COBERTURA.length} ciudades · 13 áreas del derecho
          </p>
        </section>

        <section className="mt-16 max-w-[46rem] lg:mt-20" aria-labelledby="mi-municipio">
          <h2 id="mi-municipio" className="display-sm">
            ¿Y si mi municipio no está en la lista?
          </h2>
          <div className="lectura mt-5 space-y-4 text-[1.0625rem] leading-[1.75] text-tinta-suave">
            <p>
              Recibimos casos de todo el país, incluidos municipios donde no hay abogado de la red
              viviendo allí. La lista de arriba dice dónde tenemos abogados, no dónde aceptamos
              casos: son cosas distintas.
            </p>
            <p>
              En la práctica, muchos procesos no se tramitan en el municipio donde vives sino en la
              cabecera del circuito judicial correspondiente. Un asunto de un municipio de Boyacá se
              lleva con frecuencia en Tunja, y uno del oriente antioqueño en Medellín. Por eso lo
              relevante es tener abogado en la ciudad donde está el juzgado, no en tu vereda o
              corregimiento.
            </p>
            <p>
              Y si después de revisar tu caso no tenemos un abogado disponible con la especialidad
              adecuada, te lo decimos con claridad el mismo día hábil, en vez de dejarte esperando
              una llamada que no va a llegar. Cuando podemos, te indicamos qué entidad pública o
              consultorio jurídico universitario puede atenderte sin costo.
            </p>
          </div>
        </section>

        <section className="mt-16 max-w-[46rem] lg:mt-20" aria-labelledby="otra-ciudad">
          <h2 id="otra-ciudad" className="display-sm">
            Mi caso ocurrió en una ciudad y yo vivo en otra
          </h2>
          <div className="lectura mt-5 space-y-4 text-[1.0625rem] leading-[1.75] text-tinta-suave">
            <p>
              Es una de las situaciones más frecuentes: trabajaste en Barranquilla y ahora vives en
              Bogotá, o el accidente ocurrió en Cali y regresaste a Pereira. La regla general es que
              la competencia del juez no se determina por dónde vives tú, sino por el lugar donde
              ocurrieron los hechos o por el domicilio del demandado, según el tipo de proceso.
            </p>
            <p>
              En materia laboral, por ejemplo, suele poder demandarse en el lugar de la prestación
              del servicio o en el domicilio del empleador. En responsabilidad civil pesa el lugar
              del hecho. Frente al Estado, la entidad demandada define el circuito. Esa es la razón
              por la que el formulario te pregunta dónde ocurrió el caso y no solo dónde resides.
            </p>
            <p>
              Que el proceso se tramite en otra ciudad no significa que tengas que viajar. Con
              audiencias virtuales, expediente digital y poder otorgado por medios electrónicos, la
              mayoría de las actuaciones se hacen a distancia; el abogado te dirá si alguna
              diligencia exige presencia.
            </p>
          </div>
        </section>

        <section className="mt-16 lg:mt-20" aria-labelledby="asignacion">
          <h2 id="asignacion" className="display-sm">
            Cómo asignamos el abogado
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {CRITERIOS.map((c, i) => (
              <Revelar key={c.titulo} retardo={i * 60}>
                <div className="h-full rounded-[6px] border border-linea p-5 sm:p-6">
                  <c.icono
                    aria-hidden="true"
                    strokeWidth={1.6}
                    className="h-6 w-6 text-esmeralda"
                  />
                  <h3 className="mt-4 text-[1.05rem] font-semibold">{c.titulo}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta-suave">{c.texto}</p>
                </div>
              </Revelar>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-[46rem] lg:mt-20" aria-labelledby="preguntas">
          <h2 id="preguntas" className="display-sm">
            Preguntas frecuentes
          </h2>
          <div className="mt-8">
            <Acordeon items={FAQS} />
          </div>
        </section>

        <section className="mt-16 lg:mt-24" aria-labelledby="cuenta-tu-caso">
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-start">
            <div className="max-w-[34rem]">
              <h2 id="cuenta-tu-caso" className="display-sm">
                Cuéntanos dónde ocurrió tu caso
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.75] text-tinta-suave">
                Con el área, la ciudad donde ocurrieron los hechos y el estado del asunto ya podemos
                saber si tenemos un abogado disponible para ti. Toma menos de un minuto y no pedimos
                pago para revisarlo.
              </p>
            </div>
            <CaratulaExpediente />
          </div>
        </section>
      </div>
    </div>
  );
}

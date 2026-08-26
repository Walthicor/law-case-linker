import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { Check, ShieldCheck, X } from "lucide-react";
import { Acordeon, type ItemAcordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";

const TITLE = "Cómo funciona: de tu problema al abogado correcto";
const DESC =
  "Los cuatro pasos en detalle, qué hacemos y qué no hacemos, cómo verificamos a los abogados y las dudas más frecuentes.";

const PASOS = [
  {
    titulo: "Cuéntanos el caso",
    detalle:
      "Respondes un formulario de tres pasos: qué pasó, en qué ciudad, en qué estado está el asunto y qué documentos tienes. Toma entre cuatro y seis minutos y puedes dejarlo a medias: el borrador se guarda en tu navegador.",
    extra:
      "No pedimos cédula, no pedimos datos de pago y no necesitas registrarte. Solo un correo y un celular para poder contactarte.",
  },
  {
    titulo: "Perfilamos y calificamos",
    detalle:
      "Tu caso recibe un radicado y una calificación interna de 0 a 100 según la urgencia del plazo, el estado del asunto, la cuantía aproximada, los documentos disponibles y la claridad del relato.",
    extra:
      "Esa calificación no juzga a la persona: sirve para saber qué tan pronto hay que actuar y qué perfil de abogado necesita el caso.",
  },
  {
    titulo: "Asignamos al abogado",
    detalle:
      "Un miembro del equipo revisa el caso y lo pone en manos de un abogado de la red con tarjeta profesional vigente, experiencia en esa área y competencia en el circuito judicial donde se tramitaría el proceso.",
    extra:
      "Si no tenemos a la persona adecuada, te lo decimos el mismo día hábil en lugar de dejarte esperando.",
  },
  {
    titulo: "El abogado te contacta",
    detalle:
      "Recibe tu caso ya explicado, así que la primera conversación empieza por lo importante. Ahí acuerdan directamente el alcance del servicio y los honorarios.",
    extra:
      "Nosotros no participamos en el acuerdo económico ni cobramos comisión al usuario. La relación profesional es entre tú y el abogado.",
  },
] as const;

const SI = [
  "Escuchamos tu problema y lo ordenamos en lenguaje jurídico.",
  "Identificamos el área del derecho y la urgencia de los plazos.",
  "Confirmamos la tarjeta profesional del abogado antes de asignarlo.",
  "Te decimos con claridad cuando un caso no es viable.",
  "Publicamos guías y herramientas gratuitas, sin registro.",
  "Protegemos tu información conforme a la Ley 1581 de 2012.",
];

const NO = [
  "No damos asesoría jurídica ni emitimos conceptos legales.",
  "No representamos a nadie ante jueces ni autoridades.",
  "No fijamos ni cobramos honorarios profesionales.",
  "No garantizamos el resultado de ningún proceso.",
  "No compartimos tu caso con quien no esté verificado.",
  "No vendemos tus datos ni los usamos para publicidad de terceros.",
];

const VERIFICACION = [
  {
    titulo: "Tarjeta profesional vigente",
    detalle:
      "Confirmamos el número de tarjeta ante el registro del Consejo Superior de la Judicatura antes de admitir al abogado.",
  },
  {
    titulo: "Antecedentes disciplinarios",
    detalle:
      "Revisamos las anotaciones públicas de la jurisdicción disciplinaria. Una sanción vigente cierra la puerta.",
  },
  {
    titulo: "Experiencia declarada",
    detalle:
      "Pedimos años de ejercicio, áreas de práctica y competencia procesal. La información del perfil es estrictamente factual.",
  },
  {
    titulo: "Revalidación periódica",
    detalle:
      "La verificación tiene fecha: se repite de forma periódica, porque una tarjeta vigente hoy puede no estarlo mañana.",
  },
];

const FAQS: ItemAcordeon[] = [
  {
    pregunta: "¿Cuánto cuesta contarles mi caso?",
    respuesta:
      "Nada. El perfilamiento y la conexión con el abogado no tienen costo para el usuario. Lo único que se paga son los honorarios que acuerdes directamente con el abogado, si decides contratarlo.",
  },
  {
    pregunta: "¿Ustedes son un despacho de abogados?",
    respuesta:
      "No. Somos una plataforma tecnológica operada por MARDIGITAL SAS que perfila casos y los conecta con abogados independientes. No prestamos servicios jurídicos ni representamos a nadie.",
  },
  {
    pregunta: "¿En cuánto tiempo me contactan?",
    respuesta:
      "El compromiso es 24 horas hábiles desde el envío del formulario. Los casos con plazos a punto de vencer se priorizan y suelen atenderse el mismo día hábil.",
  },
  {
    pregunta: "¿Qué pasa si mi caso no es viable?",
    respuesta:
      "Te lo decimos sin rodeos y te explicamos por qué: puede ser un plazo vencido, una cuantía que no justifica el proceso o un asunto que no requiere abogado. Preferimos eso a hacerte perder tiempo y dinero.",
  },
  {
    pregunta: "¿Puedo elegir al abogado?",
    respuesta:
      "Puedes revisar el directorio de abogados verificados y mencionar en el formulario a quién prefieres. La asignación final depende de la disponibilidad y de la competencia procesal en el circuito de tu caso.",
  },
  {
    pregunta: "¿Qué tan confidencial es la información que envío?",
    respuesta:
      "Tu caso solo se comparte con el equipo que lo perfila y con el abogado al que se asigna. No lo publicamos, no lo vendemos y puedes pedir su supresión en cualquier momento.",
  },
  {
    pregunta: "¿Debo escribir los detalles más delicados en el formulario?",
    respuesta:
      "No estás obligado. Describe el caso en términos generales y guarda los detalles sensibles —salud, vida familiar, antecedentes— para la conversación con el abogado, que está amparada por el secreto profesional.",
  },
  {
    pregunta: "¿Las herramientas del sitio reemplazan a un abogado?",
    respuesta:
      "No. Las calculadoras y los generadores producen estimaciones y borradores útiles, pero deben revisarse antes de radicarse. No constituyen asesoría jurídica.",
  },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    ...metaSeo(PAGINAS.comoFunciona),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.pregunta,
            acceptedAnswer: { "@type": "Answer", text: f.respuesta },
          })),
        }),
      },
    ],
  }),
  component: Pagina,
});

function Pagina() {
  return (
    <div className="contenedor py-14 md:py-20">
      <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Cómo funciona" }]} />

      <header className="mt-8 max-w-[680px]">
        <p className="eyebrow">El proceso completo</p>
        <h1 className="display-lg mt-3">Cómo funciona</h1>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-tinta-suave">
          De un problema contado con tus palabras a un abogado verificado que ya sabe de qué
          se trata. Cuatro pasos, sin costo y sin registro.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/iniciar-caso" className="btn-primario btn-pulso">
            Contar mi caso
          </Link>
          <Link to="/abogados" className="btn-secundario">
            Ver abogados verificados
          </Link>
        </div>
      </header>

      <section className="mt-18 border-t border-linea pt-12">
        <h2 className="display-md">Los cuatro pasos, en detalle</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {PASOS.map((p, i) => (
            <Revelar key={p.titulo} retardo={i * 60}>
              <article className="h-full rounded-[6px] border border-linea bg-papel-hueso p-6">
                <p className="font-mono text-[0.8rem] font-semibold tracking-[0.06em] text-esmeralda">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[1.1rem] font-semibold">{p.titulo}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
                  {p.detalle}
                </p>
                <p className="mt-3 border-t border-linea pt-3 text-[0.9rem] leading-relaxed text-tinta-suave">
                  {p.extra}
                </p>
              </article>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="mt-18 border-t border-linea pt-12">
        <h2 className="display-md">Qué hacemos y qué no hacemos</h2>
        <p className="lectura mt-4 text-tinta-suave">
          Ser explícitos en esto evita malentendidos y protege a las dos partes.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[6px] border border-linea bg-papel-hueso p-6">
            <h3 className="text-[1rem] font-semibold text-esmeralda">Lo que hacemos</h3>
            <ul className="mt-4 space-y-3">
              {SI.map((t) => (
                <li key={t} className="flex gap-3 text-[0.93rem] leading-relaxed text-tinta-suave">
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
          <div className="rounded-[6px] border border-linea bg-papel p-6">
            <h3 className="text-[1rem] font-semibold text-sello">Lo que no hacemos</h3>
            <ul className="mt-4 space-y-3">
              {NO.map((t) => (
                <li key={t} className="flex gap-3 text-[0.93rem] leading-relaxed text-tinta-suave">
                  <X
                    aria-hidden="true"
                    strokeWidth={2}
                    className="mt-0.5 h-4 w-4 shrink-0 text-sello"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-18 border-t border-linea pt-12">
        <div className="flex items-center gap-3">
          <ShieldCheck aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-esmeralda" />
          <h2 className="display-md">Cómo verificamos a los abogados</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VERIFICACION.map((v) => (
            <div key={v.titulo} className="border-t border-esmeralda pt-4">
              <h3 className="text-[0.98rem] font-semibold">{v.titulo}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">{v.detalle}</p>
            </div>
          ))}
        </div>
        <p className="lectura mt-6 text-[0.88rem] leading-relaxed text-tinta-suave">
          La verificación acredita la habilitación para ejercer. No garantiza el resultado del
          proceso: eso depende de los hechos, las pruebas y la decisión judicial.
        </p>
      </section>

      <section className="mt-18 border-t border-linea pt-12">
        <h2 className="display-md">Preguntas frecuentes</h2>
        <div className="mt-8 max-w-[820px]">
          <Acordeon items={FAQS} />
        </div>
      </section>

      <section className="mt-18 rounded-[6px] border border-linea bg-papel-hueso p-8 text-center">
        <h2 className="display-md">¿Listo para contarnos tu caso?</h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-tinta-suave">
          Cuatro a seis minutos ahora pueden ahorrarte semanas de trámites equivocados.
        </p>
        <Link to="/iniciar-caso" className="btn-primario mt-7">
          Contar mi caso
        </Link>
      </section>
    </div>
  );
}

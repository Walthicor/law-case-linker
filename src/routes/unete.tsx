import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo } from "@/lib/seo";
import { PAGINAS } from "@/lib/seo-inventario";
import { BadgeCheck, ClipboardList, Globe, Check, Unlock } from "lucide-react";
import { Acordeon, type ItemAcordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { FormularioPostulacion } from "@/components/sitio/FormularioPostulacion";

const TITULO = "Únete a la red de abogados | Asesorías Jurídicas";
const DESC =
  "Recibe casos ya perfilados en tu área y tu ciudad. Sin exclusividad y sin cuotas de permanencia.";

const QUE_RECIBES = [
  {
    icono: ClipboardList,
    titulo: "Casos calificados",
    texto:
      "Cada caso llega con área, ciudad, urgencia, estado del proceso y la descripción en palabras del cliente.",
  },
  {
    icono: Check,
    titulo: "Decides qué aceptar",
    texto: "Ves el caso antes de comprometerte.",
  },
  {
    icono: Globe,
    titulo: "Perfil público",
    texto: "Tu ficha profesional con tarjeta verificada, indexada en buscadores.",
  },
  {
    icono: Unlock,
    titulo: "Sin exclusividad",
    texto: "Sigues con tus clientes, tu firma y tus canales.",
  },
];

const REQUISITOS = [
  "Tarjeta profesional vigente y sin sanciones",
  "Experiencia demostrable en al menos un área de práctica",
  "Compromiso de contactar los casos asignados en menos de 24 horas hábiles",
  "Póliza de responsabilidad civil profesional (deseable, no obligatorio)",
];

const PROCESO = [
  { n: "01", titulo: "Te postulas", texto: "Llenas el formulario con tus datos verificables." },
  {
    n: "02",
    titulo: "Verificamos tu tarjeta y experiencia",
    texto: "Consultamos el Consejo Superior de la Judicatura y revisamos tu trayectoria.",
  },
  {
    n: "03",
    titulo: "Definimos las condiciones de trabajo",
    texto: "Alcance, tiempos de respuesta y condiciones económicas: {PENDIENTE}.",
  },
  {
    n: "04",
    titulo: "Empiezas a recibir casos",
    texto: "De tu área y tu ciudad, con la información completa del caso.",
  },
];

const FAQ: ItemAcordeon[] = [
  {
    pregunta: "¿Cómo me llegan los casos?",
    respuesta:
      "Por correo y WhatsApp. Cada caso incluye radicado, área, ciudad, urgencia, estado del proceso, documentos que ya tiene el cliente y la descripción en sus propias palabras. Tú respondes si lo tomas o no.",
  },
  {
    pregunta: "¿Puedo rechazar casos?",
    respuesta:
      "Sí, siempre. No hay penalización por rechazar. Solo pedimos que respondas si lo tomas o no dentro de las 24 horas hábiles siguientes, para poder reasignarlo rápido.",
  },
  {
    pregunta: "¿Hay permanencia mínima?",
    respuesta:
      "No. No hay cuotas de permanencia ni contrato de exclusividad. Puedes pausar tu recepción de casos o salir de la red cuando quieras avisándonos por escrito. Las condiciones económicas son {PENDIENTE}.",
  },
  {
    pregunta: "¿Cómo verifican mi tarjeta?",
    respuesta:
      "Consultamos tu número de tarjeta profesional en el Registro Nacional de Abogados del Consejo Superior de la Judicatura y confirmamos que esté vigente y sin sanciones. Si no podemos confirmarla, no publicamos tu ficha.",
  },
  {
    pregunta: "¿Qué pasa con la confidencialidad del cliente?",
    respuesta:
      "La información del caso se comparte solo con el abogado al que se le asigna. Si no lo tomas, debes eliminarla. El tratamiento de datos se hace bajo la Ley 1581 de 2012 y el cliente autoriza expresamente que su caso se comparta con un abogado de la red.",
  },
  {
    pregunta: "¿En qué ciudades operan?",
    respuesta:
      "En 19 ciudades del país. Puedes consultar el detalle en la página de cobertura. Recibes casos de tu ciudad principal y de las ciudades donde declares que ejerces.",
  },
  {
    pregunta: "¿Qué tipo de casos reciben?",
    respuesta:
      "Casos de personas y de pequeñas empresas en 13 áreas: laboral, riesgos laborales, familia, pensiones, tránsito, civil, inmobiliario, insolvencia, comercial, propiedad intelectual, administrativo, penal y migratorio.",
  },
  {
    pregunta: "¿Cuándo empiezo a recibir?",
    respuesta:
      "Cuando termine la verificación y acordemos las condiciones. La verificación toma hasta 5 días hábiles. El volumen depende de la demanda real de tu área y tu ciudad: no prometemos un número fijo de casos.",
  },
];

function jsonLd() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  });
}

export const Route = createFileRoute("/unete")({
  head: () => ({
    ...metaSeo(PAGINAS.unete),
    scripts: [{ type: "application/ld+json", children: jsonLd() }],
  }),
  component: Pagina,
});

function TarjetaCasoEjemplo() {
  return (
    <div className="overflow-hidden rounded-[6px] border border-papel/25 bg-papel">
      <div className="h-[3px] w-full bg-esmeralda" />
      <div className="flex items-center justify-between gap-4 border-b border-linea px-5 py-4">
        <p className="eyebrow">Caso asignado</p>
        <p className="mono-tag text-esmeralda">AJC-2026-73149</p>
      </div>
      <div className="px-5 py-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-[6px] border border-esmeralda bg-esmeralda-claro px-2.5 py-1 text-[0.78rem] font-semibold text-esmeralda">
            Laboral
          </span>
          <span className="rounded-[6px] border border-linea px-2.5 py-1 text-[0.78rem] text-tinta-suave">
            Medellín · Antioquia
          </span>
          <span className="rounded-[6px] border border-sello px-2.5 py-1 text-[0.78rem] font-semibold text-sello">
            Plazo: 12 días
          </span>
        </div>
        <dl className="mt-5 divide-y divide-linea border-y border-linea text-[0.875rem]">
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-tinta-suave">Estado</dt>
            <dd className="text-right font-semibold text-tinta">Voy a iniciar un proceso</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-tinta-suave">Documentos</dt>
            <dd className="text-right font-semibold text-tinta">Contrato y liquidación</dd>
          </div>
          <div className="flex justify-between gap-4 py-2.5">
            <dt className="text-tinta-suave">Calificación</dt>
            <dd className="mono-tag text-right text-esmeralda">TIER A · 84</dd>
          </div>
        </dl>
        <p className="mt-4 text-[0.8125rem] font-semibold text-tinta">En palabras del cliente</p>
        <p className="mt-1.5 text-[0.9rem] leading-relaxed text-tinta-suave">
          «Trabajé 4 años y 7 meses en una empresa de logística. Me despidieron sin justa causa el
          14 de agosto y me liquidaron sin incluir las horas extra ni el recargo nocturno que hacía
          cada semana. Tengo el contrato, los desprendibles y la carta de despido.»
        </p>
      </div>
    </div>
  );
}

function Pagina() {
  return (
    <div className="bg-papel">
      {/* HERO — paleta invertida: esta es la otra puerta del sitio */}
      <section className="bg-tinta text-papel">
        <div className="contenedor grid items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-32">
          <div>
            <div className="mb-6 text-papel/60">
              <Migas items={[{ titulo: "Inicio", to: "/" }, { titulo: "Únete" }]} />
            </div>
            <p className="eyebrow text-esmeralda-lum">Red de abogados</p>
            <h1 className="display-xl mt-4 text-papel">Casos que llegan ya explicados.</h1>
            <p className="mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-papel/75">
              Nosotros hacemos la captación digital. Tú recibes personas que ya describieron su
              situación, en tu área y tu ciudad. Sin cuotas de permanencia.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#postulacion" className="btn-primario btn-pulso">
                Postularme a la red →
              </a>
              <a href="#como-funciona" className="btn-secundario-claro">
                Ver cómo funciona
              </a>
            </div>
          </div>
          <TarjetaCasoEjemplo />
        </div>
      </section>

      {/* QUÉ RECIBES */}
      <section className="contenedor py-20 lg:py-24">
        <Revelar>
          <p className="eyebrow">Qué recibes</p>
          <h2 className="display-lg mt-3">Lo que entra a tu escritorio</h2>
        </Revelar>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUE_RECIBES.map((b, i) => (
            <Revelar key={b.titulo} retardo={i * 60}>
              <div className="border-t border-linea pt-5">
                <b.icono aria-hidden="true" strokeWidth={1.6} className="h-6 w-6 text-esmeralda" />
                <h3 className="mt-4 text-[1.02rem] font-semibold">{b.titulo}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">{b.texto}</p>
              </div>
            </Revelar>
          ))}
        </div>
      </section>

      {/* REQUISITOS */}
      <section className="border-y border-linea bg-papel-hueso py-20 lg:py-24">
        <div className="contenedor grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Revelar>
            <p className="eyebrow">Requisitos para entrar</p>
            <h2 className="display-lg mt-3">Filtramos antes, no después</h2>
            <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-tinta-suave">
              La red es pequeña a propósito. Verificamos cada tarjeta antes de publicar una ficha o
              asignar un caso.
            </p>
          </Revelar>
          <Revelar retardo={80}>
            <ul className="divide-y divide-linea border-y border-linea">
              {REQUISITOS.map((r) => (
                <li key={r} className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-esmeralda text-papel">
                    <Check aria-hidden="true" strokeWidth={2.4} className="h-3 w-3" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-tinta">{r}</span>
                </li>
              ))}
            </ul>
          </Revelar>
        </div>
      </section>

      {/* PROCESO */}
      <section id="como-funciona" className="contenedor py-20 lg:py-24">
        <Revelar>
          <p className="eyebrow">Proceso de ingreso</p>
          <h2 className="display-lg mt-3">Cuatro pasos, sin rodeos</h2>
        </Revelar>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESO.map((p, i) => (
            <Revelar key={p.n} retardo={i * 60} as="li">
              <div className="h-full border-t-2 border-esmeralda pt-5">
                <span className="mono-tag text-esmeralda">{p.n}</span>
                <h3 className="mt-3 text-[1.02rem] font-semibold">{p.titulo}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-tinta-suave">{p.texto}</p>
              </div>
            </Revelar>
          ))}
        </ol>
      </section>

      {/* POSTULACIÓN */}
      <section id="postulacion" className="border-y border-linea bg-papel-hueso py-20 lg:py-24">
        <div className="contenedor grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Revelar>
            <p className="eyebrow">Postulación</p>
            <h2 className="display-lg mt-3">Postúlate a la red</h2>
            <p className="mt-4 max-w-[40ch] text-[0.95rem] leading-relaxed text-tinta-suave">
              La postulación llega directo a MARDIGITAL SAS. Verificamos tu tarjeta ante el Consejo
              Superior de la Judicatura y te respondemos en máximo 5 días hábiles.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-[6px] border border-linea bg-papel p-4">
              <BadgeCheck
                aria-hidden="true"
                strokeWidth={1.6}
                className="mt-0.5 h-5 w-5 shrink-0 text-esmeralda"
              />
              <p className="text-[0.875rem] leading-relaxed text-tinta-suave">
                No publicamos estrellas, reseñas ni porcentajes de casos ganados. Tu ficha muestra
                solo lo que permite el artículo 31 de la Ley 1123 de 2007.
              </p>
            </div>
            <p className="mt-6 text-[0.875rem] text-tinta-suave">
              ¿Quieres ver el resultado antes de postularte?{" "}
              <Link to="/abogados" className="font-semibold text-esmeralda underline underline-offset-4">
                Mira las fichas de la red
              </Link>
              .
            </p>
          </Revelar>
          <Revelar retardo={80}>
            <FormularioPostulacion />
          </Revelar>
        </div>
      </section>

      {/* FAQ */}
      <section className="contenedor py-20 lg:py-24">
        <Revelar>
          <p className="eyebrow">Preguntas de abogados</p>
          <h2 className="display-lg mt-3">Lo que preguntan antes de entrar</h2>
        </Revelar>
        <div className="mt-8 max-w-[820px]">
          <Acordeon items={FAQ} />
        </div>
      </section>
    </div>
  );
}

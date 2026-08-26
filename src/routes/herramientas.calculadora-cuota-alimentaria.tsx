import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { AvisoPlazo } from "@/components/sitio/AvisoPlazo";
import { CalculadoraCuotaAlimentaria } from "@/components/sitio/CalculadoraCuotaAlimentaria";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";

const BASE = "https://asesoriasjuridicas.co";
const RUTA = "/herramientas/calculadora-cuota-alimentaria";
const TITLE = "Calculadora de cuota alimentaria 2026 | Gratis";
const DESCRIPTION =
  "Estima la cuota de alimentos según ingresos, número de hijos y gastos acreditados. Gratis y sin registro.";

const FAQS = [
  {
    pregunta: "¿Cuál es el porcentaje de cuota alimentaria en Colombia?",
    respuesta:
      "No existe un porcentaje legal fijo. Ni el Código de la Infancia y la Adolescencia (Ley 1098 de 2006) ni el Código Civil establecen un número. El juez fija la cuota valorando la capacidad económica del alimentante y las necesidades del menor. Lo que sí tiene tope legal es el embargo del salario por alimentos: hasta el 50%.",
  },
  {
    pregunta: "¿Cómo se prueban los ingresos del alimentante si es independiente?",
    respuesta:
      "Con extractos bancarios, facturación, declaración de renta, contratos, movimientos de plataformas de pago y prueba indirecta del nivel de vida: arriendos, vehículos, viajes, colegios privados o consumos. Los jueces de familia aceptan la prueba indiciaria cuando el obligado oculta ingresos.",
  },
  {
    pregunta: "¿Qué gastos se pueden incluir en la cuota?",
    respuesta:
      "Alimentación, vivienda en la parte proporcional que corresponde al menor, educación (pensión, matrícula, uniformes y útiles), salud (EPS o prepagada, terapias y medicamentos), transporte, vestuario y recreación. Los gastos se acreditan con recibos, facturas y certificaciones del colegio o la EPS.",
  },
  {
    pregunta: "¿La cuota alimentaria sube cada año?",
    respuesta:
      "Sí, cuando la sentencia o el acuerdo lo prevé, se reajusta automáticamente con el IPC o con el incremento del salario mínimo. Si no se pactó reajuste, hay que pedir un aumento de cuota ante el juez de familia demostrando el cambio de circunstancias.",
  },
  {
    pregunta: "¿Se puede pedir cuota provisional mientras avanza el proceso?",
    respuesta:
      "Sí. El juez puede fijar una cuota provisional desde el inicio del proceso, con la prueba sumaria de la existencia del vínculo y de los ingresos del obligado. Esa cuota se cobra desde ya y se ajusta al final con la sentencia.",
  },
  {
    pregunta: "¿Qué pasa si el obligado no paga la cuota?",
    respuesta:
      "El acta de conciliación o la sentencia presta mérito ejecutivo: se puede cobrar por proceso ejecutivo con embargo del salario hasta el 50%, de cuentas bancarias y de bienes. Además, el incumplimiento puede configurar el delito de inasistencia alimentaria del artículo 233 del Código Penal.",
  },
  {
    pregunta: "¿Hasta qué edad se debe pagar la cuota alimentaria?",
    respuesta:
      "Hasta los 18 años en principio, y hasta los 25 si el hijo continúa estudiando y no puede sostenerse por sí mismo. Si hay discapacidad que impida la subsistencia autónoma, la obligación puede extenderse sin límite de edad.",
  },
  {
    pregunta: "¿Esta calculadora sirve como prueba ante un juez?",
    respuesta:
      "No. Es una estimación orientativa para saber en qué orden de magnitud está la cuota antes de conciliar o demandar. El valor legal solo lo fija el acuerdo aprobado o la sentencia del juez de familia.",
  },
];

export const Route = createFileRoute("/herramientas/calculadora-cuota-alimentaria")({
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd()) }],
  }),
  component: Pagina,
});

function jsonLd() {
  const url = BASE + RUTA;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Calculadora de cuota alimentaria",
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      inLanguage: "es-CO",
      offers: { "@type": "Offer", price: "0", priceCurrency: "COP" },
      provider: { "@type": "LegalService", name: "Asesorías Jurídicas Colombia" },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Cómo estimar la cuota alimentaria en Colombia",
      description: DESCRIPTION,
      totalTime: "PT3M",
      step: [
        {
          "@type": "HowToStep",
          name: "Determina los ingresos del alimentante",
          text: "Salario, honorarios o ingresos por actividad independiente, junto con otras obligaciones alimentarias ya fijadas.",
        },
        {
          "@type": "HowToStep",
          name: "Cuenta las personas a cargo",
          text: "Número de hijos beneficiarios de la cuota y otros hijos a cargo del alimentante, con la edad de cada uno.",
        },
        {
          "@type": "HowToStep",
          name: "Acredita los gastos del menor",
          text: "Educación, salud, alimentación, vivienda proporcional y transporte, soportados con recibos y facturas.",
        },
        {
          "@type": "HowToStep",
          name: "Contrasta necesidad y capacidad",
          text: "La cuota debe cubrir la parte proporcional de los gastos sin exceder la capacidad del obligado ni el 50% de su salario.",
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
        { "@type": "ListItem", position: 2, name: "Herramientas", item: `${BASE}/herramientas` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Calculadora de cuota alimentaria",
          item: url,
        },
      ],
    },
  ];
}

function Pagina() {
  return (
    <div className="bg-papel">
      <div className="mx-auto max-w-[900px] px-5 py-12 lg:py-16">
        <Migas
          items={[
            { titulo: "Inicio", to: "/" },
            { titulo: "Herramientas", to: "/herramientas" },
            { titulo: "Calculadora de cuota alimentaria" },
          ]}
        />

        <Revelar>
          <h1 className="display-lg mt-8">Calculadora de cuota alimentaria 2026</h1>
          <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
            Estima la cuota de alimentos según ingresos, número de hijos y gastos acreditados.
          </p>
          <p className="mono-tag mt-5 inline-block rounded-full bg-esmeralda-claro px-3 py-1 text-esmeralda">
            GRATIS · SIN REGISTRO
          </p>
        </Revelar>

        <div className="mt-8">
          <CalculadoraCuotaAlimentaria />
        </div>

        <div className="mt-10">
          <AvisoPlazo
            titulo="Plazos que debes tener presentes"
            texto="El derecho a reclamar alimentos no prescribe mientras el hijo sea menor de edad. Las cuotas ya causadas y no pagadas sí prescriben a los 5 años."
          />
        </div>

        {/* ── CONTENIDO SEO ─────────────────────────────────────── */}
        <div className="mt-16 space-y-14">
          <section>
            <h2 className="display-md">Qué es la cuota alimentaria y quién debe pagarla</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La cuota alimentaria es la suma de dinero con la que un progenitor contribuye al
                sostenimiento de su hijo cuando no convive con él o cuando, conviviendo, no aporta lo
                necesario. No es una ayuda voluntaria ni una compensación al otro progenitor: es una
                obligación legal que nace del vínculo de filiación y cuyo titular es el niño, la niña
                o el adolescente. Por eso el derecho de alimentos es irrenunciable, no se puede
                transar en contra del menor y no desaparece porque los padres hayan acordado «no
                pedirse nada».
              </p>
              <p>
                El concepto de alimentos es más amplio que la comida. Según el artículo 24 de la Ley
                1098 de 2006, comprende todo lo indispensable para el sustento, la habitación, el
                vestido, la asistencia médica, la recreación, la educación o instrucción y, en
                general, todo lo necesario para el desarrollo integral del menor. En la práctica esto
                significa que la cuota debe alcanzar para alimentación, arriendo o vivienda en la
                proporción que corresponde al hijo, pensión de colegio, uniformes y útiles, EPS o
                medicina prepagada, terapias, transporte y una parte razonable de recreación.
              </p>
              <p>
                La obligación recae sobre ambos padres, en proporción a su capacidad económica. El
                progenitor que tiene la custodia también aporta —con dinero y con el trabajo de
                cuidado, que los jueces valoran— y el que no convive con el menor lo hace
                normalmente mediante una cuota mensual. Cuando los padres no pueden sostener al
                menor, la obligación se extiende a abuelos y otros parientes en el orden que fija el
                Código Civil, aunque esa vía es subsidiaria y exige probar que los padres no están en
                condiciones de cumplir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Por qué no existe un porcentaje fijo</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La cifra que más circula en internet y en conversaciones de pasillo es «el 50% del
                salario». Es falsa como regla de fijación. El 50% es el tope máximo de embargo del
                salario por obligaciones alimentarias, es decir, el límite de lo que se puede
                descontar de la nómina para pagar una cuota ya fijada. No es el criterio con el que
                el juez decide cuánto debe pagar el alimentante. Confundir las dos cosas lleva a
                demandas mal planteadas y a acuerdos desequilibrados que después hay que modificar.
              </p>
              <p>
                Lo que hace el juez de familia es cruzar dos variables: la <strong>necesidad</strong>{" "}
                del menor y la <strong>capacidad económica</strong> del obligado. La necesidad se
                prueba con documentos —recibos de colegio, cuentas médicas, arriendo, transporte— y
                se valora en función de la edad y de las condiciones de vida que el menor tenía. La
                capacidad se prueba con la nómina, la declaración de renta, los extractos bancarios
                y, cuando el obligado es independiente y oculta ingresos, con indicios sobre su nivel
                de vida.
              </p>
              <p>
                De ese cruce sale una cuota que casi nunca coincide con un porcentaje redondo. Un
                obligado que gana dos salarios mínimos y tiene tres hijos no puede pagar lo mismo
                que uno que gana quince y tiene uno. Un adolescente en colegio privado con terapias
                cuesta más que un niño de tres años. La calculadora de esta página reproduce ese
                razonamiento: reparte los gastos acreditados entre ambos progenitores, ajusta por
                otros hijos a cargo, aplica un factor por edad y luego verifica que el resultado
                quepa dentro de la capacidad real del alimentante.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Cómo se fija la cuota: acuerdo, conciliación o sentencia</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La primera vía es el <strong>acuerdo</strong> entre los padres. Un acuerdo privado
                sirve mientras se cumple, pero no se puede cobrar de forma inmediata si se incumple.
                Por eso conviene llevarlo a una <strong>conciliación</strong> ante comisario de
                familia, defensor de familia o centro de conciliación autorizado: el acta aprobada
                presta mérito ejecutivo, lo que permite cobrarla por proceso ejecutivo sin volver a
                discutir el fondo del asunto y sin tener que demostrar de nuevo la obligación.
              </p>
              <p>
                Si no hay acuerdo, o si el obligado no asiste a la conciliación, procede la{" "}
                <strong>demanda de fijación de cuota alimentaria</strong> ante el juez de familia por
                el trámite verbal sumario. En la demanda se pide cuota provisional desde el inicio,
                se aportan las pruebas de necesidad y capacidad y se solicitan medidas cautelares:
                embargo del salario hasta el 50%, de cuentas bancarias y de bienes. La cuota
                provisional es clave, porque el proceso puede tomar meses y el menor no puede
                esperar.
              </p>
              <p>
                Cuando la cuota ya existe pero cambiaron las circunstancias —el obligado mejoró o
                empeoró sus ingresos, el hijo entró al colegio, aparecieron gastos médicos— se pide
                el <strong>aumento o la disminución</strong> de la cuota. No basta afirmarlo: hay que
                probar el cambio. Y cuando el obligado desapareció o dejó de pagar, la vía es el
                cobro ejecutivo, que además puede acompañarse de la denuncia penal por inasistencia
                alimentaria del artículo 233 del Código Penal, un delito querellable y conciliable
                que en la práctica funciona como herramienta de presión para lograr el pago.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Acuerdo privado: sirve mientras se cumple, no se cobra directo",
                "Conciliación: el acta presta mérito ejecutivo",
                "Demanda verbal sumaria ante juez de familia",
                "Cuota provisional desde el inicio del proceso",
                "Embargo de salario hasta el 50%, cuentas y bienes",
                "Inasistencia alimentaria: delito del art. 233 del Código Penal",
              ].map((t) => (
                <li key={t} className="tarjeta text-[0.92rem] leading-relaxed">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="display-md">Qué pruebas necesitas reunir</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                Los procesos de alimentos se ganan con documentos, no con relatos. Del lado de la
                necesidad: registro civil de nacimiento del menor, certificación y recibos del
                colegio, cuentas médicas y afiliación a salud, contrato de arriendo y servicios
                públicos, recibos de transporte, gastos de vestuario y cualquier soporte de terapias
                o tratamientos. Conviene organizarlos por mes, porque la cuota se fija sobre un gasto
                mensual promedio y un desorden de facturas debilita la petición.
              </p>
              <p>
                Del lado de la capacidad: certificación laboral y desprendibles de nómina cuando el
                obligado es empleado; declaración de renta, facturación, contratos, movimientos
                bancarios y registros de cámara de comercio cuando es independiente o tiene empresa.
                Si el obligado se declara sin ingresos pero mantiene un nivel de vida evidente,
                sirven las pruebas indiciarias: vehículos a su nombre, viajes, inmuebles, colegios
                privados de otros hijos, publicaciones en redes. El juez de familia puede además
                oficiar a la DIAN, a bancos, a la EPS y al empleador.
              </p>
              <p>
                Un punto que se descuida: los pagos que ya se hicieron. El alimentante que paga debe
                dejar rastro bancario con concepto claro («cuota alimentaria mes de marzo»). Los
                pagos en efectivo sin constancia se pierden y pueden reclamarse de nuevo. Del otro
                lado, quien recibe debe registrar los incumplimientos con la misma disciplina,
                porque son la base del cobro ejecutivo y de la eventual querella penal.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Errores frecuentes que salen caros</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                El primero es pactar una cuota sin cláusula de reajuste. Una cuota fijada hace seis
                años sin indexación pierde una parte importante de su valor real; sin cláusula, hay
                que iniciar un proceso de aumento y probar el cambio de circunstancias. Lo correcto
                es pactar el reajuste automático anual con el IPC o con el incremento del salario
                mínimo, y decir expresamente qué gastos extraordinarios —matrícula, útiles,
                tratamientos— se pagan aparte y en qué proporción.
              </p>
              <p>
                El segundo es renunciar a alimentos en el divorcio o en la conciliación de custodia.
                Los derechos del menor son irrenunciables: la cláusula es ineficaz y solo genera la
                falsa sensación de que el asunto quedó cerrado. El tercero es aceptar pagos «en
                especie» sin registro: mercados, ropa y regalos ayudan, pero no reemplazan la cuota y
                casi nunca se reconocen como abono si no hay soporte.
              </p>
              <p>
                El cuarto es esperar. Las cuotas causadas y no pagadas prescriben, y cada mes que
                pasa sin reclamar es dinero que se pierde de manera definitiva. Mientras el hijo sea
                menor de edad el derecho a pedir alimentos sigue vivo, pero eso no revive lo que ya
                prescribió. Actuar dentro del primer año de incumplimiento es lo que permite
                recuperar el retroactivo completo.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link
                to="/areas/$silo"
                params={{ silo: "familia" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">ÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Derecho de familia en Colombia
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "familia", subarea: "alimentos" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Cuota alimentaria: fijación, aumento y cobro
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "familia", subarea: "custodia" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Custodia y régimen de visitas
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
            Esta calculadora entrega una estimación orientativa construida con criterios de práctica
            judicial. En Colombia no existe un porcentaje legal fijo de cuota alimentaria: el valor
            definitivo lo fija el acuerdo conciliado o la sentencia del juez de familia. No
            constituye asesoría jurídica.
          </p>
        </div>
      </div>
    </div>
  );
}

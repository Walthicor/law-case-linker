import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo, SITIO } from "@/lib/seo";
import { seoHerramienta } from "@/lib/seo-inventario";
import { AlarmClock, ArrowRight } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { CalculadoraLiquidacion } from "@/components/sitio/CalculadoraLiquidacion";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";

const BASE = SITIO;
const RUTA = "/herramientas/calculadora-liquidacion-laboral";
const TITLE = "Calculadora de liquidación laboral 2026 | Gratis";
const DESCRIPTION =
  "Calcula cesantías, intereses, prima, vacaciones e indemnización según el Código Sustantivo del Trabajo.";

const FAQS = [
  {
    pregunta: "¿Cómo se calcula la liquidación laboral en Colombia?",
    respuesta:
      "Se suman cuatro conceptos: cesantías (salario base × días trabajados ÷ 360), intereses sobre cesantías (cesantías × días × 12% ÷ 360), prima de servicios (salario base × días del semestre ÷ 360) y vacaciones (salario mensual × días trabajados ÷ 720). Si el despido fue sin justa causa, se agrega la indemnización del artículo 64 del CST.",
  },
  {
    pregunta: "¿El auxilio de transporte entra en la liquidación?",
    respuesta:
      "Sí, para cesantías, intereses y prima de servicios, porque la ley lo considera factor salarial para esas prestaciones. No se incluye para liquidar vacaciones, que se calculan solo sobre el salario.",
  },
  {
    pregunta: "¿Me liquidan si renuncio?",
    respuesta:
      "Sí. La renuncia no afecta las prestaciones causadas: te deben cesantías, intereses, prima y vacaciones proporcionales. Lo único que no se paga cuando renuncias es la indemnización por despido.",
  },
  {
    pregunta: "¿Cuánto es la indemnización por despido sin justa causa?",
    respuesta:
      "En contrato a término indefinido, 30 días de salario por el primer año y 20 días por cada año adicional si ganas menos de 10 SMLMV; 20 días por el primer año y 15 por año adicional si ganas 10 SMLMV o más. En contrato a término fijo, los salarios del tiempo que faltaba para el vencimiento.",
  },
  {
    pregunta: "¿En cuánto tiempo deben pagarme la liquidación?",
    respuesta:
      "Al terminar el contrato. Si el empleador no paga los salarios y prestaciones al momento de la terminación, se causa la sanción moratoria del artículo 65 del CST: un día de salario por cada día de retraso durante los primeros 24 meses.",
  },
  {
    pregunta: "¿Cuánto tiempo tengo para reclamar mi liquidación?",
    respuesta:
      "Las acciones laborales prescriben en 3 años contados desde que la obligación se hizo exigible. Una reclamación escrita al empleador interrumpe el término por una sola vez y por igual periodo.",
  },
  {
    pregunta: "¿Se descuenta salud y pensión de la liquidación?",
    respuesta:
      "No. Cesantías, intereses, prima, vacaciones e indemnización no son base de cotización a seguridad social. Sí pueden descontarse deudas expresamente autorizadas por el trabajador o embargos judiciales.",
  },
  {
    pregunta: "¿Esta calculadora sirve como prueba en un proceso?",
    respuesta:
      "Es una estimación con las fórmulas generales del CST y sirve para saber si lo que te ofrecen tiene sentido. El valor definitivo depende de tu contrato, comisiones, salario variable y pactos convencionales, y debe revisarlo un abogado laboral.",
  },
];

export const Route = createFileRoute("/herramientas/calculadora-liquidacion-laboral")({
  head: () => ({
    ...metaSeo(seoHerramienta("liquidacion")),
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
      name: "Calculadora de liquidación laboral",
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
      name: "Cómo calcular la liquidación laboral en Colombia",
      description: DESCRIPTION,
      totalTime: "PT3M",
      step: [
        {
          "@type": "HowToStep",
          name: "Reúne los datos del contrato",
          text: "Salario mensual básico, auxilio de transporte, fecha de inicio, fecha de terminación y días de vacaciones ya disfrutados.",
        },
        {
          "@type": "HowToStep",
          name: "Calcula cesantías e intereses",
          text: "Cesantías: salario base por días trabajados dividido en 360. Intereses: cesantías por días trabajados por 0,12 dividido en 360.",
        },
        {
          "@type": "HowToStep",
          name: "Calcula prima y vacaciones",
          text: "Prima: salario base por días del semestre dividido en 360. Vacaciones: salario mensual por días trabajados dividido en 720.",
        },
        {
          "@type": "HowToStep",
          name: "Agrega la indemnización si el despido fue sin justa causa",
          text: "En contrato indefinido, 30 días el primer año y 20 por año adicional si ganas menos de 10 SMLMV; 20 y 15 días si ganas más.",
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
          name: "Calculadora de liquidación laboral",
          item: url,
        },
      ],
    },
  ];
}

function Formula({ children }: { children: string }) {
  return (
    <p className="mt-3 rounded-[4px] border border-linea bg-papel-hueso px-4 py-3 font-mono text-[0.85rem] leading-relaxed text-tinta">
      {children}
    </p>
  );
}

function Pagina() {
  return (
    <div className="bg-papel">
      <div className="mx-auto max-w-[900px] px-5 py-12 lg:py-16">
        <Migas
          items={[
            { titulo: "Inicio", to: "/" },
            { titulo: "Herramientas", to: "/herramientas" },
            { titulo: "Calculadora de liquidación laboral" },
          ]}
        />

        <Revelar>
          <h1 className="display-lg mt-8">Calculadora de liquidación laboral 2026</h1>
          <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
            Calcula cesantías, intereses, prima, vacaciones e indemnización según el Código
            Sustantivo del Trabajo. Gratis y sin registro.
          </p>
          <p className="mono-tag mt-5 inline-block rounded-full bg-esmeralda-claro px-3 py-1 text-esmeralda">
            GRATIS · SIN REGISTRO
          </p>
        </Revelar>

        <div className="mt-8">
          <CalculadoraLiquidacion />
        </div>

        {/* ── CONTENIDO SEO ─────────────────────────────────────── */}
        <div className="mt-16 space-y-14">
          <section>
            <h2 className="display-md">Qué incluye una liquidación laboral en Colombia</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La liquidación laboral es el pago final que el empleador debe hacer cuando termina
                un contrato de trabajo, sin importar quién lo terminó ni por qué. No es una
                indemnización ni una gratificación: son prestaciones que el trabajador ya causó
                mientras estuvo vinculado y que se pagan de forma proporcional al tiempo servido.
                Por eso se liquida igual cuando el trabajador renuncia, cuando lo despiden con justa
                causa, cuando termina un contrato a término fijo o cuando las partes acuerdan
                terminar la relación de mutuo acuerdo.
              </p>
              <p>
                Los cuatro conceptos que siempre entran son las cesantías, los intereses sobre
                cesantías, la prima de servicios y las vacaciones no disfrutadas. A ellos se suman
                los salarios pendientes del último periodo, las horas extras, los recargos
                nocturnos, dominicales y festivos que no se hayan pagado, y las comisiones causadas
                aunque se liquiden después. Cuando el contrato termina sin justa causa por decisión
                del empleador, se agrega un concepto distinto: la indemnización del artículo 64 del
                Código Sustantivo del Trabajo, que no es prestación social sino reparación por la
                terminación unilateral.
              </p>
              <p>
                La base de cálculo se llama salario base y no siempre coincide con el sueldo que
                aparece en el contrato. Incluye el salario ordinario más todo lo que constituye
                salario: comisiones, horas extras habituales, recargos, bonificaciones no pactadas
                como no salariales y el auxilio de transporte cuando el trabajador lo recibe. El
                auxilio de transporte entra para cesantías, intereses y prima, pero no para
                vacaciones. Ese detalle, aparentemente menor, cambia el resultado en decenas de
                miles de pesos por año trabajado y es una de las diferencias más comunes entre lo
                que ofrece la empresa y lo que realmente corresponde.
              </p>
              <p>
                Un punto que genera confusión permanente es el de los pagos etiquetados como «no
                salariales». Bonificaciones mensuales fijas, auxilios de alimentación entregados en
                dinero de manera habitual o «bonos de desempeño» que se pagan siempre son salario en
                sentido material, aunque el contrato diga lo contrario. La jurisprudencia laboral
                mira la realidad sobre las formas: si el pago retribuye directamente el servicio y
                es habitual, es salario y debe entrar a la liquidación. Cuando el salario tiene
                componente variable —comisiones o producción—, el promedio del último año es la base
                que suele aplicarse.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Cesantías proporcionales al tiempo servido",
                "Intereses sobre cesantías del 12% anual",
                "Prima de servicios del semestre en curso",
                "Vacaciones causadas y no disfrutadas",
                "Salarios, horas extras y recargos pendientes",
                "Indemnización si el despido fue sin justa causa",
              ].map((t) => (
                <li key={t} className="tarjeta text-[0.92rem] leading-relaxed">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="display-md">Cómo se calcula cada concepto</h2>
            <p className="lectura mt-5 text-tinta-suave">
              Todas las fórmulas laborales colombianas usan un año comercial de 360 días y meses de
              30 días. Esa convención simplifica el cálculo y es la que aplican los jueces
              laborales, el Ministerio del Trabajo y las áreas de nómina.
            </p>

            <h3 className="mt-8 text-[1.05rem] font-semibold">Cesantías</h3>
            <p className="lectura mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
              Equivalen a un mes de salario por cada año trabajado y proporcional por fracción. Se
              liquidan sobre el salario base, que incluye el auxilio de transporte cuando se recibe.
              Si el salario cambió en los últimos tres meses, se toma el promedio de ese periodo.
            </p>
            <Formula>cesantías = salario base × días trabajados ÷ 360</Formula>

            <h3 className="mt-8 text-[1.05rem] font-semibold">Intereses sobre cesantías</h3>
            <p className="lectura mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
              Corresponden al 12% anual sobre el valor de las cesantías, proporcional al tiempo. Se
              pagan directamente al trabajador, no al fondo de cesantías, y su omisión es una de las
              más frecuentes en liquidaciones mal hechas.
            </p>
            <Formula>intereses = cesantías × días trabajados × 0,12 ÷ 360</Formula>

            <h3 className="mt-8 text-[1.05rem] font-semibold">Prima de servicios</h3>
            <p className="lectura mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
              Equivale a 30 días de salario por año, pagados en dos cuotas: una en junio y otra en
              diciembre. Al liquidar, se paga la fracción del semestre en curso contada desde el 1
              de enero o el 1 de julio, según corresponda.
            </p>
            <Formula>prima = salario base × días trabajados en el semestre ÷ 360</Formula>

            <h3 className="mt-8 text-[1.05rem] font-semibold">Vacaciones</h3>
            <p className="lectura mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
              Son 15 días hábiles de descanso remunerado por año. Al terminar el contrato, los días
              no disfrutados se compensan en dinero sobre el salario ordinario, sin auxilio de
              transporte, descontando lo ya disfrutado.
            </p>
            <Formula>
              vacaciones = salario mensual × días trabajados ÷ 720 − días ya disfrutados
            </Formula>

            <h3 className="mt-8 text-[1.05rem] font-semibold">Indemnización por despido</h3>
            <p className="lectura mt-3 text-[0.95rem] leading-relaxed text-tinta-suave">
              Solo se causa cuando el empleador termina el contrato sin justa causa. Se liquida en
              días de salario según la duración del contrato y el nivel salarial, y es el concepto
              con mayor peso económico en la mayoría de los casos.
            </p>
            <Formula>
              indefinido, menos de 10 SMLMV: 30 días el primer año + 20 días por año adicional ·
              indefinido, 10 SMLMV o más: 20 días el primer año + 15 días por año adicional ·
              término fijo: salarios del tiempo faltante
            </Formula>
          </section>

          <section>
            <h2 className="display-md">Cuándo te corresponde indemnización por despido</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La indemnización se causa cuando el empleador termina el contrato sin justa causa,
                cuando invoca una causal que no existe o que no prueba, y cuando el trabajador
                renuncia de forma motivada porque el empleador incurrió en una conducta grave
                —impago de salarios, traslado abusivo, acoso, incumplimiento de obligaciones—.
                Esa última figura se llama despido indirecto y produce los mismos efectos económicos
                que un despido sin justa causa.
              </p>
              <p>
                Las justas causas están enumeradas en el artículo 62 del Código Sustantivo del
                Trabajo y son taxativas: engaño en la contratación, violencia o malos tratos, daño
                material intencional, revelación de secretos, incumplimiento grave de obligaciones,
                ineptitud, entre otras. La carga de probarlas es del empleador, y el procedimiento
                importa tanto como el motivo: cuando la causal se funda en la conducta del
                trabajador, debe existir un llamado a descargos previo en el que se le permita
                explicarse. Un despido con causal cierta pero sin descargos suele terminar
                indemnizado.
              </p>
              <p>
                Hay trabajadores con protección reforzada frente al despido: mujeres en embarazo o
                lactancia, trabajadores con fuero sindical, aforados por acoso laboral, personas en
                situación de discapacidad o con incapacidades prolongadas y quienes están
                próximos a cumplir requisitos de pensión bajo la figura del prepensionado. En esos
                casos el despido sin autorización previa del Ministerio del Trabajo o del juez es
                ineficaz, y la consecuencia no es solo indemnizatoria sino el reintegro con salarios
                y prestaciones dejados de percibir.
              </p>
            </div>
            <p className="mt-6 text-[0.9rem] leading-relaxed text-tinta-suave">
              Si tu caso es un despido, revisa las causales, la prueba y los plazos en{" "}
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "laboral", subarea: "despido-sin-justa-causa" }}
                className="text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
              >
                despido sin justa causa
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="display-md">En cuánto tiempo deben pagarte la liquidación</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                La regla es simple: la liquidación se paga al momento de terminar el contrato. No
                existe un plazo legal de 30, 60 o 90 días, aunque muchas empresas lo afirmen. Lo que
                sí existe es una consecuencia económica cuando el pago se retrasa sin razón válida:
                la sanción moratoria del artículo 65 del Código Sustantivo del Trabajo, que
                convierte cada día de demora en un día de salario adicional a favor del trabajador
                durante los primeros veinticuatro meses, y a partir de ahí en intereses moratorios a
                la tasa máxima de créditos de libre asignación.
              </p>
              <p>
                Para trabajadores que ganan un salario mínimo, la sanción opera si el empleador no
                paga ni consigna el valor de la liquidación ante un juez dentro de los términos
                legales. La sanción no es automática en todos los casos: los jueces exigen mala fe
                del empleador, es decir, ausencia de una razón seria y objetiva para no pagar. Una
                discusión genuina sobre el monto puede exonerarlo; el silencio, la evasión o el
                condicionamiento del pago a la firma de un acuerdo, no.
              </p>
            </div>
            <div className="aviso-plazo mt-7 flex gap-3">
              <AlarmClock
                className="mt-0.5 h-5 w-5 shrink-0 text-sello"
                aria-hidden="true"
                strokeWidth={1.7}
              />
              <div>
                <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-sello">
                  Sanción moratoria: un día de salario por cada día de retraso
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta">
                  Si el empleador no paga tu liquidación al terminar el contrato, el artículo 65 del
                  CST le impone pagar un día de salario por cada día de mora durante los primeros 24
                  meses. Con un salario de $2.000.000, tres meses de retraso equivalen a $6.000.000
                  adicionales. La reclamación escrita es lo que fija la fecha desde la cual se
                  cuenta. {/* VERIFICAR CON ABOGADO */}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="display-md">Qué hacer si tu empleador no te paga</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                El primer paso es reclamar por escrito. Una carta o correo dirigido al empleador,
                con fecha y constancia de recibido, que detalle los conceptos y el valor reclamado,
                cumple tres funciones: fija la fecha desde la cual se cuenta la mora, interrumpe por
                una vez el término de prescripción de tres años y suele resolver el asunto sin
                proceso, porque muchas empresas pagan cuando ven que el trabajador cuantificó bien
                lo que le deben.
              </p>
              <p>
                Si no hay respuesta, la vía puede ser administrativa o judicial. La querella ante el
                Ministerio del Trabajo permite pedir una inspección y presionar el pago, aunque el
                Ministerio no puede condenar a pagar. La demanda ordinaria laboral sí: el juez
                ordena el pago de la liquidación, la indemnización cuando aplica, la sanción
                moratoria y las costas. Cuando existe un documento que reconoce la deuda —una
                liquidación firmada y no pagada, por ejemplo— puede intentarse el proceso ejecutivo,
                que es más corto porque no discute la existencia de la obligación.
              </p>
              <p>
                Antes de firmar cualquier acuerdo conviene revisar dos cosas. La primera es la
                imputación: un pago parcial recibido «a buena cuenta» no extingue el resto. La
                segunda es la transacción: firmar una liquidación con cláusula de renuncia total a
                reclamaciones puede cerrar la puerta a la indemnización y a la sanción moratoria,
                aunque los derechos ciertos e indiscutibles son irrenunciables por mandato
                constitucional. Reunir la prueba antes de firmar —contrato, desprendibles, correos,
                carta de terminación, planillas de seguridad social— es lo que hace viable cualquier
                reclamación posterior.
              </p>
              <p>
                Las acciones laborales prescriben en tres años contados desde que cada obligación se
                hizo exigible. Ese plazo corre en silencio: el trabajador que espera «a ver si
                pagan» suele perder los conceptos más antiguos. Actuar dentro de los primeros meses
                es lo que permite reclamar todo el paquete, con sanción moratoria incluida.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link
                to="/areas/$silo"
                params={{ silo: "laboral" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">ÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Derecho laboral en Colombia
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "laboral", subarea: "liquidacion" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Liquidación laboral: qué te deben y cuándo
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link to="/guias" className="tarjeta group block h-full">
                <p className="eyebrow">GUÍA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Cómo calcular tu liquidación paso a paso
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
            Esta calculadora ofrece una estimación con base en las fórmulas generales del Código
            Sustantivo del Trabajo. El valor definitivo puede variar según pactos convencionales,
            salario variable, comisiones u otras circunstancias particulares de tu contrato. No
            constituye asesoría jurídica.
          </p>
        </div>
      </div>
    </div>
  );
}

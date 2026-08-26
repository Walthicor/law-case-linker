import { createFileRoute, Link } from "@tanstack/react-router";
import { metaSeo, SITIO } from "@/lib/seo";
import { seoHerramienta } from "@/lib/seo-inventario";
import { AlarmClock, ArrowRight } from "lucide-react";
import { Acordeon } from "@/components/sitio/Acordeon";
import { Migas } from "@/components/sitio/Migas";
import { Revelar } from "@/components/sitio/Revelar";
import { GeneradorArrendamiento } from "@/components/sitio/generadores/GeneradorArrendamiento";

const BASE = SITIO;
const RUTA = "/herramientas/contrato-de-arrendamiento";
const TITLE = "Contrato de arrendamiento 2026 | Gratis";
const DESCRIPTION =
  "Genera tu contrato de arrendamiento de vivienda urbana según la Ley 820 de 2003 y descárgalo en PDF.";

const FAQS = [
  {
    pregunta: "¿El contrato de arrendamiento debe ser escrito?",
    respuesta:
      "La Ley 820 de 2003 admite el contrato verbal, pero exige que consten por escrito ciertos elementos y, en la práctica, sin documento es muy difícil probar el canon, el plazo, el inventario y las obligaciones. Siempre conviene escribirlo y firmarlo por duplicado.",
  },
  {
    pregunta: "¿Pueden pedirme un depósito en dinero?",
    respuesta:
      "No. El artículo 16 de la Ley 820 de 2003 prohíbe exigir depósitos en dinero u otra caución real para garantizar el cumplimiento del contrato de vivienda urbana. La garantía admitida es el codeudor, la póliza de arrendamiento o el aval de una afianzadora.",
  },
  {
    pregunta: "¿Cuánto puede subir el canon cada año?",
    respuesta:
      "Hasta el 100% del incremento del índice de precios al consumidor del año calendario anterior, y solo después de doce meses de ejecución del contrato. Cualquier aumento superior es ineficaz y el arrendatario puede reclamar la diferencia.",
  },
  {
    pregunta: "¿Cuál es la duración mínima del contrato?",
    respuesta:
      "Las partes fijan el plazo libremente y, si no lo pactan, la ley presume doce meses. El contrato se prorroga automáticamente por periodos iguales si ambas partes cumplen y no hay aviso de terminación en los términos legales.",
  },
  {
    pregunta: "¿Cómo termina el arrendatario el contrato antes del plazo?",
    respuesta:
      "Puede terminarlo unilateralmente en cualquier tiempo dando aviso escrito con tres meses de antelación y pagando una indemnización equivalente a tres meses de canon. Durante las prórrogas el preaviso legal y el pago se reducen a mes y medio.",
  },
  {
    pregunta: "¿Quién paga las reparaciones?",
    respuesta:
      "El arrendador responde por las reparaciones necesarias para que el inmueble sirva a su destinación, incluidas las estructurales y de instalaciones. El arrendatario paga las reparaciones locativas derivadas de su propio uso y responde por los daños que cause.",
  },
  {
    pregunta: "¿Qué pasa si el arrendatario no paga?",
    respuesta:
      "La mora es causal de terminación y habilita el proceso de restitución del inmueble arrendado ante el juez civil. Si el arrendatario no consigna los cánones dentro del proceso, no se le oye en su defensa y el trámite avanza más rápido.",
  },
  {
    pregunta: "¿Se puede prohibir el subarriendo?",
    respuesta:
      "El subarriendo y la cesión requieren autorización escrita del arrendador, y hacerlo sin ella es causal de terminación. Conviene dejar la cláusula expresa para evitar discusiones sobre autorizaciones verbales.",
  },
];

export const Route = createFileRoute("/herramientas/contrato-de-arrendamiento")({
  head: () => ({
    ...metaSeo(seoHerramienta("arrendamiento")),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Generador de contrato de arrendamiento de vivienda",
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
            name: "Cómo hacer un contrato de arrendamiento de vivienda",
            step: [
              {
                "@type": "HowToStep",
                name: "Identifica a las partes",
                text: "Nombres y documentos del arrendador, del arrendatario y del codeudor si existe.",
              },
              {
                "@type": "HowToStep",
                name: "Describe el inmueble",
                text: "Dirección exacta, área, dependencias, parqueadero y depósito.",
              },
              {
                "@type": "HowToStep",
                name: "Pacta canon, plazo y garantía",
                text: "Valor, forma y día de pago, duración, incremento anual con tope del IPC y garantía admitida por la ley.",
              },
              {
                "@type": "HowToStep",
                name: "Levanta el inventario y firma",
                text: "Relaciona el estado del inmueble y los bienes entregados, y firma por duplicado.",
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
                name: "Generador de contrato de arrendamiento",
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
              { titulo: "Generador de contrato de arrendamiento" },
            ]}
          />

          <Revelar>
            <h1 className="display-lg mt-8">
              Generador de contrato de arrendamiento de vivienda 2026
            </h1>
            <p className="lectura mt-4 text-[1.05rem] leading-relaxed text-tinta">
              Contrato de vivienda urbana ajustado a la Ley 820 de 2003.
            </p>
            <p className="mono-tag mt-5 inline-block rounded-full bg-esmeralda-claro px-3 py-1 text-esmeralda">
              GRATIS · SIN REGISTRO
            </p>
          </Revelar>
        </div>

        <div className="mt-10">
          <GeneradorArrendamiento />
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
                Nota legal sobre depósitos
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-tinta">
                La Ley 820 de 2003 prohíbe exigir depósitos en dinero para garantizar el cumplimiento
                del contrato de arrendamiento de vivienda urbana. {/* VERIFICAR CON ABOGADO */}
              </p>
            </div>
          </div>

          <section>
            <h2 className="display-md">Qué regula la Ley 820 de 2003</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                El arrendamiento de vivienda urbana en Colombia tiene su propio régimen: la Ley 820
                de 2003, que se aplica con preferencia sobre las reglas generales del Código Civil.
                Su lógica es equilibrar la posición de las partes, y para eso fija normas de orden
                público que no pueden modificarse por acuerdo: la prohibición de depósitos en dinero,
                el tope del incremento anual, las causales de terminación y los preavisos.
              </p>
              <p>
                El objeto del contrato es la entrega de un inmueble destinado a vivienda para su uso
                y goce a cambio de un precio. La destinación importa: si el inmueble se usa para
                comercio, industria u oficina, el contrato deja de regirse por la Ley 820 y pasa al
                régimen del Código de Comercio o del Código Civil, con consecuencias distintas en
                renovación, precio y terminación.
              </p>
              <p>
                El contrato puede ser individual, mancomunado, compartido o de pensión, según cómo se
                comparta el inmueble y quiénes se obliguen. La modalidad determina la
                responsabilidad: en el arrendamiento mancomunado varias personas responden
                solidariamente por la totalidad del canon, y en el compartido cada arrendatario
                responde por su parte respecto de zonas privadas y comparte las comunes.
              </p>
              <p>
                Un elemento que la ley protege de manera especial es el recibo de pago. El arrendador
                está obligado a expedir comprobante de cada canon recibido, y su negativa no exonera
                al arrendatario, quien puede acudir al pago por consignación ante una entidad
                autorizada para no quedar en mora. Ese mecanismo evita el escenario clásico en que el
                arrendatario paga en efectivo sin constancia y después no puede probarlo.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Cláusulas que no pueden faltar</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <h3 className="text-[1.05rem] font-semibold text-tinta">
                Identificación del inmueble
              </h3>
              <p>
                Dirección exacta con número de apartamento o casa, ciudad, área, dependencias,
                parqueadero y depósito. Cuando el inmueble está sometido a propiedad horizontal,
                conviene mencionar el reglamento y la obligación de cumplirlo, porque muchas
                controversias con la administración terminan afectando la relación arrendaticia.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Canon, forma y día de pago
              </h3>
              <p>
                El canon de vivienda urbana no puede exceder el 1% del valor comercial del inmueble o
                de la parte arrendada. Debe pactarse el valor, el medio de pago, el día del mes y el
                lugar. La precisión evita discusiones sobre mora: si el contrato dice «primeros cinco
                días», el sexto día ya hay incumplimiento.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Incremento anual con tope del IPC
              </h3>
              <p>
                Cumplidos doce meses de ejecución, el arrendador puede aumentar el canon hasta el
                100% del incremento del IPC del año calendario anterior, informándolo por escrito.
                Cualquier cláusula que fije un incremento superior o que permita aumentos antes del
                año es ineficaz, y lo pagado en exceso puede reclamarse.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Garantía sin depósitos
              </h3>
              <p>
                La garantía admitida es personal o mediante seguro: codeudor solidario, póliza de
                arrendamiento o aval de afianzadora. Están prohibidos los depósitos en dinero y las
                cauciones reales sobre el patrimonio del arrendatario. Cuando hay codeudor, debe
                firmar el contrato y quedar identificado, porque su obligación es solidaria y se
                extiende a las prórrogas pactadas.
              </p>
              <h3 className="mt-6 text-[1.05rem] font-semibold text-tinta">
                Servicios públicos e inventario
              </h3>
              <p>
                Debe quedar claro qué servicios paga cada parte y qué ocurre con las reconexiones y
                sanciones por mora. El inventario de entrega, con el estado de pisos, paredes,
                grifería, electrodomésticos y llaves, es la prueba que evita el conflicto más común al
                final del contrato: quién responde por qué daño.
              </p>
            </div>
          </section>

          <section>
            <h2 className="display-md">Terminación, preavisos y restitución</h2>
            <div className="lectura mt-5 space-y-4 text-tinta-suave">
              <p>
                El arrendatario puede terminar el contrato unilateralmente en cualquier momento del
                plazo inicial, con aviso escrito de tres meses y pago de una indemnización
                equivalente a tres meses de canon; durante las prórrogas, el preaviso y la
                indemnización se reducen a mes y medio si se cumplen las condiciones legales. Esa
                facultad no puede eliminarse por contrato.
              </p>
              <p>
                El arrendador puede terminar por las causales del artículo 22 —mora, subarriendo no
                autorizado, destinación distinta, daños, mejoras no autorizadas, violación de
                reglamentos— y también a la expiración del plazo invocando las causales especiales
                del artículo 24, con preaviso de tres meses y, en algunos casos, indemnización
                equivalente a tres meses de canon consignada previamente.
              </p>
              <p>
                Cuando el arrendatario no entrega el inmueble, la vía es el proceso de restitución de
                inmueble arrendado ante el juez civil. Es un proceso relativamente rápido cuando la
                prueba está completa: contrato, prueba del canon y de la mora, y preaviso. Su regla
                más determinante es que el arrendatario demandado por mora debe consignar los cánones
                para ser oído en su defensa.
              </p>
              <p>
                Al terminar, el arrendatario debe restituir el inmueble en el estado en que lo
                recibió, salvo el deterioro natural del uso legítimo, y entregar los recibos de
                servicios al día. El inventario firmado al inicio es lo que convierte esa obligación
                en algo verificable y no en una discusión de percepciones.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link
                to="/areas/$silo"
                params={{ silo: "civil" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">ÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Derecho civil y contratos
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "civil", subarea: "arrendamientos" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Restitución de inmueble arrendado
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="mt-4 h-4 w-4 text-esmeralda transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/areas/$silo/$subarea"
                params={{ silo: "civil", subarea: "incumplimiento-de-contrato" }}
                className="tarjeta group block h-full"
              >
                <p className="eyebrow">SUBÁREA</p>
                <h3 className="mt-3 font-semibold group-hover:text-esmeralda">
                  Demanda por incumplimiento de contrato
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

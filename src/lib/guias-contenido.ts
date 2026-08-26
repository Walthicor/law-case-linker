/**
 * Contenido real de las guías publicadas.
 *
 * REGLA E-E-A-T: ninguna guía se publica sin revisor acreditado. Mientras el
 * abogado revisor no esté confirmado, el campo queda con los marcadores
 * {NOMBRE DEL ABOGADO} y {T.P.} — // VERIFICAR CON ABOGADO
 *
 * REGLA DE ENLAZADO: cada guía solo enlaza dentro de SU silo.
 */

import type { ContenidoGuia, Revisor } from "./guias";

// VERIFICAR CON ABOGADO — reemplazar por el revisor real antes de indexar.
function revisorPendiente(area: string, ciudad: string): Revisor {
  return {
    nombre: "{NOMBRE DEL ABOGADO}",
    tarjeta: "T.P. {T.P.}",
    area,
    ciudad,
    perfil: "/abogados",
    iniciales: "AJ",
  };
}

/* ------------------------------------------------------------------ */
/* 1. Cómo hacer un derecho de petición — silo administrativo          */
/* ------------------------------------------------------------------ */

const derechoDePeticion: ContenidoGuia = {
  slug: "derecho-de-peticion-guia",
  silo: "administrativo",
  h1: "Cómo hacer un derecho de petición en Colombia",
  title: "Cómo hacer un derecho de petición en Colombia",
  description:
    "Cómo hacer un derecho de petición paso a paso: qué debe contener, dónde radicarlo y en cuántos días deben responderte.",
  extracto:
    "Qué debe contener, dónde se radica y en cuántos días están obligados a responderte, con el texto de la Ley 1755.",
  resumen:
    "Para hacer un derecho de petición no necesitas abogado ni formato oficial: basta un escrito con tus datos, la autoridad a la que te diriges, los hechos, lo que pides y la dirección donde quieres la respuesta. La entidad tiene 15 días hábiles para responder de fondo; 10 días si pides información y 30 días si pides una consulta. Si no responden dentro del plazo, se vulnera un derecho fundamental y procede la acción de tutela.",
  publicada: "2026-01-20",
  actualizada: "2026-08-20",
  revisor: revisorPendiente("Derecho administrativo", "Bogotá"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Hacer un derecho de petición en Colombia es más simple de lo que la mayoría cree. No existe un formulario obligatorio, no hay que pagar nada, no se necesita abogado y ninguna entidad puede exigirte requisitos que la ley no pide. Un derecho de petición es, literalmente, un escrito en el que le dices a una autoridad —o a un particular que presta un servicio público— quién eres, qué te pasó, qué le pides y a dónde quieres que te responda.",
            "La fuerza del derecho de petición no está en la forma sino en el efecto: desde el momento en que lo radicas empieza a correr un plazo perentorio para que la entidad te responda de fondo. Si ese plazo vence sin respuesta, no estás ante un simple retraso administrativo: estás ante la vulneración de un derecho fundamental (artículo 23 de la Constitución) y puedes acudir de inmediato a una acción de tutela, que se falla en 10 días.",
            "Esa es la razón por la que el derecho de petición es la primera herramienta que un abogado usa frente al Estado. Antes de demandar, antes de tutelar, antes de conciliar: se pide por escrito. El escrito fija la fecha, obliga a la entidad a pronunciarse y construye la prueba documental de que reclamaste a tiempo. Muchos casos se resuelven ahí, sin proceso judicial, simplemente porque la entidad prefiere responder antes que exponerse a una tutela y a un eventual desacato contra el funcionario.",
            "En esta guía encontrarás qué dice exactamente la Ley 1755 de 2015, qué debe contener el escrito, los plazos reales de respuesta según lo que pidas, cómo radicarlo dejando constancia y qué hacer cuando la entidad guarda silencio o responde con evasivas.",
          ],
        },
      ],
    },
    {
      id: "que-dice-la-ley",
      titulo: "Qué dice la ley sobre el derecho de petición",
      bloques: [
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 23 C.P.",
            norma: "Constitución Política",
            texto:
              "Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución.",
          },
        },
        {
          tipo: "parrafos",
          textos: [
            "El desarrollo legal de ese artículo está en la Ley 1755 de 2015, que sustituyó el título del CPACA dedicado al derecho de petición. Allí se establece que el derecho de petición es un derecho fundamental de aplicación inmediata, que su ejercicio es gratuito y que puede presentarse sin necesidad de apoderado. También aclara algo que muchas entidades ignoran deliberadamente: los particulares que prestan servicios públicos o que están en posición dominante frente al peticionario —EPS, bancos, colegios, empresas de servicios públicos, aseguradoras, administradoras de fondos de pensiones— también están obligados a responder derechos de petición.",
            "La ley distingue entre petición completa e incompleta. Si tu escrito no trae toda la información necesaria, la entidad debe requerirte dentro de los 10 días siguientes indicando qué falta; tienes un mes para completarlo y, si no lo haces, se entiende que desistes, aunque puedes volver a radicar. Lo que la entidad no puede hacer es rechazar tu petición de plano, devolverla sin trámite o exigirte requisitos adicionales como autenticaciones, formatos internos o presentación personal.",
            "Otra regla clave es la del artículo 21: si la entidad a la que radicaste no es la competente, no puede archivarlo ni decirte 'no es con nosotros'. Debe remitirlo a la entidad competente dentro de los cinco días siguientes e informarte del traslado. El plazo de respuesta se cuenta desde que la entidad competente recibe el traslado.",
            "Finalmente, la respuesta debe ser de fondo, clara, precisa, congruente con lo pedido y notificada de manera efectiva. La Corte Constitucional ha reiterado que una respuesta que no resuelve lo pedido —o que se limita a decir que 'el asunto está en trámite'— equivale a no responder, y por lo tanto vulnera el derecho fundamental de la misma forma que el silencio.",
          ],
        },
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 14 Ley 1755 de 2015",
            norma: "Términos para resolver",
            texto:
              "Toda petición deberá resolverse dentro de los quince (15) días siguientes a su recepción, salvo los términos especiales previstos para peticiones de documentos e información y consultas.",
          },
        },
      ],
    },
    {
      id: "que-te-corresponde",
      titulo: "Qué te corresponde exigir",
      bloques: [
        {
          tipo: "resumen",
          titulo: "Lo que la entidad está obligada a darte",
          puntos: [
            "Constancia de radicación con fecha, hora y número; nunca aceptes que te reciban 'sin sello'.",
            "Respuesta de fondo sobre todo lo que pediste, no solo sobre una parte.",
            "Traslado a la entidad competente en 5 días si la que recibió no lo es, informándote de ello.",
            "Copia gratuita de los documentos públicos que solicites, salvo reserva legal expresa y motivada.",
            "Notificación efectiva de la respuesta al correo o dirección que indicaste en el escrito.",
          ],
        },
        {
          tipo: "parrafos",
          textos: [
            "Vale la pena detenerse en la reserva. Cuando pides información o documentos, la entidad solo puede negarlos invocando una norma concreta que establezca la reserva, y debe decirte cuál es. No basta con afirmar que la información es 'interna', 'confidencial' o 'de manejo reservado'. Si niega el acceso, debe hacerlo por escrito, motivadamente y dentro de los tres días siguientes; contra esa negativa procede la insistencia ante el tribunal administrativo, que decide en 10 días.",
            "Tampoco es válido que la entidad condicione la respuesta al pago de una tarifa. La única excepción es el costo de reproducción de copias voluminosas, que debe corresponder al valor real y estar fijado en un acto administrativo público. Cobrarte por 'estudiar' tu petición o por 'gestión documental' es ilegal.",
            "Y si la petición se dirige a un particular —tu EPS, tu banco, tu fondo de pensiones— aplican las mismas reglas de plazo y contenido. La diferencia práctica es que ese particular no siempre tiene ventanilla de radicación; en ese caso vale el correo electrónico oficial de atención al cliente, y la constancia de envío hace las veces de sello.",
          ],
        },
      ],
    },
    {
      id: "plazos",
      titulo: "Plazos de respuesta",
      bloques: [
        {
          tipo: "plazo",
          titulo: "15 días hábiles como regla general",
          texto:
            "La regla general es 15 días hábiles desde la radicación. Son 10 días hábiles si pides documentos o información pública y 30 días hábiles si formulas una consulta sobre materias a cargo de la entidad. Si la entidad no alcanza a responder, debe informarte antes del vencimiento explicando por qué y señalando la nueva fecha, que no puede exceder el doble del plazo inicial.",
        },
        {
          tipo: "tabla",
          tabla: {
            titulo: "Plazos según el tipo de petición",
            encabezados: ["Tipo de petición", "Plazo", "Qué pasa si vence"],
            filas: [
              [
                "Petición general (queja, reclamo, solicitud)",
                "15 días hábiles",
                "Procede tutela por violación del art. 23 C.P.",
              ],
              [
                "Documentos e información pública",
                "10 días hábiles",
                "Se entiende aceptada la solicitud; deben entregarse en 3 días",
              ],
              ["Consultas sobre materias a su cargo", "30 días hábiles", "Procede tutela"],
              [
                "Petición incompleta requerida por la entidad",
                "1 mes para completarla",
                "Se entiende desistida, pero puedes volver a radicar",
              ],
              [
                "Traslado por falta de competencia",
                "5 días para remitir",
                "El plazo corre desde que la competente la recibe",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Paso a paso para hacerlo bien",
      bloques: [
        {
          tipo: "pasos",
          titulo: "De la hoja en blanco a la constancia de radicado",
          pasos: [
            {
              titulo: "Identifica a la entidad competente",
              texto:
                "Antes de escribir, verifica quién debe resolver: la EPS o la Superintendencia, la alcaldía o la secretaría, el fondo de pensiones o Colpensiones. Radicar donde no corresponde no invalida la petición, pero te cuesta días.",
            },
            {
              titulo: "Escribe el encabezado y tus datos",
              texto:
                "Ciudad y fecha, nombre del destinatario y cargo, tu nombre completo, número de documento, dirección física, correo electrónico y teléfono. Indica expresamente que actúas 'en ejercicio del derecho fundamental de petición consagrado en el artículo 23 de la Constitución y la Ley 1755 de 2015'.",
            },
            {
              titulo: "Narra los hechos en orden y con fechas",
              texto:
                "Numera los hechos. Cada uno debe ser una afirmación corta, verificable y con fecha. Evita adjetivos y reproches: lo que convence es la cronología, no el tono.",
            },
            {
              titulo: "Formula la petición concreta",
              texto:
                "Escribe 'PETICIÓN' y numera lo que pides. Pide cosas verificables: que autoricen, que paguen, que expidan, que informen, que entreguen copia. Una petición vaga habilita una respuesta vaga.",
            },
            {
              titulo: "Anexa las pruebas y señala la notificación",
              texto:
                "Lista los anexos y señala el correo y la dirección donde recibirás la respuesta. Firma con nombre y número de documento.",
            },
            {
              titulo: "Radica y guarda la constancia",
              texto:
                "Radica en ventanilla con sello, por el canal virtual con acuse o por correo electrónico oficial. Guarda la copia sellada o el correo enviado: sin constancia no puedes probar la fecha y sin fecha no hay tutela.",
            },
            {
              titulo: "Cuenta los días hábiles",
              texto:
                "Anota en el calendario el día 15 hábil. Si llega sin respuesta de fondo, ya tienes la vulneración configurada y puedes presentar la tutela ese mismo día.",
            },
          ],
        },
        {
          tipo: "parrafos",
          titulo: "Errores que arruinan una petición correcta",
          textos: [
            "El error más común es mezclar en un mismo escrito cinco reclamos distintos sin numerarlos: la entidad responde el más fácil y guarda silencio sobre los demás, y luego alega que sí respondió. El segundo error es no dejar constancia de radicación, lo que convierte una tutela ganada en una tutela sin prueba. El tercero es enviar la petición desde un correo personal a un buzón que no es el canal oficial de la entidad; si el buzón no es el publicado en la página web, la entidad puede negar que lo recibió.",
            "Un cuarto error, menos evidente, es pedir cosas que la entidad no puede conceder. Si le pides a una secretaría de tránsito que anule una multa que solo puede revocarse por vía de recurso, la respuesta será negativa y habrás gastado 15 días. Antes de pedir, revisa si lo tuyo es una petición, un recurso o una demanda: son caminos distintos y con plazos distintos.",
            "Si tu caso está en el terreno de un acto administrativo ya notificado, la petición no reemplaza los recursos de reposición y apelación, que tienen 10 días para interponerse. Presentar una petición mientras corre ese plazo no lo suspende y puedes perder la oportunidad de discutir el acto.",
          ],
        },
      ],
    },
    {
      id: "si-no-responden",
      titulo: "Qué hacer si no responden",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Cuando el plazo vence en silencio",
          pasos: [
            {
              titulo: "Verifica el vencimiento en días hábiles",
              texto:
                "Excluye sábados, domingos y festivos. El conteo empieza el día hábil siguiente a la radicación.",
            },
            {
              titulo: "Presenta la acción de tutela",
              texto:
                "Se presenta ante cualquier juez, sin abogado, adjuntando copia de la petición y de la constancia de radicación. El juez tiene 10 días para fallar y suele ordenar responder en 48 horas.",
            },
            {
              titulo: "Si incumplen el fallo, promueve el desacato",
              texto:
                "El incidente de desacato puede terminar en arresto y multa para el funcionario responsable. Se tramita ante el mismo juez que falló la tutela.",
            },
            {
              titulo: "Considera la queja disciplinaria",
              texto:
                "La falta de respuesta es una falta disciplinaria del servidor público; la queja se presenta ante el control interno disciplinario o la Procuraduría.",
            },
          ],
        },
        {
          tipo: "parrafos",
          textos: [
            "Hay un matiz importante: el silencio administrativo negativo. En algunas actuaciones, transcurridos tres meses sin respuesta, la ley entiende que la petición fue negada y con esa negativa presunta puedes acudir a la jurisdicción contencioso-administrativa. Eso no significa que la entidad quede liberada de responder, ni te impide tutelar el derecho de petición: son dos vías paralelas, una para obtener la respuesta y otra para discutir el fondo del asunto.",
            "En la práctica, la tutela por derecho de petición es de las más eficaces del sistema colombiano precisamente porque el juez no discute el fondo: solo verifica que hubo petición, que hubo constancia y que no hubo respuesta oportuna. Por eso la constancia de radicación es la pieza más valiosa de todo el trámite.",
          ],
        },
      ],
    },
  ],
  solo: [
    "Solo necesitas pedir información, copias o certificaciones a una entidad.",
    "El asunto es claro y no hay un acto administrativo que debas controvertir.",
    "Ya tienes las pruebas y solo falta que la entidad se pronuncie.",
    "La entidad simplemente no ha respondido y quieres presionar el trámite.",
  ],
  abogado: [
    "La petición se relaciona con un acto administrativo que debes demandar dentro de 4 meses.",
    "Te sancionaron disciplinariamente o hay un proceso administrativo en curso.",
    "La entidad respondió negando el derecho y necesitas discutir el fondo.",
    "El asunto involucra una reclamación patrimonial contra el Estado.",
    "Hay plazos de caducidad corriendo y no tienes claro desde cuándo se cuentan.",
  ],
  faqs: [
    {
      pregunta: "¿Necesito abogado para presentar un derecho de petición?",
      respuesta:
        "No. El derecho de petición es de ejercicio directo y gratuito, no requiere apoderado ni formato oficial, y ninguna entidad puede exigirte que lo presente a través de abogado.",
    },
    {
      pregunta: "¿En cuántos días deben responderme?",
      respuesta:
        "15 días hábiles como regla general, 10 días hábiles si pides documentos o información pública y 30 días hábiles si formulas una consulta. La entidad puede prorrogar informándote antes del vencimiento.",
    },
    {
      pregunta: "¿Puedo enviarlo por correo electrónico?",
      respuesta:
        "Sí. Debes usar el canal electrónico oficial publicado por la entidad y conservar el correo enviado con fecha y hora, que hace las veces de constancia de radicación.",
    },
    {
      pregunta: "¿Qué hago si me responden algo distinto a lo que pedí?",
      respuesta:
        "Una respuesta que no resuelve de fondo lo pedido equivale a no responder. Puedes insistir por escrito señalando el punto omitido y, si persiste, presentar tutela por vulneración del derecho de petición.",
    },
    {
      pregunta: "¿Las empresas privadas deben responder derechos de petición?",
      respuesta:
        "Sí, cuando prestan un servicio público o están en posición dominante frente a ti: EPS, bancos, fondos de pensiones, colegios y empresas de servicios públicos están obligados en los mismos términos.",
    },
  ],
  enlaces: [
    { texto: "Derecho de petición", to: "/areas/administrativo/derecho-de-peticion" },
    { texto: "Nulidad y restablecimiento del derecho", to: "/areas/administrativo/nulidad-y-restablecimiento" },
    { texto: "Responsabilidad del Estado", to: "/areas/administrativo/responsabilidad-del-estado" },
    { texto: "Derecho administrativo", to: "/areas/administrativo" },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Cómo calcular tu liquidación laboral — silo laboral              */
/* ------------------------------------------------------------------ */

const calcularLiquidacion: ContenidoGuia = {
  slug: "calcular-liquidacion",
  silo: "laboral",
  h1: "Cómo calcular la liquidación laboral paso a paso",
  title: "Cómo calcular la liquidación laboral paso a paso",
  description:
    "Cómo calcular la liquidación laboral en Colombia: cesantías, intereses, prima, vacaciones, indemnización y sanción por mora.",
  extracto:
    "Las fórmulas reales de cesantías, intereses, prima, vacaciones e indemnización, con ejemplos y plazos de pago.",
  resumen:
    "Para calcular la liquidación laboral necesitas tres datos: el salario base, la fecha de ingreso y la fecha de retiro. Con eso se calculan cesantías (salario × días trabajados ÷ 360), intereses a las cesantías (12% anual), prima de servicios, vacaciones (salario × días ÷ 720) y, si el despido fue sin justa causa, la indemnización del artículo 64 del CST. Si el empleador no paga al terminar el contrato, se causa un día de salario por cada día de retardo.",
  publicada: "2026-01-18",
  actualizada: "2026-08-22",
  revisor: revisorPendiente("Derecho laboral y seguridad social", "Medellín"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Calcular la liquidación laboral no es adivinar un porcentaje: es aplicar cuatro fórmulas fijas sobre tres datos que tú ya tienes. El salario base mensual, la fecha en que entraste y la fecha en que saliste. Todo lo demás —cesantías, intereses, prima, vacaciones e indemnización— se deriva de ahí, y el resultado es verificable hasta el peso.",
            "La confusión típica viene de mezclar dos cosas distintas. La liquidación de prestaciones sociales es lo que te deben siempre, sin importar por qué terminó el contrato: renunciaste, te despidieron con justa causa, se venció el término o el contrato terminó de mutuo acuerdo. La indemnización, en cambio, solo se paga cuando el despido fue sin justa causa o cuando tú renunciaste con justa causa por culpa del empleador (despido indirecto). Son sumas independientes y se calculan por separado.",
            "Una advertencia que ahorra pleitos: el salario base para la liquidación no es solo lo que aparece en el desprendible como 'sueldo'. Incluye comisiones, horas extras habituales, recargos nocturnos, dominicales y todo pago habitual que retribuya directamente el servicio. El auxilio de transporte se suma para cesantías y prima, pero no para vacaciones. Ignorar esto es la causa más frecuente de liquidaciones mal pagadas en Colombia.",
            "Y hay un plazo que no puedes perder de vista: las acciones laborales prescriben en 3 años desde que la obligación se hizo exigible. Si te liquidaron mal en 2023 y hoy es 2026, estás en el límite.",
          ],
        },
      ],
    },
    {
      id: "que-dice-la-ley",
      titulo: "Qué dice la ley",
      bloques: [
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 249 CST",
            norma: "Código Sustantivo del Trabajo",
            texto:
              "Todo empleador está obligado a pagar a sus trabajadores un mes de salario por cada año de servicios y proporcionalmente por fracción de año.",
          },
        },
        {
          tipo: "parrafos",
          textos: [
            "Esa es la base de las cesantías. A ellas se suman los intereses del artículo 1 de la Ley 52 de 1975, equivalentes al 12% anual sobre el saldo de cesantías, o proporcional al tiempo si el año está incompleto. La prima de servicios está en el artículo 306 del CST: 30 días de salario por año, pagaderos por mitades en junio y diciembre, y proporcional al retirarse. Las vacaciones, en el artículo 186: 15 días hábiles por año de servicio, compensables en dinero al terminar el contrato.",
            "Sobre la indemnización, el artículo 64 fija la regla según el tipo de contrato. En contrato a término indefinido con salario inferior a 10 salarios mínimos: 30 días por el primer año y 20 días adicionales por cada año siguiente y proporcionalmente por fracción. Con salario igual o superior a 10 mínimos: 20 días por el primer año y 15 por cada año adicional. En contrato a término fijo, la indemnización equivale a los salarios que faltaban para terminar el plazo pactado. En contrato por obra o labor, los salarios que faltaban para terminar la obra, con un mínimo de 15 días.",
            "Finalmente, el artículo 65 establece la llamada sanción moratoria: si al terminar el contrato el empleador no paga los salarios y prestaciones debidos, debe pagar un día de salario por cada día de retardo durante los primeros 24 meses; después de ese periodo se causan intereses moratorios. La jurisprudencia exige que la mora sea injustificada, es decir, que el empleador no haya tenido razones atendibles para no pagar.",
          ],
        },
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 65 CST",
            norma: "Sanción por mora",
            texto:
              "Si a la terminación del contrato el empleador no paga al trabajador los salarios y prestaciones debidas, debe pagar al asalariado, como indemnización, una suma igual al último salario diario por cada día de retardo.",
          },
        },
      ],
    },
    {
      id: "que-te-corresponde",
      titulo: "Las fórmulas, una por una",
      bloques: [
        {
          tipo: "tabla",
          tabla: {
            titulo: "Fórmulas de liquidación",
            encabezados: ["Concepto", "Fórmula", "Base incluye auxilio de transporte"],
            filas: [
              ["Cesantías", "(Salario base × días trabajados) ÷ 360", "Sí"],
              ["Intereses a las cesantías", "(Cesantías × días trabajados × 12%) ÷ 360", "Sí (van sobre las cesantías)"],
              ["Prima de servicios", "(Salario base × días del semestre) ÷ 360", "Sí"],
              ["Vacaciones", "(Salario básico × días trabajados) ÷ 720", "No"],
              [
                "Indemnización (indefinido, < 10 SMLMV)",
                "30 días por el primer año + 20 días por cada año adicional",
                "No",
              ],
              ["Sanción por mora", "Salario diario × días de retardo (hasta 24 meses)", "No"],
            ],
          },
        },
        {
          tipo: "parrafos",
          titulo: "Un ejemplo completo",
          textos: [
            "Supón un trabajador con salario mensual de $2.400.000 más auxilio de transporte, contratado a término indefinido, que entró el 1 de marzo de 2024 y fue despedido sin justa causa el 31 de agosto de 2026. Son 2 años y 6 meses, es decir, 900 días bajo el conteo comercial de 360 días por año.",
            "Cesantías: la base es el salario más el auxilio de transporte. Si el auxilio es de $200.000, la base es $2.600.000. Cesantías = 2.600.000 × 900 ÷ 360 = $6.500.000. Intereses a las cesantías: como se liquidan por año y aquí el retiro es a mitad de año, se calcula sobre el saldo del último periodo proporcionalmente; sobre la porción anual correspondiente el 12% se aplica proporcional a los días.",
            "Prima de servicios: al retiro se paga la fracción del semestre en curso. Del 1 de julio al 31 de agosto son 60 días: 2.600.000 × 60 ÷ 360 = $433.333. Vacaciones: la base excluye el auxilio de transporte y se toma el total de días trabajados no compensados; si nunca tomó vacaciones, 2.400.000 × 900 ÷ 720 = $3.000.000.",
            "Indemnización: con 2 años y 6 meses y salario inferior a 10 mínimos, corresponden 30 días por el primer año, 20 por el segundo y la proporción de 20 días por los 6 meses restantes, es decir 10 días. Total 60 días de salario: 2.400.000 ÷ 30 × 60 = $4.800.000. Todo esto sin contar la sanción moratoria si el pago no se hace al terminar el contrato.",
            "Nótese lo que el ejemplo revela: la indemnización puede ser menor que la liquidación de prestaciones. Muchos trabajadores creen que la indemnización 'es la liquidación'. No lo es, y confundirlas lleva a aceptar pagos incompletos.",
          ],
        },
        {
          tipo: "resumen",
          titulo: "Lo que el empleador debe entregarte",
          puntos: [
            "Liquidación escrita y desglosada por concepto, no un valor global.",
            "Certificación laboral con cargo, fechas y salario.",
            "Comprobante del pago de aportes a seguridad social hasta el último día.",
            "Carta de terminación indicando la causal invocada.",
            "Pago de las cesantías consignadas y no retiradas, o la constancia de su consignación al fondo.",
          ],
        },
      ],
    },
    {
      id: "plazos",
      titulo: "Plazos que corren en tu contra",
      bloques: [
        {
          tipo: "plazo",
          titulo: "Prescripción: 3 años",
          texto:
            "Las acciones laborales prescriben en 3 años contados desde que cada obligación se hizo exigible (art. 488 CST). Un reclamo escrito al empleador interrumpe la prescripción por una sola vez y por un periodo igual. La liquidación debe pagarse al terminar el contrato; desde el día siguiente empieza a correr la sanción por mora.",
        },
        {
          tipo: "parrafos",
          textos: [
            "Hay dos plazos más que conviene tener presentes. El primero: si vas a discutir un despido y pretendes reintegro por estabilidad laboral reforzada, la tutela exige inmediatez, y esperar meses debilita el caso aunque la acción ordinaria siga viva. El segundo: la conciliación ante el inspector de trabajo o ante un centro de conciliación no interrumpe la prescripción por sí sola; lo que la interrumpe es el reclamo escrito o la presentación de la demanda.",
          ],
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Paso a paso para verificar tu liquidación",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Cómo revisar si te pagaron bien",
          pasos: [
            {
              titulo: "Reconstruye tu salario real",
              texto:
                "Suma al básico las comisiones, horas extras, recargos y bonificaciones habituales de los últimos 12 meses y promédialos. Ese promedio, no el básico, es tu base.",
            },
            {
              titulo: "Fija las fechas exactas",
              texto:
                "Fecha de ingreso y fecha de retiro, incluyendo prórrogas y contratos encadenados con el mismo empleador. La continuidad cuenta aunque hayan firmado varios contratos.",
            },
            {
              titulo: "Calcula cada concepto por separado",
              texto:
                "Cesantías, intereses, prima y vacaciones. Compara cada resultado con el desglose que te entregaron. Nunca compares totales: los errores se esconden en un solo renglón.",
            },
            {
              titulo: "Revisa la causal del despido",
              texto:
                "Si la carta no invoca una justa causa concreta y probada, el despido es sin justa causa y hay indemnización, aunque te hayan hecho firmar una renuncia.",
            },
            {
              titulo: "Verifica los aportes a seguridad social",
              texto:
                "Consulta tu historia laboral. Los aportes deben estar al día hasta el último día trabajado; si no lo están, hay una reclamación adicional.",
            },
            {
              titulo: "Reclama por escrito antes de demandar",
              texto:
                "Un reclamo escrito con constancia de recibido interrumpe la prescripción, fija la fecha y en muchos casos resuelve el asunto sin proceso.",
            },
          ],
        },
        {
          tipo: "parrafos",
          titulo: "Cuidado con el paz y salvo",
          textos: [
            "Firmar el recibo de la liquidación no significa renunciar a lo que falta. En derecho laboral los derechos ciertos e indiscutibles son irrenunciables, y una transacción sobre ellos es ineficaz. Si firmaste un paz y salvo y luego descubres que te pagaron mal las cesantías, puedes reclamar la diferencia: lo que la firma acredita es que recibiste una suma, no que esa suma fuera la correcta.",
            "Distinto es el acta de conciliación celebrada ante autoridad competente sobre derechos inciertos y discutibles: esa sí hace tránsito a cosa juzgada. Por eso, antes de conciliar, conviene tener el cálculo hecho.",
          ],
        },
      ],
    },
  ],
  solo: [
    "El empleador reconoce la deuda y solo hay diferencias de cálculo pequeñas.",
    "Solo necesitas verificar si las cesantías y la prima quedaron bien liquidadas.",
    "Vas a presentar un reclamo escrito para interrumpir la prescripción.",
    "El contrato terminó por mutuo acuerdo y solo falta el pago.",
  ],
  abogado: [
    "Te despidieron estando en incapacidad, embarazo o con fuero sindical.",
    "El empleador niega la relación laboral o la disfrazó como prestación de servicios.",
    "Hay salarios en especie, comisiones no reportadas o pagos por fuera de nómina.",
    "Van más de dos meses sin pago y quieres reclamar la sanción moratoria.",
    "El despido fue sin justa causa y la indemnización ofrecida es claramente inferior.",
  ],
  faqs: [
    {
      pregunta: "¿El auxilio de transporte entra en la liquidación?",
      respuesta:
        "Sí para cesantías, intereses y prima de servicios; no para vacaciones ni para la indemnización, que se calculan sobre el salario propiamente dicho.",
    },
    {
      pregunta: "¿Cuánto tiempo tiene el empleador para pagar la liquidación?",
      respuesta:
        "Debe pagarla al terminar el contrato. Desde el día siguiente puede causarse la sanción del artículo 65 del CST: un día de salario por cada día de retardo, hasta 24 meses.",
    },
    {
      pregunta: "¿Si renuncié tengo derecho a liquidación?",
      respuesta:
        "Sí. Las prestaciones sociales se pagan siempre. Lo que no se paga por renuncia voluntaria es la indemnización por despido sin justa causa.",
    },
    {
      pregunta: "¿Cómo se calcula la indemnización en contrato a término fijo?",
      respuesta:
        "Equivale a los salarios que faltaban para cumplir el plazo pactado. Si faltaban cuatro meses, la indemnización son cuatro meses de salario.",
    },
    {
      pregunta: "¿Hasta cuándo puedo reclamar una liquidación mal pagada?",
      respuesta:
        "Tres años desde que la obligación se hizo exigible. Un reclamo escrito al empleador interrumpe la prescripción por una sola vez y por otros tres años.",
    },
  ],
  enlaces: [
    { texto: "Pago de la liquidación", to: "/areas/laboral/liquidacion" },
    { texto: "Despido sin justa causa", to: "/areas/laboral/despido-sin-justa-causa" },
    { texto: "Horas extras y recargos", to: "/areas/laboral/horas-extras" },
    { texto: "Derecho laboral", to: "/areas/laboral" },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Cómo redactar una tutela en salud — silo salud                   */
/* ------------------------------------------------------------------ */

const redactarTutelaSalud: ContenidoGuia = {
  slug: "redactar-tutela-salud",
  silo: "salud",
  h1: "Cómo redactar una tutela en salud contra la EPS",
  title: "Cómo redactar una tutela en salud contra la EPS",
  description:
    "Cómo redactar una tutela en salud paso a paso: qué debe contener, dónde presentarla y en cuántos días falla el juez.",
  extracto:
    "Qué debe contener el escrito, dónde presentarlo y qué hacer si la EPS incumple el fallo del juez.",
  resumen:
    "Para redactar una tutela en salud no necesitas abogado ni formato: basta un escrito con tus datos, la EPS demandada, los hechos con fechas, los derechos vulnerados (vida, salud, dignidad), lo que pides y el juramento de que no has presentado otra tutela por los mismos hechos. Se presenta ante cualquier juez, se falla en 10 días y, si la EPS incumple, procede el incidente de desacato.",
  publicada: "2026-01-22",
  actualizada: "2026-08-24",
  revisor: revisorPendiente("Salud, EPS y seguridad social", "Bogotá"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Redactar una tutela en salud es escribir una carta al juez explicándole que tu EPS te está negando algo que necesitas y que esa negativa pone en riesgo tu vida, tu salud o tu dignidad. No hay formato oficial, no se necesita abogado, no cuesta nada y el juez está obligado a resolver en 10 días.",
            "La tutela procede cuando la EPS niega o demora un medicamento, una cirugía, una cita con especialista, un examen diagnóstico, el transporte del paciente y su acompañante, un tratamiento integral o la continuidad de un servicio ya iniciado. También procede cuando la negativa no es formal sino de hecho: la autorización 'está en trámite' desde hace tres meses y nadie responde.",
            "Un punto que cambia el resultado de muchas tutelas: hoy no es necesario que el servicio esté en un listado para que se ordene. La Ley Estatutaria 1751 de 2015 invirtió la lógica —todo está cubierto salvo lo expresamente excluido— y prohibió fragmentar la atención. Si tu médico tratante lo ordenó, la EPS debe prestarlo; si quiere negarlo, es ella quien debe probar que está excluido.",
            "Lo que el juez necesita ver en tu escrito es sencillo: quién eres, qué te ordenó el médico, qué hizo la EPS, desde cuándo estás esperando y qué le pides al juez. Todo lo demás es forma.",
          ],
        },
      ],
    },
    {
      id: "que-dice-la-ley",
      titulo: "Qué dice la ley",
      bloques: [
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 86 C.P.",
            norma: "Constitución Política",
            texto:
              "Toda persona podrá reclamar ante los jueces, en todo momento y lugar, mediante un procedimiento preferente y sumario, la protección inmediata de sus derechos constitucionales fundamentales.",
          },
        },
        {
          tipo: "parrafos",
          textos: [
            "El Decreto 2591 de 1991 desarrolla la acción. Establece que puede presentarse por cualquier persona, sin formalidades, incluso verbalmente cuando el solicitante no sabe escribir o es menor de edad; que se tramita con prelación sobre cualquier otro asunto salvo el habeas corpus; y que el fallo debe dictarse dentro de los 10 días siguientes a la solicitud. También permite las medidas provisionales: si esperar 10 días agrava el riesgo, el juez puede ordenar desde el primer día que se preste el servicio.",
            "En materia de salud, la Ley 1751 de 2015 elevó la salud a derecho fundamental autónomo. Su artículo 8 prohíbe fragmentar la prestación: no puede autorizarse la cirugía y negarse la prótesis, ni ordenarse el tratamiento y negarse el transporte cuando el paciente no puede costearlo. Y el artículo 15 fija el sistema de exclusiones: solo queda por fuera lo que se excluya mediante un procedimiento técnico-científico y participativo, no lo que la EPS decida internamente.",
            "La Corte Constitucional ha consolidado además el derecho al tratamiento integral: cuando hay una patología que exigirá múltiples servicios en el tiempo, el juez puede ordenar que la EPS cubra todo lo que el médico tratante prescriba en relación con esa patología, sin obligar al paciente a tutelar cada vez.",
          ],
        },
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 8 Ley 1751 de 2015",
            norma: "Ley Estatutaria de Salud",
            texto:
              "Los servicios y tecnologías de salud deberán ser suministrados de manera completa para prevenir, paliar o curar la enfermedad, con independencia del origen de la enfermedad o condición de salud.",
          },
        },
      ],
    },
    {
      id: "que-te-corresponde",
      titulo: "Qué debe contener el escrito",
      bloques: [
        {
          tipo: "resumen",
          titulo: "Las siete partes de una tutela en salud",
          puntos: [
            "Encabezado: 'Señor Juez (reparto)' y la referencia 'Acción de tutela contra {EPS}'.",
            "Tus datos: nombre, cédula, dirección, correo, teléfono y calidad en que actúas.",
            "Hechos numerados con fechas: diagnóstico, orden médica, radicación ante la EPS, respuesta o silencio.",
            "Derechos vulnerados: salud, vida en condiciones dignas, seguridad social e integridad personal.",
            "Petición concreta: qué servicio debe autorizarse, en qué plazo y con tratamiento integral.",
            "Juramento: que no has presentado otra tutela por los mismos hechos y derechos.",
            "Pruebas y anexos: historia clínica, orden médica, negativa o constancia de radicación, cédula.",
          ],
        },
        {
          tipo: "parrafos",
          textos: [
            "El bloque de hechos es el que decide el caso. Un juez que lee 'la EPS me tiene abandonada' no puede hacer nada; un juez que lee '15 de junio de 2026: el médico ordenó resonancia de columna; 18 de junio: radiqué la orden con número 44982; 20 de agosto: sin autorización pese a tres llamadas' ya tiene todo lo necesario para fallar. Fechas, números de radicado y nombres.",
            "En la petición, pide siempre tres cosas: el servicio concreto con un plazo (48 horas suele ser el estándar en casos urgentes), el tratamiento integral para la patología diagnosticada, y —cuando aplique— el transporte y el acompañante si vives lejos del prestador y no tienes cómo costearlo. Pedir de más no perjudica; pedir de menos limita al juez, que en principio falla sobre lo pedido.",
            "Si actúas por otra persona, dilo expresamente. Puedes hacerlo como agente oficioso cuando el titular no está en condiciones de promover su propia defensa —está hospitalizado, es adulto mayor, tiene una discapacidad—, y basta con manifestarlo en el escrito. Si es tu hijo menor, actúas como representante legal y adjuntas el registro civil.",
          ],
        },
      ],
    },
    {
      id: "plazos",
      titulo: "Plazos del trámite",
      bloques: [
        {
          tipo: "plazo",
          titulo: "10 días para el fallo",
          texto:
            "El juez debe fallar dentro de los 10 días siguientes a la presentación. Puede decretar medida provisional desde el primer día si hay riesgo. Contra el fallo cabe impugnación dentro de los 3 días siguientes a la notificación. Si la EPS incumple lo ordenado, procede el incidente de desacato, que puede terminar en multa y arresto del representante legal.",
        },
        {
          tipo: "tabla",
          tabla: {
            titulo: "Ruta de tiempos",
            encabezados: ["Etapa", "Plazo", "Qué puedes hacer"],
            filas: [
              ["Presentación y reparto", "Mismo día", "Pedir medida provisional si hay urgencia"],
              ["Traslado a la EPS", "1 a 3 días", "Aportar pruebas adicionales"],
              ["Fallo de primera instancia", "10 días", "Impugnar si es desfavorable"],
              ["Impugnación", "3 días desde la notificación", "Escrito breve, sin abogado"],
              ["Segunda instancia", "20 días", "Esperar el fallo"],
              ["Cumplimiento", "48 horas o lo que fije el fallo", "Promover desacato si incumplen"],
            ],
          },
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Paso a paso para redactarla y presentarla",
      bloques: [
        {
          tipo: "pasos",
          titulo: "De la orden médica al fallo",
          pasos: [
            {
              titulo: "Reúne los documentos",
              texto:
                "Copia de la cédula, orden o fórmula del médico tratante, historia clínica reciente, constancia de radicación ante la EPS y la respuesta negativa si la hubo.",
            },
            {
              titulo: "Pide la negativa por escrito",
              texto:
                "Si la EPS te niega verbalmente, radica un derecho de petición pidiendo la respuesta escrita. Si no responde, esa constancia sirve igual: el silencio también prueba la vulneración.",
            },
            {
              titulo: "Escribe los hechos con fechas",
              texto:
                "Numera cada hecho. Incluye números de radicado, nombres de funcionarios y fechas exactas. Adjunta lo que respalde cada afirmación.",
            },
            {
              titulo: "Redacta la petición y el juramento",
              texto:
                "Pide el servicio con plazo, el tratamiento integral y el transporte si aplica. Incluye la frase del juramento: no has presentado otra tutela por los mismos hechos.",
            },
            {
              titulo: "Presenta ante cualquier juez",
              texto:
                "En la oficina de reparto judicial de tu ciudad o por el canal electrónico de la Rama Judicial. No necesitas abogado ni pagar nada. Guarda la constancia de radicación.",
            },
            {
              titulo: "Atiende el trámite",
              texto:
                "Revisa el correo que registraste: el juzgado notifica por ahí y puede pedirte información adicional con plazos de horas.",
            },
            {
              titulo: "Si ganas y no cumplen, promueve desacato",
              texto:
                "Escrito breve ante el mismo juez indicando qué se ordenó, qué plazo venció y qué no ha cumplido la EPS.",
            },
          ],
        },
        {
          tipo: "parrafos",
          titulo: "Errores que hacen perder tutelas ganables",
          textos: [
            "El primero es no adjuntar la orden del médico tratante. La tutela en salud se sostiene sobre el criterio médico: sin orden, el juez no tiene cómo saber qué necesitas. Si la orden es antigua, pide una actualización antes de presentar.",
            "El segundo es narrar sin fechas. Un juez con 10 días para fallar necesita saber cuánto llevas esperando; 'hace mucho' no configura urgencia.",
            "El tercero es olvidar el juramento. Su ausencia no siempre invalida el escrito, pero suele generar un auto de subsanación que te cuesta días valiosos. Lo mismo pasa con la dirección de notificación: si no dejas correo y teléfono, el juzgado no puede contactarte y el trámite se atasca.",
            "El cuarto, y quizá el más costoso: pedir solo el servicio puntual y no el tratamiento integral. Ganas la resonancia, y dos meses después tienes que tutelar otra vez por la cirugía que la resonancia hizo necesaria.",
          ],
        },
      ],
    },
  ],
  solo: [
    "La EPS negó un servicio ordenado por tu médico tratante y tienes la orden.",
    "Solo necesitas que autoricen un examen, una cita o un medicamento concreto.",
    "La EPS lleva semanas sin responder y tienes la constancia de radicación.",
    "Necesitas continuidad de un tratamiento que ya venía siendo prestado.",
  ],
  abogado: [
    "El paciente está hospitalizado o en riesgo vital y hay que actuar en horas.",
    "Ya perdiste una tutela por los mismos hechos y hay que estudiar la vía procedente.",
    "La EPS incumple reiteradamente y hay que promover desacato con consecuencias.",
    "Hay reclamación de perjuicios por la demora en la atención.",
    "El caso involucra a varias entidades: EPS, ARL, fondo de pensiones o Supersalud.",
  ],
  faqs: [
    {
      pregunta: "¿Necesito abogado para presentar una tutela en salud?",
      respuesta:
        "No. La tutela puede presentarla cualquier persona, sin abogado, sin formato y sin costo. Incluso puede presentarse verbalmente cuando el solicitante no puede escribir.",
    },
    {
      pregunta: "¿En cuántos días falla el juez?",
      respuesta:
        "En 10 días contados desde la presentación. Si hay riesgo inminente, el juez puede ordenar una medida provisional desde el primer día para que el servicio se preste de inmediato.",
    },
    {
      pregunta: "¿Puedo tutelar si el servicio no está en el plan de beneficios?",
      respuesta:
        "Sí. Bajo la Ley 1751 de 2015 todo está cubierto salvo lo expresamente excluido mediante el procedimiento técnico-científico; corresponde a la EPS demostrar la exclusión.",
    },
    {
      pregunta: "¿Qué hago si la EPS no cumple el fallo?",
      respuesta:
        "Presentas un incidente de desacato ante el mismo juez que falló. El juez puede imponer multa y arresto al representante legal hasta que se cumpla la orden.",
    },
    {
      pregunta: "¿Puedo pedir transporte y acompañante en la tutela?",
      respuesta:
        "Sí, cuando el prestador está en otra ciudad y no tienes capacidad económica para cubrirlo. La Corte ha ordenado el transporte y el acompañante como parte de la atención integral.",
    },
  ],
  enlaces: [
    { texto: "Tutela en salud", to: "/areas/salud/tutela-en-salud" },
    { texto: "Negación de medicamentos", to: "/areas/salud/negacion-de-medicamentos" },
    { texto: "Desacato", to: "/areas/salud/desacato" },
    { texto: "Salud y EPS", to: "/areas/salud" },
  ],
};

export const GUIAS_PUBLICADAS: ContenidoGuia[] = [
  derechoDePeticion,
  calcularLiquidacion,
  redactarTutelaSalud,
];

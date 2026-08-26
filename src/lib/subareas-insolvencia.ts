import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo INSOLVENCIA.
 * Norma base: Ley 1564 de 2012 Título IV · Ley 1116 de 2006 · Ley 1266 de 2008.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */

// VERIFICAR CON ABOGADO
const PLAZO_INSOLVENCIA = {
  titulo: "Negociación: 60 días prorrogables 30",
  texto:
    "Aceptada la solicitud, la negociación de deudas debe adelantarse en un plazo de 60 días, prorrogable por 30 días más (CGP, Título IV). Durante ese tiempo se suspenden los procesos ejecutivos y los embargos en curso. Si no hay acuerdo, se abre la liquidación patrimonial. El reporte negativo en centrales de riesgo permanece por el doble del tiempo de la mora, con máximo de 4 años desde el pago (Ley 1266 de 2008).",
};

export const SUBAREAS_INSOLVENCIA: Record<string, ContenidoSubarea> = {
  "insolvencia/persona-natural": {
    h1: "Insolvencia de persona natural no comerciante",
    title: "Insolvencia de persona natural en Colombia",
    description: "Requisitos, efectos sobre embargos y cómo se tramita la insolvencia de persona natural no comerciante.",
    respuesta:
      "La insolvencia de persona natural no comerciante es un trámite legal que permite a quien no puede pagar sus deudas negociarlas todas en un solo procedimiento, ante un centro de conciliación o una notaría, con efectos inmediatos: se suspenden los procesos ejecutivos en su contra, se levantan las medidas cautelares que recaen sobre su patrimonio y se congelan los intereses mientras dura la negociación (Título IV del Código General del Proceso, Ley 1564 de 2012). Procede para quien tenga dos o más obligaciones a favor de dos o más acreedores en mora por más de 90 días, o dos o más procesos ejecutivos en curso, siempre que ese pasivo represente al menos el 50% del total de sus deudas.",
    parrafos: [
      "El trámite no es un perdón de deudas ni una quiebra: es una negociación ordenada y con fuerza legal. El deudor presenta una propuesta de pago realista, y si los acreedores que representan la mayoría legal la aceptan, el acuerdo obliga a todos, incluidos los que votaron en contra o no asistieron. Ese efecto vinculante es lo que hace del mecanismo algo distinto de una negociación informal con cada banco.",
      "La solicitud debe incluir información completa y veraz: relación detallada de acreedores con montos, intereses, garantías y estado de cobro; inventario de bienes con avalúos y gravámenes; relación de ingresos y gastos del deudor y su familia; relación de procesos judiciales en curso; y la propuesta de pago con plazos y forma. Ocultar bienes o acreedores es causal de fracaso del trámite y puede acarrear consecuencias penales.",
      "Admitida la solicitud, el conciliador convoca a los acreedores. Desde ese momento operan los efectos protectores: no pueden iniciarse ni continuarse procesos ejecutivos, se suspenden los términos de prescripción y caducidad, se levantan los embargos sobre salarios y cuentas —salvo los de alimentos, que continúan— y se interrumpe la causación de intereses de plazo y de mora en los términos de la ley.",
      "Las obligaciones alimentarias no entran a la negociación y siguen su curso normal: no se suspenden los procesos por alimentos ni los embargos derivados de ellos. Tampoco quedan cubiertas ciertas obligaciones surgidas después de la admisión. Todo lo demás —créditos de consumo, tarjetas, libranzas, hipotecas, deudas con particulares, obligaciones tributarias en los términos legales— se negocia en el mismo escenario.",
      "El acuerdo puede prever plazos, quitas de intereses, reducción de capital, dación en pago de bienes o la venta ordenada de activos. Su cumplimiento se vigila y, si el deudor incumple, cualquier acreedor puede pedir la reforma del acuerdo o, en su defecto, la apertura de la liquidación patrimonial, en la que los bienes se venden y el remanente insoluto queda extinguido bajo las condiciones legales.",
      "El costo del trámite es moderado en comparación con los procesos ejecutivos individuales, y en centros de conciliación de consultorios jurídicos universitarios puede ser gratuito según los ingresos del deudor. El acompañamiento de abogado no siempre es obligatorio, pero la propuesta bien estructurada —con cifras que el deudor efectivamente pueda cumplir— es la diferencia entre un acuerdo aprobado y un fracaso que abre la liquidación.",
      "Sobre el reporte en centrales de riesgo conviene tener expectativas realistas: la insolvencia no borra el historial. El dato negativo permanece por el doble del tiempo de la mora, con un máximo de cuatro años desde el pago o desde la extinción de la obligación, conforme a la Ley 1266 de 2008. Lo que sí ocurre es que, cumplido el acuerdo, las obligaciones quedan al día y el reporte empieza a correr su plazo de caducidad.",
      "Para quien tiene establecimiento de comercio o es comerciante, la vía no es esta sino la de la Ley 1116 de 2006 —reorganización o liquidación judicial ante la Superintendencia de Sociedades—, con reglas propias. Definir bien la calidad del deudor antes de radicar evita perder meses en un trámite improcedente.",
    ],
    norma: {
      articulo: "Art. 531 C.G.P.",
      norma: "Ley 1564 de 2012, Título IV · Ley 1116 de 2006",
      texto:
        "La persona natural no comerciante podrá solicitar la negociación de sus deudas a través de un procedimiento de insolvencia, cuando se encuentre en cesación de pagos, entendida como el incumplimiento de dos o más obligaciones a favor de dos o más acreedores por más de noventa días, o cuando cursen en su contra dos o más procesos ejecutivos.",
    },
    plazo: PLAZO_INSOLVENCIA,
    reclamar: {
      titulo: "Qué logra el trámite",
      parrafos: [
        "El efecto inmediato es la protección: suspensión de ejecuciones, levantamiento de embargos y congelamiento de intereses mientras se negocia. El efecto final es un acuerdo único, oponible a todos los acreedores.",
        "Si el acuerdo no se logra, la liquidación patrimonial ordena la venta de bienes y, cumplidas las condiciones legales, extingue el saldo insoluto.",
      ],
      lista: [
        "Suspensión de procesos ejecutivos en curso",
        "Levantamiento de embargos sobre salario y cuentas",
        "Congelamiento de intereses durante la negociación",
        "Acuerdo único oponible a todos los acreedores",
        "Plazos, quitas de intereses o dación en pago",
        "Liquidación patrimonial como salida si no hay acuerdo",
      ],
    },
    pasos: [
      { titulo: "Confirma que calificas", texto: "Dos o más deudas en mora de más de 90 días con dos o más acreedores, o dos ejecutivos en curso, y ser persona natural no comerciante." },
      { titulo: "Levanta el inventario real", texto: "Todos los acreedores, todos los bienes, ingresos y gastos. Ocultar información hace fracasar el trámite." },
      { titulo: "Construye una propuesta cumplible", texto: "Plazos y cuotas que resistan tu flujo real. Un acuerdo incumplido lleva directo a la liquidación patrimonial." },
      { titulo: "Radica ante centro de conciliación o notaría", texto: "Con la admisión operan la suspensión de ejecuciones y el levantamiento de embargos." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos tu pasivo y la viabilidad del trámite, y te conectamos con un abogado verificado." },
    ],
    faqs: [
      { pregunta: "¿Quién puede acogerse a la insolvencia de persona natural?", respuesta: "La persona natural no comerciante en cesación de pagos: dos o más obligaciones en mora por más de 90 días con dos o más acreedores, o dos o más procesos ejecutivos en curso." },
      { pregunta: "¿Se levantan los embargos?", respuesta: "Sí. Con la admisión se suspenden los procesos ejecutivos y se levantan las medidas cautelares, salvo las derivadas de obligaciones alimentarias, que continúan." },
      { pregunta: "¿La insolvencia borra el reporte en Datacrédito?", respuesta: "No. El dato negativo permanece por el doble del tiempo de la mora, con máximo de cuatro años desde el pago. Lo que cambia es que la obligación queda al día y empieza a correr ese plazo." },
      { pregunta: "¿Entran las deudas de alimentos?", respuesta: "No. Las obligaciones alimentarias quedan excluidas de la negociación y sus procesos y embargos siguen su curso." },
      { pregunta: "¿Qué pasa si no hay acuerdo?", respuesta: "Se abre la liquidación patrimonial: se venden los bienes para pagar a los acreedores y, cumplidas las condiciones legales, el saldo insoluto se extingue." },
    ],
  },

  "insolvencia/negociacion-de-deudas": {
    h1: "Cómo negociar deudas con bancos en Colombia",
    title: "Negociar deudas con bancos en Colombia",
    description: "Reestructuración, acuerdos de pago y trámite de insolvencia: qué conviene según tu situación real.",
    respuesta:
      "Negociar deudas con bancos en Colombia se puede hacer por dos caminos. El primero es la vía privada: reestructurar directamente con cada entidad o con la casa de cobranza, ampliando plazos, bajando la tasa, condonando intereses de mora o pactando un pago único con descuento. El segundo es la vía legal del Título IV del Código General del Proceso, que reúne a todos los acreedores en un solo trámite y produce efectos que ninguna negociación privada consigue: suspende los procesos ejecutivos, levanta los embargos y hace obligatorio el acuerdo para los acreedores que no lo aceptaron. La elección entre uno y otro depende de cuántos acreedores hay, de si ya hay embargos y de la capacidad real de pago.",
    parrafos: [
      "La negociación privada funciona bien cuando la mora es reciente, hay uno o dos acreedores y existe flujo para sostener una cuota. Los bancos tienen políticas internas de normalización de cartera: refinanciación, novación con nuevo plazo, reducción o condonación de intereses de mora y descuentos por pago único cuando la obligación está castigada contablemente. Los descuentos más altos aparecen precisamente en cartera castigada o vendida a un tercero, porque el comprador la adquirió por una fracción del valor nominal.",
      "Todo acuerdo privado debe quedar por escrito y con detalle: saldo aceptado, imputación de los pagos a capital e intereses, tasa aplicable hacia adelante, número y valor de cuotas, condición de retiro del reporte cuando corresponda y compromiso de terminar o desistir del proceso ejecutivo con levantamiento de medidas cautelares. Los acuerdos verbales con asesores de cobranza son la fuente más frecuente de conflictos posteriores.",
      "Antes de firmar cualquier reestructuración conviene revisar la deuda misma. Es común encontrar cobros de intereses por encima de la tasa de usura certificada, capitalización de intereses no autorizada, seguros y cargos no pactados, cobros de honorarios de cobranza desproporcionados o cláusulas abusivas. Una reestructuración firmada sobre un saldo mal liquidado convierte un cobro discutible en una obligación nueva y reconocida.",
      "También hay que revisar la prescripción. La acción ejecutiva derivada de un pagaré o de una letra prescribe en tres años desde el vencimiento en materia cambiaria, y las obligaciones civiles y comerciales tienen sus propios términos; un pago parcial o el reconocimiento escrito de la deuda interrumpen la prescripción y reinician el conteo. Por eso «abonar algo» a una deuda muy antigua puede revivir un cobro que ya no era exigible.",
      "El acoso de cobranza tiene límites legales. Las llamadas a horas inhábiles, los mensajes a familiares, vecinos o empleadores, las amenazas de embargo inmediato o de denuncia penal por deudas civiles y la publicación de la mora ante terceros vulneran el habeas data y los derechos del consumidor financiero, y se denuncian ante la Superintendencia Financiera o la de Industria y Comercio según la entidad. Las deudas civiles no llevan a la cárcel.",
      "Cuando los acreedores son varios y ya hay procesos ejecutivos o embargos, la negociación privada suele fracasar: cada banco quiere ser el primero y ninguno cede sin certeza de lo que harán los demás. Ese es el escenario propio del trámite de insolvencia, donde la ley obliga a todos a sentarse en la misma mesa y suspende las ejecuciones mientras se negocia.",
      "Un punto que se olvida es el orden de prioridades del propio deudor. Antes de repartir el flujo entre acreedores hay que asegurar el mínimo vital de la familia, las obligaciones alimentarias y la vivienda; comprometer más de lo que el ingreso resiste produce acuerdos que se incumplen en el segundo o tercer mes y que empeoran la posición jurídica, porque el incumplimiento del acuerdo suele acelerar el saldo total.",
      "En cuanto al reporte, la regla es la misma en cualquiera de las dos vías: el dato negativo permanece el doble del tiempo de la mora, con máximo de cuatro años desde el pago. Ninguna empresa puede prometer borrarlo antes; lo que sí es exigible es que, pagada o extinguida la obligación, la entidad actualice el reporte dentro de los términos legales, y ese incumplimiento se reclama por petición y, si persiste, por tutela de habeas data.",
    ],
    norma: {
      articulo: "Art. 13 Ley 1266 de 2008",
      norma: "Ley de Habeas Data · CGP Título IV · Ley 1116 de 2006",
      texto:
        "La información de carácter negativo permanecerá en las bases de datos por el término de cuatro (4) años contados a partir de la fecha en que sean pagadas las cuotas vencidas o se extinga la obligación, sin exceder el doble del tiempo de la mora.",
    },
    plazo: PLAZO_INSOLVENCIA,
    reclamar: {
      titulo: "Qué se puede negociar y qué no",
      parrafos: [
        "Se negocia el plazo, la tasa hacia adelante, los intereses de mora, los honorarios de cobranza, la imputación de pagos y la terminación del proceso ejecutivo con levantamiento de medidas.",
        "No se negocia la permanencia del reporte negativo, que tiene plazos fijados por ley, ni las obligaciones alimentarias, que quedan excluidas de cualquier acuerdo de insolvencia.",
      ],
      lista: [
        "Ampliación de plazo y reducción de cuota",
        "Condonación total o parcial de intereses de mora",
        "Descuento por pago único en cartera castigada",
        "Terminación del ejecutivo y levantamiento de embargos",
        "Revisión de cobros por encima de la tasa de usura",
        "Actualización del reporte una vez pagada la obligación",
      ],
    },
    pasos: [
      { titulo: "Levanta el mapa completo de deudas", texto: "Acreedor, saldo, tasa, garantía, estado de cobro y proceso judicial si lo hay. Sin ese mapa no hay estrategia posible." },
      { titulo: "Audita cada saldo", texto: "Revisa tasa de usura, capitalización de intereses, seguros no pactados y honorarios de cobranza antes de aceptar cifras." },
      { titulo: "Define tu capacidad real de pago", texto: "Descuenta primero mínimo vital, alimentos y vivienda. Un acuerdo incumplido acelera el saldo total." },
      { titulo: "Elige la vía", texto: "Negociación privada con uno o dos acreedores; trámite de insolvencia cuando hay varios, embargos o ejecutivos en curso." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos deudas, cobros indebidos y vías disponibles, y te conectamos con un abogado verificado." },
    ],
    faqs: [
      { pregunta: "¿Los bancos condonan intereses?", respuesta: "Sí, con frecuencia condonan intereses de mora y ofrecen descuentos por pago único, sobre todo en cartera castigada o vendida a terceros. Todo debe quedar por escrito con imputación clara de los pagos." },
      { pregunta: "¿Abonar a una deuda vieja me perjudica?", respuesta: "Puede hacerlo: el pago parcial o el reconocimiento escrito interrumpen la prescripción y reinician el conteo, revivendo un cobro que quizá ya no era exigible." },
      { pregunta: "¿Pueden llamar a mi familia o a mi trabajo?", respuesta: "No. Las llamadas a terceros, en horas inhábiles o con amenazas vulneran el habeas data y los derechos del consumidor financiero, y se denuncian ante la Superintendencia correspondiente." },
      { pregunta: "¿Voy a la cárcel por no pagar?", respuesta: "No. Las deudas civiles y comerciales no dan lugar a responsabilidad penal. Otra cosa es el delito de estafa, que exige engaño previo y no se configura por el simple incumplimiento." },
      { pregunta: "¿Cuándo conviene la insolvencia en vez de negociar?", respuesta: "Cuando hay varios acreedores, procesos ejecutivos o embargos: solo el trámite legal suspende las ejecuciones y obliga a los acreedores que no aceptan el acuerdo." },
    ],
  },
};

import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo CIVIL.
 * Todos los plazos: // VERIFICAR CON ABOGADO
 */
export const SUBAREAS_CIVIL: Record<string, ContenidoSubarea> = {
  "civil/arrendamientos": {
    h1: "Restitución de inmueble arrendado en Colombia",
    title: "Restitución de inmueble arrendado",
    description: "Cómo recuperar tu inmueble arrendado por mora o vencimiento: causales, plazos y proceso.",
    respuesta:
      "La restitución de inmueble arrendado es el proceso con el que el arrendador recupera el bien cuando el arrendatario no paga o cuando, vencido el plazo o terminado el contrato, no lo entrega. Se tramita por proceso verbal especial ante el juez civil —municipal o del circuito según la cuantía— y tiene una regla que lo hace particularmente eficaz: cuando la causal es la mora, el arrendatario solo es oído en el proceso si consigna a órdenes del juzgado los cánones adeudados o presenta los recibos de pago de los últimos tres periodos. La ley que rige el arrendamiento de vivienda urbana es la Ley 820 de 2003, y el procedimiento está en el artículo 384 del Código General del Proceso.",
    parrafos: [
      "El error más costoso del arrendador es intentar recuperar el inmueble por sus propios medios: cambiar la cerradura, cortar los servicios, sacar los muebles o presionar con visitas. Eso no solo es ineficaz, sino que expone a responsabilidad penal y civil, y suele terminar convirtiendo un caso ganado en una defensa complicada. La ley reserva la restitución al juez y da a cambio un procedimiento rápido con exigencias fuertes para el arrendatario moroso.",
      "Antes de demandar hay que fijar bien la causal, porque de ella dependen los requisitos. Las más frecuentes son la mora en el pago de cánones o de servicios y cuotas de administración a cargo del arrendatario, el vencimiento del plazo pactado con preaviso oportuno, la terminación unilateral del arrendador en los casos y con las indemnizaciones que prevé la Ley 820, el subarriendo o cesión sin autorización, y el daño o el uso del inmueble para un destino distinto al pactado.",
      "El preaviso es el detalle técnico que más demandas hunde. En vivienda urbana la terminación por parte del arrendador requiere, según la causal, un aviso escrito con antelación determinada y a través de un medio que permita probar la entrega, y en algunos supuestos exige el pago de una indemnización y la constitución de una caución a favor del arrendatario. Un preaviso enviado tarde, por un medio que no deja constancia o firmado por quien no es el arrendador, obliga a esperar la siguiente prórroga completa.",
      "La consignación es la ventaja procesal decisiva. En la causal de mora, el arrendatario que quiere ser escuchado debe acreditar el pago o consignar lo adeudado; si no lo hace, el juez no atiende su contestación y ordena la restitución. Esa regla convierte el proceso en uno de los más rápidos del ámbito civil cuando la deuda está clara y el contrato está bien documentado.",
      "Junto con la restitución se cobran las sumas adeudadas. Lo habitual es acumular en la misma demanda la pretensión de entrega del inmueble y el cobro ejecutivo de cánones, servicios, administración e intereses de mora, porque el contrato de arrendamiento escrito, con las constancias de no pago, presta mérito ejecutivo. Perseguir después la plata en un proceso separado duplica tiempos y costos.",
      "Del lado del arrendatario también hay defensas reales: pagos efectivamente realizados y no imputados, incrementos del canon superiores al tope legal anual, cobros de administración o servicios no pactados, incumplimiento del arrendador en reparaciones necesarias que hacen inhabitable el inmueble, y terminaciones sin el preaviso ni la indemnización legal. Cuando el arrendador no entregó el inmueble en estado de servir para su destino, la discusión cambia de eje.",
      "Un punto práctico que se subestima: el inventario de entrega. Un acta firmada al inicio, con fotografías y estado de acabados, electrodomésticos y contadores, es lo que permite reclamar después los daños y descontarlos del depósito o cobrarlos judicialmente. Sin ese documento, la discusión sobre el deterioro suele resolverse en contra de quien afirma el daño.",
    ],
    norma: {
      articulo: "Art. 384 C.G.P.",
      norma: "Código General del Proceso",
      texto:
        "Cuando la demanda de restitución se fundamente en la falta de pago, el demandado no será oído en el proceso sino hasta tanto demuestre que ha consignado a órdenes del juzgado el valor total que el demandante afirma le adeuda, o presente los recibos de pago expedidos por el arrendador correspondientes a los tres últimos periodos.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Preaviso y prescripción",
      texto:
        "La terminación por parte del arrendador en vivienda urbana exige preaviso escrito con la antelación que fija la Ley 820 de 2003 según la causal, y en ciertos casos indemnización y caución. El cobro de los cánones adeudados sigue la regla civil: acción ejecutiva 5 años y ordinaria 10 años (art. 2536 C.C., modificado por la Ley 791 de 2002).",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La pretensión principal es la entrega material del inmueble, pero el proceso permite recuperar mucho más: los cánones causados hasta la entrega efectiva, los servicios públicos y cuotas de administración dejados de pagar, los intereses de mora y las costas del proceso.",
        "También pueden reclamarse los daños al inmueble que excedan el deterioro natural por el uso, siempre que exista inventario de entrada o prueba del estado inicial, y la cláusula penal cuando el contrato la pactó y es exigible.",
      ],
      lista: [
        "Entrega material del inmueble con embargo y secuestro cuando procede",
        "Cánones adeudados hasta la restitución efectiva",
        "Servicios públicos, administración y expensas a cargo del arrendatario",
        "Intereses de mora, cláusula penal y costas del proceso",
        "Daños al inmueble acreditados frente al inventario de entrega",
      ],
    },
    pasos: [
      { titulo: "Revisa el contrato y la causal", texto: "Plazo, canon, reajuste, obligaciones de servicios y administración, y garantías. La causal invocada define qué requisitos hay que cumplir." },
      { titulo: "Envía el preaviso o el requerimiento", texto: "Por escrito y por un medio que deje constancia de la entrega, con la antelación legal. Un preaviso mal enviado retrasa el caso una prórroga completa." },
      { titulo: "Documenta el incumplimiento", texto: "Estado de cuenta, comprobantes de pago recibidos, facturas de servicios y administración, y comunicaciones con el arrendatario." },
      { titulo: "Demanda la restitución", texto: "Proceso verbal especial ante juez civil, acumulando el cobro de cánones y accesorios y solicitando las medidas cautelares que procedan." },
      { titulo: "Recibe con acta", texto: "En la entrega, levanta acta con fotos, lecturas de contadores y estado de acabados: es la base para reclamar daños y liquidar el depósito." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tarda una restitución de inmueble arrendado?",
        respuesta:
          "Cuando la causal es mora y el arrendatario no consigna lo adeudado, el proceso avanza rápido y en muchos juzgados se resuelve en pocos meses. Si el arrendatario consigna y contesta, o la causal exige debate probatorio, el trámite puede extenderse más de un año según la congestión del despacho.",
      },
      {
        pregunta: "¿Puedo cambiar la cerradura o cortar los servicios?",
        respuesta:
          "No. Recuperar el inmueble por vías de hecho puede constituir delito y genera responsabilidad civil, además de debilitar la posición del arrendador en el proceso. La restitución solo la ordena el juez, y el procedimiento legal es más rápido de lo que la mayoría supone.",
      },
      {
        pregunta: "¿Qué pasa si el arrendatario paga después de la demanda?",
        respuesta:
          "En la causal de mora, el arrendatario que consigna lo adeudado a órdenes del juzgado puede ser oído y continuar la discusión. Eso no siempre extingue el proceso: si existen otras causales o cánones posteriores impagos, la restitución puede seguir su curso.",
      },
      {
        pregunta: "¿Puedo subir el canon cuanto quiera cada año?",
        respuesta:
          "En vivienda urbana el reajuste anual está limitado por la Ley 820 de 2003 y se calcula sobre la variación del índice de precios al consumidor del año anterior, dentro del tope legal. Un incremento por encima de ese límite es una defensa válida para el arrendatario.",
      },
      {
        pregunta: "¿Sirve un contrato de arrendamiento verbal?",
        respuesta:
          "El contrato verbal es válido, pero complica la prueba del canon, del plazo y de las obligaciones accesorias, y dificulta el cobro ejecutivo. Con contrato escrito, comprobantes de pago y comunicaciones fechadas, la restitución y el cobro son considerablemente más sólidos.",
      },
    ],
    guias: ["requisitos-proceso-ejecutivo", "cobrar-deuda-titulo-valor"],
  },

  "civil/proceso-ejecutivo": {
    h1: "Proceso ejecutivo en Colombia: cómo funciona",
    title: "Proceso ejecutivo en Colombia",
    description: "Qué documentos sirven de título ejecutivo, cómo se embarga y en cuánto tiempo se cobra.",
    respuesta:
      "El proceso ejecutivo es la vía para cobrar cuando ya existe un documento que contiene una obligación clara, expresa y exigible: pagaré, letra de cambio, cheque, factura electrónica de venta, contrato firmado, acta de conciliación o sentencia. El juez no discute primero si la deuda existe: revisa el título, libra mandamiento de pago y permite decretar embargos desde el inicio. El deudor tiene 10 días para pagar o proponer excepciones, y si no lo hace se dicta la orden de seguir adelante con la ejecución, se avalúan y rematan los bienes embargados y con el producto se paga al acreedor.",
    parrafos: [
      "Todo depende del título. El artículo 422 del Código General del Proceso exige que la obligación conste en un documento que provenga del deudor o de su causante, o en una providencia judicial o acto administrativo en firme, y que sea expresa, clara y exigible. Expresa significa que aparece formulada en el documento y no se deduce; clara, que no requiere interpretación sobre quién debe, cuánto y a quién; exigible, que ya venció el plazo o se cumplió la condición. Un documento firmado que no reúna esos tres atributos no sirve para ejecutar y obliga a un proceso declarativo previo.",
      "Los títulos valores tienen exigencias formales propias del Código de Comercio: en el pagaré, la promesa incondicional de pagar una suma determinada, el nombre del beneficiario, la fecha de vencimiento y la firma del otorgante; en la letra, la orden incondicional y la aceptación; en el cheque, la presentación oportuna al banco y la constancia de rechazo por parte del girado. Un detalle omitido —el espacio en blanco sin carta de instrucciones, la fecha ausente, la falta de la constancia bancaria— es la razón más frecuente por la que un juez rechaza el mandamiento de pago.",
      "Las medidas cautelares son la parte útil del proceso. Desde la presentación de la demanda pueden pedirse embargo y secuestro de inmuebles, vehículos, cuentas bancarias, salarios en la porción embargable, cuotas sociales, establecimientos de comercio y créditos que terceros le deban al deudor. La eficacia del cobro no depende de la sentencia sino de encontrar bienes: por eso el estudio patrimonial previo —certificados de tradición, registro de vehículos, cámara de comercio, información de nómina— vale más que cualquier redacción brillante de la demanda.",
      "Frente al mandamiento, el deudor puede pagar, guardar silencio o proponer excepciones de mérito dentro de los 10 días siguientes a la notificación. Las excepciones típicas son el pago total o parcial, la prescripción de la acción cambiaria, la falta de requisitos del título, la novación, la compensación, el llenado abusivo de espacios en blanco y la nulidad del negocio subyacente. Si no propone excepciones, el juez ordena seguir adelante con la ejecución sin necesidad de audiencia de fondo.",
      "La liquidación del crédito es donde se define cuánto se recupera de verdad. Incluye el capital, los intereses de plazo pactados, los intereses moratorios dentro del límite de la usura certificado por la Superintendencia Financiera, y las costas y agencias en derecho. Cobrar intereses por encima del tope legal no solo se rechaza: puede acarrear la pérdida de los intereses y consecuencias adicionales para el acreedor.",
      "Existe también el proceso ejecutivo de mínima cuantía, con trámite simplificado, y la posibilidad de acumular ejecuciones cuando varios acreedores persiguen al mismo deudor. Si el deudor es una empresa en insolvencia o una persona natural no comerciante admitida a negociación de deudas, los procesos ejecutivos se suspenden y se remiten al trámite concursal, lo que cambia por completo la estrategia de cobro.",
    ],
    norma: {
      articulo: "Art. 422 C.G.P.",
      norma: "Código General del Proceso",
      texto:
        "Pueden demandarse ejecutivamente las obligaciones expresas, claras y exigibles que consten en documentos que provengan del deudor o de su causante y constituyan plena prueba contra él, o las que emanen de una sentencia de condena proferida por juez o tribunal de cualquier jurisdicción.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Acción ejecutiva: 5 años",
      texto:
        "La acción ejecutiva prescribe en 5 años y la ordinaria en 10, contados desde que la obligación se hizo exigible (art. 2536 C.C., modificado por la Ley 791 de 2002). En títulos valores rigen además los términos de la acción cambiaria del Código de Comercio, que son más cortos y se cuentan desde el vencimiento.",
    },
    reclamar: {
      titulo: "Qué puedes recuperar",
      parrafos: [
        "El ejecutivo persigue el capital y todo lo accesorio: intereses de plazo, intereses moratorios hasta el tope de usura, y las costas y agencias en derecho del proceso. Cuando el título es un contrato con cláusula penal, esta se cobra en las condiciones pactadas si es exigible.",
        "La recuperación real depende de los bienes embargados. Por eso conviene ampliar las cautelares durante el proceso a medida que se identifican activos, y solicitar oficios a entidades financieras, cámaras de comercio, tránsito y oficinas de registro.",
      ],
      lista: [
        "Capital de la obligación contenida en el título",
        "Intereses de plazo y de mora dentro del límite de usura",
        "Costas y agencias en derecho a cargo del deudor",
        "Embargo y secuestro de inmuebles, vehículos, cuentas y salarios",
        "Remate de bienes y pago con el producto de la subasta",
      ],
    },
    pasos: [
      { titulo: "Revisa el título", texto: "Debe contener una obligación expresa, clara y exigible, con los requisitos formales propios del documento. Un defecto de forma impide el mandamiento de pago." },
      { titulo: "Verifica la prescripción", texto: "Cuenta desde que la obligación se hizo exigible. Un requerimiento o un abono del deudor pueden interrumpir el término." },
      { titulo: "Ubica bienes antes de demandar", texto: "Certificados de tradición, tránsito, cámara de comercio y entidades financieras. Sin bienes, la sentencia no se traduce en pago." },
      { titulo: "Demanda y pide cautelares", texto: "La solicitud de embargo se presenta con la demanda para sorprender al deudor antes de que mueva sus activos." },
      { titulo: "Liquida, avalúa y remata", texto: "Aprobada la liquidación del crédito, se avalúan los bienes secuestrados y se rematan; con el producto se paga el crédito y las costas." },
    ],
    faqs: [
      {
        pregunta: "¿Qué documentos sirven como título ejecutivo?",
        respuesta:
          "Pagarés, letras de cambio, cheques con constancia de rechazo, facturas electrónicas de venta aceptadas, contratos firmados con obligaciones claras, actas de conciliación, laudos y sentencias en firme. En todos los casos la obligación debe ser expresa, clara y exigible.",
      },
      {
        pregunta: "¿Cuánto tarda un proceso ejecutivo?",
        respuesta:
          "Si el deudor no propone excepciones, puede llegarse a la orden de seguir adelante con la ejecución en pocos meses. Con excepciones, incidentes y remate de bienes, el trámite suele tomar entre uno y tres años según la congestión del juzgado y la complejidad de los bienes.",
      },
      {
        pregunta: "¿Se puede embargar el salario?",
        respuesta:
          "Sí, pero de forma limitada: por regla general solo es embargable la quinta parte del excedente del salario mínimo, salvo en obligaciones alimentarias y con cooperativas, donde el porcentaje embargable es mayor. También pueden embargarse cuentas bancarias con las excepciones legales de inembargabilidad.",
      },
      {
        pregunta: "¿Qué puedo alegar si me demandan ejecutivamente?",
        respuesta:
          "Dentro de los 10 días siguientes a la notificación pueden proponerse excepciones de mérito: pago, prescripción, falta de requisitos del título, novación, compensación, llenado abusivo de espacios en blanco o inexistencia de la obligación. Guardar silencio conduce a la ejecución sin discusión de fondo.",
      },
      {
        pregunta: "¿Sirve el proceso ejecutivo si el deudor no tiene bienes?",
        respuesta:
          "Se puede obtener la orden de pago, pero sin bienes que embargar no hay recuperación efectiva. Por eso el estudio patrimonial previo es determinante: define si conviene demandar ya, negociar un acuerdo de pago con garantías o esperar a identificar activos.",
      },
    ],
    guias: ["requisitos-proceso-ejecutivo", "cobrar-deuda-titulo-valor"],
  },

  "civil/incumplimiento-de-contrato": {
    h1: "Demanda por incumplimiento de contrato",
    title: "Demanda por incumplimiento de contrato",
    description: "Qué puedes exigir si te incumplen: cumplimiento, resolución, perjuicios y en qué plazo.",
    respuesta:
      "Cuando la otra parte incumple un contrato, el artículo 1546 del Código Civil te da a elegir entre dos caminos, ambos con indemnización de perjuicios: exigir el cumplimiento forzado de lo pactado, o pedir la resolución del contrato para deshacerlo y volver las cosas al estado anterior. La demanda se presenta ante el juez civil por proceso verbal, y para que prospere debes probar la existencia del contrato, que tú cumpliste o te allanaste a cumplir, el incumplimiento del otro y los perjuicios sufridos. Si el contrato presta mérito ejecutivo, puedes ir directo al proceso ejecutivo sin declaración previa.",
    parrafos: [
      "La primera decisión estratégica es elegir entre cumplimiento y resolución, porque son excluyentes en su pretensión principal. Pedir cumplimiento tiene sentido cuando la prestación todavía te sirve: la obra que falta terminar, la escritura que no se ha firmado, la mercancía que aún necesitas. Pedir resolución conviene cuando el negocio ya perdió sentido o la confianza se rompió, y lo que quieres es recuperar lo pagado con sus frutos. En ambos casos la indemnización de perjuicios se acumula.",
      "El requisito que más demandas hunde es probar el cumplimiento propio. En los contratos bilaterales rige la excepción de contrato no cumplido: quien no ha cumplido su parte no puede exigir la del otro. Por eso importa documentar los pagos, las entregas y la disposición a cumplir, incluso cuando la contraparte ya está en falta. Si estás en mora y la otra parte también, el juez pondera quién incumplió primero y con qué gravedad.",
      "La constitución en mora suele ser un paso necesario. Salvo que el contrato tenga plazo pactado y la ley lo dispense, el acreedor debe requerir al deudor para que quede en mora, y solo desde ese momento corren intereses y ciertos perjuicios. Un requerimiento escrito, con fecha cierta y prueba de entrega, es el documento que fija el punto de partida de la responsabilidad y evita discusiones posteriores sobre desde cuándo se debe.",
      "Los perjuicios deben probarse y cuantificarse, no solo enunciarse. El daño emergente es lo que efectivamente saliste a pagar por el incumplimiento: los costos de contratar a otro proveedor, las reparaciones, los gastos perdidos. El lucro cesante es lo que dejaste de ganar y exige una base razonable de cálculo: contratos frustrados, histórico de ventas, contabilidad. La jurisprudencia rechaza el lucro cesante hipotético que no se apoya en cifras verificables.",
      "La cláusula penal cambia el escenario probatorio. Si el contrato la pactó, funciona como una tasación anticipada de los perjuicios: se cobra sin necesidad de probar el monto del daño, basta el incumplimiento. Puede pedirse en lugar de la indemnización ordinaria o, si se pactó expresamente, además de ella. El juez puede reducirla cuando es manifiestamente excesiva o cuando hubo cumplimiento parcial.",
      "Antes de demandar hay dos filtros que ahorran meses. El primero es la cláusula compromisoria: si el contrato pactó arbitraje, la competencia no es del juez civil y demandar ante él conduce a una falta de jurisdicción. El segundo es la conciliación extrajudicial en derecho, requisito de procedibilidad en la mayoría de los asuntos civiles conciliables; sin la constancia respectiva, la demanda se rechaza.",
      "También conviene revisar si el contrato ya prestaba mérito ejecutivo. Cuando la obligación incumplida es de pagar una suma determinada y consta con claridad en el documento firmado, no hace falta un proceso declarativo: se puede ejecutar directamente y pedir embargos desde el inicio, lo que acorta drásticamente el camino hacia el cobro real.",
    ],
    norma: {
      articulo: "Art. 1546 C.C.",
      norma: "Código Civil",
      texto:
        "En los contratos bilaterales va envuelta la condición resolutoria en caso de no cumplirse por uno de los contratantes lo pactado. Pero en tal caso podrá el otro contratante pedir a su arbitrio, o la resolución o el cumplimiento del contrato con indemnización de perjuicios.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Ordinaria 10 años · ejecutiva 5 años",
      texto:
        "La acción ordinaria por incumplimiento prescribe en 10 años y la ejecutiva en 5, contados desde que la obligación se hizo exigible (art. 2536 C.C., modificado por la Ley 791 de 2002). Algunas acciones especiales tienen plazos más cortos, como la de vicios ocultos en la compraventa.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La pretensión principal es cumplimiento o resolución, y a ella se suman los perjuicios. En la resolución se piden además las restituciones mutuas: devolución de lo pagado con intereses o corrección, y del bien con sus frutos.",
        "Cuando el contrato pactó cláusula penal, esa suma se reclama directamente sin probar el monto del daño. Y si hay garantías —prenda, hipoteca, aval, garantía mobiliaria inscrita bajo la Ley 1676 de 2013— pueden hacerse efectivas para asegurar el resultado.",
      ],
      lista: [
        "Cumplimiento forzado de la prestación pactada",
        "Resolución del contrato con restituciones mutuas",
        "Daño emergente y lucro cesante debidamente acreditados",
        "Cláusula penal y intereses moratorios desde la constitución en mora",
        "Costas del proceso y efectividad de las garantías otorgadas",
      ],
    },
    pasos: [
      { titulo: "Reconstruye el contrato", texto: "Documento firmado, otrosíes, cotizaciones, órdenes de compra, correos y facturas. En contratos verbales, todo mensaje o pago sirve para probar lo pactado." },
      { titulo: "Acredita tu propio cumplimiento", texto: "Sin prueba de que cumpliste o te allanaste a cumplir, la excepción de contrato no cumplido bloquea la demanda." },
      { titulo: "Requiere por escrito", texto: "Constituye en mora con fecha cierta y otorga un plazo razonable. Ese documento fija desde cuándo corren intereses y perjuicios." },
      { titulo: "Cuantifica el daño", texto: "Separa daño emergente de lucro cesante con soportes contables. Revisa si hay cláusula penal que evite tener que probar el monto." },
      { titulo: "Concilia y luego demanda", texto: "La conciliación extrajudicial es requisito de procedibilidad en la mayoría de asuntos civiles. Verifica también si el contrato pactó arbitraje." },
    ],
    faqs: [
      {
        pregunta: "¿Puedo pedir cumplimiento y resolución al mismo tiempo?",
        respuesta:
          "No como pretensiones principales, porque son excluyentes. Lo usual es pedir una como principal y la otra como subsidiaria, de modo que si el juez niega la primera pueda pronunciarse sobre la segunda. La indemnización de perjuicios acompaña a cualquiera de las dos.",
      },
      {
        pregunta: "¿Sirve un contrato verbal para demandar?",
        respuesta:
          "Sí, salvo los contratos que la ley exige por escrito o por escritura pública. El problema es probatorio: hay que acreditar el acuerdo y su contenido con transferencias, mensajes, correos, facturas y testigos. Con contrato escrito el camino es mucho más corto.",
      },
      {
        pregunta: "¿Qué diferencia hay entre daño emergente y lucro cesante?",
        respuesta:
          "El daño emergente es la pérdida efectiva: lo que tuviste que pagar o dejaste de tener por el incumplimiento. El lucro cesante es la ganancia que dejaste de percibir y exige una base de cálculo verificable, como contratos frustrados o histórico de ventas.",
      },
      {
        pregunta: "¿Necesito conciliar antes de demandar?",
        respuesta:
          "En la mayoría de asuntos civiles conciliables la conciliación extrajudicial en derecho es requisito de procedibilidad, y sin la constancia la demanda se rechaza. No se exige cuando se piden medidas cautelares urgentes o en los casos que la ley excluye expresamente.",
      },
      {
        pregunta: "¿Para qué sirve la cláusula penal?",
        respuesta:
          "Tasa anticipadamente los perjuicios: se cobra con solo probar el incumplimiento, sin acreditar el monto del daño. El juez puede reducirla cuando resulta manifiestamente excesiva o cuando hubo cumplimiento parcial de la obligación.",
      },
    ],
    guias: ["incumplimiento-contrato-pasos", "requisitos-proceso-ejecutivo"],
  },

  "civil/responsabilidad-civil": {
    h1: "Responsabilidad civil extracontractual en Colombia",
    title: "Responsabilidad civil extracontractual",
    description: "Cuándo hay obligación de indemnizar un daño, qué se reclama y en qué plazo demandar.",
    respuesta:
      "La responsabilidad civil extracontractual obliga a reparar el daño causado a otro cuando no existe un contrato previo entre las partes. Se apoya en el artículo 2341 del Código Civil y exige probar tres elementos: un daño cierto, una conducta —culposa o generadora de riesgo— y el nexo causal entre una y otro. Cuando el daño proviene de una actividad peligrosa, como conducir un vehículo o manejar maquinaria, se aplica el artículo 2356 y la culpa se presume: el demandado solo se libera probando causa extraña, es decir fuerza mayor, hecho exclusivo de un tercero o culpa exclusiva de la víctima. La acción prescribe en 10 años.",
    parrafos: [
      "La diferencia con la responsabilidad contractual no es académica: cambia lo que hay que probar y el plazo. En la contractual existe un vínculo previo y basta acreditar el incumplimiento para presumir la culpa del deudor; en la extracontractual el daño surge entre personas que no habían pactado nada, como en un accidente de tránsito, la caída de un objeto desde un edificio, el daño causado por un animal o el perjuicio derivado de una obra vecina.",
      "El régimen de actividades peligrosas es el más relevante en la práctica. La conducción de vehículos, el uso de maquinaria, la manipulación de energía eléctrica o de sustancias inflamables se consideran actividades que crean un riesgo, y por eso la víctima no tiene que probar la culpa del demandado: le basta acreditar el daño y la relación con la actividad. Esa inversión de la carga probatoria explica por qué la defensa de estos casos se concentra en la causa extraña y en la concurrencia de culpas.",
      "También hay responsabilidad por el hecho ajeno y por las cosas. Los padres responden por los hechos de sus hijos menores que habitan con ellos, los empleadores por los de sus dependientes en ejercicio de sus funciones, los dueños o tenedores por los daños que causen sus animales, y el propietario de un edificio por la ruina derivada de falta de mantenimiento o por objetos que caen desde él. En estos supuestos la reclamación suele dirigirse contra quien tiene solvencia o seguro, no solo contra el autor material.",
      "La cuantificación es el corazón del caso. Los perjuicios materiales comprenden el daño emergente —gastos médicos, reparaciones, transporte, medicamentos— y el lucro cesante, que en lesiones personales se calcula con la pérdida de capacidad laboral, el ingreso base y la expectativa de vida productiva. Los perjuicios inmateriales incluyen el daño moral, el daño a la vida de relación y, en ciertos eventos, el daño a bienes constitucionalmente protegidos; se tasan en salarios mínimos según criterios jurisprudenciales y la prueba del impacto.",
      "En accidentes de tránsito hay un mapa de fuentes de pago que conviene recorrer en orden: el SOAT cubre gastos médicos y ciertas indemnizaciones dentro de topes legales; la póliza de responsabilidad civil del vehículo responde por lo demás dentro de sus límites; y el causante y su empleador o el propietario del vehículo responden por el resto. Vincular a la aseguradora en la demanda suele ser lo que hace la sentencia realmente cobrable.",
      "La víctima puede además ejercer la acción civil dentro del proceso penal cuando el hecho es delito, o esperar la sentencia penal e ir por la vía civil. Cada camino tiene ventajas: el penal presiona y aporta prueba recaudada por la Fiscalía; el civil se enfoca en la reparación y no depende de la responsabilidad penal del autor. La elección se hace al comienzo, con los tiempos de prescripción a la vista.",
      "Un factor que reduce condenas es la culpa concurrente de la víctima. Si quien sufrió el daño contribuyó a producirlo —cruzó por donde no debía, no usó los elementos de protección, ignoró una advertencia clara—, el juez reduce proporcionalmente la indemnización. Documentar la conducta de ambas partes desde el primer momento, con fotos, croquis y testigos, es lo que define ese porcentaje.",
    ],
    norma: {
      articulo: "Art. 2341 C.C.",
      norma: "Código Civil",
      texto:
        "El que ha cometido un delito o culpa, que ha inferido daño a otro, es obligado a la indemnización, sin perjuicio de la pena principal que la ley imponga por la culpa o el delito cometido.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Prescripción: 10 años",
      texto:
        "La acción de responsabilidad civil extracontractual prescribe en 10 años contados desde el hecho dañoso (art. 2536 C.C., modificado por la Ley 791 de 2002). La reclamación directa a la aseguradora tiene términos propios más cortos previstos en el Código de Comercio.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La indemnización busca dejar a la víctima como estaba antes del daño, en la medida en que el dinero lo permita. Comprende todo lo que se gastó, lo que se dejó de ganar y el impacto no patrimonial en la vida de la persona y de su núcleo cercano.",
        "En caso de muerte, los familiares reclaman por derecho propio el daño moral y, cuando dependían económicamente de la víctima, el lucro cesante calculado sobre los ingresos que dejaron de recibir.",
      ],
      lista: [
        "Daño emergente: gastos médicos, medicamentos, transporte y reparaciones",
        "Lucro cesante consolidado y futuro por la pérdida de capacidad laboral",
        "Daño moral y daño a la vida de relación tasados en salarios mínimos",
        "Perjuicios de los familiares en caso de muerte de la víctima",
        "Vinculación de la aseguradora y del propietario o empleador responsable",
      ],
    },
    pasos: [
      { titulo: "Asegura la prueba del hecho", texto: "Fotos, croquis, informe policial de accidente, testigos con datos de contacto y videos de cámaras cercanas antes de que se borren." },
      { titulo: "Documenta el daño", texto: "Historia clínica, incapacidades, facturas, certificados de ingresos y valoración de la pérdida de capacidad laboral cuando hay lesiones." },
      { titulo: "Identifica a todos los responsables", texto: "Autor material, propietario del vehículo o de la cosa, empleador y aseguradora. Demandar solo al insolvente hace inútil la sentencia." },
      { titulo: "Reclama a la aseguradora", texto: "La reclamación directa tiene plazos propios más cortos que la acción civil. Presentarla temprano preserva esa fuente de pago." },
      { titulo: "Concilia y demanda a tiempo", texto: "La conciliación extrajudicial es requisito de procedibilidad; si no hay acuerdo, se demanda por proceso verbal antes de que prescriba la acción." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tiempo tengo para demandar por un daño?",
        respuesta:
          "La acción de responsabilidad civil extracontractual prescribe en 10 años desde el hecho. Sin embargo, la reclamación a la aseguradora tiene términos más cortos del Código de Comercio, y la prueba se deteriora rápido, por lo que esperar suele costar más que el plazo mismo.",
      },
      {
        pregunta: "¿Tengo que probar la culpa del que me causó el daño?",
        respuesta:
          "Depende del régimen. En la responsabilidad por culpa probada sí debes acreditarla. En actividades peligrosas, como la conducción de vehículos, la culpa se presume y el demandado solo se exonera probando fuerza mayor, hecho exclusivo de un tercero o culpa exclusiva de la víctima.",
      },
      {
        pregunta: "¿Qué cubre el SOAT y qué no?",
        respuesta:
          "El SOAT cubre gastos médicos, incapacidad, invalidez, muerte y gastos funerarios dentro de topes legales. No cubre el lucro cesante completo, el daño moral ni los daños materiales del vehículo; para eso están la póliza de responsabilidad civil y la demanda contra el responsable.",
      },
      {
        pregunta: "¿Puedo reclamar daño moral?",
        respuesta:
          "Sí. El daño moral se reconoce por el sufrimiento derivado del hecho y se tasa en salarios mínimos según los criterios de la jurisprudencia, teniendo en cuenta la gravedad de la lesión y la cercanía del vínculo cuando lo reclaman familiares.",
      },
      {
        pregunta: "¿Sirve de algo el proceso penal para que me indemnicen?",
        respuesta:
          "Sí. La víctima puede solicitar la reparación integral dentro del proceso penal, y la prueba recaudada por la Fiscalía suele fortalecer el caso. También es válido reclamar por la vía civil de forma independiente, que no exige que exista condena penal.",
      },
    ],
    guias: ["incumplimiento-contrato-pasos", "requisitos-proceso-ejecutivo"],
  },

  "civil/obligaciones": {
    h1: "Cobro de deudas en Colombia: qué ruta te sirve",
    title: "Cobro de deudas en Colombia",
    description: "Qué documento tienes y qué vía te da: pagarés, préstamos sin papeles, garantías y plazos.",
    respuesta:
      "En Colombia la vía para cobrar una deuda depende del documento que tengas. Con pagaré, letra de cambio, cheque, factura electrónica aceptada, contrato firmado o acta de conciliación vas directo al proceso ejecutivo, con mandamiento de pago y embargos desde el inicio. Sin documento, primero hay que declarar la existencia de la obligación en un proceso ordinario o verbal, reconstruyéndola con transferencias, mensajes, testigos y confesión, y solo después ejecutar. El plazo también cambia: la acción ejecutiva prescribe en 5 años y la ordinaria en 10, contados desde que la obligación se hizo exigible (art. 2536 C.C., modificado por la Ley 791 de 2002).",
    parrafos: [
      "Qué documento tienes y qué ruta te da. Un pagaré o una letra en regla te habilitan el ejecutivo inmediato; una factura electrónica de venta aceptada expresa o tácitamente por el comprador también. Un contrato firmado sirve si la obligación de pagar aparece con monto y fecha claros; si solo describe servicios y valores por definir, no basta y hay que declarar primero. Un acta de conciliación o una sentencia son títulos plenos. Un chat en el que alguien reconoce la deuda no es título ejecutivo, pero sí una prueba potente en el proceso declarativo.",
      "Pagarés, letras y cheques tienen requisitos formales estrictos del Código de Comercio. El pagaré exige la promesa incondicional de pagar una suma determinada, el nombre del beneficiario, la fecha de vencimiento y la firma del otorgante. El pagaré en blanco es válido si existe carta de instrucciones que autorice su llenado; sin ella, el deudor puede alegar llenado abusivo. El cheque requiere presentación oportuna al banco y constancia de rechazo por el girado, y su acción cambiaria vence en plazos cortos que hacen inútil esperar meses para actuar.",
      "Préstamos sin documento. Es la situación más frecuente entre familiares, amigos y socios. La obligación existe aunque no se haya firmado nada, pero hay que probarla: comprobantes de la transferencia con concepto claro, mensajes donde el deudor reconoce el préstamo o promete pagar, abonos parciales que impliquen aceptación de la deuda, testigos del acuerdo y, cuando el deudor comparece, el interrogatorio de parte. Una estrategia útil antes de demandar es enviar un requerimiento escrito solicitando conciliación: la respuesta, o incluso el silencio con acuse de recibo, aporta valor probatorio.",
      "Garantías. Cobrar es mucho más eficaz cuando el crédito está respaldado. La hipoteca sobre inmuebles y la prenda tradicional siguen vigentes, pero la Ley 1676 de 2013 amplió el panorama con las garantías mobiliarias inscritas en el registro de Confecámaras: pueden gravarse inventarios, cuentas por cobrar, maquinaria, vehículos y hasta flujos futuros, y existe la posibilidad de ejecución especial y de pago directo cuando así se pactó. Constituir la garantía al inicio del negocio cuesta poco; conseguirla cuando el deudor ya está en mora es prácticamente imposible.",
      "Novación y cesión. La novación sustituye una obligación por otra nueva y extingue la anterior con sus garantías, por lo que refinanciar sin cuidado puede hacer perder la hipoteca o el aval originales; para evitarlo se pacta expresamente que no hay ánimo de novar. La cesión del crédito permite transferir la deuda a un tercero conservando garantías y accesorios, y debe notificarse al deudor para que le sea oponible. Ambas figuras aparecen en casi todos los acuerdos de pago y suelen firmarse sin advertir sus efectos.",
      "Prescripción. El tiempo corre desde que la obligación se hizo exigible, no desde que se firmó el documento. La acción ejecutiva prescribe en 5 años y la ordinaria en 10. En títulos valores rigen además los plazos de la acción cambiaria, más breves. La prescripción se interrumpe naturalmente con el reconocimiento del deudor —un abono, un acuerdo de pago, un mensaje que admita la deuda— y civilmente con la presentación de la demanda debidamente notificada. Un abono de bajo valor puede reabrir un cobro que parecía perdido; por eso conviene registrar cada pago parcial con fecha.",
      "Antes de demandar, el estudio patrimonial define si el esfuerzo vale la pena. Certificados de tradición, registro automotor, cámara de comercio, participaciones societarias, cuentas conocidas y empleador actual. Ganar contra alguien sin bienes produce una sentencia impagable; identificar activos permite pedir embargos con la demanda y negociar desde una posición real de fuerza.",
    ],
    norma: {
      articulo: "Art. 2536 C.C.",
      norma: "Código Civil, modificado por la Ley 791 de 2002",
      texto:
        "La acción ejecutiva se prescribe por cinco (5) años y la ordinaria por diez (10). La acción ejecutiva se convierte en ordinaria por el lapso de cinco (5) años, y convertida en ordinaria durará solamente otros cinco (5).",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Ejecutiva 5 años · ordinaria 10 años",
      texto:
        "La acción ejecutiva prescribe en 5 años y la ordinaria en 10, contados desde que la obligación se hizo exigible (art. 2536 C.C., Ley 791 de 2002). Los títulos valores tienen además plazos propios de acción cambiaria. Un abono o un reconocimiento escrito del deudor interrumpe la prescripción.",
    },
    reclamar: {
      titulo: "Qué puedes recuperar",
      parrafos: [
        "Además del capital, el cobro comprende los intereses de plazo pactados y los moratorios hasta el límite de usura certificado por la Superintendencia Financiera, así como las costas y agencias en derecho del proceso.",
        "Cuando existe garantía —hipoteca, prenda o garantía mobiliaria inscrita bajo la Ley 1676 de 2013— la recuperación se realiza sobre el bien gravado con preferencia frente a otros acreedores, lo que suele decidir si el crédito se paga o no.",
      ],
      lista: [
        "Capital adeudado con intereses de plazo y de mora dentro del tope legal",
        "Costas y agencias en derecho del proceso ejecutivo",
        "Ejecución de hipoteca, prenda o garantía mobiliaria inscrita",
        "Embargo de cuentas, salarios en la porción embargable, vehículos e inmuebles",
        "Acuerdos de pago con nuevas garantías y cláusula de no novación",
      ],
    },
    pasos: [
      { titulo: "Clasifica tu documento", texto: "Título valor, contrato, factura o nada. De eso depende si vas por ejecutivo directo o por un proceso declarativo previo." },
      { titulo: "Cuenta el plazo", texto: "Desde que la obligación se hizo exigible. Revisa si hubo abonos o reconocimientos que hayan interrumpido la prescripción." },
      { titulo: "Reconstruye la prueba", texto: "Transferencias con concepto, mensajes de reconocimiento, abonos parciales y testigos. Es lo que sostiene el cobro sin documento." },
      { titulo: "Estudia el patrimonio del deudor", texto: "Inmuebles, vehículos, sociedades y empleador. Sin bienes identificados, la sentencia no se traduce en recuperación." },
      { titulo: "Requiere, concilia y ejecuta", texto: "El requerimiento escrito y la conciliación resuelven muchos casos y dejan prueba. Si no hay acuerdo, demanda pidiendo embargos desde el inicio." },
    ],
    faqs: [
      {
        pregunta: "¿Puedo cobrar una deuda sin ningún documento firmado?",
        respuesta:
          "Sí, pero no por vía ejecutiva. Primero hay que declarar la obligación en un proceso declarativo, probándola con comprobantes de transferencia, mensajes donde el deudor la reconozca, abonos parciales, testigos e interrogatorio de parte. Obtenida la sentencia, se ejecuta.",
      },
      {
        pregunta: "¿En cuánto tiempo prescribe una deuda en Colombia?",
        respuesta:
          "La acción ejecutiva prescribe en 5 años y la ordinaria en 10, contados desde que la obligación se hizo exigible, según el artículo 2536 del Código Civil modificado por la Ley 791 de 2002. Los títulos valores tienen además términos más cortos de acción cambiaria.",
      },
      {
        pregunta: "¿Un abono del deudor reinicia el plazo?",
        respuesta:
          "El reconocimiento de la deuda, incluido un abono parcial o un acuerdo de pago firmado, interrumpe la prescripción y el término vuelve a contarse. Por eso conviene registrar cada pago parcial con fecha y dejar por escrito cualquier acuerdo, aunque sea informal.",
      },
      {
        pregunta: "¿Qué intereses puedo cobrar por mora?",
        respuesta:
          "Los pactados, sin superar el límite de usura equivalente a una vez y media el interés bancario corriente certificado por la Superintendencia Financiera. Cobrar por encima de ese tope puede acarrear la pérdida de los intereses y consecuencias adicionales para el acreedor.",
      },
      {
        pregunta: "¿Refinanciar la deuda me hace perder las garantías?",
        respuesta:
          "Puede ocurrir: la novación extingue la obligación original junto con sus garantías. Para evitarlo, el acuerdo de pago debe decir expresamente que no hay ánimo de novar y que se mantienen la hipoteca, la prenda o el aval constituidos inicialmente.",
      },
    ],
    guias: ["cobrar-deuda-titulo-valor", "requisitos-proceso-ejecutivo"],
  },
};

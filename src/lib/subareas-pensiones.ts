import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo PENSIONES.
 * Norma base: Ley 100 de 1993 · Ley 797 de 2003 · Decreto 1833 de 2016.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */

// VERIFICAR CON ABOGADO
const PLAZO_PENSIONAL = {
  titulo: "El derecho es imprescriptible; las mesadas, no",
  texto:
    "El derecho a la pensión no prescribe: puede reclamarse en cualquier momento una vez cumplidos los requisitos. Lo que sí prescribe son las mesadas ya causadas, que solo pueden cobrarse por los 3 años anteriores a la reclamación (CST art. 488 y CPTSS art. 151). Radicar la petición por escrito interrumpe ese plazo y protege el retroactivo. Contra la negativa proceden los recursos dentro de los 10 días siguientes a la notificación.",
};

export const SUBAREAS_PENSIONES: Record<string, ContenidoSubarea> = {
  "pensiones/vejez": {
    h1: "Requisitos de la pensión de vejez en Colombia",
    title: "Requisitos pensión de vejez en Colombia",
    description: "Edad, semanas y régimen que aplican, y qué hacer si Colpensiones o el fondo te niega la pensión.",
    respuesta:
      "En el régimen de prima media administrado por Colpensiones la pensión de vejez exige dos requisitos simultáneos: la edad —57 años las mujeres y 62 los hombres— y 1.300 semanas de cotización (art. 33 de la Ley 100 de 1993, modificado por la Ley 797 de 2003). En el régimen de ahorro individual con solidaridad, administrado por los fondos privados, no hay edad mínima: se pensiona quien acumula el capital suficiente para financiar una mesada equivalente al menos al 110% del salario mínimo, y quien no lo logra puede acceder a la garantía de pensión mínima con 1.150 semanas o pedir la devolución de saldos. Elegir el régimen equivocado o reclamar sin corregir antes la historia laboral son los dos errores que más pensiones cuestan en Colombia.",
    parrafos: [
      "La diferencia entre los dos regímenes no es de trámite sino de fórmula. En prima media la mesada se calcula sobre el ingreso base de liquidación de los últimos diez años —o de toda la vida laboral si resulta más favorable y se cotizaron al menos 1.250 semanas— con una tasa de reemplazo que aumenta con las semanas cotizadas. En ahorro individual la mesada depende del saldo de la cuenta, de los rendimientos, del bono pensional y de la modalidad elegida (renta vitalicia o retiro programado). Para un cotizante de ingresos medios o altos con muchas semanas, prima media suele ser más favorable; para trayectorias cortas con ingresos muy altos, la ecuación puede invertirse.",
      "El régimen de transición del artículo 36 de la Ley 100 sigue teniendo efectos prácticos. Quienes al 1° de abril de 1994 tenían 35 años las mujeres, 40 los hombres o 15 años de servicios conservaron la edad, el tiempo y el monto del régimen anterior, con el límite temporal que impuso el Acto Legislativo 01 de 2005. Aplicar el régimen anterior correcto —Ley 33 de 1985 para empleados públicos, Acuerdo 049 de 1990 para el ISS, regímenes especiales de docentes o fuerza pública— puede significar pensionarse años antes y con una tasa de reemplazo superior.",
      "La historia laboral es el documento que decide el caso. Los errores frecuentes son periodos no reportados por empleadores antiguos, semanas cotizadas a cajas hoy liquidadas, aportes en mora, ingresos base distintos a los realmente devengados y tiempos de servicio público sin certificar en el formato CETIL. La corrección se pide por derecho de petición con prueba documental: certificados laborales, contratos, desprendibles, planillas y certificaciones de las entidades donde se trabajó.",
      "La mora del empleador no puede oponerse al trabajador. Si la empresa descontó los aportes y no los trasladó, o simplemente no cotizó, la administradora tenía el deber de cobrarlos y su omisión no puede trasladarse a quien cumplió con su parte. Las altas cortes han reiterado ese criterio, y en la práctica significa que esas semanas deben contarse aunque el dinero no haya ingresado, sin perjuicio del cobro que la entidad debe adelantar contra el empleador.",
      "Los tiempos de servicio público anteriores a la afiliación al ISS, los aportes a cajas de previsión y los periodos trabajados en el exterior bajo convenio de seguridad social también cuentan, pero exigen trámites específicos: certificación CETIL, cálculo actuarial a cargo de la entidad empleadora o aplicación del convenio bilateral respectivo. Son los periodos que más se pierden por desconocimiento y los que más semanas suman cuando se recuperan.",
      "Cuando faltan pocas semanas conviene evaluar alternativas antes de aceptar una negativa: continuar cotizando como independiente, afiliarse al servicio doméstico o al piso de protección social según el caso, o revisar si hay semanas no contabilizadas. La indemnización sustitutiva —o la devolución de saldos en el fondo privado— es un derecho, pero cerrar el caso con ella impide después reclamar la pensión, salvo que se devuelva el dinero indexado.",
      "La reclamación empieza con la solicitud de reconocimiento ante Colpensiones o el fondo. Ante la negativa proceden los recursos de reposición y apelación dentro de los diez días siguientes a la notificación y, agotada la vía administrativa, la demanda ordinaria laboral ante el juez del circuito. La tutela procede de manera excepcional cuando la falta de reconocimiento amenaza el mínimo vital de una persona de la tercera edad y el proceso ordinario resulta ineficaz por su demora.",
      "Un punto que suele decidirse tarde y mal es el traslado de régimen. Está restringido cuando faltan menos de diez años para la edad de pensión, y fuera de esa restricción la vía es la nulidad del traslado por falta de información clara, cierta, comprensible y oportuna, carga probatoria que pesa sobre la administradora. Antes de demandar hay que proyectar la mesada en ambos escenarios: un caso puede ganarse en derecho y perderse en dinero.",
    ],
    norma: {
      articulo: "Art. 33 Ley 100 de 1993",
      norma: "Ley 797 de 2003 · Decreto 1833 de 2016",
      texto:
        "Para tener derecho a la pensión de vejez en el régimen de prima media el afiliado deberá reunir haber cumplido cincuenta y siete (57) años de edad si es mujer o sesenta y dos (62) si es hombre, y haber cotizado un mínimo de mil trescientas (1.300) semanas en cualquier tiempo.",
    },
    plazo: PLAZO_PENSIONAL,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Además del reconocimiento de la pensión, la reclamación bien planteada incluye el retroactivo desde la fecha en que se consolidó el derecho, dentro del límite de prescripción de tres años, y los intereses moratorios del artículo 141 de la Ley 100 cuando la entidad se demoró sin justificación.",
        "También puede pedirse la corrección de la historia laboral, la inclusión de semanas en mora, el reconocimiento de tiempos públicos y la aplicación del régimen de transición, cada uno con su propia prueba documental.",
      ],
      lista: [
        "Reconocimiento de la pensión con la fórmula y el régimen correctos",
        "Retroactivo de mesadas causadas (últimos 3 años)",
        "Intereses moratorios del art. 141 de la Ley 100",
        "Inclusión de semanas en mora del empleador",
        "Certificación e inclusión de tiempos de servicio público",
        "Aplicación del régimen de transición cuando corresponde",
      ],
    },
    pasos: [
      { titulo: "Descarga tu historia laboral", texto: "Compara semana por semana con tus contratos y desprendibles. Marca los periodos faltantes y los ingresos mal reportados." },
      { titulo: "Corrige antes de solicitar", texto: "Radica derecho de petición de corrección con la prueba documental. Solicitar la pensión con la historia errada casi siempre termina en negativa." },
      { titulo: "Define el régimen que te conviene", texto: "Proyecta la mesada en prima media y en ahorro individual con el IBL real antes de tomar cualquier decisión de traslado." },
      { titulo: "Radica la solicitud y recurre", texto: "Ante la negativa, presenta reposición y apelación dentro de los 10 días siguientes a la notificación." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos historia laboral, régimen y plazos, y te conectamos con un abogado de pensiones verificado." },
    ],
    faqs: [
      { pregunta: "¿Cuántas semanas se necesitan para pensionarse por vejez?", respuesta: "En el régimen de prima media, 1.300 semanas y la edad de 57 años en mujeres o 62 en hombres. En el régimen de ahorro individual no hay edad mínima, pero se exige capital suficiente o 1.150 semanas para la garantía de pensión mínima." },
      { pregunta: "¿Puedo pensionarme si mi empleador no pagó los aportes?", respuesta: "Sí. La mora del empleador no puede oponerse al trabajador: la administradora tenía el deber de cobrar y su omisión no traslada el perjuicio a quien cumplió. Esas semanas deben contarse, aportando prueba de la relación laboral." },
      { pregunta: "¿El derecho a la pensión prescribe?", respuesta: "No. El derecho es imprescriptible. Lo que prescribe son las mesadas ya causadas, que solo pueden cobrarse por los tres años anteriores a la reclamación, por lo que conviene radicar la petición cuanto antes." },
      { pregunta: "¿Puedo trasladarme de fondo privado a Colpensiones?", respuesta: "El traslado está restringido cuando faltan menos de diez años para la edad de pensión. Fuera de esa restricción, o cuando el traslado inicial se hizo sin información completa, la vía es la nulidad del traslado ante el juez laboral." },
      { pregunta: "¿Qué pasa si me faltan semanas al cumplir la edad?", respuesta: "Puedes seguir cotizando hasta completarlas, revisar si hay semanas no contabilizadas o pedir la indemnización sustitutiva. Aceptar esta última cierra la posibilidad de pensionarte, salvo que devuelvas el dinero indexado." },
    ],
  },

  "pensiones/invalidez": {
    h1: "Pensión de invalidez en Colombia",
    title: "Pensión de invalidez en Colombia",
    description: "Requisitos, calificación de pérdida de capacidad y qué hacer si te niegan la pensión de invalidez.",
    respuesta:
      "La pensión de invalidez de origen común se reconoce a quien pierde el 50% o más de su capacidad laboral y acredita 50 semanas cotizadas dentro de los tres años anteriores a la fecha de estructuración de la invalidez (art. 39 de la Ley 100 de 1993, modificado por la Ley 860 de 2003). El monto va del 45% al 54% del ingreso base de liquidación, con incrementos según las semanas cotizadas por encima del mínimo. Dos elementos deciden casi todos los casos: el porcentaje de pérdida de capacidad laboral y la fecha de estructuración que fije el dictamen, porque de esa fecha depende cuáles semanas se cuentan.",
    parrafos: [
      "La calificación la hace en primera instancia la administradora —Colpensiones, el fondo privado, la EPS o la ARL según el caso— y, si hay inconformidad, la junta regional de calificación de invalidez; contra su dictamen procede la apelación ante la junta nacional. El dictamen debe indicar tres cosas: el porcentaje de pérdida de capacidad, el origen (común o laboral) y la fecha de estructuración. Cualquiera de las tres puede controvertirse, y cada una cambia el resultado económico.",
      "La fecha de estructuración es el punto más litigado. Cuando se fija en el momento del diagnóstico y no en el momento en que la persona efectivamente perdió la capacidad de trabajar, quedan por fuera semanas cotizadas después de esa fecha y la solicitud se niega por falta de densidad. La jurisprudencia constitucional ha corregido esa práctica en enfermedades degenerativas, congénitas o crónicas, ordenando contar las semanas aportadas con posterioridad cuando la persona siguió trabajando de forma real.",
      "El origen también define quién paga. Si la pérdida de capacidad proviene de un accidente de trabajo o de una enfermedad laboral, la prestación corre por cuenta de la ARL, con reglas y montos distintos y sin exigencia de semanas. Si el origen es común, responde la administradora de pensiones. Las controversias de origen entre EPS, ARL y fondo son frecuentes y no pueden trasladarse al afiliado: mientras se definen, la prestación económica debe seguir cubriéndose.",
      "El requisito de las 50 semanas en los tres años anteriores tiene excepciones importantes. Para menores de 20 años basta con 26 semanas en el año anterior. Además, la Corte Constitucional ha inaplicado el requisito de fidelidad al sistema que introdujo la Ley 860 de 2003 por ser regresivo, de modo que hoy no puede exigirse como condición para el reconocimiento.",
      "El monto se liquida sobre el ingreso base de liquidación: 45% cuando la pérdida está entre el 50% y el 66%, con un 1,5% adicional por cada 50 semanas cotizadas por encima de las primeras 500; y 54% cuando la pérdida es igual o superior al 66%, con un 2% adicional por cada 50 semanas sobre las primeras 800. La mesada no puede ser inferior al salario mínimo legal mensual vigente.",
      "Mientras se define el caso, la protección no queda en el aire. El pago de incapacidades corresponde a la EPS durante los primeros 180 días y a la administradora de pensiones a partir del día 181 cuando el concepto de rehabilitación es favorable. Muchas negativas se resuelven precisamente por esa vía: acreditando que la entidad omitió emitir el concepto de rehabilitación dentro del término legal.",
      "La reclamación empieza con la solicitud ante la administradora acompañada de la historia clínica completa, las epicrisis, los conceptos de especialistas, las incapacidades y la historia laboral. Ante la negativa proceden los recursos y luego la demanda ordinaria laboral. La tutela procede de forma excepcional cuando la persona está en situación de discapacidad, sin ingresos y con el mínimo vital comprometido, escenario en el que el juez constitucional puede ordenar el reconocimiento o el pago transitorio.",
      "Cuando la controversia es exclusivamente médica —el porcentaje asignado— la estrategia pasa por documentar con conceptos de especialistas la limitación funcional real, no solo el diagnóstico. El manual único de calificación valora deficiencia, discapacidad y minusvalía; aportar valoraciones que midan esas dimensiones suele ser lo que mueve el porcentaje por encima del umbral del 50%.",
    ],
    norma: {
      articulo: "Art. 39 Ley 100 de 1993",
      norma: "Modificado por la Ley 860 de 2003 · Decreto 1833 de 2016",
      texto:
        "Tendrá derecho a la pensión de invalidez el afiliado al sistema que conforme a lo dispuesto en el artículo anterior sea declarado inválido y acredite haber cotizado cincuenta (50) semanas dentro de los últimos tres (3) años inmediatamente anteriores a la fecha de estructuración.",
    },
    plazo: PLAZO_PENSIONAL,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Además de la mesada, la reclamación incluye el retroactivo desde la fecha de estructuración —o desde el último pago de incapacidades— dentro del límite de prescripción, y los intereses moratorios cuando hubo demora injustificada.",
        "Si el dictamen fijó un porcentaje o una fecha de estructuración desfavorable, lo primero no es demandar la pensión sino controvertir el dictamen dentro de los términos, porque de él depende todo lo demás.",
      ],
      lista: [
        "Mesada de invalidez desde el 45% hasta el 54% del IBL",
        "Retroactivo de mesadas causadas dentro de los 3 años",
        "Intereses moratorios del art. 141 de la Ley 100",
        "Pago de incapacidades a partir del día 181",
        "Corrección de la fecha de estructuración",
        "Revisión del porcentaje de pérdida de capacidad laboral",
      ],
    },
    pasos: [
      { titulo: "Reúne la historia clínica completa", texto: "Epicrisis, conceptos de especialistas, exámenes, incapacidades y conceptos de rehabilitación. El dictamen se construye con documentos, no con relatos." },
      { titulo: "Pide la calificación", texto: "Solicítala ante la administradora. Revisa porcentaje, origen y fecha de estructuración apenas te notifiquen el dictamen." },
      { titulo: "Controvierte a tiempo", texto: "Si no estás de acuerdo, manifiesta la inconformidad dentro del término para que el caso pase a la junta regional y luego a la nacional." },
      { titulo: "Reclama y recurre", texto: "Radica la solicitud de pensión y, ante la negativa, presenta reposición y apelación dentro de los 10 días siguientes." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos dictamen, semanas y fecha de estructuración, y te conectamos con un abogado de pensiones verificado." },
    ],
    cruce: {
      texto:
        "Cuando la discusión es sobre el porcentaje o el origen del dictamen, el trámite continúa ante las juntas de calificación. El procedimiento, los términos y los recursos están explicados en",
      enlace: "la junta de calificación de invalidez",
      silo: "riesgos-laborales",
      subarea: "junta-de-calificacion",
    },
    faqs: [
      { pregunta: "¿Cuánto porcentaje se necesita para la pensión de invalidez?", respuesta: "Se requiere una pérdida de capacidad laboral igual o superior al 50%, certificada en un dictamen que además debe indicar el origen y la fecha de estructuración." },
      { pregunta: "¿Qué pasa si la fecha de estructuración deja por fuera mis semanas?", respuesta: "Puede controvertirse. En enfermedades degenerativas o crónicas la jurisprudencia ordena contar las semanas cotizadas después de esa fecha cuando la persona siguió trabajando de manera real." },
      { pregunta: "¿Me pueden exigir fidelidad al sistema?", respuesta: "No. El requisito de fidelidad introducido por la Ley 860 de 2003 fue declarado inconstitucional por regresivo y no puede exigirse para reconocer la pensión de invalidez." },
      { pregunta: "¿Quién paga si la invalidez es por un accidente de trabajo?", respuesta: "La ARL, dentro del sistema de riesgos laborales, con reglas distintas y sin exigencia de semanas. Por eso la definición del origen en el dictamen es determinante." },
      { pregunta: "¿Quién paga las incapacidades mientras se define la pensión?", respuesta: "La EPS durante los primeros 180 días y la administradora de pensiones a partir del día 181 cuando el concepto de rehabilitación es favorable." },
    ],
  },

  "pensiones/sobrevivientes": {
    h1: "Pensión de sobrevivientes en Colombia",
    title: "Pensión de sobrevivientes en Colombia",
    description: "Quiénes son beneficiarios, cómo se prueba la convivencia y qué hacer si el fondo niega la pensión.",
    respuesta:
      "La pensión de sobrevivientes se reconoce cuando fallece un pensionado o un afiliado que cotizó al menos 50 semanas dentro de los tres años anteriores a la muerte (arts. 46 y 47 de la Ley 100 de 1993, modificados por la Ley 797 de 2003). Son beneficiarios, en su orden: el cónyuge o compañero permanente con convivencia acreditada, los hijos menores de 18 años, los hijos entre 18 y 25 años que estudien, los hijos en situación de invalidez sin límite de edad y, a falta de todos ellos, los padres que dependían económicamente del causante y, en último lugar, los hermanos en condición de discapacidad. La controversia más frecuente no es sobre el derecho sino sobre quién lo tiene: cónyuge separado de hecho frente a compañera permanente actual.",
    parrafos: [
      "La convivencia es el requisito que decide la mayoría de los casos. Para el cónyuge o compañero permanente mayor de 30 años la pensión es vitalicia si acredita convivencia con el causante durante al menos cinco años continuos anteriores al fallecimiento; si es menor de 30 años y no tuvo hijos con el causante, la prestación es temporal por veinte años, durante los cuales debe seguir cotizando para su propia pensión.",
      "Cuando hay cónyuge no divorciado separado de hecho y compañera o compañero permanente actual, la jurisprudencia admite la convivencia simultánea o el reparto proporcional al tiempo convivido con cada uno, según el caso. La prueba es la clave: declaraciones extrajuicio, testimonios, registro civil, documentos de afiliación en salud, direcciones compartidas en facturas, cuentas conjuntas, fotografías fechadas, correspondencia y cualquier registro que muestre vida en común.",
      "Los hijos acreditan el derecho con el registro civil de nacimiento. Entre los 18 y los 25 años deben demostrar que dependían económicamente del causante y que estudian, con certificación de la institución educativa, y esa certificación debe renovarse periódicamente para que el pago continúe. Los hijos en situación de invalidez conservan el derecho sin límite de edad, con dictamen de pérdida de capacidad laboral.",
      "Los padres solo acceden a falta de cónyuge, compañero e hijos con derecho, y deben probar la dependencia económica respecto del causante. La jurisprudencia no exige dependencia total y absoluta: basta que el aporte del hijo fallecido haya sido significativo y regular para el sostenimiento, criterio que ha permitido reconocer la prestación a padres con ingresos propios modestos.",
      "El monto es el 100% de la mesada que venía recibiendo el pensionado, o el 45% del ingreso base de liquidación más los incrementos por semanas adicionales cuando fallece un afiliado activo. Se reparte entre los beneficiarios: 50% para el cónyuge o compañero y 50% entre los hijos; si no hay cónyuge, el 100% se distribuye entre los hijos, y si no hay hijos, el 100% corresponde al cónyuge.",
      "Cuando el fondo recibe reclamaciones de varias personas suele suspender el pago y remitir el asunto al juez laboral para que defina el mejor derecho. Eso puede dejar a la familia meses sin ingresos, por lo que conviene solicitar el pago provisional a los beneficiarios cuyo derecho no está en disputa —normalmente los hijos menores— mientras se resuelve la controversia entre adultos.",
      "El auxilio funerario es una prestación distinta y compatible: quien acredite haber sufragado los gastos del sepelio tiene derecho a que la administradora le reembolse un valor equivalente al último salario base de cotización o a la última mesada, con topes legales, y debe reclamarse con las facturas a nombre de quien pagó.",
      "La ruta es la misma del resto del sistema: solicitud ante Colpensiones o el fondo con registro civil de defunción, documentos que acrediten el parentesco o la convivencia y la historia laboral del causante; ante la negativa, recursos dentro de los diez días y luego demanda ordinaria laboral. Cuando la familia queda sin ingresos y hay menores de por medio, la tutela puede ordenar el pago provisional mientras el proceso avanza.",
    ],
    norma: {
      articulo: "Art. 46 Ley 100 de 1993",
      norma: "Modificado por la Ley 797 de 2003 · Decreto 1833 de 2016",
      texto:
        "Tendrán derecho a la pensión de sobrevivientes los miembros del grupo familiar del pensionado por vejez o invalidez que fallezca, y los miembros del grupo familiar del afiliado que fallezca, siempre y cuando este hubiere cotizado cincuenta (50) semanas dentro de los tres (3) últimos años inmediatamente anteriores al fallecimiento.",
    },
    plazo: PLAZO_PENSIONAL,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La reclamación comprende la mesada de sobrevivientes desde la fecha del fallecimiento, el retroactivo dentro del límite de prescripción de tres años, los intereses moratorios cuando la entidad se demoró sin justificación y el auxilio funerario a favor de quien pagó el sepelio.",
        "Si hay controversia entre beneficiarios, puede pedirse el pago provisional a favor de quienes no están en disputa mientras el juez define el mejor derecho.",
      ],
      lista: [
        "Mesada de sobrevivientes con la proporción que corresponde",
        "Retroactivo desde el fallecimiento (hasta 3 años)",
        "Intereses moratorios del art. 141 de la Ley 100",
        "Auxilio funerario con las facturas del sepelio",
        "Pago provisional a hijos menores mientras se define la disputa",
        "Reconocimiento de convivencia simultánea o reparto proporcional",
      ],
    },
    pasos: [
      { titulo: "Reúne los documentos del causante", texto: "Registro civil de defunción, cédula, historia laboral y resolución de pensión si era pensionado." },
      { titulo: "Prepara la prueba de convivencia o parentesco", texto: "Registros civiles, declaraciones, afiliaciones en salud, facturas con dirección común, cuentas conjuntas y testimonios." },
      { titulo: "Radica la solicitud", texto: "Ante Colpensiones o el fondo, pidiendo también el auxilio funerario cuando corresponda." },
      { titulo: "Recurre o demanda", texto: "Ante la negativa, reposición y apelación en 10 días; si hay varios reclamantes, prepárate para el proceso ordinario laboral." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos beneficiarios, prueba y plazos, y te conectamos con un abogado de pensiones verificado." },
    ],
    faqs: [
      { pregunta: "¿Cuánto tiempo de convivencia se exige?", respuesta: "Cinco años continuos anteriores al fallecimiento para el cónyuge o compañero permanente mayor de 30 años. Si es menor de 30 y no tuvo hijos con el causante, la pensión es temporal por veinte años." },
      { pregunta: "¿Quién tiene derecho si hay esposa y compañera permanente?", respuesta: "Puede reconocerse convivencia simultánea o repartirse la mesada en proporción al tiempo convivido con cada una, según la prueba aportada. Es la controversia más común y la define el juez laboral." },
      { pregunta: "¿Hasta qué edad cobran los hijos?", respuesta: "Hasta los 18 años, o hasta los 25 si estudian y dependían económicamente del causante, acreditándolo con certificación educativa. Los hijos en situación de invalidez conservan el derecho sin límite de edad." },
      { pregunta: "¿Los padres pueden reclamarla?", respuesta: "Sí, a falta de cónyuge, compañero e hijos con derecho, probando la dependencia económica. No se exige dependencia total: basta que el aporte del hijo fallecido haya sido significativo y regular." },
      { pregunta: "¿Qué es el auxilio funerario?", respuesta: "Un reembolso a favor de quien pagó los gastos del sepelio, equivalente al último salario base de cotización o a la última mesada, con topes legales. Se reclama con las facturas a nombre de quien pagó." },
    ],
  },

  "pensiones/reliquidacion": {
    h1: "Reliquidación de pensión en Colombia",
    title: "Reliquidación de pensión en Colombia",
    description: "Cuándo procede subir la mesada, qué factores salariales se incluyen y cómo se reclama el retroactivo.",
    respuesta:
      "La reliquidación de pensión procede cuando la entidad reconoció el derecho pero calculó mal la mesada: tomó un periodo equivocado para el ingreso base de liquidación, excluyó factores salariales que sí eran cotizables, aplicó una tasa de reemplazo inferior a la que correspondía, desconoció semanas efectivamente cotizadas o dejó de aplicar el régimen de transición o el régimen especial procedente. No se discute si hay derecho a pensión —eso ya está reconocido— sino cuánto debe pagarse, y como la diferencia se proyecta de por vida y hacia atrás, suele ser la reclamación pensional con mejor relación entre esfuerzo y resultado.",
    parrafos: [
      "El primer punto de revisión es el ingreso base de liquidación. En prima media se calcula con el promedio de lo cotizado en los diez años anteriores al reconocimiento, actualizado con el IPC, o con el promedio de toda la vida laboral cuando resulta más favorable y se cotizaron al menos 1.250 semanas. Muchas resoluciones toman el periodo menos favorable sin justificar la elección, y esa sola corrección cambia la mesada.",
      "El segundo punto son los factores salariales. Deben incluirse todos los que fueron base de cotización: sueldo, primas legales y extralegales cotizadas, horas extras, recargos, comisiones, bonificaciones habituales y auxilios que no fueron pactados como no salariales. En el sector público la discusión es intensa, porque históricamente muchas entidades cotizaron sobre bases incompletas y luego liquidaron la pensión sobre esas mismas bases.",
      "El tercer punto es la tasa de reemplazo. En prima media aumenta con las semanas cotizadas por encima del mínimo, de modo que si la entidad contabilizó menos semanas de las reales, no solo se afecta el requisito sino también el porcentaje aplicable. Revisar la historia laboral es indispensable incluso cuando la pensión ya fue reconocida.",
      "El cuarto punto es el régimen aplicable. Quien estaba amparado por el régimen de transición y fue liquidado con la Ley 100 pierde monto y a veces años de mesada. Lo mismo ocurre con regímenes especiales —docentes, empleados públicos bajo la Ley 33 de 1985, congresistas, fuerza pública— cuya aplicación exige acreditar el supuesto de hecho con certificaciones laborales precisas.",
      "También procede la reliquidación cuando el pensionado siguió cotizando después del reconocimiento, cuando se reconoció una mesada sobre bono pensional mal calculado, cuando se omitieron tiempos de servicio público certificados en CETIL o cuando hubo indexación de la primera mesada no aplicada, un supuesto que la jurisprudencia constitucional ha protegido para evitar que la inflación erosione el derecho entre el retiro y el reconocimiento.",
      "El trámite empieza por derecho de petición de reliquidación ante la administradora, con la resolución de reconocimiento, la historia laboral, los certificados de factores salariales expedidos por los empleadores y el cálculo alternativo que se propone. Un escrito que se limita a pedir «revisión» sin cuantificar la diferencia rara vez prospera; el que aporta el cálculo con soporte documental obliga a la entidad a pronunciarse sobre cifras.",
      "Ante la negativa proceden los recursos dentro de los diez días y luego la demanda: ordinaria laboral cuando se trata de Colpensiones o fondos privados, y nulidad y restablecimiento del derecho ante la jurisdicción contencioso-administrativa cuando el acto proviene de una entidad pública con régimen especial, escenario en el que el plazo de caducidad es de cuatro meses desde la notificación del acto.",
      "El efecto económico se calcula en dos direcciones. Hacia adelante, la diferencia mensual multiplicada por la expectativa de vida y por las trece o catorce mesadas anuales según el caso. Hacia atrás, el retroactivo limitado a los tres años anteriores a la reclamación, con indexación e intereses moratorios cuando la entidad se negó sin fundamento. Por eso radicar la petición cuanto antes no es un trámite: es dinero.",
    ],
    norma: {
      articulo: "Art. 21 Ley 100 de 1993",
      norma: "Ley 797 de 2003 · Decreto 1833 de 2016",
      texto:
        "Se entiende por ingreso base para liquidar las pensiones el promedio de los salarios o rentas sobre los cuales ha cotizado el afiliado durante los diez (10) años anteriores al reconocimiento de la pensión, actualizados anualmente con base en la variación del índice de precios al consumidor.",
    },
    plazo: PLAZO_PENSIONAL,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La reliquidación se traduce en una mesada mayor hacia adelante y en un retroactivo hacia atrás por la diferencia dejada de pagar, dentro del límite de prescripción de tres años.",
        "Cuando la negativa fue injustificada, además del retroactivo pueden reclamarse la indexación de las sumas adeudadas y los intereses moratorios del artículo 141 de la Ley 100.",
      ],
      lista: [
        "Recálculo del IBL con el periodo más favorable",
        "Inclusión de factores salariales cotizados y omitidos",
        "Corrección de la tasa de reemplazo por semanas reales",
        "Aplicación del régimen de transición o especial",
        "Retroactivo de las diferencias (últimos 3 años)",
        "Indexación de la primera mesada e intereses moratorios",
      ],
    },
    pasos: [
      { titulo: "Consigue la resolución de reconocimiento", texto: "Ahí está la fórmula usada: periodo del IBL, factores, semanas y tasa de reemplazo aplicada." },
      { titulo: "Pide certificados de factores salariales", texto: "A cada empleador, discriminando sueldo, primas, horas extras, comisiones y bonificaciones cotizadas." },
      { titulo: "Haz el cálculo alternativo", texto: "Cuantifica la diferencia mensual y el retroactivo. Sin cifras, la petición rara vez prospera." },
      { titulo: "Radica y recurre a tiempo", texto: "Petición de reliquidación, recursos en 10 días y demanda. Si el acto es de una entidad pública, la caducidad es de 4 meses." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos la resolución y el IBL, y te conectamos con un abogado de pensiones verificado." },
    ],
    faqs: [
      { pregunta: "¿Cuándo procede reliquidar la pensión?", respuesta: "Cuando el IBL se calculó con un periodo desfavorable, se excluyeron factores salariales cotizados, se contabilizaron menos semanas de las reales o se aplicó un régimen distinto al que correspondía." },
      { pregunta: "¿Cuánto retroactivo puedo recuperar?", respuesta: "Las diferencias causadas en los tres años anteriores a la reclamación, por efecto de la prescripción de mesadas. Por eso conviene radicar la petición escrita lo antes posible." },
      { pregunta: "¿Puedo reliquidar si seguí cotizando después de pensionarme?", respuesta: "Sí. Las cotizaciones posteriores al reconocimiento pueden dar lugar a un recálculo de la mesada, siempre que se acrediten con la historia laboral actualizada." },
      { pregunta: "¿Qué es la indexación de la primera mesada?", respuesta: "La actualización del ingreso base entre el retiro y el reconocimiento para que la inflación no reduzca el valor real de la pensión. La jurisprudencia constitucional la ha reconocido en múltiples casos." },
      { pregunta: "¿Ante quién se demanda?", respuesta: "Ante el juez laboral cuando se trata de Colpensiones o fondos privados, y ante la jurisdicción contencioso-administrativa cuando el acto proviene de una entidad pública, con caducidad de cuatro meses." },
    ],
  },
};

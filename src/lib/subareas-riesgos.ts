import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo RIESGOS LABORALES.
 * Todos los plazos: // VERIFICAR CON ABOGADO
 */

// VERIFICAR CON ABOGADO — plazo común a las 5 subáreas del silo
const PLAZO_DICTAMEN = {
  titulo: "Dictamen: 10 días hábiles para recurrir",
  texto:
    "Tienes 10 días hábiles para manifestar inconformidad con un dictamen de calificación ante la Junta Regional, y 10 días hábiles más para apelar ante la Junta Nacional. Vencidos esos términos el dictamen queda en firme y solo puede discutirse ante el juez laboral.",
};

export const SUBAREAS_RIESGOS: Record<string, ContenidoSubarea> = {
  "riesgos-laborales/accidente-de-trabajo": {
    h1: "Accidente de trabajo: qué debe pagar la ARL",
    title: "Accidente de trabajo: qué debe pagar la ARL",
    description: "Qué cubre la ARL tras un accidente de trabajo y qué hacer si niega el origen laboral.",
    respuesta:
      "Un accidente de trabajo es todo suceso repentino que ocurre por causa o con ocasión del trabajo y produce una lesión, una perturbación funcional o psiquiátrica, invalidez o muerte. Calificado como laboral, la ARL debe cubrir la atención médica integral sin copagos, pagar la incapacidad temporal al 100% del ingreso base de cotización desde el día siguiente al accidente y, si quedan secuelas, reconocer indemnización o pensión de invalidez según el porcentaje de pérdida de capacidad.",
    parrafos: [
      "La definición del artículo 3 de la Ley 1562 de 2012 es más amplia de lo que la mayoría cree. Es accidente de trabajo el que ocurre durante la ejecución de órdenes del empleador aun fuera del lugar y horas de trabajo, el que sucede durante el traslado entre la residencia y el sitio de labor cuando el transporte lo suministra el empleador, y el que ocurre en actividades recreativas, deportivas o culturales cuando el trabajador actúa por cuenta o en representación de la empresa.",
      "El empleador debe reportar el evento a la ARL y a la EPS mediante el FURAT dentro de los dos días hábiles siguientes. Ese reporte es la puerta de entrada al sistema, y su ausencia es el argumento más usado para negar cobertura. Cuando la empresa no reporta —lo habitual en accidentes que parecen menores— el trabajador puede reportar directamente y debe hacerlo por escrito, conservando la constancia.",
      "Mientras el origen está en discusión, la atención en salud no puede suspenderse: la EPS presta el servicio y luego repite contra la ARL si el evento se declara laboral. Lo que sí cambia es el dinero: la EPS paga el subsidio al 66% del salario, mientras que la ARL paga el 100% del ingreso base de cotización. Esa diferencia explica por qué tantos accidentes terminan calificados como de origen común.",
      "Si el accidente deja secuelas permanentes se abre la etapa de calificación de pérdida de capacidad laboral con el Manual Único del Decreto 1507 de 2014. Con un porcentaje entre el 5% y el 49,99% la ARL reconoce una indemnización por incapacidad permanente parcial, proporcional al porcentaje y liquidada en meses de ingreso base. Con 50% o más se reconoce pensión de invalidez equivalente al 60% del ingreso base de liquidación, o al 75% cuando la pérdida es del 66% o superior. En caso de muerte, pensión de sobrevivientes para los beneficiarios y auxilio funerario.",
      "Todo lo anterior es lo que paga el sistema, sin discutir culpa. Cuando el accidente ocurrió por culpa comprobada del empleador —falta de elementos de protección, maquinaria sin mantenimiento, ausencia de capacitación, incumplimiento del sistema de gestión de seguridad y salud en el trabajo— el artículo 216 del Código Sustantivo del Trabajo abre una reclamación adicional contra la empresa por la indemnización total y ordinaria de perjuicios.",
    ],
    norma: {
      articulo: "Art. 3 Ley 1562 de 2012",
      norma: "Sistema General de Riesgos Laborales",
      texto:
        "Es accidente de trabajo todo suceso repentino que sobrevenga por causa o con ocasión del trabajo, y que produzca en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez o la muerte.",
    },
    plazo: PLAZO_DICTAMEN,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Frente a la ARL se reclama la cobertura integral: asistencia médica, quirúrgica, terapéutica, farmacéutica y de rehabilitación sin copagos ni cuotas moderadoras, el subsidio por incapacidad temporal al 100% del ingreso base de cotización y las prestaciones económicas que correspondan según el dictamen de pérdida de capacidad laboral.",
        "Frente al empleador, cuando hay culpa patronal probada, se reclama la indemnización plena de perjuicios: daño emergente, lucro cesante presente y futuro, daño moral y daño a la vida de relación, descontando lo que la ARL haya pagado por prestaciones económicas. Y en todos los casos, la protección del empleo: reubicación y estabilidad reforzada mientras persistan las restricciones.",
      ],
      lista: [
        "Atención médica y rehabilitación integral a cargo de la ARL, sin copagos",
        "Incapacidad temporal al 100% del ingreso base de cotización",
        "Indemnización por incapacidad permanente parcial entre 5% y 49,99%",
        "Pensión de invalidez desde el 50% de pérdida de capacidad laboral",
      ],
    },
    pasos: [
      { titulo: "Busca atención médica el mismo día", texto: "La historia clínica que describe el mecanismo de la lesión y su relación con la tarea es la prueba central del caso." },
      { titulo: "Exige el reporte a la ARL", texto: "El empleador tiene 2 días hábiles para diligenciar el FURAT. Si no lo hace, repórtalo tú por escrito y conserva la constancia." },
      { titulo: "Documenta las condiciones del trabajo", texto: "Fotos del lugar, testigos, elementos de protección entregados o no, capacitaciones recibidas y estado de la maquinaria." },
      { titulo: "Sigue el tratamiento y guarda todo", texto: "Incapacidades, órdenes, terapias y conceptos de rehabilitación sustentan tanto el subsidio como la futura calificación." },
      { titulo: "Controvierte el dictamen si no refleja tu estado", texto: "Tienes 10 días hábiles ante la Junta Regional y 10 más para apelar ante la Nacional." },
    ],
    faqs: [
      {
        pregunta: "¿Un accidente camino al trabajo es accidente de trabajo?",
        respuesta:
          "Solo cuando el transporte lo suministra el empleador o cuando el desplazamiento se hace en cumplimiento de una orden suya. El trayecto ordinario desde la casa en transporte propio o público no se considera, por regla general, accidente de trabajo en Colombia.",
      },
      {
        pregunta: "¿Qué pasa si mi empresa no me tenía afiliado a la ARL?",
        respuesta:
          "La afiliación es obligación del empleador y su omisión no elimina la protección: la empresa queda obligada a asumir directamente todas las prestaciones asistenciales y económicas que habría reconocido la ARL, además de las sanciones administrativas correspondientes.",
      },
      {
        pregunta: "¿La ARL puede negarse a pagar si el accidente fue mi culpa?",
        respuesta:
          "El sistema de riesgos laborales es objetivo: cubre el evento sin discutir culpa del trabajador, salvo casos extremos como el hecho intencional. La culpa importa en otra discusión distinta, la de la indemnización plena de perjuicios frente al empleador.",
      },
      {
        pregunta: "¿Cuánto me pagan mientras estoy incapacitado?",
        respuesta:
          "La ARL paga el 100% del ingreso base de cotización desde el día siguiente al accidente y mientras dure la incapacidad temporal, a diferencia del origen común, donde la EPS paga las dos terceras partes del salario.",
      },
      {
        pregunta: "¿Me pueden despedir después de un accidente de trabajo?",
        respuesta:
          "No sin autorización previa del inspector del trabajo cuando persisten secuelas o restricciones. El despido en esas condiciones es ineficaz y da lugar a reintegro, pago de salarios dejados de percibir y la indemnización de la Ley 361 de 1997.",
      },
    ],
  },

  "riesgos-laborales/enfermedad-laboral": {
    h1: "Enfermedad laboral: cómo se reconoce y qué paga la ARL",
    title: "Enfermedad laboral: cómo se reconoce en Colombia",
    description: "Diferencia con la enfermedad común, cómo se prueba el nexo causal y qué reconoce la ARL.",
    respuesta:
      "Una enfermedad es laboral cuando resulta de la exposición a factores de riesgo propios de la actividad que el trabajador desempeña o del medio en que labora. Si está en la tabla del Decreto 1477 de 2014 y se demuestra la exposición al agente de riesgo, el origen se presume laboral; si no está en la tabla, hay que probar la relación de causalidad. Reconocida como laboral, la ARL asume la atención integral, paga la incapacidad al 100% y reconoce indemnización o pensión según la pérdida de capacidad.",
    parrafos: [
      "La diferencia entre enfermedad laboral y de origen común no es médica sino jurídica, y define quién paga y cuánto. En origen común la EPS presta la atención con copagos y paga el subsidio al 66% del salario; en origen laboral la ARL cubre todo sin copagos y paga el 100% del ingreso base de cotización. La misma patología —una hernia discal, una hipoacusia, un síndrome del túnel carpiano— puede ser una u otra según la exposición demostrada.",
      "La tabla de enfermedades laborales del Decreto 1477 de 2014 clasifica los agentes de riesgo —químicos, físicos, biológicos, psicosociales, ergonómicos— y las patologías asociadas a cada uno. Cuando la enfermedad figura en la tabla y se acredita que el trabajador estuvo expuesto al agente correspondiente en su puesto, opera una presunción a favor del origen laboral y la carga de desvirtuarla recae en la administradora.",
      "Cuando la enfermedad no está listada, el reconocimiento exige demostrar el nexo causal entre el trabajo y la patología. Ahí la prueba se construye con la descripción detallada del puesto y de las tareas repetitivas, la matriz de peligros de la empresa, los estudios de puesto de trabajo, las mediciones ambientales, los exámenes médicos ocupacionales de ingreso y periódicos, y los conceptos del médico especialista en salud ocupacional.",
      "Los casos más frecuentes en Colombia son los desórdenes musculoesqueléticos por movimientos repetitivos y posturas forzadas, la hipoacusia neurosensorial por ruido, las patologías respiratorias por polvos y químicos, las afecciones dermatológicas y, cada vez más, los trastornos mentales asociados a factores de riesgo psicosocial, que la tabla reconoce expresamente pero que siguen siendo los más negados.",
      "El trámite comienza con el reporte de presunta enfermedad laboral por parte del empleador o del propio trabajador, y sigue con la calificación en primera oportunidad por la EPS, la ARL o el fondo de pensiones. En desacuerdo, el caso pasa a la junta regional de calificación de invalidez y luego a la nacional, con términos cortos que conviene no dejar vencer.",
    ],
    norma: {
      articulo: "Art. 4 Ley 1562 de 2012",
      norma: "Sistema General de Riesgos Laborales",
      texto:
        "Es enfermedad laboral la contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar.",
    },
    plazo: PLAZO_DICTAMEN,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Reconocido el origen laboral, la ARL debe asumir el tratamiento integral, la rehabilitación y el subsidio por incapacidad temporal al 100% del ingreso base de cotización, además de las prestaciones económicas que resulten del dictamen: indemnización por incapacidad permanente parcial entre el 5% y el 49,99%, o pensión de invalidez desde el 50%.",
        "Si el trabajador ya recibió atención y subsidios de la EPS, la reclamación incluye la diferencia entre lo pagado al 66% y el 100% que correspondía. Y cuando la enfermedad se produjo por incumplimiento del empleador en materia de seguridad y salud en el trabajo, se abre la reclamación por culpa patronal del artículo 216 del Código Sustantivo del Trabajo.",
      ],
      lista: [
        "Calificación del origen como laboral y atención integral sin copagos",
        "Incapacidad temporal al 100% del ingreso base de cotización",
        "Indemnización o pensión según el porcentaje de pérdida de capacidad",
        "Reubicación en un puesto compatible con las restricciones médicas",
      ],
    },
    pasos: [
      { titulo: "Reporta la presunta enfermedad laboral", texto: "Puede hacerlo el empleador o el trabajador. Sin reporte no se abre el trámite de calificación de origen." },
      { titulo: "Documenta la exposición al riesgo", texto: "Descripción del cargo, tareas repetitivas, jornada, herramientas, mediciones ambientales y matriz de peligros de la empresa." },
      { titulo: "Reúne la historia clínica ocupacional", texto: "Exámenes de ingreso, periódicos y de retiro muestran la evolución y sirven para descartar la preexistencia." },
      { titulo: "Pide la calificación en primera oportunidad", texto: "La hace la EPS, la ARL o el fondo. Revisa que el dictamen indique origen, porcentaje y fecha de estructuración." },
      { titulo: "Recurre dentro de los términos", texto: "10 días hábiles ante la Junta Regional y 10 días hábiles más para apelar ante la Junta Nacional." },
    ],
    faqs: [
      {
        pregunta: "¿Cómo sé si mi enfermedad es laboral o común?",
        respuesta:
          "Depende de la exposición al factor de riesgo. Si la patología está en la tabla del Decreto 1477 de 2014 y trabajaste expuesto al agente asociado, el origen se presume laboral. Si no está en la tabla, hay que probar el nexo causal entre las condiciones de trabajo y la enfermedad.",
      },
      {
        pregunta: "¿El estrés o la depresión pueden ser enfermedad laboral?",
        respuesta:
          "Sí. La tabla incluye patologías asociadas a factores de riesgo psicosocial. El reconocimiento exige documentar la exposición —carga de trabajo, jornadas, acoso, presión por resultados— con la batería de riesgo psicosocial de la empresa y la valoración de especialistas.",
      },
      {
        pregunta: "¿Qué pasa si ya no trabajo en la empresa donde me enfermé?",
        respuesta:
          "El origen se determina por la exposición ocurrida, no por el vínculo actual. Se puede solicitar la calificación después de terminado el contrato, aunque la prueba se vuelve más difícil, por lo que conviene pedir la historia clínica ocupacional y los exámenes de retiro.",
      },
      {
        pregunta: "¿La ARL puede negar el origen porque tengo una condición previa?",
        respuesta:
          "La preexistencia no excluye automáticamente el origen laboral. Si el trabajo agravó una condición previa, la calificación debe reconocer esa contribución. Es uno de los puntos donde más se controvierten dictámenes ante las juntas.",
      },
      {
        pregunta: "¿Quién paga mientras se define el origen?",
        respuesta:
          "La EPS presta la atención y paga el subsidio mientras se resuelve, y luego repite contra la ARL si el evento se declara laboral. La atención no puede suspenderse por el desacuerdo entre entidades.",
      },
    ],
  },

  "riesgos-laborales/perdida-de-capacidad-laboral": {
    h1: "Pérdida de capacidad laboral: qué significa tu porcentaje",
    title: "Pérdida de capacidad laboral: qué significa",
    description: "Cómo se calcula el porcentaje de pérdida de capacidad y qué prestación abre cada rango.",
    respuesta:
      "La pérdida de capacidad laboral es el porcentaje en que se afecta la capacidad de una persona para trabajar, y se determina con el Manual Único de Calificación del Decreto 1507 de 2014. Ese número decide la prestación: por debajo del 5% no hay prestación económica; entre el 5% y el 49,99% se reconoce una indemnización por incapacidad permanente parcial; desde el 50% se reconoce pensión de invalidez. Por eso un punto de diferencia puede cambiar por completo el resultado.",
    parrafos: [
      "El Manual Único de Calificación valora tres componentes: la deficiencia, que mide la alteración de las funciones y estructuras corporales; la discapacidad, que mide las limitaciones en la actividad y la restricción en la participación; y el rol laboral y ocupacional, que pondera la edad, la escolaridad y el oficio. La suma de esos componentes arroja el porcentaje final, expresado en una escala de 0 a 100.",
      "Junto al porcentaje, el dictamen fija dos datos igual de importantes. El origen —común o laboral— define quién paga: la ARL en el origen laboral, la EPS y el fondo de pensiones en el común. Y la fecha de estructuración señala el momento desde el cual se considera consolidada la pérdida, dato que determina qué semanas se cuentan y desde cuándo se causan las prestaciones.",
      "Los rangos importan porque cada uno abre una puerta distinta. Menos del 5% no genera prestación económica, aunque sí mantiene la atención en salud. Entre el 5% y el 49,99% hay incapacidad permanente parcial y la indemnización se liquida en meses de ingreso base de forma proporcional al porcentaje. Desde el 50% hay invalidez y procede la pensión, equivalente al 60% del ingreso base de liquidación, o al 75% cuando la pérdida es del 66% o superior en el sistema de riesgos laborales.",
      "Conviene entender que el porcentaje no es una opinión médica aislada sino el resultado de una fórmula reglada: cada deficiencia tiene un valor asignado en el manual, y la combinación de varias no se suma de forma lineal. Por eso dos personas con el mismo diagnóstico pueden recibir porcentajes distintos según su edad, su escolaridad y el oficio que desempeñan, y por eso la descripción precisa del cargo real es tan determinante como la historia clínica.",
      "Los errores de calificación más frecuentes son valorar solo el diagnóstico principal e ignorar patologías concurrentes, no considerar el rol ocupacional real de la persona, calificar con exámenes desactualizados, fijar una fecha de estructuración anterior a la pérdida efectiva de la capacidad de trabajar y omitir las secuelas psiquiátricas asociadas a la condición física.",
      "El dictamen se puede controvertir. Notificado el resultado, hay diez días hábiles para manifestar inconformidad y llevarlo a la junta regional de calificación de invalidez, y diez días hábiles más para apelar ante la Junta Nacional. La discusión se gana con soporte clínico nuevo y completo, no con la simple manifestación de desacuerdo.",
    ],
    norma: {
      articulo: "Decreto 1507 de 2014",
      norma: "Manual Único para la Calificación de la Pérdida de Capacidad Laboral",
      texto:
        "Establece los criterios técnicos para calificar la pérdida de capacidad laboral y ocupacional, valorando la deficiencia, la discapacidad y el rol laboral, ocupacional y otros factores, en una escala de 0 a 100.",
    },
    plazo: PLAZO_DICTAMEN,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Se reclama que el porcentaje refleje la condición real, que el origen esté bien determinado y que la fecha de estructuración corresponda al momento en que efectivamente se perdió la capacidad de trabajar. De esos tres datos dependen la prestación, el pagador y el retroactivo.",
        "Según el resultado, la reclamación económica es la indemnización por incapacidad permanente parcial, la pensión de invalidez con sus mesadas retroactivas o, cuando el porcentaje se mantiene bajo pero hay restricciones, la reubicación laboral y la estabilidad reforzada en el empleo.",
      ],
      lista: [
        "Revisión del porcentaje cuando el dictamen ignoró patologías concurrentes",
        "Corrección del origen: laboral en lugar de común",
        "Ajuste de la fecha de estructuración y pago de retroactivos",
        "Indemnización por incapacidad permanente parcial o pensión de invalidez",
      ],
    },
    pasos: [
      { titulo: "Solicita la calificación por escrito", texto: "Ante la EPS, la ARL o el fondo, según el caso. Debe hacerse una vez terminado el tratamiento o cumplidos los términos de rehabilitación." },
      { titulo: "Aporta historia clínica completa", texto: "Todas las patologías, no solo la principal: conceptos de especialistas, exámenes recientes y valoraciones de salud mental." },
      { titulo: "Revisa los tres datos del dictamen", texto: "Porcentaje, origen y fecha de estructuración. Un error en cualquiera cambia la prestación o el pagador." },
      { titulo: "Manifiesta inconformidad en 10 días hábiles", texto: "El caso pasa a la Junta Regional de Calificación de Invalidez con los soportes que aportes." },
      { titulo: "Apela ante la Junta Nacional", texto: "Otros 10 días hábiles. Agotada esa instancia, la discusión queda en manos del juez laboral." },
    ],
    faqs: [
      {
        pregunta: "¿Desde qué porcentaje me pensionan por invalidez?",
        respuesta:
          "Desde el 50% de pérdida de capacidad laboral. Por debajo de ese umbral y desde el 5% se reconoce una indemnización por incapacidad permanente parcial, proporcional al porcentaje dictaminado.",
      },
      {
        pregunta: "¿Qué es la fecha de estructuración y por qué importa?",
        respuesta:
          "Es el momento desde el cual se considera consolidada la pérdida de capacidad. Determina qué semanas de cotización se cuentan y desde cuándo se causan las prestaciones. Una fecha mal fijada puede dejar por fuera cotizaciones válidas y hacer perder la pensión.",
      },
      {
        pregunta: "¿Puedo pedir que me recalifiquen?",
        respuesta:
          "Sí. Pasado el término que fija la norma, o cuando la condición se agrava, se puede solicitar una nueva calificación. También procede la revisión cuando aparecen patologías nuevas relacionadas o secuelas que no existían al momento del primer dictamen.",
      },
      {
        pregunta: "¿Quién paga los honorarios de la junta?",
        respuesta:
          "Los honorarios los asume, por regla general, la entidad que remite el caso o quien solicita la intervención de la junta, en los términos de la normativa vigente. Cuando el trabajador debe asumirlos y no tiene capacidad de pago, esa situación puede plantearse ante la junta.",
      },
      {
        pregunta: "¿Sirve de algo controvertir si el porcentaje quedó cerca del 50%?",
        respuesta:
          "Sí, y es precisamente donde más vale la pena. Un dictamen de 46% o 48% que ignoró patologías concurrentes o el rol ocupacional puede superar el 50% al ser revisado, lo que cambia una indemnización única por una pensión vitalicia.",
      },
    ],
  },

  "riesgos-laborales/calificacion-de-origen": {
    h1: "Calificación de origen laboral: quién decide y cómo controvertirla",
    title: "Calificación de origen laboral: cómo se decide",
    description: "Quién califica el origen de tu evento, por qué cambia lo que te pagan y cómo controvertirlo.",
    respuesta:
      "La calificación de origen determina si un accidente o una enfermedad es de origen laboral o común, y con ello quién paga y cuánto. En primera oportunidad califican la EPS, la ARL o el fondo de pensiones; si el trabajador o alguna entidad no está de acuerdo, el caso pasa a la junta regional de calificación de invalidez y luego a la Junta Nacional. La diferencia es sustancial: la ARL cubre sin copagos y paga la incapacidad al 100%, la EPS al 66% y con copagos.",
    parrafos: [
      "El sistema colombiano separa dos mundos con reglas distintas. El de origen común, financiado por los aportes a salud y pensión, y el de origen laboral, financiado íntegramente por el empleador a través de la ARL. Ese diseño crea un incentivo permanente al conflicto: cada administradora tiene razones económicas para sostener que el evento pertenece al otro sistema.",
      "Quien califica en primera oportunidad es la entidad que tiene el caso: la EPS, la ARL o el fondo de pensiones, según la prestación que se esté tramitando. Esa calificación debe notificarse al trabajador y al empleador y debe estar motivada, con el análisis del puesto de trabajo y de la historia clínica. Una calificación sin motivación real es discutible por esa sola razón.",
      "El conflicto típico se da entre tres actores. La ARL sostiene que la patología es degenerativa o preexistente; la EPS argumenta que la exposición laboral fue determinante; el fondo de pensiones intenta que el caso no llegue a invalidez de origen común. Mientras discuten, el trabajador queda en el medio, muchas veces sin subsidio y con el tratamiento fragmentado.",
      "La jurisprudencia ha sido clara en que ese conflicto no puede trasladarse al afiliado: la atención en salud debe continuar y las prestaciones económicas deben pagarse por la entidad que corresponda mientras se resuelve, con derecho a repetir después. Cuando el pago se suspende de hecho, la tutela suele ser la vía más rápida para reactivarlo.",
      "Hay un punto práctico que decide muchos casos: la calificación de origen no depende de que la empresa haya reportado el evento. El trabajador puede pedirla directamente, incluso años después y aunque ya no trabaje allí, siempre que pueda documentar la exposición. Lo que sí se vuelve más difícil con el tiempo es conseguir el estudio del puesto de trabajo y los exámenes ocupacionales, que suelen quedar en poder del antiguo empleador.",
      "Controvertir la calificación exige aportar prueba nueva y pertinente: el estudio del puesto de trabajo, la matriz de peligros, las mediciones ambientales, la descripción detallada de las tareas y su frecuencia, los exámenes ocupacionales de ingreso y periódicos, y los conceptos de los médicos tratantes sobre la relación entre la actividad y la patología. La simple inconformidad, sin soporte, rara vez cambia el dictamen.",
    ],
    norma: {
      articulo: "Art. 142 Decreto Ley 019 de 2012",
      norma: "Calificación del estado de invalidez",
      texto:
        "Corresponde al Instituto de Seguros Sociales, hoy Colpensiones, a las administradoras de riesgos laborales, a las compañías de seguros que asuman el riesgo de invalidez y muerte y a las entidades promotoras de salud, determinar en primera oportunidad la pérdida de capacidad laboral y calificar el grado de invalidez y el origen de las contingencias.",
    },
    plazo: PLAZO_DICTAMEN,
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        "El camino natural es manifestar inconformidad dentro de los diez días hábiles siguientes a la notificación, con lo cual el expediente se remite a la junta regional de calificación de invalidez, un organismo privado con función pública e integrado por profesionales de distintas especialidades. Su dictamen es apelable ante la Junta Nacional dentro de los diez días hábiles siguientes.",
        "Agotadas las juntas, la discusión queda en sede judicial ante el juez laboral, que puede decretar pruebas periciales y apartarse del dictamen cuando encuentra que no valoró adecuadamente la exposición o las patologías. En paralelo, si el trabajador quedó sin atención o sin pago, la tutela protege el mínimo vital mientras el trámite avanza.",
      ],
      lista: [
        "Manifestar inconformidad y llevar el caso a la Junta Regional",
        "Apelar el dictamen regional ante la Junta Nacional",
        "Reclamar la diferencia entre lo pagado por la EPS y lo que debía pagar la ARL",
        "Tutela cuando la atención o el subsidio se suspenden durante el conflicto",
      ],
    },
    pasos: [
      { titulo: "Pide la calificación motivada por escrito", texto: "Debe indicar origen, porcentaje y fecha de estructuración, con el análisis que la sustenta." },
      { titulo: "Revisa qué prueba usó la entidad", texto: "Muchos dictámenes se apoyan solo en la historia clínica y omiten el estudio del puesto de trabajo." },
      { titulo: "Consigue el estudio de puesto de trabajo", texto: "Es la prueba que conecta la tarea con la patología: tareas, frecuencia, posturas, cargas y mediciones ambientales." },
      { titulo: "Manifiesta inconformidad en 10 días hábiles", texto: "Con los soportes nuevos. El expediente pasa a la Junta Regional de Calificación de Invalidez." },
      { titulo: "Apela y, si es necesario, demanda", texto: "10 días hábiles más ante la Junta Nacional; agotada esa vía, la discusión sigue ante el juez laboral." },
    ],
    faqs: [
      {
        pregunta: "¿Por qué es tan importante que el origen sea laboral?",
        respuesta:
          "Porque cambia el pagador y el monto: la ARL cubre la atención sin copagos y paga la incapacidad al 100% del ingreso base de cotización, mientras que en origen común la EPS paga las dos terceras partes del salario y aplican copagos y cuotas moderadoras.",
      },
      {
        pregunta: "¿Quién califica primero?",
        respuesta:
          "La EPS, la ARL o el fondo de pensiones, según la entidad que esté tramitando la prestación. Esa es la calificación en primera oportunidad y debe notificarse de forma motivada al trabajador y al empleador.",
      },
      {
        pregunta: "¿Qué hago si me suspenden el pago mientras discuten el origen?",
        respuesta:
          "El conflicto entre entidades no puede afectar al afiliado. La atención debe continuar y el pago debe hacerse por la entidad que corresponda con derecho a repetir. Si de hecho se suspende, la tutela es la vía más rápida para restablecerlo.",
      },
      {
        pregunta: "¿Puedo pedir yo mismo la calificación de origen?",
        respuesta:
          "Sí. El trabajador puede solicitarla directamente ante la entidad, y también puede hacerlo el empleador. No depende de que la empresa reporte, aunque el reporte facilita el trámite y evita discusiones sobre la ocurrencia del evento.",
      },
      {
        pregunta: "¿El dictamen de la Junta Nacional es definitivo?",
        respuesta:
          "Es la última instancia administrativa, pero no cierra la discusión: el dictamen puede controvertirse ante el juez laboral, que valora las pruebas y puede apartarse de él cuando encuentra que la calificación no consideró adecuadamente la exposición o las patologías.",
      },
    ],
  },

  "riesgos-laborales/junta-de-calificacion": {
    h1: "Junta de calificación de invalidez: cómo funciona",
    title: "Junta de calificación de invalidez: cómo funciona",
    description: "Qué hacen las juntas regional y nacional, en qué plazos recurrir y qué documentos pesan.",
    respuesta:
      "Las juntas de calificación de invalidez son organismos privados con función pública que dictaminan el origen del evento, el porcentaje de pérdida de capacidad laboral y la fecha de estructuración cuando hay desacuerdo con la calificación en primera oportunidad. Existe una junta regional en cada departamento y una Junta Nacional que resuelve las apelaciones. Tienes 10 días hábiles para llevar el caso a la regional y 10 días hábiles más para apelar ante la nacional.",
    parrafos: [
      "La junta no es una entidad estatal ni una EPS: es un cuerpo colegiado integrado por médicos y profesionales de distintas especialidades, con función pública y autonomía técnica, cuyo dictamen tiene efectos vinculantes para las entidades del sistema mientras no sea desvirtuado. Su intervención se activa cuando alguien —el trabajador, el empleador, la EPS, la ARL o el fondo— manifiesta inconformidad con la calificación en primera oportunidad.",
      "El trámite empieza con la remisión del expediente y el pago de los honorarios por parte de quien corresponde según la normativa. La junta estudia el caso, puede citar al trabajador a valoración presencial, solicitar exámenes adicionales o pedir el estudio del puesto de trabajo, y emite un dictamen motivado que debe pronunciarse sobre los tres elementos: origen, porcentaje y fecha de estructuración.",
      "Lo que más pesa en la decisión es el soporte documental. Historia clínica completa y actualizada de todas las patologías, no solo de la principal; conceptos de los especialistas tratantes; resultados de exámenes recientes; valoración de salud mental cuando hay afectación emocional asociada; y, para la discusión de origen, el estudio del puesto de trabajo con descripción de tareas, frecuencia, cargas y mediciones ambientales.",
      "Contra el dictamen de la junta regional procede la apelación ante la Junta Nacional dentro de los diez días hábiles siguientes a su notificación, y conviene sustentarla con prueba nueva y no con la simple repetición de argumentos. Vencido el término sin recurso, el dictamen queda en firme y las entidades quedan obligadas a aplicarlo.",
      "Un detalle que sorprende a muchos trabajadores es que la junta no revisa el tratamiento ni ordena prestaciones: su función es exclusivamente dictaminar origen, porcentaje y fecha de estructuración. Quien paga y qué se reconoce lo define después la entidad responsable aplicando ese dictamen, de modo que un dictamen favorable todavía requiere una reclamación posterior ante la ARL, la EPS o el fondo de pensiones.",
      "Después del dictamen nacional se agota la vía administrativa, pero no la discusión: el trabajador o la entidad pueden acudir al juez laboral, que valora el dictamen como una prueba más, puede decretar peritajes y puede apartarse de él con motivación suficiente. Ese proceso toma tiempo, por lo que la estrategia probatoria conviene definirla desde la primera instancia y no al final.",
    ],
    norma: {
      articulo: "Decreto 1072 de 2015",
      norma: "Decreto Único Reglamentario del Sector Trabajo",
      texto:
        "Compila la regulación de las juntas regionales y nacional de calificación de invalidez, su naturaleza de organismos privados con función pública, su integración, competencias y el procedimiento para la emisión y controversia de sus dictámenes.",
    },
    plazo: PLAZO_DICTAMEN,
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        "Ante la junta se busca corregir lo que la calificación en primera oportunidad dejó mal: un origen calificado como común cuando era laboral, un porcentaje que ignoró patologías concurrentes o el rol ocupacional, o una fecha de estructuración que deja por fuera cotizaciones válidas y bloquea la pensión.",
        "La estrategia es documental y técnica. No se trata de manifestar desacuerdo, sino de aportar el elemento que faltó: el concepto del especialista que valoró la patología omitida, el estudio de puesto de trabajo que conecta la tarea con la lesión o la valoración psiquiátrica que la calificación inicial nunca consideró.",
      ],
      lista: [
        "Corrección del origen del evento: laboral en lugar de común",
        "Revisión del porcentaje con todas las patologías concurrentes",
        "Ajuste de la fecha de estructuración y de los retroactivos que genera",
        "Apelación ante la Junta Nacional y, agotada esta, demanda laboral",
      ],
    },
    pasos: [
      { titulo: "Recibe y lee el dictamen completo", texto: "Verifica origen, porcentaje, fecha de estructuración y la fecha exacta de notificación: desde ahí corren los 10 días hábiles." },
      { titulo: "Manifiesta inconformidad por escrito", texto: "Dentro de los 10 días hábiles, ante la entidad que calificó, indicando qué punto se controvierte y por qué." },
      { titulo: "Prepara el expediente para la junta", texto: "Historia clínica completa, conceptos de especialistas, exámenes recientes, estudio de puesto de trabajo y descripción de tareas." },
      { titulo: "Asiste a la valoración", texto: "La junta puede citarte. Lleva los soportes originales y describe con precisión las limitaciones en tu vida diaria y laboral." },
      { titulo: "Apela ante la Junta Nacional si es necesario", texto: "10 días hábiles con prueba nueva. Agotada esa instancia, la discusión continúa ante el juez laboral." },
    ],
    faqs: [
      {
        pregunta: "¿Qué diferencia hay entre la junta regional y la nacional?",
        respuesta:
          "La regional conoce el caso cuando hay desacuerdo con la calificación en primera oportunidad; la nacional resuelve la apelación contra el dictamen regional. Ambas son organismos privados con función pública, integrados por profesionales de distintas especialidades.",
      },
      {
        pregunta: "¿Cuánto tiempo tengo para recurrir un dictamen?",
        respuesta:
          "Diez días hábiles para manifestar inconformidad con la calificación en primera oportunidad y llevar el caso a la Junta Regional, y diez días hábiles más para apelar el dictamen regional ante la Junta Nacional, contados desde la notificación.",
      },
      {
        pregunta: "¿Qué documentos debo aportar a la junta?",
        respuesta:
          "Historia clínica completa de todas las patologías, conceptos de los especialistas tratantes, exámenes recientes, incapacidades, valoración de salud mental si aplica y, para discutir el origen, el estudio del puesto de trabajo con descripción de tareas y mediciones.",
      },
      {
        pregunta: "¿Puedo asistir con abogado a la junta?",
        respuesta:
          "Sí, puedes estar acompañado y presentar un escrito técnico de sustentación. La junta valora sobre todo la prueba documental, por lo que el aporte principal del abogado está en cómo se arma el expediente antes de la valoración.",
      },
      {
        pregunta: "¿Qué pasa si el dictamen de la Junta Nacional sigue siendo desfavorable?",
        respuesta:
          "Se agota la vía administrativa y queda la judicial: el juez laboral valora el dictamen como una prueba más, puede decretar peritajes y puede apartarse de él con motivación. El proceso toma tiempo, por lo que la prueba conviene construirla desde el inicio.",
      },
    ],
  },
};

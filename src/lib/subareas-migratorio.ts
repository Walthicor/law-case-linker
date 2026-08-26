import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo MIGRATORIO.
 * Norma base: Decreto 1067 de 2015 · Resolución 5477 de 2022.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */

// VERIFICAR CON ABOGADO
const PLAZO_MIGRATORIO = {
  titulo: "Cédula de extranjería: 15 días hábiles",
  texto:
    "Aprobada y estampada la visa, el extranjero debe registrarse ante Migración Colombia y tramitar la cédula de extranjería dentro de los 15 días hábiles siguientes a su expedición o al ingreso al país, según el caso (Decreto 1067 de 2015 y Resolución 5477 de 2022). Incumplir genera multa que puede llegar a varios salarios mínimos. También deben reportarse dentro del mismo término los cambios de domicilio, de actividad o de empleador.",
};

export const SUBAREAS_MIGRATORIO: Record<string, ContenidoSubarea> = {
  "migratorio/visas": {
    h1: "Visa para Colombia: requisitos y tipos",
    title: "Visa Colombia: requisitos y tipos",
    description: "Visas V, M y R: requisitos, documentos, tiempos del trámite y qué hacer si te la niegan.",
    respuesta:
      "Colombia tiene tres tipos de visa según la Resolución 5477 de 2022: la Visa V (visitante), para estancias temporales con propósito definido como turismo de larga duración, negocios, tratamiento médico, estudios cortos o nómada digital; la Visa M (migrante), para quien tiene un vínculo estable con el país —trabajo, matrimonio o unión marital con nacional, hijo colombiano, inversión, socio de empresa, pensionado o rentista—; y la Visa R (residente), para quien acredita permanencia prolongada con visa M, inversión de mayor cuantía, renuncia a la nacionalidad colombiana o padre de nacional colombiano. El trámite es en línea ante el Ministerio de Relaciones Exteriores y la decisión no es automática: es una facultad discrecional del Estado.",
    parrafos: [
      "La Visa V se otorga por periodos que normalmente no superan dos años y no conduce por sí sola a la residencia; el tiempo que se permanece con ella, salvo excepciones, no cuenta para acumular los años exigidos por la Visa R. Es la categoría de quienes vienen por un proyecto concreto: un contrato de prestación de servicios, un programa académico, un tratamiento médico o el trabajo remoto para una empresa extranjera.",
      "La Visa M es la que abre la puerta a la permanencia. Sus modalidades más frecuentes son la de cónyuge o compañero permanente de colombiano, la de padre o madre de nacional colombiano, la de trabajador con contrato laboral en Colombia, la de socio o propietario de sociedad con inversión registrada ante el Banco de la República, la de inversionista inmobiliario y la de pensionado o rentista con ingresos periódicos acreditados. Cada modalidad tiene montos mínimos y soportes distintos que se actualizan periódicamente.",
      "La Visa R exige, en la vía más común, haber permanecido de manera continua con Visa M por un número determinado de años según la modalidad —típicamente dos años para cónyuges y padres de colombiano y cinco para las demás—. Otorga permanencia indefinida sujeta a no ausentarse del país por más de dos años continuos, y habilita el camino hacia la nacionalización por adopción.",
      "El trámite se surte en línea: formulario, fotografía con las especificaciones exigidas, pasaporte vigente con al menos 180 días, soportes de la categoría solicitada y comprobante de estudio de la solicitud. Los documentos expedidos en el exterior deben venir apostillados o legalizados y traducidos oficialmente al español cuando estén en otro idioma; ese requisito, aparentemente formal, es la causa más frecuente de requerimientos y de rechazos por desistimiento.",
      "La autoridad puede requerir información adicional y el solicitante tiene un plazo para responder; vencido sin respuesta, la solicitud se entiende desistida y hay que pagar de nuevo el estudio. Cuando la visa se aprueba, debe pagarse el valor correspondiente dentro del término señalado y estamparse en el pasaporte, física o electrónicamente.",
      "La negativa de visa es un acto discrecional que, en principio, no requiere motivación detallada, lo que hace que la impugnación sea difícil pero no imposible: cuando la decisión se funda en un error de hecho verificable —documentos que sí se aportaron, antecedentes inexistentes, confusión de identidad— procede la solicitud de reconsideración y, en casos límite, la acción de nulidad y restablecimiento del derecho o la tutela cuando hay derechos fundamentales comprometidos, como la unidad familiar.",
      "Tener visa no es lo mismo que estar regularizado. Después de la aprobación viene el registro ante Migración Colombia y la cédula de extranjería dentro de los quince días hábiles siguientes, y durante la vigencia hay deberes continuos: reportar el cambio de domicilio, de empleador o de actividad, y no ejercer una actividad distinta de la autorizada por la categoría de la visa.",
      "El empleador que contrata extranjeros también tiene obligaciones: reportar la vinculación y la terminación del contrato en el sistema de información de Migración Colombia dentro de los términos legales, y verificar que el trabajador tenga permiso vigente para la actividad. El incumplimiento genera sanciones económicas relevantes para la empresa, no solo para el extranjero.",
    ],
    norma: {
      articulo: "Resolución 5477 de 2022",
      norma: "Ministerio de Relaciones Exteriores · Decreto 1067 de 2015",
      texto:
        "Se establecen las disposiciones en materia de visas y se determinan los tipos de visa V (visitante), M (migrante) y R (residente), sus modalidades, requisitos, vigencias y el procedimiento para su solicitud, expedición, negación y cancelación.",
    },
    plazo: PLAZO_MIGRATORIO,
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        "La aprobación depende de acreditar con documentos la categoría solicitada y la solvencia para permanecer en el país sin convertirse en carga pública. La revisión previa del expediente evita el 90% de los requerimientos.",
        "Ante una negativa, la vía es la reconsideración con la prueba que corrige el error, y solo excepcionalmente la vía judicial cuando hay derechos fundamentales comprometidos.",
      ],
      lista: [
        "Visa V: estancia temporal con propósito definido",
        "Visa M: vínculo laboral, familiar o de inversión",
        "Visa R: permanencia indefinida y camino a la nacionalidad",
        "Apostilla y traducción oficial de documentos del exterior",
        "Respuesta al requerimiento dentro del plazo para no desistir",
        "Registro y cédula de extranjería tras la aprobación",
      ],
    },
    pasos: [
      { titulo: "Elige la categoría correcta", texto: "V, M o R según el vínculo real con el país. Pedir la categoría equivocada es la causa más común de negativa." },
      { titulo: "Prepara los soportes", texto: "Pasaporte vigente por más de 180 días, foto con especificaciones, y documentos del exterior apostillados y traducidos." },
      { titulo: "Radica en línea y responde requerimientos", texto: "El silencio ante un requerimiento se entiende como desistimiento y obliga a pagar de nuevo el estudio." },
      { titulo: "Estampa y regulariza", texto: "Paga dentro del término, estampa la visa y tramita registro y cédula de extranjería en los 15 días hábiles siguientes." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos categoría, soportes y plazos, y te conectamos con un abogado migratorio verificado." },
    ],
    faqs: [
      { pregunta: "¿Qué visa necesito si me caso con un colombiano?", respuesta: "La Visa M por cónyuge o compañero permanente de nacional colombiano, acreditando el registro civil de matrimonio o la declaración de unión marital de hecho y la convivencia." },
      { pregunta: "¿Cuánto demora el trámite de visa?", respuesta: "El estudio suele resolverse en pocos días hábiles cuando el expediente está completo, pero cualquier requerimiento reinicia los tiempos. La apostilla y la traducción son las etapas que más demoran." },
      { pregunta: "¿Puedo trabajar con visa de visitante?", respuesta: "Solo en la actividad específica que la visa autoriza. Ejercer una actividad distinta de la autorizada es causal de sanción y de cancelación de la visa." },
      { pregunta: "¿Puedo apelar si me niegan la visa?", respuesta: "La negativa es discrecional y no siempre motivada, pero procede la solicitud de reconsideración cuando hay un error de hecho verificable, y excepcionalmente la vía judicial si hay derechos fundamentales afectados." },
      { pregunta: "¿Cuántos años de Visa M se necesitan para la Visa R?", respuesta: "Depende de la modalidad: típicamente dos años continuos para cónyuges y padres de nacional colombiano y cinco años para las demás categorías." },
    ],
  },

  "migratorio/cedula-de-extranjeria": {
    h1: "Cédula de extranjería en Colombia",
    title: "Cédula de extranjería en Colombia",
    description: "Quién debe sacarla, plazo de 15 días hábiles, documentos, costo y multas por no registrarse.",
    respuesta:
      "La cédula de extranjería es el documento de identidad de los extranjeros en Colombia y es obligatoria para todo titular de visa V con vigencia superior a tres meses y para todos los titulares de visa M y R. Debe tramitarse ante Migración Colombia dentro de los 15 días hábiles siguientes a la expedición de la visa o al ingreso al país, según corresponda, y su incumplimiento genera multa. Sin cédula de extranjería no es posible abrir cuentas bancarias, afiliarse al sistema de seguridad social, firmar contratos laborales formales, matricular vehículos ni realizar la mayoría de los trámites que exigen identificación en el país.",
    parrafos: [
      "El trámite se inicia en línea en el portal de Migración Colombia: se diligencia el formulario, se paga el valor del documento y se agenda la cita para el registro biométrico, en la que se toman huellas y fotografía. En algunos casos el documento se expide en formato digital y físico, con la vigencia atada a la de la visa que le da soporte.",
      "Los documentos usuales son el pasaporte con la visa estampada vigente, el formulario diligenciado, el comprobante de pago y, cuando aplica, los soportes del vínculo o de la actividad. Para menores de edad se exigen documentos adicionales de representación y autorización de los padres, con apostilla y traducción cuando fueron expedidos en el exterior.",
      "La obligación no se agota con la expedición. El extranjero debe informar a Migración Colombia, dentro de los términos legales, el cambio de domicilio, de empleador, de actividad, el cambio de estado civil y la salida definitiva del país. La desactualización de esos datos es una de las infracciones migratorias más comunes y una de las que más multas produce en las verificaciones.",
      "La renovación procede cuando se renueva o cambia la visa, cuando cambia la categoría o cuando el documento se vence, se pierde o se deteriora. En caso de pérdida conviene denunciar y tramitar el duplicado de inmediato: circular sin documento de identificación válido expone a procedimientos de verificación migratoria.",
      "Los titulares de Permiso por Protección Temporal tienen un régimen distinto: el PPT no es cédula de extranjería, aunque sirva como documento de identificación para trabajar y afiliarse a salud. Confundir ambos documentos lleva a errores frecuentes en contrataciones y en trámites bancarios.",
      "La multa por no registrarse dentro del término, por no reportar novedades o por permanecer con documentación vencida se liquida en salarios mínimos según la gravedad y el tiempo de la irregularidad, y su pago es requisito para regularizar la situación. En casos más graves —permanencia irregular prolongada, uso de documentos falsos o ejercicio de actividad no autorizada— proceden sanciones que pueden llegar a la deportación o expulsión, con prohibición de reingreso por varios años.",
      "Frente a una sanción migratoria hay defensa. El procedimiento sancionatorio se rige por el Código de Procedimiento Administrativo, lo que implica derecho a ser oído, a aportar pruebas, a que la decisión sea motivada y a interponer los recursos de reposición y apelación dentro de los diez días hábiles siguientes a la notificación. La caducidad de la facultad sancionatoria y la desproporción de la sanción son argumentos frecuentemente exitosos.",
      "Para el empleador, verificar la cédula de extranjería vigente y el permiso para la actividad no es un formalismo: la contratación de extranjeros sin autorización, o la omisión del reporte de vinculación y desvinculación en el sistema de información, genera sanciones económicas a la empresa que suelen superar con mucho el costo de haber hecho el trámite bien.",
    ],
    norma: {
      articulo: "Decreto 1067 de 2015",
      norma: "Decreto Único del Sector Relaciones Exteriores · Resolución 5477 de 2022",
      texto:
        "Los extranjeros titulares de visa cuya vigencia sea superior a tres meses deberán registrarse ante la autoridad migratoria y obtener la cédula de extranjería dentro de los quince (15) días hábiles siguientes a la expedición de la visa o a su ingreso al territorio nacional, e informar todo cambio de domicilio, actividad o empleador.",
    },
    plazo: PLAZO_MIGRATORIO,
    reclamar: {
      titulo: "Qué habilita y qué exige",
      parrafos: [
        "La cédula de extranjería es la llave de la vida formal en Colombia: sin ella no hay banco, seguridad social, contrato laboral formal ni trámites notariales o de tránsito.",
        "A cambio impone deberes continuos de actualización que, incumplidos, generan multas y comprometen la renovación de la visa.",
      ],
      lista: [
        "Apertura de cuentas y productos financieros",
        "Afiliación a salud y pensiones",
        "Contratación laboral formal",
        "Trámites notariales, de tránsito y de propiedad",
        "Reporte obligatorio de cambio de domicilio o empleador",
        "Renovación al cambiar o renovar la visa",
      ],
    },
    pasos: [
      { titulo: "Cuenta los 15 días hábiles", texto: "Corren desde la expedición de la visa o el ingreso al país. Es el plazo más incumplido y el que más multas genera." },
      { titulo: "Radica en línea y agenda la cita", texto: "Formulario, pago y registro biométrico con pasaporte y visa vigente." },
      { titulo: "Mantén los datos actualizados", texto: "Reporta cambio de domicilio, empleador, actividad y estado civil dentro de los términos legales." },
      { titulo: "Si te sancionan, defiéndete", texto: "El procedimiento admite pruebas y recursos de reposición y apelación dentro de los 10 días hábiles siguientes a la notificación." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos plazos, multas y opciones de regularización, y te conectamos con un abogado migratorio verificado." },
    ],
    faqs: [
      { pregunta: "¿Quién debe sacar cédula de extranjería?", respuesta: "Todo titular de visa M o R y los titulares de visa V con vigencia superior a tres meses, dentro de los 15 días hábiles siguientes a la expedición de la visa o al ingreso." },
      { pregunta: "¿Qué multa hay por no registrarse a tiempo?", respuesta: "La sanción se liquida en salarios mínimos según la gravedad y el tiempo de la irregularidad, y su pago es requisito para regularizar la situación migratoria." },
      { pregunta: "¿El PPT reemplaza la cédula de extranjería?", respuesta: "No. El Permiso por Protección Temporal es un documento distinto, con su propio régimen, aunque permita identificarse, trabajar y afiliarse a salud." },
      { pregunta: "¿Debo avisar si cambio de trabajo?", respuesta: "Sí. El cambio de empleador, de actividad o de domicilio debe reportarse a Migración Colombia dentro de los términos legales; omitirlo es una infracción sancionable." },
      { pregunta: "¿Puedo defenderme de una sanción migratoria?", respuesta: "Sí. El procedimiento sancionatorio exige decisión motivada y admite pruebas y recursos de reposición y apelación dentro de los diez días hábiles siguientes a la notificación." },
    ],
  },

  "migratorio/nacionalizacion": {
    h1: "Nacionalidad colombiana por adopción",
    title: "Nacionalidad colombiana por adopción",
    description: "Requisitos, años de residencia, examen de conocimientos y trámite de la carta de naturaleza.",
    respuesta:
      "La nacionalidad colombiana por adopción se obtiene mediante carta de naturaleza o resolución de inscripción que expide el Ministerio de Relaciones Exteriores. El requisito central es haber residido en Colombia de manera continua con visa de residente (Visa R) durante cinco años; el término se reduce a dos años para el cónyuge o compañero permanente de nacional colombiano y para el padre o madre de hijo colombiano, y los nacionales de países latinoamericanos y del Caribe por nacimiento cuentan con condiciones especiales de reciprocidad. Además de la residencia, el solicitante debe acreditar solvencia económica, no tener antecedentes penales y aprobar un examen de conocimientos sobre historia, geografía, Constitución y español.",
    parrafos: [
      "La continuidad de la residencia es el punto que más solicitudes frena. Las ausencias del país interrumpen o suspenden el conteo según su duración, y la Visa R se pierde cuando el titular se ausenta por más de dos años continuos. Antes de radicar conviene reconstruir el historial de entradas y salidas con los movimientos migratorios que certifica Migración Colombia, y no confiar en la memoria ni en los sellos del pasaporte.",
      "La solvencia económica se acredita con ingresos regulares y lícitos: contrato laboral y desprendibles, declaración de renta, certificación de contador, extractos bancarios o comprobantes de la actividad económica. No se exige un patrimonio elevado, sino demostrar que la persona se sostiene por sí misma y cumple sus obligaciones tributarias y de seguridad social.",
      "El examen de conocimientos evalúa historia y geografía de Colombia, organización del Estado y Constitución, y el dominio del español mediante una entrevista. Están exentos, entre otros, quienes acrediten determinadas condiciones de edad o discapacidad y quienes hayan cursado estudios formales en el país en los términos que fija la reglamentación. El examen se presenta ante la autoridad designada y su resultado tiene vigencia limitada.",
      "El expediente incluye el formulario, el pasaporte y la cédula de extranjería vigentes, los certificados de antecedentes judiciales del país de origen y de los países donde se haya residido —apostillados y traducidos—, los soportes de solvencia, dos personas que certifiquen la conducta cuando se exige, y el comprobante de pago. Los documentos extranjeros sin apostilla o con traducción no oficial son la causa número uno de devolución.",
      "Aprobada la solicitud, el trámite culmina con la carta de naturaleza y el juramento de fidelidad a la Constitución en un acto formal ante la autoridad competente. Solo después de ese juramento y de la inscripción del acta puede tramitarse la cédula de ciudadanía colombiana ante la Registraduría, momento en el que se adquieren plenamente los derechos políticos.",
      "Colombia permite la doble nacionalidad: adquirir la colombiana no obliga a renunciar a la de origen, aunque el país de origen sí puede imponer sus propias consecuencias, por lo que conviene revisar esa legislación antes de culminar el trámite. El colombiano por adopción no pierde la nacionalidad por adquirir otra, pero puede renunciar a ella voluntariamente.",
      "Hay una vía distinta que conviene no confundir: la nacionalidad por nacimiento de los hijos de extranjeros nacidos en Colombia, que exige que al menos uno de los padres estuviera domiciliado en el país al momento del nacimiento —requisito que se flexibilizó para hijos de migrantes venezolanos con el fin de evitar la apatridia—. Ese trámite se surte ante la Registraduría, no ante la Cancillería.",
      "La negativa de la solicitud debe estar motivada y admite los recursos del procedimiento administrativo. Cuando se funda en un error de hecho —cómputo equivocado de la residencia, antecedentes que no corresponden, documentos que sí se aportaron— la reposición con prueba suele bastar; cuando la interpretación de la autoridad es la que se discute, la vía es la nulidad y restablecimiento del derecho, con caducidad de cuatro meses desde la notificación.",
    ],
    norma: {
      articulo: "Art. 96 C.P. · Ley 43 de 1993",
      norma: "Decreto 1067 de 2015 · Constitución Política",
      texto:
        "Son nacionales colombianos por adopción los extranjeros que soliciten y obtengan carta de naturalización, de acuerdo con la ley, la cual establecerá los casos en los cuales se pierde la nacionalidad colombiana por adopción. Ningún colombiano por nacimiento podrá ser privado de su nacionalidad.",
    },
    plazo: PLAZO_MIGRATORIO,
    reclamar: {
      titulo: "Qué se exige y qué se obtiene",
      parrafos: [
        "Se exige residencia continua con Visa R, solvencia, ausencia de antecedentes y examen de conocimientos; el término se reduce a dos años para cónyuges y padres de nacional colombiano.",
        "Se obtiene la carta de naturaleza, el juramento, la inscripción y, con ellos, la cédula de ciudadanía y los derechos políticos plenos, conservando la nacionalidad de origen.",
      ],
      lista: [
        "5 años de residencia con Visa R (2 en casos especiales)",
        "Solvencia económica acreditada",
        "Antecedentes judiciales apostillados y traducidos",
        "Examen de historia, Constitución, geografía y español",
        "Carta de naturaleza y juramento de fidelidad",
        "Cédula de ciudadanía y derechos políticos",
      ],
    },
    pasos: [
      { titulo: "Certifica tus movimientos migratorios", texto: "Pide el certificado de entradas y salidas para confirmar que la residencia fue continua antes de radicar." },
      { titulo: "Reúne antecedentes y soportes", texto: "Certificados del país de origen y de donde hayas residido, apostillados y traducidos oficialmente, más prueba de solvencia." },
      { titulo: "Prepara y presenta el examen", texto: "Historia, geografía, Constitución y español, salvo que estés en una de las causales de exención." },
      { titulo: "Culmina con el juramento", texto: "Solo después de la carta de naturaleza, el juramento y la inscripción puedes tramitar la cédula de ciudadanía." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos residencia, exenciones y documentos, y te conectamos con un abogado migratorio verificado." },
    ],
    faqs: [
      { pregunta: "¿Cuántos años debo vivir en Colombia para nacionalizarme?", respuesta: "Cinco años de residencia continua con Visa R, o dos años si eres cónyuge o compañero permanente de nacional colombiano o padre o madre de hijo colombiano." },
      { pregunta: "¿Debo renunciar a mi nacionalidad de origen?", respuesta: "Colombia permite la doble nacionalidad y no exige renunciar. Conviene revisar la legislación del país de origen, que sí puede imponer consecuencias propias." },
      { pregunta: "¿En qué consiste el examen?", respuesta: "Evalúa historia y geografía de Colombia, organización del Estado y Constitución, y el dominio del español en entrevista. Existen causales legales de exención." },
      { pregunta: "¿Las salidas del país afectan el trámite?", respuesta: "Sí. Las ausencias pueden interrumpir la continuidad de la residencia, y la Visa R se pierde con ausencias superiores a dos años continuos." },
      { pregunta: "¿Puedo recurrir si me niegan la nacionalidad?", respuesta: "Sí. La decisión debe ser motivada y admite recursos; si la controversia persiste, procede la nulidad y restablecimiento del derecho con caducidad de cuatro meses." },
    ],
  },
};

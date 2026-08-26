import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo LABORAL.
 * Todos los plazos: // VERIFICAR CON ABOGADO
 */
export const SUBAREAS_LABORAL: Record<string, ContenidoSubarea> = {
  "laboral/despido-sin-justa-causa": {
    h1: "Despido sin justa causa: indemnización en Colombia",
    title: "Despido sin justa causa: indemnización",
    description: "Cuánto te deben indemnizar por un despido sin justa causa y en qué plazo reclamarlo.",
    respuesta:
      "Si te despidieron sin justa causa, el empleador debe pagarte una indemnización además de tu liquidación completa. En contrato a término indefinido con salario inferior a 10 salarios mínimos son 30 días de salario por el primer año y 20 días por cada año siguiente; con salario igual o superior a 10 salarios mínimos son 20 y 15 días. En contrato a término fijo, el valor de los salarios que faltaban hasta el vencimiento pactado.",
    parrafos: [
      "El despido sin justa causa es legal en Colombia: el empleador puede terminar el contrato cuando quiera, pero paga por hacerlo. Lo que no puede es inventar una causal para ahorrarse la indemnización. Cuando la carta de terminación invoca una justa causa del artículo 62 del Código Sustantivo del Trabajo y esa causa no se probó, no se le imputó al trabajador con claridad o no hubo diligencia de descargos, el despido se convierte en injusto y la indemnización se causa igual.",
      "Hay una diferencia clave que muchos trabajadores desconocen: la indemnización no reemplaza la liquidación, se suma a ella. La liquidación —cesantías, intereses del 12%, prima, vacaciones y salarios pendientes— se debe siempre, sin importar por qué terminó el contrato. La indemnización del artículo 64 solo aparece cuando la terminación fue unilateral del empleador y sin justa causa, o cuando el trabajador renunció por un despido indirecto provocado por la empresa.",
      "También existe el despido indirecto: la renuncia motivada cuando el empleador incumplió gravemente sus obligaciones, por ejemplo dejando de pagar el salario, desmejorando las condiciones pactadas, trasladando al trabajador sin justificación o tolerando acoso laboral. En ese caso la carta debe explicar los hechos y la fecha, porque de ese documento depende que el juez trate la salida como un despido y no como una renuncia voluntaria.",
      "La base de cálculo importa tanto como la fórmula. El salario para liquidar la indemnización incluye todo lo que constituye retribución directa del servicio: básico, comisiones, horas extras habituales, recargos y bonificaciones que no fueron pactadas expresamente como no salariales. Cuando la empresa liquida solo sobre el básico, la diferencia suele ser significativa y es exactamente lo que se discute en juicio.",
    ],
    norma: {
      articulo: "Art. 64 CST",
      norma: "Código Sustantivo del Trabajo",
      texto:
        "En caso de terminación unilateral del contrato de trabajo sin justa causa comprobada por parte del empleador, este deberá al trabajador una indemnización en los términos que allí se establecen según la modalidad y duración del contrato.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Prescripción: 3 años",
      texto:
        "La acción para reclamar la indemnización por despido sin justa causa prescribe en 3 años contados desde la terminación del contrato (art. 488 CST). Una reclamación escrita al empleador interrumpe ese plazo por una sola vez y por un periodo igual.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La reclamación no se limita a la indemnización del artículo 64. Cuando el empleador no paga la liquidación al terminar el contrato, se activa la sanción moratoria del artículo 65 del Código Sustantivo del Trabajo: un día de salario por cada día de retardo durante los primeros 24 meses, y desde ahí en adelante intereses moratorios a la tasa máxima de créditos de libre asignación.",
        "A eso se suman los conceptos que quedaron mal liquidados durante toda la relación laboral —horas extras, recargos nocturnos, dominicales, comisiones no incluidas en la base prestacional— y los aportes a seguridad social que el empleador dejó de pagar. En un mismo proceso ordinario laboral se pueden acumular todas esas pretensiones.",
      ],
      lista: [
        "Indemnización del art. 64 según el tipo de contrato y tu salario real",
        "Liquidación completa: cesantías, intereses, prima y vacaciones",
        "Sanción moratoria del art. 65 por cada día de retardo en el pago",
        "Reajuste de prestaciones por salario mal liquidado y aportes no pagados",
      ],
    },
    pasos: [
      { titulo: "No firmes bajo presión", texto: "Ni carta de renuncia redactada por la empresa, ni transacción, ni paz y salvo el mismo día. Una transacción firmada limita lo que después puedes reclamar." },
      { titulo: "Pide la carta de terminación", texto: "El empleador debe entregarla por escrito con los motivos. Si invoca una justa causa, esos motivos son los únicos que podrá probar en juicio." },
      { titulo: "Reúne la prueba antes de perder el acceso", texto: "Contrato, otrosíes, desprendibles de los últimos 3 años, certificación laboral, correos y mensajes donde conste el motivo real de la salida." },
      { titulo: "Calcula lo que te deben", texto: "Suma indemnización, liquidación y conceptos mal pagados con el salario real, no con el básico que aparece en el contrato." },
      { titulo: "Reclama por escrito y luego demanda", texto: "La reclamación interrumpe la prescripción y muchas veces resuelve el caso. Si no hay respuesta, sigue la demanda ordinaria laboral." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto me deben pagar por un despido sin justa causa?",
        respuesta:
          "En contrato indefinido con salario inferior a 10 salarios mínimos: 30 días de salario por el primer año y 20 días por cada año adicional, proporcional a las fracciones. Con salario igual o superior a 10 mínimos: 20 días por el primer año y 15 por cada uno siguiente. En contrato a término fijo: los salarios que faltaban hasta la fecha de vencimiento, con un mínimo de 15 días.",
      },
      {
        pregunta: "¿Puedo reclamar si firmé la liquidación?",
        respuesta:
          "Sí. Firmar el recibo de la liquidación no implica renunciar a lo que quedó mal pagado. Distinto es firmar una transacción o un acuerdo conciliatorio, que sí cierra los conceptos expresamente incluidos, salvo que se demuestre vicio del consentimiento o que se transaron derechos ciertos e indiscutibles.",
      },
      {
        pregunta: "¿Qué pasa si me despidieron estando incapacitado o en embarazo?",
        respuesta:
          "Ese despido requiere autorización previa del inspector del trabajo. Sin ella es ineficaz y no da lugar solo a indemnización: da lugar a reintegro con el pago de los salarios y aportes dejados de percibir, más la indemnización adicional que la ley prevé para esos casos.",
      },
      {
        pregunta: "¿Me pueden despedir sin darme una razón?",
        respuesta:
          "Sí, el empleador puede terminar el contrato sin justa causa, pero debe pagar la indemnización legal. Lo que no puede es despedir por motivos discriminatorios, en represalia por una denuncia o por el ejercicio de derechos sindicales o de asociación.",
      },
      {
        pregunta: "¿Cuánto tarda un proceso por despido injusto?",
        respuesta:
          "Un acuerdo tras la reclamación escrita puede lograrse en semanas. Un proceso ordinario laboral suele tomar entre uno y tres años según el despacho, con audiencia obligatoria de conciliación al inicio donde muchos casos terminan.",
      },
    ],
  },

  "laboral/liquidacion": {
    h1: "¿Cuándo me deben pagar la liquidación?",
    title: "¿Cuándo me deben pagar la liquidación?",
    description: "El pago de la liquidación va el último día del contrato: qué sanción corre si se retrasan.",
    respuesta:
      "La liquidación debe pagarse al terminar el contrato, es decir el mismo día en que finaliza la relación laboral. No existe un plazo legal de 15, 30 o 60 días: esa demora es una práctica de las empresas, no una regla. Si el empleador no paga salarios y prestaciones a la terminación, corre la sanción moratoria del artículo 65 del Código Sustantivo del Trabajo, que equivale a un día de salario por cada día de retardo.",
    parrafos: [
      "La confusión es frecuente porque muchas empresas anuncian que la liquidación se paga con la siguiente nómina o al cierre del mes. Eso no cambia la obligación legal: el pago es exigible desde la terminación del contrato, sea por renuncia, por despido, por vencimiento del plazo pactado o por mutuo acuerdo. Desde el día siguiente el empleador está en mora y esa mora tiene precio.",
      "La sanción del artículo 65 no es simbólica. Para trabajadores que devengan más de un salario mínimo, el empleador debe pagar un día de salario por cada día de retardo durante los primeros veinticuatro meses; si al terminar ese periodo sigue sin pagar, se causan intereses moratorios a la tasa máxima de créditos de libre asignación certificada por la Superintendencia Financiera. Para quienes devengan el salario mínimo la regla es la de los intereses moratorios desde el inicio.",
      "Hay un matiz importante que los jueces aplican: la sanción no es automática, se estudia la buena fe del empleador. Si la empresa consignó lo que consideraba debido, discutió con argumentos razonables un concepto puntual y demostró que no actuó para dilatar, el juez puede negar la sanción. En cambio, cuando el empleador simplemente no pagó, pagó incompleto sin explicación o condicionó el pago a la firma de un paz y salvo, la mala fe se presume con facilidad.",
      "Otra situación frecuente es el pago condicionado. Algunas empresas entregan el cheque de la liquidación a cambio de la firma de una transacción que renuncia a cualquier reclamo futuro. El trabajador no está obligado a firmar nada para recibir lo que ya le pertenece: la liquidación es un derecho cierto e indiscutible y condicionar su pago es precisamente lo que después se lee como mala fe.",
      "Si el empleador no tiene con qué pagar o desapareció, la liquidación se cobra por proceso ejecutivo cuando existe un título —un acta de conciliación, una liquidación firmada por la empresa— o por proceso ordinario laboral cuando hay que declarar primero el monto adeudado. En insolvencia empresarial, los créditos laborales tienen prelación de primer grado sobre los demás acreedores.",
    ],
    norma: {
      articulo: "Art. 65 CST",
      norma: "Código Sustantivo del Trabajo",
      texto:
        "Si a la terminación del contrato el empleador no paga al trabajador los salarios y prestaciones debidas, deberá pagar al asalariado, como indemnización, una suma igual al último salario diario por cada día de retardo, en los términos y con las modalidades allí previstas.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "El pago es el último día del contrato",
      texto:
        "La liquidación se paga a la terminación del contrato; desde el día siguiente corre la sanción moratoria del art. 65 CST. La acción para reclamar salarios y prestaciones prescribe en 3 años desde que cada obligación se hizo exigible, y la reclamación escrita interrumpe ese plazo por una sola vez.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Además del valor de la liquidación, se reclama la sanción moratoria por cada día de retardo y la corrección de los conceptos mal calculados. El error más costoso es la base salarial: si la empresa liquidó solo sobre el básico e ignoró comisiones, horas extras habituales, recargos, bonificaciones habituales y el auxilio de transporte donde corresponde, todas las prestaciones quedaron por debajo.",
        "También entra la sanción por no consignar las cesantías en el fondo antes del 14 de febrero de cada año, que equivale a un día de salario por cada día de retardo en la consignación, y los intereses a las cesantías del 12% anual que se pagan a más tardar el 31 de enero.",
      ],
      lista: [
        "Cesantías, intereses del 12%, prima de servicios y vacaciones compensadas",
        "Salarios, comisiones y recargos pendientes hasta el último día",
        "Sanción moratoria del art. 65: un día de salario por cada día de retardo",
        "Reajuste de todas las prestaciones si la base salarial fue incorrecta",
      ],
    },
    pasos: [
      { titulo: "Fija la fecha exacta de terminación", texto: "Desde el día siguiente empieza la mora. Guarda la carta de terminación o la renuncia con fecha de recibido." },
      { titulo: "Pide la liquidación desagregada", texto: "Exige el detalle concepto por concepto y la base salarial usada. Sin ese documento no se puede verificar el cálculo." },
      { titulo: "Recalcula con tu salario real", texto: "Incluye comisiones, horas extras habituales, recargos y bonificaciones no pactadas como no salariales." },
      { titulo: "Recibe sin firmar renuncias", texto: "Puedes recibir el pago parcial dejando constancia de que reclamas la diferencia. No firmes transacciones para que te entreguen lo que ya es tuyo." },
      { titulo: "Reclama por escrito y cuenta los días", texto: "La reclamación interrumpe la prescripción y deja documentada la mora que sustenta la sanción del art. 65." },
    ],
    faqs: [
      {
        pregunta: "¿Cuántos días tiene la empresa para pagar la liquidación?",
        respuesta:
          "Ninguno. La obligación es exigible el día de la terminación del contrato. Los plazos de 15 o 30 días que anuncian algunas empresas son prácticas internas y no suspenden la mora ni impiden la sanción del artículo 65 del Código Sustantivo del Trabajo.",
      },
      {
        pregunta: "¿La sanción moratoria se aplica siempre que se retrasan?",
        respuesta:
          "No de forma automática. El juez analiza la buena fe del empleador: si consignó lo que consideraba debido y discutió con razones atendibles un concepto puntual, puede negarla. Si no pagó, pagó incompleto sin explicación o condicionó el pago, la condena es lo habitual.",
      },
      {
        pregunta: "¿Me pueden descontar algo de la liquidación?",
        respuesta:
          "Solo lo autorizado por la ley o por el trabajador por escrito: aportes a seguridad social, retención en la fuente, embargos judiciales, préstamos con autorización expresa y libranzas. Descontar daños, faltantes de caja o multas sin autorización o sin orden judicial no es válido.",
      },
      {
        pregunta: "¿Aplica igual si renuncié?",
        respuesta:
          "Sí. La liquidación se debe cualquiera sea la causa de terminación, incluida la renuncia. Lo que no se causa en la renuncia voluntaria es la indemnización por despido sin justa causa, salvo que se trate de un despido indirecto provocado por incumplimientos del empleador.",
      },
      {
        pregunta: "¿Qué hago si la empresa cerró o no tiene con qué pagar?",
        respuesta:
          "Los créditos laborales tienen prelación de primer grado. Si la empresa está en insolvencia hay que presentar el crédito dentro del proceso concursal; si simplemente cerró, se demanda a la sociedad y, según el caso, se puede perseguir a socios o administradores cuando hubo abuso de la personalidad jurídica.",
      },
    ],
  },

  "laboral/acoso-laboral": {
    h1: "Acoso laboral en Colombia: cómo denunciarlo",
    title: "Acoso laboral: cómo denunciarlo en Colombia",
    description: "Qué conductas son acoso laboral, cómo se prueba y ante quién se denuncia paso a paso.",
    respuesta:
      "El acoso laboral es toda conducta persistente y demostrable ejercida sobre un trabajador por su jefe, un compañero o un subalterno, encaminada a infundir miedo, intimidación, angustia, perjuicio laboral, desmotivación o inducir la renuncia. Se denuncia primero ante el comité de convivencia laboral de la empresa y, si no se resuelve, ante el inspector del Ministerio del Trabajo o ante el juez laboral. La clave es la persistencia y la prueba documental.",
    parrafos: [
      "La Ley 1010 de 2006 no protege contra cualquier malestar en el trabajo. Exige que la conducta sea persistente —no un episodio aislado— y demostrable, y la clasifica en seis modalidades: maltrato laboral, persecución laboral, discriminación laboral, entorpecimiento laboral, inequidad laboral y desprotección laboral. Entender en cuál encaja el caso ayuda a construir la prueba que el comité o el juez espera ver.",
      "La misma ley enumera conductas que se presumen acoso: los actos de agresión física, las expresiones injuriosas sobre la persona, los comentarios hostiles y humillantes de descalificación profesional expresados en presencia de compañeros, las burlas sobre la apariencia o la vida privada, la imposición de deberes ajenos a las obligaciones laborales, la exigencia de laborar en horarios excesivos frente al resto del equipo y el traslado injustificado con el fin de generar la renuncia.",
      "También aclara qué no es acoso, y eso evita reclamaciones que se caen: las exigencias razonables de puntualidad y rendimiento, las órdenes propias de la subordinación, los llamados de atención formulados de manera respetuosa, las evaluaciones de desempeño, la solicitud de cumplir deberes extras cuando es necesaria para la continuidad del servicio y las actuaciones disciplinarias adelantadas con debido proceso.",
      "La prueba es el punto donde se decide todo. Sirven los correos, los mensajes de WhatsApp, las grabaciones de reuniones en las que el trabajador participa, los memorandos sin sustento, los cambios injustificados de funciones documentados, los testimonios de compañeros y, de forma muy relevante, las incapacidades y valoraciones de salud mental que muestran el efecto de la conducta. Un diario de hechos con fechas, lugares y personas presentes es una herramienta simple y eficaz.",
      "Toda empresa con trabajadores debe tener un comité de convivencia laboral con representantes del empleador y de los trabajadores, que sesiona periódicamente y debe recibir las quejas de forma confidencial. Ese comité no sanciona: escucha, promueve acuerdos y hace seguimiento. Si la conducta persiste o el comité no actúa, la queja escala al Ministerio del Trabajo o a la jurisdicción laboral.",
    ],
    norma: {
      articulo: "Art. 2 Ley 1010 de 2006",
      norma: "Ley de acoso laboral",
      texto:
        "Se entiende por acoso laboral toda conducta persistente y demostrable, ejercida sobre un empleado por parte de un empleador, un jefe o superior jerárquico inmediato o mediato, un compañero de trabajo o un subalterno, encaminada a infundir miedo, intimidación, terror y angustia, a causar perjuicio laboral, generar desmotivación en el trabajo, o inducir la renuncia del mismo.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Caducidad: 6 meses",
      texto:
        "Las acciones derivadas del acoso laboral caducan a los 6 meses contados desde la fecha en que ocurrió la conducta (art. 18 Ley 1010 de 2006). Por eso conviene radicar la queja ante el comité de convivencia tan pronto los hechos se repiten, y no esperar a acumular un año de episodios.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "El acoso probado tiene consecuencias en tres frentes. Frente al empleador que lo toleró o lo ejerció, la ley prevé multas a favor del Tesoro y la obligación de pagar el tratamiento de las afectaciones de salud que se deriven. Frente al trabajador, la renuncia motivada por acoso se trata como terminación con justa causa imputable al empleador, lo que da derecho a la indemnización del artículo 64.",
        "Además, quien denuncia queda protegido: los despidos que ocurran dentro de los seis meses siguientes a la queja carecen de efecto cuando la autoridad verifica que fueron una represalia. Si el acoso derivó en una afectación de salud mental diagnosticada, puede abrirse además la ruta de enfermedad laboral con la ARL.",
      ],
      lista: [
        "Terminación con justa causa imputable al empleador e indemnización del art. 64",
        "Protección frente al despido durante los 6 meses siguientes a la queja",
        "Pago del tratamiento de las afectaciones de salud derivadas del acoso",
        "Sanciones al agresor conforme al reglamento interno y multas a la empresa",
      ],
    },
    pasos: [
      { titulo: "Documenta cada episodio", texto: "Fecha, hora, lugar, qué se dijo, quién estaba presente. Guarda correos, chats y memorandos en un lugar fuera de los equipos de la empresa." },
      { titulo: "Radica la queja ante el comité de convivencia", texto: "Por escrito y con constancia de recibido. Es la instancia interna obligatoria y su actuación queda como prueba." },
      { titulo: "Cuida tu salud y déjala registrada", texto: "La valoración médica o psicológica documenta el efecto de la conducta y sostiene una eventual reclamación por enfermedad laboral." },
      { titulo: "Escala al Ministerio del Trabajo", texto: "Si el comité no actúa o la conducta sigue, la queja va al inspector del trabajo, que puede requerir y sancionar a la empresa." },
      { titulo: "Evalúa la renuncia motivada o la demanda", texto: "Antes de renunciar, revisa con un abogado si los hechos configuran despido indirecto: la carta debe narrar los hechos con precisión." },
    ],
    faqs: [
      {
        pregunta: "¿Un solo episodio grave cuenta como acoso laboral?",
        respuesta:
          "La ley exige persistencia, por lo que un hecho aislado normalmente no configura acoso laboral, aunque puede constituir otra falta: una agresión física o una injuria pueden dar lugar a acciones penales y disciplinarias, y una desmejora unilateral de condiciones puede sustentar un despido indirecto.",
      },
      {
        pregunta: "¿Puedo grabar a mi jefe para probar el acoso?",
        respuesta:
          "Sí puedes grabar conversaciones en las que participas, y esas grabaciones se han admitido como prueba en procesos laborales. Distinto es interceptar comunicaciones ajenas en las que no intervienes, lo que sí es ilegal y puede volverse en contra.",
      },
      {
        pregunta: "¿Me pueden despedir por denunciar acoso?",
        respuesta:
          "La ley protege al denunciante: el despido que ocurra dentro de los seis meses siguientes a la queja carece de efecto si se verifica que fue una represalia. Conservar la constancia de radicación de la queja es lo que permite hacer valer esa protección.",
      },
      {
        pregunta: "¿Qué pasa si la empresa no tiene comité de convivencia?",
        respuesta:
          "Tener comité de convivencia laboral es obligatorio. Su ausencia es en sí misma un incumplimiento denunciable ante el Ministerio del Trabajo, y permite acudir directamente al inspector sin agotar la instancia interna.",
      },
      {
        pregunta: "¿El acoso laboral se puede denunciar penalmente?",
        respuesta:
          "La Ley 1010 no crea un delito de acoso laboral, pero conductas concretas sí pueden serlo: lesiones personales, injuria, calumnia, constreñimiento ilegal o acoso sexual. En esos casos la denuncia penal corre en paralelo con el trámite laboral.",
      },
    ],
  },

  "laboral/reintegro": {
    h1: "Reintegro laboral: cuándo el juez ordena volver al cargo",
    title: "Reintegro laboral: cuándo procede en Colombia",
    description: "En qué casos el despido es ineficaz y el juez ordena reintegro con salarios dejados de pagar.",
    respuesta:
      "El reintegro procede cuando el despido fue ineficaz, no simplemente injusto. Ocurre con trabajadoras en embarazo o lactancia, personas con una afectación de salud que limita su desempeño, aforados sindicales y trabajadores protegidos por estabilidad legal o convencional, despedidos sin la autorización previa del inspector del trabajo o sin levantamiento judicial del fuero. El juez ordena volver al mismo cargo y pagar los salarios, prestaciones y aportes dejados de percibir desde el despido.",
    parrafos: [
      "La regla general en Colombia es que el despido injusto se resuelve con dinero: el empleador paga la indemnización del artículo 64 y la relación termina. El reintegro es la excepción y se reserva para los casos en que la Constitución o la ley consideran que la persona no podía ser desvinculada sin un control previo, porque estaba en una situación de especial vulnerabilidad o ejercía un derecho protegido.",
      "La estabilidad laboral reforzada por salud, derivada de la Ley 361 de 1997 y de la jurisprudencia constitucional, protege a quien tiene una afectación de salud conocida por el empleador que le impide o dificulta desempeñar sus funciones, sin necesidad de un porcentaje de pérdida de capacidad calificado. Despedir en esas condiciones sin autorización del inspector del trabajo hace el despido ineficaz y genera, además del reintegro, una indemnización equivalente a 180 días de salario.",
      "La protección a la maternidad opera durante el embarazo y los meses de lactancia y se presume que el despido obedece a esa condición cuando el empleador conocía el estado. El fuero sindical protege a los fundadores y directivos de un sindicato: para despedirlos, trasladarlos o desmejorar sus condiciones se requiere una autorización judicial previa mediante el proceso de levantamiento de fuero.",
      "El reintegro también puede pactarse o derivar de una convención colectiva más favorable, y en el sector público tiene reglas propias cuando el retiro se produce sin el procedimiento legal. Además de volver al cargo, la orden judicial suele incluir el pago de salarios y prestaciones causados durante el tiempo de desvinculación, el reconocimiento de aportes a seguridad social por ese periodo y la continuidad del contrato como si nunca se hubiera interrumpido.",
      "Cuando el reintegro es materialmente imposible —por ejemplo porque el cargo desapareció o la empresa se liquidó— el juez puede sustituirlo por una indemnización. Y cuando el trabajador conserva restricciones médicas, la orden se acompaña de reubicación en un puesto compatible con las recomendaciones, no del regreso a la misma tarea que agravó la condición.",
    ],
    norma: {
      articulo: "Art. 26 Ley 361 de 1997",
      norma: "Estabilidad laboral reforzada",
      texto:
        "Ninguna persona en situación de discapacidad podrá ser despedida o su contrato terminado por razón de su discapacidad, salvo que medie autorización de la oficina de trabajo; quienes fueren despedidos sin ella tendrán derecho a una indemnización equivalente a ciento ochenta días del salario, sin perjuicio de las demás prestaciones e indemnizaciones a que hubiere lugar.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Fuero sindical: 2 meses",
      texto:
        "La acción de reintegro por fuero sindical debe presentarse dentro de los 2 meses siguientes al despido, traslado o desmejora (art. 118A CPTSS). Las demás acciones laborales prescriben en 3 años, pero la tutela por estabilidad reforzada exige inmediatez: conviene actuar en semanas, no en meses.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La pretensión central es la ineficacia del despido y el reintegro al mismo cargo o a uno de igual categoría. A ella se suman los salarios y prestaciones causados desde la terminación hasta el reintegro efectivo, con los aportes a pensión y salud del periodo, de modo que no queden vacíos en la historia laboral.",
        "En los casos de estabilidad por salud se reclama además la indemnización de 180 días de salario de la Ley 361 de 1997, y en maternidad las prestaciones propias de la licencia. Cuando el reintegro no es viable, la discusión se traslada al monto de la indemnización sustitutiva.",
      ],
      lista: [
        "Declaratoria de ineficacia del despido y reintegro al mismo cargo",
        "Salarios, prestaciones y aportes causados desde el despido",
        "Indemnización de 180 días de salario en estabilidad por salud",
        "Reubicación en un puesto compatible con las restricciones médicas",
      ],
    },
    pasos: [
      { titulo: "Verifica si tenías protección al momento del despido", texto: "Embarazo o lactancia, afectación de salud conocida por la empresa, fuero sindical o estabilidad convencional." },
      { titulo: "Prueba que el empleador lo sabía", texto: "Incapacidades radicadas, recomendaciones médicas entregadas, notificación del embarazo, comunicación de la junta directiva del sindicato." },
      { titulo: "Actúa rápido", texto: "El fuero sindical tiene 2 meses y la tutela exige inmediatez. La demora debilita el caso incluso cuando el derecho existe." },
      { titulo: "Elige la vía correcta", texto: "Tutela para protección urgente del mínimo vital y la salud; proceso especial de fuero sindical o proceso ordinario laboral según el caso." },
      { titulo: "Documenta el perjuicio", texto: "Salarios dejados de percibir, interrupción de tratamientos, pérdida de afiliación a salud y aportes no realizados." },
    ],
    faqs: [
      {
        pregunta: "¿Cualquier despido injusto da derecho a reintegro?",
        respuesta:
          "No. El despido injusto se resuelve con la indemnización del artículo 64. El reintegro procede solo cuando el despido es ineficaz por faltar una autorización previa o por vulnerar una protección especial: maternidad, salud, fuero sindical o estabilidad legal o convencional.",
      },
      {
        pregunta: "¿Necesito tener un porcentaje de pérdida de capacidad calificado?",
        respuesta:
          "No. La jurisprudencia constitucional protege a quien tiene una afectación de salud que dificulta el desempeño y que el empleador conocía, sin exigir calificación previa. El porcentaje sí importa para otras prestaciones, pero no es requisito de la estabilidad reforzada.",
      },
      {
        pregunta: "¿Qué pasa si el cargo ya no existe?",
        respuesta:
          "El juez puede ordenar el reintegro a un cargo de igual o similar categoría. Si el reintegro es materialmente imposible, por ejemplo por liquidación de la empresa, se sustituye por una indemnización que compense el perjuicio.",
      },
      {
        pregunta: "¿Sirve la tutela o hay que demandar?",
        respuesta:
          "La tutela procede cuando la desvinculación amenaza el mínimo vital o el acceso a un tratamiento en curso, especialmente para sujetos de especial protección. En los demás casos la vía es el proceso laboral, y para aforados sindicales el proceso especial de fuero.",
      },
      {
        pregunta: "¿El reintegro incluye el pago de lo que dejé de ganar?",
        respuesta:
          "Sí. La orden de reintegro normalmente incluye los salarios y prestaciones causados desde el despido hasta el regreso efectivo, junto con los aportes a seguridad social del periodo, porque el contrato se entiende no interrumpido.",
      },
    ],
  },

  "laboral/incapacidades": {
    h1: "Incapacidad laboral: quién paga y por cuántos días",
    title: "Incapacidad laboral: quién paga y cuánto",
    description: "Quién paga tu incapacidad según los días transcurridos y qué hacer si nadie responde.",
    respuesta:
      "En una incapacidad de origen común, los dos primeros días los paga el empleador, del día 3 al 180 la EPS, del 181 al 540 el fondo de pensiones y a partir del día 541 vuelve a la EPS. Si el origen es laboral, la ARL paga desde el día siguiente al accidente y lo hace al 100% del ingreso base de cotización. Ninguna entidad puede dejarte sin pago mientras discute con otra quién debe asumirlo.",
    parrafos: [
      "El primer punto que define el pago es el origen. En incapacidad de origen común el subsidio equivale a las dos terceras partes del salario, sin que pueda ser inferior al salario mínimo; en incapacidad de origen laboral la ARL paga el 100% del ingreso base de cotización desde el día siguiente al accidente o al diagnóstico de la enfermedad laboral. Esa diferencia es la razón por la que tantos eventos se califican como comunes cuando en realidad fueron laborales.",
      "El segundo punto es el conteo de los días. La secuencia de responsables cambia según la duración acumulada de la incapacidad por la misma patología, y en el tramo del día 181 al 540 el responsable es el fondo de pensiones, que además debe adelantar el trámite de rehabilitación y la calificación de pérdida de capacidad laboral. Cuando ese trámite no se hace a tiempo, la ley traslada al fondo la obligación de seguir pagando.",
      "El tercer punto son los requisitos formales. La incapacidad debe ser expedida por el médico tratante adscrito a la EPS o transcrita cuando la emite un particular, y debe radicarse ante el empleador y la entidad responsable dentro de los términos internos. Los rechazos más comunes tienen causas administrativas: incapacidad no transcrita, mora del empleador en aportes, radicación tardía o inconsistencias en la historia clínica.",
      "La mora patronal es un caso especial. Si el empleador no pagó los aportes, la EPS suele negar el pago de la incapacidad, pero la jurisprudencia ha sido reiterada: la entidad debió ejercer las acciones de cobro y su omisión no puede trasladarse al trabajador, que cumplió con su parte al tener el descuento en nómina. En esos casos el pago se ordena y la entidad repite contra el empleador.",
      "Durante la incapacidad el contrato de trabajo se mantiene vigente y el trabajador conserva estabilidad: despedirlo por su condición de salud sin autorización del inspector del trabajo hace el despido ineficaz. Al reintegrarse con restricciones, el empleador debe reubicarlo en un puesto compatible con las recomendaciones médicas.",
    ],
    norma: {
      articulo: "Art. 227 CST",
      norma: "Código Sustantivo del Trabajo",
      texto:
        "En caso de incapacidad comprobada para desempeñar sus labores, ocasionada por enfermedad no profesional, el trabajador tiene derecho a un auxilio monetario hasta por ciento ochenta días, en los porcentajes que allí se establecen sobre el salario.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Prescripción: 3 años",
      texto:
        "El cobro de las incapacidades ya causadas prescribe en 3 años desde que cada pago se hizo exigible. Si el origen del evento está en discusión, tienes 10 días hábiles para manifestar inconformidad con el dictamen de calificación ante la Junta Regional y 10 días hábiles más para apelar ante la Junta Nacional.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "Se reclama el pago del subsidio por los días no cubiertos, con la entidad que corresponda según el tramo, y la corrección del ingreso base cuando el cálculo se hizo sobre un valor inferior al realmente cotizado. Si el evento fue calificado como común y en realidad era laboral, la reclamación incluye la diferencia entre el 66% que pagó la EPS y el 100% que debía pagar la ARL.",
        "Cuando ninguna entidad paga porque se devuelven el caso entre sí, la vía rápida es la tutela: la jurisprudencia ordena pagar primero al trabajador y resolver después el conflicto entre entidades, porque el mínimo vital no puede quedar suspendido mientras se define la competencia.",
      ],
      lista: [
        "Pago de las incapacidades no canceladas por EPS, fondo, ARL o empleador",
        "Diferencia entre el 66% y el 100% cuando el origen era laboral",
        "Reajuste del subsidio liquidado sobre un ingreso base incorrecto",
        "Reubicación laboral y protección frente al despido durante la incapacidad",
      ],
    },
    pasos: [
      { titulo: "Cuenta los días acumulados", texto: "Suma las incapacidades por la misma patología: el tramo define si responde el empleador, la EPS, el fondo o la ARL." },
      { titulo: "Transcribe y radica a tiempo", texto: "Si la incapacidad la expidió un médico particular, hazla transcribir por la EPS y radícala ante el empleador con constancia." },
      { titulo: "Revisa el origen", texto: "Si la patología tiene relación con el trabajo, pide la calificación de origen: cambia el pagador y el porcentaje del subsidio." },
      { titulo: "Presenta petición escrita a la entidad", texto: "Con historia clínica, incapacidades, certificado de afiliación y desprendibles. Deja constancia de radicación." },
      { titulo: "Usa la tutela si el pago se frena", texto: "Cuando las entidades se devuelven la responsabilidad y el pago se suspende, la tutela obliga a pagar mientras se resuelve entre ellas." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto me pagan durante la incapacidad?",
        respuesta:
          "En origen común, las dos terceras partes del salario sin bajar del mínimo legal durante los primeros 90 días, y desde el día 91 el 50% sin bajar del mínimo. En origen laboral, la ARL paga el 100% del ingreso base de cotización desde el día siguiente al evento.",
      },
      {
        pregunta: "¿Quién paga los dos primeros días?",
        respuesta:
          "En incapacidad de origen común los dos primeros días los asume el empleador. Desde el tercero responde la EPS. En origen laboral no aplica ese periodo: la ARL responde desde el día siguiente al accidente.",
      },
      {
        pregunta: "¿Pueden despedirme estando incapacitado?",
        respuesta:
          "No sin autorización previa del inspector del trabajo cuando el despido se relaciona con la condición de salud. Hacerlo sin ese permiso hace el despido ineficaz y da lugar a reintegro, pago de salarios dejados de percibir y la indemnización de la Ley 361 de 1997.",
      },
      {
        pregunta: "¿Qué pasa si mi empleador no pagó los aportes?",
        respuesta:
          "La mora patronal no puede oponerse al trabajador. La EPS o el fondo debían ejercer las acciones de cobro y su omisión no traslada la carga a quien tuvo el descuento en nómina; el pago se ordena y la entidad repite contra el empleador.",
      },
      {
        pregunta: "¿Qué pasa después del día 540 de incapacidad?",
        respuesta:
          "A partir del día 541 la EPS retoma el pago, y en paralelo debe estar surtido el trámite de calificación de pérdida de capacidad laboral. Según el porcentaje que se dictamine se abre la puerta a indemnización o a pensión de invalidez.",
      },
    ],
  },

  "laboral/derecho-colectivo": {
    h1: "Negociación colectiva y fuero sindical en Colombia",
    title: "Negociación colectiva y fuero sindical",
    description: "Cómo se negocia un pliego, qué protege el fuero sindical y en qué plazo pedir reintegro.",
    respuesta:
      "La negociación colectiva es el procedimiento por el cual un sindicato presenta un pliego de peticiones al empleador para pactar condiciones de trabajo mediante una convención colectiva. Presentado el pliego, la etapa de arreglo directo dura 20 días calendario, prorrogables por otros 20 de común acuerdo. Fracasada, los trabajadores pueden optar por la huelga o por un tribunal de arbitramento. Los fundadores y directivos del sindicato están amparados por fuero sindical y no pueden ser despedidos, trasladados ni desmejorados sin autorización judicial previa.",
    parrafos: [
      "El Libro Segundo del Código Sustantivo del Trabajo regula el derecho colectivo: la constitución de sindicatos, el fuero de sus directivos, la presentación del pliego, la convención colectiva, el pacto colectivo, el tribunal de arbitramento y la huelga. Es un terreno con plazos cortos y formalidades estrictas, donde un error de procedimiento puede invalidar todo lo actuado.",
      "El sindicato se constituye por decisión de al menos veinticinco trabajadores y goza de personería desde su fundación, sin que se requiera autorización del empleador ni acto administrativo previo; basta el depósito del acta y los estatutos ante el Ministerio del Trabajo. Desde ese momento y por el término legal, los fundadores quedan amparados por fuero sindical, igual que los miembros de la junta directiva y los de la comisión de reclamos, dentro de los límites que fija la ley.",
      "El fuero significa que el empleador no puede despedir, trasladar ni desmejorar las condiciones del trabajador aforado sin una autorización judicial previa, que se obtiene mediante el proceso de levantamiento de fuero y solo por una justa causa comprobada. Si el empleador actúa sin esa autorización, el trabajador puede pedir el reintegro por la vía del proceso especial de fuero sindical, con el pago de los salarios dejados de percibir.",
      "La negociación empieza con la presentación del pliego. Durante su trámite ningún trabajador de la empresa —afiliado o no— puede ser despedido sin justa causa comprobada, protección conocida como la garantía del conflicto colectivo. La etapa de arreglo directo tiene veinte días calendario prorrogables por otros veinte; si termina sin acuerdo, la asamblea decide entre declarar la huelga o someter el conflicto a un tribunal de arbitramento.",
      "La huelga es la suspensión colectiva, temporal y pacífica del trabajo, y solo es legal si se decide por la mayoría exigida, se hace efectiva dentro de los plazos legales y no ocurre en servicios públicos esenciales, donde el conflicto va obligatoriamente a arbitramento. La convención colectiva que resulte del acuerdo se deposita ante el Ministerio del Trabajo y se aplica a los afiliados y, según su cobertura, a los demás trabajadores de la empresa.",
    ],
    norma: {
      articulo: "Art. 405 CST",
      norma: "Código Sustantivo del Trabajo, Libro Segundo",
      texto:
        "Se denomina fuero sindical la garantía de que gozan algunos trabajadores de no ser despedidos, ni desmejorados en sus condiciones de trabajo, ni trasladados a otros establecimientos de la misma empresa o a un municipio distinto, sin justa causa previamente calificada por el juez del trabajo.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Reintegro por fuero sindical: 2 meses",
      texto:
        "La acción de reintegro por fuero sindical se presenta dentro de los 2 meses siguientes al despido, traslado o desmejora. La etapa de arreglo directo del pliego dura 20 días calendario prorrogables por 20 más, y la huelga debe hacerse efectiva dentro de los plazos legales posteriores a su declaratoria.",
    },
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        "Del lado de los trabajadores, la vía típica es el proceso especial de fuero sindical para obtener el reintegro del aforado despedido sin autorización, y la acción por prácticas atentatorias del derecho de asociación cuando la empresa presiona la desafiliación, promueve un pacto colectivo paralelo con mejores beneficios o discrimina a los sindicalizados.",
        "Del lado del empleador, la asesoría se concentra en negociar dentro de los plazos, documentar cada sesión de arreglo directo, tramitar el levantamiento de fuero cuando existe una justa causa real y evitar conductas que después se califiquen como antisindicales. En ambos extremos, lo que se firme en la convención rige por años y conviene redactarlo con precisión.",
      ],
      lista: [
        "Reintegro del trabajador aforado despedido sin autorización judicial",
        "Levantamiento de fuero cuando existe justa causa comprobada",
        "Negociación del pliego, convención colectiva y tribunal de arbitramento",
        "Defensa frente a la declaratoria de ilegalidad de una huelga",
      ],
    },
    pasos: [
      { titulo: "Verifica quién está aforado y hasta cuándo", texto: "Fundadores, junta directiva y comisión de reclamos, dentro de los límites y términos que fija la ley." },
      { titulo: "Deposita actas y estatutos", texto: "El sindicato existe desde su fundación, pero el depósito ante el Ministerio del Trabajo consolida la oponibilidad del fuero." },
      { titulo: "Presenta el pliego y cuenta los días", texto: "Desde la presentación corre el arreglo directo: 20 días calendario, prorrogables por 20 más de común acuerdo." },
      { titulo: "Decide en asamblea: huelga o arbitramento", texto: "La votación debe cumplir las mayorías legales y quedar documentada; los servicios públicos esenciales van obligatoriamente a arbitramento." },
      { titulo: "Actúa dentro de los 2 meses", texto: "Si hubo despido, traslado o desmejora de un aforado, el proceso especial de fuero debe iniciarse en ese término." },
    ],
    faqs: [
      {
        pregunta: "¿La empresa puede negarse a negociar el pliego?",
        respuesta:
          "No. Presentado el pliego, el empleador debe iniciar el arreglo directo dentro de los términos legales. Negarse o dilatar la negociación es una conducta sancionable por el Ministerio del Trabajo y puede calificarse como atentatoria del derecho de asociación.",
      },
      {
        pregunta: "¿A quién se aplica la convención colectiva?",
        respuesta:
          "A los trabajadores afiliados al sindicato que la firmó y, cuando el sindicato agrupa a más de la tercera parte de los trabajadores de la empresa, a todos los trabajadores, sean o no sindicalizados, según lo previsto en el Código Sustantivo del Trabajo.",
      },
      {
        pregunta: "¿Pueden despedirme por afiliarme a un sindicato?",
        respuesta:
          "No. El despido por afiliación o actividad sindical vulnera el derecho de asociación y puede ser declarado ineficaz. Además, durante el trámite del pliego de peticiones ningún trabajador de la empresa puede ser despedido sin justa causa comprobada.",
      },
      {
        pregunta: "¿Cuándo es ilegal una huelga?",
        respuesta:
          "Cuando se declara sin cumplir las mayorías y los procedimientos legales, cuando se hace efectiva fuera de los plazos previstos, cuando persigue fines distintos a los profesionales o económicos, o cuando ocurre en un servicio público esencial definido por la ley.",
      },
      {
        pregunta: "¿Qué diferencia hay entre convención y pacto colectivo?",
        respuesta:
          "La convención colectiva se celebra con el sindicato; el pacto colectivo se celebra con trabajadores no sindicalizados. Usar el pacto para ofrecer mejores condiciones que la convención y desestimular la afiliación es una práctica que la ley y la jurisprudencia consideran antisindical.",
      },
    ],
  },
};

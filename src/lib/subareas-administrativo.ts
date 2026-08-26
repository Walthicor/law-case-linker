import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo ADMINISTRATIVO.
 * Silo de mayor valor comercial: contenido extenso (1.200–1.500 palabras).
 * Todos los plazos: // VERIFICAR CON ABOGADO — son cortos y fatales.
 */
export const SUBAREAS_ADMINISTRATIVO: Record<string, ContenidoSubarea> = {
  "administrativo/tutela": {
    h1: "Cuándo procede la tutela contra el Estado",
    title: "Cuándo procede la tutela en Colombia",
    description: "Requisitos de procedencia, subsidiariedad, inmediatez y qué hacer si el fallo se incumple.",
    respuesta:
      "La tutela procede cuando una autoridad pública —o un particular en los casos que prevé la ley— vulnera o amenaza un derecho fundamental y no existe otro medio de defensa judicial idóneo y eficaz para protegerlo. También procede existiendo otro medio, pero solo como mecanismo transitorio y cuando se demuestra un perjuicio irremediable: un daño inminente, grave, que exige medidas urgentes e impostergables. El juez debe fallar dentro de los 10 días siguientes a la solicitud y la orden se cumple, por regla general, en 48 horas. Lo que decide el resultado no es la redacción sino que el caso supere los dos filtros de procedencia: subsidiariedad e inmediatez.",
    parrafos: [
      "La subsidiariedad es el filtro que más tutelas hunde. Si existe una acción ordinaria —nulidad y restablecimiento del derecho, reparación directa, proceso laboral, proceso ejecutivo— el juez constitucional en principio debe remitir a ella. La excepción aparece cuando ese medio, aunque exista en el papel, no es idóneo o eficaz frente a la situación concreta del accionante: un adulto mayor que no puede esperar cuatro años una sentencia, una persona en condición de discapacidad sin ingresos, un paciente cuya salud se deteriora mientras el proceso avanza. Por eso una tutela bien construida no se limita a narrar la vulneración: prueba por qué el otro camino llega tarde.",
      "La inmediatez exige que la tutela se presente en un término razonable desde la vulneración. No hay un plazo fijo en la norma, pero la jurisprudencia constitucional ha decantado que meses de inactividad sin explicación debilitan la procedencia, salvo que la vulneración sea continuada —una pensión que se sigue negando mes a mes, una atención en salud que se sigue omitiendo— o que existan razones válidas para la demora, como la condición de sujeto de especial protección.",
      "Contra actos administrativos la regla general es que la tutela no reemplaza el medio de control judicial. Sin embargo, sí procede cuando el acto vulnera de manera evidente un derecho fundamental y el trámite contencioso resultaría tardío frente al perjuicio, o cuando el acto se profirió con vías de hecho manifiestas. En esos casos suele pedirse como mecanismo transitorio: el juez protege mientras la jurisdicción contenciosa decide, y el accionante queda obligado a presentar la demanda dentro del término que fije el fallo.",
      "Los escenarios donde la tutela es la vía natural son conocidos y siguen siendo mayoría: negativa o demora de la EPS en autorizar procedimientos, medicamentos o traslados; falta de respuesta a un derecho de petición; suspensión de servicios esenciales; barreras al acceso a la educación; reconocimiento de derechos pensionales cuando la persona está en situación de vulnerabilidad; y protección de los derechos de niños, adultos mayores, personas en condición de discapacidad y población desplazada.",
      "También existe la tutela contra particulares, en tres supuestos: cuando prestan un servicio público, cuando su conducta afecta grave y directamente el interés colectivo, o cuando el accionante se encuentra en estado de subordinación o indefensión frente a ellos. Es la vía habitual frente a colegios privados, EPS y clínicas, conjuntos residenciales, empleadores en ciertos casos y medios de comunicación cuando se pide rectificación.",
      "Hay dos figuras que conviene solicitar cuando el caso lo amerita. La medida provisional se pide en el mismo escrito y permite que el juez ordene algo urgente antes de fallar, por ejemplo autorizar una cirugía o suspender un desalojo. El desacato es el trámite posterior al fallo incumplido: se solicita ante el mismo juez y puede terminar en arresto y multa para el funcionario responsable, sin perjuicio de que la orden siga siendo exigible.",
      "El trámite es informal a propósito. No requiere abogado, puede presentarse por escrito o verbalmente, ante cualquier juez con jurisdicción en el lugar de los hechos, y no exige fórmulas sacramentales. Eso no significa que dé lo mismo cómo se presente: identificar bien la entidad accionada, precisar el derecho vulnerado, adjuntar la prueba documental y explicar por qué el otro medio no sirve es exactamente lo que diferencia un amparo concedido de uno negado por improcedencia.",
      "Después del fallo, si no se está de acuerdo, procede la impugnación dentro de los tres días siguientes a la notificación y la decide el superior jerárquico. Todos los fallos se remiten después a la Corte Constitucional para su eventual revisión, y ese es el escenario donde se han construido las reglas que hoy definen la procedencia en salud, pensiones, estabilidad laboral reforzada y debido proceso administrativo.",
    ],
    norma: {
      articulo: "Art. 86 C.P.",
      norma: "Constitución Política y Decreto 2591 de 1991",
      texto:
        "Toda persona tendrá acción de tutela para reclamar ante los jueces, en todo momento y lugar, mediante un procedimiento preferente y sumario, la protección inmediata de sus derechos constitucionales fundamentales, cuando quiera que estos resulten vulnerados o amenazados por la acción o la omisión de cualquier autoridad pública. Solo procederá cuando el afectado no disponga de otro medio de defensa judicial, salvo que se utilice como mecanismo transitorio para evitar un perjuicio irremediable.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Fallo en 10 días · cumplimiento en 48 horas",
      texto:
        "El juez debe resolver la tutela dentro de los 10 días siguientes a la solicitud y la orden se cumple por regla general en 48 horas. La impugnación se presenta dentro de los 3 días siguientes a la notificación del fallo. No hay un término de caducidad, pero la inmediatez exige presentarla en un tiempo razonable desde la vulneración.",
    },
    reclamar: {
      titulo: "Qué puede ordenar el juez",
      parrafos: [
        "El fallo de tutela no se limita a declarar que hubo vulneración: ordena una conducta concreta y verificable. Puede exigir que la entidad autorice un procedimiento, responda una petición, reintegre a un trabajador con estabilidad reforzada, restablezca un servicio suspendido o se abstenga de ejecutar una decisión mientras se resuelve el fondo.",
        "Cuando el caso lo justifica, el juez adopta medidas provisionales antes de fallar y puede impartir órdenes complejas a varias entidades a la vez. Si el fallo se incumple, el trámite de desacato permite sancionar al funcionario responsable con arresto y multa, y la orden continúa vigente.",
      ],
      lista: [
        "Órdenes de hacer con plazo perentorio a la entidad accionada",
        "Medidas provisionales urgentes antes del fallo",
        "Protección transitoria mientras la jurisdicción ordinaria decide",
        "Inaplicación de un acto por vía de excepción de inconstitucionalidad",
        "Desacato con arresto y multa cuando la orden se incumple",
      ],
    },
    pasos: [
      { titulo: "Agota la reclamación previa", texto: "Radica primero la petición o el recurso ante la entidad. Esa respuesta —o el silencio— es la prueba central de la vulneración." },
      { titulo: "Verifica la subsidiariedad", texto: "Identifica si existe otro medio judicial y por qué no es idóneo o eficaz en tu caso concreto. Ese argumento define la procedencia." },
      { titulo: "Reúne la prueba documental", texto: "Radicados con fecha, historia clínica, negativas escritas, notificaciones y todo lo que demuestre la urgencia y la condición personal." },
      { titulo: "Presenta y pide medida provisional", texto: "Ante cualquier juez del lugar de los hechos. Si hay riesgo actual, solicita expresamente la medida provisional en el mismo escrito." },
      { titulo: "Impugna o pide desacato", texto: "Impugnación dentro de los 3 días si el fallo es adverso. Si te dieron la razón y no cumplen, solicita el incidente de desacato ante el mismo juez." },
    ],
    faqs: [
      {
        pregunta: "¿En qué casos NO procede la tutela?",
        respuesta:
          "No procede cuando existe otro medio de defensa judicial idóneo y eficaz y no se acredita un perjuicio irremediable, cuando se dirige contra actos de carácter general, cuando ya operó la cosa juzgada constitucional sobre los mismos hechos o cuando se presenta mucho tiempo después de la vulneración sin justificación, por falta de inmediatez.",
      },
      {
        pregunta: "¿Cuánto se demora un fallo de tutela?",
        respuesta:
          "El juez debe resolver dentro de los 10 días siguientes a la solicitud. La orden se cumple por regla general en 48 horas y, si se impugna, el superior decide en un término breve. Cuando hay riesgo actual puede pedirse una medida provisional que se resuelve antes del fallo.",
      },
      {
        pregunta: "¿Necesito abogado para presentar una tutela?",
        respuesta:
          "No es obligatorio: puede presentarla directamente el afectado, incluso verbalmente. Un abogado aporta valor cuando el caso exige demostrar por qué el medio ordinario no es idóneo, cuando se pide protección transitoria o cuando hay que articular la tutela con una demanda contencioso administrativa.",
      },
      {
        pregunta: "¿Puedo tutelar un acto administrativo que me perjudica?",
        respuesta:
          "Por regla general no, porque para eso existe la nulidad y restablecimiento del derecho. Procede excepcionalmente como mecanismo transitorio cuando el trámite contencioso resulta tardío frente a un perjuicio irremediable, o cuando el acto se profirió con una vulneración evidente del debido proceso.",
      },
      {
        pregunta: "¿Qué hago si la entidad no cumple el fallo?",
        respuesta:
          "Se solicita el incidente de desacato ante el mismo juez que falló. El funcionario responsable puede ser sancionado con arresto y multa, y la orden sigue siendo exigible. Conviene documentar cada gestión posterior al fallo con fechas y radicados.",
      },
    ],
    guias: ["derecho-de-peticion-guia", "demandar-acto-administrativo"],
  },

  "administrativo/derecho-de-peticion": {
    h1: "Qué hacer si no responden mi derecho de petición",
    title: "No responden mi derecho de petición",
    description: "Plazos legales de respuesta, silencio administrativo y cómo obligar a la entidad a responder.",
    respuesta:
      "Si la entidad no responde tu derecho de petición dentro del plazo legal —15 días hábiles como regla general, 10 para pedir información y documentos, y 30 para consultas— la vía directa es la acción de tutela por vulneración del derecho fundamental de petición, que el juez debe resolver en 10 días y suele terminar ordenando responder de fondo en 48 horas. En paralelo puede presentarse queja disciplinaria contra el funcionario, porque no responder es falta disciplinaria. Y según el trámite, el silencio puede configurar silencio administrativo negativo, que habilita acudir a la jurisdicción contenciosa sin esperar la respuesta.",
    parrafos: [
      "Conviene distinguir tres situaciones que la gente confunde. La primera es que no respondan nada: silencio total. La segunda es que respondan por fuera del plazo, lo que no borra la vulneración pero suele hacer que la tutela se declare con hecho superado. La tercera, y la más frecuente, es que respondan a tiempo pero sin resolver: un oficio que acusa recibo, que dice que el asunto está en trámite, que remite a otra dependencia o que responde algo distinto a lo preguntado. Esa respuesta evasiva vulnera el derecho de petición igual que el silencio, porque la ley exige una respuesta de fondo, clara, precisa, congruente con lo pedido y puesta en conocimiento del peticionario.",
      "Los plazos del artículo 14 del CPACA, modificado por la Ley 1755 de 2015, son 15 días hábiles como término general, 10 días hábiles para peticiones de información y documentos, y 30 días hábiles para consultas relacionadas con las materias a cargo de la entidad. Si la entidad no puede responder en término, debe informarlo antes del vencimiento explicando por qué y señalando cuándo responderá, plazo que no puede exceder el doble del inicial. Esa comunicación es una obligación, no una cortesía: omitirla también vulnera el derecho.",
      "Si la petición se dirigió a la entidad equivocada, esta debe remitirla a la competente dentro de los cinco días siguientes e informarlo al peticionario. Si la petición está incompleta, la entidad debe requerir al interesado dentro de los diez días siguientes para que la complete, y el peticionario tiene un mes para hacerlo; vencido ese término sin respuesta, se entiende desistida, aunque puede volver a presentarse. Muchos casos se pierden por no atender ese requerimiento a tiempo.",
      "El silencio administrativo negativo es una figura distinta de la tutela y sirve para otra cosa. Cuando transcurren tres meses desde la presentación de la petición sin que la entidad resuelva, se entiende que la decisión es negativa y con eso se habilita acudir a la jurisdicción contencioso administrativa sin esperar más. No es un premio: el peticionario no obtiene lo que pidió, solo la llave para demandar. Existen además supuestos de silencio administrativo positivo, pero son excepcionales y deben estar expresamente previstos en la ley para ese trámite específico.",
      "La tutela por derecho de petición es de las más eficaces del sistema porque el análisis es objetivo: se verifica la fecha de radicación, el plazo aplicable y si hubo respuesta de fondo notificada. Por eso la prueba clave es el radicado. Un correo enviado sin acuse, un formulario web sin número de caso o una llamada telefónica no acreditan la petición. Radicar con sello, número y fecha —o por canal digital que genere constancia— es lo que permite ganar el caso en una página.",
      "Cuando la respuesta llega pero no resuelve, la estrategia cambia: no se pide que respondan, se pide que respondan de fondo, señalando punto por punto qué se preguntó y qué se omitió. Los jueces son receptivos a ese contraste cuando está bien hecho, y la orden suele ser responder de manera completa y congruente dentro de 48 horas.",
      "Frente a particulares el derecho de petición también aplica en los casos que prevé la ley: organizaciones privadas cuando el peticionario está en situación de subordinación o indefensión, entidades que prestan servicios públicos, cajas de compensación, y en general quienes ejercen funciones públicas. Bancos, EPS, aseguradoras y administradoras de fondos de pensiones responden peticiones bajo estas reglas y su silencio también es tutelable.",
      "Una recomendación práctica que ahorra meses: dejar por escrito la petición con la mayor precisión posible —hechos, fundamento, lo que se solicita y el canal de notificación— convierte la respuesta de la entidad en prueba para el proceso posterior. En litigio contra el Estado, buena parte del expediente lo construye la propia administración cuando responde.",
    ],
    norma: {
      articulo: "Art. 14 CPACA",
      norma: "Ley 1437 de 2011, modificada por la Ley 1755 de 2015",
      texto:
        "Toda petición deberá resolverse dentro de los quince (15) días siguientes a su recepción. Las peticiones de documentos y de información deberán resolverse dentro de los diez (10) días siguientes, y las consultas en relación con las materias a cargo de la entidad dentro de los treinta (30) días siguientes a su recepción.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "15 días hábiles · 10 · 30",
      texto:
        "Regla general 15 días hábiles; información y documentos 10 días hábiles; consultas 30 días hábiles. Si la entidad no puede cumplir, debe avisarlo antes del vencimiento y el nuevo plazo no puede exceder el doble del inicial. A los 3 meses sin respuesta puede configurarse silencio administrativo negativo.",
    },
    reclamar: {
      titulo: "Qué puedes exigir",
      parrafos: [
        "Lo que se exige no es cualquier respuesta, sino una respuesta de fondo, clara, precisa, congruente con lo pedido y efectivamente notificada al peticionario. Una comunicación que dice que el asunto está en estudio no cumple esa exigencia y sigue vulnerando el derecho.",
        "Junto con la respuesta pueden reclamarse la entrega de los documentos solicitados —salvo reserva legal debidamente motivada—, la remisión a la entidad competente cuando corresponda, y la sanción disciplinaria del funcionario que omitió responder.",
      ],
      lista: [
        "Respuesta de fondo, clara, precisa y congruente con lo pedido",
        "Notificación efectiva al peticionario por el canal indicado",
        "Entrega de documentos e información sin reserva legal",
        "Queja disciplinaria contra el funcionario que no respondió",
        "Silencio administrativo negativo para habilitar la demanda",
      ],
    },
    pasos: [
      { titulo: "Guarda el radicado", texto: "Sello, número y fecha, o constancia digital del canal oficial. Sin prueba de radicación no hay caso que ganar." },
      { titulo: "Cuenta los días hábiles", texto: "15 como regla general, 10 para información y documentos, 30 para consultas. No cuentan sábados, domingos ni festivos." },
      { titulo: "Insiste por escrito", texto: "Un alcance o recordatorio deja constancia adicional y a veces desbloquea la respuesta sin necesidad de acudir al juez." },
      { titulo: "Presenta tutela", texto: "Por vulneración del derecho fundamental de petición, adjuntando el radicado. El juez falla en 10 días y suele ordenar responder en 48 horas." },
      { titulo: "Queja y demanda si aplica", texto: "Queja disciplinaria contra el funcionario y, cuando se configuró el silencio negativo, demanda ante la jurisdicción contencioso administrativa." },
    ],
    faqs: [
      {
        pregunta: "¿Cuántos días tiene una entidad para responder?",
        respuesta:
          "Quince días hábiles como regla general, diez días hábiles cuando se piden documentos o información y treinta días hábiles para consultas sobre las materias a su cargo. Si no puede responder a tiempo, debe informarlo antes del vencimiento y fijar un nuevo plazo que no exceda el doble del inicial.",
      },
      {
        pregunta: "¿Qué pasa si responden pero no resuelven lo que pedí?",
        respuesta:
          "Una respuesta evasiva, incompleta o que no guarda relación con lo solicitado vulnera el derecho de petición igual que el silencio. La tutela puede pedir que se responda de fondo, señalando punto por punto qué se preguntó y qué quedó sin resolver.",
      },
      {
        pregunta: "¿Qué es el silencio administrativo negativo?",
        respuesta:
          "Es la ficción legal según la cual, pasados tres meses sin respuesta, se entiende negada la petición. No otorga lo pedido: habilita acudir a la jurisdicción contencioso administrativa sin seguir esperando. El silencio positivo solo opera cuando la ley lo prevé expresamente para ese trámite.",
      },
      {
        pregunta: "¿Puedo pedirle información a una empresa privada?",
        respuesta:
          "Sí, en los casos que prevé la ley: particulares que prestan servicios públicos, que ejercen funciones públicas o frente a quienes el peticionario está en situación de subordinación o indefensión. EPS, bancos, aseguradoras y fondos de pensiones responden bajo esas reglas y su silencio es tutelable.",
      },
      {
        pregunta: "¿La tutela sirve para que me den lo que pedí?",
        respuesta:
          "La tutela por derecho de petición asegura la respuesta, no necesariamente el contenido favorable. Si la respuesta llega y es negativa, el siguiente paso es discutir esa decisión con los recursos administrativos y, luego, con el medio de control judicial que corresponda.",
      },
    ],
    guias: ["derecho-de-peticion-guia", "demandar-acto-administrativo"],
  },

  "administrativo/nulidad-y-restablecimiento": {
    h1: "Nulidad y restablecimiento del derecho",
    title: "Nulidad y restablecimiento del derecho",
    description: "Cómo demandar un acto administrativo, causales de nulidad y la caducidad de 4 meses.",
    respuesta:
      "La nulidad y restablecimiento del derecho es el medio de control con el que se demanda un acto administrativo de contenido particular que lesiona un derecho: una sanción, un retiro del servicio, la negativa de una pensión, una liquidación tributaria, la exclusión de un proceso de selección. Se pide que el acto se anule y, además, que se restablezca el derecho y se reparen los perjuicios causados. El plazo es el más severo del derecho administrativo: 4 meses contados desde el día siguiente a la notificación, comunicación, publicación o ejecución del acto, según el caso. Vencido ese término el acto queda en firme y el derecho se pierde, aunque la decisión haya sido claramente ilegal.",
    parrafos: [
      "Antes de demandar hay que agotar la vía administrativa cuando la ley exige recursos. Frente a un acto particular procede la reposición ante quien lo expidió y la apelación ante el superior; la apelación es obligatoria para agotar cuando está prevista. Los recursos se interponen dentro de los 10 días hábiles siguientes a la notificación personal o a la notificación por aviso, y deben sustentarse con las razones de inconformidad y las pruebas que se pretenden hacer valer. Interponerlos mal —fuera de plazo, sin sustentación o ante quien no corresponde— deja el acto en firme y arruina el caso antes de llegar al juez.",
      "Las causales de nulidad están en el artículo 137 del CPACA y conviene identificarlas con precisión, porque la demanda debe indicar cuáles se invocan y por qué: infracción de las normas en que debía fundarse el acto, expedición por autoridad sin competencia, expedición irregular o con desconocimiento del derecho de audiencia y defensa, falsa motivación y desviación de las atribuciones propias del funcionario. La falsa motivación y la desviación de poder son las más difíciles de probar y, a la vez, las que más se alegan: exigen mostrar que los hechos invocados no existieron o que el fin real de la decisión fue distinto del que la norma persigue.",
      "El restablecimiento del derecho es lo que diferencia este medio de control de la simple nulidad. No basta con que el juez anule el acto: hay que pedir de forma expresa qué debe hacerse para volver las cosas al estado anterior —reintegro al cargo, pago de salarios y prestaciones dejadas de percibir, devolución de sumas cobradas, reconocimiento de la pensión desde determinada fecha, reincorporación a una lista de elegibles— y cuantificar los perjuicios con soportes. Una demanda que anula sin restablecer deja al demandante con una victoria simbólica.",
      "La conciliación extrajudicial ante el Ministerio Público es requisito de procedibilidad en la mayoría de asuntos de esta jurisdicción que sean conciliables. Presentar la solicitud suspende el término de caducidad hasta por tres meses o hasta que se expida la constancia o el acta, lo que ocurra primero. Ese efecto suspensivo es clave cuando quedan pocas semanas: radicar la conciliación a tiempo puede salvar un caso que de otra forma caducaría.",
      "La demanda se presenta ante los juzgados administrativos o los tribunales administrativos según la cuantía y el asunto, y se tramita por el procedimiento ordinario del CPACA: admisión, contestación, audiencia inicial con fijación del litigio, audiencia de pruebas y audiencia de alegaciones y juzgamiento. En muchos casos la audiencia inicial es determinante, porque ahí se depura el proceso, se resuelven excepciones previas y se fija exactamente qué se va a discutir.",
      "Las medidas cautelares del CPACA son más amplias de lo que se cree y suelen desaprovecharse. Además de la suspensión provisional del acto acusado, el juez puede ordenar medidas preventivas, conservativas, anticipativas o de suspensión que resulten necesarias para proteger el objeto del proceso. Pedirlas con la demanda, argumentando la apariencia de buen derecho y el perjuicio, cambia la dinámica del litigio frente a la entidad.",
      "Un error frecuente es demandar el acto equivocado. Cuando existe un acto principal y luego otros que lo confirman o lo ejecutan, la demanda debe dirigirse contra el que efectivamente creó la situación jurídica y contra los que lo confirmaron al resolver los recursos. Omitir uno de ellos puede llevar a una sentencia inhibitoria después de años de proceso.",
      "Finalmente, hay que tener presente que estos procesos son lentos: una nulidad y restablecimiento suele tomar entre dos y cuatro años en dos instancias. Eso hace que la estrategia incluya, cuando procede, la cautelar desde el inicio y la evaluación de si existe una vía constitucional transitoria para proteger lo urgente mientras el proceso avanza.",
    ],
    norma: {
      articulo: "Art. 138 CPACA",
      norma: "Ley 1437 de 2011",
      texto:
        "Toda persona que se crea lesionada en un derecho subjetivo amparado en una norma jurídica podrá pedir que se declare la nulidad del acto administrativo particular, expreso o presunto, y se le restablezca el derecho; también podrá solicitar que se le repare el daño.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Caducidad: 4 meses",
      texto:
        "La demanda debe presentarse dentro de los 4 meses siguientes al día siguiente de la notificación, comunicación, publicación o ejecución del acto (art. 164 CPACA). Los recursos en sede administrativa se interponen dentro de los 10 días hábiles. La solicitud de conciliación extrajudicial suspende la caducidad hasta por 3 meses o hasta la expedición de la constancia.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La pretensión típica combina tres cosas: la nulidad del acto, el restablecimiento del derecho concreto y la reparación de los perjuicios. El restablecimiento debe pedirse de forma específica, con fechas y montos, porque el juez no puede conceder lo que no se solicitó.",
        "En materia laboral administrativa el restablecimiento suele incluir el reintegro al cargo, el pago de salarios y prestaciones dejados de percibir con indexación, y la orden de efectuar los aportes al sistema de seguridad social por el periodo de la desvinculación.",
      ],
      lista: [
        "Nulidad del acto y de los que lo confirmaron al resolver recursos",
        "Reintegro, reconocimiento del derecho o devolución de lo cobrado",
        "Salarios, prestaciones y aportes dejados de percibir, indexados",
        "Perjuicios materiales e inmateriales debidamente acreditados",
        "Suspensión provisional y otras medidas cautelares del CPACA",
      ],
    },
    pasos: [
      { titulo: "Revisa la notificación", texto: "La fecha de notificación personal o por aviso marca el inicio de todos los términos. Conserva el acta, el aviso y el sobre con la fecha." },
      { titulo: "Interpón los recursos a tiempo", texto: "Reposición y apelación dentro de los 10 días hábiles, sustentados y con las pruebas. La apelación, cuando procede, es necesaria para agotar la vía." },
      { titulo: "Identifica las causales", texto: "Incompetencia, expedición irregular, violación del debido proceso, falsa motivación o desviación de poder. Cada una exige una prueba distinta." },
      { titulo: "Radica la conciliación extrajudicial", texto: "Requisito de procedibilidad en asuntos conciliables. Suspende la caducidad y con frecuencia es lo que salva un plazo a punto de vencer." },
      { titulo: "Demanda con cautelares", texto: "Antes de los 4 meses, pidiendo la suspensión provisional del acto y precisando el restablecimiento con cifras y fechas." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tiempo tengo para demandar un acto administrativo?",
        respuesta:
          "Cuatro meses contados desde el día siguiente a la notificación, comunicación, publicación o ejecución del acto, según el caso. Es un término de caducidad: vencido, el acto queda en firme y no puede discutirse judicialmente, aunque sea ilegal. Presentar la conciliación extrajudicial suspende ese plazo.",
      },
      {
        pregunta: "¿Debo interponer recursos antes de demandar?",
        respuesta:
          "Sí cuando la ley los prevé. La apelación, si procede, es necesaria para agotar la vía administrativa. Los recursos se interponen dentro de los diez días hábiles siguientes a la notificación, debidamente sustentados y con las pruebas que se quieran hacer valer.",
      },
      {
        pregunta: "¿Qué es la suspensión provisional del acto?",
        respuesta:
          "Es una medida cautelar que impide que el acto siga produciendo efectos mientras se decide el proceso. Se solicita con la demanda y exige mostrar, con los documentos aportados, que el acto vulnera las normas invocadas. El CPACA permite además otras medidas preventivas y anticipativas.",
      },
      {
        pregunta: "¿Cuánto dura este proceso?",
        respuesta:
          "Habitualmente entre dos y cuatro años en dos instancias, según la congestión del despacho y la complejidad probatoria. Por eso conviene solicitar medidas cautelares desde el inicio y evaluar si existe una vía constitucional transitoria para lo que no puede esperar.",
      },
      {
        pregunta: "¿Qué pasa si dejé vencer los cuatro meses?",
        respuesta:
          "El acto queda en firme y la demanda se rechaza por caducidad. Quedan alternativas limitadas según el caso: solicitar la revocatoria directa cuando procede, atacar actos posteriores que sí estén dentro del término, o acudir a la tutela si hay una vulneración iusfundamental evidente y actual.",
      },
    ],
    guias: ["demandar-acto-administrativo", "derecho-de-peticion-guia"],
  },

  "administrativo/responsabilidad-del-estado": {
    h1: "Responsabilidad del Estado en Colombia",
    title: "Responsabilidad del Estado en Colombia",
    description: "Cuándo responde el Estado por un daño, qué se indemniza y la caducidad de 2 años.",
    respuesta:
      "El Estado responde patrimonialmente por los daños antijurídicos que le sean imputables, causados por la acción o la omisión de las autoridades públicas: así lo establece el artículo 90 de la Constitución. Para que prospere la demanda hay que probar tres elementos: un daño antijurídico —uno que la víctima no tenía el deber jurídico de soportar—, la imputación de ese daño a una entidad pública, y el nexo causal entre la actuación u omisión y el daño. Cuando el perjuicio proviene de un hecho, una omisión, una operación administrativa o la ocupación de un inmueble, el medio de control es la reparación directa, que caduca a los 2 años contados desde el día siguiente al hecho.",
    parrafos: [
      "Los títulos de imputación definen qué hay que probar. La falla del servicio es el más común: el Estado prestó mal el servicio, lo prestó tarde o no lo prestó, y de ahí surgió el daño. Es el título de la mayoría de casos de responsabilidad médica en hospitales públicos, de omisiones de protección frente a amenazas conocidas, de accidentes por mal estado de la infraestructura vial y de fallas en la prestación de servicios de la fuerza pública.",
      "Existen además dos títulos objetivos, en los que no hay que probar la falla. El daño especial se aplica cuando la actuación estatal fue lícita pero impuso a una persona un sacrificio anormal frente al resto de la comunidad, como las afectaciones graves derivadas de una obra pública legítima. El riesgo excepcional opera cuando la administración despliega una actividad que crea un riesgo mayor al ordinario —redes de energía, armas de dotación, transporte de sustancias peligrosas— y ese riesgo se concreta en un daño.",
      "La privación injusta de la libertad es una de las líneas más consolidadas. Cuando una persona es detenida y luego absuelta o el proceso precluye porque el hecho no existió, no lo cometió o la conducta no era delito, el Estado responde por el tiempo de privación, y la indemnización cubre el lucro cesante de los ingresos dejados de percibir, el daño moral por la detención y, en muchos casos, el daño a la vida de relación derivado del estigma. La discusión probatoria se concentra en los ingresos acreditados y en la existencia de culpa exclusiva de la víctima.",
      "En responsabilidad médica estatal la clave es el dictamen pericial y la historia clínica completa. Hay que demostrar que la atención se apartó de la lex artis o que existió una omisión relevante, y que esa conducta —no la evolución natural de la enfermedad— produjo el daño. Los casos de pérdida de oportunidad, en los que no se puede afirmar con certeza que la atención adecuada habría evitado el desenlace, se indemnizan de forma proporcional a la probabilidad perdida.",
      "También responde el Estado por los daños derivados de actos administrativos ilegales, pero por otra vía: allí el medio de control es la nulidad y restablecimiento del derecho, con su caducidad de cuatro meses. Escoger mal el medio de control es un error costoso, porque la demanda se rechaza o termina en sentencia inhibitoria. La regla práctica es simple: si el daño viene de una decisión formal, es nulidad y restablecimiento; si viene de un hecho, una omisión, una operación o una ocupación, es reparación directa.",
      "La cuantificación sigue criterios decantados por el Consejo de Estado. Los perjuicios materiales comprenden el daño emergente —gastos médicos, funerarios, transporte, adecuaciones— y el lucro cesante consolidado y futuro, calculado con el ingreso base, la expectativa de vida probable y factores de actualización. Los inmateriales incluyen el daño moral, tasado en salarios mínimos según la gravedad y el vínculo, el daño a la salud en casos de lesión psicofísica y, excepcionalmente, la afectación a bienes constitucionalmente protegidos con medidas de satisfacción y no repetición.",
      "Antes de demandar es obligatoria la conciliación extrajudicial ante el Ministerio Público en los asuntos conciliables, y su presentación suspende la caducidad hasta por tres meses. El comité de conciliación de la entidad estudia la propuesta y en casos con prueba sólida puede haber acuerdo, lo que evita años de litigio. Cuando el acuerdo se logra, requiere aprobación judicial para producir efectos.",
    ],
    bloques: [
      {
        titulo: "La reparación directa: cómo se demanda al Estado",
        parrafos: [
          "La reparación directa es el medio de control previsto en el artículo 140 del CPACA para reclamar la indemnización cuando el daño proviene de un hecho, una omisión, una operación administrativa o la ocupación temporal o permanente de un inmueble por causa de trabajos públicos. No se ataca un acto: se le reclama al Estado por lo que hizo o dejó de hacer materialmente.",
          "El plazo es de dos años contados desde el día siguiente al hecho, la omisión, la operación o la ocupación. En daños que se manifiestan después —como ciertos casos médicos— el término se cuenta desde que la víctima tuvo o debió tener conocimiento del daño y de su imputación al Estado, criterio que ha sido precisado por la jurisprudencia. En privación injusta de la libertad, el cómputo suele tomarse desde la ejecutoria de la providencia absolutoria o de preclusión.",
          "La demanda debe identificar con precisión la entidad llamada a responder, que no siempre es evidente: puede ser el municipio, el departamento, la Nación a través de un ministerio, una empresa social del Estado, una unidad administrativa especial o varias de ellas de forma solidaria. Demandar a la entidad equivocada, o dejar por fuera a una que participó, es una de las causas más frecuentes de sentencias adversas después de años de trámite.",
          "El expediente probatorio se construye antes de radicar. Sirven el informe policial o de bomberos, la historia clínica completa, los registros de mantenimiento de la infraestructura, las peticiones respondidas por la entidad, las actas de vecindad en obras públicas, las certificaciones de ingresos, los dictámenes periciales y los testimonios. Solicitar esos documentos por derecho de petición antes de la demanda es una práctica que suele definir el resultado.",
          "El trámite es el proceso ordinario del CPACA ante juzgados o tribunales administrativos según la cuantía, con audiencia inicial, audiencia de pruebas y audiencia de alegaciones y juzgamiento. Suele durar entre tres y cinco años cuando hay dictámenes periciales, y la conciliación extrajudicial previa es requisito de procedibilidad.",
        ],
        lista: [
          "Daño por falla del servicio médico en hospitales públicos",
          "Privación injusta de la libertad con absolución o preclusión",
          "Daños por obras públicas y ocupación de inmuebles",
          "Accidentes por mal estado de vías, redes o infraestructura",
          "Actuaciones de la fuerza pública y omisión en el deber de protección",
        ],
      },
    ],
    norma: {
      articulo: "Art. 90 C.P.",
      norma: "Constitución Política y art. 140 CPACA",
      texto:
        "El Estado responderá patrimonialmente por los daños antijurídicos que le sean imputables, causados por la acción o la omisión de las autoridades públicas. En el evento de ser condenado el Estado a la reparación patrimonial de uno de tales daños, que haya sido consecuencia de la conducta dolosa o gravemente culposa de un agente suyo, aquel deberá repetir contra este.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Caducidad: 2 años",
      texto:
        "La reparación directa caduca a los 2 años contados desde el día siguiente al hecho, la omisión, la operación administrativa o la ocupación del inmueble (art. 164 CPACA). En daños de manifestación tardía se cuenta desde que la víctima conoció o debió conocer el daño y su imputación al Estado. La conciliación extrajudicial suspende el término hasta por 3 meses.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La indemnización busca reparar integralmente a la víctima y a quienes resultaron afectados por el daño. Comprende los perjuicios materiales acreditados y los inmateriales tasados según los criterios del Consejo de Estado, y en casos graves incluye medidas de satisfacción, disculpas públicas y garantías de no repetición.",
        "Los familiares reclaman por derecho propio: el daño moral se reconoce según el grado de parentesco y la prueba del vínculo afectivo, y el lucro cesante cuando dependían económicamente de la víctima.",
      ],
      lista: [
        "Daño emergente: gastos médicos, funerarios, transporte y adecuaciones",
        "Lucro cesante consolidado y futuro por los ingresos dejados de percibir",
        "Daño moral tasado en salarios mínimos según gravedad y vínculo",
        "Daño a la salud por lesión psicofísica y afectación a la vida de relación",
        "Medidas de satisfacción y garantías de no repetición en casos graves",
      ],
    },
    pasos: [
      { titulo: "Fija la fecha del hecho", texto: "De ahí corren los 2 años de caducidad. En daños de manifestación tardía, documenta cuándo se conoció el daño y su origen." },
      { titulo: "Pide el expediente a la entidad", texto: "Por derecho de petición: historia clínica, informes, actas, bitácoras y registros de mantenimiento. Es la base probatoria del caso." },
      { titulo: "Define el título de imputación", texto: "Falla del servicio, daño especial o riesgo excepcional. De esa elección depende qué debes probar y qué puede alegar la entidad." },
      { titulo: "Cuantifica con soportes", texto: "Ingresos certificados, facturas, dictámenes y prueba del vínculo familiar para los perjuicios morales de cada demandante." },
      { titulo: "Concilia y demanda a tiempo", texto: "Radica la conciliación extrajudicial —suspende la caducidad— y presenta la reparación directa antes de que se cumplan los 2 años." },
    ],
    faqs: [
      {
        pregunta: "¿Cuándo responde el Estado por un daño?",
        respuesta:
          "Cuando el daño es antijurídico, es decir que la víctima no tenía el deber jurídico de soportarlo, y es imputable a una autoridad pública por su acción u omisión. Los títulos de imputación son la falla del servicio, el daño especial y el riesgo excepcional, y cada uno exige una prueba distinta.",
      },
      {
        pregunta: "¿Cuánto tiempo tengo para demandar al Estado?",
        respuesta:
          "La reparación directa caduca a los dos años desde el día siguiente al hecho, la omisión, la operación administrativa o la ocupación del inmueble. Si el daño se manifiesta después, el término corre desde que la víctima conoció o debió conocer el daño y su imputación al Estado.",
      },
      {
        pregunta: "¿Qué diferencia hay entre reparación directa y nulidad y restablecimiento?",
        respuesta:
          "La reparación directa se usa cuando el daño proviene de un hecho, una omisión, una operación administrativa o una ocupación, y caduca a los dos años. La nulidad y restablecimiento se usa cuando el daño proviene de un acto administrativo y caduca a los cuatro meses. Escoger mal el medio de control puede costar el caso.",
      },
      {
        pregunta: "¿Puedo demandar por privación injusta de la libertad?",
        respuesta:
          "Sí, cuando el proceso terminó con absolución o preclusión porque el hecho no existió, no lo cometió el sindicado o la conducta no era delito, y también en otros supuestos definidos por la jurisprudencia. La indemnización cubre lucro cesante por los ingresos dejados de percibir y perjuicios morales por el tiempo de detención.",
      },
      {
        pregunta: "¿Es obligatorio conciliar antes de demandar?",
        respuesta:
          "En los asuntos conciliables de esta jurisdicción la conciliación extrajudicial ante el Ministerio Público es requisito de procedibilidad. Su presentación suspende la caducidad hasta por tres meses o hasta que se expida la constancia o el acta, lo que ocurra primero.",
      },
    ],
    guias: ["reparacion-directa-requisitos", "demandar-acto-administrativo"],
  },

  "administrativo/contratacion-estatal": {
    h1: "Abogados de contratación estatal en Colombia",
    title: "Abogados de contratación estatal",
    description: "Defensa en incumplimientos, multas, sanciones e inhabilidades frente a entidades públicas.",
    respuesta:
      "Contratar con el Estado tiene reglas propias y consecuencias severas cuando algo sale mal. Una declaratoria de incumplimiento, una multa o una inhabilidad pueden sacar a una empresa del mercado público durante años. El marco es la Ley 80 de 1993, la Ley 1150 de 2007, la Ley 1474 de 2011 y el Decreto 1082 de 2015, y las decisiones de la entidad se toman mediante actos administrativos que se atacan primero con recursos y luego ante la jurisdicción contencioso administrativa. El plazo determinante es la caducidad de las controversias contractuales: 2 años, contados según el momento que corresponda a cada caso —terminación, liquidación o vencimiento del plazo para liquidar—.",
    parrafos: [
      "El procedimiento sancionatorio contractual del artículo 86 de la Ley 1474 de 2011 es el escenario donde se decide casi todo. La entidad cita a una audiencia, expone los hechos que estima constitutivos de incumplimiento, las normas y las consecuencias posibles, y el contratista tiene la oportunidad de pronunciarse, aportar pruebas y controvertir las de la entidad. La decisión se adopta mediante resolución motivada en la misma audiencia, contra la cual procede recurso de reposición que se interpone y sustenta allí mismo. Ese detalle sorprende a muchos contratistas: no hay días después para pensar el recurso, se sustenta en la audiencia.",
      "La defensa técnica se prepara antes de la citación, no durante ella. Lo que suele salvar un caso es el expediente contractual bien llevado: actas de inicio y de suspensión con sus causas, bitácoras de obra, comunicaciones radicadas advirtiendo la falta de insumos o de permisos a cargo de la entidad, informes de interventoría, prórrogas solicitadas a tiempo y actas de comité. El incumplimiento del contratista rara vez es absoluto; casi siempre concurren hechos imputables a la entidad o a terceros, y esa concurrencia es lo que reduce o elimina la sanción.",
      "Las multas y la cláusula penal pecuniaria son sanciones distintas y no siempre pueden imponerse a la vez sin justificación. La multa es un apremio para que el contratista cumpla y tiene sentido durante la ejecución; la cláusula penal opera como tasación anticipada de perjuicios ante el incumplimiento y suele imponerse al declararlo. Ambas se hacen efectivas mediante acto administrativo y se cobran de las sumas adeudadas o de la garantía única, lo que hace imprescindible vincular oportunamente a la aseguradora al procedimiento.",
      "La caducidad del contrato —figura distinta de la caducidad procesal— es la sanción más grave: la entidad da por terminado el contrato por incumplimiento que afecta de manera grave y directa su ejecución, ordena su liquidación y genera una inhabilidad para contratar con el Estado por cinco años. Por su severidad, exige motivación reforzada y respeto estricto del debido proceso, y es donde más prosperan las demandas de nulidad cuando el procedimiento se surtió de forma irregular.",
      "Las inhabilidades e incompatibilidades merecen un análisis previo a cada propuesta. Además de las clásicas por parentesco, sanciones o participación en varias propuestas, existen inhabilidades derivadas de sanciones fiscales, disciplinarias y penales, y las que surgen de la declaratoria de incumplimiento reiterada. Presentar oferta estando inhabilitado no solo lleva al rechazo: puede acarrear consecuencias adicionales para la empresa y sus representantes.",
      "Del lado del proponente que no ganó, el terreno de discusión son las observaciones al informe de evaluación, el recurso de reposición contra el acto de adjudicación en los casos que la ley lo permite, y la demanda de nulidad y restablecimiento del derecho contra el acto de adjudicación, que tiene caducidad de cuatro meses. Cuando lo que se ataca es el pliego, la vía es distinta y los tiempos son cortos: las observaciones deben presentarse dentro del cronograma del proceso, y el pliego, por ser acto general, se demanda mediante nulidad simple.",
      "En la ejecución, los reclamos económicos se pierden por silencio. La mayor permanencia en obra, los sobrecostos por hechos no imputables al contratista, la variación de cantidades y el desequilibrio económico del contrato deben reclamarse por escrito y de manera oportuna, y —esto es decisivo— dejarse como salvedad expresa en el acta de liquidación bilateral. Firmar la liquidación sin salvedades cierra la posibilidad de reclamar después, por más sólido que sea el sustento técnico.",
      "La liquidación tiene sus propios tiempos: bilateral dentro del término pactado o, en su defecto, dentro de los cuatro meses siguientes a la terminación; unilateral por la entidad dentro de los dos meses siguientes al vencimiento de ese plazo; y judicial cuando ninguna de las anteriores ocurrió, dentro del término de caducidad. Estos plazos condicionan desde cuándo se cuentan los dos años para demandar y suelen ser el primer punto que revisa el juez.",
    ],
    bloques: [
      {
        titulo: "Licitaciones públicas: cómo se estructura un proceso de selección",
        parrafos: [
          "La licitación pública es la modalidad ordinaria de selección y opera cuando no cabe ninguna de las excepciones legales: selección abreviada, concurso de méritos, contratación directa o mínima cuantía. El proceso empieza mucho antes de la publicación: con los estudios previos, el análisis del sector, la estimación del presupuesto oficial y la determinación de los riesgos, documentos que después son la base para discutir cualquier desequilibrio.",
          "La secuencia habitual es la siguiente: aviso de convocatoria y publicación del proyecto de pliego, observaciones de los interesados, expedición del pliego definitivo con sus adendas, audiencia de asignación de riesgos y de aclaración, presentación de ofertas en la fecha y hora exactas del cronograma, verificación de requisitos habilitantes, informe de evaluación con traslado para observaciones, y audiencia pública de adjudicación mediante acto administrativo motivado.",
          "Los requisitos habilitantes —capacidad jurídica, experiencia, capacidad financiera y organizacional— no otorgan puntaje: se cumplen o no, y son subsanables dentro del término que fije la entidad hasta antes de la adjudicación, salvo los que asignen puntaje. Confundir un requisito habilitante con uno ponderable es la causa más frecuente de rechazos indebidos y, a la vez, de reclamaciones exitosas.",
          "La discusión del pliego tiene ventana propia. Las observaciones al proyecto de pliego y a las adendas deben presentarse dentro del cronograma, por escrito y con sustento técnico o jurídico; una observación bien formulada puede modificar una condición restrictiva antes de que el proceso avance. Después de cerrado el plazo, atacar el pliego exige la vía judicial de la nulidad y es un camino largo.",
          "Frente a la adjudicación, el proponente que se considera lesionado puede formular observaciones en la audiencia y, según el caso, demandar el acto de adjudicación por nulidad y restablecimiento del derecho dentro de los cuatro meses, pidiendo la indemnización por la utilidad esperada cuando demuestra que su oferta era la que debía resultar seleccionada.",
        ],
        lista: [
          "Estudios previos, análisis del sector y matriz de riesgos",
          "Proyecto de pliego, observaciones y adendas dentro del cronograma",
          "Requisitos habilitantes subsanables y factores de puntaje",
          "Informe de evaluación con traslado y derecho de contradicción",
          "Audiencia pública de adjudicación con acto motivado",
        ],
      },
    ],
    norma: {
      articulo: "Art. 86 Ley 1474 de 2011",
      norma: "Ley 80 de 1993 · Ley 1150 de 2007 · Ley 1474 de 2011 · Decreto 1082 de 2015",
      texto:
        "Las entidades sometidas al Estatuto General de Contratación de la Administración Pública podrán declarar el incumplimiento, cuantificando los perjuicios, imponer las multas y sanciones pactadas y hacer efectiva la cláusula penal, mediante un procedimiento con audiencia en el que se garantice el debido proceso del contratista y de su garante.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Controversias contractuales: 2 años",
      texto:
        "Las controversias contractuales caducan a los 2 años, contados según el caso desde la terminación del contrato, desde su liquidación o desde el vencimiento del plazo para liquidarlo (art. 164 CPACA). El acto de adjudicación se demanda por nulidad y restablecimiento dentro de los 4 meses. El recurso de reposición contra la decisión sancionatoria se interpone y sustenta en la misma audiencia.",
    },
    reclamar: {
      titulo: "Cuándo nos llaman",
      parrafos: [
        "La mayoría de los casos llega en uno de dos momentos: cuando la entidad cita a la audiencia del artículo 86 y el contratista tiene días para preparar su defensa, o cuando la sanción ya se impuso y hay que decidir entre el recurso y la demanda. En ambos escenarios el trabajo consiste en reconstruir el expediente contractual y establecer qué parte del incumplimiento es imputable a la entidad, a un tercero o a una causa extraña.",
        "El otro grupo de casos viene del lado de la selección: ofertas descalificadas por requisitos habilitantes mal aplicados, pliegos con condiciones direccionadas y adjudicaciones que desconocen el orden de elegibilidad. Ahí los tiempos son cortos y todo depende de haber dejado observaciones oportunas dentro del cronograma.",
      ],
      lista: [
        "Te declararon incumplido",
        "Te impusieron multa o cláusula penal",
        "Enfrentas un proceso sancionatorio contractual",
        "Te descalificaron la oferta",
        "Necesitas impugnar un pliego",
        "Te aplicaron una inhabilidad",
      ],
    },
    pasos: [
      { titulo: "Reconstruye el expediente", texto: "Contrato, otrosíes, actas de inicio y suspensión, bitácoras, informes de interventoría y todas las comunicaciones radicadas con fecha." },
      { titulo: "Identifica la causa del atraso", texto: "Falta de permisos, predios, diseños o pagos a cargo de la entidad, hechos de terceros o fuerza mayor. Ahí está la defensa de fondo." },
      { titulo: "Prepara la audiencia del art. 86", texto: "El recurso de reposición se interpone y sustenta en la misma audiencia. Llega con escrito, pruebas y con la aseguradora vinculada." },
      { titulo: "Deja salvedades en la liquidación", texto: "Mayor permanencia, sobrecostos y desequilibrio económico deben quedar como salvedad expresa. Firmar sin salvedades cierra el reclamo." },
      { titulo: "Demanda dentro de los 2 años", texto: "Controversias contractuales ante la jurisdicción contencioso administrativa, previa conciliación extrajudicial cuando el asunto es conciliable." },
    ],
    faqs: [
      {
        pregunta: "¿Qué hago si la entidad me declaró incumplido?",
        respuesta:
          "La decisión se adopta en audiencia mediante resolución motivada y el recurso de reposición se interpone y sustenta allí mismo. Si queda en firme, procede la demanda ante la jurisdicción contencioso administrativa dentro del término de caducidad, generalmente por controversias contractuales o por nulidad y restablecimiento según el acto atacado.",
      },
      {
        pregunta: "¿Una declaratoria de incumplimiento genera inhabilidad?",
        respuesta:
          "La caducidad del contrato genera inhabilidad para contratar con el Estado por cinco años. Además, la Ley 1474 de 2011 prevé inhabilidades derivadas de declaratorias de incumplimiento reiteradas y de la efectividad de garantías, por lo que cada sanción debe evaluarse por su efecto acumulado sobre la empresa.",
      },
      {
        pregunta: "¿Puedo reclamar sobrecostos si ya firmé el acta de liquidación?",
        respuesta:
          "Solo si dejaste salvedades expresas en el acta. La liquidación bilateral firmada sin salvedades cierra la posibilidad de reclamar después los conceptos que allí quedaron saldados, incluso cuando el sustento técnico del sobrecosto es sólido.",
      },
      {
        pregunta: "¿Cómo se impugna un pliego de condiciones?",
        respuesta:
          "Dentro del proceso, con observaciones al proyecto de pliego y a las adendas, presentadas por escrito dentro del cronograma y con sustento técnico o jurídico. Fuera de él, el pliego es un acto de carácter general que se ataca mediante nulidad ante la jurisdicción contencioso administrativa.",
      },
      {
        pregunta: "¿Qué plazo tengo para demandar por un contrato estatal?",
        respuesta:
          "Las controversias contractuales caducan a los dos años, contados según el caso desde la terminación, desde la liquidación o desde el vencimiento del plazo para liquidar. El acto de adjudicación tiene un término distinto: cuatro meses por nulidad y restablecimiento del derecho.",
      },
    ],
    guias: ["demandar-acto-administrativo", "reparacion-directa-requisitos"],
  },

  "administrativo/funcion-publica": {
    h1: "Carrera administrativa: retiro, concursos y reintegro",
    title: "Carrera administrativa en Colombia",
    description: "Insubsistencia, concursos de mérito y desvinculación: qué reclamar y el plazo de 4 meses.",
    respuesta:
      "Los conflictos de carrera administrativa se juegan contra un reloj corto: la demanda de nulidad y restablecimiento del derecho contra el acto que declara la insubsistencia, retira del servicio o niega un derecho caduca a los 4 MESES contados desde el día siguiente a su notificación. Es el plazo más corto del derecho administrativo y no admite prórroga; lo único que lo suspende es la solicitud de conciliación extrajudicial ante el Ministerio Público. El régimen aplicable es la Ley 909 de 2004, reglamentada por el Decreto 1083 de 2015, con el procedimiento del CPACA (Ley 1437 de 2011).",
    parrafos: [
      "El punto de partida es determinar el tipo de nombramiento, porque de eso depende toda la defensa. Un empleado de libre nombramiento y remoción puede ser declarado insubsistente sin motivación, en ejercicio de la facultad discrecional, y el ataque se concentra en demostrar desviación de poder. Un empleado inscrito en carrera administrativa solo puede ser retirado por las causales taxativas de la ley y previo el procedimiento correspondiente. Un empleado nombrado en provisionalidad en un cargo de carrera ocupa una posición intermedia: la jurisprudencia ha exigido que su retiro sea motivado, con razones objetivas y verificables, y la falta de motivación es en sí misma causal de nulidad.",
      "La desviación de poder es el argumento central en los retiros discrecionales. Consiste en demostrar que la facultad se usó para un fin distinto del interés general: represalia por una denuncia, presión política, sustitución por una persona sin mérito, retaliación tras una queja disciplinaria o discriminación. Se prueba con indicios convergentes: la cercanía temporal entre la denuncia y el retiro, la ausencia de evaluaciones negativas, las felicitaciones previas por desempeño, el nombramiento inmediato de un reemplazo con menor perfil, o declaraciones y comunicaciones internas.",
      "Los concursos de mérito generan un litigio propio. La lista de elegibles en firme crea un derecho subjetivo para quien ocupa un lugar dentro del número de vacantes ofertadas, y la entidad está obligada a nombrar en estricto orden. Cuando no lo hace, cuando nombra a otro, cuando declara desierto el proceso sin fundamento o cuando modifica las vacantes después de la convocatoria, procede la demanda para obtener el nombramiento y la indemnización por el tiempo en que no se produjo. La convocatoria es la norma del concurso y vincula tanto a la entidad como a la Comisión Nacional del Servicio Civil.",
      "Hay protecciones reforzadas que impiden el retiro aun en cargos provisionales: prepensionados a quienes les faltan pocos años para reunir los requisitos de pensión, personas en condición de discapacidad, mujeres en estado de embarazo o en licencia de maternidad, y personas en situaciones de debilidad manifiesta acreditada. En estos casos el retiro exige un análisis particular y con frecuencia procede la protección constitucional además de la vía contenciosa.",
      "En materia prestacional, los empleados públicos reclaman prima de servicios, prima técnica, bonificaciones, horas extras y recargos, subsidio de alimentación y transporte, viáticos, reliquidación de cesantías y ajustes por nivelación salarial. Aquí opera una regla que salva muchos casos: la reclamación administrativa previa y las peticiones periódicas evitan que se consoliden los efectos del silencio, y en prestaciones periódicas la caducidad se cuenta de un modo distinto porque el derecho se causa mes a mes.",
      "El encargo es otra fuente frecuente de litigio. Los empleados de carrera tienen derecho preferente al encargo en cargos de superior jerarquía cuando cumplen los requisitos y tienen evaluación sobresaliente, y la entidad debe motivar por qué no lo concede. Encargar a un tercero sin agotar ese derecho preferente genera un acto atacable y una reclamación por la diferencia salarial del periodo.",
      "El procedimiento a seguir es siempre el mismo: notificación del acto, recursos de reposición y apelación dentro de los diez días hábiles cuando proceden, solicitud de conciliación extrajudicial —que suspende la caducidad— y demanda de nulidad y restablecimiento antes de los cuatro meses. El restablecimiento debe pedirse con precisión: reintegro sin solución de continuidad, pago de salarios y prestaciones dejados de percibir con indexación, aportes al sistema de seguridad social por el periodo de la desvinculación y, en su caso, actualización del tiempo de servicios para pensión.",
      "Conviene advertir un error que se repite: esperar la respuesta a una petición mientras corren los cuatro meses. La petición no suspende la caducidad. Si el acto ya fue notificado, el reloj corre aunque la entidad esté estudiando una solicitud, y muchos casos sólidos se pierden por confiar en un trámite paralelo que no interrumpe el término.",
    ],
    norma: {
      articulo: "Art. 41 Ley 909 de 2004",
      norma: "Ley 909 de 2004 · Decreto 1083 de 2015 · Ley 1437 de 2011",
      texto:
        "El retiro del servicio de quienes estén desempeñando empleos de libre nombramiento y remoción se produce por declaratoria de insubsistencia del nombramiento, y en el caso de los empleados de carrera administrativa solo procede por las causales consagradas en la ley y previo el agotamiento del procedimiento correspondiente.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "CADUCIDAD: 4 MESES · el plazo más corto del derecho administrativo",
      texto:
        "La nulidad y restablecimiento del derecho contra el acto de insubsistencia, retiro o negativa caduca a los 4 MESES contados desde el día siguiente a la notificación (art. 164 CPACA). No se prorroga y una petición pendiente NO lo suspende: lo único que suspende el término, hasta por 3 meses, es la solicitud de conciliación extrajudicial ante el Ministerio Público. Vencido el plazo, el acto queda en firme aunque sea ilegal.",
    },
    reclamar: {
      titulo: "Cuándo nos llaman",
      parrafos: [
        "Los casos llegan casi siempre con el acto ya notificado y con parte del plazo consumido. Lo primero es fijar la fecha exacta de notificación y calcular el vencimiento de los cuatro meses; lo segundo, decidir si procede algún recurso y si conviene radicar de inmediato la conciliación extrajudicial para ganar tiempo.",
        "En paralelo se construye el sustento probatorio: evaluaciones de desempeño, felicitaciones, actos de encargo, listas de elegibles, actas de la Comisión Nacional del Servicio Civil, denuncias previas del empleado y todo lo que permita mostrar que el retiro no obedeció al servicio.",
      ],
      lista: [
        "Te declararon insubsistente",
        "Ganaste el concurso y no te nombraron",
        "Te desvincularon estando en carrera",
        "Hubo desviación de poder en el retiro",
        "Te negaron una prima o un ascenso",
        "Necesitas reclamar prestaciones como empleado público",
      ],
    },
    pasos: [
      { titulo: "Fija la fecha de notificación", texto: "Desde el día siguiente corren los 4 meses. Guarda el acta de notificación personal o el aviso con su constancia de entrega." },
      { titulo: "Verifica tu tipo de vinculación", texto: "Carrera, provisionalidad o libre nombramiento. De eso depende si el acto debía ser motivado y qué causales podían invocarse." },
      { titulo: "Reúne la prueba del mérito", texto: "Evaluaciones, felicitaciones, lista de elegibles, actos de encargo y cualquier indicio de que el retiro tuvo un fin distinto al servicio." },
      { titulo: "Radica la conciliación extrajudicial", texto: "Es requisito de procedibilidad y suspende la caducidad hasta por 3 meses. En este silo suele ser lo que salva el plazo." },
      { titulo: "Demanda antes de los 4 meses", texto: "Nulidad y restablecimiento pidiendo reintegro sin solución de continuidad, salarios, prestaciones, aportes e indexación." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tiempo tengo para demandar mi retiro del servicio?",
        respuesta:
          "Cuatro meses contados desde el día siguiente a la notificación del acto. Es un término de caducidad que no se prorroga. Radicar la solicitud de conciliación extrajudicial ante el Ministerio Público lo suspende hasta por tres meses o hasta que se expida la constancia o el acta.",
      },
      {
        pregunta: "¿Pueden retirarme si estoy en provisionalidad?",
        respuesta:
          "Sí, pero el acto debe ser motivado con razones objetivas y verificables, según la jurisprudencia constitucional y contenciosa. Un retiro de provisionalidad sin motivación es susceptible de nulidad, y existen protecciones reforzadas para prepensionados, personas en condición de discapacidad y mujeres embarazadas.",
      },
      {
        pregunta: "Gané el concurso y no me nombraron, ¿qué puedo hacer?",
        respuesta:
          "Si estás en la lista de elegibles en firme dentro del número de vacantes ofertadas, tienes un derecho subjetivo al nombramiento en estricto orden. Procede exigir el nombramiento y reclamar la indemnización por el periodo en que la entidad no lo hizo, además de las acciones contra los nombramientos irregulares.",
      },
      {
        pregunta: "¿Qué es la desviación de poder?",
        respuesta:
          "Es usar una facultad legal para un fin distinto al previsto por la norma, por ejemplo retirar a un empleado como represalia por una denuncia. Se prueba con indicios convergentes: evaluaciones positivas previas, cercanía temporal con la denuncia, ausencia de razones de servicio y sustitución inmediata por alguien con menor perfil.",
      },
      {
        pregunta: "¿La petición que radiqué suspende los cuatro meses?",
        respuesta:
          "No. Una petición o una reclamación ante la entidad no suspende la caducidad. Solo la suspende la solicitud de conciliación extrajudicial. Esperar la respuesta de la entidad mientras corre el término es una de las causas más frecuentes de pérdida de casos sólidos.",
      },
    ],
    guias: ["demandar-acto-administrativo", "derecho-de-peticion-guia"],
  },

  "administrativo/derecho-disciplinario": {
    h1: "Proceso disciplinario: defensa del servidor público",
    title: "Proceso disciplinario en Colombia",
    description: "Investigación, pliego de cargos, descargos y recursos: cómo defenderse y en qué términos.",
    respuesta:
      "El proceso disciplinario contra servidores públicos y particulares que ejercen funciones públicas se rige por la Ley 1952 de 2019, modificada por la Ley 2094 de 2021, y lo adelantan las oficinas de control interno disciplinario, las personerías o la Procuraduría General de la Nación. La defensa se juega en términos que se cuentan en DÍAS HÁBILES y que son preclusivos: vencido el término para descargos, para pedir pruebas o para recurrir, la oportunidad se pierde y no se recupera. Una sanción de destitución con inhabilidad general puede cerrar una carrera completa, por lo que la intervención debe comenzar desde la indagación, no cuando llega el fallo.",
    parrafos: [
      "El procedimiento tiene etapas claramente diferenciadas. La indagación previa busca establecer si la conducta existió y si constituye falta; la investigación disciplinaria se abre cuando hay mérito y allí se practican pruebas; el pliego de cargos formula la imputación con la descripción de la conducta, las normas violadas, la calificación provisional de la falta y la forma de culpabilidad; siguen los descargos, la etapa probatoria, los alegatos y el fallo de primera instancia. Contra el fallo procede apelación ante el superior. La Ley 2094 de 2021 introdujo además la separación entre quien instruye y quien juzga, y la posibilidad de control judicial de las sanciones con una intensidad mayor.",
      "El pliego de cargos es la pieza que delimita el proceso, y por eso su análisis es el momento más importante de la defensa. La sanción no puede recaer sobre hechos distintos de los imputados ni sobre una falta más grave que la calificada provisionalmente sin la variación formal del pliego. Revisar la congruencia entre hechos, normas invocadas y calificación permite detectar imputaciones difusas, tipos disciplinarios en blanco mal integrados o descripciones que no encajan en ninguna falta.",
      "La culpabilidad importa tanto como la conducta. En derecho disciplinario no basta con que el resultado sea irregular: debe atribuirse a dolo o a culpa gravísima o grave, según la falta. Una defensa eficaz suele concentrarse en demostrar que el servidor actuó con la diligencia exigible, que dependía de información suministrada por otras dependencias, que la decisión estaba amparada en conceptos técnicos o jurídicos, o que la irregularidad no le era exigible en las condiciones concretas del cargo.",
      "La ilicitud sustancial es otro filtro que suele desaprovecharse. La falta disciplinaria exige la afectación sustancial del deber funcional, no cualquier apartamiento formal de un procedimiento. Cuando el incumplimiento no afectó el servicio, no generó riesgo ni daño y se corrigió oportunamente, existe un argumento sólido para pedir el archivo o la absolución, respaldado por la jurisprudencia disciplinaria.",
      "La suspensión provisional del cargo procede en los casos y con los requisitos que fija la ley, y tiene un impacto inmediato en el investigado. Debe estar motivada en la gravedad de la falta y en el riesgo de interferencia probatoria, y es susceptible de control: cuando se decreta sin sustento, puede discutirse dentro del proceso y, cuando la afectación es evidente y urgente, por vía constitucional.",
      "Las sanciones van desde la amonestación escrita hasta la destitución e inhabilidad general, pasando por la multa y la suspensión en el ejercicio del cargo. La inhabilidad general impide ejercer cargos públicos por el término que fije el fallo y se inscribe en el registro de sanciones, con efectos prácticos inmediatos para conseguir empleo público o contratar con el Estado. Por eso la discusión sobre la dosificación —criterios de graduación, atenuantes, ausencia de antecedentes— nunca debe abandonarse aunque la responsabilidad esté acreditada.",
      "Cuando la sanción queda en firme, la vía es judicial: la demanda de nulidad y restablecimiento del derecho ante la jurisdicción contencioso administrativa dentro de los cuatro meses siguientes a la notificación del acto que agotó la vía. La Ley 2094 de 2021 reforzó ese control judicial, que hoy admite un examen más amplio de la valoración probatoria y de la proporcionalidad de la sanción. En ese escenario también proceden medidas cautelares para suspender los efectos de la sanción mientras se decide.",
      "Un aspecto que conviene tener presente desde el inicio es la coexistencia de procesos. Los mismos hechos pueden dar lugar a investigación disciplinaria, fiscal ante la Contraloría y penal ante la Fiscalía, con reglas y estándares distintos. Lo que se declara en uno puede usarse en otro, por lo que la estrategia debe ser coherente y coordinada desde la primera versión libre o diligencia.",
    ],
    norma: {
      articulo: "Ley 1952 de 2019",
      norma: "Código General Disciplinario, modificado por la Ley 2094 de 2021",
      texto:
        "La falta disciplinaria exige la infracción de un deber funcional con afectación sustancial del mismo, sin justificación alguna, y solo puede sancionarse cuando se comete a título de dolo o culpa. El investigado tiene derecho a la defensa técnica, a controvertir las pruebas y a impugnar las decisiones en los términos previstos en este código.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Términos en DÍAS HÁBILES y preclusivos",
      texto:
        "Los términos para rendir descargos, solicitar y controvertir pruebas, alegar y recurrir se cuentan en días hábiles y son preclusivos: vencidos, la oportunidad se pierde. Contra el fallo de primera instancia procede apelación dentro del término legal. Una vez en firme la sanción, la demanda de nulidad y restablecimiento debe presentarse dentro de los 4 meses siguientes a la notificación.",
    },
    reclamar: {
      titulo: "Cuándo nos llaman",
      parrafos: [
        "El momento más útil para intervenir es el más temprano: la indagación previa y la versión libre, cuando todavía puede orientarse la prueba y evitarse una imputación mal enfocada. Cuando el caso llega con el pliego de cargos ya formulado, el trabajo se concentra en los descargos y en la solicitud de pruebas dentro del término.",
        "Si la sanción ya se impuso, la evaluación cambia: hay que decidir entre agotar la apelación, discutir la dosificación y preparar la demanda judicial con medida cautelar para suspender los efectos, especialmente cuando hay inhabilidad de por medio.",
      ],
      lista: [
        "Te abrieron investigación disciplinaria",
        "Recibiste pliego de cargos",
        "Te sancionaron y quieres apelar",
        "Enfrentas un proceso ante la Procuraduría o control interno",
        "Te suspendieron provisionalmente del cargo",
        "Quieres controvertir judicialmente una sanción en firme",
      ],
    },
    pasos: [
      { titulo: "Pide copia del expediente", texto: "Desde la indagación. Sin el expediente completo no hay defensa posible y su entrega es un derecho del investigado." },
      { titulo: "Analiza el pliego de cargos", texto: "Congruencia entre hechos, normas y calificación, forma de culpabilidad imputada y afectación sustancial del deber funcional." },
      { titulo: "Presenta descargos en término", texto: "En días hábiles y con solicitud expresa de pruebas: documentos, testimonios y peritajes. Vencido el plazo, esa oportunidad no vuelve." },
      { titulo: "Controvierte la prueba y alega", texto: "Interroga a los testigos, objeta lo que no se practicó en debida forma y presenta alegatos sobre ilicitud sustancial y culpabilidad." },
      { titulo: "Apela y luego demanda", texto: "Apelación ante el superior y, en firme la sanción, nulidad y restablecimiento dentro de los 4 meses con solicitud de medida cautelar." },
    ],
    faqs: [
      {
        pregunta: "¿Necesito abogado en un proceso disciplinario?",
        respuesta:
          "No es obligatorio en todas las etapas, pero sí determinante. El pliego de cargos, los descargos y la solicitud de pruebas tienen términos preclusivos en días hábiles, y una sanción de destitución con inhabilidad general tiene efectos que superan con creces el costo de una defensa técnica oportuna.",
      },
      {
        pregunta: "¿Qué sanciones pueden imponerme?",
        respuesta:
          "Según la gravedad de la falta y la forma de culpabilidad: amonestación escrita, multa, suspensión en el ejercicio del cargo, y destitución e inhabilidad general. La inhabilidad se inscribe en el registro de sanciones e impide ejercer cargos públicos y contratar con el Estado durante el término fijado.",
      },
      {
        pregunta: "¿Puedo demandar una sanción disciplinaria?",
        respuesta:
          "Sí. Una vez en firme, procede la demanda de nulidad y restablecimiento del derecho ante la jurisdicción contencioso administrativa dentro de los cuatro meses siguientes a la notificación. La Ley 2094 de 2021 reforzó ese control judicial, que hoy examina con mayor intensidad la prueba y la proporcionalidad de la sanción.",
      },
      {
        pregunta: "¿Qué es la ilicitud sustancial?",
        respuesta:
          "Es la exigencia de que la conducta afecte sustancialmente el deber funcional, no solo que se aparte formalmente de un procedimiento. Si el incumplimiento no generó riesgo ni daño al servicio y se corrigió a tiempo, existe base para pedir el archivo o la absolución.",
      },
      {
        pregunta: "¿Me pueden suspender del cargo mientras me investigan?",
        respuesta:
          "Sí, cuando se cumplen los requisitos legales y la decisión está motivada en la gravedad de la falta y en el riesgo de interferencia probatoria. Esa suspensión puede controvertirse dentro del proceso y, si la afectación es evidente y urgente, también por vía constitucional.",
      },
    ],
    guias: ["demandar-acto-administrativo", "derecho-de-peticion-guia"],
  },

  "administrativo/sanciones-administrativas": {
    h1: "Sanción administrativa: cómo interponer el recurso",
    title: "Sanción administrativa: recurso",
    description: "Cómo recurrir una multa o sanción de una entidad: reposición y apelación en 10 días hábiles.",
    respuesta:
      "Frente a una sanción impuesta por una entidad pública —una multa, una orden de cierre, una sanción ambiental, de tránsito, de servicios públicos, tributaria o de una superintendencia— la defensa comienza con los recursos del CPACA: reposición ante quien expidió el acto y apelación ante su superior, que se interponen dentro de los 10 días hábiles siguientes a la notificación personal o a la notificación por aviso. Los recursos deben sustentarse con las razones concretas de inconformidad y con la solicitud y aporte de pruebas. Dejar vencer ese término deja el acto en firme y presta mérito ejecutivo para el cobro coactivo, aunque la sanción sea ilegal.",
    parrafos: [
      "El procedimiento administrativo sancionatorio está en el Libro I, Título III del CPACA y tiene una estructura que conviene conocer antes de que llegue la sanción. La actuación se inicia de oficio o por queja, la entidad formula cargos indicando los hechos, las normas presuntamente vulneradas y las sanciones posibles, el investigado presenta descargos y solicita pruebas dentro del término, se practican las pruebas decretadas, se corre traslado para alegar y finalmente se decide mediante acto motivado. Cada una de esas etapas es una oportunidad de defensa que, si se pierde, no se recupera después.",
      "Los vicios que con más frecuencia anulan una sanción son procedimentales. Formulación de cargos imprecisa que impide saber de qué se defiende el investigado, notificación defectuosa que le impidió intervenir, pruebas practicadas sin su conocimiento, decisión que sanciona por hechos distintos de los imputados, ausencia de motivación real y falta de competencia del funcionario que la impuso. Detectarlos y alegarlos en los recursos es lo que permite discutirlos después ante el juez.",
      "La caducidad de la facultad sancionatoria es una defensa que casi nadie invoca y que resuelve casos completos. El CPACA establece que la facultad para imponer sanciones caduca a los tres años de ocurrido el hecho, la conducta u omisión que pudiere ocasionarlas, término dentro del cual el acto administrativo que impone la sanción debe haber sido expedido y notificado. Existen además términos especiales en regímenes propios —tributario, ambiental, de tránsito, financiero— que pueden ser más cortos y deben revisarse caso por caso.",
      "La proporcionalidad de la sanción es el otro frente de discusión. El CPACA obliga a graduar la sanción atendiendo criterios como el daño o peligro generado, el beneficio económico obtenido, la reincidencia, la resistencia u obstrucción a la actuación, la confesión antes de la formulación de cargos y el resarcimiento del daño. Un recurso bien construido no solo discute la responsabilidad: pide subsidiariamente la reducción del monto con base en estos criterios, y ese pedido subsidiario es el que muchas veces prospera.",
      "Notificación y firmeza determinan todos los tiempos. El acto se notifica personalmente y, si no es posible, mediante aviso; desde el día hábil siguiente corren los diez días para recurrir. El acto queda en firme cuando no se interponen recursos, cuando los interpuestos se resuelven, cuando se renuncia expresamente a ellos o cuando se acepta el desistimiento. En firme, presta mérito ejecutivo y la entidad puede iniciar el cobro coactivo con embargos, sin acudir a un juez.",
      "Después de agotada la vía administrativa, la discusión pasa a la jurisdicción contencioso administrativa mediante la nulidad y restablecimiento del derecho, con caducidad de cuatro meses desde la notificación del acto que resolvió el último recurso. Allí puede pedirse la suspensión provisional del acto, medida especialmente útil cuando la sanción incluye cierre, suspensión de actividades o inscripción en registros que afectan la operación de una empresa.",
      "Si el cobro coactivo ya se inició, todavía hay defensas: las excepciones dentro del término legal permiten alegar el pago, la prescripción de la acción de cobro, la falta de ejecutoria del título, la interposición de recursos no resueltos o la existencia de un proceso judicial en curso con suspensión decretada. También pueden discutirse las medidas cautelares desproporcionadas y solicitarse facilidades de pago mientras se resuelve el fondo.",
      "La recomendación práctica es una sola y vale para cualquier sanción: no dejar pasar los diez días hábiles. Un recurso presentado a tiempo, aunque sea breve, conserva el caso; un recurso perfecto presentado al día once no tiene ningún valor jurídico y convierte una defensa posible en un cobro coactivo inevitable.",
    ],
    norma: {
      articulo: "Arts. 47 a 52 y 74 a 76 CPACA",
      norma: "Ley 1437 de 2011, Libro I Título III",
      texto:
        "Los actos administrativos de carácter particular deberán ser motivados y contra ellos proceden los recursos de reposición ante quien expidió la decisión y de apelación ante el inmediato superior administrativo, los cuales deberán interponerse por escrito en la diligencia de notificación personal o dentro de los diez (10) días siguientes a ella, o a la notificación por aviso, sustentando las razones de inconformidad.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Recursos: 10 días hábiles",
      texto:
        "Reposición y apelación se interponen y sustentan dentro de los 10 días hábiles siguientes a la notificación personal o por aviso (art. 76 CPACA). Vencido el término, el acto queda en firme y presta mérito ejecutivo para cobro coactivo. Agotada la vía administrativa, la demanda de nulidad y restablecimiento caduca a los 4 meses. La facultad sancionatoria caduca, por regla general, a los 3 años del hecho.",
    },
    reclamar: {
      titulo: "Qué puedes alegar",
      parrafos: [
        "Los recursos deben plantear todo lo que después se quiera discutir ante el juez: los vicios de procedimiento, la falta de prueba de la conducta, la caducidad de la facultad sancionatoria, la falta de competencia y, de manera subsidiaria, la desproporción de la sanción impuesta.",
        "Es igualmente importante pedir pruebas en el recurso cuando no se decretaron o se practicaron mal. La entidad está obligada a resolver la solicitud, y su negativa injustificada se convierte en un argumento de nulidad por violación del derecho de defensa.",
      ],
      lista: [
        "Caducidad de la facultad sancionatoria por el paso del tiempo",
        "Falta de competencia del funcionario que impuso la sanción",
        "Violación del debido proceso: cargos imprecisos o notificación defectuosa",
        "Ausencia de prueba de la conducta o de la culpabilidad exigida",
        "Desproporción de la sanción y solicitud subsidiaria de reducción",
      ],
    },
    pasos: [
      { titulo: "Verifica la notificación", texto: "Personal o por aviso, con su fecha exacta. Desde el día hábil siguiente corren los 10 días para recurrir." },
      { titulo: "Revisa la caducidad", texto: "Por regla general la facultad sancionatoria caduca a los 3 años del hecho, y algunos regímenes tienen términos más cortos." },
      { titulo: "Sustenta el recurso con pruebas", texto: "Razones concretas de inconformidad, documentos y solicitud de pruebas. Un recurso sin sustentación equivale a no recurrir." },
      { titulo: "Pide reducción subsidiaria", texto: "Con base en los criterios de graduación del CPACA: ausencia de daño, no reincidencia, resarcimiento y colaboración." },
      { titulo: "Demanda y pide suspensión", texto: "Agotada la vía administrativa, nulidad y restablecimiento dentro de los 4 meses, con solicitud de suspensión provisional del acto." },
    ],
    faqs: [
      {
        pregunta: "¿Cuántos días tengo para recurrir una sanción administrativa?",
        respuesta:
          "Diez días hábiles contados desde la notificación personal o desde la notificación por aviso. Los recursos de reposición y apelación se interponen por escrito y deben sustentarse con las razones de inconformidad y con la solicitud o aporte de las pruebas pertinentes.",
      },
      {
        pregunta: "¿Qué pasa si dejo vencer el plazo del recurso?",
        respuesta:
          "El acto queda en firme y presta mérito ejecutivo, lo que habilita a la entidad para iniciar el cobro coactivo con embargos sin acudir a un juez. Quedan alternativas limitadas, como las excepciones dentro del cobro coactivo o la revocatoria directa en los casos que la ley permite.",
      },
      {
        pregunta: "¿La facultad para sancionar tiene un plazo?",
        respuesta:
          "Sí. Por regla general el CPACA establece que la facultad sancionatoria caduca a los tres años de ocurrido el hecho, la conducta u omisión, término dentro del cual el acto que impone la sanción debe haberse expedido y notificado. Varios regímenes especiales tienen términos propios que deben revisarse.",
      },
      {
        pregunta: "¿Puedo pedir que me rebajen la multa?",
        respuesta:
          "Sí, como pretensión subsidiaria del recurso. El CPACA obliga a graduar la sanción según el daño causado, el beneficio obtenido, la reincidencia, la obstrucción a la actuación, la confesión previa a la formulación de cargos y el resarcimiento del daño.",
      },
      {
        pregunta: "¿Puedo evitar que me cobren mientras discuto la sanción?",
        respuesta:
          "Mientras los recursos estén pendientes, el acto no está en firme y no procede el cobro. Ya en sede judicial, la suspensión provisional del acto es la medida idónea para impedir sus efectos, y dentro del cobro coactivo pueden proponerse excepciones y solicitarse facilidades de pago.",
      },
    ],
    guias: ["demandar-acto-administrativo", "derecho-de-peticion-guia"],
  },
};

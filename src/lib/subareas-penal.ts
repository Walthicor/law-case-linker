import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo PENAL.
 * Norma base: Ley 599 de 2000 (Código Penal) y Ley 906 de 2004 (CPP).
 * // VERIFICAR CON ABOGADO todos los plazos.
 */
export const SUBAREAS_PENAL: Record<string, ContenidoSubarea> = {
  "penal/defensa-penal": {
    h1: "Abogado defensor penal en Colombia",
    title: "Abogado defensor penal en Colombia",
    description: "Defensa desde la captura hasta el juicio: libertad, imputación, preacuerdos y juicio oral.",
    respuesta:
      "El abogado defensor penal interviene desde el primer momento en que una persona es capturada, citada a interrogatorio o notificada de una noticia criminal, y su trabajo se concentra en tres frentes: evitar o levantar la medida de aseguramiento, controlar la legalidad de la actuación de la Fiscalía y construir la teoría del caso con la que se llegará al juicio oral. En el sistema de la Ley 906 de 2004 la defensa es técnica y obligatoria: nadie puede ser imputado ni juzgado sin abogado, y las decisiones que se toman en las primeras 36 horas —guardar silencio, aceptar cargos, aportar una coartada sin verificar— condicionan todo el proceso.",
    parrafos: [
      "La primera batalla es la libertad. Toda captura debe legalizarse ante el juez de control de garantías dentro de las 36 horas siguientes, y allí se verifica si existió flagrancia real, si la orden judicial estaba vigente, si se informaron los derechos del capturado y si el procedimiento respetó las garantías. Una captura ilegal no solo genera la libertad inmediata: contamina la prueba que se derivó de ella, por la regla de exclusión del artículo 23 del CPP.",
      "En la audiencia de imputación la Fiscalía comunica los hechos jurídicamente relevantes y la calificación provisional. La defensa no discute allí la responsabilidad, pero sí verifica que la imputación sea clara, que los hechos descritos correspondan al tipo penal invocado y que no se estén imputando delitos con el único propósito de habilitar la detención preventiva. Una imputación imprecisa se puede controvertir y es la base para pedir después la nulidad o la absolución por congruencia.",
      "La medida de aseguramiento exige que la Fiscalía acredite inferencia razonable de autoría y, además, uno de los tres fines constitucionales: peligro para la comunidad, riesgo de obstrucción a la justicia o riesgo de no comparecencia. La defensa ataca cada uno con prueba concreta: arraigo familiar, laboral y domiciliario, ausencia de antecedentes, ofrecimiento de caución, disposición a presentarse periódicamente. Cuando se acredita arraigo sólido es frecuente obtener detención domiciliaria o medidas no privativas.",
      "El descubrimiento probatorio es donde muchos casos se ganan sin llegar al juicio. La Fiscalía debe entregar los elementos materiales probatorios e informes en las oportunidades legales, y lo que no se descubre no se puede usar. La defensa, a su vez, adelanta su propia investigación: entrevistas, peritajes, documentos, videos y actos urgentes. Un investigador de la defensa que llega antes que la Fiscalía a un testigo o a una cámara de seguridad puede cambiar el resultado.",
      "El preacuerdo y la aceptación de cargos son herramientas legítimas, no rendiciones. Las rebajas dependen del momento procesal: hasta la mitad de la pena en la audiencia de imputación, y porcentajes decrecientes a medida que avanza el proceso. La decisión debe tomarse con el cálculo real de la pena, de los subrogados aplicables y de las consecuencias en materia de antecedentes, inhabilidades y reparación a la víctima. Aceptar cargos sin ese cálculo suele terminar en una condena peor que la que se habría obtenido litigando.",
      "El principio de oportunidad, la conciliación en delitos querellables y la indemnización integral son salidas alternas que cierran el proceso sin condena en los casos que lo permiten. Su procedencia depende del delito, del monto y de la actitud de la víctima, y suelen negociarse mejor cuando la defensa llega con la reparación ya estructurada.",
      "En juicio oral rige la contradicción plena: interrogatorio, contrainterrogatorio, impugnación de credibilidad y refrescamiento de memoria. La prueba de referencia es admisible solo excepcionalmente, y la duda razonable favorece al procesado. La sentencia condenatoria exige convencimiento más allá de toda duda razonable, estándar que la defensa invoca con base en las inconsistencias acumuladas durante todo el proceso.",
      "Contra la sentencia proceden la apelación ante el superior y, cumplidos los requisitos, la casación ante la Corte Suprema de Justicia. También existen la acción de revisión frente a condenas en firme cuando aparece prueba nueva o se demuestra un fraude procesal, y la tutela contra providencias judiciales en casos excepcionales de vía de hecho.",
    ],
    norma: {
      articulo: "Art. 8 Ley 906 de 2004",
      norma: "Ley 906 de 2004 · Ley 599 de 2000",
      texto:
        "En desarrollo de la actuación, una vez adquirida la condición de imputado, este tendrá derecho, en plena igualdad, a no ser obligado a declarar contra sí mismo, a ser oído, a que se le designe un defensor, a disponer de tiempo y medios adecuados para la preparación de la defensa, y a solicitar, conocer y controvertir las pruebas.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "36 horas para legalizar la captura",
      texto:
        "Toda persona capturada debe ser puesta a disposición del juez de control de garantías dentro de las 36 horas siguientes. La Fiscalía tiene términos máximos para formular acusación tras la imputación y para iniciar el juicio; su vencimiento genera libertad por vencimiento de términos. La apelación de la sentencia se interpone dentro de los términos del CPP.",
    },
    reclamar: {
      titulo: "Qué hace la defensa",
      parrafos: [
        "La defensa no se limita a asistir a audiencias: investiga, recauda prueba propia, controla la legalidad de cada actuación y define desde el inicio si la estrategia es absolución, salida alterna o negociación con rebaja.",
        "Ese diseño temprano es lo que evita el error más costoso del sistema acusatorio: llegar al juicio sin prueba de descargo porque nunca se buscó.",
      ],
      lista: [
        "Control de legalidad de la captura y del allanamiento",
        "Oposición a la medida de aseguramiento con prueba de arraigo",
        "Investigación defensiva: entrevistas, peritajes y documentos",
        "Preacuerdos y aceptación de cargos con cálculo real de pena",
        "Juicio oral, apelación y casación",
      ],
    },
    pasos: [
      { titulo: "Guarda silencio y llama al abogado", texto: "Nadie está obligado a declarar contra sí mismo. Lo dicho sin defensor en la calle o en la URI suele volverse en contra." },
      { titulo: "Controla la legalidad de la captura", texto: "Flagrancia, orden judicial vigente, información de derechos y trato. Una captura ilegal excluye la prueba derivada." },
      { titulo: "Prepara la audiencia de medida", texto: "Certificados laborales, contrato de arrendamiento, prueba de arraigo familiar y ausencia de antecedentes." },
      { titulo: "Investiga en paralelo", texto: "Entrevistas a testigos, cámaras, historiales, peritajes. La defensa no espera lo que descubra la Fiscalía." },
      { titulo: "Decide la estrategia con números", texto: "Absolución, preacuerdo o aceptación: calcula pena, rebajas, subrogados y reparación antes de firmar nada." },
    ],
    faqs: [
      {
        pregunta: "¿Qué hago si capturan a un familiar?",
        respuesta:
          "Ubicar de inmediato dónde está detenido, verificar que la captura se legalice dentro de las 36 horas siguientes y contactar un defensor antes de la audiencia. Es clave que la persona no rinda ninguna declaración sin abogado y que la familia reúna documentos de arraigo para la audiencia de medida de aseguramiento.",
      },
      {
        pregunta: "¿Conviene aceptar cargos?",
        respuesta:
          "Solo después de calcular la pena real, las rebajas según el momento procesal, los subrogados aplicables y las consecuencias en antecedentes e inhabilidades. La rebaja mayor se obtiene en la imputación y disminuye a medida que avanza el proceso, pero aceptar sin analizar la prueba de cargo suele ser el peor negocio.",
      },
      {
        pregunta: "¿Puedo salir libre por vencimiento de términos?",
        respuesta:
          "Sí. El CPP fija plazos máximos para que la Fiscalía formule acusación y para que se inicie el juicio oral. Si se vencen sin causa imputable a la defensa, procede solicitar la libertad ante el juez de control de garantías, sin que ello signifique el fin del proceso.",
      },
      {
        pregunta: "¿El defensor público sirve igual que uno de confianza?",
        respuesta:
          "La defensoría pública garantiza defensa técnica y es gratuita, pero maneja cargas altas de procesos. Un defensor de confianza puede dedicar tiempo a la investigación defensiva, a las entrevistas y a la preparación de testigos, que es donde suelen decidirse los casos complejos.",
      },
      {
        pregunta: "¿Qué pasa si la prueba se obtuvo ilegalmente?",
        respuesta:
          "Opera la regla de exclusión: la prueba obtenida con violación de garantías fundamentales es nula de pleno derecho y no puede valorarse, y en muchos casos arrastra la prueba derivada de ella. Por eso el control de legalidad de capturas, allanamientos e interceptaciones es una de las primeras tareas de la defensa.",
      },
    ],
    guias: ["citacion-interrogatorio", "etapas-proceso-penal"],
  },

  "penal/denuncias": {
    h1: "Cómo poner una denuncia en Colombia",
    title: "Cómo poner una denuncia en Colombia",
    description: "Dónde denunciar, qué debe contener la denuncia y qué pasa después de radicarla.",
    respuesta:
      "La denuncia penal se presenta ante la Fiscalía General de la Nación —en un CAV, una URI o una sala de atención al usuario—, ante la Policía Judicial (SIJIN o CTI) o en línea a través del portal ¡A Denunciar!. Es gratuita, no requiere abogado y puede hacerse verbalmente o por escrito, bajo juramento. Lo que decide su suerte no es el formato sino el contenido: hechos concretos con fecha, hora y lugar, identificación de las personas involucradas, descripción de lo ocurrido sin calificaciones jurídicas y, sobre todo, el listado de las pruebas disponibles y de dónde pueden obtenerse. Una denuncia vaga se archiva; una denuncia bien construida orienta el programa metodológico del fiscal desde el primer día.",
    parrafos: [
      "Hay una distinción que conviene tener clara antes de radicar. Los delitos investigables de oficio se persiguen sin necesidad de que la víctima lo pida y no admiten desistimiento. Los delitos querellables exigen querella del ofendido, admiten conciliación como requisito de procedibilidad y caducan a los seis meses de conocido el hecho. Presentar una querella después de ese término implica que el proceso se archive sin importar cuán sólida sea la prueba.",
      "El escrito debe narrar los hechos en orden cronológico y en lenguaje llano. No hay que calificar jurídicamente la conducta —esa es tarea del fiscal— pero sí describir con precisión lo que ocurrió: qué se dijo, qué se entregó, cuánto dinero se transfirió, en qué cuenta, con qué comprobante. En delitos patrimoniales, la trazabilidad bancaria y los mensajes de texto o WhatsApp suelen ser la columna vertebral del caso.",
      "Las pruebas deben aportarse o al menos señalarse con su ubicación. Copias de contratos, facturas, extractos, historia clínica, dictamen de Medicina Legal, capturas de pantalla con metadatos, videos de cámaras de seguridad —advirtiendo que suelen borrarse en pocos días, lo que hace urgente pedir su preservación—, nombres y datos de contacto de testigos. Solicitar expresamente actos urgentes de policía judicial en la misma denuncia es una práctica que ahorra meses.",
      "Después de radicar, la denuncia recibe un número de noticia criminal (NUNC) que permite hacer seguimiento y es indispensable para cualquier gestión posterior. El fiscal asignado puede ordenar la indagación, formular imputación, aplicar el principio de oportunidad, o archivar cuando no encuentra motivos o circunstancias fácticas que permitan caracterizar el delito. El archivo no es cosa juzgada: si aparecen nuevos elementos, la investigación puede reactivarse.",
      "La víctima tiene un papel activo reconocido por la ley y por la jurisprudencia constitucional. Puede constituirse como víctima dentro del proceso, solicitar el incidente de reparación integral después de la condena, pedir medidas de protección, ser informada del estado de la actuación y controvertir el archivo. En delitos con daño patrimonial, el incidente de reparación es la vía para obtener indemnización dentro del mismo proceso penal, sin necesidad de un proceso civil aparte.",
      "En delitos sexuales, violencia intrafamiliar y violencia basada en género existen rutas especializadas y medidas de protección que se dictan en horas: comisarías de familia, casas de justicia y unidades especializadas de la Fiscalía. En esos casos la prioridad es la protección inmediata y la valoración por Medicina Legal, que debe hacerse lo antes posible para preservar la evidencia.",
      "Denunciar falsamente tiene consecuencias. El Código Penal sanciona la falsa denuncia y la falsa denuncia contra persona determinada, por lo que la narración debe ceñirse a lo que efectivamente ocurrió y puede sostenerse. Del mismo modo, usar la denuncia penal como instrumento de presión en un conflicto puramente civil o comercial suele terminar en archivo y, en ocasiones, en una investigación contra el denunciante.",
      "Cuando la investigación se estanca, hay caminos: solicitar por escrito al fiscal la práctica de actos de investigación específicos, elevar petición al coordinador de la unidad, presentar derecho de petición sobre el estado del caso e incluso acudir a la tutela cuando existe una inactividad prolongada e injustificada que vulnera el acceso a la administración de justicia.",
    ],
    norma: {
      articulo: "Art. 67 y 69 Ley 906 de 2004",
      norma: "Ley 906 de 2004 · Ley 599 de 2000",
      texto:
        "Toda persona debe denunciar a la autoridad los delitos de cuya comisión tenga conocimiento y que deban investigarse de oficio. La denuncia, querella o petición se hará verbalmente, por escrito o por cualquier medio técnico que permita la identificación del autor, bajo juramento de no proceder de forma temeraria.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Querella: 6 meses de caducidad",
      texto:
        "En los delitos querellables la querella debe presentarse dentro de los 6 meses siguientes a la comisión del hecho o, cuando el querellante no tuvo conocimiento, dentro de los 6 meses siguientes a que lo conoció, sin exceder el término legal. Los delitos investigables de oficio no tienen ese límite, pero sí prescripción de la acción penal según la pena máxima del delito.",
    },
    reclamar: {
      titulo: "Qué debe contener la denuncia",
      parrafos: [
        "Una denuncia útil se puede leer y entender en cinco minutos: quién, qué, cuándo, dónde, cómo y con qué prueba. Todo lo demás es relleno que dificulta el trabajo del fiscal.",
        "Conviene además pedir de forma expresa los actos urgentes que se necesitan —preservación de videos, inspección al lugar, solicitud de información financiera— porque esas diligencias tienen ventanas de tiempo muy cortas.",
      ],
      lista: [
        "Hechos con fecha, hora y lugar exactos, en orden cronológico",
        "Identificación o descripción de las personas involucradas",
        "Documentos, transferencias, mensajes y capturas con fecha",
        "Testigos con datos de contacto verificables",
        "Solicitud de actos urgentes y de preservación de evidencia",
      ],
    },
    pasos: [
      { titulo: "Reúne la prueba antes de radicar", texto: "Contratos, transferencias, mensajes, fotos, videos y datos de testigos. Lo que se aporta desde el inicio pesa más." },
      { titulo: "Escoge el canal", texto: "URI, CAV, CTI, SIJIN o el portal ¡A Denunciar!. En casos de riesgo actual, acude también a comisaría de familia o casa de justicia." },
      { titulo: "Narra sin calificar", texto: "Describe lo que pasó sin ponerle nombre jurídico. La calificación la hace el fiscal con base en tu relato." },
      { titulo: "Guarda el NUNC", texto: "El número de noticia criminal es la llave para consultar el estado del caso y para cualquier solicitud posterior." },
      { titulo: "Haz seguimiento", texto: "Solicita por escrito actos de investigación, pide informes del estado del proceso y constitúyete como víctima." },
    ],
    faqs: [
      {
        pregunta: "¿Necesito abogado para denunciar?",
        respuesta:
          "No. La denuncia es gratuita y puede presentarla directamente la víctima o cualquier persona que conozca el hecho. Un abogado aporta valor cuando hay que estructurar la prueba, solicitar actos urgentes, constituirse como víctima o impulsar el incidente de reparación integral.",
      },
      {
        pregunta: "¿Puedo retirar una denuncia?",
        respuesta:
          "Solo en delitos querellables, mediante desistimiento o conciliación. En los delitos investigables de oficio la investigación continúa aunque la víctima no quiera seguir, porque la acción penal está en cabeza del Estado.",
      },
      {
        pregunta: "¿Cuánto tiempo tengo para denunciar?",
        respuesta:
          "En los delitos querellables, seis meses desde el hecho o desde que se conoció, según el caso. En los demás, no hay caducidad de la denuncia, pero la acción penal prescribe en un término que depende de la pena máxima del delito, por lo que denunciar tarde puede dejar el caso sin salida.",
      },
      {
        pregunta: "¿Qué pasa si archivan mi denuncia?",
        respuesta:
          "El archivo procede cuando no hay elementos que permitan caracterizar el delito. No es definitivo: si aparecen nuevos elementos materiales probatorios, la investigación puede reanudarse. La víctima puede solicitar la revisión del archivo y, en casos de inactividad injustificada, acudir a la tutela.",
      },
      {
        pregunta: "¿Cómo obtengo la indemnización de los daños?",
        respuesta:
          "Mediante el incidente de reparación integral, que se promueve después de la sentencia condenatoria dentro del mismo proceso penal. También puede acudirse a la jurisdicción civil, pero el incidente suele ser más rápido y aprovecha la prueba ya practicada.",
      },
    ],
    guias: ["poner-denuncia-penal", "etapas-proceso-penal"],
  },

  "penal/libertades": {
    h1: "Audiencia de control de garantías y libertad",
    title: "Audiencia de control de garantías",
    description: "Legalización de captura, medida de aseguramiento y solicitudes de libertad ante el juez.",
    respuesta:
      "La audiencia ante el juez de control de garantías es el escenario donde se decide si una persona espera el proceso en libertad, con detención domiciliaria o en un establecimiento carcelario. En una sola jornada suelen celebrarse tres audiencias concentradas: legalización de la captura, formulación de imputación e imposición de medida de aseguramiento. El capturado debe ser puesto a disposición del juez dentro de las 36 horas siguientes a la aprehensión, y la Fiscalía debe acreditar inferencia razonable de autoría y al menos uno de los fines constitucionales de la medida. Lo que se argumente y se pruebe allí es, en la práctica, la decisión más importante de todo el proceso penal.",
    parrafos: [
      "El control de legalidad de la captura examina si hubo flagrancia en los términos del artículo 301 del CPP, si existía orden judicial vigente y competente, si se informaron los derechos del capturado —guardar silencio, designar abogado, comunicarse con un familiar— y si el trato durante la aprehensión respetó la dignidad. Declarada la ilegalidad, la persona queda en libertad inmediata y la prueba derivada de esa captura puede quedar excluida del proceso.",
      "La imputación no es una condena ni admite discusión de responsabilidad, pero sí exige claridad. La Fiscalía debe comunicar los hechos jurídicamente relevantes de manera comprensible y su calificación provisional. Una imputación confusa o que no describe la conducta que se atribuye afecta el derecho de defensa y puede alegarse después como causal de nulidad o como problema de congruencia con la acusación.",
      "Para imponer medida de aseguramiento la Fiscalía necesita dos cosas. Primero, inferencia razonable de que el imputado es autor o partícipe, sustentada en elementos materiales probatorios concretos y no en meras hipótesis. Segundo, la acreditación de un fin constitucional: peligro para la comunidad o para la víctima, riesgo de obstrucción de la justicia o probabilidad de no comparecencia. Cada uno tiene sus propios criterios legales y la defensa debe atacarlos uno por uno.",
      "La detención preventiva en establecimiento carcelario es excepcional y subsidiaria. El juez debe examinar primero si las medidas no privativas de la libertad —presentaciones periódicas, prohibición de salir del país, caución, vigilancia electrónica, prohibición de acercarse a la víctima— son suficientes para conjurar el riesgo. Esa exigencia de proporcionalidad, reforzada por la jurisprudencia, es el argumento central de la mayoría de las defensas exitosas en esta audiencia.",
      "El arraigo se prueba, no se afirma. Contrato de arrendamiento o escritura de la vivienda, certificación laboral con antigüedad e ingresos, matrícula de los hijos, registro civil que acredite personas a cargo, historia clínica en casos de enfermedad, certificado de antecedentes y arraigo social documentado con cartas de vecinos o empleadores. Llegar a la audiencia con esa carpeta organizada cambia el resultado con más frecuencia que cualquier argumento jurídico.",
      "Existen causales específicas de libertad en el artículo 317 del CPP. Las más invocadas son el vencimiento de términos: cuando transcurre el plazo máximo sin que la Fiscalía formule acusación, cuando no se inicia el juicio oral dentro del término legal y cuando no se celebra la audiencia de lectura de fallo en el plazo previsto. También procede la libertad cuando se cumple la pena que se llegaría a imponer o cuando se revoca la medida por desaparecer sus fundamentos.",
      "La sustitución de la detención preventiva por detención domiciliaria procede en los eventos del artículo 314 del CPP: cuando el imputado es mayor de 65 años y su personalidad y naturaleza del delito lo permiten, en casos de grave enfermedad certificada, para mujeres en estado avanzado de embarazo o durante los seis meses siguientes al parto, y para quien sea cabeza de familia de hijos menores o de personas en condición de discapacidad. Cada causal exige prueba documental específica.",
      "Todas las decisiones del juez de control de garantías son apelables ante el juez penal del circuito, y el recurso debe sustentarse en la misma audiencia o en el término legal según el caso. Además, la medida de aseguramiento tiene término máximo de duración, cuyo vencimiento genera su libertad inmediata salvo prórroga excepcional debidamente justificada.",
    ],
    norma: {
      articulo: "Arts. 306 a 317 Ley 906 de 2004",
      norma: "Ley 906 de 2004 · Ley 599 de 2000",
      texto:
        "El juez de control de garantías, a petición del Fiscal General de la Nación o de su delegado, decretará la medida de aseguramiento cuando de los elementos materiales probatorios y evidencia física recogidos y asegurados o de la información obtenidos legalmente, se pueda inferir razonablemente que el imputado puede ser autor o partícipe de la conducta delictiva que se investiga, y siempre que resulte necesaria para evitar la obstrucción de la justicia, proteger a la comunidad y a las víctimas, o asegurar la comparecencia del imputado.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "36 horas · términos que generan libertad",
      texto:
        "El capturado debe quedar a disposición del juez de control de garantías dentro de las 36 horas siguientes a la captura. El artículo 317 del CPP prevé causales de libertad por vencimiento de términos cuando no se formula acusación, no se inicia el juicio oral o no se lee el fallo dentro de los plazos legales. La medida de aseguramiento tiene además un término máximo de duración.",
    },
    reclamar: {
      titulo: "Qué se puede pedir en esta audiencia",
      parrafos: [
        "La defensa no llega solo a oponerse: llega a proponer alternativas concretas y verificables que satisfagan los fines de la medida sin privar de la libertad. Esa propuesta debe estar respaldada en documentos entregados al juez en el momento.",
        "Cuando la medida ya está impuesta, el escenario sigue abierto: puede pedirse su revocatoria por desaparición de fundamentos, su sustitución por domiciliaria en las causales legales o la libertad por vencimiento de términos.",
      ],
      lista: [
        "Declaratoria de ilegalidad de la captura y libertad inmediata",
        "Medidas no privativas: caución, presentaciones y prohibición de salida",
        "Sustitución por detención domiciliaria (art. 314 CPP)",
        "Libertad por vencimiento de términos (art. 317 CPP)",
        "Revocatoria de la medida por desaparecer sus fundamentos",
      ],
    },
    pasos: [
      { titulo: "Ubica al capturado y cuenta las horas", texto: "Desde la aprehensión corren 36 horas para la audiencia. Verifica el sitio de reclusión y el despacho asignado." },
      { titulo: "Arma la carpeta de arraigo", texto: "Vivienda, trabajo, familia, estudios y salud, con documentos originales o copias legibles para entregar al juez." },
      { titulo: "Audita la legalidad de la captura", texto: "Flagrancia, orden vigente, lectura de derechos y trato. Es la primera oportunidad de terminar la privación de libertad." },
      { titulo: "Ataca los fines de la medida", texto: "Uno por uno: peligro para la comunidad, obstrucción y no comparecencia. Ofrece alternativas menos gravosas y verificables." },
      { titulo: "Vigila los términos", texto: "Lleva el conteo de los plazos de acusación y juicio para solicitar la libertad tan pronto se cumplan." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tiempo pueden tener detenida a una persona sin juez?",
        respuesta:
          "Máximo 36 horas desde la captura. Vencido ese término sin que el capturado sea puesto a disposición del juez de control de garantías, la privación de la libertad se torna ilegal y procede la libertad inmediata, además de la eventual responsabilidad de los funcionarios involucrados.",
      },
      {
        pregunta: "¿Siempre que imputan queda la persona detenida?",
        respuesta:
          "No. La medida de aseguramiento no es automática: la Fiscalía debe pedirla y acreditar inferencia razonable de autoría y un fin constitucional. La detención en establecimiento carcelario es excepcional y el juez debe verificar antes si bastan medidas no privativas de la libertad.",
      },
      {
        pregunta: "¿Cuándo procede la detención domiciliaria?",
        respuesta:
          "En los eventos del artículo 314 del CPP: mayores de 65 años cuando la naturaleza del delito lo permita, grave enfermedad certificada, mujeres en estado avanzado de embarazo o dentro de los seis meses posteriores al parto, y personas cabeza de familia de menores o de quienes están en condición de discapacidad. Cada causal exige prueba documental.",
      },
      {
        pregunta: "¿Qué es la libertad por vencimiento de términos?",
        respuesta:
          "Es la causal del artículo 317 del CPP que obliga a conceder la libertad cuando la Fiscalía no formula acusación, no se inicia el juicio oral o no se lee el fallo dentro de los plazos legales, sin causa atribuible a la defensa. No termina el proceso: la persona sigue vinculada pero en libertad.",
      },
      {
        pregunta: "¿Se puede apelar la medida de aseguramiento?",
        respuesta:
          "Sí. Las decisiones del juez de control de garantías son apelables ante el juez penal del circuito. Además, en cualquier momento puede solicitarse la revocatoria de la medida cuando desaparecen los fundamentos que la sustentaron o cuando cambian las circunstancias del imputado.",
      },
    ],
    guias: ["etapas-proceso-penal", "citacion-interrogatorio"],
  },

  "penal/delitos-querellables": {
    h1: "Delitos querellables en Colombia",
    title: "Delitos querellables en Colombia",
    description: "Cuáles son, la conciliación obligatoria y la caducidad de 6 meses para presentar la querella.",
    respuesta:
      "Los delitos querellables son aquellos que solo pueden investigarse si el ofendido presenta querella: sin esa manifestación de voluntad la Fiscalía no puede actuar. El artículo 74 de la Ley 906 de 2004 los enumera e incluye, entre otros, lesiones personales que no superen determinada incapacidad, inasistencia alimentaria, injuria y calumnia, hurto simple de menor cuantía, estafa de menor cuantía, daño en bien ajeno y violación a la libertad de trabajo. Tienen tres características que los diferencian: caducan a los 6 meses, exigen conciliación como requisito de procedibilidad y admiten desistimiento, lo que permite terminar el proceso por acuerdo entre las partes.",
    parrafos: [
      "La caducidad de seis meses es el aspecto que más casos cierra. El término corre desde la comisión del hecho o, cuando el querellante legítimo no tuvo conocimiento de él por razones justificadas, desde el momento en que lo conoció, sin exceder el límite legal previsto en la norma. Presentada la querella fuera de término, la Fiscalía debe archivar aunque la prueba sea contundente y el autor esté plenamente identificado.",
      "La conciliación es requisito de procedibilidad: antes de que el proceso avance debe intentarse un acuerdo, ya sea ante el fiscal, ante un centro de conciliación o ante un conciliador reconocido. Si las partes concilian y el acuerdo se cumple, se extingue la acción penal. Si el acuerdo se incumple, la actuación se reanuda y el documento de conciliación puede prestar mérito ejecutivo por las sumas acordadas, lo que le da a la víctima una doble vía.",
      "El querellante legítimo es, por regla general, el sujeto pasivo del delito. Si es menor de edad o incapaz, la querella la presenta su representante legal; si el ofendido murió, sus herederos; y en ciertos casos el Defensor de Familia o el Ministerio Público pueden actuar cuando la víctima está en situación de indefensión. Presentar la querella quien no está legitimado equivale a no presentarla.",
      "El desistimiento puede darse en cualquier momento antes de concluir la audiencia preparatoria y, aceptado por el juez o el fiscal según la etapa, extingue la acción penal. Es irretractable: quien desiste no puede volver a querellar por los mismos hechos. Esto obliga a evaluar con cuidado si el acuerdo económico o el compromiso de conducta se están cumpliendo antes de firmar cualquier documento.",
      "Existen excepciones importantes a la exigencia de querella. Cuando el sujeto pasivo es un menor de edad, cuando la víctima está en incapacidad de formularla, o cuando la ley expresamente lo dispone, el delito pasa a ser investigable de oficio aunque en abstracto figure en la lista del artículo 74. Lo mismo ocurre en varios casos de violencia contra la mujer y violencia intrafamiliar, donde la política criminal ha eliminado la exigencia de querella y la posibilidad de conciliación.",
      "La inasistencia alimentaria merece mención propia porque es el delito querellable más frecuente. Requiere demostrar la obligación alimentaria vigente —sentencia, conciliación o acuerdo— y la sustracción injustificada del deber; no basta con el simple atraso si la persona acredita imposibilidad real de pago. En la práctica, la mayoría de estos procesos se resuelve con un acuerdo de pago que incluye la deuda acumulada y garantías de cumplimiento.",
      "En injuria y calumnia el terreno probatorio es distinto: hay que acreditar la imputación deshonrosa o la atribución falsa de una conducta punible, su difusión y el ánimo de dañar. La retractación oportuna, pública y en las mismas condiciones en que se hizo la ofensa extingue la acción penal, lo que convierte la negociación temprana en la salida más común.",
      "Para la víctima, la ruta práctica es la misma en todos los casos: verificar que el delito sea querellable, contar los seis meses, presentar la querella con la prueba organizada, asistir a la conciliación con una propuesta concreta y, si no hay acuerdo, impulsar la actuación. Para el investigado, la ruta es simétrica: la conciliación bien negociada suele ser mejor que un proceso penal con antecedentes.",
    ],
    norma: {
      articulo: "Arts. 74 y 76 Ley 906 de 2004",
      norma: "Ley 906 de 2004 · Ley 599 de 2000",
      texto:
        "Para iniciar la acción penal será necesario querella en los delitos que la ley señala. La querella debe presentarse dentro de los seis (6) meses siguientes a la comisión del delito; cuando el querellante legítimo por razones de fuerza mayor o caso fortuito acreditados no hubiere tenido conocimiento de su ocurrencia, el término se contará a partir de la fecha en que aquellos desaparezcan, sin que en este caso sea superior al término legal previsto.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Caducidad de la querella: 6 meses",
      texto:
        "La querella caduca a los 6 meses contados desde la comisión del hecho o, en los casos excepcionales previstos en la ley, desde que el querellante legítimo tuvo conocimiento, sin exceder el límite legal. Vencido el término, la Fiscalía debe archivar aunque la prueba sea sólida. La conciliación es requisito de procedibilidad y el desistimiento extingue la acción penal.",
    },
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        "La mayoría de estos procesos termina en conciliación, y por eso llegar preparado a esa audiencia importa más que cualquier alegato posterior: cifras concretas, plan de pagos, garantías y compromisos verificables.",
        "El acuerdo conciliatorio debidamente suscrito presta mérito ejecutivo por las sumas acordadas, lo que permite cobrar por proceso ejecutivo si se incumple, además de reactivar la actuación penal.",
      ],
      lista: [
        "Lesiones personales con incapacidad dentro del rango legal",
        "Inasistencia alimentaria",
        "Injuria y calumnia, con retractación como salida",
        "Hurto simple y estafa de menor cuantía",
        "Daño en bien ajeno y violación a la libertad de trabajo",
      ],
    },
    pasos: [
      { titulo: "Verifica si el delito es querellable", texto: "Consulta el artículo 74 del CPP y las excepciones: con víctima menor de edad o en indefensión, se investiga de oficio." },
      { titulo: "Cuenta los 6 meses", texto: "Desde el hecho o desde que lo conociste en los casos legales. Es lo primero que revisa la Fiscalía al recibir la querella." },
      { titulo: "Presenta la querella con prueba", texto: "Documentos, dictamen de Medicina Legal, mensajes, testigos y cuantificación del perjuicio." },
      { titulo: "Asiste a la conciliación", texto: "Es requisito de procedibilidad. Lleva una propuesta concreta: monto, plazos y garantías de cumplimiento." },
      { titulo: "Ejecuta o reactiva", texto: "Si el acuerdo se incumple, cóbralo por proceso ejecutivo y solicita la reanudación de la actuación penal." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tiempo tengo para presentar una querella?",
        respuesta:
          "Seis meses contados desde la comisión del hecho. Solo en los casos excepcionales previstos en la ley, cuando por fuerza mayor o caso fortuito acreditados el querellante no conoció el hecho, el término corre desde que lo conoció, sin exceder el límite legal. Vencido, el proceso se archiva.",
      },
      {
        pregunta: "¿Es obligatorio conciliar?",
        respuesta:
          "Sí, en los delitos querellables la conciliación es requisito de procedibilidad. Debe intentarse antes de que la actuación avance, ante el fiscal, un centro de conciliación o un conciliador reconocido. Si hay acuerdo y se cumple, se extingue la acción penal.",
      },
      {
        pregunta: "¿Puedo retirar la querella después de presentarla?",
        respuesta:
          "Sí, mediante desistimiento antes de concluir la audiencia preparatoria. Aceptado, extingue la acción penal y es irretractable: no se puede volver a querellar por los mismos hechos, por lo que conviene verificar antes que el acuerdo se esté cumpliendo.",
      },
      {
        pregunta: "¿La inasistencia alimentaria es querellable?",
        respuesta:
          "Está en la lista de delitos querellables, pero con excepciones relevantes: cuando la víctima es menor de edad o está en incapacidad de formular la querella, procede la investigación de oficio. Requiere probar la obligación alimentaria vigente y la sustracción injustificada del deber.",
      },
      {
        pregunta: "¿Qué pasa si concilian y luego no cumplen?",
        respuesta:
          "La actuación penal se reanuda y, además, el acta de conciliación presta mérito ejecutivo por las sumas acordadas, de modo que puede iniciarse un proceso ejecutivo con medidas cautelares sin necesidad de un proceso declarativo previo.",
      },
    ],
    guias: ["poner-denuncia-penal", "etapas-proceso-penal"],
  },
};

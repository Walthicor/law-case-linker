import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo FAMILIA.
 * Todos los plazos: // VERIFICAR CON ABOGADO
 */
export const SUBAREAS_FAMILIA: Record<string, ContenidoSubarea> = {
  "familia/divorcio": {
    h1: "Divorcio express en Colombia: cómo funciona",
    title: "Divorcio express en Colombia",
    description: "Divorcio de mutuo acuerdo ante notario: requisitos, documentos, tiempos y costos reales.",
    respuesta:
      "El llamado divorcio express en Colombia es el divorcio de mutuo acuerdo ante notario: si ambos cónyuges están de acuerdo, no hay proceso ni audiencias y todo se resuelve en una escritura pública que suele firmarse en dos a cuatro semanas. Se requiere abogado que presente la petición, un acuerdo escrito sobre alimentos, custodia y visitas si hay hijos menores, y el concepto del defensor de familia en ese mismo caso. Cuando no hay acuerdo, el divorcio se vuelve contencioso y va ante juez de familia por alguna de las causales del artículo 154 del Código Civil.",
    parrafos: [
      "El divorcio notarial existe en Colombia desde la Ley 962 de 2005 y su decreto reglamentario. No es un producto distinto ni un trámite de segunda: produce exactamente los mismos efectos que una sentencia judicial —disuelve el vínculo, habilita a volver a casarse y abre la puerta a liquidar la sociedad conyugal—, solo que sin litigio. Lo único que exige es lo más difícil de conseguir en la práctica: que los dos estén de acuerdo en todo, no solo en separarse.",
      "En matrimonios católicos hay una precisión importante. Ante notario o ante juez lo que se disuelven son los efectos civiles del matrimonio religioso; el vínculo canónico solo lo anula un tribunal eclesiástico en un trámite independiente que no incide en el estado civil ante el Estado colombiano. Para todo efecto legal —bienes, pensión, herencia, nuevo matrimonio civil— basta el divorcio civil.",
      "Cuando hay hijos menores de edad el acuerdo debe ser completo y verificable: monto de la cuota alimentaria y fecha de pago, quién asume salud, educación, uniformes y gastos extraordinarios, con quién vivirán los niños, cómo será el régimen de visitas del otro padre y cómo se repartirán vacaciones y fechas especiales. Ese acuerdo se remite al defensor de familia, que emite concepto y puede pedir ajustes si considera que algo vulnera el interés superior del menor. Sin ese concepto el notario no autoriza la escritura.",
      "El divorcio contencioso se usa cuando uno de los dos no quiere, no aparece o hay bienes en disputa. Se demanda ante juez de familia invocando una causal del artículo 154: incumplimiento grave de los deberes de cónyuge o padre, ultrajes y maltrato, embriaguez o consumo habitual que ponga en riesgo a la familia, enfermedad grave e incurable que impida la vida en común, conducta que corrompa a los hijos, o la causal objetiva que más se utiliza hoy, la separación de cuerpos de hecho por más de dos años. Esta última no obliga a probar culpa de nadie y es la vía habitual cuando el otro cónyuge simplemente no colabora.",
      "El divorcio y la liquidación de la sociedad conyugal son dos cosas distintas y conviene resolverlas juntas. El divorcio disuelve el vínculo; la liquidación reparte lo que se adquirió durante el matrimonio: inmuebles, vehículos, ahorros, cesantías causadas en ese periodo, participaciones en sociedades y también las deudas. Divorciarse sin liquidar deja los bienes en una comunidad indivisa que años después se convierte en un problema costoso, sobre todo si uno de los dos fallece o intenta vender.",
      "Un punto que casi nadie contempla al firmar: el divorcio no borra automáticamente al excónyuge de los seguros, del beneficiario de la pensión voluntaria, del registro de la EPS o de las cuentas conjuntas. Esos cambios se hacen entidad por entidad después de la escritura, con copia del registro civil de matrimonio con la nota marginal de divorcio.",
    ],
    norma: {
      articulo: "Art. 154 C.C.",
      norma: "Código Civil",
      texto:
        "Son causales de divorcio, entre otras, el incumplimiento grave e injustificado de los deberes de cónyuge o de padre, los ultrajes y maltratamientos, y la separación de cuerpos judicial o de hecho que haya perdurado por más de dos años. También lo es el mutuo acuerdo de los cónyuges manifestado ante juez o notario.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Separación de hecho: 2 años",
      texto:
        "La causal objetiva de divorcio exige separación de cuerpos de hecho por más de 2 años. Las causales que suponen culpa del otro cónyuge deben alegarse dentro del año siguiente a que el demandante conoció los hechos. El divorcio de mutuo acuerdo no tiene plazo.",
    },
    reclamar: {
      titulo: "Qué se define en el divorcio",
      parrafos: [
        "El divorcio no es solo la disolución del vínculo. En el mismo trámite —notarial o judicial— se cierran los asuntos que después se vuelven litigio: los alimentos de los hijos y, en algunos casos, los del cónyuge sin culpa; la custodia y el régimen de visitas; y la suerte de los bienes y deudas de la sociedad conyugal.",
        "Cuando el divorcio es contencioso y se declara la culpa de uno de los cónyuges, el inocente puede pedir alimentos a su favor si carece de medios para subsistir, y el culpable pierde el derecho a reclamarlos. Esa consecuencia patrimonial explica por qué muchos divorcios contenciosos se pelean por la causal y no por la separación en sí.",
      ],
      lista: [
        "Disolución del vínculo y cambio de estado civil en el registro",
        "Cuota alimentaria, custodia y régimen de visitas de los hijos menores",
        "Disolución y liquidación de la sociedad conyugal: bienes y deudas",
        "Alimentos entre cónyuges cuando se declara culpa en el proceso",
      ],
    },
    pasos: [
      { titulo: "Define si hay acuerdo real", texto: "Acuerdo total en bienes, hijos y alimentos habilita la vía notarial. Un solo punto en disputa lleva el caso al juez de familia." },
      { titulo: "Reúne los documentos", texto: "Registro civil de matrimonio, registros civiles de nacimiento de los hijos, cédulas y relación de bienes y deudas con sus documentos de propiedad." },
      { titulo: "Redacta el acuerdo con abogado", texto: "Debe incluir cuota alimentaria, custodia, visitas, vacaciones y liquidación de la sociedad conyugal. Ambiguo, genera un pleito posterior." },
      { titulo: "Concepto del defensor de familia", texto: "Obligatorio si hay hijos menores. Puede pedir ajustes al acuerdo antes de que el notario autorice la escritura." },
      { titulo: "Firma e inscripción", texto: "Firmada la escritura, se inscribe la nota marginal en el registro civil de matrimonio y de nacimiento. Solo ahí queda el cambio de estado civil." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tarda un divorcio express en Colombia?",
        respuesta:
          "El divorcio de mutuo acuerdo ante notario suele tomar entre dos y cuatro semanas contadas desde que se radica la petición, y se extiende cuando hay hijos menores porque debe esperarse el concepto del defensor de familia. Un divorcio contencioso ante juez de familia toma habitualmente entre uno y dos años según el despacho.",
      },
      {
        pregunta: "¿Necesito abogado para divorciarme ante notario?",
        respuesta:
          "Sí. Aunque el trámite sea de mutuo acuerdo, la petición de divorcio ante notario debe presentarse por medio de abogado. Puede ser un solo abogado que represente a ambos cónyuges cuando el acuerdo es total y no hay conflicto de intereses.",
      },
      {
        pregunta: "¿Puedo divorciarme si mi pareja no quiere o no aparece?",
        respuesta:
          "Sí, por vía judicial. La causal más usada es la separación de cuerpos de hecho por más de dos años, que no exige probar culpa. Si el otro cónyuge no se deja notificar, el proceso continúa con emplazamiento y curador ad litem, y el juez puede decretar el divorcio igualmente.",
      },
      {
        pregunta: "¿El divorcio reparte automáticamente los bienes?",
        respuesta:
          "No. El divorcio disuelve la sociedad conyugal, pero repartir los bienes exige liquidarla, en la misma escritura o en un trámite posterior. Mientras no se liquide, los bienes quedan en comunidad y ninguno de los dos puede disponer libremente de ellos.",
      },
      {
        pregunta: "¿Qué pasa con las deudas del matrimonio?",
        respuesta:
          "Las deudas contraídas durante el matrimonio en beneficio de la sociedad conyugal entran en la liquidación y se descuentan del activo antes de repartir. Frente al banco o al acreedor, en cambio, sigue obligado quien firmó: el acuerdo interno de divorcio no le es oponible al tercero.",
      },
    ],
    guias: ["divorcio-mutuo-acuerdo", "sucesion-notarial-judicial"],
  },

  "familia/custodia": {
    h1: "Custodia de hijos en Colombia: cómo se decide",
    title: "Custodia de hijos en Colombia",
    description: "Cómo se decide la custodia, qué pesa ante el juez y cómo se fija el régimen de visitas.",
    respuesta:
      "La custodia de los hijos en Colombia se decide por el interés superior del niño, no por el género del padre o la madre ni por quién gana más. Puede acordarse por conciliación ante comisario de familia, defensor de familia o centro de conciliación —ese acuerdo presta mérito ejecutivo— o fijarla el juez de familia en un proceso verbal sumario cuando no hay consenso. La custodia se otorga a uno de los padres con un régimen de visitas amplio para el otro, o de forma compartida cuando ambos viven cerca y existe comunicación funcional; en todos los casos la patria potestad y las decisiones importantes siguen siendo de los dos.",
    parrafos: [
      "La confusión más común es creer que custodia, patria potestad y visitas son lo mismo. La patria potestad es el conjunto de derechos sobre el hijo y sus bienes, y salvo privación o suspensión judicial la conservan ambos padres aunque estén separados: por eso se necesita autorización de los dos para salir del país, cambiar de colegio o autorizar un procedimiento médico no urgente. La custodia y el cuidado personal definen con quién vive el niño y quién toma las decisiones cotidianas. El régimen de visitas regula el tiempo del padre que no convive con él.",
      "Para decidir, el juez de familia mira hechos concretos, no discursos: quién ha ejercido de hecho el cuidado, la estabilidad del entorno y del colegio, la disponibilidad real de tiempo de cada padre, la red de apoyo, la relación afectiva del niño con cada uno y la disposición de cada progenitor a facilitar —no a bloquear— la relación con el otro. Ese último punto pesa mucho más de lo que la gente cree: obstaculizar sistemáticamente las visitas es un argumento en contra de quien lo hace.",
      "La opinión del niño se escucha. El Código de la Infancia y la Adolescencia consagra el derecho a ser oído y a que su opinión sea tenida en cuenta según su edad y madurez; no es un voto vinculante, pero en adolescentes tiene un peso considerable. La entrevista la hace el juez con apoyo del equipo psicosocial del Instituto Colombiano de Bienestar Familiar, y en la práctica el informe psicosocial es la prueba que más determina el fallo.",
      "La custodia compartida es viable y cada vez más frecuente, pero exige condiciones: cercanía entre las dos viviendas, un mismo colegio, horarios compatibles y capacidad de los padres para comunicarse sin conflicto delante del niño. Cuando el conflicto es alto, los jueces prefieren una custodia en cabeza de uno con visitas amplias y detalladas, precisamente para reducir los puntos de fricción semanales.",
      "Ninguna decisión de custodia es definitiva. Si cambian las circunstancias —traslado de ciudad, cambio de horario laboral, deterioro del entorno, incumplimiento reiterado del régimen o hechos de violencia— cualquiera de los padres puede pedir la modificación. Lo que no puede hacer es cambiar la situación de hecho por su cuenta: llevarse al niño a otra ciudad sin autorización es una vía rápida a perder la custodia y, si es al exterior, puede activar el trámite internacional de restitución del menor.",
      "El régimen de visitas conviene redactarlo con nivel de calendario, no de principios. Días y horas exactas de recogida y entrega, quién transporta, fines de semana alternos, distribución de vacaciones de mitad y fin de año, cumpleaños del niño y de cada padre, día de la madre y del padre, y regla clara para viajes. Un régimen escrito con precisión es lo único ejecutable ante el juez cuando se incumple.",
    ],
    norma: {
      articulo: "Art. 23 Ley 1098 de 2006",
      norma: "Código de la Infancia y la Adolescencia",
      texto:
        "Los niños, las niñas y los adolescentes tienen derecho a que sus padres en forma permanente y solidaria asuman directa y oportunamente su custodia para su desarrollo integral. La obligación de cuidado personal se extiende además a quienes convivan con ellos en los ámbitos familiar, social o institucional.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Sin plazo de prescripción",
      texto:
        "La custodia puede pedirse o modificarse en cualquier momento mientras el hijo sea menor de edad: no prescribe. Lo que sí corre es el tiempo de hecho, porque el juez valora quién ha ejercido el cuidado. En sustracción internacional del menor el trámite de restitución debe iniciarse dentro del año siguiente al traslado para evitar que se consolide la nueva residencia.",
    },
    reclamar: {
      titulo: "Qué se puede pedir",
      parrafos: [
        "En un mismo trámite pueden definirse custodia, visitas y alimentos, y de hecho conviene hacerlo así: separarlos multiplica los procesos y las audiencias. Si ya existe una decisión y la otra parte la incumple, la vía no es volver a demandar la custodia sino pedir el cumplimiento con las medidas coercitivas que prevé la ley.",
        "Cuando hay riesgo para el niño —violencia, consumo, abandono, exposición a terceros peligrosos— puede pedirse una medida provisional urgente al comisario de familia o al juez, que se decide antes de la sentencia y con base en el informe psicosocial.",
      ],
      lista: [
        "Custodia y cuidado personal, exclusiva o compartida",
        "Régimen de visitas detallado con vacaciones y fechas especiales",
        "Cuota alimentaria y reparto de gastos de salud y educación",
        "Medidas provisionales urgentes cuando hay riesgo para el menor",
        "Modificación de la custodia por cambio de circunstancias",
      ],
    },
    pasos: [
      { titulo: "Documenta el cuidado real", texto: "Colegio, citas médicas, actividades, gastos y rutina diaria. Quién lleva y recoge al niño se prueba con constancias, no con afirmaciones." },
      { titulo: "Intenta conciliar", texto: "Ante comisario de familia, defensor de familia o centro de conciliación. El acuerdo aprobado presta mérito ejecutivo y evita meses de proceso." },
      { titulo: "Pide medidas si hay riesgo", texto: "Ante riesgo actual para el menor se solicitan medidas provisionales de protección, que se resuelven antes del fondo del asunto." },
      { titulo: "Demanda ante juez de familia", texto: "Si no hay acuerdo, procede el proceso verbal sumario con informe del equipo psicosocial y entrevista al niño según su edad." },
      { titulo: "Cumple y registra", texto: "Cumple el régimen al pie de la letra y deja constancia escrita de cada entrega e incumplimiento: es la prueba de una eventual modificación." },
    ],
    faqs: [
      {
        pregunta: "¿La custodia siempre queda con la madre?",
        respuesta:
          "No. La ley colombiana no da preferencia por género. El criterio es el interés superior del niño y en la práctica pesan el cuidado ejercido de hecho, la estabilidad del entorno, la disponibilidad de tiempo y la disposición de cada padre a facilitar la relación con el otro.",
      },
      {
        pregunta: "¿Qué diferencia hay entre custodia y patria potestad?",
        respuesta:
          "La custodia define con quién vive el niño y quién toma las decisiones del día a día. La patria potestad la conservan ambos padres aun separados, y por eso siguen necesitándose las dos firmas para salir del país, cambiar de colegio o autorizar procedimientos médicos relevantes.",
      },
      {
        pregunta: "¿A qué edad decide el niño con quién quiere vivir?",
        respuesta:
          "No hay una edad en la que el niño decida por sí mismo. Tiene derecho a ser escuchado y su opinión se valora según su edad y madurez; en adolescentes suele tener un peso alto, pero el juez puede apartarse de ella si el interés superior del menor lo exige.",
      },
      {
        pregunta: "¿Qué hago si el otro padre no me deja ver a mi hijo?",
        respuesta:
          "Si hay acuerdo conciliado o sentencia, se pide su cumplimiento ante el juez de familia, que puede imponer multas y adoptar medidas para hacer efectivas las visitas. Si no hay régimen fijado, lo primero es solicitarlo, por conciliación o por demanda, para tener un título exigible.",
      },
      {
        pregunta: "¿Puedo llevarme a mi hijo a otra ciudad o al exterior?",
        respuesta:
          "Un traslado que afecte el régimen de visitas requiere acuerdo del otro padre o autorización judicial. Salir del país exige permiso del otro progenitor con firma autenticada. Trasladar al niño al exterior sin autorización puede activar el trámite internacional de restitución y afectar gravemente la custodia.",
      },
    ],
    guias: ["calcular-cuota-alimentaria", "divorcio-mutuo-acuerdo"],
  },

  "familia/alimentos": {
    h1: "Demanda de alimentos en Colombia",
    title: "Demanda de alimentos en Colombia",
    description: "Cómo demandar la cuota alimentaria, cómo se calcula y qué pasa si el obligado no paga.",
    respuesta:
      "La demanda de alimentos se presenta ante el juez de familia del domicilio del menor, por proceso verbal sumario, cuando no fue posible acordar la cuota por conciliación ante comisario o defensor de familia. El juez fija el monto según la capacidad económica del obligado y las necesidades de quien recibe los alimentos, y puede decretar desde la admisión medidas como el embargo del salario, que en materia de alimentos puede llegar hasta el 50% de la remuneración. Si el obligado deja de pagar, el acuerdo o la sentencia se cobran por proceso ejecutivo de alimentos y la conducta puede constituir el delito de inasistencia alimentaria.",
    parrafos: [
      "Los alimentos no son solo la mesada mensual. Comprenden todo lo necesario para la subsistencia y el desarrollo del beneficiario: alimentación, vestuario, vivienda, salud, educación, recreación y transporte. Por eso el acuerdo o la sentencia suelen separar dos cosas: una cuota fija mensual y un reparto porcentual de gastos extraordinarios como matrículas, uniformes, útiles, tratamientos médicos no cubiertos y ortodoncia. Cuando solo se fija la cuota fija, esos gastos terminan en un pleito nuevo cada año.",
      "El cálculo no responde a una tabla oficial. El juez pondera dos variables: lo que el obligado puede pagar y lo que el beneficiario necesita, y reparte la carga entre ambos padres porque la obligación es de los dos. En la práctica se toman los ingresos acreditados —nómina, declaración de renta, movimientos bancarios, facturación—, se restan las cargas legítimas y se contrasta con el costo real del niño documentado con recibos. Cuando el obligado es independiente y oculta ingresos, se acude a la prueba indiciaria: nivel de vida, vehículos, viajes, inmuebles, publicaciones en redes y consumos con tarjeta.",
      "La cuota debe pactarse con una regla de actualización. Lo habitual es fijarla en salarios mínimos o establecer un incremento anual con el IPC; si se deja un valor fijo en pesos sin cláusula de ajuste, en pocos años pierde poder adquisitivo y obliga a un nuevo proceso de aumento. Ese proceso existe —revisión por variación de circunstancias— y procede tanto para aumentar como para disminuir cuando cambian los ingresos del obligado o las necesidades del menor.",
      "La obligación alimentaria no se limita a los hijos menores. Puede reclamarse por hijos mayores de edad que estudian y dependen económicamente, por los padres frente a sus hijos, entre cónyuges en los casos que prevé la ley y respecto de personas en situación de discapacidad que no pueden proveerse su sustento. En cada caso cambian los requisitos de prueba, pero la lógica de capacidad y necesidad es la misma.",
      "Existe una regla que sorprende a quien reclama tarde: las cuotas ya causadas y no cobradas prescriben, mientras que el derecho a pedir alimentos hacia el futuro no. Es decir, se puede demandar alimentos en cualquier momento mientras exista la necesidad, pero solo se cobran hacia atrás las mesadas dentro del plazo de prescripción. Por eso conviene radicar la reclamación apenas se produce el incumplimiento y no dejar acumular años.",
      "El incumplimiento tiene además una consecuencia penal. La inasistencia alimentaria está tipificada en el Código Penal y es un delito querellable y conciliable: la denuncia se presenta ante la Fiscalía y en la mayoría de los casos termina en un acuerdo de pago con plan de cumplimiento. No sustituye al cobro ejecutivo, que es el que realmente recupera el dinero mediante embargos, pero sí genera una presión que en la práctica desbloquea muchos casos.",
    ],
    norma: {
      articulo: "Art. 129 Ley 1098 de 2006",
      norma: "Código de la Infancia y la Adolescencia",
      texto:
        "En el auto que corra traslado de la demanda o del informe del defensor de familia, el juez fijará cuota provisional de alimentos, siempre que haya prueba del vínculo que origina la obligación. El juez podrá ordenar el embargo, secuestro, avalúo y remate de los bienes del alimentante, y decretar el descuento directo de su salario.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Cuotas causadas: 2 años",
      texto:
        "Las cuotas alimentarias ya causadas y no cobradas prescriben a los 2 años. El derecho a pedir alimentos hacia el futuro no prescribe mientras subsistan la necesidad y la obligación. La cuota provisional puede fijarse desde la admisión de la demanda.",
    },
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La reclamación va más allá de la mensualidad. Incluye la cuota provisional desde el inicio del proceso, los gastos extraordinarios de salud y educación, la afiliación del menor al sistema de salud y, cuando el obligado incumple, los intereses y las costas del proceso ejecutivo.",
        "También pueden pedirse medidas de garantía: embargo del salario o de la pensión hasta el 50%, embargo de cuentas y de bienes, retención de sumas adeudadas por terceros al obligado, e inscripción en el registro de deudores alimentarios morosos, que restringe trámites como la renovación de la licencia de conducción o la contratación con el Estado.",
      ],
      lista: [
        "Cuota mensual fija con regla de actualización anual",
        "Porcentaje de gastos extraordinarios: matrícula, útiles, salud, ortodoncia",
        "Cuota provisional desde la admisión de la demanda",
        "Cuotas atrasadas dentro del plazo de prescripción, con intereses",
        "Embargo de salario, cuentas y bienes del obligado",
      ],
    },
    pasos: [
      { titulo: "Documenta necesidad e ingresos", texto: "Recibos de colegio, salud, arriendo y transporte del menor; y toda prueba de los ingresos del obligado: nómina, movimientos, facturación o nivel de vida." },
      { titulo: "Solicita conciliación", texto: "Ante comisario de familia, defensor de familia o centro de conciliación. El acta aprobada presta mérito ejecutivo y se cobra directamente si se incumple." },
      { titulo: "Demanda ante juez de familia", texto: "Si no hay acuerdo o el obligado no asiste, procede el proceso verbal sumario con solicitud de cuota provisional desde el inicio." },
      { titulo: "Pide medidas cautelares", texto: "Embargo del salario hasta el 50%, de cuentas bancarias y de bienes. En alimentos proceden desde etapas tempranas del proceso." },
      { titulo: "Ejecuta o denuncia si no paga", texto: "Con el acta o la sentencia se inicia el proceso ejecutivo de alimentos. En paralelo puede presentarse denuncia por inasistencia alimentaria." },
    ],
    faqs: [
      {
        pregunta: "¿Cómo se calcula la cuota alimentaria en Colombia?",
        respuesta:
          "No hay tabla oficial. El juez pondera la capacidad económica del obligado y las necesidades del beneficiario, y distribuye la carga entre ambos padres. Se acreditan los ingresos con nómina, declaración de renta o movimientos bancarios, y el costo del menor con recibos de colegio, salud, vivienda y transporte.",
      },
      {
        pregunta: "¿Hasta qué edad se deben alimentos a un hijo?",
        respuesta:
          "Hasta los 18 años por regla general, y se extiende mientras el hijo estudie y dependa económicamente, situación que la práctica judicial suele reconocer hasta cerca de los 25 años. En caso de discapacidad que impida proveerse el sustento, la obligación puede ser indefinida.",
      },
      {
        pregunta: "¿Qué pasa si el obligado no paga la cuota?",
        respuesta:
          "El acta de conciliación o la sentencia presta mérito ejecutivo: se inicia proceso ejecutivo de alimentos con embargo de salario hasta el 50%, de cuentas y de bienes. Adicionalmente puede presentarse denuncia penal por inasistencia alimentaria, delito querellable y conciliable.",
      },
      {
        pregunta: "¿Se puede aumentar o disminuir la cuota fijada?",
        respuesta:
          "Sí. Ante un cambio real de circunstancias —pérdida del empleo, nuevos hijos, aumento de ingresos, mayores gastos de salud o educación— cualquiera de las partes puede pedir la revisión de la cuota ante el juez de familia. El cambio debe probarse, no basta afirmarlo.",
      },
      {
        pregunta: "¿Puedo negarme a las visitas si no me paga la cuota?",
        respuesta:
          "No. Alimentos y visitas son obligaciones independientes: impedir el contacto por falta de pago no es una defensa válida y puede volverse en contra en un proceso de custodia. La vía correcta es el cobro ejecutivo y, si procede, la denuncia por inasistencia alimentaria.",
      },
    ],
    guias: ["calcular-cuota-alimentaria", "divorcio-mutuo-acuerdo"],
  },

  "familia/sucesiones": {
    h1: "Proceso de sucesión en Colombia",
    title: "Proceso de sucesión en Colombia",
    description: "Sucesión notarial o judicial: requisitos, herederos, tiempos y cómo quedan los bienes.",
    respuesta:
      "El proceso de sucesión es el trámite con el que los bienes, derechos y deudas de una persona fallecida se adjudican legalmente a sus herederos y al cónyuge o compañero permanente. Si todos los herederos son capaces, están de acuerdo y actúan por medio de abogado, la sucesión se hace ante notario y suele tomar entre dos y cuatro meses. Si hay menores de edad, herederos ausentes, desacuerdo, testamento cuestionado o bienes en litigio, el trámite corresponde al juez de familia. Sin la sucesión liquidada e inscrita, los herederos no pueden vender, hipotecar ni disponer de los inmuebles aunque lleven años viviendo en ellos.",
    parrafos: [
      "Lo primero que define la sucesión es el orden hereditario del Código Civil. En el primer orden heredan los hijos —o sus descendientes por representación— junto con el cónyuge o compañero permanente sobreviviente. A falta de descendientes, heredan los ascendientes con el cónyuge. Luego siguen los hermanos, después el Instituto Colombiano de Bienestar Familiar. La unión marital de hecho da los mismos derechos que el matrimonio, pero exige que la sociedad patrimonial esté declarada o se declare en el trámite, y ese suele ser el punto más peleado en sucesiones de parejas no casadas.",
      "Antes de repartir hay una operación que se hace mal con frecuencia: separar la mitad que le corresponde al cónyuge por la sociedad conyugal, de lo que se hereda. El cónyuge sobreviviente no recibe primero herencia; recibe los gananciales que ya eran suyos por el régimen patrimonial, y solo después concurre como heredero sobre la masa restante. Confundir esos dos títulos distorsiona todo el reparto y es causa habitual de nulidades y reclamaciones posteriores.",
      "El testamento no permite disponer libremente de todo. En Colombia existen asignaciones forzosas: las legítimas de los hijos, la porción conyugal cuando el cónyuge carece de lo necesario para su congrua subsistencia y los alimentos que se deban por ley. El testador solo dispone con libertad de la cuarta de libre disposición y, en ciertos casos, de la cuarta de mejoras entre descendientes. Un testamento que desconoce esas asignaciones no es inútil, pero se reduce mediante la acción de reforma del testamento.",
      "Las deudas del causante se pagan antes de adjudicar. Por eso el inventario debe incluir el pasivo: créditos bancarios, impuestos, administración, servicios y obligaciones pendientes. Aceptar la herencia con beneficio de inventario es una precaución esencial cuando existe la sospecha de deudas mayores al activo: limita la responsabilidad del heredero hasta el valor de lo que recibe y evita que responda con su propio patrimonio.",
      "En la sucesión notarial el procedimiento es ordenado y previsible: solicitud con abogado, registro civil de defunción, pruebas del parentesco, relación de bienes con sus certificados de tradición y avalúos, publicación del edicto emplazatorio, inventario y avalúos aprobados, comunicación a la DIAN y finalmente la escritura de partición, que se inscribe en la oficina de registro de instrumentos públicos y en el tránsito para vehículos. Solo con esa inscripción cambia el titular del bien.",
      "Cuando alguien fue excluido o no se le reconoció su condición de heredero existe la acción de petición de herencia, que le permite reclamar lo que le corresponde frente a quien ocupó su lugar. Es un proceso independiente y con plazo propio, y su viabilidad depende de la prueba del parentesco y del tiempo transcurrido, razón por la cual conviene actuar apenas se conoce la apertura de la sucesión.",
    ],
    norma: {
      articulo: "Art. 1045 C.C.",
      norma: "Código Civil",
      texto:
        "Los hijos legítimos, adoptivos y extramatrimoniales excluyen a todos los otros herederos y recibirán entre ellos iguales cuotas, sin perjuicio de la porción conyugal.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Petición de herencia: 10 años",
      texto:
        "La acción de petición de herencia prescribe en 10 años. La sucesión en sí no tiene plazo para iniciarse, pero mientras no se liquide los bienes no pueden venderse ni hipotecarse y se acumulan impuestos, administración e intereses a cargo de la masa.",
    },
    reclamar: {
      titulo: "Qué se define en la sucesión",
      parrafos: [
        "El trámite fija quiénes son los herederos, cuánto le corresponde a cada uno, qué pasa con los gananciales del cónyuge o compañero permanente y cómo se pagan las deudas del causante antes de adjudicar. El resultado es un título inscribible que permite vender, hipotecar o transferir los bienes.",
        "Cuando hay conflicto, en el mismo escenario se discuten la exclusión de un heredero, la reforma del testamento por desconocer asignaciones forzosas, la colación de donaciones hechas en vida y la declaración de la unión marital de hecho del compañero sobreviviente.",
      ],
      lista: [
        "Reconocimiento de la calidad de heredero y de la cuota que corresponde",
        "Gananciales del cónyuge o compañero permanente sobreviviente",
        "Inventario y avalúo de bienes y deudas del causante",
        "Adjudicación e inscripción en el registro para poder vender",
        "Petición de herencia cuando se excluyó a un heredero",
      ],
    },
    pasos: [
      { titulo: "Reúne los documentos base", texto: "Registro civil de defunción, registros civiles que prueben el parentesco, registro de matrimonio o prueba de la unión marital, y cédula del causante." },
      { titulo: "Inventaría bienes y deudas", texto: "Certificados de tradición, tarjetas de propiedad, extractos, participaciones societarias y todas las obligaciones pendientes con su soporte." },
      { titulo: "Decide notaría o juzgado", texto: "Todos capaces y de acuerdo: notaría. Menores, ausentes, desacuerdo o testamento cuestionado: juez de familia." },
      { titulo: "Acepta con beneficio de inventario", texto: "Si hay dudas sobre las deudas, esta aceptación limita tu responsabilidad al valor de lo que recibes." },
      { titulo: "Registra la partición", texto: "La escritura o sentencia se inscribe en instrumentos públicos y en tránsito. Sin registro, el bien sigue figurando a nombre del fallecido." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tarda una sucesión en Colombia?",
        respuesta:
          "La sucesión notarial, con herederos capaces y de acuerdo, suele tomar entre dos y cuatro meses, tiempo condicionado por el edicto emplazatorio y por la obtención de certificados y avalúos. La sucesión judicial ante juez de familia habitualmente toma entre uno y tres años según el despacho y el nivel de conflicto.",
      },
      {
        pregunta: "¿Se puede vender el inmueble antes de la sucesión?",
        respuesta:
          "No de forma directa: mientras el bien figure a nombre del causante, la venta no puede registrarse. Lo que sí es posible es adelantar la sucesión y vender después, o ceder derechos herenciales por escritura pública, figura que un comprador rara vez acepta sin descuento.",
      },
      {
        pregunta: "¿La compañera o compañero permanente hereda?",
        respuesta:
          "Sí, tiene los mismos derechos que el cónyuge, pero debe acreditarse la unión marital de hecho y, para los gananciales, la sociedad patrimonial. Puede declararse por escritura, por conciliación o por sentencia, y cuando no está declarada suele ser el punto central de discusión en la sucesión.",
      },
      {
        pregunta: "¿Los herederos responden por las deudas del fallecido?",
        respuesta:
          "Las deudas se pagan con los bienes de la sucesión antes de adjudicar. Si se acepta la herencia con beneficio de inventario, el heredero responde solo hasta el valor de lo que recibe; sin ese beneficio puede terminar respondiendo con su propio patrimonio.",
      },
      {
        pregunta: "¿Qué pasa si un heredero no quiere firmar?",
        respuesta:
          "La vía notarial deja de ser posible y el trámite pasa al juez de familia, que adelanta la sucesión aunque haya oposición, emplaza a quien no comparece y designa curador si es necesario. Ningún heredero puede bloquear indefinidamente la liquidación.",
      },
    ],
    guias: ["sucesion-notarial-judicial", "divorcio-mutuo-acuerdo"],
  },

  "familia/violencia-intrafamiliar": {
    h1: "Violencia intrafamiliar: cómo denunciar en Colombia",
    title: "Violencia intrafamiliar: cómo denunciar",
    description: "Medida de protección ante comisaría de familia y denuncia penal: qué pedir y en cuánto tiempo.",
    respuesta:
      "Ante un hecho de violencia intrafamiliar hay dos rutas que funcionan en paralelo. La primera es la medida de protección: se solicita ante el comisario de familia del lugar de los hechos —o ante el juez de control de garantías o el juez civil municipal donde no haya comisaría— y puede decretarse de inmediato ordenando el desalojo del agresor de la vivienda, la prohibición de acercamiento y de comunicación, la protección policial y una cuota provisional de alimentos. La segunda es la denuncia penal ante la Fiscalía, la Policía o la URI por el delito de violencia intrafamiliar, que es de investigación oficiosa. Ninguna reemplaza a la otra: la protección se pide para detener el riesgo hoy, la denuncia para que haya consecuencias penales.",
    parrafos: [
      "La violencia intrafamiliar no se limita al golpe. La Ley 1257 de 2008 reconoce la violencia física, psicológica, sexual, económica y patrimonial. Los gritos, las amenazas, el control del dinero, la vigilancia del teléfono, el aislamiento de la familia, la destrucción de bienes y la retención de documentos son formas de violencia que soportan una medida de protección aun cuando no exista una lesión visible. Este punto es decisivo, porque muchas víctimas no acuden a la comisaría por creer que sin golpes no hay caso.",
      "La medida de protección es un trámite rápido y no requiere abogado para solicitarla, aunque tenerlo ayuda a pedir lo correcto. Se presenta verbalmente o por escrito con el relato de los hechos, y el comisario puede decretar medidas provisionales el mismo día si hay riesgo, antes de la audiencia. En la audiencia se practican pruebas y se confirma, amplía o levanta la medida. Las medidas se comunican a la Policía, que queda obligada a hacerlas efectivas.",
      "El incumplimiento de una medida de protección tiene sanción propia: multa y arresto que impone el mismo comisario, con agravación en caso de reincidencia. Por eso es esencial que la medida quede redactada en términos verificables —no acercarse a determinada distancia, no ir al lugar de trabajo o al colegio, no comunicarse por ningún medio, incluidas redes— y que cada incumplimiento se reporte con hora, lugar y prueba.",
      "En la ruta penal, la violencia intrafamiliar está tipificada en el Código Penal y su investigación es oficiosa: no se archiva porque la víctima se retracte o desista, y no admite conciliación como salida ordinaria del caso. El proceso comienza con la denuncia y la valoración de Medicina Legal cuando hay lesiones, y avanza con las entrevistas, los antecedentes y la prueba documental. Cuando la conducta encaja en un tipo penal más grave —lesiones personales, acceso carnal violento, tentativa de feminicidio— la calificación cambia y las medidas contra el agresor son más severas.",
      "La prueba se construye antes de que haga falta. Sirven los registros de atención en urgencias, las incapacidades, las fotografías fechadas de las lesiones o de los daños, las capturas de mensajes y llamadas, las grabaciones propias de las agresiones verbales, los testimonios de vecinos o familiares, los reportes anteriores a la línea de emergencia y los antecedentes de denuncias previas. Un expediente con fechas y soportes cambia por completo el resultado, sobre todo cuando el agresor niega los hechos.",
      "Las medidas de protección se articulan con los asuntos de familia que casi siempre vienen detrás: custodia provisional de los hijos, régimen de visitas supervisado o suspendido, cuota alimentaria provisional y salida de la vivienda familiar sin perder los derechos sobre ella. Salir de la casa por seguridad no implica renunciar a la propiedad ni al derecho sobre los bienes de la sociedad conyugal, y conviene dejar constancia expresa de eso en la solicitud.",
      "Existen apoyos institucionales que no se usan lo suficiente: las líneas de orientación a la mujer y de emergencia, las casas de acogida para víctimas y sus hijos, la atención psicológica y jurídica gratuita del Instituto Colombiano de Bienestar Familiar y de las secretarías de la mujer, y las medidas de estabilización laboral y económica previstas en la Ley 1257. Pedir la medida no obliga a tener resuelto el resto de la vida ese mismo día.",
    ],
    norma: {
      articulo: "Art. 16 Ley 1257 de 2008",
      norma: "Ley 1257 de 2008",
      texto:
        "La autoridad competente podrá ordenar, entre otras medidas de protección, el desalojo del agresor de la casa de habitación que comparte con la víctima, la prohibición de acercarse a ella o de comunicarse por cualquier medio, la protección temporal especial de la policía y el pago de una cuota alimentaria provisional.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Medida de protección: sin demora",
      texto:
        "La medida de protección puede pedirse en cualquier momento mientras el riesgo persista y el comisario puede decretar medidas provisionales el mismo día. La denuncia penal por violencia intrafamiliar es de investigación oficiosa; su acción prescribe en el término del delito, pero denunciar tarde debilita la prueba médica y testimonial.",
    },
    reclamar: {
      titulo: "Qué puedes pedir",
      parrafos: [
        "La solicitud puede pedir más de lo que la mayoría de personas solicita. Además del desalojo del agresor y la prohibición de acercamiento, es posible pedir custodia provisional de los hijos, alimentos provisionales, protección policial permanente, tratamiento reeducativo para el agresor y atención en salud física y mental para la víctima y los hijos.",
        "En sede penal, la víctima puede constituirse en el proceso para reclamar la reparación de los perjuicios causados: gastos médicos, terapia, daños materiales y daño moral, además de las medidas de no repetición.",
      ],
      lista: [
        "Desalojo del agresor de la vivienda compartida",
        "Prohibición de acercamiento y de comunicación por cualquier medio",
        "Protección policial temporal y acompañamiento para retirar pertenencias",
        "Custodia provisional de los hijos y cuota alimentaria provisional",
        "Sanción por incumplimiento de la medida: multa y arresto",
      ],
    },
    pasos: [
      { titulo: "Ponte a salvo primero", texto: "Ante riesgo inmediato, llama a la línea de emergencia y acude a un lugar seguro o a una casa de acogida antes de cualquier trámite." },
      { titulo: "Pide valoración médica", texto: "Urgencias o Medicina Legal. El registro médico con fecha es la prueba más sólida de la agresión física y de su gravedad." },
      { titulo: "Solicita la medida de protección", texto: "Ante el comisario de familia del lugar de los hechos. No necesitas abogado y pueden decretarse medidas provisionales el mismo día." },
      { titulo: "Presenta la denuncia penal", texto: "Ante Fiscalía, Policía o URI. Es una ruta paralela y de investigación oficiosa: no depende de que mantengas la denuncia." },
      { titulo: "Registra cada incumplimiento", texto: "Fecha, hora, lugar y prueba de cada acercamiento o mensaje. El incumplimiento se sanciona con multa y arresto por el mismo comisario." },
    ],
    faqs: [
      {
        pregunta: "¿Dónde denuncio violencia intrafamiliar en Colombia?",
        respuesta:
          "La medida de protección se pide ante la comisaría de familia del lugar de los hechos, y donde no haya comisaría ante el juez civil municipal o promiscuo municipal. La denuncia penal se presenta ante la Fiscalía, la Policía Nacional o la URI. Ambas rutas pueden y suelen adelantarse al mismo tiempo.",
      },
      {
        pregunta: "¿Necesito abogado para pedir una medida de protección?",
        respuesta:
          "No. La solicitud puede hacerse verbalmente o por escrito directamente por la víctima. Contar con abogado ayuda a pedir todas las medidas pertinentes y a articular la protección con custodia, alimentos y vivienda, pero no es un requisito para acceder al trámite.",
      },
      {
        pregunta: "¿La violencia psicológica también cuenta?",
        respuesta:
          "Sí. La Ley 1257 de 2008 reconoce la violencia psicológica, económica y patrimonial además de la física y la sexual. Amenazas, humillaciones, control del dinero, vigilancia y aislamiento sustentan una medida de protección aunque no exista una lesión visible.",
      },
      {
        pregunta: "¿Qué pasa si el agresor incumple la medida?",
        respuesta:
          "El comisario que dictó la medida sanciona el incumplimiento con multa y, según la gravedad o la reincidencia, con arresto. Cada incumplimiento debe reportarse con fecha, hora, lugar y prueba, porque el expediente de incumplimientos también sustenta medidas más fuertes.",
      },
      {
        pregunta: "¿Puedo retirar la denuncia si me reconcilio?",
        respuesta:
          "La violencia intrafamiliar es de investigación oficiosa: la Fiscalía puede continuar aunque la víctima se retracte. La medida de protección sí puede levantarse a solicitud, pero conviene evaluarlo con un abogado, porque el levantamiento deja sin efecto la prohibición de acercamiento y la protección policial.",
      },
    ],
    guias: ["divorcio-mutuo-acuerdo", "calcular-cuota-alimentaria"],
  },
};

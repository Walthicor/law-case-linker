/**
 * Contenido real (largo) de los pilares desarrollados.
 * Se fusiona con las semillas de `pilares.ts` al construir PILARES.
 * Cada bloque de plazo de estos pilares está marcado // VERIFICAR CON ABOGADO
 * en `pilares.ts`: son borradores que debe firmar un abogado antes de publicar.
 */

export type Seccion = { titulo: string; parrafos: string[]; lista?: string[] };

export type ContenidoPilar = {
  /** Texto real de cada subárea, indexado por slug de subárea. */
  subareas?: Record<string, string>;
  secciones?: Seccion[];
};

export const CONTENIDO: Record<string, ContenidoPilar> = {
  /* ─────────────────────────── LABORAL ─────────────────────────── */
  laboral: {
    subareas: {
      "despido-sin-justa-causa":
        "Si te sacaron sin una causal del artículo 62 del Código Sustantivo del Trabajo, o te la imputaron sin diligencia de descargos, el despido es indemnizable. La indemnización depende del tipo de contrato y de tu salario: 30 días por el primer año en contratos a término indefinido con salario inferior a 10 SMLMV, y el tiempo faltante en los contratos a término fijo.",
      liquidacion:
        "La liquidación reúne cesantías, intereses a las cesantías del 12% anual, prima de servicios, vacaciones compensadas y los salarios pendientes. El error más común es liquidar sobre el salario básico cuando debía incluirse el auxilio de transporte, las comisiones y las horas extras habituales, porque todo eso es salario para efectos prestacionales.",
      "acoso-laboral":
        "La Ley 1010 de 2006 define el acoso como una conducta persistente y demostrable dirigida a infundir miedo, desmotivar o inducir la renuncia. La ruta empieza por el comité de convivencia laboral de la empresa y puede terminar en el Ministerio del Trabajo o ante el juez laboral, con la renuncia motivada tratada como despido indirecto.",
      "contrato-de-trabajo":
        "Existe contrato de trabajo cuando hay actividad personal, remuneración y subordinación, sin importar cómo se llame el documento. Por eso una orden de prestación de servicios, una cuenta de cobro mensual o una figura de 'asociado' pueden desmontarse en juicio y generar el pago retroactivo de todas las prestaciones.",
      "horas-extras":
        "La jornada ordinaria se redujo por la Ley 2101 de 2021 y ese cambio movió el cálculo de los recargos. Las horas extras diurnas se pagan con recargo del 25%, las nocturnas con 75%, el recargo nocturno simple es del 35% y el trabajo en dominical o festivo se remunera con el 75% adicional más el descanso compensatorio cuando corresponde.",
      "estabilidad-laboral-reforzada":
        "Las trabajadoras en embarazo o lactancia, las personas con una afectación de salud que limita su desempeño, los aforados sindicales y quienes están cerca del requisito pensional no pueden ser desvinculados sin autorización previa del inspector del trabajo. El despido sin ese permiso es ineficaz y da lugar a reintegro con salarios dejados de percibir.",
      reintegro:
        "El reintegro procede cuando el despido fue ineficaz: trabajadora en embarazo o lactancia, persona con afectación de salud, aforado sindical o trabajador con estabilidad legal, despedido sin autorización del inspector del trabajo o sin levantamiento del fuero. El juez ordena volver al cargo con los salarios y aportes dejados de pagar.",
      incapacidades:
        "Los dos primeros días los paga el empleador, del tercero al 180 la EPS, del 181 al 540 el fondo de pensiones y después vuelve la EPS; si el origen es laboral paga la ARL al 100%. Ninguna entidad puede dejar al trabajador sin pago mientras discute con otra, y el despido durante la incapacidad requiere autorización previa.",
      "derecho-colectivo":
        "Cubre la constitución de sindicatos, el fuero de sus directivos, la negociación de la convención colectiva, el pliego de peticiones, el tribunal de arbitramento y la huelga. También el conflicto inverso: empresas que necesitan asesoría para negociar sin incurrir en prácticas que la ley califica como atentatorias del derecho de asociación.",
    },
    secciones: [
      {
        titulo: "Qué puede reclamar un trabajador en Colombia",
        parrafos: [
          "El derecho laboral colombiano parte de un principio simple pero poderoso: el trabajador es la parte débil de la relación y la ley se inclina a su favor cuando hay duda. Ese principio, recogido en el artículo 53 de la Constitución, se traduce en reglas concretas que la mayoría de las personas desconoce y por eso deja de cobrar dinero que le pertenece.",
          "Lo que se puede reclamar depende de qué se incumplió. Si el contrato terminó, entran en juego la liquidación completa, la indemnización por despido sin justa causa y la sanción moratoria del artículo 65 del Código Sustantivo del Trabajo, que obliga al empleador a pagar un día de salario por cada día de retardo en el pago de salarios y prestaciones. Si el contrato sigue vivo, se puede reclamar el pago de horas extras, recargos nocturnos, dominicales, comisiones no liquidadas, aportes a seguridad social no realizados y la corrección de un salario pactado por debajo del mínimo legal.",
          "Hay un tercer grupo de reclamaciones que no es económico sino de permanencia: el reintegro. Procede cuando existe estabilidad laboral reforzada y el empleador desvinculó sin autorización del Ministerio del Trabajo. En esos casos el juez no ordena pagar una indemnización y cerrar el asunto, sino devolver a la persona a su puesto con todos los salarios y aportes dejados de pagar desde el despido.",
        ],
      },
      {
        titulo: "El contrato realidad: lo que importa es cómo trabajas, no qué firmaste",
        parrafos: [
          "Miles de personas en Colombia trabajan bajo un contrato de prestación de servicios cuando en realidad tienen un contrato de trabajo. La diferencia no es semántica: quien está mal clasificado no recibe cesantías, prima, vacaciones remuneradas ni aportes a pensión pagados por el empleador, y queda sin indemnización cuando lo desvinculan.",
          "El artículo 23 del Código Sustantivo del Trabajo establece tres elementos: prestación personal del servicio, remuneración y subordinación. Cuando los tres coinciden, existe contrato de trabajo aunque el papel diga otra cosa; es el llamado principio de primacía de la realidad. La subordinación es el elemento decisivo y se prueba con horarios, memorandos, reportes obligatorios, uso de correo institucional, asistencia a reuniones, permisos para ausentarse y cualquier instrucción sobre el modo de ejecutar la tarea.",
          "Estas demandas son frecuentes y se ganan con evidencia acumulada, no con testimonios sueltos. Conserva los chats de WhatsApp del jefe con instrucciones, los correos de asignación de turnos, las cuentas de cobro con el mismo valor mensual durante años y cualquier constancia de que te exigían pedir permiso para faltar. Un abogado laboral revisa ese material antes de demandar y calcula lo que se puede recuperar por los últimos tres años.",
        ],
      },
      {
        titulo: "Cómo se calcula una liquidación bien hecha",
        parrafos: [
          "La liquidación no es una cifra que el empleador defina a su criterio: es una suma de fórmulas legales. Las cesantías equivalen a un mes de salario por año trabajado, proporcional al tiempo servido. Los intereses a las cesantías son el 12% anual sobre ese valor. La prima de servicios corresponde a 15 días de salario por semestre y las vacaciones a 15 días hábiles por año, que se compensan en dinero cuando no se disfrutaron.",
          "El error que más dinero cuesta es la base de cálculo. El salario base incluye todo lo que recibes como retribución directa del servicio: básico, comisiones, horas extras habituales, recargos, bonificaciones no pactadas como no salariales y el auxilio de transporte para el caso de cesantías y prima. Cuando el empleador liquida solo sobre el básico, la diferencia suele representar entre un 15% y un 30% del total.",
          "Si el contrato terminó sin justa causa, a lo anterior se suma la indemnización del artículo 64. En contratos a término indefinido con salario inferior a diez salarios mínimos son 30 días por el primer año y 20 días adicionales por cada año siguiente; con salario superior, 20 y 15 días respectivamente. En contratos a término fijo, la indemnización equivale al valor de los salarios que faltaban hasta la fecha de vencimiento pactada.",
        ],
      },
      {
        titulo: "Qué hacer en los primeros días después de un despido",
        parrafos: [
          "El orden de las acciones cambia el resultado del caso. Lo primero es no firmar nada bajo presión: ni una carta de renuncia redactada por la empresa, ni una transacción, ni un paz y salvo que diga que no queda ninguna obligación pendiente. Una transacción firmada limita lo que después se puede reclamar en un juicio, salvo que se demuestre vicio del consentimiento.",
          "Lo segundo es reunir la prueba mientras todavía hay acceso a ella: contrato, otrosíes, desprendibles de pago de los últimos tres años, certificación laboral, la carta de terminación, los correos relevantes y las conversaciones donde conste el motivo real de la salida. Una vez cerrada la cuenta corporativa, recuperar esa información es difícil.",
          "Lo tercero es hacer la reclamación escrita al empleador. No es un requisito de procedibilidad general, pero interrumpe la prescripción por una sola vez y por un periodo igual, y en la práctica resuelve muchos casos sin llegar a juicio porque la empresa prefiere pagar antes que arriesgarse a la sanción moratoria. Si no hay respuesta o la respuesta es insuficiente, sigue la demanda ordinaria laboral ante el juez del circuito.",
        ],
      },
      {
        titulo: "Cuánto tarda y cuánto cuesta un proceso laboral",
        parrafos: [
          "Los procesos laborales en Colombia se tramitan por audiencias y son más rápidos que otros procesos civiles, pero siguen dependiendo de la congestión del despacho. Un caso de única instancia, para pretensiones que no superan veinte salarios mínimos, puede resolverse en pocos meses. Uno de dos instancias, con apelación ante el tribunal, suele tomar entre uno y tres años.",
          "En materia de honorarios, la modalidad más común en casos laborales de trabajador es la cuota litis: el abogado cobra un porcentaje de lo que efectivamente se recupere, típicamente entre el 20% y el 30%, y asume el riesgo del resultado. Cuando el caso es empresarial o requiere acompañamiento continuo, se usa tarifa fija o por horas. En cualquier caso, el esquema debe quedar por escrito antes de iniciar.",
          "El proceso laboral no exige que el trabajador pague las costas si pierde, salvo casos de temeridad, y la primera audiencia siempre incluye una etapa obligatoria de conciliación donde muchos conflictos terminan con un acuerdo razonable.",
        ],
      },
      {
        titulo: "Errores que hacen perder casos laborales sólidos",
        parrafos: [
          "El primero es dejar correr el tiempo. Tres años pasan rápido y la prescripción se cuenta derecho por derecho desde que cada obligación se hizo exigible, no desde el último día trabajado. Alguien que reclama en el año cuatro pierde las horas extras del año uno aunque tenga toda la razón.",
          "El segundo es renunciar creyendo que es lo mismo. La renuncia voluntaria elimina la indemnización por despido. Cuando la salida se produce por presión, acoso o incumplimiento grave del empleador, la renuncia debe ser motivada y sustentada por escrito para poder alegar despido indirecto y conservar el derecho a la indemnización.",
          "El tercero es acumular pruebas después y no durante. Los recibos, las conversaciones y los turnos se consiguen mientras la relación está viva. El cuarto, aceptar pagos parciales con la firma de un documento de finiquito sin revisarlo con alguien que entienda el alcance de lo que se está renunciando.",
        ],
      },
    ],
  },

  /* ─────────────────── RIESGOS LABORALES Y ARL ─────────────────── */
  "riesgos-laborales": {
    subareas: {
      "accidente-de-trabajo":
        "Es todo suceso repentino que ocurre por causa o con ocasión del trabajo y produce una lesión, una perturbación funcional o la muerte. Incluye lo que pasa cumpliendo órdenes del empleador fuera del lugar de trabajo y, en ciertas condiciones, el trayecto cuando el transporte lo suministra la empresa. La ARL cubre las prestaciones asistenciales y económicas sin periodo mínimo de cotización.",
      "enfermedad-laboral":
        "Se causa por la exposición a factores de riesgo inherentes a la actividad. El Decreto 1477 de 2014 fija la tabla de enfermedades laborales, pero una patología no listada también se puede reconocer si se demuestra la relación de causalidad con el trabajo. Los casos más frecuentes son los desórdenes musculoesqueléticos, la hipoacusia y los trastornos derivados de la carga mental.",
      "perdida-de-capacidad-laboral":
        "El porcentaje de pérdida de capacidad laboral define casi todo lo demás: si hay indemnización, si hay pensión de invalidez y de cuánto. La primera calificación la hace la ARL o la EPS; si no estás de acuerdo, se puede controvertir ante la junta regional de calificación de invalidez y luego ante la junta nacional dentro de los plazos legales.",
      "calificacion-de-origen":
        "Determinar si el evento es de origen laboral o común decide quién paga y cuánto: la ARL cubre al 100% y sin copagos, la EPS al 66% con copagos. Califica en primera oportunidad la EPS, la ARL o el fondo; en desacuerdo decide la junta regional y luego la nacional.",
      "junta-de-calificacion":
        "Las juntas regionales y la Junta Nacional de Calificación de Invalidez son organismos privados con función pública que dictaminan origen, porcentaje de pérdida de capacidad y fecha de estructuración. Sus dictámenes se recurren en términos cortos y solo después queda la vía judicial.",
      "indemnizacion-arl":
        "Con una pérdida de capacidad entre el 5% y el 49,99% corresponde una indemnización única en dinero, proporcional al porcentaje y calculada sobre el ingreso base de liquidación. Desde el 50% se accede a pensión de invalidez de origen laboral, equivalente al 60% o al 75% del ingreso base según el grado.",
      "reintegro-y-reubicacion":
        "Terminada la incapacidad, el empleador debe reincorporar al trabajador a su cargo o reubicarlo en uno compatible con las recomendaciones médicas, sin disminuir su salario. Desvincular a alguien con secuelas o restricciones médicas requiere autorización del inspector del trabajo; hacerlo sin ella activa la protección por estabilidad laboral reforzada.",
    },
    secciones: [
      {
        titulo: "Qué cubre el Sistema General de Riesgos Laborales",
        parrafos: [
          "El sistema de riesgos laborales, regulado por el Decreto Ley 1295 de 1994 y la Ley 1562 de 2012, protege a quien sufre un accidente de trabajo o una enfermedad laboral. Lo importante es que se activa desde el día uno de afiliación: no exige semanas mínimas de cotización, a diferencia de la pensión de invalidez de origen común.",
          "La cobertura tiene dos caras. Las prestaciones asistenciales incluyen atención médica, quirúrgica, terapéutica y farmacéutica, hospitalización, rehabilitación física y profesional, prótesis y órtesis, todo sin copagos ni cuotas moderadoras. Las prestaciones económicas comprenden el subsidio por incapacidad temporal, la indemnización por incapacidad permanente parcial, la pensión de invalidez, la pensión de sobrevivientes y el auxilio funerario.",
          "El subsidio por incapacidad temporal se paga al 100% del ingreso base de cotización, no al 66,67% como en la incapacidad de origen común. Esa diferencia es una de las razones por las que las aseguradoras discuten el origen del evento, y también la razón por la que vale la pena discutirlo de vuelta cuando la calificación no corresponde a lo que realmente ocurrió.",
        ],
      },
      {
        titulo: "Qué hacer en las horas siguientes a un accidente de trabajo",
        parrafos: [
          "El reporte es lo primero y lo que más se descuida. El empleador tiene la obligación legal de reportar el accidente a la ARL y a la EPS dentro de los dos días hábiles siguientes, mediante el FURAT. Si no lo hace, el trabajador o sus familiares pueden reportarlo directamente ante la ARL; no reportarlo a tiempo no extingue el derecho, pero complica la prueba y abre la puerta a que la aseguradora califique el hecho como de origen común.",
          "Lo segundo es acudir a la red de la ARL y dejar constancia médica desde la primera atención de que la lesión ocurrió en el trabajo. Cuando el primer registro clínico dice que la persona se cayó en su casa porque así lo anotó un auxiliar apurado, corregir esa historia después toma meses.",
          "Lo tercero es documentar el entorno: fotos del lugar, del equipo, del piso o del elemento de protección que faltaba, nombres de los compañeros que presenciaron el hecho, copia del reporte y de las recomendaciones médicas. Ese material es el que sostiene tanto la reclamación ante la ARL como una eventual demanda contra el empleador por culpa patronal.",
        ],
      },
      {
        titulo: "La calificación de pérdida de capacidad laboral, paso a paso",
        parrafos: [
          "Cuando el tratamiento termina o llegan al día 540 de incapacidad, se emite un concepto de rehabilitación y se procede a calificar. El dictamen fija tres cosas: el origen del evento (laboral o común), la fecha de estructuración y el porcentaje de pérdida de capacidad laboral según el Manual Único de Calificación, hoy el Decreto 1507 de 2014.",
          "Ese porcentaje determina el resultado económico. Por debajo del 5% no hay indemnización. Entre el 5% y el 49,99% hay indemnización única. Desde el 50% hay pensión de invalidez: 60% del ingreso base de liquidación si la pérdida está entre 50% y 66%, y 75% si es superior. Por eso una diferencia de dos puntos porcentuales puede cambiar por completo el futuro económico de una familia.",
          "El dictamen inicial no es definitivo. Se puede manifestar inconformidad dentro de los diez días hábiles siguientes a la notificación para que el caso pase a la junta regional de calificación de invalidez, y contra esa decisión procede recurso de apelación ante la junta nacional. Llegar a esa instancia con historia clínica completa, exámenes actualizados y un concepto médico que explique las secuelas funcionales suele ser lo que mueve el porcentaje.",
        ],
      },
      {
        titulo: "Culpa patronal: cuando además se puede demandar al empleador",
        parrafos: [
          "Las prestaciones de la ARL son tarifadas y no reparan el daño completo. El artículo 216 del Código Sustantivo del Trabajo permite reclamar al empleador la indemnización plena de perjuicios cuando el accidente o la enfermedad ocurrieron por su culpa comprobada, es decir, por incumplir sus obligaciones de seguridad y salud en el trabajo.",
          "Los escenarios típicos son la falta de elementos de protección personal, la ausencia de capacitación, máquinas sin guardas de seguridad, trabajo en alturas sin sistema de protección contra caídas, jornadas que exceden lo permitido o la omisión de exámenes médicos ocupacionales. La prueba se arma con el reporte de investigación del accidente, la matriz de riesgos, los soportes del sistema de gestión SST y los testimonios.",
          "En esta acción se reclaman lucro cesante, daño emergente, daño moral y daño a la vida de relación, descontando lo que la ARL ya pagó. Es un proceso ordinario laboral, distinto y adicional al trámite ante la aseguradora, y suele ser la parte más significativa de la reparación cuando las secuelas son permanentes.",
        ],
      },
      {
        titulo: "Estabilidad laboral reforzada del trabajador accidentado",
        parrafos: [
          "Un trabajador con limitaciones derivadas de un accidente o una enfermedad laboral no puede ser despedido por esa condición. La Ley 361 de 1997 y la jurisprudencia constitucional exigen autorización previa del inspector del trabajo cuando el empleador quiere terminar el contrato de alguien en situación de debilidad manifiesta por motivos de salud.",
          "El despido sin autorización se presume discriminatorio. La consecuencia es el reintegro, el pago de los salarios y aportes causados desde la terminación y una sanción equivalente a 180 días de salario. La protección aplica también a contratos a término fijo y por obra o labor cuando la causa real de la no renovación es la condición de salud.",
          "Antes que el despido, la ley impone reubicación: adaptar el puesto, cambiar de funciones o trasladar a un cargo compatible con las recomendaciones médicas, sin reducir la remuneración. Solo cuando se demuestra que ninguna reubicación es posible, y con permiso del inspector, se puede terminar el vínculo.",
        ],
      },
      {
        titulo: "Errores frecuentes con la ARL",
        parrafos: [
          "Aceptar sin discusión que el evento se califique como de origen común es el error más costoso: cambia el porcentaje de pago de la incapacidad, quién asume el tratamiento y todo el régimen prestacional aplicable. Si el hecho ocurrió por causa o con ocasión del trabajo, hay que controvertir la calificación con soportes.",
          "Otro error es dejar vencer los diez días para manifestar inconformidad con el dictamen, o no llevar exámenes actualizados a la junta. También es común firmar acuerdos de terminación de contrato durante la incapacidad, renunciando de hecho a la protección de estabilidad reforzada.",
          "Por último, muchas familias no reclaman la pensión de sobrevivientes de origen laboral cuando el trabajador fallece, o no piden el auxilio funerario, simplemente porque nadie les explicó que existía y que la ARL responde por ellos.",
        ],
      },
    ],
  },

  /* ─────────────────────────── FAMILIA ─────────────────────────── */
  familia: {
    subareas: {
      divorcio:
        "En Colombia el divorcio puede ser de mutuo acuerdo, que se tramita ante notario en semanas y con una sola escritura, o contencioso ante juez de familia cuando no hay consenso o se invoca una causal del artículo 154 del Código Civil. En matrimonios católicos lo que se disuelven son los efectos civiles; la nulidad eclesiástica es un trámite separado.",
      alimentos:
        "Se fija según la capacidad económica de quien debe darla y las necesidades de quien la recibe. Puede acordarse por conciliación ante comisario de familia, defensor de familia o centro de conciliación, y ese acuerdo presta mérito ejecutivo. Si no se paga, procede el proceso ejecutivo de alimentos y, en casos graves, el delito de inasistencia alimentaria.",
      custodia:
        "La custodia se define por el interés superior del niño, no por el género del progenitor ni por quién tiene mejores ingresos. Lo habitual es una custodia en cabeza de uno de los padres con un régimen de visitas amplio para el otro, aunque la custodia compartida es cada vez más frecuente cuando ambos viven cerca y hay comunicación funcional.",
      "violencia-intrafamiliar":
        "La medida de protección se pide ante el comisario de familia del lugar de los hechos y puede decretarse el mismo día: desalojo del agresor, prohibición de acercamiento y protección policial. La denuncia penal por violencia intrafamiliar es un trámite paralelo y no reemplaza la medida de protección.",
      sucesiones:
        "Cuando todos los herederos son capaces y están de acuerdo, la sucesión se tramita ante notario en pocos meses. Si hay menores, desacuerdos, testamento cuestionado o bienes en litigio, va al juez de familia. Sin liquidar la sucesión los herederos no pueden vender ni hipotecar el inmueble, aunque lleven años viviendo en él.",
      "union-marital-de-hecho":
        "Después de dos años de convivencia permanente y singular se presume la sociedad patrimonial entre compañeros permanentes. Declararla permite reclamar la mitad de lo adquirido durante la unión, y también acceder a pensión de sobrevivientes. La acción para declararla y liquidarla prescribe al año siguiente de la separación física definitiva.",
      paternidad:
        "El reconocimiento voluntario se hace ante notario o registrador. Cuando no lo hay, procede la investigación de paternidad con prueba de ADN, que en Colombia se practica en laboratorios acreditados y cuya negativa injustificada se toma como indicio grave en contra. La impugnación tiene plazos cortos desde que se conoce la falta de vínculo biológico.",
    },
    secciones: [
      {
        titulo: "El derecho de familia no es solo divorcio",
        parrafos: [
          "La mayoría de las personas llega al derecho de familia por una ruptura, pero el área cubre mucho más: la fijación de alimentos, la custodia y el régimen de visitas, la liquidación de la sociedad conyugal o patrimonial, las sucesiones, la declaración de unión marital de hecho, la filiación, las medidas de protección por violencia intrafamiliar y las autorizaciones para salida del país de menores.",
          "Lo que distingue a esta área es que los conflictos tienen consecuencias emocionales y económicas simultáneas, y que en muchos de ellos hay un tercero cuyo interés prevalece por mandato constitucional: los niños, niñas y adolescentes. Esa prevalencia del artículo 44 de la Constitución explica por qué un juez de familia puede apartarse de lo que acordaron los adultos si el acuerdo perjudica al menor.",
          "También distingue al área su vocación conciliatoria. Buena parte de los asuntos exige conciliación previa como requisito de procedibilidad, y ese trámite ante comisaría de familia, defensoría de familia o centro de conciliación resuelve una fracción importante de los casos sin necesidad de demanda, con acuerdos que prestan mérito ejecutivo si luego se incumplen.",
        ],
      },
      {
        titulo: "Divorcio ante notario o ante juez: cómo elegir",
        parrafos: [
          "El divorcio de mutuo acuerdo se tramita ante cualquier notaría del país mediante escritura pública. Requiere que ambos cónyuges estén de acuerdo y que presenten, por medio de abogado, un acuerdo completo sobre alimentos, custodia, visitas y liquidación de la sociedad conyugal. Cuando hay hijos menores, el Ministerio Público debe emitir concepto favorable. Es el camino más rápido y económico y suele resolverse en pocas semanas.",
          "El divorcio contencioso va ante el juez de familia y se apoya en una de las causales del artículo 154 del Código Civil: incumplimiento grave de los deberes, ultrajes o maltrato, embriaguez habitual, uso de sustancias, enfermedad grave que impida la comunidad matrimonial, conducta que corrompa a la familia o la separación de cuerpos por más de dos años, que es la causal más utilizada por no requerir demostrar culpa del otro.",
          "La decisión práctica casi siempre depende de un solo punto: si hay acuerdo sobre el dinero y sobre los hijos. Cuando lo hay, forzar un litigio solo aumenta el costo y el desgaste. Cuando no lo hay, intentar un acuerdo desventajoso por acelerar el trámite genera problemas que después son difíciles de revertir, porque modificar lo pactado exige un nuevo proceso.",
        ],
      },
      {
        titulo: "Cómo se fija realmente la cuota alimentaria",
        parrafos: [
          "No existe un porcentaje único establecido por la ley. El artículo 129 del Código de la Infancia y la Adolescencia ordena al juez ponderar dos variables: la capacidad económica del obligado y las necesidades del menor. En la práctica los jueces se mueven en rangos que suelen ubicarse entre el 20% y el 40% de los ingresos, y aumentan cuando hay varios hijos o necesidades especiales acreditadas.",
          "La cuota no se limita a la comida. Comprende alimentación, vestuario, habitación, educación, salud, recreación y transporte, y por eso los recibos de colegio, pólizas, medicamentos, uniformes y transporte escolar son el soporte que sostiene la pretensión. Del lado del obligado, la defensa se construye con desprendibles, declaración de renta, certificaciones y prueba de otras obligaciones alimentarias a su cargo.",
          "Cuando el obligado es independiente y no tiene ingresos formales, el juez recurre a indicios: el estándar de vida, los bienes a su nombre, los movimientos bancarios y hasta las publicaciones en redes sociales. La cuota se reajusta cada año, como mínimo, con el índice de precios al consumidor, y puede revisarse cuando cambian sustancialmente las circunstancias de cualquiera de las partes.",
        ],
      },
      {
        titulo: "Sucesiones: por qué conviene no dejarlas para después",
        parrafos: [
          "Mientras la sucesión no se liquide, el patrimonio del fallecido queda en un limbo jurídico. Los herederos no pueden vender el inmueble, ni hipotecarlo, ni transferirlo, ni disponer del vehículo, aunque en los hechos lo estén usando. Con el paso de los años el problema crece: mueren herederos, aparecen herederos de herederos y el trámite que costaba poco pasa a ser un proceso con decenas de interesados.",
          "Si todos los herederos son mayores de edad, están de acuerdo y actúan por medio de abogado, la sucesión se puede hacer ante notario. Se necesitan registro civil de defunción, registros que acrediten el parentesco, certificados de tradición de los inmuebles, avalúos y paz y salvos de impuestos. Cuando hay menores, testamento discutido, herederos ausentes o desacuerdo sobre la partición, el trámite es judicial ante el juez de familia.",
          "La legítima rigurosa limita la libertad de testar en Colombia: la mitad de la herencia corresponde por ley a los legitimarios y no puede disponerse libremente. Por eso los testamentos que desconocen esa regla terminan siendo reformados por vía judicial, y por eso la planeación sucesoral seria se hace en vida y con asesoría, no improvisando en un documento privado.",
        ],
      },
      {
        titulo: "Violencia intrafamiliar y medidas de protección",
        parrafos: [
          "Cuando hay violencia física, psicológica, sexual o económica en el entorno familiar, la vía inmediata no es el divorcio sino la medida de protección ante la comisaría de familia, regulada por la Ley 294 de 1996 y la Ley 1257 de 2008. La comisaría puede ordenar el desalojo del agresor de la vivienda, prohibir el acercamiento, fijar alimentos provisionales y disponer atención en salud.",
          "La medida de protección es independiente del proceso penal por violencia intrafamiliar, que se adelanta ante la Fiscalía, y de los procesos de familia por divorcio, custodia o alimentos. Los tres pueden coexistir y conviene coordinarlos, porque lo que se prueba en uno suele servir en los otros.",
          "El incumplimiento de una medida de protección tiene sanciones propias, que van desde multa hasta arresto, y agrava la posición del agresor en los demás procesos. Documentar cada episodio con denuncia, valoración médica o registro fotográfico es lo que convierte un relato en un caso demostrable.",
        ],
      },
      {
        titulo: "Qué esperar en tiempos y en costos",
        parrafos: [
          "Un divorcio notarial de mutuo acuerdo con todo listo puede quedar resuelto en dos a seis semanas. Una sucesión notarial sin conflicto toma entre dos y seis meses, dependiendo de los paz y salvos y los avalúos. Un proceso de alimentos con conciliación previa fallida puede resolverse en seis meses a un año; un divorcio contencioso o una sucesión judicial con oposición, entre uno y tres años.",
          "En honorarios, los trámites notariales se cotizan como tarifa fija porque su alcance es previsible. Los procesos judiciales de familia suelen combinar un anticipo con pagos por etapa, y en asuntos patrimoniales de alto valor puede pactarse un componente variable sobre lo recuperado.",
          "El factor que más reduce tiempo y costo es la calidad de la documentación inicial. Registros civiles actualizados, certificados de tradición recientes, soportes de ingresos y una relación clara de bienes evitan meses de requerimientos y devoluciones.",
        ],
      },
    ],
  },

  /* ──────────────────────────── CIVIL ──────────────────────────── */
  civil: {
    subareas: {
      "incumplimiento-de-contrato":
        "Frente a un contrato incumplido el acreedor puede exigir el cumplimiento forzado o pedir la resolución, y en ambos casos reclamar los perjuicios causados. La elección no es indiferente: la resolución deshace el negocio y obliga a restituir lo recibido, mientras que el cumplimiento mantiene el contrato vivo y persigue la prestación pactada.",
      "proceso-ejecutivo":
        "Es la vía rápida para cobrar cuando existe un documento que contiene una obligación clara, expresa y exigible: pagaré, letra, cheque, factura, contrato con firma o acta de conciliación. El juez libra mandamiento de pago sin discutir primero el fondo y permite decretar embargos desde el inicio del proceso.",
      obligaciones:
        "Cubre el nacimiento, la modificación y la extinción de las obligaciones: pago, novación, compensación, remisión, confusión, prescripción, cesión de créditos, solidaridad, cláusula penal e intereses. Es la base técnica sobre la que se resuelven casi todos los conflictos civiles y comerciales, y donde suele decidirse si una deuda todavía se puede cobrar.",
      "responsabilidad-civil":
        "Obliga a reparar el daño causado a otro, sea por incumplir un contrato o por un hecho ilícito ajeno a toda relación previa. Requiere probar el daño, la conducta y el nexo causal, y permite reclamar daño emergente, lucro cesante, daño moral y daño a la vida de relación.",
      "cobro-de-deudas":
        "Antes de demandar conviene revisar si la deuda está prescrita, si el documento reúne los requisitos de título ejecutivo y si el deudor tiene bienes que respalden el cobro. Ganar un proceso contra alguien insolvente produce una sentencia impagable; por eso el estudio patrimonial previo suele valer más que la demanda misma.",
      "prescripcion-adquisitiva":
        "Permite adquirir la propiedad de un bien por poseerlo de manera pública, pacífica e ininterrumpida durante el tiempo que fija la ley: cinco años en la prescripción ordinaria y diez en la extraordinaria para inmuebles. Es la salida habitual para quien ha vivido décadas en un predio sin escritura a su nombre.",
    },
    secciones: [
      {
        titulo: "Qué resuelve el derecho civil en la vida cotidiana",
        parrafos: [
          "El derecho civil regula las relaciones entre particulares cuando no hay una norma especial que las gobierne. Es el derecho de los contratos que no son laborales ni mercantiles, de las deudas entre personas, de la propiedad, de los daños causados sin que exista un vínculo previo y de las obligaciones en general.",
          "En términos prácticos, un abogado civil aparece cuando alguien firmó un contrato de obra y el contratista abandonó la construcción, cuando prestó dinero y solo tiene un pagaré firmado, cuando un vecino causó un daño en su propiedad, cuando compró algo que resultó tener un vicio oculto o cuando lleva veinte años en una casa que nunca se escrituró a su nombre.",
          "La columna vertebral del área es el artículo 1602 del Código Civil: el contrato legalmente celebrado es ley para las partes. De ahí se desprende todo lo demás, incluido el hecho de que muchas discusiones se ganan o se pierden por lo que quedó escrito en una cláusula que nadie leyó con atención al firmar.",
        ],
      },
      {
        titulo: "Título ejecutivo: la diferencia entre cobrar en meses o en años",
        parrafos: [
          "El artículo 422 del Código General del Proceso permite demandar ejecutivamente las obligaciones que sean expresas, claras y exigibles y que consten en documentos provenientes del deudor. Cuando existe ese documento, el juez libra mandamiento de pago de entrada, sin discutir primero si la deuda existe, y se pueden pedir medidas cautelares desde el inicio.",
          "Son títulos ejecutivos el pagaré, la letra de cambio, el cheque, la factura electrónica aceptada, el contrato firmado por el deudor donde conste la obligación de pagar una suma determinada, el acta de conciliación, la sentencia y ciertos documentos de crédito bancario. No lo son, en cambio, una conversación de WhatsApp donde alguien reconoce vagamente una deuda, ni una transferencia bancaria por sí sola.",
          "Cuando no hay título ejecutivo hay que ir por el proceso declarativo, que primero establece que la obligación existe y solo después permite ejecutarla. Ese camino puede sumar varios años. Por eso el consejo más rentable en materia de cobros se da antes de prestar el dinero: firmar un pagaré con espacios diligenciados o una carta de instrucciones bien redactada.",
        ],
      },
      {
        titulo: "Responsabilidad civil: cuándo hay que indemnizar",
        parrafos: [
          "El artículo 2341 del Código Civil establece que quien causa un daño a otro está obligado a indemnizarlo. Esa es la responsabilidad extracontractual, la que surge sin contrato previo: un accidente, una caída por un piso mal señalizado, un árbol que cae sobre un vehículo, un daño causado por una actividad peligrosa.",
          "La responsabilidad contractual, en cambio, nace del incumplimiento de un contrato existente. La distinción importa porque cambia el plazo de prescripción, la forma de probar la culpa y el alcance de los perjuicios reclamables. En las actividades peligrosas, además, la culpa se presume y es el demandado quien debe demostrar causa extraña: fuerza mayor, hecho de un tercero o culpa exclusiva de la víctima.",
          "Los perjuicios indemnizables son el daño emergente, que es lo que se perdió; el lucro cesante, que es lo que se dejó de ganar; el daño moral, por el sufrimiento; y el daño a la vida de relación, por la afectación de las actividades placenteras y sociales. Cada uno se prueba de manera distinta y todos necesitan soporte: facturas, cotizaciones, certificaciones de ingresos, dictámenes médicos y testimonios.",
        ],
      },
      {
        titulo: "Cómo se extinguen las obligaciones y por qué eso te puede favorecer",
        parrafos: [
          "Una obligación no solo termina cuando se paga. También se extingue por novación cuando se sustituye por otra nueva, por compensación cuando ambas partes son deudoras entre sí, por remisión cuando el acreedor la perdona, por confusión cuando acreedor y deudor se confunden en la misma persona y por prescripción cuando el acreedor deja pasar el tiempo sin cobrar.",
          "La prescripción es la que más se discute. La acción ejecutiva prescribe en cinco años y la ordinaria en diez, contados desde que la obligación se hizo exigible. Se interrumpe con la presentación de la demanda debidamente notificada y con el reconocimiento expreso o tácito de la deuda por parte del deudor, lo que explica por qué un abono pequeño puede revivir una deuda que ya estaba prescrita.",
          "La prescripción no opera de oficio: debe alegarse como excepción dentro del proceso. Un deudor que no la propone termina condenado a pagar una deuda que legalmente ya no era exigible, y ese es uno de los errores más frecuentes de quien contesta una demanda sin asesoría.",
        ],
      },
      {
        titulo: "Estrategia antes de demandar",
        parrafos: [
          "Antes de radicar cualquier demanda civil conviene responder tres preguntas. La primera es si el derecho todavía existe, es decir, si no está prescrito. La segunda es qué se puede probar hoy, con los documentos que hay en la mano, no con lo que se recuerda. La tercera, y la más ignorada, es si la contraparte tiene bienes con los cuales responder.",
          "Ese último punto define si vale la pena litigar. Un estudio previo de bienes en oficinas de registro, tránsito y cámara de comercio evita gastar años y honorarios en una sentencia que no se podrá hacer efectiva. Cuando sí hay bienes, permite pedir medidas cautelares oportunas antes de que el deudor los traspase.",
          "También hay que evaluar la conciliación. En la mayoría de los procesos declarativos civiles la conciliación extrajudicial es requisito de procedibilidad, y muchas veces produce un acuerdo con pago inmediato que resulta mejor, en valor presente, que una sentencia favorable obtenida tres años después.",
        ],
      },
      {
        titulo: "Tiempos, costos y expectativas realistas",
        parrafos: [
          "Un proceso ejecutivo sin excepciones puede resolverse en pocos meses; con excepciones y apelación, en uno a dos años. Un proceso declarativo verbal suele tomar entre dos y tres años en dos instancias. Un proceso de pertenencia para declarar prescripción adquisitiva, con emplazamientos y curador, difícilmente baja de dos años.",
          "Los honorarios en materia civil combinan un componente fijo por la elaboración de la demanda y la representación, con un componente variable sobre lo recuperado en los procesos de cobro. A eso se suman gastos del proceso: notificaciones, curador ad litem, peritos, avalúos y, en algunos casos, arancel y publicaciones.",
          "La expectativa razonable no es solo ganar sino recuperar. Un caso bien llevado en materia civil se mide por la sentencia favorable, por la eficacia de las medidas cautelares y por el tiempo real que tomó convertir el derecho en dinero.",
        ],
      },
    ],
  },

  /* ───────────────────── DERECHO ADMINISTRATIVO ────────────────── */
  administrativo: {
    subareas: {
      "contratacion-estatal":
        "Es el área de mayor exposición económica frente al Estado: estructuración de propuestas, observaciones al pliego, recursos frente a la adjudicación, ejecución del contrato, actas de suspensión, reclamaciones por mayor permanencia y desequilibrio económico, liquidación bilateral y controversias contractuales ante la jurisdicción. Cubre tanto a proponentes y contratistas como a entidades que necesitan blindar sus procesos de selección, y exige dominio de la Ley 80 de 1993, la Ley 1150 de 2007, la Ley 2022 de 2020 y el Decreto 1082 de 2015, además de los tiempos estrictos de reclamación que se pierden por silencio o por firmar el acta de liquidación sin salvedades.",
      "nulidad-y-restablecimiento":
        "Es el medio de control para atacar un acto administrativo particular que afecta un derecho: una sanción, un retiro del servicio, una liquidación de impuestos, la negativa de un reconocimiento. Se pide que el acto se anule y, además, que se restablezca el derecho y se reparen los perjuicios causados.",
      "reparacion-directa":
        "Procede cuando el daño proviene de un hecho, una omisión, una operación administrativa o la ocupación de un inmueble, y no de un acto. Es la vía para casos de falla en el servicio médico estatal, daños causados por obras públicas, privación injusta de la libertad y actuaciones de la fuerza pública.",
      "derecho-disciplinario":
        "Defensa de servidores públicos y particulares que cumplen funciones públicas en procesos adelantados por oficinas de control interno disciplinario, personerías o la Procuraduría, bajo la Ley 1952 de 2019 reformada por la Ley 2094 de 2021. Una sanción de destitución e inhabilidad puede cerrar una carrera completa.",
      "derecho-de-peticion":
        "Es la herramienta más económica y más subutilizada frente al Estado. La entidad debe responder de fondo dentro de los quince días hábiles generales, diez para pedir información y treinta para consultas. El silencio no es respuesta y habilita tanto la tutela como el reproche disciplinario del funcionario.",
      "funcion-publica":
        "Concursos de mérito, encargos, provisionalidad, reintegros, nivelación salarial, prestaciones de empleados públicos y retiro del servicio. Muchos de estos conflictos se resuelven demostrando que la entidad se apartó del manual de funciones o de la lista de elegibles.",
      "acciones-populares":
        "Protegen derechos e intereses colectivos como el ambiente sano, el espacio público, la moralidad administrativa y la seguridad. No tienen término de caducidad mientras subsista la amenaza y pueden ser interpuestas por cualquier persona.",
      "cobro-coactivo":
        "Defensa frente al cobro que las entidades hacen directamente de sus acreencias, sin acudir a un juez: impuestos, multas, comparendos, sanciones y contribuciones. Se puede discutir la existencia del título, la prescripción y las medidas cautelares mediante excepciones dentro del término legal.",
    },
    secciones: [
      {
        titulo: "Cuándo se necesita un abogado administrativista",
        parrafos: [
          "El derecho administrativo regula la relación entre el Estado y las personas. Se activa cuando una entidad pública toma una decisión que afecta un derecho, cuando causa un daño, cuando contrata bienes y servicios, cuando sanciona a un servidor o cuando simplemente no responde lo que está obligada a responder.",
          "El escenario más frecuente es el acto administrativo desfavorable: la resolución que niega una pensión, que impone una multa, que declara la insubsistencia de un empleado, que rechaza una propuesta en una licitación o que liquida un tributo. Frente a esos actos existen recursos en sede administrativa y, después, medios de control ante la jurisdicción de lo contencioso administrativo.",
          "El segundo escenario es el daño: la falla del servicio médico en un hospital público, la lesión causada por una obra sin señalización, la privación injusta de la libertad, el daño ambiental o el desalojo irregular. El artículo 90 de la Constitución obliga al Estado a responder patrimonialmente por los daños antijurídicos que le sean imputables, y ese es el fundamento de la reparación directa.",
        ],
      },
      {
        titulo: "Contratación estatal: dónde está el dinero y dónde están los errores",
        parrafos: [
          "La contratación estatal es la puerta de entrada del sector privado al presupuesto público y, por lo mismo, el área donde un error de forma cuesta más caro. Todo empieza antes de la adjudicación: leer bien el pliego, presentar observaciones dentro del término, revisar los requisitos habilitantes y detectar los pliegos direccionados es lo que decide si una propuesta tiene alguna posibilidad real.",
          "Durante la ejecución aparecen los problemas de fondo. Mayor permanencia en obra, suspensiones que se prolongan, cambios en las cantidades, incrementos de precios de insumos, demoras de la entidad en entregar predios o licencias: todos ellos pueden configurar un desequilibrio económico del contrato. La ley permite restablecer esa ecuación financiera, pero exige que las reclamaciones se hagan oportunamente y por escrito, no al final.",
          "El error más costoso es firmar el acta de liquidación bilateral sin salvedades. Una vez firmada sin objeciones, el contratista pierde la posibilidad de reclamar judicialmente lo que no dejó constando allí. Junto a eso están los procesos sancionatorios contractuales, las declaratorias de incumplimiento, la efectividad de las pólizas y las inhabilidades derivadas, que pueden dejar a una empresa por fuera del mercado público durante años.",
          "Por el lado de las entidades, el acompañamiento se enfoca en estructurar procesos que resistan control fiscal y disciplinario: estudios previos consistentes, matrices de riesgo reales, criterios de evaluación objetivos y supervisión documentada. La mayoría de los hallazgos de la Contraloría nace de documentos precontractuales débiles, no de mala fe.",
        ],
      },
      {
        titulo: "Los plazos que nadie perdona en lo contencioso administrativo",
        parrafos: [
          "El derecho administrativo es implacable con los términos. La nulidad y restablecimiento del derecho caduca a los cuatro meses siguientes a la notificación, comunicación o publicación del acto. La reparación directa caduca a los dos años del hecho, de la omisión o de la ocupación. Las controversias contractuales tienen dos años contados según el momento aplicable a cada caso, y en contratos que requieren liquidación el término suele contarse desde su liquidación o desde el vencimiento del plazo para liquidar.",
          "Antes de demandar hay un paso obligatorio en la mayoría de los casos: la conciliación extrajudicial ante la Procuraduría, que es requisito de procedibilidad y suspende el término de caducidad mientras se surte. Omitirla lleva al rechazo de la demanda.",
          "También corren los términos en sede administrativa. Los recursos de reposición y apelación contra un acto se presentan dentro de los diez días siguientes a la notificación personal. Dejar vencer ese plazo no siempre cierra la vía judicial, pero debilita el caso y en materia disciplinaria o sancionatoria suele ser determinante.",
        ],
      },
      {
        titulo: "Derecho de petición y tutela: la vía rápida frente al Estado",
        parrafos: [
          "El derecho de petición del artículo 23 de la Constitución, desarrollado por la Ley 1755 de 2015, obliga a toda entidad a responder de fondo, de manera clara y congruente. Los términos generales son quince días hábiles, diez para solicitudes de información y documentos, y treinta para consultas. Una respuesta evasiva, parcial o que se limita a decir que el asunto está en trámite equivale jurídicamente a no responder.",
          "Cuando la entidad guarda silencio o responde de manera insuficiente, procede la acción de tutela por vulneración del derecho fundamental de petición, que el juez debe fallar en diez días. Adicionalmente, el funcionario incurre en falta disciplinaria, y ese señalamiento suele destrabar trámites que llevaban meses detenidos.",
          "La petición bien redactada hace algo más que pedir: fija los hechos, cita el fundamento normativo, precisa exactamente qué se solicita y deja una constancia con fecha que después sirve como prueba en el proceso judicial. Muchos casos administrativos se construyen sobre la respuesta que la propia entidad dio por escrito.",
        ],
      },
      {
        titulo: "Defensa disciplinaria y responsabilidad fiscal del servidor público",
        parrafos: [
          "Un servidor público puede enfrentar tres frentes simultáneos por el mismo hecho: el disciplinario ante la Procuraduría, la personería o el control interno; el fiscal ante la Contraloría cuando hay detrimento patrimonial; y el penal ante la Fiscalía. Son independientes, tienen estándares distintos y una absolución en uno no cierra automáticamente los demás.",
          "En lo disciplinario, la Ley 1952 de 2019 con la reforma de la Ley 2094 de 2021 introdujo la separación entre quien investiga y quien juzga, y reforzó las garantías del investigado. La defensa se juega en la etapa de descargos y en las pruebas: demostrar que la conducta no fue dolosa ni gravemente culposa, que se siguió el procedimiento o que no existió el deber funcional que se imputa.",
          "En lo fiscal, el proceso de responsabilidad busca resarcir el daño al patrimonio público y termina en un fallo con responsabilidad que se cobra por jurisdicción coactiva y genera inhabilidad. Contestar el auto de apertura con soporte técnico, cuestionar el dictamen de cuantificación del daño y acreditar la ausencia de nexo causal son las líneas de defensa habituales.",
        ],
      },
      {
        titulo: "Qué esperar de un proceso contra el Estado",
        parrafos: [
          "Los procesos contencioso administrativos son más lentos que los ordinarios. Una nulidad y restablecimiento del derecho suele tomar entre dos y cuatro años en dos instancias; una reparación directa con dictámenes periciales, entre tres y cinco; una controversia contractual compleja puede superar ese rango. La conciliación extrajudicial y los comités de conciliación de las entidades a veces permiten cerrar antes.",
          "El costo se estructura habitualmente con honorarios fijos por etapa en asuntos de menor cuantía y con un componente variable en pretensiones patrimoniales altas, especialmente en reparación directa y controversias contractuales. A eso se suman peritajes, que en casos de obra o de responsabilidad médica son determinantes y no son baratos.",
          "El elemento que más influye en el resultado es la prueba documental que se recaudó antes de la demanda: peticiones respondidas, actas, bitácoras de obra, historias clínicas, comunicaciones radicadas y constancias de reclamación oportuna. En litigio contra el Estado, el expediente administrativo suele ser el verdadero campo de batalla.",
        ],
      },
    ],
  },

  /* ─────────────────────────── PENAL ─────────────────────────── */
  penal: {
    subareas: {
      "defensa-penal":
        "La defensa técnica cubre desde la primera captura hasta el juicio oral: control de legalidad de la captura, imputación, solicitud de libertad, negociación de preacuerdos y alegato final. Un abogado penal que entra en las primeras horas puede evitar una medida de aseguramiento en establecimiento carcelario que después toma meses levantar.",
      denuncias:
        "Denunciar bien es la mitad del caso. La denuncia se presenta ante la Fiscalía, la URI, la SIJIN o el portal ¡A Denunciar!, y debe narrar hechos concretos con fechas, lugares, personas y las pruebas disponibles. Una denuncia vaga se archiva por atipicidad; una denuncia bien construida orienta el programa metodológico del fiscal desde el primer día.",
      "audiencias-preliminares":
        "Legalización de captura, formulación de imputación e imposición de medida de aseguramiento suelen celebrarse en una sola jornada ante el juez de control de garantías. Lo que se diga o se calle ahí define si la persona espera el proceso en libertad, con detención domiciliaria o en un centro de reclusión.",
      "violencia-intrafamiliar":
        "El artículo 229 del Código Penal sanciona el maltrato físico o psicológico dentro del núcleo familiar y no admite conciliación ni desistimiento como salida automática. Junto al proceso penal corren las medidas de protección ante la comisaría de familia, que se dictan en horas y son la herramienta más rápida cuando hay riesgo actual.",
      "delitos-economicos":
        "Estafa, abuso de confianza, administración desleal, lavado de activos y captación masiva de dineros exigen una defensa distinta: se litiga con contabilidad, trazabilidad bancaria y peritajes financieros. La víctima que reclama a tiempo puede lograr el comiso de bienes y la reparación integral dentro del mismo proceso penal.",
    },
    secciones: [
      {
        titulo: "Cuándo necesitas un abogado penal y por qué la hora importa",
        parrafos: [
          "Buscar un abogado penal casi nunca ocurre con calma: sucede después de una captura, de una citación de la Fiscalía o de una notificación que llegó sin aviso. El derecho penal colombiano es adversarial desde la Ley 906 de 2004, lo que significa que hay dos partes enfrentadas ante un juez imparcial y que la persona sin defensa técnica queda en desventaja estructural frente a un fiscal con policía judicial, peritos y tiempo.",
          "El primer plazo es el más corto de todo el ordenamiento: capturada una persona, debe ser puesta a disposición de un juez de control de garantías dentro de las 36 horas siguientes. En esa audiencia se revisa la legalidad de la captura, se formula imputación y se decide la medida de aseguramiento. Quien llega sin abogado de confianza recibe un defensor público que conoce el expediente minutos antes, y esa diferencia de preparación pesa.",
          "El segundo momento crítico es la citación a interrogatorio o a entrevista. Muchas personas asisten solas creyendo que aclarar el malentendido las dejará fuera del proceso, y terminan entregando la prueba que faltaba. Nadie está obligado a declarar contra sí mismo ni contra su cónyuge o parientes cercanos; ejercer ese derecho no es señal de culpa, es defensa elemental.",
        ],
      },
      {
        titulo: "Las etapas del proceso penal en Colombia",
        parrafos: [
          "El proceso arranca con la indagación: la Fiscalía recibe la noticia criminal, abre el caso y ordena actos de investigación. Esta etapa puede durar meses y la persona investigada muchas veces ni se entera, salvo que la citen. Si el fiscal considera que hay inferencia razonable de autoría, convoca a la audiencia de formulación de imputación y desde ahí la persona es imputada y el caso pasa a investigación formal.",
          "Después viene el escrito de acusación, la audiencia de acusación, la audiencia preparatoria donde se decide qué pruebas entran al juicio y, finalmente, el juicio oral con interrogatorio y contrainterrogatorio de testigos. La sentencia se anuncia al terminar y, si es condenatoria, se abre el incidente de reparación integral para las víctimas. Cada etapa tiene términos que, si se vencen, generan libertad por vencimiento de términos.",
          "Existen salidas anticipadas que muchas veces convienen más que llegar al juicio: allanamiento a cargos con rebaja de hasta la mitad de la pena si ocurre en la imputación, preacuerdos con la Fiscalía, principio de oportunidad y, en delitos querellables, conciliación como requisito de procedibilidad. Elegir entre litigar o negociar es una decisión estratégica que depende de la fuerza probatoria del caso, no del optimismo.",
        ],
      },
      {
        titulo: "Delitos querellables, conciliación y desistimiento",
        parrafos: [
          "No todos los delitos se persiguen de oficio. Los querellables —lesiones personales leves, injuria, calumnia, hurto simple de menor cuantía, inasistencia alimentaria, entre otros— exigen que la víctima presente querella dentro de los seis meses siguientes al conocimiento del hecho y requieren audiencia de conciliación antes de continuar. Si nadie querella dentro de ese término, la acción penal se extingue.",
          "La conciliación no es una derrota para la víctima: bien negociada permite obtener reparación económica real y verificable en semanas, en lugar de esperar años una condena que quizá nunca se traduzca en pago. Para el investigado, conciliar extingue la acción penal y evita antecedentes. En ambos extremos conviene que el acuerdo quede documentado con cláusulas de cumplimiento y no como una promesa verbal en el pasillo del juzgado.",
          "En cambio, en delitos como violencia intrafamiliar, delitos sexuales o violencia de género la conciliación está restringida o prohibida, precisamente porque el legislador reconoce que existe una asimetría de poder que vicia cualquier acuerdo. Confundir estos regímenes es un error frecuente y grave.",
        ],
      },
      {
        titulo: "Ser víctima dentro del proceso penal",
        parrafos: [
          "La víctima en Colombia no es un espectador: puede constituirse como parte, aportar elementos materiales probatorios, solicitar medidas de protección, oponerse a preacuerdos que desconozcan sus derechos y reclamar reparación integral en un incidente posterior a la condena. Ejercer esos derechos requiere abogado, porque la Fiscalía representa a la sociedad, no a la víctima en particular.",
          "La reparación integral cubre daño emergente, lucro cesante, daño moral y daño a la vida de relación. Cuando el responsable no tiene bienes, la vía penal puede resultar simbólica; por eso conviene evaluar desde el inicio si conviene además una demanda de responsabilidad civil o un proceso ejecutivo paralelo, y si hay un tercero civilmente responsable —una empresa, un asegurador— con capacidad de pago.",
        ],
      },
      {
        titulo: "Antecedentes, libertad y consecuencias más allá de la condena",
        parrafos: [
          "Una condena penal no termina con la pena: deja anotaciones que afectan el empleo, la contratación estatal, la salida del país y la custodia de hijos en procesos de familia. Por eso incluso en casos aparentemente menores conviene evaluar la salida que menos huella deje, y no solo la que resuelva rápido la audiencia de mañana.",
          "La detención domiciliaria, la prisión domiciliaria por ser padre o madre cabeza de familia, la suspensión condicional de la ejecución de la pena y la libertad condicional son figuras con requisitos objetivos: monto de la pena, antecedentes, arraigo y reparación. Un buen abogado las plantea con documentos —certificados de residencia, contratos laborales, historias clínicas— y no con argumentos genéricos.",
        ],
      },
    ],
  },

  /* ─────────────────────────── COMERCIAL ─────────────────────────── */
  comercial: {
    subareas: {
      "constitucion-de-sas":
        "La SAS se constituye por documento privado inscrito en la cámara de comercio y admite un solo accionista. Lo que define su valor no es el trámite —que es rápido— sino los estatutos: objeto social, capital autorizado y suscrito, restricciones a la negociación de acciones, quórum y causales de exclusión. Unos estatutos copiados de plantilla son la causa más común de bloqueos societarios años después.",
      "contratos-comerciales":
        "Suministro, distribución, agencia comercial, franquicia, prestación de servicios, confidencialidad y licencias. En Colombia el contrato de agencia comercial genera la prestación del artículo 1324 del Código de Comercio a favor del agente, y muchas empresas la descubren cuando terminan la relación. Nombrar mal un contrato tiene consecuencias económicas concretas.",
      "conflictos-entre-socios":
        "Bloqueo en la toma de decisiones, abuso del derecho de voto de la mayoría o de la minoría, dividendos que nunca se decretan y administradores que contratan consigo mismos. Las herramientas van desde la impugnación de decisiones de la asamblea hasta la acción social de responsabilidad contra administradores ante la Superintendencia de Sociedades, que actúa con funciones jurisdiccionales.",
      "reforma-de-estatutos":
        "Aumentos de capital, cambio de objeto social, transformación, fusión, escisión y acuerdos de accionistas. Toda reforma debe aprobarse con el quórum estatutario, constar en acta con las formalidades del Código de Comercio e inscribirse en el registro mercantil; un acta mal levantada es inoponible frente a terceros y puede ser devuelta por la cámara.",
      "titulos-valores":
        "Letras, pagarés y cheques circulan con presunción de autenticidad y prestan mérito ejecutivo. Un pagaré con espacios en blanco necesita carta de instrucciones; un cheque impagado exige constancia del banco; una firma sin poder suficiente destruye el título. El cobro se hace por proceso ejecutivo y la acción cambiaria directa prescribe en 3 años desde el vencimiento.",
    },
    secciones: [
      {
        titulo: "Qué cubre el derecho comercial en Colombia",
        parrafos: [
          "El derecho comercial regula la actividad de los comerciantes y los actos de comercio: constituir sociedades, contratar con proveedores y clientes, emitir y cobrar títulos valores, competir en el mercado y resolver los conflictos que surgen de todo lo anterior. Se rige por el Código de Comercio de 1971, complementado por la Ley 1258 de 2008 sobre la SAS, la Ley 222 de 1995 y la doctrina de la Superintendencia de Sociedades.",
          "En la práctica, el derecho comercial se contrata en dos momentos opuestos. El primero es preventivo: alguien va a montar una empresa, recibir inversión, firmar un contrato de distribución o incorporar un socio, y quiere que el documento sostenga la relación. El segundo es reactivo: el socio se fue con la base de clientes, el cliente no pagó una factura de doscientos millones o la asamblea aprobó una capitalización que diluyó a la minoría.",
          "El costo de la asesoría preventiva es una fracción del costo del litigio posterior. Un acuerdo de accionistas bien redactado —con cláusulas de arrastre, de acompañamiento, de no competencia y de resolución de bloqueos— cuesta menos que un mes de un proceso ante la Superintendencia de Sociedades.",
        ],
      },
      {
        titulo: "Constituir la sociedad correcta: SAS, SRL o sucursal",
        parrafos: [
          "La SAS domina el panorama colombiano porque permite un accionista único, responsabilidad limitada al aporte, libertad casi total para diseñar los estatutos y constitución por documento privado. La sociedad de responsabilidad limitada y la anónima sobreviven en escenarios específicos: la anónima cuando se busca captar inversión abierta o cumplir requisitos regulatorios, y la sucursal de sociedad extranjera cuando la matriz no quiere crear una persona jurídica nueva en el país.",
          "Constituir no es solo inscribir. Hay que definir el objeto —hoy puede ser indeterminado en la SAS, pero conviene precisarlo cuando se contratará con el Estado o con entidades vigiladas—, el capital autorizado, suscrito y pagado, la estructura de administración, el representante legal y sus suplentes, y el régimen de solución de conflictos. Después vienen RUT, registro mercantil, libros, facturación electrónica y las obligaciones ante la DIAN.",
          "La responsabilidad limitada tiene límites reales. El artículo 42 de la Ley 1258 permite levantar el velo corporativo cuando la sociedad se usa en fraude a la ley o en perjuicio de terceros, y los administradores responden personalmente por dolo o culpa en el ejercicio de sus funciones. Usar la sociedad como caja personal es la forma más rápida de perder la protección que la ley otorga.",
        ],
      },
      {
        titulo: "Cobrar lo que la empresa le deben: la vía ejecutiva",
        parrafos: [
          "Cuando un cliente no paga, la pregunta técnica es si el documento que se tiene presta mérito ejecutivo. Una factura electrónica aceptada expresa o tácitamente, un pagaré, un contrato con obligación clara, expresa y exigible o un título valor permiten demandar directamente el pago y pedir medidas cautelares sobre cuentas bancarias e inmuebles desde el auto que libra mandamiento de pago.",
          "Si no hay título ejecutivo, el camino es un proceso declarativo verbal para que un juez declare el incumplimiento y condene al pago, lo que agrega tiempo. Por eso el diseño contractual importa: cláusula penal, intereses moratorios a la tasa máxima legal, pagaré en blanco con carta de instrucciones y garantías reales o personales convierten un cobro incierto en uno con respaldo.",
          "También existe la insolvencia: si el deudor entra en reorganización empresarial bajo la Ley 1116 de 2006, los procesos ejecutivos se suspenden y el crédito debe presentarse dentro del proceso concursal con su calificación y graduación. Detectar a tiempo que el deudor va hacia allá cambia la estrategia por completo.",
        ],
      },
      {
        titulo: "Conflictos societarios y responsabilidad de los administradores",
        parrafos: [
          "La Superintendencia de Sociedades ejerce funciones jurisdiccionales y resuelve, con procedimientos más rápidos que la justicia ordinaria, la impugnación de decisiones sociales, la acción social de responsabilidad contra administradores, los conflictos derivados de acuerdos de accionistas y la declaratoria de abuso del derecho de voto en sus tres modalidades: mayoritario, minoritario y de paridad.",
          "Los administradores —representante legal, junta directiva, liquidador— deben obrar de buena fe, con lealtad y con la diligencia de un buen hombre de negocios (artículo 23 de la Ley 222 de 1995). Contratar con la sociedad sin autorización de la asamblea, competirle, desviar oportunidades de negocio o repartir utilidades inexistentes genera responsabilidad solidaria e ilimitada por los perjuicios causados.",
          "Los plazos importan: la impugnación de decisiones de la asamblea debe presentarse dentro de los dos meses siguientes a la reunión o a su inscripción cuando la decisión sea registrable. Dejar pasar ese término convierte una decisión viciada en una decisión firme.",
        ],
      },
      {
        titulo: "Qué documentos tener listos antes de la primera reunión",
        parrafos: [
          "Para un caso comercial, el abogado necesita ver el certificado de existencia y representación legal actualizado, los estatutos vigentes con todas sus reformas, las actas de asamblea o junta relevantes, el contrato en discusión con sus otrosíes y anexos, las facturas o títulos valores pendientes y la correspondencia donde conste el incumplimiento o el requerimiento.",
          "Con ese material se puede estimar en la primera conversación si hay título ejecutivo, qué cuantía se persigue, ante qué autoridad se litiga y cuánto puede costar. Sin él, cualquier estimación es especulación.",
        ],
      },
    ],
  },

  /* ────────────────────── INMOBILIARIO (extenso) ────────────────────── */
  inmobiliario: {
    subareas: {
      "restitucion-de-inmueble":
        "Es el proceso para recuperar un inmueble arrendado cuando el arrendatario no paga o incumple el contrato. Se tramita como proceso verbal sumario del artículo 384 del Código General del Proceso y tiene una ventaja decisiva: si la causal es mora, el arrendatario solo puede ser oído en el proceso si acredita el pago de los cánones adeudados o consigna a órdenes del juzgado. Bien radicada, la entrega puede ordenarse en meses y no en años.",
      "contrato-de-arrendamiento":
        "El contrato de vivienda urbana se rige por la Ley 820 de 2003 y el comercial por el Código de Comercio, con reglas distintas de renovación, preaviso y reajuste. En vivienda el canon no puede superar el 1% del valor comercial del inmueble, el incremento anual está atado al IPC del año anterior y el depósito en dinero como garantía está prohibido; en local comercial rige el derecho a la renovación del artículo 518.",
      "compraventa-y-escrituracion":
        "La compraventa de inmuebles solo se perfecciona con escritura pública y solo produce efectos frente a terceros con el registro en la Oficina de Instrumentos Públicos. Entre la promesa y la escritura hay un espacio de riesgo que se administra con cláusula penal, arras, plazo cierto, notaría determinada y condiciones de desembolso del crédito hipotecario bien redactadas.",
      "estudio-de-titulos":
        "Es la revisión de los últimos diez a veinte años de tradición del inmueble: certificado de tradición y libertad, escrituras antecedentes, paz y salvo de predial y valorización, estado de la propiedad horizontal, licencias, embargos, hipotecas, patrimonio de familia, afectación a vivienda familiar, servidumbres, procesos de pertenencia y sucesiones mal cerradas. Es la inversión más rentable de toda la operación.",
      "propiedad-horizontal":
        "La Ley 675 de 2001 gobierna la vida en conjuntos y edificios: cuotas de administración con mérito ejecutivo, sanciones por incumplir el reglamento, uso de zonas comunes, obras que afectan la estructura, impugnación de decisiones de la asamblea dentro de los dos meses siguientes y responsabilidad del administrador. Las cuotas atrasadas se cobran por proceso ejecutivo con el certificado del administrador.",
    },
    secciones: [
      {
        titulo: "Qué hace un abogado inmobiliario y cuándo vale la pena contratarlo",
        parrafos: [
          "Un abogado inmobiliario interviene en la operación más grande que la mayoría de los colombianos hace en su vida: comprar, vender, arrendar o heredar un inmueble. Su trabajo no es llenar formatos, sino verificar que quien vende puede vender, que el bien está libre de gravámenes que sobrevivan a la venta, que el precio se pague contra la entrega de un título que efectivamente transfiera la propiedad y que el contrato prevea qué pasa si algo sale mal.",
          "La mayoría de los conflictos inmobiliarios no nacen de una estafa evidente, sino de detalles que nadie revisó: una sucesión que quedó a medias y dejó herederos sin firmar, un patrimonio de familia inembargable constituido sobre el predio, una hipoteca cancelada en la práctica pero no en el folio, un área construida que no coincide con la licencia, una servidumbre de tránsito a favor del vecino o un impuesto predial de tres años que la ley traslada al nuevo propietario.",
          "El costo de esa revisión es marginal frente al valor del negocio, y es la razón por la que un estudio de títulos serio se paga solo. En operaciones con crédito hipotecario el banco hace su propio estudio, pero lo hace para proteger su garantía, no para proteger al comprador: no le va a advertir que el apartamento tiene una obra sin licencia ni que el conjunto tiene un proceso de reparaciones locativas que le van a cobrar en cuotas extraordinarias.",
        ],
      },
      {
        titulo: "Comprar vivienda sin sorpresas: la secuencia correcta",
        parrafos: [
          "El orden importa. Primero se pide el certificado de tradición y libertad reciente y se lee completo, anotación por anotación, no solo la última. Ahí aparecen hipotecas, embargos, demandas registradas, afectaciones a vivienda familiar, patrimonio de familia, condiciones resolutorias, limitaciones de dominio y la cadena de propietarios anteriores. Un folio con muchas transferencias en poco tiempo o con una sucesión sin liquidar merece un análisis más profundo.",
          "Después viene la promesa de compraventa. Debe constar por escrito, identificar el inmueble por matrícula y linderos, fijar precio y forma de pago, señalar fecha, hora y notaría exactas para la escritura, precisar la fecha de entrega material y establecer arras o cláusula penal. Una promesa sin fecha determinada de notaría es, según reiterada jurisprudencia, un documento débil para exigir el cumplimiento.",
          "Luego la escritura pública ante notario, con el pago de los derechos notariales, la retención en la fuente y el impuesto de registro. Y finalmente el registro en la Oficina de Registro de Instrumentos Públicos: mientras la escritura no esté registrada, el comprador no es dueño frente a terceros y el vendedor todavía figura como titular. La entrega de las llaves no transfiere nada; lo que transfiere es el folio.",
          "Cuando se compra sobre planos o en proyecto, el análisis cambia: hay que revisar la licencia de construcción, la existencia del patrimonio autónomo o fiducia, el punto de equilibrio, la póliza de estabilidad de la obra y las condiciones de desistimiento. La entrega tardía y los cambios de especificaciones son las dos quejas más frecuentes frente a constructoras, y ambas se reclaman mejor cuando el contrato de vinculación lo previó.",
        ],
      },
      {
        titulo: "Arrendamiento de vivienda: reglas que casi nadie aplica bien",
        parrafos: [
          "La Ley 820 de 2003 fija un marco protector para el arrendatario de vivienda urbana que muchos contratos ignoran. El canon no puede exceder el 1% del valor comercial del inmueble; el reajuste anual no puede superar el IPC del año anterior y solo procede cumplido un año de ejecución; está prohibido exigir depósitos en dinero o cualquier caución real para garantizar el pago, aunque sí se admiten coarrendatarios, fiadores y pólizas de arrendamiento.",
          "El contrato de vivienda se entiende prorrogado automáticamente por periodos iguales si ninguna de las partes avisa. Para que el arrendador termine por vencimiento del término debe dar preaviso de tres meses con constancia de recibo e indemnizar en los casos que la ley exige; el arrendatario puede terminar dando preaviso de tres meses y pagando una indemnización equivalente a tres meses de canon, o sin indemnización cuando invoca las causales legales del artículo 24.",
          "Las causales del arrendador para terminar unilateralmente están tasadas: la no consignación del canon, el subarriendo o cesión no autorizada, el daño al inmueble, el uso distinto al pactado, la violación de las normas de propiedad horizontal y, con preaviso e indemnización, la necesidad de ocupar el inmueble o de demolerlo o repararlo. Inventar una causal distinta hace que la terminación no prospere.",
          "El arrendador que quiere recuperar el inmueble por mora tiene un camino corto, pero solo si el contrato y los pagos están documentados: canon, fecha de pago, forma de pago y recibos. Cuando el pago se hizo en efectivo sin recibos durante años, probar la mora se vuelve un problema del arrendador, no del arrendatario.",
        ],
      },
      {
        titulo: "Restitución de inmueble arrendado: cómo funciona el proceso",
        parrafos: [
          "La restitución es un proceso verbal sumario ante el juez civil municipal del lugar del inmueble. La demanda se presenta con el contrato, la prueba del incumplimiento y el certificado de tradición o la prueba de la calidad de arrendador. Si la causal es mora en el pago, opera una regla que cambia el equilibrio del proceso: el arrendatario no será oído hasta que demuestre haber pagado los cánones adeudados o los consigne a órdenes del juzgado.",
          "Además, el juez puede ordenar la práctica de la diligencia de entrega antes de la sentencia cuando el arrendatario no se opone válidamente. En la práctica, un proceso de restitución bien documentado se resuelve en cuestión de meses; uno con contrato verbal, pagos sin registro y causales mal invocadas puede extenderse un par de años.",
          "Cuando el inmueble es un local comercial, el análisis es distinto: el arrendatario que ocupó el local con el mismo establecimiento por dos años o más tiene derecho a la renovación del contrato salvo las excepciones del artículo 518 del Código de Comercio, y el desahucio debe darse con seis meses de anticipación. Confundir el régimen de vivienda con el comercial es un error que hace perder el caso antes de empezar.",
        ],
      },
      {
        titulo: "Propiedad horizontal: cuotas, asambleas y conflictos con la administración",
        parrafos: [
          "El certificado de deuda expedido por el administrador presta mérito ejecutivo, de modo que las cuotas de administración atrasadas se cobran directamente por proceso ejecutivo con medidas cautelares sobre el mismo inmueble. También se pueden imponer sanciones —publicación en cartelera, restricción del uso de zonas comunes no esenciales— siempre que el reglamento las contemple y se respete el debido proceso interno.",
          "Las decisiones de la asamblea se pueden impugnar ante el juez dentro de los dos meses siguientes a la reunión cuando se adoptaron sin el quórum requerido, con violación del reglamento o de la ley, o excediendo la competencia de la asamblea. Las obras que afectan bienes comunes esenciales o la estructura del edificio exigen mayorías calificadas del 70% de los coeficientes.",
          "Un frente frecuente y mal manejado son las filtraciones y humedades entre apartamentos: la responsabilidad depende de si el origen está en un bien privado o en uno común, y la prueba se construye con un peritaje técnico, no con fotos y mensajes en el grupo del conjunto.",
        ],
      },
      {
        titulo: "Errores caros que un abogado inmobiliario evita",
        parrafos: [
          "Pagar la totalidad del precio antes de la firma de la escritura y del registro. Firmar una promesa sin notaría, sin fecha y sin cláusula penal. Comprar a un solo heredero cuando la sucesión no está liquidada. Aceptar un inmueble con obras sin licencia y creer que después se legaliza fácil. No verificar el paz y salvo de administración, que en propiedad horizontal se traslada al adquirente. Arrendar sin contrato escrito por confianza y descubrirlo cuando hay que demandar.",
          "También es común subestimar los impuestos y costos de cierre: derechos notariales, impuesto de registro y beneficencia, retención en la fuente, comisión de intermediación, y el impuesto de ganancia ocasional del vendedor. Incluirlos desde la negociación evita que el negocio se caiga en la notaría por una diferencia que nadie presupuestó.",
          "Si el conflicto ya existe, todavía hay margen: la resolución del contrato por incumplimiento, la acción de cumplimiento con indemnización, el proceso de pertenencia cuando hay posesión prolongada, la nulidad de la escritura por vicios del consentimiento y la reivindicación del propietario despojado son remedios con requisitos y plazos propios que conviene evaluar rápido.",
        ],
      },
    ],
  },

  /* ─────────────────────────── PENSIONES ─────────────────────────── */
  pensiones: {
    subareas: {
      "pension-de-vejez":
        "En el régimen de prima media administrado por Colpensiones se exige cumplir la edad (57 años las mujeres, 62 los hombres) y acreditar las semanas mínimas de cotización. En el régimen de ahorro individual se pensiona quien reúne el capital suficiente para financiar una mesada, sin requisito de edad. Elegir mal el régimen puede costar millones al momento del reconocimiento.",
      "pension-de-invalidez":
        "Se reconoce a quien pierde el 50% o más de su capacidad laboral por causa de origen común y cumple las semanas exigidas en los tres años anteriores a la estructuración. La calificación la hacen la junta regional y, en apelación, la junta nacional. Cuando el origen es un accidente o una enfermedad del trabajo, la prestación la asume la ARL y el análisis se hace en el pilar de riesgos laborales.",
      "pension-de-sobrevivientes":
        "Al fallecer un pensionado o un afiliado que cotizó 50 semanas en los últimos 3 años, tienen derecho el cónyuge o compañero permanente con convivencia acreditada, los hijos menores o estudiantes hasta los 25 años, los hijos inválidos y, en subsidio, los padres que dependían económicamente. Los conflictos entre cónyuge y compañera permanente son la controversia más frecuente y se resuelven probando convivencia.",
      "reliquidacion-pensional":
        "Procede cuando la entidad calculó el ingreso base de liquidación con un periodo o unos factores equivocados: dejó por fuera primas, bonificaciones o horas extras que sí eran cotizables, aplicó un régimen que no correspondía o desconoció el régimen de transición. La diferencia mensual se proyecta de por vida, por eso una reliquidación bien planteada suele ser la reclamación más rentable.",
      "traslado-de-regimen":
        "Muchas personas fueron trasladadas a un fondo privado sin información suficiente sobre las consecuencias. La jurisprudencia de la Corte Suprema admite la nulidad del traslado por falta de información clara y completa, con el retorno a Colpensiones y el traslado del saldo. El análisis exige comparar la mesada esperada en cada régimen antes de demandar.",
    },
    secciones: [
      {
        titulo: "Cuándo se necesita un abogado de pensiones",
        parrafos: [
          "Un abogado de pensiones se vuelve necesario cuando el sistema dice que no: negaron la pensión de vejez por semanas faltantes que sí están cotizadas, la historia laboral tiene periodos en mora del empleador que la entidad descuenta, la junta de calificación fijó un porcentaje de pérdida de capacidad por debajo del 50% o la mesada se liquidó con un ingreso base que no refleja lo que se cotizó.",
          "También hace falta antes de decidir. Trasladarse de régimen, seguir cotizando dos años más, aceptar una indemnización sustitutiva o pedir la devolución de saldos son decisiones irreversibles en la práctica. Comparar escenarios con la historia laboral en la mano —semanas efectivas, ingreso base, régimen de transición, bono pensional— evita perder un derecho que ya estaba casi consolidado.",
          "El sistema pensional colombiano combina la Ley 100 de 1993, el Acto Legislativo 01 de 2005, el régimen de transición y una jurisprudencia extensa de la Corte Constitucional y la Corte Suprema. Es un terreno donde el resultado depende menos de la elocuencia y más de reconstruir bien la historia laboral con documentos.",
        ],
      },
      {
        titulo: "La historia laboral: el documento que define el caso",
        parrafos: [
          "Casi todos los casos pensionales se ganan o se pierden en la historia laboral. Los errores típicos son periodos no reportados por empleadores antiguos, semanas cotizadas a cajas o entidades hoy liquidadas, aportes en mora, novedades mal cargadas, ingresos base distintos a los realmente devengados y tiempos públicos sin certificar en el formato CETIL.",
          "La corrección se pide por derecho de petición ante la administradora con la prueba documental: certificados laborales, contratos, desprendibles de pago, planillas y certificaciones de las entidades públicas donde se trabajó. Cuando el empleador no pagó los aportes, la mora no puede oponerse al trabajador: la entidad debía cobrarlos y su omisión no puede trasladarse a quien cumplió con su parte, criterio reiterado por las altas cortes.",
          "Reunir esa prueba toma tiempo, y por eso conviene empezar años antes de llegar a la edad de pensión, no el mes anterior. Un caso que se pudo resolver con una petición bien sustentada termina en un proceso ordinario laboral de varios años cuando se aborda tarde.",
        ],
      },
      {
        titulo: "Cómo se reclama: petición, recursos y demanda",
        parrafos: [
          "La ruta empieza con la solicitud de reconocimiento ante Colpensiones o el fondo privado. La entidad tiene términos legales para responder y, ante una negativa, proceden los recursos de reposición y apelación dentro de los diez días siguientes a la notificación. Agotada la vía administrativa, el camino es la demanda ordinaria laboral ante el juez del circuito, o el proceso ante la jurisdicción contencioso-administrativa cuando se trata de regímenes especiales públicos.",
          "La tutela procede de manera excepcional, cuando la falta de reconocimiento amenaza el mínimo vital de una persona de la tercera edad o en situación de discapacidad y el medio ordinario resulta ineficaz por la demora. No es la vía general, pero en casos de sujetos de especial protección constitucional resuelve en días lo que un proceso ordinario tarda años.",
          "Cuando la controversia es sobre el porcentaje de pérdida de capacidad laboral de origen común, la discusión pasa por la junta regional de calificación de invalidez y, en apelación, por la junta nacional, con términos cortos para recurrir. Si el origen es laboral, la prestación y el dictamen corresponden al sistema de riesgos laborales y se tramitan con la ARL.",
        ],
      },
      {
        titulo: "Régimen de transición, traslados y decisiones estratégicas",
        parrafos: [
          "El régimen de transición del artículo 36 de la Ley 100 permitió a quienes tenían determinada edad o tiempo de servicios al 1° de abril de 1994 pensionarse con las reglas anteriores, más favorables en edad, semanas y tasa de reemplazo. El Acto Legislativo 01 de 2005 lo limitó en el tiempo, pero todavía hoy hay casos vivos donde la aplicación correcta del régimen anterior significa una diferencia sustancial en la mesada.",
          "El traslado de un fondo privado a Colpensiones o viceversa está restringido cuando faltan menos de diez años para cumplir la edad de pensión. Fuera de esa restricción, la vía es la nulidad del traslado por falta de información: la jurisprudencia exige que la administradora demuestre que informó de manera clara, cierta, comprensible y oportuna las consecuencias del cambio, y esa carga probatoria pesa sobre el fondo, no sobre el afiliado.",
          "Antes de iniciar cualquier acción conviene proyectar la mesada en ambos escenarios con el ingreso base de liquidación real. Sin ese cálculo, la demanda puede ganarse en derecho y perder en dinero.",
        ],
      },
      {
        titulo: "Qué se puede recuperar hacia atrás",
        parrafos: [
          "El derecho a la pensión es imprescriptible: se puede reclamar en cualquier momento una vez cumplidos los requisitos. Lo que sí prescribe son las mesadas ya causadas, que solo pueden cobrarse por los tres años anteriores a la reclamación. Por eso una petición escrita bien radicada tiene además el efecto de interrumpir ese plazo y proteger los retroactivos.",
          "Junto al retroactivo pueden reclamarse los intereses moratorios del artículo 141 de la Ley 100 cuando la entidad se demoró injustificadamente, y la indexación de las sumas adeudadas. En reliquidaciones, la diferencia mensual se paga hacia adelante y hacia atrás dentro del límite de prescripción.",
        ],
      },
    ],
  },

  /* ─────────────────────────── TRÁNSITO ─────────────────────────── */
  transito: {
    subareas: {
      "indemnizacion-por-accidente":
        "Quien causa un accidente responde por el daño emergente (reparaciones, gastos médicos, transporte), el lucro cesante (lo que se dejó de ganar durante la incapacidad y hacia el futuro si quedaron secuelas) y los perjuicios extrapatrimoniales como el daño moral y el daño a la vida de relación. La reclamación se dirige al conductor, al propietario del vehículo y a la aseguradora de responsabilidad civil.",
      comparendos:
        "El comparendo se puede impugnar en la audiencia pública ante la autoridad de tránsito dentro de los términos del Código Nacional de Tránsito. Los argumentos que funcionan son técnicos: falta de notificación en debida forma, señalización ausente o contradictoria, foto sin identificación clara de la placa, caducidad de la facultad sancionatoria o error en el agente que impuso la orden.",
      "reclamacion-soat":
        "El SOAT ampara a todas las víctimas de un accidente de tránsito con independencia de quién tuvo la culpa: cubre gastos médicos hasta un tope en salarios mínimos, indemnización por muerte, incapacidad permanente y gastos funerarios y de transporte. Se reclama a la aseguradora del vehículo o, si el vehículo es fantasma o no está asegurado, ante la ADRES.",
      "lesiones-personales":
        "Si hay lesionados, además de la reclamación civil corre un proceso penal por lesiones personales culposas, agravado cuando el conductor iba embriagado, huyó del lugar o carecía de licencia. La víctima puede constituirse como parte y reclamar la reparación integral dentro del proceso penal, y el conductor necesita defensa desde la primera audiencia.",
      "danos-al-vehiculo":
        "Cuando solo hay daños materiales, la vía natural es el acuerdo con la aseguradora contra el informe policial de accidente de tránsito, las fotografías y el avalúo del daño. Si la aseguradora ofrece por debajo del valor real o niega la cobertura, procede la reclamación formal y luego la demanda, con el peritaje de reparación como prueba central.",
    },
    secciones: [
      {
        titulo: "Qué hacer en las primeras horas después de un accidente",
        parrafos: [
          "Lo que se hace en el sitio determina lo que se puede probar después. Si hay heridos, la prioridad es la atención médica y llamar a la autoridad de tránsito para que levante el informe policial de accidente, documento que después sirve como prueba central de la mecánica del choque. Mover los vehículos antes de que llegue la autoridad, salvo cuando obstruyen gravemente la vía, borra evidencia que luego nadie puede reconstruir.",
          "Conviene tomar fotografías amplias y de detalle: posición final de los vehículos, huellas de frenada, señalización, estado de la vía, daños en cada carro y placas. También registrar nombre, cédula, teléfono, licencia y aseguradora del otro conductor, y datos de testigos presenciales. Un testigo identificado el mismo día vale mucho más que diez versiones recordadas meses después.",
          "Si hubo lesiones, es indispensable la valoración médica inmediata aunque el golpe parezca menor. Muchas indemnizaciones se caen porque la víctima consultó una semana después y la aseguradora alega que la lesión no proviene del accidente. La historia clínica del mismo día es la prueba que cierra esa discusión.",
        ],
      },
      {
        titulo: "SOAT, póliza de responsabilidad civil y responsabilidad del causante",
        parrafos: [
          "El sistema colombiano funciona en capas. La primera es el SOAT, obligatorio para todo vehículo, que cubre a las víctimas sin discutir culpa: atención médica y quirúrgica hasta un tope en salarios mínimos, indemnización por incapacidad permanente, por muerte, gastos funerarios y de transporte al centro asistencial. Se reclama ante la aseguradora del vehículo involucrado y, cuando el vehículo huyó o no tenía póliza, ante la ADRES.",
          "La segunda capa es la póliza voluntaria de responsabilidad civil extracontractual, que cubre lo que el SOAT no alcanza: daños al otro vehículo, lucro cesante y perjuicios morales, hasta los límites asegurados. La tercera es el patrimonio del responsable: el conductor y, solidariamente, el propietario del vehículo y la empresa afiliadora en el transporte público responden por lo que exceda las coberturas.",
          "La responsabilidad civil por accidentes de tránsito en Colombia se analiza bajo el régimen de actividades peligrosas del artículo 2356 del Código Civil, donde la culpa se presume y quien causó el daño debe demostrar una causa extraña —fuerza mayor, hecho exclusivo de la víctima o de un tercero— para exonerarse. Esa presunción es la principal ventaja de la víctima.",
        ],
      },
      {
        titulo: "Cómo se calcula lo que te deben pagar",
        parrafos: [
          "La indemnización no es una cifra de negociación caprichosa: se compone de rubros que se prueban uno por uno. El daño emergente reúne facturas de reparación, gastos médicos no cubiertos, medicamentos, terapias, transporte y el valor del vehículo cuando la pérdida es total. El lucro cesante se calcula con el ingreso acreditado y el tiempo de incapacidad, y se proyecta hacia el futuro con las tablas de vida probable cuando quedan secuelas permanentes.",
          "Los perjuicios extrapatrimoniales —daño moral y daño a la vida de relación— se reconocen en salarios mínimos según topes jurisprudenciales del Consejo de Estado y de la Corte Suprema, y aumentan con la gravedad de la lesión y el vínculo con la víctima en caso de muerte. Documentar el impacto real, con dictámenes y testimonios, es lo que separa una tasación mínima de una razonable.",
          "Las aseguradoras suelen abrir con una oferta baja que cubre la reparación material y omite lucro cesante y perjuicios morales. Aceptarla implica firmar un finiquito que cierra cualquier reclamación posterior. Antes de firmar cualquier transacción conviene tener el cálculo completo sobre la mesa.",
        ],
      },
      {
        titulo: "Comparendos, licencia y consecuencias administrativas",
        parrafos: [
          "El comparendo es una orden de comparecer, no una sanción en firme. Se puede impugnar en audiencia pública ante el inspector de tránsito, con derecho a pruebas y a recursos. Pagar dentro de los primeros días otorga descuentos, pero también implica aceptar la responsabilidad y acumular puntos y antecedentes en el RUNT, algo relevante para conductores profesionales cuya licencia es su herramienta de trabajo.",
          "Las sanciones más severas —conducir en estado de embriaguez, sin licencia o huir del lugar— acarrean suspensión o cancelación de la licencia, inmovilización del vehículo y multas altas, y agravan la responsabilidad penal cuando hubo lesionados o muertos. En esos casos la defensa administrativa y la penal deben coordinarse, porque lo que se admita en una repercute en la otra.",
          "También existe la caducidad: la autoridad tiene términos para notificar y para resolver, y su incumplimiento puede llevar a la prescripción de la sanción. Revisar fechas de notificación es lo primero que hace un abogado de tránsito con un comparendo en la mano.",
        ],
      },
      {
        titulo: "Cuándo el accidente se vuelve un caso penal",
        parrafos: [
          "Si hay lesionados o fallecidos, además de la reclamación económica se abre una investigación por lesiones personales culposas u homicidio culposo. La víctima puede participar como parte y reclamar reparación integral; el conductor necesita defensa técnica desde la audiencia de imputación, porque una condena trae antecedentes, suspensión de la licencia y responsabilidad civil derivada.",
          "En estos casos la conciliación tiene un papel importante: en lesiones culposas es un delito querellable y conciliable, y un acuerdo que repare de forma real a la víctima extingue la acción penal. Negociar sin asesoría suele terminar en acuerdos que se incumplen o en montos que no cubren el tratamiento posterior.",
        ],
      },
    ],
  },

  /* ─────────────────────────── INSOLVENCIA ─────────────────────────── */
  insolvencia: {
    subareas: {
      "insolvencia-persona-natural":
        "Es el procedimiento del Código General del Proceso para la persona natural no comerciante que tiene dos o más obligaciones en mora por más de 90 días, o dos o más procesos ejecutivos en su contra, siempre que el valor de esas deudas represente al menos el 50% del total del pasivo. Se tramita ante un centro de conciliación o notaría y su efecto inmediato es la suspensión de los procesos de cobro.",
      "levantamiento-de-embargos":
        "Con la aceptación de la solicitud de insolvencia se suspenden los procesos ejecutivos y se levantan las medidas cautelares, salvo las que garantizan obligaciones de alimentos. También hay límites permanentes: el salario es inembargable hasta el mínimo legal y por encima de eso solo en la quinta parte del excedente, con excepciones para cooperativas y alimentos.",
      "reportes-centrales-riesgo":
        "El dato negativo en Datacrédito, TransUnion o Cifin no se borra pagando: permanece el doble del tiempo de la mora, con un máximo de cuatro años contados desde el pago. Lo que sí se puede exigir es la actualización del reporte, la corrección de información inexacta y la eliminación del dato cuando la deuda prescribió o nunca existió, por vía de reclamo y luego tutela de habeas data.",
      "acuerdos-de-pago":
        "El acuerdo de pago dentro de la insolvencia se negocia con todos los acreedores en una misma audiencia, con plazos, tasas y garantías reales, y una vez aprobado obliga incluso a quienes votaron en contra. Fuera del procedimiento también se pueden negociar reestructuraciones directas, pero sin la protección legal que suspende los embargos.",
      "cobro-juridico":
        "Cuando el banco entrega la cartera a un abogado externo empiezan las llamadas, los reportes y la demanda ejecutiva. En esa etapa todavía hay margen: revisar la liquidación del crédito, discutir intereses por encima de la tasa máxima legal, alegar la prescripción de la acción cambiaria y exigir que los cobros respeten los límites de la Ley 1266 sobre acoso al deudor.",
    },
    secciones: [
      {
        titulo: "Qué es la insolvencia de persona natural y para qué sirve",
        parrafos: [
          "La insolvencia de persona natural no comerciante es un procedimiento legal, no un servicio de cobranza ni una negociación informal. Está regulada en los artículos 531 y siguientes del Código General del Proceso y permite a una persona sobreendeudada sentar a todos sus acreedores en una misma mesa, con un conciliador designado, para negociar un acuerdo único de pago que reemplaza todas las obligaciones anteriores.",
          "Su efecto más valioso ocurre desde la aceptación de la solicitud: se suspenden los procesos ejecutivos en curso, se levantan los embargos y se detienen los intereses de mora en los términos del acuerdo. Para quien tiene el salario embargado o la cuenta bloqueada, eso significa recuperar el flujo de caja mientras se negocia, algo que ninguna renegociación directa con los bancos garantiza.",
          "No es un borrón y cuenta nueva. La deuda no desaparece: se reorganiza en cuotas viables según la capacidad real de pago. Y si el acuerdo fracasa, el procedimiento deriva en liquidación patrimonial, donde se realizan los bienes para pagar a los acreedores según su orden de prelación.",
        ],
      },
      {
        titulo: "Requisitos: quién puede entrar y quién no",
        parrafos: [
          "Se exige ser persona natural no comerciante, estar en cesación de pagos —dos o más obligaciones en mora por más de noventa días, o dos o más procesos ejecutivos o de jurisdicción coactiva en curso— y que esas deudas representen al menos el 50% del pasivo total. También hay que presentar la relación completa y veraz de acreedores, bienes, procesos, ingresos y egresos.",
          "La ocultación de bienes o de acreedores es la principal causa de fracaso: descubierta, el conciliador puede dar por terminado el trámite y el deudor pierde la protección obtenida. Lo mismo ocurre con el incumplimiento de las cuotas del acuerdo, que habilita a los acreedores a reactivar el cobro.",
          "Quienes son comerciantes formales no van por esta vía sino por el régimen de insolvencia empresarial de la Ley 1116 de 2006, con reorganización o liquidación judicial ante la Superintendencia de Sociedades. Definir bien la calidad del deudor es el primer paso, porque escoger el procedimiento equivocado hace perder meses.",
        ],
      },
      {
        titulo: "Embargos: qué pueden y qué no pueden tocar",
        parrafos: [
          "El salario mínimo legal es inembargable y del excedente solo puede embargarse la quinta parte, salvo cuando el acreedor es una cooperativa o cuando se trata de obligaciones alimentarias, casos en los que el límite llega al 50%. La misma regla protege las mesadas pensionales y los depósitos que corresponden a salario dentro de la cuenta bancaria, aunque en la práctica el banco bloquea primero y hay que pedir el levantamiento con prueba del origen de los recursos.",
          "También son inembargables el patrimonio de familia inembargable y la vivienda afectada a vivienda familiar frente a determinados acreedores, los bienes de uso personal indispensables y, en general, lo que la ley excluye expresamente. Alegar bien esas exclusiones puede resolver una situación urgente en días sin necesidad de entrar en insolvencia.",
          "Cuando el embargo ya está decretado, el camino es el incidente o la solicitud de levantamiento en el mismo proceso ejecutivo, con prueba documental. Y si el proceso ejecutivo se apoya en un título prescrito o en una liquidación con intereses por encima de la tasa máxima legal certificada por la Superintendencia Financiera, esa defensa se plantea con las excepciones de mérito.",
        ],
      },
      {
        titulo: "Centrales de riesgo y habeas data: qué se puede exigir",
        parrafos: [
          "La Ley 1266 de 2008 no prohíbe el reporte negativo: lo regula. El dato permanece por el doble del tiempo de la mora con un techo de cuatro años desde el pago, y antes de reportar por primera vez la entidad debe comunicarlo al titular con veinte días de antelación para que pueda controvertirlo. Reportar sin ese aviso previo es una vulneración que se corrige por reclamo y, si no responden, por acción de tutela.",
          "Lo que sí se puede exigir siempre es la veracidad: si la deuda ya se pagó, si nunca existió, si corresponde a una suplantación de identidad o si el monto está inflado, el titular puede presentar reclamo ante el operador y ante la fuente, quienes deben resolver en términos cortos y dejar el dato en discusión mientras se decide.",
          "Promesas de 'borrar Datacrédito' pagando una tarifa suelen ser fraudes. Lo que existe es el trámite legal de actualización, corrección o eliminación cuando hay una causa jurídica, y la caducidad del dato negativo por el paso del tiempo.",
        ],
      },
      {
        titulo: "Cómo se prepara un caso de insolvencia",
        parrafos: [
          "El expediente se arma con la lista completa de acreedores con montos, fechas de mora y garantías; los certificados de tradición de los bienes; el extracto de las centrales de riesgo; los desprendibles de ingresos; el presupuesto mensual de gastos y las notificaciones de los procesos ejecutivos existentes. Con eso se construye una propuesta de pago realista, que es lo que decide la votación de los acreedores.",
          "Una propuesta demasiado optimista se incumple y hace perder la protección; una demasiado baja no obtiene los votos necesarios. Ese equilibrio es el verdadero trabajo del abogado en insolvencia, más allá de la radicación del formulario ante el centro de conciliación.",
        ],
      },
    ],
  },

  /* ────────────────── PROPIEDAD INTELECTUAL ────────────────── */
  "propiedad-intelectual": {
    subareas: {
      "registro-de-marca":
        "El registro se solicita ante la Superintendencia de Industria y Comercio indicando el signo, el titular y las clases de la Clasificación Internacional de Niza que cubren los productos o servicios. Publicada la solicitud en la Gaceta de la Propiedad Industrial corren 30 días hábiles para oposiciones; sin oposición, el trámite suele resolverse en pocos meses y concede un derecho exclusivo por 10 años renovables.",
      "oposiciones-y-negativas":
        "La SIC niega registros por semejanza con marcas anteriores, por ser signos descriptivos o genéricos, por engañosos o por afectar derechos de terceros. Frente a una oposición hay 30 días hábiles para contestar con argumentos de coexistencia, distintividad adquirida, limitación de clases o acuerdos con el opositor; frente a la negativa proceden los recursos y, en última instancia, la demanda ante el Consejo de Estado.",
      "derechos-de-autor":
        "El derecho de autor protege obras literarias, artísticas, audiovisuales, musicales y el software desde su creación, sin necesidad de registro; el registro ante la Dirección Nacional de Derecho de Autor solo sirve como prueba. Lo decisivo en la práctica es el contrato: sin cesión escrita de derechos patrimoniales, quien paga por un desarrollo o un diseño no necesariamente queda como titular.",
      "competencia-desleal":
        "Usar el nombre, el logo, el empaque o la publicidad de otro para aprovechar su reputación configura infracción marcaria y actos de competencia desleal de la Ley 256 de 1996: desviación de clientela, confusión, imitación y explotación de la reputación ajena. La SIC, con funciones jurisdiccionales, puede ordenar el cese de la conducta, medidas cautelares e indemnización.",
      "licencias-y-cesion":
        "Licenciar es autorizar el uso conservando la titularidad; ceder es transferirla. Ambos contratos deben precisar territorio, plazo, clases y productos cubiertos, exclusividad, control de calidad, regalías y causales de terminación, e inscribirse ante la SIC para ser oponibles a terceros. En franquicias, la licencia de marca es el corazón del negocio.",
      "patentes-y-disenos":
        "La patente de invención exige novedad, nivel inventivo y aplicación industrial, y otorga 20 años de exclusividad; el modelo de utilidad, 10 años. El diseño industrial protege la apariencia por 10 años. Divulgar la invención antes de radicar la solicitud destruye la novedad, por eso la asesoría debe llegar antes del lanzamiento, no después.",
    },
    secciones: [
      {
        titulo: "Por qué el registro de marca en Colombia decide quién es el dueño del nombre",
        parrafos: [
          "En Colombia el derecho exclusivo sobre una marca no nace del uso ni de la matrícula mercantil: nace del registro ante la Superintendencia de Industria y Comercio. Tener el nombre en la cámara de comercio, el dominio de internet y las redes sociales no impide que otro registre el signo y después exija que se deje de usar. Esa confusión es la causa más frecuente de pérdidas evitables en negocios que ya llevan años operando.",
          "El régimen aplicable es la Decisión 486 de la Comunidad Andina, complementada por el Código de Comercio y por la doctrina de la SIC. El registro concede el uso exclusivo por diez años renovables indefinidamente, la facultad de oponerse a solicitudes de terceros, de perseguir la infracción y de licenciar o vender la marca como un activo con valor propio.",
          "El costo del registro es una tasa oficial por clase más los honorarios de la solicitud. El costo de no registrar es cambiar de nombre después de haber invertido en marca, empaques, señalización y posicionamiento, o pagar por comprar el registro a quien se adelantó.",
        ],
      },
      {
        titulo: "El paso previo que casi nadie hace: la búsqueda de antecedentes",
        parrafos: [
          "Antes de radicar conviene buscar antecedentes en la base de datos de signos distintivos de la SIC y evaluar riesgos de confusión con marcas idénticas o semejantes en las mismas clases o en clases conexas. El examen no es solo literal: se compara el aspecto visual, la fonética, la ideología del signo y la relación entre los productos o servicios.",
          "También hay causales absolutas que hunden una solicitud sin que nadie se oponga: signos genéricos o descriptivos del producto, expresiones de uso común, términos que engañan sobre el origen o la calidad, y signos contrarios a la ley o a la moral. Una marca demasiado descriptiva puede parecer buena para el marketing y ser irregistrable en derecho.",
          "Definir bien las clases de Niza es la otra decisión estratégica. Registrar de menos deja el negocio expuesto en las actividades hacia las que va a crecer; registrar de más multiplica las tasas oficiales sin protección útil. La regla práctica es cubrir la actividad actual y las de expansión previsible en los próximos años.",
        ],
      },
      {
        titulo: "Cómo se defiende una marca cuando alguien la usa sin permiso",
        parrafos: [
          "El primer paso suele ser un requerimiento formal de cese de uso, con la prueba del registro y de la infracción. Muchos casos terminan ahí, porque el infractor no quiere litigar. Si no cesa, la vía es la acción por infracción de derechos de propiedad industrial ante la SIC en ejercicio de funciones jurisdiccionales o ante los jueces civiles, con posibilidad de medidas cautelares para retirar productos del mercado.",
          "En paralelo se pueden usar los canales de denuncia de plataformas: retiro de publicaciones en marketplaces, reclamaciones en redes sociales y disputas de nombres de dominio. Son rápidos y baratos, y con el certificado de registro en mano suelen resolverse en días.",
          "También existe el frente inverso: recibir una carta acusando infracción. Antes de cambiar el nombre conviene revisar si el registro invocado está vigente, si cubre realmente las clases del negocio y si es atacable por falta de uso —la marca no usada durante tres años consecutivos puede cancelarse— o por haberse registrado de mala fe.",
        ],
      },
      {
        titulo: "Software, contenidos y contratos: la parte que se olvida",
        parrafos: [
          "El derecho de autor protege el código fuente, los cursos, los textos, las fotografías, los videos y los diseños desde su creación. Pero la titularidad de los derechos patrimoniales se mueve por contrato: sin una cláusula de cesión expresa y por escrito, el desarrollador o el diseñador conserva derechos sobre lo que la empresa cree suyo. En obras por encargo y en contratos laborales las reglas son distintas y conviene dejarlas explícitas.",
          "Para empresas de tecnología, los tres documentos mínimos son el contrato de desarrollo con cesión de derechos, el acuerdo de confidencialidad y los términos de uso y licencia frente al cliente final. Para creadores de contenido, el registro de la obra ante la Dirección Nacional de Derecho de Autor y contratos de licencia claros con marcas y plataformas.",
          "Los secretos empresariales —fórmulas, listas de clientes, procesos— no se registran: se protegen manteniéndolos secretos con medidas verificables y cláusulas contractuales. Cuando se filtran, la acción es por competencia desleal y su éxito depende de poder demostrar que existían esas medidas.",
        ],
      },
      {
        titulo: "Mantener la marca viva: renovación, uso y vigilancia",
        parrafos: [
          "El registro no es eterno por inercia. Debe renovarse dentro de los seis meses anteriores al vencimiento del periodo de diez años, con un plazo de gracia de seis meses posteriores. Dejar vencer un registro con años de posicionamiento y tener que solicitarlo de nuevo expone la marca a que un tercero se adelante.",
          "Además hay que usarla de forma real y efectiva en el mercado para los productos y servicios registrados, porque la falta de uso durante tres años habilita a cualquier interesado a pedir la cancelación. Y conviene vigilar la Gaceta de la Propiedad Industrial para oponerse a solicitudes de signos parecidos dentro de los 30 días hábiles, que es la defensa más económica que existe.",
        ],
      },
    ],
  },
  /* ─────────────────────────── MIGRATORIO ─────────────────────────── */
  migratorio: {
    subareas: {
      visas:
        "Las visas colombianas se agrupan en tres tipos: visitante (V), migrante (M) y residente (R), cada una con subcategorías y requisitos propios de solvencia, afiliación a salud, apostilla y traducción oficial. La solicitud es en línea ante la Cancillería y el error más frecuente es escoger la categoría equivocada: pedir una V cuando el propósito era permanecer o una M sin acreditar el vínculo genera negativas que después pesan en el historial.",
      "cedula-de-extranjeria":
        "Aprobada una visa M o R, el extranjero debe registrarla ante Migración Colombia y tramitar la cédula de extranjería dentro de los 15 días hábiles siguientes al ingreso o a la expedición. Es el documento de identificación en el país: sin ella no se abre cuenta bancaria, no se firma contrato laboral formal ni se afilia a seguridad social. Incumplir el término genera sanción económica.",
      nacionalizacion:
        "La nacionalidad por adopción se solicita ante la Cancillería después de acreditar domicilio continuo con visa de residente —cinco años en general, dos si es cónyuge de colombiano o nacional de país latinoamericano o del Caribe—, y exige examen de historia, geografía, constitución y español, salvo exoneraciones. Al final hay acta de juramento y cédula colombiana.",
      "sanciones-migratorias":
        "Migración Colombia puede multar, deportar o expulsar por permanencia irregular, exceder el tiempo del permiso, trabajar sin autorización, entregar información falsa o incumplir la normativa migratoria. Toda actuación es un procedimiento administrativo sancionatorio: hay derecho a ser oído, a aportar pruebas y a interponer recursos, y una deportación deja una prohibición de ingreso que conviene evitar defendiéndose a tiempo.",
      "permisos-de-permanencia":
        "Junto a las visas existen los permisos que administra Migración Colombia: PIP y PTP para visitantes, salvoconductos, prórrogas de permanencia y el Estatuto Temporal de Protección para migrantes venezolanos con su PPT. Son herramientas de regularización distintas de la visa y con reglas de vigencia y renovación propias, que muchas veces resuelven el corto plazo mientras se estructura la visa correcta.",
    },
    secciones: [
      {
        titulo: "Qué hace un abogado migratorio en Colombia",
        parrafos: [
          "Un abogado migratorio en Colombia trabaja sobre dos autoridades distintas que suelen confundirse. La Cancillería, a través de su Grupo Interno de Trabajo de Visas e Inmigración, decide sobre las visas y la nacionalidad. Migración Colombia controla el ingreso, la permanencia y la salida, expide la cédula de extranjería y los permisos, y ejerce la función sancionatoria. Radicar ante la entidad equivocada es una de las causas más comunes de trámites perdidos.",
          "El marco normativo principal es el Decreto 1067 de 2015 y la Resolución 5477 de 2022, que reorganizó las categorías de visas. A eso se suman las normas del Estatuto Temporal de Protección para migrantes venezolanos y una capa importante de jurisprudencia constitucional sobre unidad familiar, derecho al debido proceso en deportaciones y acceso a salud y educación de migrantes.",
          "El acompañamiento profesional aporta sobre todo en tres puntos: elegir la categoría correcta según el propósito real de la estadía, armar el expediente documental con apostilla y traducción oficial donde se exige, y responder los requerimientos dentro de los términos, porque una respuesta tardía se entiende como desistimiento y obliga a empezar de cero pagando otra vez el estudio.",
        ],
      },
      {
        titulo: "Elegir bien la visa: visitante, migrante o residente",
        parrafos: [
          "La visa de visitante (V) es para quien viene por un propósito temporal y sin ánimo de establecerse: turismo, negocios, tratamiento médico, un evento, un contrato de corta duración o trabajo remoto para empresa extranjera. La visa de migrante (M) es para quien sí busca establecerse por un vínculo: cónyuge o compañero permanente de colombiano, padre o hijo de nacional, trabajador con contrato en Colombia, socio o inversionista, estudiante regular, pensionado o refugiado. La visa de residente (R) es el paso siguiente, para quien acumuló el tiempo de permanencia con visa M o hizo una inversión de monto alto.",
          "Cada categoría define lo que la persona puede hacer. Una visa V de negocios no habilita a firmar contrato laboral en Colombia; una M de trabajo queda atada al empleador que la respaldó, de modo que un cambio de empresa exige nueva visa; una M por matrimonio depende de la subsistencia del vínculo. Ignorar esos límites es lo que después deriva en sanción por actividad no autorizada.",
          "El tiempo con visa M cuenta para la R y el tiempo con R cuenta para la nacionalidad, siempre que la permanencia sea continua y no se pierda el domicilio por ausencias prolongadas. Por eso las decisiones migratorias conviene planearlas como una secuencia de varios años y no como trámites aislados.",
        ],
      },
      {
        titulo: "Documentos, apostilla y motivos frecuentes de negativa",
        parrafos: [
          "Los documentos públicos extranjeros deben venir apostillados —o legalizados si el país no es parte del Convenio de La Haya— y traducidos por traductor oficial cuando no están en español. Faltar a ese requisito es la causa de rechazo más simple y más común. A eso se suman la solvencia económica exigida en salarios mínimos según la categoría, la afiliación a un sistema de salud con cobertura en Colombia y los antecedentes.",
          "Las negativas suelen apoyarse en tres motivos: inconsistencia entre el propósito declarado y los documentos, insuficiencia de solvencia y dudas sobre la autenticidad del vínculo o de la relación laboral. Frente a una negativa se puede pedir reconsideración y volver a solicitar corrigiendo el expediente, pero acumular negativas debilita solicitudes futuras, por lo que conviene preparar bien la primera.",
          "En trámites de vínculo familiar la prueba se construye con más que un registro civil: fotografías, comunicaciones, comprobantes de convivencia, declaraciones extrajuicio y evidencia de vida en común. En trámites laborales, con el contrato, el certificado de existencia del empleador, la planilla de seguridad social y la justificación del cargo.",
        ],
      },
      {
        titulo: "Defensa frente a sanciones, deportación y expulsión",
        parrafos: [
          "La permanencia irregular, exceder el tiempo autorizado, trabajar sin permiso o suministrar información falsa pueden derivar en multa, deportación o expulsión. Cada una tiene consecuencias distintas: la deportación implica prohibición de ingreso por un periodo determinado y la expulsión, la más grave, puede llegar a diez años o más.",
          "Estas decisiones son actos administrativos y están sometidas al debido proceso: la persona debe ser oída, puede aportar pruebas, tiene derecho a traductor y puede interponer los recursos que proceden. Cuando hay hijos colombianos, cónyuge nacional o arraigo demostrable, la jurisprudencia constitucional exige ponderar la unidad familiar y el interés superior del menor antes de ordenar la salida.",
          "Actuar rápido cambia el resultado. Regularizar antes de que se abra la investigación, pagar la multa cuando corresponde y acreditar el arraigo suele evitar una anotación que después bloquea cualquier visa. Esperar la citación es la peor estrategia.",
        ],
      },
      {
        titulo: "Trabajar, contratar y montar empresa como extranjero",
        parrafos: [
          "Un extranjero puede ser socio o representante legal de una sociedad colombiana, pero para trabajar necesita la visa que lo autorice. El empleador tiene deberes propios: reportar la vinculación a Migración Colombia dentro de los términos legales, afiliar a seguridad social y cumplir la proporción de trabajadores nacionales cuando aplica. El incumplimiento genera multas para la empresa, no solo para la persona.",
          "En el otro extremo está el colombiano que contrata extranjeros o la empresa que trae personal técnico por temporadas: allí conviene estructurar visas V de servicios o M de trabajo según la duración real, y no improvisar con permisos de visitante que no habilitan la actividad.",
        ],
      },
    ],
  },
  /* ─────────────────────────── SALUD ─────────────────────────── */
  salud: {
    subareas: {
      "tutela-en-salud":
        "La tutela protege el derecho fundamental a la salud cuando la EPS niega, demora o fragmenta un servicio. Se presenta ante cualquier juez, sin abogado obligatorio, y debe resolverse en 10 días. Bien sustentada con la orden médica del profesional tratante y la negativa de la EPS, es el mecanismo más rápido y efectivo del sistema jurídico colombiano.",
      "negacion-de-medicamentos":
        "La EPS no puede negar un medicamento con el argumento de que está excluido si el médico tratante lo ordenó y no hay alternativa disponible en el plan. La Ley Estatutaria 1751 de 2015 invirtió la lógica: todo está cubierto salvo las exclusiones expresas, y la última palabra sobre la pertinencia clínica la tiene el médico tratante, no la auditoría.",
      "autorizacion-de-cirugias":
        "Las demoras en autorizar cirugías y en asignar citas con especialistas se atacan con petición y luego con tutela, pidiendo tratamiento integral para no tener que demandar cada paso posterior. Cuando la cirugía requiere insumos, rehabilitación o controles, todo eso debe quedar incluido en la orden judicial.",
      "incapacidades-eps":
        "Los primeros dos días los paga el empleador; desde el tercero y hasta el día 180 la EPS; entre 181 y 540, el fondo de pensiones; y después vuelve a la EPS. Cuando el origen es laboral paga la ARL al 100%. Las discusiones entre entidades no pueden trasladarse al paciente, y la tutela sirve para obligar al pago mientras se resuelve el conflicto entre ellas.",
      desacato:
        "Si la EPS incumple el fallo, procede el incidente de desacato ante el mismo juez, que puede imponer multa y arresto al representante legal. Es un trámite corto y en la práctica es lo que hace cumplir la tutela: sin desacato, muchos fallos quedan en el papel.",
    },
    secciones: [
      {
        titulo: "Qué puedes exigirle a tu EPS y con qué herramienta",
        parrafos: [
          "El derecho a la salud en Colombia es un derecho fundamental autónomo desde la Ley Estatutaria 1751 de 2015, lo que significa que se puede exigir directamente por tutela sin necesidad de conexidad con la vida. La misma ley prohíbe la fragmentación de la atención: la EPS no puede autorizar la cirugía y dejar por fuera los insumos, la rehabilitación o el transporte cuando son necesarios para completar el tratamiento.",
          "La ruta empieza por la reclamación escrita a la EPS —petición o queja— con la orden médica y la constancia de la negativa o de la demora. Si no hay respuesta útil, la tutela se presenta ante cualquier juez y debe fallarse en diez días. También existe la vía de la Superintendencia Nacional de Salud, que resuelve algunos conflictos con funciones jurisdiccionales.",
          "Un elemento que cambia el resultado es pedir tratamiento integral: sin él, cada nueva autorización negada obliga a otra tutela. Con él, el fallo cubre todo lo que la patología requiera hacia adelante y el incumplimiento se ataca por desacato.",
        ],
      },
      {
        titulo: "Casos donde la tutela es especialmente eficaz",
        parrafos: [
          "Medicamentos de alto costo y no incluidos en el plan de beneficios, cirugías con listas de espera prolongadas, citas con especialistas asignadas a meses, tratamientos oncológicos, servicios de rehabilitación, transporte para paciente y acompañante cuando el servicio no existe en el municipio, insumos para pacientes con discapacidad y atención domiciliaria.",
          "También en incapacidades no pagadas, cuando la EPS y el fondo de pensiones se devuelven el caso entre sí. La jurisprudencia ha sido clara: el conflicto entre entidades no puede afectar el mínimo vital del paciente, y el juez ordena pagar primero y discutir después.",
          "Para sujetos de especial protección —niños, adultos mayores, personas con discapacidad, mujeres gestantes— el análisis es más favorable y los términos se aplican con mayor rigor. Documentar esa condición desde el escrito de tutela es determinante.",
        ],
      },
      {
        titulo: "Cómo se arma una tutela en salud que sí prospere",
        parrafos: [
          "Una tutela en salud se sostiene sobre tres documentos: la orden o concepto del médico tratante, la prueba de la solicitud a la EPS y la constancia de la negativa o de la demora. Sin la orden del profesional tratante el juez no tiene cómo valorar la necesidad del servicio, y sin la solicitud previa la EPS alegará que nunca se le pidió nada.",
          "El escrito debe narrar los hechos en orden cronológico con fechas exactas, identificar el servicio negado con precisión —nombre del medicamento, código del procedimiento, especialidad requerida—, explicar la afectación concreta en la salud y la vida diaria, y pedir de forma expresa el tratamiento integral y la exoneración de copagos cuando la capacidad económica lo justifica.",
          "También conviene solicitar medida provisional cuando hay riesgo actual: el juez puede ordenar la atención inmediata en las primeras horas, antes de fallar. En patologías oncológicas, en pacientes hospitalizados o en tratamientos suspendidos a mitad de camino, esa medida es lo que evita un daño irreversible.",
        ],
      },
      {
        titulo: "Quién responde cuando la falla causa un daño",
        parrafos: [
          "Cuando la demora o la negación produce un daño —una pérdida funcional, un agravamiento, una muerte evitable— además de la tutela hay una reclamación de responsabilidad. Frente a EPS e IPS privadas se demanda por vía civil; frente a hospitales públicos y entidades del Estado, ante la jurisdicción contencioso-administrativa mediante el medio de control de reparación directa, que caduca a los dos años del hecho.",
          "Ese tipo de proceso se construye con la historia clínica completa, dictámenes de medicina legal o peritajes médicos y la prueba del perjuicio patrimonial y moral. Solicitar copia íntegra de la historia clínica es el primer paso y es un derecho del paciente y de sus familiares en los casos que la ley permite.",
          "Paralelamente existe la vía de vigilancia: la queja ante la Superintendencia Nacional de Salud puede derivar en sanciones a la EPS y, aunque no indemniza al paciente, presiona la corrección de la conducta y deja registro útil para el proceso.",
        ],
      },
    ],
  },

  /* ─────────────────────────── CONSUMIDOR ─────────────────────────── */
  consumidor: {
    subareas: {
      "garantia-de-productos":
        "La garantía legal es mínimo de un año para bienes nuevos, seis meses para usados y la vigencia indicada para perecederos, y obliga solidariamente al productor y al vendedor a reparar, cambiar o devolver el dinero. El consumidor no tiene que probar el defecto de fabricación: la carga de demostrar que la falla se debió a mal uso recae en el proveedor.",
      "clausulas-abusivas":
        "Son ineficaces de pleno derecho las cláusulas que limitan la responsabilidad del proveedor, invierten la carga de la prueba, permiten modificar unilateralmente el contrato o imponen renuncias anticipadas de derechos. Aparecen con frecuencia en contratos de servicios, gimnasios, planes de telefonía, parqueaderos y créditos.",
      "publicidad-enganosa":
        "El proveedor responde por la información y las condiciones anunciadas: precio publicado, características, promociones y disponibilidad. Si el precio exhibido es menor al cobrado, el consumidor puede exigir el menor. La publicidad engañosa se denuncia ante la SIC y puede generar sanción administrativa además de la reparación al consumidor.",
      "demanda-sic":
        "La acción de protección al consumidor se presenta ante la Superintendencia de Industria y Comercio, que actúa como juez, sin necesidad de abogado en cuantías menores. Requiere reclamación directa previa y caduca al año de terminada la relación de consumo. La SIC puede ordenar cumplir la garantía, devolver el dinero e indemnizar.",
      "servicios-financieros":
        "Cobros no autorizados, seguros vendidos sin consentimiento, productos que nunca se solicitaron, reportes indebidos y créditos con intereses por encima de la tasa máxima legal. La ruta pasa por el defensor del consumidor financiero de la entidad, la Superintendencia Financiera y, cuando hay daño patrimonial, la demanda.",
    },
    secciones: [
      {
        titulo: "Cómo funciona la protección al consumidor en Colombia",
        parrafos: [
          "La Ley 1480 de 2011, el Estatuto del Consumidor, parte de una idea simple: quien compra está en desventaja informativa frente a quien vende, y la ley corrige esa asimetría. Impone garantía legal obligatoria, responsabilidad solidaria del productor y del proveedor, deber de información veraz y suficiente, y sanciona la publicidad engañosa y las cláusulas abusivas.",
          "La reclamación directa ante el proveedor es requisito previo y conviene hacerla por escrito con constancia de radicación, porque el silencio o la respuesta insatisfactoria son lo que habilita la acción. A partir de ahí, la vía natural es la acción de protección al consumidor ante la SIC, un trámite ágil que puede adelantarse sin abogado en las cuantías menores y que caduca al año de terminada la relación de consumo.",
          "En compras por internet hay un derecho adicional que casi nadie usa: el retracto dentro de los cinco días hábiles siguientes a la entrega, con devolución del dinero, y la reversión del pago cuando hubo fraude, entrega de producto distinto o producto defectuoso.",
        ],
      },
      {
        titulo: "Qué se puede pedir y con qué prueba",
        parrafos: [
          "Frente a un producto defectuoso el consumidor puede exigir reparación gratuita, cambio por otro idéntico o devolución del precio pagado, en ese orden según el caso y las veces que la falla se repita. Frente a un servicio mal prestado, la prestación correcta o la devolución de lo pagado, con indemnización de los perjuicios acreditados.",
          "La prueba es simple pero hay que conservarla: factura o comprobante de pago, publicidad o pantallazos de la oferta, el contrato con sus anexos, la reclamación radicada, las respuestas del proveedor y el registro fotográfico o el diagnóstico técnico del defecto. Con eso, la mayoría de los casos se resuelve antes de llegar a audiencia.",
        ],
      },
      {
        titulo: "Compras por internet, domicilios y plataformas",
        parrafos: [
          "En el comercio electrónico el proveedor debe informar con claridad su identidad, la dirección de contacto, las características del producto, el precio total con impuestos y costos de envío, los medios de pago y el procedimiento de devolución. Cuando esa información no aparece o es contradictoria, la responsabilidad recae sobre quien ofreció el producto.",
          "El derecho de retracto permite deshacer la compra dentro de los cinco días hábiles siguientes a la entrega en ventas a distancia, devolviendo el producto en buen estado y recibiendo el dinero completo. La reversión del pago aplica cuando hubo fraude, cuando el producto entregado no corresponde a lo pedido, cuando llega defectuoso o cuando nunca llegó, y obliga a la entidad financiera y al comercio a devolver el valor en los términos de la ley.",
          "Las plataformas de intermediación también tienen deberes: informar quién es el vendedor real y responder cuando indujeron a error sobre la oferta. Guardar la conversación en la aplicación, el número de pedido y el comprobante de pago es lo que permite reclamar después.",
        ],
      },
      {
        titulo: "Servicios financieros, aerolíneas y servicios públicos",
        parrafos: [
          "En banca y seguros, la ruta empieza por el defensor del consumidor financiero de la entidad y sigue ante la Superintendencia Financiera, que vigila cobros no autorizados, seguros vendidos sin consentimiento, productos abiertos sin solicitud y reportes indebidos. Cuando hay daño patrimonial, la reclamación económica se lleva a la SIC o al juez según la naturaleza del contrato.",
          "En transporte aéreo aplican el Estatuto del Consumidor y los reglamentos aeronáuticos: compensaciones por sobreventa, retrasos y cancelaciones, y reglas sobre equipaje demorado o perdido. La queja se radica ante la aerolínea y, si no resuelve, ante la Aeronáutica Civil o la SIC.",
          "En servicios públicos domiciliarios —energía, acueducto, gas, internet— el reclamo se presenta ante la empresa, que debe responder en 15 días hábiles, y contra su decisión procede el recurso de reposición y en subsidio la apelación ante la Superintendencia de Servicios Públicos. Mientras el reclamo esté en trámite no se puede suspender el servicio por el valor discutido.",
        ],
      },
    ],
  },
};

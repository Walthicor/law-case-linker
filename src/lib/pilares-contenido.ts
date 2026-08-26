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
      "liquidacion-laboral":
        "La liquidación reúne cesantías, intereses a las cesantías del 12% anual, prima de servicios, vacaciones compensadas y los salarios pendientes. El error más común es liquidar sobre el salario básico cuando debía incluirse el auxilio de transporte, las comisiones y las horas extras habituales, porque todo eso es salario para efectos prestacionales.",
      "acoso-laboral":
        "La Ley 1010 de 2006 define el acoso como una conducta persistente y demostrable dirigida a infundir miedo, desmotivar o inducir la renuncia. La ruta empieza por el comité de convivencia laboral de la empresa y puede terminar en el Ministerio del Trabajo o ante el juez laboral, con la renuncia motivada tratada como despido indirecto.",
      "contrato-de-trabajo":
        "Existe contrato de trabajo cuando hay actividad personal, remuneración y subordinación, sin importar cómo se llame el documento. Por eso una orden de prestación de servicios, una cuenta de cobro mensual o una figura de 'asociado' pueden desmontarse en juicio y generar el pago retroactivo de todas las prestaciones.",
      "horas-extras":
        "La jornada ordinaria se redujo por la Ley 2101 de 2021 y ese cambio movió el cálculo de los recargos. Las horas extras diurnas se pagan con recargo del 25%, las nocturnas con 75%, el recargo nocturno simple es del 35% y el trabajo en dominical o festivo se remunera con el 75% adicional más el descanso compensatorio cuando corresponde.",
      "estabilidad-laboral-reforzada":
        "Las trabajadoras en embarazo o lactancia, las personas con una afectación de salud que limita su desempeño, los aforados sindicales y quienes están cerca del requisito pensional no pueden ser desvinculados sin autorización previa del inspector del trabajo. El despido sin ese permiso es ineficaz y da lugar a reintegro con salarios dejados de percibir.",
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
      "calificacion-perdida-capacidad":
        "El porcentaje de pérdida de capacidad laboral define casi todo lo demás: si hay indemnización, si hay pensión de invalidez y de cuánto. La primera calificación la hace la ARL o la EPS; si no estás de acuerdo, se puede controvertir ante la junta regional de calificación de invalidez y luego ante la junta nacional dentro de los plazos legales.",
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
      "cuota-alimentaria":
        "Se fija según la capacidad económica de quien debe darla y las necesidades de quien la recibe. Puede acordarse por conciliación ante comisario de familia, defensor de familia o centro de conciliación, y ese acuerdo presta mérito ejecutivo. Si no se paga, procede el proceso ejecutivo de alimentos y, en casos graves, el delito de inasistencia alimentaria.",
      "custodia-y-visitas":
        "La custodia se define por el interés superior del niño, no por el género del progenitor ni por quién tiene mejores ingresos. Lo habitual es una custodia en cabeza de uno de los padres con un régimen de visitas amplio para el otro, aunque la custodia compartida es cada vez más frecuente cuando ambos viven cerca y hay comunicación funcional.",
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
};

import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo COMERCIAL.
 * Norma base: Código de Comercio · Ley 1258 de 2008 · Ley 222 de 1995.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */
export const SUBAREAS_COMERCIAL: Record<string, ContenidoSubarea> = {
  "comercial/sociedades": {
    h1: "Liquidación de sociedad en Colombia",
    title: "Liquidación de sociedad en Colombia",
    description: "Disolución, liquidación voluntaria y judicial: pasos, responsabilidades y plazos.",
    respuesta:
      "Liquidar una sociedad es un proceso en dos etapas: primero la disolución, que es la decisión —o el hecho legal— que pone fin a la etapa productiva, y después la liquidación, en la que se realizan los activos, se pagan las obligaciones en el orden de prelación legal y se distribuye el remanente entre los socios. En una SAS basta la decisión de la asamblea por documento privado inscrito en la cámara de comercio, salvo que existan bienes sujetos a escritura pública. Mientras dura el trámite la sociedad conserva su personalidad jurídica solo para los fines de la liquidación, debe agregar a su nombre la expresión «en liquidación» y no puede emprender nuevas operaciones.",
    parrafos: [
      "Las causales de disolución están en el Código de Comercio y, para la SAS, en la Ley 1258 de 2008: vencimiento del término de duración cuando no es indefinido, imposibilidad de desarrollar el objeto social, pérdidas que reduzcan el patrimonio neto por debajo del cincuenta por ciento del capital suscrito, decisión de los asociados, orden de autoridad competente y las causales pactadas en los estatutos. La causal por pérdidas admite enervarse dentro de los términos legales mediante capitalización u otras medidas que restablezcan el patrimonio, y esa ventana suele desaprovecharse por falta de asesoría oportuna.",
      "El liquidador es la figura central. Puede ser el mismo representante legal si los estatutos lo prevén, o la persona designada por los asociados, y su nombramiento debe inscribirse en el registro mercantil. Sus deberes son concretos: elaborar el inventario del patrimonio social, informar a los acreedores mediante los avisos que exige la ley, realizar los activos, pagar el pasivo en el orden legal y rendir cuentas. Responde personalmente por los perjuicios que cause por dolo o culpa, y esa responsabilidad es una de las más frecuentes en litigios societarios posteriores.",
      "La prelación de créditos no es negociable. Primero se pagan los créditos laborales y de seguridad social, luego los créditos fiscales y parafiscales, después los créditos con garantía real en lo que alcance el bien, y por último los quirografarios a prorrata. Solo cuando el pasivo externo está íntegramente cubierto pueden los socios recibir el remanente. Distribuir antes de pagar expone al liquidador y a los socios a responder con su propio patrimonio.",
      "En la SAS los accionistas no responden por las obligaciones sociales más allá de sus aportes, salvo en dos escenarios que sí se presentan en la práctica: cuando la sociedad se usó en fraude a la ley o en perjuicio de terceros, caso en el que procede la desestimación de la personalidad jurídica ante la Superintendencia de Sociedades, y cuando existen obligaciones laborales o fiscales frente a las cuales operan reglas especiales de responsabilidad. Esa es la razón por la que liquidar sin pagar nómina o aportes rara vez cierra el riesgo.",
      "Cuando el pasivo supera los activos, la liquidación voluntaria no es el camino correcto. Corresponde acudir al régimen de insolvencia empresarial de la Ley 1116 de 2006, ya sea en reorganización si la empresa es viable o en liquidación judicial si no lo es. Intentar una liquidación privada con acreedores impagos suele terminar en acciones revocatorias, en responsabilidad del liquidador y en procesos ejecutivos contra los socios.",
      "Las obligaciones formales del cierre también importan y suelen olvidarse: cancelar el RUT ante la DIAN, presentar las declaraciones tributarias del periodo, liquidar y pagar la nómina con las prestaciones e indemnizaciones a que haya lugar, retirar los registros de establecimientos de comercio, cancelar la matrícula mercantil y conservar los libros y papeles por el término legal. Una sociedad liquidada con obligaciones tributarias abiertas sigue generando requerimientos y sanciones.",
      "El acta final de liquidación con la cuenta final debe ser aprobada por los asociados e inscrita en el registro mercantil. Con esa inscripción se extingue la persona jurídica. Si después aparecen activos no incluidos, procede la liquidación adicional; si aparecen pasivos, los acreedores pueden perseguir a los socios hasta el monto de lo recibido en la distribución, lo que hace indispensable que el inventario sea completo y verificable.",
      "Existe una alternativa que muchas veces conviene más que liquidar: reorganizar la sociedad. Fusión, escisión, transformación de tipo societario, venta del establecimiento de comercio o cesión de la participación permiten conservar el negocio en marcha, sus contratos, sus permisos y su historia crediticia. La decisión entre liquidar y reestructurar debe tomarse con el estado financiero real sobre la mesa.",
    ],
    norma: {
      articulo: "Arts. 218 a 259 C. Co.",
      norma: "Código de Comercio · Ley 1258 de 2008 · Ley 222 de 1995",
      texto:
        "Disuelta la sociedad se procederá de inmediato a su liquidación. En consecuencia, no podrá iniciar nuevas operaciones en desarrollo de su objeto y conservará su capacidad jurídica únicamente para los actos necesarios a la inmediata liquidación. El nombre de la sociedad disuelta deberá adicionarse con la expresión «en liquidación» y los encargados de realizarla responderán de los daños y perjuicios que se deriven por dicha omisión.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Pagar el pasivo antes de distribuir",
      texto:
        "La causal de disolución por pérdidas admite enervarse dentro de los términos legales mediante capitalización u otras medidas. Durante la liquidación no puede distribuirse remanente hasta pagar íntegramente el pasivo externo. Los libros y papeles del comerciante deben conservarse por el término legal, y las acciones de los acreedores contra socios y liquidador prescriben según el tipo de obligación.",
    },
    reclamar: {
      titulo: "Qué se resuelve en la liquidación",
      parrafos: [
        "El objetivo del trámite no es cerrar rápido sino cerrar bien: dejar el pasivo pagado, los formalismos cumplidos y una cuenta final defendible frente a acreedores, DIAN y exempleados.",
        "Cuando hay conflicto entre socios sobre el valor de los activos o la gestión del liquidador, la Superintendencia de Sociedades puede conocer del asunto con funciones jurisdiccionales.",
      ],
      lista: [
        "Inventario del patrimonio social y avisos a acreedores",
        "Pago del pasivo externo en el orden de prelación legal",
        "Distribución del remanente entre los asociados",
        "Cancelación de RUT, matrícula mercantil y registros",
        "Rendición de cuentas y responsabilidad del liquidador",
      ],
    },
    pasos: [
      { titulo: "Verifica la causal de disolución", texto: "Estatutaria, legal o por decisión de los asociados. Si es por pérdidas, evalúa primero si puede enervarse con capitalización." },
      { titulo: "Inscribe la disolución y el liquidador", texto: "En la cámara de comercio, agregando «en liquidación» al nombre. Desde ahí la sociedad no puede emprender nuevas operaciones." },
      { titulo: "Haz inventario y avisa a acreedores", texto: "Activos, pasivos, contingencias y procesos en curso. Los avisos a acreedores son obligación del liquidador." },
      { titulo: "Paga en el orden legal", texto: "Laborales y seguridad social, fiscales, garantías reales y quirografarios. Nunca distribuyas antes de cubrir el pasivo externo." },
      { titulo: "Aprueba la cuenta final y cancela registros", texto: "Acta final inscrita, RUT cancelado, declaraciones al día y libros conservados por el término legal." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto se demora liquidar una sociedad?",
        respuesta:
          "Una liquidación voluntaria sencilla, sin pasivo relevante ni litigios, puede completarse en pocos meses. Cuando hay inmuebles, procesos en curso, obligaciones tributarias o acreedores en desacuerdo, el trámite se extiende y puede requerir acudir al régimen de insolvencia.",
      },
      {
        pregunta: "¿Los socios responden por las deudas de la sociedad?",
        respuesta:
          "En la SAS la responsabilidad se limita al monto de los aportes, salvo fraude a la ley o perjuicio a terceros, casos en que procede la desestimación de la personalidad jurídica ante la Superintendencia de Sociedades. Además, si recibieron remanente antes de pagar el pasivo, responden hasta el monto de lo recibido.",
      },
      {
        pregunta: "¿Qué pasa si la sociedad tiene más deudas que activos?",
        respuesta:
          "No corresponde una liquidación voluntaria sino el régimen de insolvencia de la Ley 1116 de 2006: reorganización si la empresa es viable, o liquidación judicial si no lo es. Liquidar privadamente con acreedores impagos expone al liquidador y a los socios a acciones revocatorias y de responsabilidad.",
      },
      {
        pregunta: "¿Puedo liquidar sin pagar la nómina pendiente?",
        respuesta:
          "No. Los créditos laborales y de seguridad social tienen la primera prelación y deben pagarse antes que cualquier otra obligación. Cerrar la sociedad con nómina o aportes pendientes deja abierta la responsabilidad frente a los trabajadores y frente a las entidades del sistema.",
      },
      {
        pregunta: "¿Es mejor liquidar o vender la sociedad?",
        respuesta:
          "Depende del valor del negocio en marcha. Si hay contratos vigentes, permisos, marca posicionada o historia crediticia, suele convenir la venta de acciones, la cesión del establecimiento de comercio o una reorganización, en lugar de perder ese valor con la liquidación.",
      },
    ],
    guias: ["salir-de-una-sociedad", "constituir-sas"],
  },

  "comercial/conflictos-entre-socios": {
    h1: "Conflicto entre socios: cómo se resuelve",
    title: "Conflicto entre socios en Colombia",
    description: "Bloqueo societario, abuso del derecho de voto, dividendos y acciones ante Supersociedades.",
    respuesta:
      "Un conflicto entre socios se resuelve con las herramientas que dan los estatutos, la ley societaria y la competencia jurisdiccional de la Superintendencia de Sociedades. Las vías más usadas son la impugnación de las decisiones de la asamblea o junta de socios, la acción social de responsabilidad contra los administradores, la declaratoria de abuso del derecho de voto —de mayoría, de minoría o de paridad—, el ejercicio del derecho de inspección, la exclusión de un accionista cuando los estatutos la permiten y, en casos extremos, la disolución judicial por imposibilidad de desarrollar el objeto social. Los plazos son cortos: la impugnación de decisiones sociales debe presentarse dentro de los 2 meses siguientes a la reunión o a su inscripción, según el caso.",
    parrafos: [
      "El bloqueo societario es el escenario más común. Ocurre cuando dos bloques con participaciones equivalentes no logran los votos para aprobar decisiones esenciales —aprobar estados financieros, nombrar representante legal, distribuir utilidades— y la sociedad queda paralizada. La Ley 1258 de 2008 previó expresamente el abuso del derecho de voto por paridad y facultó a la Superintendencia de Sociedades para declararlo y ordenar la indemnización de perjuicios, además de la nulidad de la decisión abusiva.",
      "El abuso de mayoría se configura cuando el bloque mayoritario usa su poder de voto para obtener una ventaja injustificada en perjuicio de la sociedad o de los minoritarios: no decretar dividendos durante años acumulando utilidades sin razón de negocio, aprobar aumentos de capital diseñados para diluir a quien no puede suscribir, o contratar con partes relacionadas en condiciones desfavorables. El abuso de minoría es el reflejo: bloquear sistemáticamente decisiones necesarias para la marcha del negocio.",
      "El derecho de inspección es el primer paso práctico en casi todos estos casos. Permite examinar los libros y papeles sociales en las oportunidades legales o estatutarias, y su negativa injustificada es una falta del administrador que puede denunciarse ante la Superintendencia. Sin información contable verificada, cualquier reclamación posterior queda sin sustento probatorio.",
      "La acción social de responsabilidad contra administradores procede cuando el gerente o los miembros de junta directiva actuaron con dolo o culpa causando perjuicio a la sociedad: contratar consigo mismos sin autorización, desviar oportunidades de negocio, competir con la sociedad, ocultar información o incumplir los deberes de lealtad y buena fe del artículo 23 de la Ley 222 de 1995. La decisión de iniciarla corresponde a la asamblea, pero la ley y la jurisprudencia han abierto la puerta a que los socios la promuevan cuando la mayoría bloquea el ejercicio de la acción.",
      "La Superintendencia de Sociedades actúa con funciones jurisdiccionales en estos asuntos y se ha convertido en el foro natural del conflicto societario: resuelve impugnaciones, declara abusos del derecho de voto, conoce de la desestimación de la personalidad jurídica, de las controversias sobre acuerdos de accionistas y de la responsabilidad de administradores, con trámites en general más rápidos que los judiciales ordinarios.",
      "Los acuerdos de accionistas son la herramienta preventiva más eficaz y la más subutilizada. Depositados en la sociedad, son oponibles y ejecutables: pueden regular el sentido del voto, la designación de administradores, restricciones a la negociación de acciones, derechos de arrastre y de acompañamiento, opciones de compra ante desacuerdos y mecanismos de valoración. Un buen acuerdo convierte un conflicto potencialmente terminal en un procedimiento contractual con salida predefinida.",
      "Las salidas negociadas suelen ser mejores que el litigio. La cláusula de «ruleta rusa» o de oferta cruzada, la venta de la participación con valoración por un tercero independiente, la escisión del negocio en unidades separadas y el retiro con reembolso de aportes permiten separar a los socios sin destruir la empresa. Judicializar sin evaluar estas opciones suele costar más que la participación en disputa.",
      "Cuando el conflicto ya afectó la operación —pagos detenidos, proveedores sin respuesta, empleados sin instrucciones— conviene solicitar medidas cautelares dentro del proceso. La Superintendencia puede ordenar la suspensión de decisiones sociales, la designación de administradores provisionales o medidas de conservación para evitar que la disputa destruya el valor que ambos socios pretenden repartir.",
    ],
    norma: {
      articulo: "Art. 43 Ley 1258 de 2008",
      norma: "Ley 1258 de 2008 · Ley 222 de 1995 · Código de Comercio",
      texto:
        "Los accionistas deberán ejercer el derecho de voto en el interés de la compañía. Se considerará abusivo el voto ejercido con el propósito de causar daño a la compañía o a otros accionistas o de obtener para sí o para un tercero ventaja injustificada, así como aquel voto del que pueda resultar un perjuicio para la compañía o para los otros accionistas. Quien abuse de sus derechos de accionista responderá por los daños que ocasione.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Impugnación: 2 meses",
      texto:
        "La acción de impugnación de decisiones de la asamblea o junta de socios debe promoverse dentro de los 2 meses siguientes a la fecha de la reunión o, cuando la decisión deba inscribirse en el registro mercantil, dentro de los 2 meses siguientes a su inscripción. Vencido ese término la decisión queda en firme, aunque persistan las acciones de responsabilidad contra administradores.",
    },
    reclamar: {
      titulo: "Qué puedes pedir",
      parrafos: [
        "La pretensión depende del daño: anular la decisión abusiva, obtener la indemnización de perjuicios, remover al administrador, obligar a decretar dividendos o forzar la salida ordenada de uno de los bloques.",
        "En todos los casos la prueba es documental y contable: actas, estados financieros, contratos con partes relacionadas, extractos y comunicaciones internas.",
      ],
      lista: [
        "Impugnación y nulidad de decisiones sociales",
        "Declaratoria de abuso del derecho de voto e indemnización",
        "Acción social de responsabilidad contra administradores",
        "Ejercicio forzoso del derecho de inspección",
        "Medidas cautelares y administrador provisional",
      ],
    },
    pasos: [
      { titulo: "Ejerce el derecho de inspección", texto: "Solicita por escrito libros, actas, estados financieros y contratos. Sin información no hay caso probable." },
      { titulo: "Revisa estatutos y acuerdos", texto: "Quórum, mayorías, restricciones a la negociación, causales de exclusión y mecanismos de solución de conflictos." },
      { titulo: "Deja constancia en las reuniones", texto: "Vota en contra y pide que quede en el acta. Esa constancia habilita la impugnación dentro de los 2 meses." },
      { titulo: "Negocia una salida", texto: "Valoración por tercero independiente, opción de compra cruzada o escisión antes de judicializar el conflicto." },
      { titulo: "Acude a Supersociedades", texto: "Con funciones jurisdiccionales resuelve impugnaciones, abuso del voto y responsabilidad de administradores, con medidas cautelares." },
    ],
    faqs: [
      {
        pregunta: "¿Qué hago si el socio mayoritario no reparte utilidades?",
        respuesta:
          "Si no existe razón de negocio que justifique retener las utilidades de forma sistemática, puede configurarse abuso del derecho de voto de mayoría. Procede solicitar ante la Superintendencia de Sociedades la nulidad de la decisión y la indemnización de perjuicios, con base en los estados financieros y las actas.",
      },
      {
        pregunta: "¿Cuánto tiempo tengo para impugnar una decisión de la asamblea?",
        respuesta:
          "Dos meses contados desde la fecha de la reunión o, si la decisión debe inscribirse en el registro mercantil, desde su inscripción. Es un término corto y preclusivo, por lo que conviene dejar constancia del voto negativo en el acta desde la misma reunión.",
      },
      {
        pregunta: "¿Puedo obligar a mi socio a comprarme la participación?",
        respuesta:
          "Solo si los estatutos o un acuerdo de accionistas prevén un mecanismo de salida, como opciones de compra, ruleta rusa o derecho de retiro en los eventos legales. Sin esas cláusulas, la salida se negocia o se llega a escenarios más costosos como la disolución judicial.",
      },
      {
        pregunta: "¿Qué es la acción social de responsabilidad?",
        respuesta:
          "Es la acción para que el administrador responda ante la sociedad por los perjuicios causados con dolo o culpa al incumplir sus deberes de diligencia y lealtad. Su ejercicio implica la remoción del administrador y puede tramitarse ante la Superintendencia de Sociedades.",
      },
      {
        pregunta: "¿La sociedad puede quedar paralizada por el conflicto?",
        respuesta:
          "Puede ocurrir en los bloqueos por paridad. La ley trata ese escenario como abuso del derecho de voto y permite acudir a la Superintendencia, que además puede decretar medidas cautelares como la suspensión de decisiones o la designación de un administrador provisional.",
      },
    ],
    guias: ["salir-de-una-sociedad", "constituir-sas"],
  },

  "comercial/contratos-comerciales": {
    h1: "Contrato comercial en Colombia",
    title: "Contrato comercial en Colombia",
    description: "Suministro, distribución, agencia y franquicia: cláusulas clave y riesgos al terminar.",
    respuesta:
      "Un contrato comercial se rige por el Código de Comercio y, en lo no previsto, por el Código Civil, y su nombre no determina sus efectos: lo que importa es cómo se ejecuta en la práctica. Esa regla explica el riesgo más costoso del derecho comercial colombiano: una relación denominada «distribución» puede terminar calificada como agencia comercial y generar a favor del agente la prestación del artículo 1324 del Código de Comercio, equivalente a la doceava parte de la comisión, regalía o utilidad promedio recibida en los últimos tres años, por cada año de vigencia. Redactar bien no es un formalismo: es la diferencia entre terminar una relación y pagar una indemnización que nadie presupuestó.",
    parrafos: [
      "El contrato de suministro obliga a una parte a cumplir prestaciones periódicas o continuadas de cosas o servicios. Sus puntos críticos son la determinación de la cantidad —cuando no se pacta, la ley suple con las necesidades ordinarias—, el precio y su reajuste, los plazos de entrega, el estándar de calidad, las causales de terminación por incumplimiento grave y el preaviso, que la ley exige razonable cuando el contrato es de duración indefinida.",
      "La distribución y la concesión no tienen regulación propia en el Código de Comercio, lo que aumenta la importancia de la redacción. Deben delimitarse el territorio, la exclusividad, las metas de compra, la política de precios sin incurrir en prácticas restrictivas de la competencia, el manejo de inventarios al terminar, el uso de marca y la suerte de las garantías frente a los clientes finales. La cláusula de terminación con preaviso suficiente y compensación pactada es la que evita litigios.",
      "La agencia comercial existe cuando un comerciante asume de manera independiente y estable el encargo de promover o explotar negocios en un ramo y dentro de una zona determinada, actuando por cuenta de otro. Sus dos consecuencias económicas están en el artículo 1324: la prestación por la doceava parte anual y, además, la indemnización equitativa cuando el empresario termina sin justa causa o el agente lo hace por justa causa imputable al empresario. La discusión judicial se centra siempre en si hubo estabilidad, independencia y promoción por cuenta ajena.",
      "La franquicia es atípica y combina licencia de marca, transferencia de know-how y asistencia técnica continuada. Sus cláusulas determinantes son el canon de entrada y las regalías, los estándares operativos, el territorio, la duración y renovación, las restricciones postcontractuales de no competencia —que deben ser razonables en tiempo, espacio y objeto para no ser nulas— y el destino de los activos y del punto comercial al terminar.",
      "Existen cláusulas que deberían estar en todo contrato comercial y que se omiten con frecuencia: precio y forma de pago con intereses de mora a la tasa máxima legal, cláusula penal con estimación anticipada de perjuicios, limitación de responsabilidad cuando es válida, confidencialidad con vigencia posterior a la terminación, propiedad de los desarrollos y de la información, tratamiento de datos personales conforme a la Ley 1581 de 2012, fuerza mayor definida contractualmente, cesión y subcontratación, y mecanismos de solución de controversias.",
      "La cláusula compromisoria merece un análisis de costo. El arbitraje es más rápido y especializado, pero su costo lo hace desproporcionado en contratos de baja cuantía; para esos casos conviene la conciliación previa obligatoria y la jurisdicción ordinaria, o un arbitraje de único árbitro con reglas simplificadas. Pactar arbitraje en un contrato de cinco millones de pesos equivale, en la práctica, a renunciar a reclamar.",
      "En materia probatoria, el correo electrónico, los mensajes de datos y la factura electrónica tienen pleno valor bajo la Ley 527 de 1999 y la normativa tributaria vigente. La factura electrónica aceptada de forma expresa o tácita presta mérito ejecutivo, lo que permite cobrar sin proceso declarativo previo. Mantener trazabilidad documental de pedidos, entregas y aceptaciones es lo que convierte un contrato en un título cobrable.",
      "Al terminar la relación aparecen los reclamos: inventarios sin rotar, clientela construida, inversiones no amortizadas y exclusividad frustrada. Anticipar esos escenarios en el contrato —con fórmulas de liquidación, recompra de inventario a precio pactado y plazos de preaviso— es más barato que discutirlos después ante un juez o un tribunal arbitral.",
    ],
    norma: {
      articulo: "Art. 1324 C. Co.",
      norma: "Código de Comercio · Ley 1258 de 2008 · Ley 527 de 1999",
      texto:
        "El contrato de agencia termina por las mismas causas del mandato, y a su terminación el agente tendrá derecho a que el empresario le pague una suma equivalente a la doceava parte del promedio de la comisión, regalía o utilidad recibida en los tres últimos años, por cada uno de vigencia del contrato, o al promedio de todo lo recibido si el tiempo del contrato fuere menor.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Prescripción: 5 años · títulos valores 3 años",
      texto:
        "Las acciones derivadas del contrato de agencia comercial prescriben en 5 años (art. 1329 C. Co.). Las acciones cambiarias directas de los títulos valores prescriben en 3 años desde el vencimiento, y la acción de regreso en 1 año. Las acciones ordinarias por incumplimiento contractual prescriben en 10 años conforme al Código Civil (Ley 791 de 2002).",
    },
    reclamar: {
      titulo: "Cláusulas que deciden el resultado",
      parrafos: [
        "La mayoría de los pleitos comerciales no se pierden por falta de razón sino por falta de redacción: precios sin fórmula de ajuste, terminaciones sin preaviso pactado y perjuicios sin tasación previa.",
        "Una cláusula penal bien redactada, con estimación anticipada de perjuicios y sin renuncia a exigir la obligación principal, es la herramienta más eficaz para cobrar rápido.",
      ],
      lista: [
        "Objeto, precio y fórmula de reajuste",
        "Plazo, renovación y preaviso de terminación",
        "Cláusula penal e intereses de mora a la tasa máxima legal",
        "Confidencialidad, datos personales y propiedad intelectual",
        "Solución de controversias proporcional a la cuantía",
      ],
    },
    pasos: [
      { titulo: "Define la naturaleza real", texto: "Suministro, distribución, agencia o franquicia. Lo que decide no es el título del documento sino cómo se ejecuta." },
      { titulo: "Fija precio, plazo y terminación", texto: "Con fórmula de ajuste, causales objetivas y preaviso razonable para relaciones de duración indefinida." },
      { titulo: "Tasa los perjuicios por anticipado", texto: "Cláusula penal, intereses de mora y garantías. Eso convierte el incumplimiento en un cobro y no en un pleito." },
      { titulo: "Documenta la ejecución", texto: "Órdenes, remisiones, aceptaciones y facturas electrónicas. La trazabilidad es lo que da mérito ejecutivo." },
      { titulo: "Planea la salida", texto: "Recompra de inventario, destino de la marca, no competencia razonable y liquidación de cuentas pendientes." },
    ],
    faqs: [
      {
        pregunta: "¿Mi contrato de distribución puede ser agencia comercial?",
        respuesta:
          "Sí, si en la práctica hay estabilidad, independencia y promoción de negocios por cuenta del empresario en una zona determinada. La calificación la hace el juez con base en la ejecución real, y su efecto es la prestación del artículo 1324 más la eventual indemnización equitativa.",
      },
      {
        pregunta: "¿Puedo terminar un contrato de duración indefinida?",
        respuesta:
          "Sí, pero con un preaviso razonable y en las condiciones pactadas. Terminar de forma intempestiva expone a indemnizar los perjuicios derivados de inversiones no amortizadas, inventarios adquiridos y compromisos asumidos por la contraparte confiando en la continuidad.",
      },
      {
        pregunta: "¿Sirve un contrato firmado solo por correo electrónico?",
        respuesta:
          "Sí. La Ley 527 de 1999 reconoce plena validez y fuerza probatoria a los mensajes de datos y a las firmas electrónicas. Lo importante es poder acreditar la autoría, la integridad del mensaje y la aceptación, por lo que conviene conservar los correos completos con sus encabezados.",
      },
      {
        pregunta: "¿Conviene pactar cláusula compromisoria?",
        respuesta:
          "Depende de la cuantía. El arbitraje es rápido y especializado pero costoso, y en contratos pequeños puede volver inviable cualquier reclamación. Para esos casos suelen funcionar mejor la conciliación previa y la jurisdicción ordinaria, o un arbitraje simplificado de único árbitro.",
      },
      {
        pregunta: "¿En cuánto tiempo prescriben las acciones comerciales?",
        respuesta:
          "Las derivadas del contrato de agencia comercial prescriben en cinco años. La acción cambiaria directa de un título valor prescribe en tres años desde el vencimiento. Las acciones ordinarias por incumplimiento contractual prescriben en diez años según el Código Civil.",
      },
    ],
    guias: ["clausulas-contrato", "constituir-sas"],
  },

  "comercial/cobro-de-cartera": {
    h1: "Cobro jurídico de cartera empresarial",
    title: "Cobro jurídico de cartera",
    description: "Cómo cobrar facturas, pagarés y contratos incumplidos con proceso ejecutivo y cautelares.",
    respuesta:
      "El cobro jurídico de cartera empieza con una pregunta: ¿qué documento tienes? Si cuentas con un título ejecutivo —pagaré, letra, cheque, factura electrónica aceptada expresa o tácitamente, contrato con obligación clara, expresa y exigible, o acta de conciliación— la vía es el proceso ejecutivo del Código General del Proceso, con embargo de cuentas, vehículos e inmuebles desde el auto de mandamiento de pago. Si no lo tienes, primero hay que declarar la obligación en un proceso verbal y luego ejecutarla, lo que agrega años. La acción cambiaria directa de los títulos valores prescribe en 3 años desde el vencimiento; la de regreso, en 1 año.",
    parrafos: [
      "La calidad del título define la velocidad del cobro. El pagaré es el instrumento más eficiente porque permite pactar vencimiento, intereses, cláusula aceleratoria y renuncia a requerimientos; si se firma en blanco, necesita carta de instrucciones que fije con precisión cómo se llenará, porque su ausencia o su llenado abusivo es la excepción más alegada por los deudores. La letra de cambio y el cheque tienen reglas propias de presentación y protesto que, mal ejecutadas, hacen perder la acción cambiaria.",
      "La factura electrónica de venta como título valor requiere haber sido aceptada, expresamente o de forma tácita por el paso del término legal sin reclamo, y estar registrada en el RADIAN cuando se pretende negociarla. Esa aceptación es lo que la convierte en título ejecutivo y permite cobrar sin proceso declarativo. Muchas empresas pierden esa ventaja por no dejar constancia de la entrega de la mercancía o del servicio y de su recepción.",
      "Antes de demandar conviene una etapa prejurídica corta y bien documentada: comunicación de cobro con corte de cuenta, plazo perentorio y advertencia de acciones legales; verificación de la existencia real de bienes del deudor; y, cuando hay disposición, un acuerdo de pago que se firme como título ejecutivo o se eleve a conciliación con mérito ejecutivo. Un acuerdo bien estructurado suele recuperar más y más rápido que una sentencia.",
      "Las medidas cautelares son la verdadera palanca del proceso ejecutivo. Desde el mandamiento de pago pueden solicitarse embargo y secuestro de bienes muebles e inmuebles, embargo de cuentas bancarias, de establecimientos de comercio, de acciones y cuotas sociales, de salarios en los porcentajes legales y de créditos a favor del deudor. La investigación patrimonial previa —consulta de registros públicos, RUNT, folios de matrícula, información comercial— es lo que evita embargar en el vacío.",
      "El deudor puede proponer excepciones dentro del término de traslado. Las más frecuentes son el pago, la prescripción, la falta de requisitos del título, el llenado abusivo del pagaré en blanco, la novación y la compensación. Un cobro bien preparado anticipa estas defensas: corte de cuenta claro, imputación de pagos conforme a la ley, prueba de la entrega y verificación de que la acción no esté prescrita.",
      "Los intereses tienen límite. En obligaciones mercantiles el interés de mora no puede exceder una vez y media el interés bancario corriente certificado por la Superintendencia Financiera; cobrar por encima constituye usura y da lugar a la pérdida de los intereses y a sanciones. La liquidación del crédito debe hacerse con las tasas vigentes en cada periodo, y ese detalle técnico define cuánto se recupera realmente.",
      "Existen alternativas que en muchos casos superan al litigio: la conciliación extrajudicial con acta que presta mérito ejecutivo, la dación en pago, la cesión del crédito a un factor, el factoring de la cartera con o sin recurso y la insolvencia cuando el deudor es persona natural no comerciante. Evaluar la capacidad real de pago del deudor antes de demandar evita gastar en un proceso contra un patrimonio inexistente.",
      "Por último, conviene revisar la política interna de crédito, porque casi toda la cartera problemática nace de la venta: falta de estudio del cliente, ausencia de garantías, contratos sin cláusula aceleratoria, entregas sin firma de recibido y facturación sin aceptación. Una cartera se cobra bien cuando se documenta bien, y eso ocurre antes de la mora, no después.",
    ],
    norma: {
      articulo: "Art. 422 CGP",
      norma: "Código General del Proceso · Código de Comercio",
      texto:
        "Pueden demandarse ejecutivamente las obligaciones expresas, claras y exigibles que consten en documentos que provengan del deudor o de su causante, y constituyan plena prueba contra él, o las que emanen de una sentencia de condena proferida por juez o tribunal de cualquier jurisdicción, o de otra providencia judicial, o de las providencias que en procesos de policía aprueben liquidación de costas o señalen honorarios de auxiliares de la justicia.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Títulos valores: 3 años",
      texto:
        "La acción cambiaria directa prescribe en 3 años contados desde el día del vencimiento del título (art. 789 C. Co.) y la acción de regreso en 1 año. La acción ejecutiva derivada de otros documentos prescribe en 5 años y la ordinaria en 10 (CC art. 2536, modificado por la Ley 791 de 2002). El requerimiento y la conciliación pueden interrumpir la prescripción según el caso.",
    },
    reclamar: {
      titulo: "Qué puedes cobrar",
      parrafos: [
        "En el proceso ejecutivo se persigue el capital, los intereses de mora liquidados hasta el pago, la cláusula penal cuando se pactó y las costas del proceso, incluidas las agencias en derecho.",
        "Cuando la obligación es en moneda extranjera o está indexada, deben precisarse la tasa de conversión y la fórmula de actualización desde la demanda para evitar reparos en la liquidación.",
      ],
      lista: [
        "Capital adeudado según corte de cuenta documentado",
        "Intereses de mora hasta la tasa máxima legal",
        "Cláusula penal pactada en el contrato o en el título",
        "Costas y agencias en derecho",
        "Medidas cautelares sobre cuentas, vehículos e inmuebles",
      ],
    },
    pasos: [
      { titulo: "Clasifica el documento", texto: "Título ejecutivo o no. Pagaré, letra, cheque, factura aceptada y contrato claro van directo a proceso ejecutivo." },
      { titulo: "Verifica la prescripción", texto: "3 años para la acción cambiaria directa desde el vencimiento. Si está cerca, prioriza la radicación." },
      { titulo: "Investiga el patrimonio", texto: "Cuentas, inmuebles, vehículos, participaciones y establecimientos. Sin bienes, la sentencia no cobra nada." },
      { titulo: "Intenta el acuerdo con mérito ejecutivo", texto: "Conciliación o acuerdo de pago firmado que sirva como título si se incumple. Recupera más y más rápido." },
      { titulo: "Demanda con cautelares", texto: "Proceso ejecutivo pidiendo embargo desde el mandamiento de pago y liquidando intereses periodo por periodo." },
    ],
    faqs: [
      {
        pregunta: "¿Puedo cobrar una factura sin firma del cliente?",
        respuesta:
          "Sí, si se trata de factura electrónica de venta aceptada de forma expresa o tácita por el transcurso del término legal sin reclamo, y se acredita la entrega del bien o servicio. Esa aceptación es la que le da carácter de título valor y permite iniciar el proceso ejecutivo.",
      },
      {
        pregunta: "¿En cuánto tiempo prescribe un pagaré?",
        respuesta:
          "La acción cambiaria directa prescribe en tres años contados desde el vencimiento del título. La acción de regreso contra endosantes y avalistas prescribe en un año. Por eso conviene radicar la demanda antes de que se acerque el término, aunque sigan las gestiones de cobro.",
      },
      {
        pregunta: "¿Qué pasa si el deudor no tiene bienes?",
        respuesta:
          "El proceso puede terminar sin recaudo efectivo. Antes de demandar conviene hacer investigación patrimonial y evaluar alternativas como acuerdos de pago con garantías, dación en pago, vinculación de codeudores o avalistas, o la venta de la cartera a un tercero.",
      },
      {
        pregunta: "¿Cuál es el interés máximo que puedo cobrar?",
        respuesta:
          "En obligaciones mercantiles, el interés de mora no puede exceder una vez y media el interés bancario corriente certificado por la Superintendencia Financiera para el periodo respectivo. Superarlo constituye usura y puede acarrear la pérdida de los intereses y sanciones.",
      },
      {
        pregunta: "¿Un pagaré firmado en blanco es válido?",
        respuesta:
          "Sí, siempre que exista carta de instrucciones que determine con precisión cómo debe llenarse. El llenado contrario a las instrucciones es la excepción más común del deudor, por lo que conviene conservar la carta firmada junto con el título y la documentación del crédito.",
      },
    ],
    guias: ["clausulas-contrato", "salir-de-una-sociedad"],
  },
};

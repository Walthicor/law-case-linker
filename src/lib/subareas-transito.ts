import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo TRÁNSITO.
 * Norma base: Ley 769 de 2002 · Ley 1383 de 2010.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */

// VERIFICAR CON ABOGADO
const PLAZO_COMPARENDO = {
  titulo: "Comparendo: 11 días hábiles para impugnar",
  texto:
    "Notificado el comparendo tienes 11 días hábiles para comparecer ante la autoridad de tránsito y presentar los descargos; si no comparecer, la orden queda en firme y se convierte en título ejecutivo (Ley 769 de 2002, art. 136, modificado por la Ley 1383 de 2010). Pagar dentro de los 5 días siguientes da derecho al 50% de descuento y dentro de los 20 días al 25%, pero pagar equivale a aceptar la infracción. La facultad de cobro de la multa prescribe a los 3 años.",
};

// VERIFICAR CON ABOGADO
const PLAZO_INDEMNIZACION = {
  titulo: "SOAT: 3 años · responsabilidad civil: 10 años",
  texto:
    "La reclamación contra la aseguradora prescribe en 2 años desde que se conoce el siniestro (prescripción ordinaria) y en 5 años desde el hecho (extraordinaria), según el art. 1081 del Código de Comercio; en SOAT la práctica administrativa admite reclamar dentro de los 3 años siguientes al accidente. La responsabilidad civil extracontractual contra el conductor y el propietario prescribe en 10 años, y la acción ejecutiva sobre la póliza en 5.",
};

export const SUBAREAS_TRANSITO: Record<string, ContenidoSubarea> = {
  "transito/comparendos": {
    h1: "Cómo impugnar un comparendo en Colombia",
    title: "Cómo impugnar un comparendo en Colombia",
    description: "Plazos, audiencia de descargos, argumentos que funcionan y qué pasa si dejas vencer los 11 días.",
    respuesta:
      "Un comparendo se impugna compareciendo ante la autoridad de tránsito dentro de los 11 días hábiles siguientes a la notificación, para presentar descargos y solicitar la práctica de pruebas en audiencia pública (art. 136 de la Ley 769 de 2002, modificado por la Ley 1383 de 2010). Si no se comparece dentro de ese término la orden queda en firme, presta mérito ejecutivo y la deuda pasa a cobro coactivo con intereses. Pagar con el descuento del 50% o del 25% es cómodo, pero equivale a aceptar la infracción y hace imposible discutirla después: la decisión de pagar o impugnar debe tomarse en los primeros días, no cuando llega el cobro.",
    parrafos: [
      "La notificación es el primer terreno de discusión. Cuando el comparendo se impone en vía, se notifica en el acto y el término corre desde ahí. Cuando se detecta por medios técnicos —cámaras de fotodetección— la autoridad debe enviar la orden dentro de los tres días hábiles siguientes a la validación y notificarla en debida forma al propietario o al infractor identificado. La notificación por correo a una dirección desactualizada, sin constancia de entrega, o la publicación irregular, son vicios que se alegan en la audiencia y que en muchos casos terminan en archivo.",
      "El segundo terreno es la identificación del infractor. En fotodetección la sanción no puede imponerse automáticamente al propietario sin darle la oportunidad de identificar a quien conducía; la Corte Constitucional restringió la responsabilidad solidaria automática del propietario, y ese argumento es de los más eficaces cuando el vehículo estaba en manos de otra persona, arrendado o en un taller.",
      "El tercer terreno es probatorio. La fotografía debe permitir leer la placa con nitidez, mostrar fecha y hora, y evidenciar la conducta sancionada. Si el radar o el equipo no cuenta con certificado de calibración vigente, si la señalización que impone el límite o la restricción está ausente, tapada o es contradictoria, o si el agente no describió con precisión la conducta y el lugar, el sustento de la sanción se debilita.",
      "El cuarto terreno es el procedimental. La autoridad tiene términos para resolver y una facultad sancionatoria que no es indefinida: si el procedimiento se prolonga sin decisión, opera la caducidad de la facultad sancionatoria; y una vez en firme la multa, la facultad de cobro prescribe a los tres años, plazo que se interrumpe con la notificación del mandamiento de pago.",
      "La audiencia es pública y puede asistirse personalmente o mediante apoderado. Conviene llevar los descargos por escrito, las pruebas documentales, las fotografías del lugar que muestren la señalización, testimonios si los hay, y solicitar expresamente las pruebas que se quieren practicar. Contra la decisión que declara la contravención procede el recurso de apelación ante el superior dentro de los términos legales.",
      "Existen situaciones que justifican la infracción y se alegan como causal de exoneración: la maniobra realizada por orden de un agente de tránsito, el desplazamiento por una urgencia médica documentada, la falla mecánica imprevista o el estado de necesidad. Todas exigen prueba, no simple afirmación.",
      "También conviene revisar el registro en el SIMIT antes de cualquier trámite. Aparecen allí comparendos de vehículos ya vendidos sin traspaso, homónimos, dobles registros por la misma conducta y multas de otros municipios. Cada uno tiene una vía distinta: traspaso a riesgo del vendedor con la denuncia correspondiente, solicitud de corrección de datos o revocatoria directa del acto.",
      "Un comparendo no resuelto bloquea trámites: impide el traspaso, la renovación de la licencia y en algunos casos la matrícula. Por eso la peor estrategia es ignorarlo. Si la infracción efectivamente ocurrió, pagar dentro de los cinco días con el 50% de descuento suele ser lo más razonable; si hay argumentos, impugnar dentro de los once días hábiles es la única oportunidad real de discutirla.",
    ],
    norma: {
      articulo: "Art. 136 Ley 769 de 2002",
      norma: "Modificado por la Ley 1383 de 2010 · Código Nacional de Tránsito",
      texto:
        "Una vez surtida la orden de comparendo, el presunto contraventor podrá, dentro de los once (11) días hábiles siguientes, comparecer ante la autoridad de tránsito competente para objetar la orden, aportando las pruebas que pretenda hacer valer, o cancelar el valor de la multa con los descuentos previstos en la ley.",
    },
    plazo: PLAZO_COMPARENDO,
    reclamar: {
      titulo: "Cómo se resuelve",
      parrafos: [
        "El resultado depende del vicio que se alegue y de la prueba que lo respalde. La discusión no es sobre si el conductor «se lo merecía», sino sobre si la administración cumplió el procedimiento y acreditó la conducta.",
        "Los argumentos que más resultados producen son la notificación irregular, la falta de identificación del conductor en fotodetección, la señalización deficiente y la caducidad o prescripción.",
      ],
      lista: [
        "Notificación irregular o fuera de término",
        "Fotodetección sin identificación del conductor",
        "Señalización ausente, tapada o contradictoria",
        "Equipo de medición sin certificado de calibración",
        "Caducidad de la facultad sancionatoria",
        "Prescripción del cobro a los 3 años",
      ],
    },
    pasos: [
      { titulo: "Verifica la notificación", texto: "Fecha, forma y constancia de entrega. De ahí corre el término de 11 días hábiles." },
      { titulo: "Decide rápido: pagar o impugnar", texto: "Pagar con descuento equivale a aceptar la infracción. Impugnar solo es posible dentro del término." },
      { titulo: "Reúne la prueba", texto: "Fotos del lugar y de la señalización, contrato de arrendamiento o venta del vehículo, historia clínica si hubo urgencia, testigos." },
      { titulo: "Asiste a la audiencia", texto: "Presenta descargos por escrito, pide pruebas y, si la decisión es adversa, apela dentro del término." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos el comparendo y los plazos, y te conectamos con un abogado de tránsito verificado." },
    ],
    faqs: [
      { pregunta: "¿Cuántos días tengo para impugnar un comparendo?", respuesta: "Once días hábiles desde la notificación para comparecer ante la autoridad de tránsito y presentar descargos. Vencido ese término la orden queda en firme y pasa a cobro." },
      { pregunta: "¿Si pago con descuento puedo impugnar después?", respuesta: "No. El pago con descuento del 50% o del 25% implica aceptar la infracción y cierra la posibilidad de discutirla." },
      { pregunta: "¿Pueden multarme por fotodetección si yo no conducía?", respuesta: "Debe dársete la oportunidad de identificar a quien conducía. La responsabilidad automática del propietario fue restringida por la jurisprudencia constitucional." },
      { pregunta: "¿Cuándo prescribe una multa de tránsito?", respuesta: "La facultad de cobro prescribe a los tres años contados desde que la multa quedó en firme, plazo que se interrumpe con la notificación del mandamiento de pago." },
      { pregunta: "¿Qué pasa si no pago el comparendo?", respuesta: "La deuda genera intereses, pasa a cobro coactivo y bloquea trámites como el traspaso del vehículo y la renovación de la licencia de conducción." },
    ],
  },

  "transito/accidentes": {
    h1: "Indemnización por accidente de tránsito",
    title: "Accidente de tránsito: indemnización",
    description: "Qué perjuicios se reclaman, contra quién y con qué pruebas tras un accidente de tránsito.",
    respuesta:
      "Quien causa un accidente de tránsito responde civilmente por todo el daño que produce: el daño emergente (reparación del vehículo, gastos médicos, medicamentos, transporte, prótesis), el lucro cesante (los ingresos dejados de percibir durante la incapacidad y hacia el futuro cuando quedan secuelas permanentes) y los perjuicios extrapatrimoniales (daño moral y daño a la vida de relación). La reclamación puede dirigirse simultáneamente contra el conductor, contra el propietario del vehículo —que responde por ser guardián de una actividad peligrosa— y contra la aseguradora de responsabilidad civil extracontractual cuando existe póliza vigente.",
    parrafos: [
      "La conducción de vehículos es una actividad peligrosa, y eso cambia la carga probatoria. La víctima no tiene que demostrar la culpa del conductor: basta acreditar el hecho, el daño y el nexo causal. Quien pretenda exonerarse debe probar una causa extraña —fuerza mayor, hecho exclusivo de un tercero o culpa exclusiva de la víctima—. Esa regla, construida sobre el artículo 2356 del Código Civil, es la razón por la que la mayoría de estos casos se ganan cuando la prueba del accidente está bien recogida.",
      "El informe policial de accidentes de tránsito es la pieza central. Contiene el croquis, la posición final de los vehículos, las huellas de frenado, la identificación de conductores, testigos y aseguradoras, y la hipótesis de causa probable. Pedir copia dentro de los días siguientes al accidente y verificar que los datos estén completos es el primer acto útil de cualquier reclamación.",
      "La documentación del daño corporal debe iniciarse el mismo día. Atención en urgencias, historia clínica, incapacidades, valoraciones de especialistas, terapias y, si quedan secuelas, el dictamen de pérdida de capacidad laboral. En lesiones, además, procede la valoración de Medicina Legal, que sirve tanto en el proceso penal por lesiones personales culposas como en la reclamación civil.",
      "El lucro cesante se prueba con ingresos: certificado laboral y desprendibles para trabajadores dependientes; declaración de renta, facturas, registros de ventas y certificación de contador para independientes. Cuando no hay prueba de ingresos, los jueces suelen tomar como base el salario mínimo, lo que en la práctica reduce sustancialmente la condena. Documentar bien los ingresos es lo que separa una indemnización simbólica de una real.",
      "El perjuicio moral se reconoce en salarios mínimos según la gravedad y el vínculo, con topes fijados por la jurisprudencia: en lesiones graves y en muerte se reconoce a la víctima directa y a su núcleo familiar cercano, y el daño a la vida de relación cuando la lesión afecta actividades placenteras o cotidianas de manera permanente.",
      "Frente a la aseguradora hay dos coberturas distintas que no se excluyen. El SOAT ampara a todas las víctimas con independencia de la culpa, con topes en salarios mínimos para gastos médicos, incapacidad permanente, muerte, gastos funerarios y transporte. La póliza de responsabilidad civil extracontractual del causante cubre, hasta el límite asegurado, los daños que exceden el SOAT y los daños materiales.",
      "La reclamación puede tramitarse por vía directa con la aseguradora, por conciliación extrajudicial —requisito de procedibilidad en asuntos civiles— o por demanda ante el juez civil. Cuando hubo lesiones personales o muerte también hay una vía penal por conducta culposa, dentro de la cual puede solicitarse el incidente de reparación integral; conviene decidir con criterio cuál vía se privilegia, porque no siempre conviene esperar el resultado penal.",
      "El tiempo juega en contra. La responsabilidad civil extracontractual prescribe en diez años, pero la reclamación contra la aseguradora prescribe en dos años desde que se conoce el siniestro, y las pruebas —testigos, cámaras, huellas, estado del vehículo— desaparecen en semanas. Actuar en los primeros días es lo que determina cuánto se puede probar meses después.",
    ],
    norma: {
      articulo: "Art. 2356 C.C.",
      norma: "Código Civil · Ley 769 de 2002 · Ley 1383 de 2010",
      texto:
        "Por regla general todo daño que pueda imputarse a malicia o negligencia de otra persona debe ser reparado por esta. Son especialmente obligados a esta reparación quienes ejercen actividades peligrosas, como la conducción de vehículos automotores.",
    },
    plazo: PLAZO_INDEMNIZACION,
    reclamar: {
      titulo: "Qué puedes reclamar",
      parrafos: [
        "La indemnización cubre todo el daño acreditado: lo que se gastó, lo que se dejó de ganar y el sufrimiento causado. Cada rubro exige su propia prueba y se liquida de manera independiente.",
        "El SOAT y la póliza de responsabilidad civil son complementarios: el primero paga con independencia de la culpa hasta sus topes, la segunda cubre el exceso y los daños materiales.",
      ],
      lista: [
        "Daño emergente: reparaciones, gastos médicos y transporte",
        "Lucro cesante consolidado y futuro por incapacidad o secuelas",
        "Daño moral y daño a la vida de relación",
        "Cobertura SOAT por gastos médicos, muerte o incapacidad",
        "Póliza de responsabilidad civil del causante",
        "Reparación integral en el proceso penal por lesiones culposas",
      ],
    },
    pasos: [
      { titulo: "Asegura el informe de accidente", texto: "Pide copia del IPAT con croquis, testigos y datos de la aseguradora. Sin él, la reclamación se vuelve cuesta arriba." },
      { titulo: "Documenta las lesiones desde el primer día", texto: "Urgencias, historia clínica, incapacidades, terapias y valoración de Medicina Legal si hay lesiones." },
      { titulo: "Prueba tus ingresos", texto: "Certificados, desprendibles, declaración de renta o facturas. Sin prueba, el lucro cesante se liquida sobre el salario mínimo." },
      { titulo: "Reclama SOAT y responsabilidad civil", texto: "Son coberturas distintas y compatibles. Cuantifica cada rubro por separado antes de negociar." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos pruebas, coberturas y plazos, y te conectamos con un abogado de tránsito verificado." },
    ],
    faqs: [
      { pregunta: "¿Debo probar la culpa del conductor?", respuesta: "No. La conducción es una actividad peligrosa: basta acreditar el hecho, el daño y el nexo causal. Es el demandado quien debe probar una causa extraña para exonerarse." },
      { pregunta: "¿Puedo demandar al dueño del vehículo si no conducía?", respuesta: "Sí. El propietario responde como guardián de la actividad peligrosa, solidariamente con el conductor, sin perjuicio de que después repita contra él." },
      { pregunta: "¿El SOAT excluye reclamar más?", respuesta: "No. El SOAT paga hasta sus topes con independencia de la culpa; lo que exceda esos topes y los daños materiales se reclaman al causante y a su póliza de responsabilidad civil." },
      { pregunta: "¿Cuánto se reconoce por daño moral?", respuesta: "Se fija en salarios mínimos según la gravedad de la lesión y el vínculo con la víctima, dentro de los topes fijados por la jurisprudencia de las altas cortes." },
      { pregunta: "¿Cuánto tiempo tengo para reclamar?", respuesta: "Diez años frente al causante por responsabilidad civil extracontractual, pero solo dos años frente a la aseguradora desde que se conoce el siniestro. Actuar pronto también protege la prueba." },
    ],
  },

  "transito/indemnizaciones": {
    h1: "Reclamación del SOAT en Colombia",
    title: "Reclamación SOAT: cómo cobrarlo",
    description: "Qué cubre el SOAT, cuánto paga, cómo se reclama ante la aseguradora o la ADRES y qué hacer si lo niegan.",
    respuesta:
      "El SOAT es un seguro obligatorio que ampara a todas las víctimas de un accidente de tránsito —conductor, pasajeros y peatones— sin importar quién tuvo la culpa. Cubre gastos médicos, quirúrgicos y hospitalarios hasta 800 salarios mínimos diarios legales vigentes, indemnización por muerte de 750 SMDLV, incapacidad permanente hasta 180 SMDLV, gastos funerarios de 150 SMDLV y gastos de transporte de la víctima de 10 SMDLV. Se reclama ante la aseguradora del vehículo involucrado y, cuando el vehículo se dio a la fuga, no está identificado o no tiene póliza vigente, ante la ADRES a través del mecanismo de vehículos no asegurados o fantasma.",
    parrafos: [
      "La cobertura opera de forma automática: la institución prestadora de salud atiende a la víctima y factura directamente a la aseguradora hasta el tope legal. La víctima no debe pagar la atención inicial ni ser condicionada a un anticipo, y la negativa de atención en urgencias por discusiones sobre la póliza es una conducta sancionable que además puede combatirse por tutela.",
      "Los rubros que la víctima reclama directamente son la indemnización por incapacidad permanente, la de muerte, los gastos funerarios y los gastos de transporte. Cada uno tiene su propio soporte documental: dictamen o certificación médica que acredite la incapacidad permanente y su porcentaje; registro civil de defunción y documentos que acrediten el parentesco en caso de muerte; facturas a nombre de quien pagó el sepelio; y soportes del traslado.",
      "La prueba de que el hecho fue un accidente de tránsito es indispensable. Sirven el informe policial, la historia clínica que describa el mecanismo del trauma, el reporte de la ambulancia, la denuncia y los testimonios. Las aseguradoras niegan con frecuencia alegando que el hecho no fue de tránsito, que la lesión no tiene nexo con el accidente o que el vehículo no estaba involucrado, y esas objeciones se desvirtúan con documentos, no con relatos.",
      "Cuando el vehículo huyó, no fue identificado o carecía de SOAT vigente, la cobertura la asume la ADRES con cargo a la subcuenta correspondiente, con los mismos topes en gastos médicos y con reglas específicas para las indemnizaciones. El trámite exige acreditar la ocurrencia del accidente y la imposibilidad de identificar el vehículo, normalmente con el informe de la autoridad y la denuncia.",
      "El SOAT no cubre daños materiales: no paga la reparación del vehículo ni los bienes destruidos. Tampoco cubre el lucro cesante ni el daño moral. Esos rubros se reclaman al causante y a su póliza de responsabilidad civil extracontractual, y el pago del SOAT no impide ni disminuye esa reclamación, salvo por la imputación de lo ya recibido en gastos médicos.",
      "La aseguradora debe pronunciarse sobre la reclamación dentro del término legal de un mes contado desde que se acredita el derecho, según el artículo 1080 del Código de Comercio. Vencido ese término sin pago, se causan intereses moratorios a la tasa máxima legal y la póliza, junto con la reclamación acreditada, presta mérito ejecutivo para demandar directamente el pago.",
      "Cuando la aseguradora objeta, la vía es la reclamación escrita con soportes completos, la queja ante la Superintendencia Financiera y, si persiste la negativa, la demanda: proceso ejecutivo cuando el derecho está acreditado, o verbal cuando la controversia exige debate probatorio. En casos de urgencia médica y víctimas sin recursos, la tutela ha ordenado la atención inmediata.",
      "Un error frecuente es reclamar tarde y con documentos incompletos. Conviene armar la carpeta desde el primer día —informe de accidente, historia clínica, incapacidades, facturas, cédulas y registro civil cuando aplica— y radicar la reclamación con constancia. Ese radicado es el que fija la fecha desde la cual corren los intereses y el que interrumpe la discusión sobre la prescripción.",
    ],
    norma: {
      articulo: "Art. 192 Estatuto Orgánico del Sistema Financiero",
      norma: "Ley 769 de 2002 · Decreto 780 de 2016 · Código de Comercio art. 1080",
      texto:
        "Las víctimas de accidentes de tránsito tendrán derecho a las coberturas del seguro obligatorio por gastos médicos, quirúrgicos, farmacéuticos y hospitalarios, incapacidad permanente, muerte, gastos funerarios y gastos de transporte y movilización de las víctimas, con independencia de la responsabilidad en el accidente.",
    },
    plazo: PLAZO_INDEMNIZACION,
    reclamar: {
      titulo: "Qué cubre y qué no cubre el SOAT",
      parrafos: [
        "El SOAT cubre a la persona, no al vehículo: atención médica, incapacidad permanente, muerte, gastos funerarios y transporte, dentro de los topes en salarios mínimos diarios.",
        "No cubre daños materiales, lucro cesante ni daño moral. Esos rubros se reclaman al causante y a su póliza de responsabilidad civil extracontractual.",
      ],
      lista: [
        "Gastos médicos hasta 800 SMDLV",
        "Indemnización por muerte de 750 SMDLV",
        "Incapacidad permanente hasta 180 SMDLV",
        "Gastos funerarios de 150 SMDLV",
        "Gastos de transporte de la víctima de 10 SMDLV",
        "Cobertura de la ADRES si el vehículo es fantasma o no asegurado",
      ],
    },
    pasos: [
      { titulo: "Confirma la aseguradora del vehículo", texto: "Con la placa y el informe policial. Si no hay póliza o el vehículo huyó, la reclamación va a la ADRES." },
      { titulo: "Arma la carpeta desde el primer día", texto: "Informe de accidente, historia clínica, incapacidades, facturas, cédulas y registro civil cuando hay fallecimiento." },
      { titulo: "Radica con constancia", texto: "El radicado fija la fecha desde la cual corre el término de un mes para el pago y los intereses moratorios." },
      { titulo: "Si objetan, escala", texto: "Reclamación escrita con soportes, queja ante la Superintendencia Financiera y demanda ejecutiva o verbal según el caso." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos coberturas, topes y plazos, y te conectamos con un abogado de tránsito verificado." },
    ],
    faqs: [
      { pregunta: "¿El SOAT paga aunque yo haya tenido la culpa?", respuesta: "Sí. El SOAT ampara a todas las víctimas con independencia de la responsabilidad en el accidente, incluido el conductor causante, dentro de los topes legales." },
      { pregunta: "¿Qué pasa si el vehículo se dio a la fuga?", respuesta: "La cobertura la asume la ADRES a través del mecanismo para vehículos no asegurados o no identificados, acreditando la ocurrencia del accidente con el informe de la autoridad y la denuncia." },
      { pregunta: "¿El SOAT cubre la reparación del carro?", respuesta: "No. El SOAT solo cubre daños a las personas. Los daños materiales se reclaman al causante y a su póliza de responsabilidad civil extracontractual." },
      { pregunta: "¿En cuánto tiempo debe pagar la aseguradora?", respuesta: "Dentro del mes siguiente a que se acredite el derecho. Vencido ese término se causan intereses moratorios y la reclamación presta mérito ejecutivo." },
      { pregunta: "¿Puedo reclamar SOAT e indemnización al causante?", respuesta: "Sí. Son fuentes distintas y compatibles; solo se imputa lo ya recibido por el mismo concepto, típicamente gastos médicos." },
    ],
  },
};

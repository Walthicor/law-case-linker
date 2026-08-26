import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo INMOBILIARIO.
 * Norma base: Código Civil · Ley 675 de 2001 · Decreto 1077 de 2015.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */
export const SUBAREAS_INMOBILIARIO: Record<string, ContenidoSubarea> = {
  "inmobiliario/compraventa": {
    h1: "Promesa de compraventa de inmueble",
    title: "Promesa de compraventa de inmueble",
    description: "Requisitos de validez, arras, cláusula penal y qué hacer si la otra parte no cumple.",
    respuesta:
      "La promesa de compraventa es el contrato con el que dos partes se obligan a celebrar en el futuro la escritura pública de venta de un inmueble. Para que produzca efectos debe cumplir los cuatro requisitos del artículo 1611 del Código Civil: constar por escrito, versar sobre un contrato que no sea de aquellos que la ley declara ineficaces, contener un plazo o una condición que fije la época de celebración del contrato prometido, y determinar el contrato de tal modo que solo falte la tradición o las formalidades legales. Si falta uno de esos requisitos la promesa no obliga, y quien pagó queda expuesto a discutir la devolución del dinero sin poder exigir la escritura.",
    parrafos: [
      "El plazo o la condición debe ser cierto y verificable: día, hora y notaría determinada. «Se firmará cuando salga el crédito» no es una época determinada y ha sido causa de nulidad en numerosos litigios; la fórmula correcta condiciona a un hecho verificable con fecha límite, por ejemplo la aprobación del crédito antes de una fecha específica, vencida la cual la promesa se resuelve con devolución de lo pagado.",
      "La identificación del inmueble debe ser completa: matrícula inmobiliaria, cédula catastral, dirección actual, área, linderos según el título y la relación con la unidad privada y los coeficientes cuando se trata de propiedad horizontal. La descripción tomada del aviso de venta y no del certificado de tradición es una de las causas más comunes de devoluciones en la notaría y en el registro.",
      "Las arras y la cláusula penal cumplen funciones distintas. Las arras de retractación permiten desistir del negocio perdiendo lo entregado —o devolviendo el doble, si desiste quien las recibió— y por eso conviene evitarlas cuando lo que se quiere es asegurar la venta. Las arras confirmatorias son parte del precio y no habilitan retractarse. La cláusula penal tasa por anticipado los perjuicios del incumplimiento y, para poder exigirla junto con la obligación principal, debe pactarse expresamente que se acumulan.",
      "El estudio de títulos es la parte del proceso donde se evitan los verdaderos problemas: certificado de tradición y libertad de los últimos años, escrituras antecedentes, embargos, hipotecas, patrimonio de familia inembargable, afectación a vivienda familiar, condiciones resolutorias, servidumbres, procesos de pertenencia, sucesiones mal cerradas, licencias de construcción y paz y salvos de predial, valorización y administración. Comprar sin estudio de títulos es comprar un pleito con descuento.",
      "Cuando hay crédito hipotecario, la promesa debe articularse con los tiempos del banco: avalúo, estudio de títulos de la entidad, aprobación en firme, elaboración de la minuta con la hipoteca a favor del banco, firma y desembolso posterior al registro. Esa secuencia significa que el vendedor recibe el saldo después de registrada la escritura, lo que debe quedar expresamente previsto en la promesa para evitar discusiones sobre la entrega del inmueble.",
      "Si el vendedor no cumple, el comprador puede exigir el cumplimiento con la escritura o la resolución del contrato, y en ambos casos la indemnización de perjuicios o la cláusula penal. La demanda de cumplimiento con la promesa como prueba permite que el juez otorgue la escritura en nombre del renuente, lo que hace de la promesa bien redactada un instrumento realmente ejecutable. También puede inscribirse la demanda para advertir a terceros.",
      "Si el comprador incumple, el vendedor conserva el inmueble y puede exigir la cláusula penal o la retención de las arras según lo pactado, además de reclamar los perjuicios adicionales cuando se acreditan. La liquidación de las sumas ya recibidas y su imputación deben estar previstas para evitar un enriquecimiento sin causa.",
      "Un punto que suele pasarse por alto es la entrega material. Debe pactarse cuándo se entrega el inmueble, en qué estado, con qué servicios al día y con qué inventario, y qué ocurre si el vendedor sigue habitándolo después de la escritura. Los acuerdos verbales sobre este punto son la fuente más frecuente de conflictos posteriores a una operación que, en lo demás, salió bien.",
    ],
    norma: {
      articulo: "Art. 1611 C.C.",
      norma: "Código Civil · Ley 1480 de 2011 · Decreto 1077 de 2015",
      texto:
        "La promesa de celebrar un contrato no produce obligación alguna, salvo que concurran las circunstancias siguientes: que la promesa conste por escrito; que el contrato a que la promesa se refiere no sea de aquellos que las leyes declaran ineficaces; que la promesa contenga un plazo o condición que fije la época en que ha de celebrarse el contrato; y que se determine de tal suerte el contrato, que para perfeccionarlo solo falte la tradición de la cosa o las formalidades legales.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Vicios ocultos: 1 año en inmuebles",
      texto:
        "La acción redhibitoria por vicios ocultos prescribe en 1 año para bienes inmuebles y en 6 meses para muebles, contados desde la entrega real (CC art. 1923). La acción para pedir rebaja del precio prescribe en 18 meses para inmuebles. La acción resolutoria y la de cumplimiento del contrato prescriben en 10 años, y la ejecutiva en 5 (CC art. 2536, Ley 791 de 2002).",
    },
    reclamar: {
      titulo: "Qué puedes exigir si no cumplen",
      parrafos: [
        "La promesa que cumple los requisitos del artículo 1611 permite pedir el cumplimiento forzado: el juez otorga la escritura en nombre de quien se niega a firmar, y esa posibilidad es la que le da valor real al documento.",
        "La alternativa es la resolución con devolución de lo pagado y perjuicios. La elección depende de si el inmueble sigue siendo de interés y de si aparecieron gravámenes o terceros.",
      ],
      lista: [
        "Cumplimiento forzado con otorgamiento de la escritura por el juez",
        "Resolución del contrato con devolución de lo pagado",
        "Cláusula penal o arras según lo pactado",
        "Perjuicios adicionales acreditados",
        "Inscripción de la demanda para oponerla a terceros",
      ],
    },
    pasos: [
      { titulo: "Pide el certificado de tradición", texto: "Antes de firmar nada. Verifica titularidad, embargos, hipotecas, afectaciones y condiciones resolutorias." },
      { titulo: "Redacta con los 4 requisitos", texto: "Escrito, contrato lícito, época determinada con notaría y fecha, e inmueble plenamente identificado." },
      { titulo: "Define arras y cláusula penal", texto: "Si quieres asegurar la venta, evita arras de retractación y pacta cláusula penal acumulable con la obligación principal." },
      { titulo: "Sincroniza con el banco", texto: "Aprobación en firme, minuta con hipoteca, firma, registro y desembolso. Deja el orden por escrito en la promesa." },
      { titulo: "Pacta la entrega material", texto: "Fecha, estado, inventario, servicios al día y consecuencias si el vendedor no entrega tras la escritura." },
    ],
    faqs: [
      {
        pregunta: "¿La promesa de compraventa debe hacerse ante notario?",
        respuesta:
          "No es obligatorio: la ley solo exige que conste por escrito. Sin embargo, autenticar las firmas o elevarla a escritura pública facilita la prueba, evita discusiones sobre la autenticidad y es recomendable cuando hay sumas importantes de por medio.",
      },
      {
        pregunta: "¿Puedo retractarme de una promesa firmada?",
        respuesta:
          "Solo si se pactaron arras de retractación, perdiendo lo entregado o devolviendo el doble según quién desista. Si se pactaron arras confirmatorias o no se pactó nada, la parte cumplida puede exigir el cumplimiento forzado o la resolución con indemnización de perjuicios.",
      },
      {
        pregunta: "¿Qué pasa si el vendedor se niega a firmar la escritura?",
        respuesta:
          "Procede la demanda de cumplimiento: si la promesa reúne los requisitos legales, el juez ordena otorgar la escritura y puede firmarla en nombre del renuente. Conviene inscribir la demanda en el folio de matrícula para que la decisión sea oponible a terceros.",
      },
      {
        pregunta: "¿Qué reviso antes de comprar un inmueble?",
        respuesta:
          "Certificado de tradición y libertad, escrituras antecedentes, paz y salvos de predial, valorización y administración, estado de la propiedad horizontal, licencias, área y linderos, y la ausencia de embargos, hipotecas, patrimonio de familia, afectación a vivienda familiar o procesos en curso.",
      },
      {
        pregunta: "¿Qué plazo tengo si el inmueble tenía defectos ocultos?",
        respuesta:
          "La acción redhibitoria por vicios ocultos en inmuebles prescribe en un año contado desde la entrega real, y la acción para pedir rebaja del precio en dieciocho meses. Por eso las inspecciones técnicas y el registro fotográfico al recibir son determinantes.",
      },
    ],
    guias: ["revisar-antes-de-comprar", "pasos-restitucion"],
  },

  "inmobiliario/escrituracion": {
    h1: "Escrituración de inmueble en Colombia",
    title: "Escrituración de inmueble en Colombia",
    description: "Pasos en notaría y registro, documentos, costos y qué hacer si la escritura se devuelve.",
    respuesta:
      "La escrituración es el acto por el cual la venta de un inmueble se eleva a escritura pública ante notario; pero la propiedad solo se transfiere con el registro de esa escritura en la Oficina de Registro de Instrumentos Públicos, mediante la inscripción en el folio de matrícula inmobiliaria. Escritura firmada y no registrada no hace dueño a nadie frente a terceros. El trámite exige documentos completos —certificado de tradición vigente, paz y salvos de predial y valorización, paz y salvo de administración en propiedad horizontal, cédulas y estado civil de las partes, y levantamiento de gravámenes cuando existan— y el pago de derechos notariales, retención en la fuente, boleta fiscal y derechos de registro.",
    parrafos: [
      "El orden del trámite importa. Primero se verifica el estudio de títulos y se reúnen los paz y salvos; después se elabora la minuta, que debe reflejar exactamente lo pactado en la promesa, con la identificación del inmueble tomada del folio de matrícula y no del aviso de venta; luego se revisa la minuta con ambas partes y con el banco cuando hay hipoteca; y solo entonces se agenda la firma. Firmar sobre una minuta no revisada es la causa número uno de correcciones posteriores.",
      "Los costos suelen distribuirse por costumbre y no por ley, de modo que conviene pactarlos en la promesa. En la práctica los derechos notariales se dividen por partes iguales, la retención en la fuente por enajenación la asume el vendedor, la boleta fiscal y los derechos de registro los paga el comprador, y los gastos del crédito hipotecario corren por cuenta de quien lo toma. Cualquier distribución distinta es válida si se acuerda expresamente.",
      "El vendedor debe acreditar su capacidad y legitimación. Si es casado o convive en unión marital y el inmueble está afectado a vivienda familiar, se requiere el consentimiento del otro cónyuge o compañero. Si actúa por poder, este debe ser especial, autenticado y vigente. Si el titular falleció, primero hay que adelantar la sucesión: no se puede vender un inmueble a nombre de una persona fallecida, por más acuerdo que exista entre los herederos.",
      "En inmuebles con hipoteca vigente el trámite se resuelve con la cancelación simultánea: el banco acreedor emite el paz y salvo y la minuta de cancelación de hipoteca, que se firma junto con la venta y se registra en el mismo turno. Cuando el comprador toma crédito, la escritura incorpora la nueva hipoteca a favor de su banco y el desembolso se hace contra la entrega del certificado de tradición con la inscripción efectuada.",
      "Después de la firma, la escritura se lleva a registro y allí puede ser devuelta. Las causas más frecuentes son la falta de paz y salvos, la discrepancia entre el área o los linderos y lo que figura en el folio, la falta de cancelación de un gravamen, errores en la identificación de las partes, ausencia de la boleta fiscal o el impuesto de registro mal liquidado. La corrección se hace mediante escritura aclaratoria, lo que implica volver a notaría y pagar de nuevo derechos.",
      "El comprador debe verificar el resultado y no confiarse: solicitar el certificado de tradición actualizado después del registro es el único modo de confirmar que la propiedad quedó inscrita a su nombre, sin anotaciones inesperadas. Ese documento es también el que se exige para actualizar el predial, para la administración y para cualquier operación futura sobre el bien.",
      "En proyectos sobre planos hay reglas adicionales. La entrega y la escrituración dependen del recibo de obra y de la constitución del reglamento de propiedad horizontal; el patrimonio autónomo o la fiducia intervienen en el manejo de los recursos; y el comprador conserva las garantías legales de la Ley 1480 de 2011 y las garantías de estabilidad de la obra, que corren desde la entrega y son exigibles al constructor.",
      "Finalmente, conviene planear el impacto tributario antes de firmar. La ganancia ocasional por la venta, las condiciones para su exención en vivienda de habitación, la retención aplicable y el efecto del avalúo catastral sobre el impuesto predial deben revisarse con anticipación, porque después de la escritura el margen de planeación es prácticamente nulo.",
    ],
    norma: {
      articulo: "Art. 1857 C.C. y art. 756 C.C.",
      norma: "Código Civil · Ley 1579 de 2012 · Decreto 1077 de 2015",
      texto:
        "La venta de los bienes raíces, servidumbres y la de una sucesión hereditaria, no se reputan perfectas ante la ley, mientras no se ha otorgado escritura pública. Se efectuará la tradición del dominio de los bienes raíces por la inscripción del título en la oficina de registro de instrumentos públicos.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "El registro es lo que transfiere la propiedad",
      texto:
        "La escritura pública perfecciona la venta, pero la propiedad se transfiere con la inscripción en el folio de matrícula. El impuesto de registro y la boleta fiscal deben liquidarse dentro de los términos previstos para evitar sanciones e intereses. La acción por vicios ocultos en inmuebles prescribe en 1 año desde la entrega real.",
    },
    reclamar: {
      titulo: "Documentos que exige la notaría",
      parrafos: [
        "Reunir la carpeta completa antes de agendar la firma es lo que evita reprogramaciones y devoluciones en registro. La notaría no suple documentos faltantes ni verifica el estado real del inmueble.",
        "Cuando hay crédito, la lista se amplía con los requisitos del banco: avalúo, seguros, estudio de títulos propio y minuta con la hipoteca en el formato de la entidad.",
      ],
      lista: [
        "Certificado de tradición y libertad vigente",
        "Paz y salvo de predial, valorización y administración",
        "Cédulas, estado civil y poderes especiales autenticados",
        "Cancelación de hipotecas y levantamiento de gravámenes",
        "Boleta fiscal, retención en la fuente y derechos de registro",
      ],
    },
    pasos: [
      { titulo: "Cierra el estudio de títulos", texto: "Verifica titularidad, gravámenes, afectaciones, área y linderos contra el folio de matrícula." },
      { titulo: "Reúne paz y salvos", texto: "Predial, valorización y administración. Sin ellos la notaría no firma y el registro devuelve." },
      { titulo: "Revisa la minuta antes de firmar", texto: "Debe reflejar la promesa: precio, forma de pago, entrega, identificación exacta del inmueble y gravámenes a cancelar." },
      { titulo: "Firma y paga los derechos", texto: "Derechos notariales, retención, boleta fiscal e impuesto de registro según la distribución pactada." },
      { titulo: "Verifica el registro", texto: "Solicita el certificado de tradición actualizado. Solo con la inscripción quedas como propietario frente a terceros." },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto se demora escriturar un inmueble?",
        respuesta:
          "Con documentos completos y sin crédito, la firma puede agendarse en pocos días y el registro suele tomar entre una y tres semanas según la oficina. Con crédito hipotecario el tiempo depende del banco: avalúo, estudio de títulos y aprobación pueden sumar varias semanas antes de la firma.",
      },
      {
        pregunta: "¿Quién paga los gastos de la escritura?",
        respuesta:
          "No hay una regla legal única. Por costumbre los derechos notariales se dividen por mitades, el vendedor asume la retención en la fuente y el comprador la boleta fiscal y los derechos de registro. Lo recomendable es pactar la distribución expresamente en la promesa de compraventa.",
      },
      {
        pregunta: "¿La escritura firmada ya me hace propietario?",
        respuesta:
          "No. La escritura perfecciona el contrato, pero la propiedad se transfiere con la inscripción en el folio de matrícula inmobiliaria. Hasta que el registro no se efectúe, el inmueble sigue figurando a nombre del vendedor y puede ser objeto de embargos u otras anotaciones.",
      },
      {
        pregunta: "¿Qué hago si me devolvieron la escritura del registro?",
        respuesta:
          "Hay que identificar la causal en la nota devolutiva y corregirla, generalmente mediante escritura aclaratoria: paz y salvos faltantes, diferencias de área o linderos, gravámenes no cancelados, errores en los datos de las partes o impuestos mal liquidados. Después se vuelve a radicar el registro.",
      },
      {
        pregunta: "¿Puedo comprar un inmueble de una persona fallecida?",
        respuesta:
          "No directamente. Primero debe adelantarse la sucesión y adjudicarse el bien a los herederos, con la partición registrada. Solo entonces los adjudicatarios pueden vender. Cualquier acuerdo previo con los herederos es válido entre ellos pero no permite escriturar.",
      },
    ],
    guias: ["revisar-antes-de-comprar", "contrato-arrendamiento"],
  },

  "inmobiliario/propiedad-horizontal": {
    h1: "Abogado de propiedad horizontal",
    title: "Abogado de propiedad horizontal",
    description: "Cuotas de administración, sanciones, asambleas y conflictos bajo la Ley 675 de 2001.",
    respuesta:
      "La propiedad horizontal se rige por la Ley 675 de 2001 y por el reglamento de cada edificio o conjunto, que es obligatorio para propietarios, tenedores y visitantes. Los conflictos más frecuentes son el cobro de cuotas de administración —que prestan mérito ejecutivo con la certificación del administrador— la imposición de sanciones por incumplir el reglamento, el uso indebido de bienes comunes, las obras que afectan la estructura o la fachada, la responsabilidad del administrador y del consejo, y la impugnación de las decisiones de la asamblea, que debe presentarse dentro de los 2 meses siguientes a la reunión. La copropiedad es persona jurídica sin ánimo de lucro y responde como tal.",
    parrafos: [
      "Las cuotas de administración y las extraordinarias aprobadas en asamblea son obligatorias, incluso para quien no asistió o votó en contra, y su cobro se hace por proceso ejecutivo con base en la certificación expedida por el administrador sobre el estado de la deuda. El propietario deudor no puede excusarse alegando que no usa las zonas comunes ni que el servicio de administración es deficiente; esos reclamos se tramitan por vías distintas y no suspenden la obligación de pagar.",
      "Las sanciones por incumplimiento del reglamento solo pueden imponerse si están previstas en él y respetando el debido proceso: comunicación de los hechos, oportunidad de descargos, decisión motivada y posibilidad de impugnarla. La Ley 675 permite sanciones como la publicación en lugares de amplia circulación, la imposición de multas sucesivas y la restricción del uso de zonas comunes no esenciales; nunca la suspensión de servicios públicos domiciliarios ni el impedimento de acceso a la unidad privada.",
      "La asamblea general es el órgano máximo y sus decisiones obligan a todos. Para que sean válidas se requieren convocatoria en debida forma con la antelación del reglamento, quórum deliberatorio y decisorio según la materia, y acta suscrita por presidente y secretario. Las decisiones que afectan bienes comunes esenciales, cambian la destinación o imponen cargas especiales requieren mayorías calificadas, y varias exigen unanimidad o el consentimiento de los afectados.",
      "La impugnación de decisiones procede cuando la asamblea se apartó de la ley o del reglamento, cuando la convocatoria fue irregular, cuando no había quórum o cuando la decisión excede sus competencias o vulnera derechos de los copropietarios. Debe presentarse dentro de los dos meses siguientes a la comunicación o publicación del acta, y puede acompañarse de una solicitud de suspensión provisional de la decisión mientras se decide.",
      "El administrador es el representante legal de la persona jurídica y responde por su gestión. Sus obligaciones incluyen convocar la asamblea, llevar la contabilidad, custodiar los archivos, ejecutar las decisiones, cobrar las cuotas, contratar los seguros obligatorios sobre bienes comunes y rendir cuentas. Cuando incumple, procede su remoción por la asamblea o el consejo según el reglamento, y la acción de responsabilidad por los perjuicios causados.",
      "Los bienes comunes esenciales —estructura, cimientos, fachadas, cubiertas, redes matrices, accesos— no pueden desafectarse ni convertirse en privados. Los bienes comunes no esenciales sí pueden desafectarse con el lleno de requisitos legales y las mayorías calificadas, e incluso darse en uso exclusivo mediante decisión de la asamblea, lo que suele generar conflictos cuando no se documenta correctamente en el reglamento.",
      "Las obras y reformas en unidades privadas requieren autorización cuando afectan la estructura, la fachada, las redes comunes o la seguridad del edificio, además de la licencia urbanística que exija la normativa. Ejecutar una obra sin autorización expone a la orden de restitución al estado anterior, a la indemnización de los daños y a las sanciones del reglamento, además de la responsabilidad frente a la aseguradora.",
      "Para el propietario, la ruta práctica cuando hay conflicto es la misma: revisar el reglamento, pedir por escrito la información y las actas, dejar constancia de sus objeciones, agotar la conciliación —que en propiedad horizontal suele ser eficaz por la convivencia continuada— y, si no hay solución, acudir a la impugnación o al proceso judicial correspondiente dentro de los términos.",
    ],
    norma: {
      articulo: "Art. 29 y 48 Ley 675 de 2001",
      norma: "Ley 675 de 2001 · Código Civil · Código General del Proceso",
      texto:
        "Los propietarios de bienes privados de un edificio o conjunto responderán solidariamente por el pago de las expensas comunes necesarias. La obligación de contribuir oportunamente con las expensas comunes se hará exigible mediante certificación expedida por el administrador, la cual prestará mérito ejecutivo.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Impugnación de decisiones: 2 meses",
      texto:
        "La impugnación de las decisiones de la asamblea debe presentarse dentro de los 2 meses siguientes a la fecha de la comunicación o publicación del acta (art. 46 Ley 675 de 2001). El cobro ejecutivo de expensas comunes se rige por los términos de prescripción de la obligación respectiva, y las sanciones del reglamento deben imponerse respetando el debido proceso.",
    },
    reclamar: {
      titulo: "Qué se puede reclamar",
      parrafos: [
        "Del lado de la copropiedad, la vía principal es el cobro ejecutivo de expensas con la certificación del administrador, acompañado de medidas cautelares sobre la unidad privada y sobre otros bienes del deudor.",
        "Del lado del propietario, las herramientas son el acceso a la información, la impugnación de decisiones, la acción de responsabilidad contra el administrador y la reclamación por daños provenientes de bienes comunes.",
      ],
      lista: [
        "Cobro ejecutivo de cuotas ordinarias y extraordinarias",
        "Impugnación de decisiones de la asamblea",
        "Nulidad de sanciones impuestas sin debido proceso",
        "Reparación de daños originados en bienes comunes",
        "Remoción y responsabilidad del administrador",
      ],
    },
    pasos: [
      { titulo: "Lee el reglamento", texto: "Coeficientes, órganos, mayorías, régimen de sanciones y de bienes comunes. Es la norma que rige el conflicto." },
      { titulo: "Solicita información por escrito", texto: "Actas, estados financieros, contratos y presupuesto. La negativa injustificada es una falta del administrador." },
      { titulo: "Deja constancia en la asamblea", texto: "Vota en contra y pide que quede en el acta: habilita la impugnación dentro de los 2 meses." },
      { titulo: "Intenta la conciliación", texto: "En copropiedades funciona porque la convivencia continúa. Un acuerdo escrito evita años de tensión." },
      { titulo: "Ejecuta o impugna", texto: "Cobro ejecutivo con la certificación del administrador, o impugnación judicial con solicitud de suspensión de la decisión." },
    ],
    faqs: [
      {
        pregunta: "¿Pueden cortarme el agua por no pagar la administración?",
        respuesta:
          "No. La copropiedad no puede suspender servicios públicos domiciliarios ni impedir el acceso a la unidad privada como sanción. Las medidas legales son las multas y sanciones previstas en el reglamento, la publicación de la lista de deudores en los términos de la ley y el cobro ejecutivo.",
      },
      {
        pregunta: "¿Debo pagar cuotas extraordinarias que no aprobé?",
        respuesta:
          "Sí, si fueron aprobadas válidamente por la asamblea con el quórum y las mayorías exigidas. Las decisiones obligan también a quien no asistió o votó en contra. La vía para discutirlas es la impugnación dentro de los dos meses, no el no pago.",
      },
      {
        pregunta: "¿Cómo se cobran las cuotas atrasadas?",
        respuesta:
          "Por proceso ejecutivo, con base en la certificación que expide el administrador sobre el estado de la deuda, la cual presta mérito ejecutivo. Pueden solicitarse medidas cautelares desde el mandamiento de pago, incluido el embargo de la unidad privada.",
      },
      {
        pregunta: "¿Puedo impugnar una decisión de la asamblea?",
        respuesta:
          "Sí, dentro de los dos meses siguientes a la comunicación o publicación del acta, cuando la decisión es contraria a la ley o al reglamento, hubo vicios en la convocatoria o el quórum, o excede las competencias de la asamblea. Puede pedirse la suspensión provisional de la decisión.",
      },
      {
        pregunta: "¿Quién responde por una filtración que viene de zonas comunes?",
        respuesta:
          "La copropiedad, como persona jurídica, responde por los daños originados en bienes comunes y debe repararlos con cargo al presupuesto o al seguro obligatorio. El propietario afectado debe reportar por escrito, documentar el daño y, si no hay respuesta, reclamar judicialmente.",
      },
    ],
    guias: ["pasos-restitucion", "revisar-antes-de-comprar"],
  },

  "inmobiliario/linderos": {
    h1: "Deslinde y amojonamiento de predios",
    title: "Deslinde y amojonamiento de predios",
    description: "Cómo fijar los límites de un predio cuando el vecino invade o los linderos son inciertos.",
    respuesta:
      "El deslinde y amojonamiento es el proceso con el que se fija judicialmente la línea divisoria entre dos predios colindantes y se colocan los mojones que la materializan en el terreno. Procede cuando los límites son inciertos, confusos o han desaparecido, y su presupuesto es que ambas partes reconozcan la propiedad del otro sobre su predio: lo que se discute es dónde está el lindero, no de quién es la tierra. Si lo que se disputa es la titularidad o hay ocupación por quien alega ser dueño, la vía correcta es la acción reivindicatoria. Escoger mal el proceso es el error que más tiempo y dinero cuesta en estos conflictos.",
    parrafos: [
      "La prueba central es documental y técnica. Se parte de las escrituras y del folio de matrícula de ambos predios, con sus linderos y cabidas; se comparan con los antecedentes registrales y con la información catastral; y se apoya todo en un levantamiento topográfico georreferenciado que traduzca esos títulos a coordenadas reales sobre el terreno. Cuando los títulos son antiguos y describen linderos por referencias desaparecidas —«hasta el árbol de mango», «por la cerca de alambre»— el trabajo del topógrafo y del perito es el que decide el resultado.",
      "El proceso es declarativo y se tramita conforme al Código General del Proceso. En la demanda deben identificarse plenamente ambos predios, acompañarse los títulos, el certificado de tradición y el plano, y solicitarse la diligencia de deslinde en la que el juez, con el auxilio del perito, recorre el terreno, fija la línea y ordena colocar los mojones. La sentencia que aprueba el deslinde se inscribe en los folios de matrícula de ambos predios, y esa inscripción es la que da seguridad jurídica hacia el futuro.",
      "Cuando el vecino ocupó parte del terreno, el deslinde puede ir acompañado de la orden de restitución de la franja invadida y de la remoción de las construcciones y cercas que la materializan. Si la ocupación se prolongó por el tiempo necesario y con ánimo de señor y dueño, el ocupante puede alegar prescripción adquisitiva y proponer una demanda de pertenencia, que cambia por completo el escenario y obliga a discutir la posesión.",
      "Antes de judicializar conviene intentar el acuerdo. Un deslinde convencional documentado en escritura pública, con plano firmado por topógrafo e inscrito en el registro, produce el mismo efecto práctico que la sentencia, cuesta mucho menos y evita años de vecindad conflictiva. La conciliación extrajudicial en derecho, con el plano como soporte, es la vía natural para lograrlo.",
      "En predios rurales aparecen elementos adicionales: servidumbres de tránsito y de acueducto, cercas de linderos y su mantenimiento compartido, corrientes de agua que sirven de límite y que pueden desplazarse, y la posible existencia de baldíos o de reservas que impiden ciertas adjudicaciones. La información de la autoridad catastral y de la agencia de tierras suele ser indispensable para no litigar sobre supuestos equivocados.",
      "Las diferencias de cabida entre lo que dice el título y lo que mide el terreno son frecuentes y tienen tratamiento propio en el Código Civil, según se haya vendido el predio como cuerpo cierto o con indicación de superficie. En la venta como cuerpo cierto, las diferencias razonables no dan lugar a reclamación; cuando se vendió señalando cabida, hay reglas específicas sobre rebaja del precio o desistimiento, con términos cortos que conviene revisar apenas se detecta la discrepancia.",
      "También existe la vía administrativa: los procesos de actualización y de corrección catastral permiten ajustar áreas y linderos cuando el error es del registro catastral y no hay conflicto entre vecinos. Es un camino más rápido, pero no resuelve la disputa cuando el colindante se opone; en ese caso el juez sigue siendo el único que puede fijar el lindero con efectos definitivos.",
      "Finalmente, en propiedad horizontal y en urbanizaciones, la discusión sobre límites se resuelve con el reglamento, los planos aprobados y las licencias urbanísticas, no con el deslinde tradicional. Ahí lo relevante es la delimitación entre unidades privadas y bienes comunes, materia de la Ley 675 de 2001.",
    ],
    norma: {
      articulo: "Art. 900 C.C. y art. 400 CGP",
      norma: "Código Civil · Código General del Proceso · Decreto 1077 de 2015",
      texto:
        "Todo dueño de un predio tiene derecho a que se fijen los límites que lo separan de los predios colindantes, y podrá exigir a los respectivos dueños que concurran a ello, haciéndose la demarcación a expensas comunes.",
    },
    // VERIFICAR CON ABOGADO
    plazo: {
      titulo: "Vigila la prescripción adquisitiva del vecino",
      texto:
        "La acción de deslinde no tiene un término de caducidad expreso mientras subsista la incertidumbre sobre los límites, pero la inacción es riesgosa: el ocupante que posee con ánimo de dueño puede adquirir por prescripción, que en la prescripción extraordinaria opera a los 10 años (CC art. 2532, Ley 791 de 2002). La acción por vicios ocultos en inmuebles prescribe en 1 año desde la entrega.",
    },
    reclamar: {
      titulo: "Qué se obtiene con el proceso",
      parrafos: [
        "La sentencia fija la línea divisoria, ordena colocar los mojones y se inscribe en los folios de matrícula de ambos predios, cerrando la discusión hacia el futuro.",
        "Cuando hubo invasión, puede además ordenarse la restitución de la franja ocupada, la remoción de las construcciones y la indemnización de los perjuicios acreditados.",
      ],
      lista: [
        "Fijación judicial de la línea divisoria",
        "Colocación de mojones y materialización en terreno",
        "Restitución de la franja invadida y remoción de obras",
        "Inscripción de la sentencia en ambos folios de matrícula",
        "Indemnización de perjuicios cuando se acreditan",
      ],
    },
    pasos: [
      { titulo: "Reúne los títulos", texto: "Escrituras, folios de matrícula de ambos predios y antecedentes registrales con sus linderos y cabidas." },
      { titulo: "Contrata el levantamiento topográfico", texto: "Georreferenciado y contrastado con la información catastral. Es la prueba que decide el proceso." },
      { titulo: "Intenta el deslinde convencional", texto: "Acuerdo con el vecino elevado a escritura pública con plano, e inscrito. Cuesta menos y evita el litigio." },
      { titulo: "Demanda el deslinde", texto: "Con títulos, plano y solicitud de la diligencia en terreno con perito. Si hubo invasión, pide también la restitución." },
      { titulo: "Inscribe la sentencia", texto: "El registro en los folios de ambos predios es lo que hace oponible el nuevo lindero frente a terceros." },
    ],
    faqs: [
      {
        pregunta: "¿Qué hago si mi vecino corrió la cerca?",
        respuesta:
          "Documenta la situación con fotos fechadas y un levantamiento topográfico, revisa los títulos de ambos predios e intenta un acuerdo escrito. Si no lo hay, procede el proceso de deslinde y amojonamiento con solicitud de restitución de la franja ocupada y remoción de lo construido.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre deslinde y reivindicación?",
        respuesta:
          "El deslinde supone que ambas partes son dueñas de sus predios y solo se discute dónde está el límite. La reivindicación se usa cuando se disputa la propiedad misma o cuando un tercero posee el bien sin título. Escoger la vía equivocada suele terminar en sentencia desfavorable.",
      },
      {
        pregunta: "¿Puedo perder terreno si no reclamo a tiempo?",
        respuesta:
          "Sí. Quien ocupa una franja con ánimo de señor y dueño puede adquirirla por prescripción, que en la modalidad extraordinaria opera a los diez años. Por eso la inacción prolongada frente a una invasión es riesgosa aunque los títulos estén a su favor.",
      },
      {
        pregunta: "¿Sirve la corrección catastral en lugar del proceso?",
        respuesta:
          "Sirve cuando el error es del registro catastral y no hay conflicto con el vecino: es más rápida y económica. Si el colindante se opone, la vía administrativa no resuelve la disputa y hay que acudir al juez para que fije el lindero con efectos definitivos.",
      },
      {
        pregunta: "¿Quién paga el proceso de deslinde?",
        respuesta:
          "La ley prevé que la demarcación se haga a expensas comunes, pues beneficia a ambos propietarios. En la práctica, las costas del proceso se imponen según la conducta procesal de las partes, y quien invadió u obstaculizó el acuerdo suele terminar asumiéndolas.",
      },
    ],
    guias: ["revisar-antes-de-comprar", "pasos-restitucion"],
  },
};

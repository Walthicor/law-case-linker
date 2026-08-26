/**
 * Contenido de las páginas legales. Texto plano estructurado para que la
 * plantilla común (contenedor de lectura + tabla de contenido) lo renderice.
 */

export type BloqueLegal =
  | { tipo: "p"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "numerada"; items: string[] }
  | { tipo: "nota"; texto: string }
  | { tipo: "aviso"; texto: string }
  | {
      tipo: "tabla";
      encabezados: string[];
      filas: string[][];
    };

export type SeccionLegal = { id: string; titulo: string; bloques: BloqueLegal[] };

/** Datos del responsable. Pendientes de confirmar por MARDIGITAL SAS. */
export const RESPONSABLE = {
  razonSocial: "MARDIGITAL SAS",
  nit: "{NIT PENDIENTE}",
  domicilio: "{DIRECCIÓN PENDIENTE}, Bogotá D.C., Colombia",
  correo: "datos@asesoriasjuridicas.com",
  telefono: "{TELÉFONO PENDIENTE}",
  whatsapp: "{WHATSAPP PENDIENTE}",
  horario: "Lunes a viernes, 8:00 a.m. a 6:00 p.m. (hora de Colombia)",
} as const;

export const VIGENCIA = "1 de agosto de 2026";
export const ACTUALIZACION = "26 de agosto de 2026";

/* ── Política de tratamiento de datos ─────────────────────────────── */

export const TRATAMIENTO: SeccionLegal[] = [
  {
    id: "responsable",
    titulo: "Identificación del responsable",
    bloques: [
      {
        tipo: "p",
        texto:
          "El responsable del tratamiento de los datos personales recolectados a través de este sitio web es:",
      },
      {
        tipo: "lista",
        items: [
          `Razón social: ${RESPONSABLE.razonSocial}`,
          `NIT: ${RESPONSABLE.nit}`,
          `Domicilio: ${RESPONSABLE.domicilio}`,
          `Correo electrónico de contacto para asuntos de datos personales: ${RESPONSABLE.correo}`,
          `Teléfono: ${RESPONSABLE.telefono}`,
        ],
      },
      {
        tipo: "p",
        texto:
          "Esta política se expide en cumplimiento de la Ley 1581 de 2012, del Decreto 1074 de 2015 (que compiló el Decreto 1377 de 2013) y de las demás normas que las modifiquen o reglamenten.",
      },
    ],
  },
  {
    id: "finalidades",
    titulo: "Finalidades del tratamiento",
    bloques: [
      {
        tipo: "p",
        texto:
          "Los datos personales que usted suministra se tratan únicamente para las siguientes finalidades, enumeradas de forma específica:",
      },
      {
        tipo: "numerada",
        items: [
          "Conectarlo con abogados de la red que tengan tarjeta profesional vigente y experiencia en el área de su caso.",
          "Contactarlo por teléfono, WhatsApp, correo electrónico o mensaje de texto para precisar la información de su caso, confirmar datos y coordinar la comunicación con el abogado.",
          "Enviarle contenido jurídico relacionado con el área de su consulta: guías, plantillas, cambios normativos y recordatorios de plazos.",
          "Medir, analizar y mejorar el funcionamiento del sitio, la calidad del perfilamiento y la pertinencia de las asignaciones.",
          "Cumplir obligaciones legales, atender requerimientos de autoridades competentes y conservar la prueba de la autorización otorgada.",
        ],
      },
      {
        tipo: "p",
        texto:
          "No usamos sus datos para finalidades distintas de las anteriores. No los vendemos, arrendamos ni cedemos a terceros con fines publicitarios.",
      },
    ],
  },
  {
    id: "datos",
    titulo: "Datos que recolectamos",
    bloques: [
      {
        tipo: "p",
        texto:
          "A través del formulario de caso, de las herramientas y de los canales de contacto podemos recolectar:",
      },
      {
        tipo: "lista",
        items: [
          "Datos de identificación y contacto: nombre, apellidos, número de celular, correo electrónico.",
          "Datos de ubicación: ciudad y departamento donde ocurrió el caso y donde usted reside.",
          "Datos del caso: área del derecho, estado del asunto, fechas relevantes, cuantía aproximada, documentos que tiene disponibles y la descripción libre que usted redacta.",
          "Datos técnicos: dirección IP, fecha y hora de la autorización, tipo de dispositivo y navegador, y páginas visitadas.",
        ],
      },
      {
        tipo: "aviso",
        texto:
          "La descripción libre de su caso puede contener datos sensibles: información de salud, de procesos penales, de su vida familiar o de su orientación sexual, entre otros. Le pedimos escribir solo lo necesario para entender el asunto.",
      },
    ],
  },
  {
    id: "sensibles",
    titulo: "Tratamiento de datos sensibles",
    bloques: [
      {
        tipo: "p",
        texto:
          "De acuerdo con el artículo 5 de la Ley 1581 de 2012, son sensibles los datos que afectan la intimidad del titular o cuyo uso indebido puede generar discriminación: los relativos a la salud, la vida sexual, los datos biométricos, el origen étnico, las convicciones religiosas o filosóficas y la pertenencia a sindicatos u organizaciones sociales o políticas.",
      },
      {
        tipo: "nota",
        texto:
          "Usted no está obligado a autorizar el tratamiento de datos sensibles ni a suministrarlos. Puede describir su caso en términos generales y entregar los detalles sensibles directamente al abogado, en la reunión, amparado por el secreto profesional.",
      },
      {
        tipo: "p",
        texto:
          "Cuando el caso lo requiera, el tratamiento de datos sensibles se hace previa autorización expresa e informada, otorgada mediante casilla independiente en el formulario, y se limita a lo estrictamente necesario para el perfilamiento y la asignación del caso.",
      },
    ],
  },
  {
    id: "transmision",
    titulo: "Transmisión y transferencia a terceros",
    bloques: [
      {
        tipo: "p",
        texto:
          "Para cumplir la finalidad principal —conectarlo con un abogado— transmitimos la información de su caso a los siguientes destinatarios:",
      },
      {
        tipo: "lista",
        items: [
          "Abogados de la red: profesionales independientes con tarjeta profesional vigente, que reciben su caso para evaluarlo y contactarlo. Cada abogado actúa como responsable autónomo de los datos que usted le entregue después del contacto y está sujeto al secreto profesional y a la Ley 1123 de 2007.",
          "Proveedores tecnológicos: servicios de correo transaccional, alojamiento y analítica web, que actúan como encargados y solo pueden tratar los datos conforme a nuestras instrucciones.",
          "Autoridades competentes: cuando exista requerimiento legal, judicial o administrativo válido.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Algunos proveedores tecnológicos están ubicados fuera de Colombia. En esos casos la transferencia se realiza bajo cláusulas contractuales que garantizan niveles de protección equivalentes a los exigidos por la ley colombiana.",
      },
    ],
  },
  {
    id: "derechos",
    titulo: "Derechos del titular",
    bloques: [
      { tipo: "p", texto: "Como titular de los datos, usted tiene derecho a:" },
      {
        tipo: "lista",
        items: [
          "Conocer, actualizar y rectificar sus datos personales frente al responsable.",
          "Solicitar prueba de la autorización otorgada, salvo cuando la ley no la exija.",
          "Ser informado, previa solicitud, sobre el uso que se ha dado a sus datos.",
          "Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.",
          "Revocar la autorización o solicitar la supresión de los datos, cuando no exista un deber legal o contractual que obligue a conservarlos.",
          "Acceder de forma gratuita a los datos que hayan sido objeto de tratamiento.",
        ],
      },
    ],
  },
  {
    id: "consultas",
    titulo: "Consultas y reclamos",
    bloques: [
      {
        tipo: "p",
        texto:
          "Puede ejercer sus derechos escribiendo a nuestro canal de atención. Los plazos legales son los siguientes:",
      },
      {
        tipo: "tabla",
        encabezados: ["Solicitud", "Plazo de respuesta", "Prórroga"],
        filas: [
          ["Consulta", "10 días hábiles", "5 días hábiles adicionales, informando el motivo"],
          ["Reclamo", "15 días hábiles", "8 días hábiles adicionales, informando el motivo"],
        ],
      },
      {
        tipo: "p",
        texto:
          "Si el reclamo resulta incompleto, le solicitaremos la información faltante dentro de los cinco días hábiles siguientes a su recibo. Si no la aporta en el término de dos meses, entenderemos que desistió. Una vez recibido el reclamo completo, incluiremos en la base de datos la leyenda «reclamo en trámite» y el motivo, hasta que se resuelva.",
      },
    ],
  },
  {
    id: "canal",
    titulo: "Canal de atención",
    bloques: [
      {
        tipo: "lista",
        items: [
          `Correo electrónico: ${RESPONSABLE.correo}`,
          "Formulario de contacto: /contacto",
          `Dirección física: ${RESPONSABLE.domicilio}`,
          `Horario de atención: ${RESPONSABLE.horario}`,
        ],
      },
      {
        tipo: "p",
        texto:
          "En la solicitud indique su nombre completo, el dato de contacto que usó en el sitio, la descripción de los hechos y el derecho que desea ejercer.",
      },
    ],
  },
  {
    id: "vigencia",
    titulo: "Vigencia y periodo de conservación",
    bloques: [
      {
        tipo: "p",
        texto:
          "Conservamos los datos del caso durante el tiempo necesario para cumplir las finalidades descritas y, en todo caso, mientras subsistan obligaciones legales de conservación de la prueba de la autorización. Como regla general: los datos de contacto y del caso se conservan por dos años desde el último contacto; los registros de autorización (fecha, hora e IP) por cinco años.",
      },
      {
        tipo: "p",
        texto:
          "Vencidos esos términos, o ante una solicitud de supresión que proceda, los datos se eliminan o se anonimizan de forma irreversible.",
      },
    ],
  },
  {
    id: "entrada-en-vigencia",
    titulo: "Fecha de entrada en vigencia",
    bloques: [
      {
        tipo: "p",
        texto: `Esta política entró en vigencia el ${VIGENCIA} y su última actualización es del ${ACTUALIZACION}. Cualquier cambio sustancial se publicará en esta misma página con al menos diez días hábiles de anticipación.`,
      },
    ],
  },
];

/* ── Política de privacidad (resumen) ─────────────────────────────── */

export const PRIVACIDAD: SeccionLegal[] = [
  {
    id: "resumen",
    titulo: "En resumen",
    bloques: [
      {
        tipo: "p",
        texto:
          "Esta es la versión corta y legible de cómo tratamos tu información. La versión completa y jurídicamente vinculante es la política de tratamiento de datos.",
      },
      {
        tipo: "lista",
        items: [
          "Recogemos tus datos de contacto y la descripción de tu caso solo para conectarte con un abogado.",
          "No vendemos tu información ni la usamos para publicidad de terceros.",
          "Compartimos tu caso con abogados de la red, que están sujetos al secreto profesional.",
          "Puedes pedirnos ver, corregir o borrar tus datos en cualquier momento.",
        ],
      },
    ],
  },
  {
    id: "que-recogemos",
    titulo: "Qué recogemos",
    bloques: [
      {
        tipo: "p",
        texto:
          "Tu nombre, celular, correo, ciudad y la información del caso que escribes en el formulario. También datos técnicos básicos del navegador para que el sitio funcione y para medir su uso.",
      },
      {
        tipo: "nota",
        texto:
          "No escribas en el formulario más detalles sensibles de los necesarios. Los detalles delicados puedes dárselos directamente al abogado.",
      },
    ],
  },
  {
    id: "para-que",
    titulo: "Para qué lo usamos",
    bloques: [
      {
        tipo: "lista",
        items: [
          "Entender tu caso y asignarlo a un abogado con experiencia en esa área.",
          "Contactarte para confirmar datos y coordinar la conversación.",
          "Enviarte guías y contenido jurídico relacionado, del que puedes salirte cuando quieras.",
          "Mejorar el sitio y cumplir obligaciones legales.",
        ],
      },
    ],
  },
  {
    id: "con-quien",
    titulo: "Con quién lo compartimos",
    bloques: [
      {
        tipo: "p",
        texto:
          "Con los abogados de la red a quienes se asigna tu caso y con proveedores tecnológicos de correo, alojamiento y analítica que trabajan bajo nuestras instrucciones. Con autoridades, solo cuando la ley lo exige.",
      },
    ],
  },
  {
    id: "cuanto-tiempo",
    titulo: "Cuánto tiempo lo guardamos",
    bloques: [
      {
        tipo: "p",
        texto:
          "Los datos del caso, dos años desde el último contacto. El registro de tu autorización, cinco años, porque la ley nos obliga a poder probarla.",
      },
    ],
  },
  {
    id: "tus-derechos",
    titulo: "Tus derechos",
    bloques: [
      {
        tipo: "p",
        texto: `Puedes conocer, actualizar, rectificar o suprimir tus datos y revocar la autorización escribiendo a ${RESPONSABLE.correo}. Respondemos consultas en 10 días hábiles y reclamos en 15 días hábiles.`,
      },
    ],
  },
  {
    id: "politica-completa",
    titulo: "Política completa",
    bloques: [
      {
        tipo: "p",
        texto:
          "El texto completo, con la identificación del responsable, las finalidades detalladas, el tratamiento de datos sensibles y los procedimientos de consulta y reclamo, está en la política de tratamiento de datos.",
      },
    ],
  },
];

/* ── Términos y condiciones ───────────────────────────────────────── */

export const TERMINOS: SeccionLegal[] = [
  {
    id: "objeto",
    titulo: "Objeto",
    bloques: [
      {
        tipo: "p",
        texto:
          "Asesorías Jurídicas Colombia, operada por MARDIGITAL SAS, es taxativamente un intermediario tecnológico: recibe la descripción de un problema jurídico, la perfila y la pone en conocimiento de abogados independientes con tarjeta profesional vigente.",
      },
      {
        tipo: "aviso",
        texto:
          "La plataforma NO presta servicios jurídicos, no da asesoría legal, no emite conceptos, no litiga y no representa a ninguna persona ante autoridades judiciales o administrativas.",
      },
    ],
  },
  {
    id: "sin-relacion",
    titulo: "Ausencia de relación abogado-cliente con la plataforma",
    bloques: [
      {
        tipo: "p",
        texto:
          "El envío del formulario, el uso de las herramientas o cualquier comunicación con la plataforma no crea una relación abogado-cliente con MARDIGITAL SAS. La relación profesional nace únicamente cuando usted y un abogado de la red la acuerdan directamente entre ustedes.",
      },
      {
        tipo: "p",
        texto:
          "Mientras esa relación no exista, la información que usted comparta con la plataforma no está amparada por el secreto profesional del abogado, sino por nuestras obligaciones de confidencialidad y de protección de datos personales.",
      },
    ],
  },
  {
    id: "honorarios",
    titulo: "Honorarios",
    bloques: [
      {
        tipo: "p",
        texto:
          "El uso de la plataforma no tiene costo para el usuario. Los honorarios profesionales, su forma de pago, los gastos del proceso y cualquier pacto de cuota litis se acuerdan directa y exclusivamente entre el usuario y el abogado.",
      },
      {
        tipo: "p",
        texto:
          "La plataforma no fija tarifas, no cobra comisiones al usuario, no recauda honorarios ni participa en la negociación económica. Antes de contratar, pida al abogado un contrato de prestación de servicios por escrito.",
      },
    ],
  },
  {
    id: "obligaciones",
    titulo: "Obligaciones del usuario",
    bloques: [
      {
        tipo: "lista",
        items: [
          "Suministrar información veraz, completa y actualizada. La calidad del perfilamiento y de la asignación depende de ello.",
          "No usar la plataforma para fines ilícitos, fraudulentos o para obtener ventaja procesal indebida.",
          "No enviar información de terceros sin estar facultado para hacerlo.",
          "Ser mayor de edad o actuar por medio de su representante legal.",
          "Verificar los plazos y términos de su caso con el abogado: la información del sitio es orientativa.",
        ],
      },
      {
        tipo: "p",
        texto:
          "La información falsa o incompleta puede llevar a un perfilamiento equivocado y faculta a la plataforma a descartar el caso.",
      },
    ],
  },
  {
    id: "verificacion",
    titulo: "Verificación de abogados y sus límites",
    bloques: [
      {
        tipo: "p",
        texto:
          "Antes de admitir a un abogado a la red confirmamos la vigencia de su tarjeta profesional ante el Consejo Superior de la Judicatura y revisamos las anotaciones disciplinarias públicas y su experiencia declarada.",
      },
      {
        tipo: "p",
        texto:
          "Esa verificación es documental y tiene fecha: acredita la habilitación para ejercer en el momento del ingreso, no garantiza la calidad del servicio, la diligencia futura, la estrategia elegida ni el resultado del proceso.",
      },
    ],
  },
  {
    id: "responsabilidad",
    titulo: "Exclusión de responsabilidad",
    bloques: [
      {
        tipo: "p",
        texto:
          "MARDIGITAL SAS no responde por la actuación profesional del abogado: ni por su diligencia, ni por los plazos que deje vencer, ni por la estrategia procesal, ni por el resultado del caso, ni por los acuerdos económicos que celebre con el usuario. Esa responsabilidad es personal del profesional, conforme al Código Disciplinario del Abogado (Ley 1123 de 2007).",
      },
      {
        tipo: "p",
        texto:
          "Tampoco respondemos por decisiones que el usuario tome con base en el contenido informativo del sitio o en los borradores generados por las herramientas, ni por interrupciones del servicio, fallas técnicas o pérdida de información atribuibles a terceros.",
      },
    ],
  },
  {
    id: "propiedad-intelectual",
    titulo: "Propiedad intelectual",
    bloques: [
      {
        tipo: "p",
        texto:
          "Los textos, guías, calculadoras, generadores de documentos, marcas, logotipos, diseño e interfaz del sitio son propiedad de MARDIGITAL SAS o se usan con autorización, y están protegidos por la Ley 23 de 1982 y la Decisión Andina 351 de 1993.",
      },
      {
        tipo: "p",
        texto:
          "Se permite el uso personal del contenido y de los documentos que usted genere con las herramientas. Se prohíbe la reproducción masiva, la extracción automatizada, la reventa y la creación de servicios derivados sin autorización escrita.",
      },
    ],
  },
  {
    id: "herramientas",
    titulo: "Naturaleza de las herramientas",
    bloques: [
      {
        tipo: "aviso",
        texto:
          "Las calculadoras y los generadores producen borradores y estimaciones. No constituyen asesoría jurídica, no reemplazan la revisión de un abogado y su resultado depende de los datos que usted ingrese.",
      },
      {
        tipo: "p",
        texto:
          "Antes de radicar cualquier documento generado en el sitio, revíselo, ajústelo a su caso concreto y verifique las normas y los plazos aplicables.",
      },
    ],
  },
  {
    id: "modificaciones",
    titulo: "Modificaciones, ley aplicable y jurisdicción",
    bloques: [
      {
        tipo: "p",
        texto:
          "Podemos modificar estos términos para ajustarlos a cambios normativos o del servicio. La versión vigente es la publicada en esta página, con su fecha de actualización.",
      },
      {
        tipo: "p",
        texto:
          "Estos términos se rigen por la ley colombiana. Cualquier controversia se someterá a los jueces de la República de Colombia, en el domicilio del responsable, sin perjuicio de las competencias del Estatuto del Consumidor.",
      },
    ],
  },
];

/* ── Política de cookies ──────────────────────────────────────────── */

export const COOKIES: SeccionLegal[] = [
  {
    id: "que-son",
    titulo: "Qué son las cookies",
    bloques: [
      {
        tipo: "p",
        texto:
          "Las cookies son archivos pequeños que el sitio guarda en su navegador para recordar información entre visitas. Algunas son imprescindibles para que la página funcione; otras nos ayudan a entender cómo se usa el sitio o a medir la efectividad de la pauta.",
      },
      {
        tipo: "p",
        texto:
          "Al entrar por primera vez le mostramos una barra inferior donde puede aceptar todas, dejar solo las necesarias o configurar cada categoría. Hasta que usted decida, no cargamos cookies analíticas ni de marketing.",
      },
    ],
  },
  {
    id: "necesarias",
    titulo: "Cookies necesarias",
    bloques: [
      {
        tipo: "p",
        texto:
          "Permiten navegar, conservar el borrador del formulario y recordar su decisión sobre cookies. No requieren consentimiento porque sin ellas el sitio no funciona.",
      },
      {
        tipo: "tabla",
        encabezados: ["Nombre", "Finalidad", "Duración"],
        filas: [
          ["ajc_consentimiento", "Guarda su elección sobre cookies y la fecha en que la tomó", "12 meses"],
          ["ajc_caso_borrador", "Conserva el borrador del formulario de caso para que no lo pierda", "7 días"],
          ["ajc_sesion", "Mantiene la sesión de navegación y la seguridad del formulario", "Sesión"],
        ],
      },
    ],
  },
  {
    id: "analiticas",
    titulo: "Cookies analíticas",
    bloques: [
      {
        tipo: "p",
        texto:
          "Miden de forma agregada qué páginas se visitan, cuánto tiempo se permanece y en qué punto se abandona el formulario. Solo se cargan si usted las acepta.",
      },
      {
        tipo: "tabla",
        encabezados: ["Nombre", "Finalidad", "Duración"],
        filas: [
          ["_ga", "Distingue usuarios para el conteo de visitas", "13 meses"],
          ["_ga_*", "Mantiene el estado de la sesión de analítica", "13 meses"],
          ["_gid", "Distingue usuarios en periodos cortos", "24 horas"],
        ],
      },
    ],
  },
  {
    id: "marketing",
    titulo: "Cookies de marketing",
    bloques: [
      {
        tipo: "p",
        texto:
          "Permiten medir qué anuncio originó la visita y evitar mostrar la misma pauta de forma repetida. Solo se cargan si usted las acepta y puede retirar el consentimiento en cualquier momento.",
      },
      {
        tipo: "tabla",
        encabezados: ["Nombre", "Finalidad", "Duración"],
        filas: [
          ["_gcl_au", "Atribuye conversiones a campañas de Google Ads", "90 días"],
          ["_fbp", "Mide campañas de Meta y evita repetir anuncios", "90 días"],
        ],
      },
    ],
  },
  {
    id: "gestion",
    titulo: "Cómo cambiar su decisión",
    bloques: [
      {
        tipo: "p",
        texto:
          "Puede volver a abrir el panel de cookies desde el enlace del pie de página o borrar las cookies desde la configuración de su navegador. Si borra la cookie de consentimiento, la barra volverá a aparecer en la siguiente visita.",
      },
    ],
  },
];

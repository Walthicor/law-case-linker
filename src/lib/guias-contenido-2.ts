/**
 * Guías de alto volumen de búsqueda (Planificador de Google Ads, Colombia,
 * oct 2026). Misma plantilla y reglas que guias-contenido.ts: cada guía solo
 * enlaza dentro de su silo.
 */

import { revisorEditorial, type ContenidoGuia } from "./guias";

const HOY = "2026-10-16";

/* ------------------------------------------------------------------ */
/* 1. Cómo impugnar un comparendo — silo tránsito                       */
/*    comparendo (10K–100K) · impugnar comparendo (100–1K)              */
/* ------------------------------------------------------------------ */

const impugnarComparendo: ContenidoGuia = {
  slug: "impugnar-comparendo",
  silo: "transito",
  h1: "Cómo impugnar un comparendo en Colombia paso a paso",
  title: "Cómo impugnar un comparendo en Colombia paso a paso",
  description:
    "Plazos para impugnar un comparendo o fotomulta, descuentos por pago, audiencia y cuándo prescribe la multa.",
  extracto:
    "Cuántos días tienes para impugnar, cuándo conviene pagar con descuento y qué pasa en la audiencia.",
  resumen:
    "Para impugnar un comparendo debes presentarte ante la autoridad de tránsito y pedir audiencia: tienes 5 días hábiles si el comparendo te lo hicieron en la vía y 11 días hábiles desde la notificación si es una fotomulta. Si no impugnas, puedes pagar con 50% de descuento en los primeros 5 días hábiles o con 25% entre el día 6 y el 20, haciendo el curso de normas de tránsito.",
  publicada: HOY,
  actualizada: HOY,
  revisor: revisorEditorial("Tránsito y accidentes"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Un comparendo es una orden para que te presentes ante la autoridad de tránsito por una presunta infracción. No es todavía una multa en firme: tienes la opción de aceptar la infracción y pagar con descuento, o de rechazarla y defenderte en una audiencia pública donde la autoridad debe probar que la cometiste.",
            "La decisión depende del tiempo. Los descuentos y la posibilidad de pedir audiencia corren por días hábiles muy cortos. Si dejas pasar los plazos sin hacer nada, la autoridad sigue el proceso sin ti, te declara contraventor y la multa queda en firme, reportada en el SIMIT, con intereses y con riesgo de cobro coactivo y embargo.",
            "Antes de decidir, consulta el comparendo en el SIMIT con tu cédula o con la placa. Ahí ves la fecha, el código de la infracción, el valor y la autoridad que lo impuso, que es ante quien debes presentarte.",
          ],
        },
      ],
    },
    {
      id: "que-dice-la-ley",
      titulo: "Qué dice la ley",
      bloques: [
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 136",
            norma: "Ley 769 de 2002 (Código Nacional de Tránsito)",
            texto:
              "Si el inculpado acepta la comisión de la infracción podrá pagar con descuento y asistir a un curso sobre normas de tránsito. Si la rechaza, deberá comparecer ante el funcionario en audiencia pública para que se decreten y practiquen las pruebas y se decida sobre la infracción.",
          },
        },
        {
          tipo: "parrafos",
          textos: [
            "Las fotomultas se rigen además por la Ley 1843 de 2017. La autoridad debe enviar la notificación dentro de los 3 días hábiles siguientes a la validación del comparendo, a la dirección que el propietario tenga registrada en el RUNT. Las cámaras deben estar autorizadas y señalizadas.",
            "En la sentencia C-038 de 2020, la Corte Constitucional declaró que no se puede sancionar al propietario del vehículo solo por ser el dueño: la autoridad debe demostrar quién conducía. Por eso es clave revisar si en tu caso se identificó al conductor.",
          ],
        },
      ],
    },
    {
      id: "plazos",
      titulo: "Plazos para impugnar o pagar con descuento",
      bloques: [
        {
          tipo: "tabla",
          tabla: {
            titulo: "Qué puedes hacer y hasta cuándo",
            encabezados: ["Opción", "Plazo", "Qué pasa"],
            filas: [
              [
                "Pagar con 50% de descuento",
                "Dentro de los 5 días hábiles",
                "Debes hacer el curso de normas de tránsito",
              ],
              [
                "Pagar con 25% de descuento",
                "Entre el día hábil 6 y el 20",
                "También requiere el curso",
              ],
              [
                "Impugnar un comparendo en vía",
                "5 días hábiles desde el comparendo",
                "Pides audiencia ante el organismo de tránsito",
              ],
              [
                "Impugnar una fotomulta",
                "11 días hábiles desde la notificación",
                "Puedes pedir audiencia virtual o presencial",
              ],
              ["No hacer nada", "—", "Te declaran contraventor y la multa queda en firme"],
            ],
          },
        },
        {
          tipo: "plazo",
          titulo: "Caducidad y prescripción",
          texto:
            "La autoridad tiene 1 año desde la infracción para decidir el proceso; si no lo hace, la acción caduca. Una vez impuesta, la multa prescribe a los 3 años, término que se interrumpe cuando la autoridad expide el mandamiento de pago en el cobro coactivo.",
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Cómo impugnar un comparendo paso a paso",
      bloques: [
        {
          tipo: "pasos",
          titulo: "De la notificación a la audiencia",
          pasos: [
            {
              titulo: "Consulta el comparendo en el SIMIT",
              texto:
                "Verifica la fecha, el código de la infracción, la placa y la autoridad de tránsito que lo impuso. Descarga o fotografía el comparendo y, si es fotomulta, la imagen o el video de la cámara.",
            },
            {
              titulo: "Revisa la notificación",
              texto:
                "En fotomultas, compara la fecha de la infracción con la fecha de envío de la notificación. Si llegó por fuera del plazo o a una dirección distinta a la del RUNT, ese es un argumento de defensa.",
            },
            {
              titulo: "Solicita la audiencia dentro del plazo",
              texto:
                "Preséntate o radica la solicitud ante el organismo de tránsito que impuso el comparendo, por su canal virtual o en sus oficinas, dentro de los 5 días hábiles (vía) o 11 días hábiles (fotomulta).",
            },
            {
              titulo: "Prepara tus pruebas",
              texto:
                "Fotos del lugar, señalización, testigos, videos, documentos del vehículo, prueba de que no conducías o de que el vehículo estaba en otro lugar. Si la cámara no estaba señalizada o autorizada, pide que se acredite.",
            },
            {
              titulo: "Asiste a la audiencia y apela si pierdes",
              texto:
                "En la audiencia expones tus argumentos y se practican las pruebas. Si la decisión te declara responsable, puedes interponer los recursos en la misma audiencia.",
            },
          ],
        },
      ],
    },
    {
      id: "errores-frecuentes",
      titulo: "Errores que te hacen perder la impugnación",
      bloques: [
        {
          tipo: "resumen",
          puntos: [
            "Dejar pasar los 5 u 11 días hábiles esperando que el comparendo 'se caiga solo'.",
            "Pagar con descuento cuando querías impugnar: pagar es aceptar la infracción.",
            "Tener desactualizada la dirección en el RUNT y no recibir la notificación.",
            "Ir a la audiencia sin pruebas, solo con la versión de los hechos.",
            "No revisar si el comparendo ya caducó o la multa ya prescribió antes de pagar.",
          ],
        },
      ],
    },
  ],
  solo: [
    "Infracciones claras y de bajo valor que prefieres pagar con descuento.",
    "Fotomultas con un error evidente de placa o de notificación.",
  ],
  abogado: [
    "Comparendos por embriaguez, que implican suspensión o cancelación de la licencia.",
    "Multas antiguas con cobro coactivo o embargos.",
    "Varias fotomultas o comparendos acumulados de alto valor.",
  ],
  faqs: [
    {
      pregunta: "¿Cuántos días tengo para impugnar un comparendo?",
      respuesta:
        "5 días hábiles si el comparendo te lo hizo un agente en la vía, y 11 días hábiles desde la notificación si es una fotomulta.",
    },
    {
      pregunta: "¿Si pago el comparendo con descuento ya no puedo impugnarlo?",
      respuesta:
        "No. Pagar con descuento significa aceptar la infracción. Si crees que no la cometiste, debes pedir la audiencia antes de pagar.",
    },
    {
      pregunta: "¿Me pueden cobrar una fotomulta si no iba manejando?",
      respuesta:
        "Según la sentencia C-038 de 2020, no basta con ser el propietario: la autoridad debe identificar al conductor. Ese argumento se presenta en la audiencia.",
    },
    {
      pregunta: "¿Cuándo prescribe un comparendo?",
      respuesta:
        "La autoridad tiene 1 año para decidir el proceso. Una vez impuesta, la multa prescribe a los 3 años, salvo que se haya interrumpido con un mandamiento de pago.",
    },
    {
      pregunta: "¿Dónde consulto si tengo comparendos?",
      respuesta:
        "En el SIMIT (Sistema Integrado de Información sobre Multas y Sanciones por Infracciones de Tránsito), con tu cédula o la placa del vehículo.",
    },
  ],
  enlaces: [
    { texto: "Comparendos", to: "/areas/transito/comparendos" },
    { texto: "Qué hacer justo después de un choque", to: "/guias/que-hacer-tras-un-choque" },
    { texto: "Accidentes de tránsito", to: "/areas/transito/accidentes" },
    { texto: "Abogado de tránsito", to: "/areas/transito" },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Historia laboral de Colpensiones — silo pensiones                 */
/*    historia laboral colpensiones (10K–100K)                          */
/* ------------------------------------------------------------------ */

const corregirHistoriaLaboral: ContenidoGuia = {
  slug: "corregir-historia-laboral",
  silo: "pensiones",
  h1: "Historia laboral de Colpensiones: cómo consultarla y corregirla",
  title: "Historia laboral Colpensiones: cómo consultarla y corregirla",
  description:
    "Cómo descargar tu historia laboral de Colpensiones, corregir semanas faltantes y qué hacer si el empleador no pagó.",
  extracto:
    "Cómo descargarla, cómo detectar semanas faltantes y cómo pedir la corrección con los soportes correctos.",
  resumen:
    "La historia laboral de Colpensiones se descarga gratis en la sede electrónica de Colpensiones con tu usuario. Si faltan semanas, pides la corrección adjuntando certificados laborales, desprendibles de pago o planillas de aportes. Si el empleador te descontó y no pagó, esas semanas no se te pueden desconocer: Colpensiones debe cobrarle al empleador.",
  publicada: HOY,
  actualizada: HOY,
  revisor: revisorEditorial("Pensiones y seguridad social"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "La historia laboral es el registro de todas las semanas que has cotizado a pensión. De ella depende si te pensionas y con cuánto, porque el número de semanas y los salarios reportados definen el derecho y el monto de la mesada.",
            "Los errores son más comunes de lo que parece: empresas que cerraron sin pagar aportes, periodos de antes de 1995 que no se cargaron, salarios reportados por debajo de lo real o semanas que quedaron en otro fondo después de un traslado. Lo importante es detectarlos años antes de pedir la pensión, no el día que te la niegan.",
            "Revisar tu historia laboral es gratis y no necesitas intermediarios. Corregirla tampoco requiere abogado en los casos sencillos; sí conviene cuando hay mora del empleador, empresas liquidadas o periodos muy antiguos.",
          ],
        },
      ],
    },
    {
      id: "como-consultarla",
      titulo: "Cómo consultar tu historia laboral",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Descarga en línea",
          pasos: [
            {
              titulo: "Entra a la sede electrónica de Colpensiones",
              texto:
                "Desde colpensiones.gov.co, en la opción de historia laboral para afiliados. Si no tienes usuario, regístrate con tu número de documento y correo.",
            },
            {
              titulo: "Descarga el reporte de semanas cotizadas",
              texto:
                "El reporte muestra, mes a mes, el empleador o aportante, el salario base de cotización y los días cotizados. Guárdalo en PDF con la fecha de consulta.",
            },
            {
              titulo: "Compáralo con tu vida laboral",
              texto:
                "Haz una lista de cada empleo con fechas de ingreso y retiro y busca huecos: meses sin cotización, salarios que no coinciden o empleadores que no aparecen.",
            },
          ],
        },
      ],
    },
    {
      id: "como-corregirla",
      titulo: "Cómo corregir la historia laboral",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Solicitud de corrección",
          pasos: [
            {
              titulo: "Reúne los soportes",
              texto:
                "Certificados laborales con fechas y salario, contratos, desprendibles de nómina, planillas de pago de aportes (PILA) o liquidaciones. Entre más documentos del periodo, mejor.",
            },
            {
              titulo: "Radica la solicitud",
              texto:
                "Pide la corrección por los canales de Colpensiones, indicando exactamente qué periodos faltan o están errados y adjuntando los soportes. Guarda el número de radicado.",
            },
            {
              titulo: "Haz seguimiento al plazo",
              texto:
                "La solicitud es un derecho de petición: Colpensiones debe responder de fondo, como regla general, en 15 días hábiles. Si no responde o responde sin resolver, procede la acción de tutela.",
            },
            {
              titulo: "Verifica la corrección",
              texto:
                "Cuando te respondan, descarga de nuevo la historia laboral y confirma que los periodos quedaron cargados con el salario correcto.",
            },
          ],
        },
      ],
    },
    {
      id: "mora-del-empleador",
      titulo: "Si el empleador no pagó los aportes",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Si trabajaste, el empleador te descontó del salario el aporte a pensión y no lo pagó, la jurisprudencia de la Corte Suprema y de la Corte Constitucional es clara: la mora del empleador no puede perjudicarte. Colpensiones tiene la obligación de cobrarle y esas semanas deben contarse a tu favor.",
            "Si el empleador nunca te afilió, el camino es distinto: se le exige el pago de un cálculo actuarial, es decir, el valor que corresponde a esos periodos con sus rendimientos, para que se carguen en tu historia laboral.",
          ],
        },
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 24",
            norma: "Ley 100 de 1993",
            texto:
              "Corresponde a las entidades administradoras adelantar las acciones de cobro con motivo del incumplimiento de las obligaciones del empleador.",
          },
        },
      ],
    },
    {
      id: "semanas-requeridas",
      titulo: "Cuántas semanas necesitas",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "En el régimen de prima media (Colpensiones) se necesitan 1.300 semanas y la edad de pensión: 57 años las mujeres y 62 los hombres. Por la sentencia C-197 de 2023 de la Corte Constitucional, desde 2026 las semanas exigidas a las mujeres empiezan a bajar de forma gradual hasta llegar a 1.000 en 2036.",
            "Por eso cada semana cuenta: una sola empresa que no pagó puede ser la diferencia entre pensionarte este año o tener que seguir cotizando.",
          ],
        },
      ],
    },
  ],
  solo: [
    "Descargar y revisar tu historia laboral.",
    "Pedir la corrección cuando tienes certificados y planillas del periodo.",
  ],
  abogado: [
    "Empleadores que no pagaron o que nunca te afiliaron.",
    "Empresas liquidadas o desaparecidas.",
    "Te faltan pocas semanas y estás cerca de la edad de pensión.",
  ],
  faqs: [
    {
      pregunta: "¿Cómo descargo mi historia laboral de Colpensiones?",
      respuesta:
        "En la sede electrónica de colpensiones.gov.co, con tu usuario de afiliado. El reporte de semanas cotizadas se descarga gratis en PDF.",
    },
    {
      pregunta: "¿Cuánto se demora Colpensiones en corregir la historia laboral?",
      respuesta:
        "La solicitud es un derecho de petición: como regla general deben responder de fondo en 15 días hábiles. Si no lo hacen, puedes presentar tutela.",
    },
    {
      pregunta: "¿Qué pasa si mi empleador no pagó los aportes?",
      respuesta:
        "Si te descontó y no pagó, la mora no te puede perjudicar: Colpensiones debe cobrarle y esas semanas cuentan para ti. Si nunca te afilió, se le exige un cálculo actuarial.",
    },
    {
      pregunta: "¿Tengo un plazo para pedir la corrección?",
      respuesta:
        "No. El derecho a que tu historia laboral refleje tus cotizaciones no prescribe, pero entre más tiempo pase más difícil es conseguir los soportes.",
    },
  ],
  enlaces: [
    { texto: "Qué hacer si te niegan la pensión", to: "/guias/niegan-la-pension" },
    { texto: "Pensión de vejez", to: "/areas/pensiones/vejez" },
    { texto: "Traslado de régimen", to: "/areas/pensiones/traslado-de-regimen" },
    { texto: "Abogado de pensiones", to: "/areas/pensiones" },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Despido e indemnización — silo laboral                            */
/*    indemnización por despido (1K–10K)                                */
/* ------------------------------------------------------------------ */

const queHacerDespido: ContenidoGuia = {
  slug: "que-hacer-despido",
  silo: "laboral",
  h1: "Qué hacer si te despidieron: indemnización y liquidación",
  title: "Indemnización por despido sin justa causa: qué hacer",
  description:
    "Cómo se calcula la indemnización por despido sin justa causa en Colombia, qué te deben pagar y en qué plazos.",
  extracto:
    "Qué revisar el mismo día, cómo se calcula la indemnización del artículo 64 y cuándo puedes pedir reintegro.",
  resumen:
    "Si te despidieron sin justa causa con contrato a término indefinido, te deben pagar la indemnización del artículo 64 del Código Sustantivo del Trabajo: si ganas menos de 10 salarios mínimos, 30 días de salario por el primer año y 20 días por cada año adicional. Además te deben la liquidación de prestaciones al terminar el contrato; si no la pagan, corre un día de salario por cada día de retardo.",
  publicada: HOY,
  actualizada: HOY,
  revisor: revisorEditorial("Derecho laboral y seguridad social"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Cuando te despiden, hay dos pagos distintos. La liquidación de prestaciones (cesantías, intereses, prima, vacaciones y salarios pendientes) se paga siempre, sin importar la causa. La indemnización solo se paga si el despido fue sin justa causa, o si renunciaste por una falta grave del empleador.",
            "El empleador que despide con justa causa debe decirte cuál es en el momento del despido, por escrito. No puede inventar después causas distintas para evitar la indemnización. Desde la reforma laboral de 2025 (Ley 2466) se refuerza además el deber de escuchar al trabajador y permitirle defenderse antes de despedirlo por una falta.",
            "Y hay trabajadores a los que no se puede despedir sin autorización: mujeres embarazadas o en licencia, personas con una condición de salud que les limita trabajar, prepensionados y trabajadores con fuero sindical. En esos casos el despido puede ser ineficaz y proceder el reintegro.",
          ],
        },
      ],
    },
    {
      id: "que-dice-la-ley",
      titulo: "Qué dice la ley",
      bloques: [
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 64",
            norma: "Código Sustantivo del Trabajo (mod. Ley 789 de 2002)",
            texto:
              "En caso de terminación unilateral del contrato de trabajo sin justa causa comprobada, por parte del empleador, este deberá al trabajador una indemnización.",
          },
        },
      ],
    },
    {
      id: "como-se-calcula",
      titulo: "Cómo se calcula la indemnización por despido",
      bloques: [
        {
          tipo: "tabla",
          tabla: {
            titulo: "Indemnización según el tipo de contrato",
            encabezados: ["Contrato", "Indemnización"],
            filas: [
              [
                "Término indefinido, salario menor a 10 SMMLV",
                "30 días de salario por el primer año y 20 días por cada año adicional (proporcional por fracción)",
              ],
              [
                "Término indefinido, salario de 10 SMMLV o más",
                "20 días de salario por el primer año y 15 días por cada año adicional (proporcional por fracción)",
              ],
              ["Término fijo", "Los salarios del tiempo que faltaba para terminar el contrato"],
              [
                "Obra o labor",
                "Los salarios del tiempo que faltaba para terminar la obra, mínimo 15 días",
              ],
            ],
          },
        },
        {
          tipo: "parrafos",
          titulo: "Ejemplo",
          textos: [
            "Salario de $2.000.000, contrato a término indefinido, 3 años y 6 meses trabajados. Días de indemnización: 30 por el primer año, 40 por los dos años completos siguientes (20 × 2) y 10 por los 6 meses (20 × 6/12) = 80 días. Salario diario: $2.000.000 ÷ 30 = $66.667. Indemnización: 80 × $66.667 = $5.333.333, aproximadamente.",
          ],
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Qué hacer si te despidieron hoy",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Los primeros días",
          pasos: [
            {
              titulo: "Pide la carta de despido por escrito",
              texto:
                "Debe decir la fecha y, si alegan justa causa, cuál es. Si te la entregan, puedes firmar con la anotación 'recibido, no acepto' y la fecha.",
            },
            {
              titulo: "No firmes una renuncia ni un acuerdo sin leerlo",
              texto:
                "Una renuncia 'voluntaria' o un acta de mutuo acuerdo pueden hacerte perder la indemnización. Si te presionan para firmarlos, no lo hagas en ese momento.",
            },
            {
              titulo: "Revisa la liquidación",
              texto:
                "Verifica cesantías, intereses, prima, vacaciones e indemnización con la calculadora de liquidación. El salario base incluye pagos habituales como horas extras y comisiones.",
            },
            {
              titulo: "Reclama por escrito",
              texto:
                "Si no te pagan o te pagan mal, envía una reclamación por escrito al empleador. Puedes acudir al Ministerio del Trabajo para una conciliación o demandar ante el juez laboral.",
            },
          ],
        },
        {
          tipo: "plazo",
          titulo: "3 años para reclamar",
          texto:
            "Las acciones laborales prescriben en 3 años desde que la obligación se hizo exigible (artículo 488 del CST). Una reclamación escrita al empleador interrumpe la prescripción por una sola vez.",
        },
      ],
    },
  ],
  solo: [
    "Revisar la liquidación con la calculadora y pedir por escrito que la corrijan.",
    "Solicitar una conciliación ante el Ministerio del Trabajo.",
  ],
  abogado: [
    "Te despidieron estando embarazada, enferma, incapacitada o próxima a pensionarte.",
    "Alegan una justa causa que no compartes.",
    "No te pagaron la liquidación y quieres cobrar la sanción por mora.",
  ],
  faqs: [
    {
      pregunta: "¿Cuánto me deben pagar si me despiden sin justa causa?",
      respuesta:
        "Con contrato indefinido y salario menor a 10 SMMLV, 30 días de salario por el primer año y 20 por cada año adicional, más la liquidación de prestaciones.",
    },
    {
      pregunta: "¿Si renuncio tengo derecho a indemnización?",
      respuesta:
        "Solo si renuncias por una justa causa imputable al empleador (por ejemplo, no pagarte el salario) y la indicas por escrito al renunciar. En una renuncia común solo te deben la liquidación.",
    },
    {
      pregunta: "¿Qué pasa si no me pagan la liquidación?",
      respuesta:
        "El artículo 65 del CST obliga al empleador a pagar un día de salario por cada día de retardo, con reglas especiales después de 24 meses.",
    },
    {
      pregunta: "¿Cuánto tiempo tengo para demandar?",
      respuesta: "3 años desde que la obligación se hizo exigible.",
    },
  ],
  enlaces: [
    { texto: "Despido sin justa causa", to: "/areas/laboral/despido-sin-justa-causa" },
    { texto: "Cómo calcular la liquidación laboral", to: "/guias/calcular-liquidacion" },
    { texto: "Estabilidad laboral reforzada", to: "/areas/laboral/estabilidad-laboral-reforzada" },
    { texto: "Abogado laboral", to: "/areas/laboral" },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Pensión de vejez negada — silo pensiones                          */
/*    pension de vejez (1K–10K)                                         */
/* ------------------------------------------------------------------ */

const niegaLaPension: ContenidoGuia = {
  slug: "niegan-la-pension",
  silo: "pensiones",
  h1: "Qué hacer si te niegan la pensión de vejez",
  title: "Pensión de vejez negada: qué hacer y cómo reclamar",
  description:
    "Requisitos de la pensión de vejez, por qué la niegan, recursos contra la resolución y cuándo demandar o poner tutela.",
  extracto:
    "Requisitos, motivos frecuentes de negación y los recursos que tienes contra la resolución de Colpensiones o del fondo.",
  resumen:
    "Si Colpensiones o tu fondo te niega la pensión de vejez, tienes 10 días hábiles desde la notificación para presentar los recursos de reposición y apelación contra la resolución. Si no prosperan, puedes demandar ante el juez laboral. La causa más frecuente de negación son semanas que faltan en la historia laboral, y muchas veces se pueden recuperar.",
  publicada: HOY,
  actualizada: HOY,
  revisor: revisorEditorial("Pensiones y seguridad social"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Que te nieguen la pensión no significa que no tengas derecho. Muchas negaciones se deben a errores corregibles: semanas que no aparecen porque un empleador no pagó, salarios mal reportados, un régimen de transición mal aplicado o un traslado entre fondos que dejó periodos sin cargar.",
            "Lo primero es leer la resolución completa: ahí la entidad dice por qué la niega y cuántas semanas te reconoce. Con eso comparas tu historia laboral y decides si recurrir, corregir la historia o demandar.",
          ],
        },
      ],
    },
    {
      id: "requisitos",
      titulo: "Requisitos de la pensión de vejez",
      bloques: [
        {
          tipo: "tabla",
          tabla: {
            titulo: "Según el régimen",
            encabezados: ["Régimen", "Requisitos"],
            filas: [
              [
                "Prima media (Colpensiones)",
                "57 años mujeres y 62 hombres, y 1.300 semanas (para mujeres se reducen de forma gradual desde 2026 hasta 1.000 en 2036, sentencia C-197 de 2023)",
              ],
              [
                "Ahorro individual (fondos privados)",
                "Tener en la cuenta el capital suficiente para la pensión, o 57/62 años y 1.150 semanas para la garantía de pensión mínima",
              ],
            ],
          },
        },
        {
          tipo: "parrafos",
          textos: [
            "La reforma pensional (Ley 2381 de 2024) cambia algunas reglas para quienes no están cerca de pensionarse. Si tienes dudas sobre qué régimen y qué normas te aplican, confírmalo con un abogado antes de presentar la solicitud.",
          ],
        },
      ],
    },
    {
      id: "recursos",
      titulo: "Cómo reclamar si te niegan la pensión",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Ruta de reclamación",
          pasos: [
            {
              titulo: "Presenta los recursos contra la resolución",
              texto:
                "Dentro de los 10 días hábiles siguientes a la notificación puedes presentar recurso de reposición y, en subsidio, de apelación (artículo 76 de la Ley 1437 de 2011). Explica por qué la decisión es equivocada y adjunta los soportes.",
            },
            {
              titulo: "Corrige la historia laboral si faltan semanas",
              texto:
                "Si la negación se debe a semanas que no aparecen, pide la corrección con certificados laborales y planillas. Si el empleador no pagó, esas semanas no se te pueden desconocer.",
            },
            {
              titulo: "Demanda ante el juez laboral",
              texto:
                "Si los recursos no prosperan, el siguiente paso es la demanda ordinaria laboral contra la entidad. El reconocimiento puede incluir las mesadas atrasadas con intereses o indexación.",
            },
            {
              titulo: "Tutela, solo en casos urgentes",
              texto:
                "Procede de forma excepcional cuando la falta de pensión afecta tu mínimo vital, por ejemplo personas de edad avanzada o en condición de salud grave sin otros ingresos.",
            },
          ],
        },
        {
          tipo: "plazo",
          titulo: "El derecho no prescribe, las mesadas sí",
          texto:
            "El derecho a la pensión es imprescriptible, pero cada mesada no reclamada prescribe a los 3 años. Esperar demasiado te hace perder dinero.",
        },
      ],
    },
    {
      id: "si-no-cumples",
      titulo: "Si no alcanzas las semanas",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Si cumpliste la edad pero no las semanas y no puedes seguir cotizando, en Colpensiones puedes pedir la indemnización sustitutiva (artículo 37 de la Ley 100 de 1993), que te devuelve lo cotizado actualizado. En los fondos privados se pide la devolución de saldos.",
            "Antes de pedirla, verifica muy bien la historia laboral: recibir la indemnización sustitutiva cierra la puerta a la pensión de vejez.",
          ],
        },
      ],
    },
  ],
  solo: [
    "Leer la resolución y descargar tu historia laboral para compararla.",
    "Pedir la corrección de semanas cuando tienes los soportes.",
  ],
  abogado: [
    "Te faltan pocas semanas o hay periodos con mora del empleador.",
    "Discusión sobre régimen de transición o traslado entre fondos.",
    "Los recursos no prosperaron y debes demandar.",
  ],
  faqs: [
    {
      pregunta: "¿Cuántas semanas necesito para la pensión de vejez?",
      respuesta:
        "En Colpensiones, 1.300 semanas y 57 años (mujeres) o 62 (hombres). Para las mujeres las semanas se reducen de forma gradual desde 2026 hasta 1.000 en 2036.",
    },
    {
      pregunta: "¿Cuánto tiempo tengo para apelar la negación de la pensión?",
      respuesta:
        "10 días hábiles desde la notificación de la resolución para presentar los recursos de reposición y apelación.",
    },
    {
      pregunta: "¿Puedo poner tutela si me niegan la pensión?",
      respuesta:
        "Solo de forma excepcional, cuando la falta de la pensión afecta tu mínimo vital y no puedes esperar un proceso ordinario.",
    },
    {
      pregunta: "¿Qué es la indemnización sustitutiva?",
      respuesta:
        "Es la devolución de lo cotizado, actualizado, para quien cumplió la edad sin completar las semanas y no puede seguir cotizando.",
    },
  ],
  enlaces: [
    { texto: "Cómo corregir tu historia laboral", to: "/guias/corregir-historia-laboral" },
    { texto: "Pensión de vejez", to: "/areas/pensiones/vejez" },
    { texto: "Reliquidación pensional", to: "/areas/pensiones/reliquidacion" },
    { texto: "Abogado de pensiones", to: "/areas/pensiones" },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. Divorcio de mutuo acuerdo — silo familia                          */
/*    divorcio (1K–10K) · divorcio de mutuo acuerdo (100–1K)            */
/* ------------------------------------------------------------------ */

const divorcioMutuoAcuerdo: ContenidoGuia = {
  slug: "divorcio-mutuo-acuerdo",
  silo: "familia",
  h1: "Divorcio de mutuo acuerdo en Colombia: pasos y requisitos",
  title: "Divorcio de mutuo acuerdo en Colombia: pasos y requisitos",
  description:
    "Cómo hacer el divorcio de mutuo acuerdo ante notario: requisitos, documentos, hijos menores y cuánto tarda.",
  extracto:
    "Requisitos, documentos y pasos del divorcio ante notario, y qué cambia cuando hay hijos menores.",
  resumen:
    "El divorcio de mutuo acuerdo se puede hacer ante notario por medio de abogado, sin ir a un juzgado. Se presenta un acuerdo sobre los hijos, los alimentos y los bienes; si hay hijos menores, el notario pide concepto al defensor de familia. Se firma por escritura pública y luego se inscribe en el registro civil de matrimonio.",
  publicada: HOY,
  actualizada: HOY,
  revisor: revisorEditorial("Derecho de familia"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Cuando los dos están de acuerdo en divorciarse, la vía más rápida es la notarial. Basta con que ambos lo quieran y que acuerden cómo quedan los hijos, los alimentos y los bienes. No hace falta probar ninguna causa ni explicar por qué se separan.",
            "Si uno de los dos no quiere, desde la Ley 2442 de 2024 cualquiera de los cónyuges puede pedir el divorcio ante el juez por su sola voluntad, sin tener que demostrar culpas. Para matrimonios religiosos, el divorcio produce la cesación de los efectos civiles.",
          ],
        },
      ],
    },
    {
      id: "que-dice-la-ley",
      titulo: "Qué dice la ley",
      bloques: [
        {
          tipo: "norma",
          norma: {
            articulo: "Art. 154, causal 9",
            norma: "Código Civil (mod. Ley 25 de 1992)",
            texto:
              "Es causal de divorcio el consentimiento de ambos cónyuges manifestado ante juez competente y reconocido por este mediante sentencia.",
          },
        },
        {
          tipo: "parrafos",
          textos: [
            "La Ley 962 de 2005 (artículo 34) y el Decreto 4436 de 2005 permiten hacer ese mismo divorcio de mutuo acuerdo ante notario, por escritura pública.",
          ],
        },
      ],
    },
    {
      id: "requisitos",
      titulo: "Requisitos y documentos",
      bloques: [
        {
          tipo: "resumen",
          puntos: [
            "Registro civil de matrimonio y registros civiles de nacimiento de los hijos.",
            "Poder de ambos cónyuges a un abogado (puede ser el mismo para los dos).",
            "Acuerdo sobre residencia separada y alimentos entre los cónyuges, si los hay.",
            "Si hay hijos menores: custodia, cuota alimentaria y régimen de visitas.",
            "Estado de la sociedad conyugal: si se liquida en el mismo trámite o después.",
          ],
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Cómo hacer el divorcio ante notario paso a paso",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Trámite notarial",
          pasos: [
            {
              titulo: "Acuerden los términos",
              texto:
                "Custodia y visitas de los hijos, cuota alimentaria, quién se queda en la vivienda y cómo se reparten los bienes. Ese acuerdo es la base del trámite.",
            },
            {
              titulo: "Otorguen poder a un abogado",
              texto:
                "El abogado redacta la solicitud y el acuerdo y los presenta en la notaría que elijan.",
            },
            {
              titulo: "Concepto del defensor de familia",
              texto:
                "Si hay hijos menores, el notario envía el acuerdo al defensor de familia, que tiene 15 días para revisar que proteja a los niños. Si propone cambios y no se aceptan, el trámite no sigue en notaría.",
            },
            {
              titulo: "Firma de la escritura e inscripción",
              texto:
                "Se firma la escritura pública de divorcio y se inscribe en el registro civil de matrimonio y en el de nacimiento de cada cónyuge.",
            },
          ],
        },
        {
          tipo: "plazo",
          titulo: "Cuánto tarda",
          texto:
            "Sin hijos menores y con todos los documentos, el divorcio notarial suele tomar pocas semanas. Con hijos menores se suma el término del defensor de familia.",
        },
      ],
    },
  ],
  solo: ["Reunir los registros civiles y ponerse de acuerdo en los términos."],
  abogado: [
    "El trámite notarial exige abogado.",
    "Hay bienes, deudas o empresas que repartir.",
    "No hay acuerdo y se debe ir ante el juez.",
  ],
  faqs: [
    {
      pregunta: "¿Puedo divorciarme ante notario sin abogado?",
      respuesta: "No. El divorcio de mutuo acuerdo ante notario se presenta por medio de abogado.",
    },
    {
      pregunta: "¿Qué pasa si mi esposo o esposa no quiere divorciarse?",
      respuesta:
        "Desde la Ley 2442 de 2024 cualquiera de los cónyuges puede pedir el divorcio ante el juez por su sola voluntad, sin probar culpas.",
    },
    {
      pregunta: "¿Se puede hacer el divorcio notarial con hijos menores?",
      respuesta:
        "Sí. El notario pide concepto al defensor de familia sobre custodia, alimentos y visitas antes de firmar la escritura.",
    },
    {
      pregunta: "¿El divorcio liquida la sociedad conyugal?",
      respuesta:
        "El divorcio disuelve la sociedad conyugal. La liquidación (repartir bienes y deudas) se puede hacer en el mismo trámite o después.",
    },
  ],
  enlaces: [
    { texto: "Divorcio", to: "/areas/familia/divorcio" },
    { texto: "Cómo se calcula la cuota alimentaria", to: "/guias/calcular-cuota-alimentaria" },
    { texto: "Custodia de hijos", to: "/areas/familia/custodia" },
    { texto: "Abogado de familia", to: "/areas/familia" },
  ],
};

/* ------------------------------------------------------------------ */
/* 6. Sucesión notarial o judicial — silo familia                       */
/*    sucesion (1K–10K) · sucesion notarial (100–1K)                    */
/* ------------------------------------------------------------------ */

const sucesionNotarialJudicial: ContenidoGuia = {
  slug: "sucesion-notarial-judicial",
  silo: "familia",
  h1: "Sucesión notarial o judicial: cuál elegir y cómo hacerla",
  title: "Sucesión notarial o judicial: cuál elegir y cómo hacerla",
  description:
    "Diferencias entre la sucesión en notaría y ante juez, requisitos, pasos, quiénes heredan y qué impuestos se pagan.",
  extracto:
    "Cuándo se puede hacer la sucesión en notaría, cuándo toca ir a juez y cómo se reparte la herencia.",
  resumen:
    "La sucesión se puede hacer en notaría cuando todos los herederos están de acuerdo y actúan por medio de abogado; es más rápida. Si hay desacuerdo, herederos que no aparecen o conflictos sobre los bienes, se tramita ante juez. En ambos casos se hace inventario y avalúo de los bienes, se pagan las deudas y se reparte entre los herederos según el orden que fija la ley.",
  publicada: HOY,
  actualizada: HOY,
  revisor: revisorEditorial("Derecho de familia"),
  apartados: [
    {
      id: "respuesta-directa",
      titulo: "Respuesta directa",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "La sucesión es el trámite para pasar los bienes de una persona fallecida a sus herederos. Mientras no se haga, los bienes siguen a nombre del fallecido: no se pueden vender, escriturar ni traspasar.",
            "La regla para elegir es simple. Si todos los herederos están de acuerdo, se hace en notaría. Si alguno no está de acuerdo, no aparece o hay discusión sobre quién hereda o cuánto, toca ir ante el juez. Se puede empezar en notaría y, si surge un conflicto, pasar al juzgado.",
          ],
        },
      ],
    },
    {
      id: "diferencias",
      titulo: "Sucesión notarial vs. judicial",
      bloques: [
        {
          tipo: "tabla",
          tabla: {
            titulo: "Comparación",
            encabezados: ["", "Notarial", "Judicial"],
            filas: [
              [
                "Cuándo procede",
                "Todos los herederos de acuerdo",
                "Hay desacuerdo o herederos ausentes",
              ],
              [
                "Norma",
                "Decreto 902 de 1988",
                "Código General del Proceso (arts. 487 y siguientes)",
              ],
              ["Abogado", "Obligatorio", "Obligatorio"],
              ["Duración", "Suele tomar pocos meses", "Puede tardar uno o varios años"],
              [
                "Ante quién",
                "Notario del último domicilio del fallecido",
                "Juez de familia o civil, según la cuantía",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "quienes-heredan",
      titulo: "Quiénes heredan",
      bloques: [
        {
          tipo: "parrafos",
          textos: [
            "Si no hay testamento, la ley fija el orden. Primero heredan los hijos, junto con el cónyuge o compañero permanente, que recibe una porción conyugal. A falta de hijos, heredan los padres con el cónyuge; después, los hermanos con el cónyuge; y luego los sobrinos.",
            "Antes de repartir la herencia se liquida la sociedad conyugal o patrimonial: la mitad de los bienes adquiridos durante el matrimonio o la unión le corresponde al cónyuge o compañero sobreviviente, y solo la otra mitad entra a la herencia.",
          ],
        },
      ],
    },
    {
      id: "paso-a-paso",
      titulo: "Cómo hacer la sucesión notarial paso a paso",
      bloques: [
        {
          tipo: "pasos",
          titulo: "Trámite en notaría",
          pasos: [
            {
              titulo: "Reúnan los documentos",
              texto:
                "Registro civil de defunción, registros que prueben el parentesco, certificados de tradición de los inmuebles, documentos de vehículos, cuentas y deudas del fallecido.",
            },
            {
              titulo: "Otorguen poder a un abogado",
              texto:
                "El abogado presenta la solicitud con el inventario y avalúo de bienes y deudas y la propuesta de partición firmada por todos los herederos.",
            },
            {
              titulo: "Edicto y comunicación a la DIAN",
              texto:
                "El notario publica un edicto para que se presenten otros posibles interesados y comunica la sucesión a la DIAN, que verifica si hay deudas tributarias.",
            },
            {
              titulo: "Escritura y registro",
              texto:
                "Vencidos los términos, se firma la escritura pública de partición y se registra en la oficina de instrumentos públicos (inmuebles) y en tránsito (vehículos).",
            },
          ],
        },
        {
          tipo: "plazo",
          titulo: "Impuestos",
          texto:
            "Lo que se recibe por herencia paga impuesto de ganancia ocasional en la declaración de renta del heredero. Además se pagan los derechos notariales y de registro.",
        },
      ],
    },
  ],
  solo: [
    "Reunir los registros civiles y los certificados de los bienes.",
    "Ponerse de acuerdo entre herederos sobre cómo repartir.",
  ],
  abogado: [
    "Toda sucesión, notarial o judicial, requiere abogado.",
    "Hay herederos en desacuerdo, ausentes o que no se conocen.",
    "El fallecido dejó deudas, empresas o bienes en otros países.",
  ],
  faqs: [
    {
      pregunta: "¿Cuánto se demora una sucesión notarial?",
      respuesta:
        "Si todos los herederos están de acuerdo y los documentos están completos, suele tomar pocos meses. La judicial puede tardar uno o varios años.",
    },
    {
      pregunta: "¿Se puede hacer la sucesión en notaría si hay herederos menores de edad?",
      respuesta:
        "Sí, siempre que actúen por medio de su representante legal y todos estén de acuerdo. Si hay conflicto de intereses, el caso debe ir ante el juez.",
    },
    {
      pregunta: "¿Qué pasa si un heredero no quiere firmar?",
      respuesta:
        "No se puede hacer en notaría: la sucesión debe tramitarse ante el juez, que decide la partición.",
    },
    {
      pregunta: "¿Qué impuestos se pagan en una sucesión?",
      respuesta:
        "El heredero declara lo recibido como ganancia ocasional en su declaración de renta. También se pagan derechos notariales y de registro.",
    },
  ],
  enlaces: [
    { texto: "Sucesiones y herencias", to: "/areas/familia/sucesiones" },
    { texto: "Unión marital de hecho", to: "/areas/familia/union-marital-de-hecho" },
    { texto: "Divorcio de mutuo acuerdo", to: "/guias/divorcio-mutuo-acuerdo" },
    { texto: "Abogado de familia", to: "/areas/familia" },
  ],
};

export const GUIAS_ALTO_VOLUMEN: ContenidoGuia[] = [
  impugnarComparendo,
  corregirHistoriaLaboral,
  queHacerDespido,
  niegaLaPension,
  divorcioMutuoAcuerdo,
  sucesionNotarialJudicial,
];

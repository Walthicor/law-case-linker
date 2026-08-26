/**
 * Los 13 pilares (silos) del sitio.
 * Regla de enlazado: un pilar solo enlaza a SUS subáreas, SU herramienta,
 * SUS guías y como máximo 2 pilares relacionados.
 */

import { CONTENIDO, type Seccion } from "./pilares-contenido";

export type Subarea = {
  titulo: string;
  slug: string;
  /** Texto real de la subárea (contenido desarrollado). */
  texto?: string | undefined;
  /** Ocupa el espacio destacado del grid. */
  destacada?: boolean | undefined;
};

export type Norma = { articulo: string; norma: string; texto: string };
export type Faq = { pregunta: string; respuesta: string };
export type Guia = { titulo: string; slug: string };
export type { Seccion };


export type Pilar = {
  slug: string;
  /** Nombre corto usado en textos: "laboral", "de familia"… */
  area: string;
  /** Título del área para encabezados y migas */
  titulo: string;
  /** Keyword objetivo única de la página */
  keyword: string;
  h1: string;
  /** Debe contener la keyword en las primeras 25 palabras */
  entrada: string;
  icono: string;
  situaciones: string[];
  subareas: Subarea[];
  normas: Norma[];
  plazo: { titulo: string; texto: string };
  solo: string[];
  abogado: string[];
  faqs: Faq[];
  guias: Guia[];
  /** Contenido largo desarrollado (pilares con contenido real). */
  secciones?: Seccion[] | undefined;

  herramienta?: { titulo: string; descripcion: string; slug: string } | undefined;
  relacionados: string[];
  /** Área correspondiente en el formulario de /iniciar-caso */
  areaFormulario: string;
};

const soloBase = (a: string): string[] => [
  `El monto en discusión es bajo y la contraparte está dispuesta a negociar.`,
  `Solo necesitas radicar una petición o una queja ante la entidad competente.`,
  `Tienes todos los documentos y el trámite ${a} es puramente administrativo.`,
  `No hay plazos de prescripción corriendo ni un proceso judicial abierto.`,
];

const abogadoBase = (a: string): string[] => [
  `La contraparte ya contestó con abogado o te llegó una demanda.`,
  `Hay un plazo de prescripción o caducidad a punto de vencerse.`,
  `El caso ${a} exige pruebas técnicas, peritajes o audiencias.`,
  `El dinero o el derecho en juego es alto y un error te deja sin opción.`,
];

const faqsBase = (t: string, a: string): Faq[] => [
  {
    pregunta: `¿Cuánto cuesta un abogado ${a} en Colombia?`,
    respuesta:
      "Depende de la complejidad y de la modalidad: honorarios fijos, por horas o cuota litis (un porcentaje de lo que se recupere). En la primera conversación el abogado te dice el esquema antes de que asumas cualquier compromiso.",
  },
  {
    pregunta: `¿Cuánto se demora un caso ${a}?`,
    respuesta:
      "Un acuerdo directo puede resolverse en semanas. Un proceso judicial en Colombia suele tomar entre varios meses y un par de años según el despacho y la congestión judicial.",
  },
  {
    pregunta: "¿Qué documentos debo tener listos?",
    respuesta:
      "Lleva todo lo que pruebe la relación y los hechos: contratos, comunicaciones, comprobantes de pago, fotos, certificados y cualquier respuesta escrita de la contraparte.",
  },
  {
    pregunta: "¿Puedo perder el derecho por dejar pasar el tiempo?",
    respuesta:
      "Sí. Cada acción tiene un plazo de prescripción o caducidad. Cuando el plazo vence, el derecho ya no se puede reclamar aunque tengas la razón.",
  },
  {
    pregunta: `¿Ustedes son una firma de abogados ${a}?`,
    respuesta:
      "No. Somos una plataforma de conexión: recibimos tu caso, lo clasificamos y te ponemos en contacto con un abogado independiente verificado. La relación profesional la defines directamente con él.",
  },
  {
    pregunta: `¿${t} funciona en toda Colombia?`,
    respuesta:
      "Sí. Tenemos abogados verificados en las principales ciudades del país y muchos trámites se pueden adelantar de forma virtual desde cualquier municipio.",
  },
];

type Semilla = Omit<Pilar, "solo" | "abogado" | "faqs"> &
  Partial<Pick<Pilar, "solo" | "abogado" | "faqs">>;

const SEMILLAS: Semilla[] = [
  {
    slug: "laboral",
    area: "laboral",
    titulo: "Derecho laboral",
    keyword: "abogado laboral",
    h1: "Abogado laboral en Colombia",
    entrada:
      "Si buscas un abogado laboral en Colombia porque te despidieron, no te liquidaron bien o te deben prestaciones, aquí te explicamos qué puedes reclamar y en cuánto tiempo.",
    icono: "Briefcase",
    situaciones: [
      "Te despidieron sin justa causa o te obligaron a renunciar",
      "No te pagaron la liquidación, cesantías o primas",
      "Trabajas sin contrato o con un contrato mal clasificado",
      "Te deben horas extras, recargos o dominicales",
      "Sufres acoso laboral en tu trabajo",
      "Te despidieron estando en incapacidad o embarazo",
    ],
    subareas: [
      { titulo: "Despido sin justa causa", slug: "despido-sin-justa-causa" },
      { titulo: "Liquidación laboral", slug: "liquidacion-laboral" },
      { titulo: "Acoso laboral", slug: "acoso-laboral" },
      { titulo: "Contrato de trabajo", slug: "contrato-de-trabajo" },
      { titulo: "Horas extras y recargos", slug: "horas-extras" },
      { titulo: "Estabilidad laboral reforzada", slug: "estabilidad-laboral-reforzada" },
    ],
    normas: [
      {
        articulo: "Art. 64 CST",
        norma: "Código Sustantivo del Trabajo",
        texto:
          "En caso de terminación unilateral del contrato sin justa causa, el empleador debe pagar al trabajador una indemnización.",
      },
      {
        articulo: "Art. 65 CST",
        norma: "Código Sustantivo del Trabajo",
        texto:
          "Si el empleador no paga los salarios y prestaciones al terminar el contrato, debe pagar un día de salario por cada día de retardo.",
      },
    ],
    plazo: {
      titulo: "Prescripción: 3 años",
      texto:
        "Las acciones laborales prescriben en 3 años contados desde que la obligación se hizo exigible (art. 488 CST). Después de ese plazo no puedes reclamar.",
    },
    guias: [
      { titulo: "Cómo calcular tu liquidación paso a paso", slug: "calcular-liquidacion" },
      { titulo: "Qué hacer si te despidieron hoy", slug: "que-hacer-despido" },
      { titulo: "Cómo denunciar acoso laboral", slug: "denunciar-acoso-laboral" },
    ],
    herramienta: {
      titulo: "Calculadora de liquidación laboral",
      descripcion:
        "Calcula cesantías, intereses, prima, vacaciones e indemnización con tu salario y tus fechas reales.",
      slug: "calculadora-liquidacion",
    },
    relacionados: ["pensiones", "salud"],
    areaFormulario: "Laboral",
  },
  {
    slug: "familia",
    area: "de familia",
    titulo: "Derecho de familia",
    keyword: "abogado de familia",
    h1: "Abogado de familia en Colombia",
    entrada:
      "Buscar un abogado de familia en Colombia es urgente cuando hay divorcio, custodia de hijos, cuota alimentaria o una sucesión que se quedó sin repartir.",
    icono: "Users",
    situaciones: [
      "Quieres divorciarte de mutuo acuerdo o por causal",
      "Necesitas fijar o aumentar la cuota alimentaria",
      "Hay un conflicto por la custodia de tus hijos",
      "Debes liquidar la sociedad conyugal",
      "Necesitas adelantar una sucesión",
      "Quieres reconocer o impugnar la paternidad",
    ],
    subareas: [
      { titulo: "Divorcio", slug: "divorcio" },
      { titulo: "Cuota alimentaria", slug: "cuota-alimentaria" },
      { titulo: "Custodia y visitas", slug: "custodia-y-visitas" },
      { titulo: "Sucesiones y herencias", slug: "sucesiones" },
      { titulo: "Unión marital de hecho", slug: "union-marital-de-hecho" },
      { titulo: "Paternidad", slug: "paternidad" },
    ],
    normas: [
      {
        articulo: "Art. 154 C.C.",
        norma: "Código Civil",
        texto: "Establece las causales de divorcio del matrimonio civil en Colombia.",
      },
      {
        articulo: "Art. 129 C.I.A.",
        norma: "Código de la Infancia y la Adolescencia",
        texto:
          "El juez fijará la cuota alimentaria teniendo en cuenta la capacidad económica del obligado y las necesidades del menor.",
      },
    ],
    plazo: {
      titulo: "Alimentos: 2 años",
      texto:
        "Las cuotas alimentarias ya causadas prescriben a los 2 años. La acción de petición de herencia prescribe a los 10 años.",
    },
    guias: [
      { titulo: "Divorcio de mutuo acuerdo paso a paso", slug: "divorcio-mutuo-acuerdo" },
      { titulo: "Cómo se calcula la cuota alimentaria", slug: "calcular-cuota-alimentaria" },
      { titulo: "Sucesión notarial vs. judicial", slug: "sucesion-notarial-judicial" },
    ],
    herramienta: {
      titulo: "Calculadora de cuota alimentaria",
      descripcion:
        "Estima un rango de cuota según ingresos, número de hijos y gastos acreditados.",
      slug: "calculadora-cuota-alimentaria",
    },
    relacionados: ["civil", "penal"],
    areaFormulario: "Familia",
  },
  {
    slug: "penal",
    area: "penal",
    titulo: "Derecho penal",
    keyword: "abogado penalista",
    h1: "Abogado penalista en Colombia",
    entrada:
      "Necesitas un abogado penalista desde el primer momento: si te citaron a interrogatorio, te capturaron o quieres denunciar, cada hora cuenta.",
    icono: "Gavel",
    situaciones: [
      "Te citaron a una audiencia o a interrogatorio",
      "Capturaron a un familiar y necesitas defensa urgente",
      "Quieres poner una denuncia penal",
      "Te investigan por un delito y no sabes qué hacer",
      "Buscas una salida anticipada o preacuerdo",
      "Eres víctima y quieres constituirte como parte",
    ],
    subareas: [
      { titulo: "Defensa penal", slug: "defensa-penal" },
      { titulo: "Denuncias", slug: "denuncias" },
      { titulo: "Audiencias preliminares", slug: "audiencias-preliminares" },
      { titulo: "Violencia intrafamiliar", slug: "violencia-intrafamiliar" },
      { titulo: "Delitos económicos", slug: "delitos-economicos" },
    ],
    normas: [
      {
        articulo: "Art. 8 Ley 906 de 2004",
        norma: "Código de Procedimiento Penal",
        texto:
          "El imputado tiene derecho a ser asistido por un abogado defensor durante toda la actuación.",
      },
      {
        articulo: "Art. 83 C.P.",
        norma: "Código Penal",
        texto: "La acción penal prescribe en un tiempo igual al máximo de la pena fijada en la ley.",
      },
    ],
    plazo: {
      titulo: "Actúa en las primeras 36 horas",
      texto:
        "Tras una captura, la persona debe ser llevada ante juez de control de garantías dentro de las 36 horas siguientes. No esperes.",
    },
    guias: [
      { titulo: "Qué hacer si te citan a interrogatorio", slug: "citacion-interrogatorio" },
      { titulo: "Cómo poner una denuncia penal", slug: "poner-denuncia-penal" },
      { titulo: "Etapas del proceso penal en Colombia", slug: "etapas-proceso-penal" },
    ],
    relacionados: ["familia", "transito"],
    areaFormulario: "Penal",
  },
  {
    slug: "pensiones",
    area: "de pensiones",
    titulo: "Pensiones y seguridad social",
    keyword: "abogado de pensiones",
    h1: "Abogado de pensiones en Colombia",
    entrada:
      "Un abogado de pensiones te sirve cuando Colpensiones o el fondo privado te niega la pensión, te la liquida mal o no te reconoce semanas cotizadas.",
    icono: "PiggyBank",
    situaciones: [
      "Te negaron la pensión de vejez",
      "No te reconocen semanas cotizadas",
      "Necesitas pensión de invalidez",
      "Falleció un familiar pensionado o cotizante",
      "Quieres cambiarte de régimen o reliquidar",
      "Te pagan un valor menor al que corresponde",
    ],
    subareas: [
      { titulo: "Pensión de vejez", slug: "pension-de-vejez" },
      { titulo: "Pensión de invalidez", slug: "pension-de-invalidez" },
      { titulo: "Pensión de sobrevivientes", slug: "pension-de-sobrevivientes" },
      { titulo: "Reliquidación pensional", slug: "reliquidacion-pensional" },
      { titulo: "Traslado de régimen", slug: "traslado-de-regimen" },
    ],
    normas: [
      {
        articulo: "Art. 33 Ley 100 de 1993",
        norma: "Sistema General de Pensiones",
        texto:
          "Requisitos de edad y semanas de cotización para acceder a la pensión de vejez en el régimen de prima media.",
      },
      {
        articulo: "Art. 46 Ley 100 de 1993",
        norma: "Sistema General de Pensiones",
        texto: "Requisitos para que los beneficiarios accedan a la pensión de sobrevivientes.",
      },
    ],
    plazo: {
      titulo: "El derecho pensional es imprescriptible",
      texto:
        "La pensión como derecho no prescribe, pero las mesadas ya causadas sí: solo puedes cobrar las de los últimos 3 años.",
    },
    guias: [
      { titulo: "Qué hacer si te niegan la pensión", slug: "niegan-la-pension" },
      { titulo: "Cómo corregir tu historia laboral", slug: "corregir-historia-laboral" },
      { titulo: "Prima media vs. ahorro individual", slug: "prima-media-vs-ahorro" },
    ],
    herramienta: {
      titulo: "Simulador de semanas para pensión",
      descripcion: "Revisa cuántas semanas te faltan y en qué año podrías pensionarte.",
      slug: "simulador-pension",
    },
    relacionados: ["laboral", "salud"],
    areaFormulario: "Pensiones",
  },
  {
    slug: "salud",
    area: "de salud y EPS",
    titulo: "Salud y EPS",
    keyword: "abogado para tutela de salud",
    h1: "Abogado para tutela de salud contra la EPS",
    entrada:
      "Si necesitas un abogado para tutela de salud porque la EPS te niega un medicamento, una cirugía o una autorización, la tutela se resuelve en 10 días.",
    icono: "HeartPulse",
    situaciones: [
      "La EPS te niega un medicamento o tratamiento",
      "Llevas meses esperando una cirugía",
      "No te autorizan una cita con especialista",
      "Te niegan el transporte o el acompañante",
      "No te pagan las incapacidades",
      "Necesitas atención para un familiar en urgencias",
    ],
    subareas: [
      { titulo: "Tutela en salud", slug: "tutela-en-salud" },
      { titulo: "Negación de medicamentos", slug: "negacion-de-medicamentos" },
      { titulo: "Autorización de cirugías", slug: "autorizacion-de-cirugias" },
      { titulo: "Incapacidades y EPS", slug: "incapacidades-eps" },
      { titulo: "Desacato", slug: "desacato" },
    ],
    normas: [
      {
        articulo: "Art. 86 C.P.",
        norma: "Constitución Política",
        texto:
          "Toda persona podrá reclamar ante los jueces, mediante acción de tutela, la protección inmediata de sus derechos fundamentales.",
      },
      {
        articulo: "Art. 8 Ley 1751 de 2015",
        norma: "Ley Estatutaria de Salud",
        texto:
          "Los servicios de salud deben prestarse de manera completa; se prohíbe fragmentar la atención.",
      },
    ],
    plazo: {
      titulo: "La tutela se falla en 10 días",
      texto:
        "El juez debe resolver la tutela dentro de los 10 días siguientes. Si la EPS incumple el fallo, procede el incidente de desacato.",
    },
    guias: [
      { titulo: "Cómo redactar una tutela en salud", slug: "redactar-tutela-salud" },
      { titulo: "Qué hacer si la EPS incumple el fallo", slug: "desacato-eps" },
      { titulo: "Incapacidades: EPS, ARL o empleador", slug: "quien-paga-tu-incapacidad" },
    ],
    herramienta: {
      titulo: "Generador de tutela en salud",
      descripcion: "Arma el borrador de tu tutela con tus datos y los hechos de tu caso.",
      slug: "generador-tutela-salud",
    },
    relacionados: ["pensiones", "administrativo"],
    areaFormulario: "Administrativo",
  },
  {
    slug: "civil",
    area: "civil",
    titulo: "Derecho civil y contratos",
    keyword: "abogado civil",
    h1: "Abogado civil en Colombia",
    entrada:
      "Un abogado civil resuelve incumplimientos de contrato, cobros de deudas, responsabilidad por daños y conflictos entre particulares.",
    icono: "FileText",
    situaciones: [
      "Te incumplieron un contrato",
      "Te deben plata y no te pagan",
      "Necesitas un proceso ejecutivo",
      "Te causaron un daño y quieres indemnización",
      "Necesitas revisar o redactar un contrato",
      "Tienes un conflicto por un bien o una propiedad",
    ],
    subareas: [
      { titulo: "Incumplimiento de contrato", slug: "incumplimiento-de-contrato" },
      { titulo: "Proceso ejecutivo", slug: "proceso-ejecutivo" },
      { titulo: "Responsabilidad civil", slug: "responsabilidad-civil" },
      { titulo: "Cobro de deudas", slug: "cobro-de-deudas" },
      { titulo: "Prescripción adquisitiva", slug: "prescripcion-adquisitiva" },
    ],
    normas: [
      {
        articulo: "Art. 1602 C.C.",
        norma: "Código Civil",
        texto:
          "Todo contrato legalmente celebrado es una ley para los contratantes y no puede ser invalidado sino por consentimiento mutuo.",
      },
      {
        articulo: "Art. 422 C.G.P.",
        norma: "Código General del Proceso",
        texto:
          "Pueden demandarse ejecutivamente las obligaciones expresas, claras y exigibles que consten en documentos del deudor.",
      },
    ],
    plazo: {
      titulo: "Prescripción: 5 y 10 años",
      texto:
        "La acción ejecutiva prescribe en 5 años y la ordinaria en 10 años, contados desde que la obligación se hizo exigible.",
    },
    guias: [
      { titulo: "Cómo cobrar una deuda con título valor", slug: "cobrar-deuda-titulo-valor" },
      { titulo: "Qué hacer si te incumplen un contrato", slug: "incumplimiento-contrato-pasos" },
      { titulo: "Requisitos del proceso ejecutivo", slug: "requisitos-proceso-ejecutivo" },
    ],
    relacionados: ["inmobiliario", "comercial"],
    areaFormulario: "Civil",
  },
  {
    slug: "inmobiliario",
    area: "inmobiliario",
    titulo: "Inmobiliario y arrendamientos",
    keyword: "abogado inmobiliario",
    h1: "Abogado inmobiliario en Colombia",
    entrada:
      "Un abogado inmobiliario te acompaña en compraventas, escrituración, restitución de inmueble arrendado y conflictos de propiedad horizontal.",
    icono: "Building2",
    situaciones: [
      "Tu arrendatario no paga y quieres el inmueble de vuelta",
      "El arrendador te quiere sacar sin causa",
      "Vas a comprar y quieres un estudio de títulos",
      "Hay problemas con la escritura o el registro",
      "Conflictos con la administración del conjunto",
      "El constructor incumplió la entrega",
    ],
    subareas: [
      { titulo: "Restitución de inmueble", slug: "restitucion-de-inmueble" },
      { titulo: "Contrato de arrendamiento", slug: "contrato-de-arrendamiento" },
      { titulo: "Compraventa y escrituración", slug: "compraventa-y-escrituracion" },
      { titulo: "Estudio de títulos", slug: "estudio-de-titulos" },
      { titulo: "Propiedad horizontal", slug: "propiedad-horizontal" },
    ],
    normas: [
      {
        articulo: "Art. 22 Ley 820 de 2003",
        norma: "Régimen de arrendamiento de vivienda urbana",
        texto:
          "Enumera las causales por las cuales el arrendador puede dar por terminado unilateralmente el contrato.",
      },
      {
        articulo: "Art. 384 C.G.P.",
        norma: "Código General del Proceso",
        texto: "Regula el proceso de restitución de inmueble arrendado.",
      },
    ],
    plazo: {
      titulo: "Preaviso: 3 meses",
      texto:
        "Para terminar el arrendamiento de vivienda por vencimiento del término se exige preaviso de 3 meses. Incumplirlo invalida la terminación.",
    },
    guias: [
      { titulo: "Cómo hacer un contrato de arrendamiento", slug: "contrato-arrendamiento" },
      { titulo: "Pasos de la restitución de inmueble", slug: "pasos-restitucion" },
      { titulo: "Qué revisar antes de comprar vivienda", slug: "revisar-antes-de-comprar" },
    ],
    relacionados: ["civil", "comercial"],
    areaFormulario: "Inmobiliario",
  },
  {
    slug: "comercial",
    area: "comercial",
    titulo: "Derecho comercial y empresas",
    keyword: "abogado comercial",
    h1: "Abogado comercial para empresas en Colombia",
    entrada:
      "Un abogado comercial constituye tu sociedad, redacta contratos mercantiles y resuelve conflictos entre socios o con proveedores.",
    icono: "Store",
    situaciones: [
      "Vas a constituir una SAS",
      "Necesitas contratos comerciales sólidos",
      "Hay un conflicto entre socios",
      "Un cliente o proveedor te incumplió",
      "Necesitas reformar estatutos",
      "Quieres proteger tu negocio antes de crecer",
    ],
    subareas: [
      { titulo: "Constitución de SAS", slug: "constitucion-de-sas" },
      { titulo: "Contratos comerciales", slug: "contratos-comerciales" },
      { titulo: "Conflictos entre socios", slug: "conflictos-entre-socios" },
      { titulo: "Reforma de estatutos", slug: "reforma-de-estatutos" },
      { titulo: "Títulos valores", slug: "titulos-valores" },
    ],
    normas: [
      {
        articulo: "Art. 5 Ley 1258 de 2008",
        norma: "Sociedad por Acciones Simplificada",
        texto: "La SAS se constituye por documento privado inscrito en el registro mercantil.",
      },
      {
        articulo: "Art. 98 C.Co.",
        norma: "Código de Comercio",
        texto:
          "Por el contrato de sociedad dos o más personas se obligan a hacer un aporte para repartirse las utilidades.",
      },
    ],
    plazo: {
      titulo: "Prescripción mercantil: 5 años",
      texto:
        "Las acciones derivadas de contratos mercantiles prescriben, por regla general, en 5 años (art. 2536 C.C. y normas del C.Co.).",
    },
    guias: [
      { titulo: "Cómo constituir una SAS paso a paso", slug: "constituir-sas" },
      { titulo: "Cláusulas que no pueden faltar en un contrato", slug: "clausulas-contrato" },
      { titulo: "Cómo salir de una sociedad", slug: "salir-de-una-sociedad" },
    ],
    relacionados: ["civil", "consumidor"],
    areaFormulario: "Comercial",
  },
  {
    slug: "consumidor",
    area: "de consumidor",
    titulo: "Consumidor y servicios",
    keyword: "abogado de derecho del consumidor",
    h1: "Abogado de derecho del consumidor en Colombia",
    entrada:
      "Un abogado de derecho del consumidor te ayuda cuando te venden un producto defectuoso, no te hacen efectiva la garantía o te cobran de más.",
    icono: "ShoppingBag",
    situaciones: [
      "Te vendieron un producto defectuoso",
      "No te respetan la garantía",
      "Te cobran servicios que no pediste",
      "Publicidad engañosa o cláusulas abusivas",
      "Aerolínea o banco no responde",
      "Quieres demandar ante la SIC",
    ],
    subareas: [
      { titulo: "Garantía de productos", slug: "garantia-de-productos" },
      { titulo: "Cláusulas abusivas", slug: "clausulas-abusivas" },
      { titulo: "Publicidad engañosa", slug: "publicidad-enganosa" },
      { titulo: "Demanda ante la SIC", slug: "demanda-sic" },
      { titulo: "Servicios financieros", slug: "servicios-financieros" },
    ],
    normas: [
      {
        articulo: "Art. 7 Ley 1480 de 2011",
        norma: "Estatuto del Consumidor",
        texto:
          "La garantía legal obliga al productor y al proveedor a responder por la calidad e idoneidad del bien o servicio.",
      },
      {
        articulo: "Art. 58 Ley 1480 de 2011",
        norma: "Estatuto del Consumidor",
        texto: "Regula la acción de protección al consumidor ante la Superintendencia.",
      },
    ],
    plazo: {
      titulo: "Garantía: reclama a tiempo",
      texto:
        "La reclamación directa es requisito previo y la acción de protección al consumidor caduca al año de terminada la relación de consumo.",
    },
    guias: [
      { titulo: "Cómo hacer efectiva la garantía", slug: "hacer-efectiva-la-garantia" },
      { titulo: "Cómo demandar ante la SIC", slug: "demandar-ante-la-sic" },
      { titulo: "Qué es una cláusula abusiva", slug: "clausulas-abusivas-guia" },
    ],
    relacionados: ["civil", "insolvencia"],
    areaFormulario: "Civil",
  },
  {
    slug: "insolvencia",
    area: "de insolvencia",
    titulo: "Deudas y reportes en centrales",
    keyword: "abogado de insolvencia de persona natural",
    h1: "Abogado de insolvencia de persona natural en Colombia",
    entrada:
      "Un abogado de insolvencia de persona natural te permite negociar todas tus deudas en un solo trámite y frenar los procesos de cobro en tu contra.",
    icono: "Scale",
    situaciones: [
      "Tienes más deudas de las que puedes pagar",
      "Te embargaron el salario o una cuenta",
      "Estás reportado en Datacrédito",
      "Los bancos ya te pasaron a cobro jurídico",
      "Quieres un acuerdo de pago formal",
      "Te llaman casas de cobranza todos los días",
    ],
    subareas: [
      { titulo: "Insolvencia de persona natural", slug: "insolvencia-persona-natural" },
      { titulo: "Levantamiento de embargos", slug: "levantamiento-de-embargos" },
      { titulo: "Reportes en centrales de riesgo", slug: "reportes-centrales-riesgo" },
      { titulo: "Acuerdos de pago", slug: "acuerdos-de-pago" },
      { titulo: "Cobro jurídico", slug: "cobro-juridico" },
    ],
    normas: [
      {
        articulo: "Art. 531 C.G.P.",
        norma: "Código General del Proceso",
        texto:
          "La persona natural no comerciante podrá solicitar la negociación de deudas ante un centro de conciliación o notaría.",
      },
      {
        articulo: "Art. 13 Ley 1266 de 2008",
        norma: "Ley de Habeas Data",
        texto: "Regula la permanencia de la información negativa en las centrales de riesgo.",
      },
    ],
    plazo: {
      titulo: "Reporte negativo: hasta 4 años",
      texto:
        "El dato negativo permanece hasta el doble del tiempo de la mora, con máximo de 4 años desde que pagaste.",
    },
    guias: [
      { titulo: "Cómo funciona la insolvencia de persona natural", slug: "insolvencia-como-funciona" },
      { titulo: "Cómo salir de Datacrédito", slug: "salir-de-datacredito" },
      { titulo: "Qué hacer si te embargan el salario", slug: "embargo-de-salario" },
    ],
    herramienta: {
      titulo: "Test de insolvencia",
      descripcion: "Revisa en 2 minutos si cumples los requisitos para entrar en insolvencia.",
      slug: "test-insolvencia",
    },
    relacionados: ["civil", "consumidor"],
    areaFormulario: "Insolvencia",
  },
  {
    slug: "administrativo",
    area: "administrativo",
    titulo: "Derecho administrativo",
    keyword: "abogado administrativo",
    h1: "Abogado administrativo en Colombia",
    entrada:
      "Un abogado administrativo demanda actos del Estado, reclama indemnizaciones por daños de entidades públicas y defiende a servidores en procesos disciplinarios.",
    icono: "Landmark",
    situaciones: [
      "Una entidad pública te negó un derecho",
      "Necesitas demandar un acto administrativo",
      "Te sancionaron disciplinariamente",
      "El Estado te causó un daño",
      "Problemas en un contrato estatal",
      "No te responden un derecho de petición",
    ],
    subareas: [
      { titulo: "Nulidad y restablecimiento", slug: "nulidad-y-restablecimiento" },
      { titulo: "Reparación directa", slug: "reparacion-directa" },
      { titulo: "Contratación estatal", slug: "contratacion-estatal" },
      { titulo: "Derecho disciplinario", slug: "derecho-disciplinario" },
      { titulo: "Derecho de petición", slug: "derecho-de-peticion" },
    ],
    normas: [
      {
        articulo: "Art. 138 CPACA",
        norma: "Ley 1437 de 2011",
        texto:
          "Toda persona que se crea lesionada en un derecho por un acto administrativo podrá pedir su nulidad y el restablecimiento del derecho.",
      },
      {
        articulo: "Art. 90 C.P.",
        norma: "Constitución Política",
        texto: "El Estado responde patrimonialmente por los daños antijurídicos que le sean imputables.",
      },
    ],
    plazo: {
      titulo: "Caducidad: 4 meses",
      texto:
        "La nulidad y restablecimiento caduca a los 4 meses desde la notificación del acto; la reparación directa, a los 2 años del hecho.",
    },
    guias: [
      { titulo: "Cómo redactar un derecho de petición", slug: "derecho-de-peticion-guia" },
      { titulo: "Cuándo demandar un acto administrativo", slug: "demandar-acto-administrativo" },
      { titulo: "Reparación directa: requisitos", slug: "reparacion-directa-requisitos" },
    ],
    herramienta: {
      titulo: "Generador de derecho de petición",
      descripcion: "Redacta tu petición con los requisitos legales y los plazos de respuesta.",
      slug: "generador-derecho-peticion",
    },
    relacionados: ["salud", "penal"],
    areaFormulario: "Administrativo",
  },
  {
    slug: "transito",
    area: "de tránsito",
    titulo: "Accidentes y tránsito",
    keyword: "abogado de accidentes de tránsito",
    h1: "Abogado de accidentes de tránsito en Colombia",
    entrada:
      "Un abogado de accidentes de tránsito reclama la indemnización por lesiones o daños, responde comparendos y te representa en la audiencia.",
    icono: "Car",
    situaciones: [
      "Te chocaron y no te quieren pagar",
      "Sufriste lesiones en un accidente",
      "Te pusieron un comparendo injusto",
      "La aseguradora te ofrece muy poco",
      "Hubo un accidente con víctimas",
      "Necesitas cobrar el SOAT",
    ],
    subareas: [
      { titulo: "Indemnización por accidente", slug: "indemnizacion-por-accidente" },
      { titulo: "Comparendos", slug: "comparendos" },
      { titulo: "Reclamación SOAT", slug: "reclamacion-soat" },
      { titulo: "Lesiones personales en accidente", slug: "lesiones-personales" },
      { titulo: "Daños al vehículo", slug: "danos-al-vehiculo" },
    ],
    normas: [
      {
        articulo: "Art. 2341 C.C.",
        norma: "Código Civil",
        texto:
          "El que ha cometido un delito o culpa que ha inferido daño a otro, es obligado a la indemnización.",
      },
      {
        articulo: "Art. 136 Ley 769 de 2002",
        norma: "Código Nacional de Tránsito",
        texto: "Regula el procedimiento y los descuentos para el pago de comparendos.",
      },
    ],
    plazo: {
      titulo: "Prescripción: 2 años",
      texto:
        "La reclamación al asegurador prescribe en 2 años; la responsabilidad civil extracontractual, en 10 años (o 5 si es contractual).",
    },
    guias: [
      { titulo: "Qué hacer justo después de un choque", slug: "que-hacer-tras-un-choque" },
      { titulo: "Cómo impugnar un comparendo", slug: "impugnar-comparendo" },
      { titulo: "Cómo cobrar el SOAT", slug: "cobrar-soat" },
    ],
    relacionados: ["civil", "penal"],
    areaFormulario: "Tránsito",
  },
  {
    slug: "migratorio",
    area: "migratorio",
    titulo: "Migratorio y extranjería",
    keyword: "abogado migratorio",
    h1: "Abogado migratorio en Colombia",
    entrada:
      "Un abogado migratorio tramita visas, cédula de extranjería, nacionalización y defiende ante sanciones o deportación de Migración Colombia.",
    icono: "Plane",
    situaciones: [
      "Necesitas una visa de trabajo o de matrimonio",
      "Te negaron la visa",
      "Debes sacar cédula de extranjería",
      "Quieres nacionalizarte colombiano",
      "Te sancionó Migración Colombia",
      "Necesitas regularizar tu situación",
    ],
    subareas: [
      { titulo: "Visas", slug: "visas" },
      { titulo: "Cédula de extranjería", slug: "cedula-de-extranjeria" },
      { titulo: "Nacionalización", slug: "nacionalizacion" },
      { titulo: "Sanciones migratorias", slug: "sanciones-migratorias" },
      { titulo: "Permisos de permanencia", slug: "permisos-de-permanencia" },
    ],
    normas: [
      {
        articulo: "Resolución 5477 de 2022",
        norma: "Ministerio de Relaciones Exteriores",
        texto: "Establece las categorías, requisitos y trámite de las visas colombianas.",
      },
      {
        articulo: "Decreto 1067 de 2015",
        norma: "Decreto Único del Sector Relaciones Exteriores",
        texto: "Regula el ingreso, permanencia y salida de extranjeros del territorio nacional.",
      },
    ],
    plazo: {
      titulo: "Cédula: 15 días hábiles",
      texto:
        "Tras la aprobación de la visa tienes 15 días hábiles para registrarla y tramitar la cédula de extranjería. Incumplir genera multa.",
    },
    guias: [
      { titulo: "Tipos de visa en Colombia", slug: "tipos-de-visa" },
      { titulo: "Cómo sacar la cédula de extranjería", slug: "cedula-extranjeria-pasos" },
      { titulo: "Requisitos para la nacionalización", slug: "requisitos-nacionalizacion" },
    ],
    relacionados: ["administrativo", "laboral"],
    areaFormulario: "Migratorio",
  },
];

export const PILARES: Pilar[] = SEMILLAS.map((s) => {
  const extra = CONTENIDO[s.slug];
  return {
    ...s,
    subareas: s.subareas.map((sub) => ({
      ...sub,
      texto: sub.texto ?? extra?.subareas?.[sub.slug],
    })),
    secciones: s.secciones ?? extra?.secciones,
    solo: s.solo ?? soloBase(s.area),
    abogado: s.abogado ?? abogadoBase(s.area),
    faqs: s.faqs ?? faqsBase(s.titulo, s.area),
  };
});


export const PILARES_POR_SLUG: Record<string, Pilar> = Object.fromEntries(
  PILARES.map((p) => [p.slug, p]),
);

export function pilarPorSlug(slug: string): Pilar | undefined {
  return PILARES_POR_SLUG[slug];
}

const SUFIJO = " | Asesorías Jurídicas";
/** Añade el sufijo solo si el title final no supera 60 caracteres. */
export function tituloSeo(base: string): string {
  return base.length + SUFIJO.length <= 60 ? base + SUFIJO : base;
}

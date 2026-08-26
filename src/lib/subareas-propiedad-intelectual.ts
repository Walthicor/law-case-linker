import type { ContenidoSubarea } from "./subareas";

/**
 * Contenido real de las subáreas del silo PROPIEDAD INTELECTUAL.
 * Norma base: Decisión Andina 486 de 2000 · Ley 23 de 1982 · Ley 1915 de 2018.
 * // VERIFICAR CON ABOGADO todos los plazos.
 */

// VERIFICAR CON ABOGADO
const PLAZO_OPOSICION = {
  titulo: "Oposición: 30 días hábiles",
  texto:
    "Publicada la solicitud en la Gaceta de la Propiedad Industrial, cualquier tercero con interés legítimo tiene 30 días hábiles para presentar oposición, y el solicitante 30 días hábiles para contestarla (Decisión 486 de 2000, arts. 146 y 148). El registro de marca dura 10 años renovables y debe renovarse dentro de los 6 meses anteriores al vencimiento, con 6 meses de gracia. La acción por infracción marcaria prescribe a los 2 años desde que el titular conoció la infracción y a los 5 años desde la última vez que se cometió.",
};

export const SUBAREAS_PROPIEDAD_INTELECTUAL: Record<string, ContenidoSubarea> = {
  "propiedad-intelectual/marcas": {
    h1: "Registro de marca ante la SIC",
    title: "Registro de marca ante la SIC",
    description: "Clases de Niza, búsqueda de antecedentes, oposiciones y qué hacer si te niegan el registro.",
    respuesta:
      "En Colombia el derecho exclusivo sobre una marca nace del registro ante la Superintendencia de Industria y Comercio, no del uso ni de la matrícula mercantil (art. 154 de la Decisión Andina 486 de 2000). Tener el nombre en la cámara de comercio, el dominio de internet y las redes sociales no impide que otro registre el signo y luego exija el cese de su uso. El trámite consiste en radicar la solicitud indicando el signo, el titular y las clases de la Clasificación Internacional de Niza que cubren los productos o servicios; publicada en la Gaceta de la Propiedad Industrial, corren 30 días hábiles para oposiciones y, sin ellas, el registro suele concederse en pocos meses por 10 años renovables indefinidamente.",
    parrafos: [
      "La elección de las clases determina el alcance de la protección. Niza divide productos y servicios en 45 clases, y el registro solo protege lo efectivamente cubierto: una marca registrada para servicios de restaurante no impide que un tercero la use en prendas de vestir, salvo que se trate de una marca notoria. Registrar de menos deja huecos; registrar de más encarece el trámite y expone la marca a la acción de cancelación por no uso.",
      "La búsqueda de antecedentes es el paso que evita perder la tasa. Antes de radicar debe consultarse la base de datos de la SIC en las clases de interés y en las clases conexas, evaluando no solo identidades sino semejanzas ortográficas, fonéticas y conceptuales, porque el examen de registrabilidad compara el riesgo de confusión y de asociación, no la coincidencia literal.",
      "Las causales de irregistrabilidad más frecuentes son la semejanza con marcas anteriores, el carácter descriptivo o genérico del signo respecto de los productos que distingue, la falta de distintividad, el engaño sobre el origen o la calidad, y la afectación de derechos de terceros como nombres comerciales, denominaciones de origen o derechos de autor. Nombres que describen el producto —«Pan Fresco» para panadería— rara vez se conceden en su forma nominativa simple.",
      "Existen tres modalidades de presentación. La marca nominativa protege el nombre en cualquier tipografía y es la más fuerte; la figurativa protege el diseño; la mixta protege la combinación de nombre y diseño tal como se presenta, y por eso protege menos el nombre en abstracto. Para un negocio que apenas empieza, registrar la nominativa suele ser la decisión con mejor relación costo-beneficio.",
      "Presentada una oposición, hay 30 días hábiles para contestarla. Las estrategias que funcionan son acreditar la coexistencia pacífica previa, demostrar diferencias suficientes en los signos o en los productos, limitar la lista de productos o servicios para evitar el traslape, o negociar un acuerdo de coexistencia con el opositor, que la autoridad valora aunque no la vincula automáticamente.",
      "Concedido el registro, el titular puede impedir que terceros usen signos idénticos o similares en productos idénticos o relacionados, perseguir la infracción por vía jurisdiccional ante la SIC, solicitar medidas cautelares de cese y decomiso, reclamar indemnización, oponerse a solicitudes posteriores y actuar frente a importaciones que infrinjan sus derechos.",
      "La marca también impone deberes. Debe usarse de manera real y efectiva en el mercado: si no se usa durante tres años consecutivos en al menos uno de los países de la Comunidad Andina, cualquier interesado puede pedir su cancelación por no uso. Y debe renovarse dentro de los seis meses anteriores al vencimiento del decenio, con seis meses adicionales de gracia; vencido ese plazo, el registro se extingue y el signo queda disponible.",
      "La marca es además un activo transferible: puede licenciarse, cederse, aportarse a una sociedad, darse en garantía mobiliaria bajo la Ley 1676 de 2013 y valorarse en una operación de venta del negocio o de franquicia. Para que esos actos sean oponibles a terceros deben inscribirse ante la SIC, requisito que se olvida con frecuencia en contratos de franquicia y de cesión.",
    ],
    norma: {
      articulo: "Art. 154 Decisión 486 de 2000",
      norma: "Régimen Común de Propiedad Industrial (CAN) · Ley 1915 de 2018",
      texto:
        "El derecho al uso exclusivo de una marca se adquirirá por el registro de la misma ante la respectiva oficina nacional competente. El registro tendrá una duración de diez años contados desde la fecha de su concesión y podrá renovarse por períodos sucesivos de diez años.",
    },
    plazo: PLAZO_OPOSICION,
    reclamar: {
      titulo: "Qué te da el registro",
      parrafos: [
        "El registro concede un derecho exclusivo oponible a todos en las clases cubiertas, con herramientas jurisdiccionales reales: cese de uso, medidas cautelares, decomiso e indemnización.",
        "También convierte la marca en un activo con valor propio: licenciable, cedible y susceptible de garantía mobiliaria.",
      ],
      lista: [
        "Uso exclusivo por 10 años renovables",
        "Acción por infracción ante la SIC con funciones jurisdiccionales",
        "Medidas cautelares de cese y decomiso",
        "Oposición a solicitudes posteriores de terceros",
        "Licencia, cesión y garantía mobiliaria",
        "Control frente a importaciones infractoras",
      ],
    },
    pasos: [
      { titulo: "Haz la búsqueda de antecedentes", texto: "En las clases de interés y las conexas, evaluando semejanza ortográfica, fonética y conceptual, no solo identidad." },
      { titulo: "Define clases y modalidad", texto: "Nominativa, figurativa o mixta. Registrar de más encarece y expone a cancelación por no uso; de menos, deja huecos." },
      { titulo: "Radica y vigila la Gaceta", texto: "Publicada la solicitud corren 30 días hábiles de oposición; si te oponen, tienes 30 días hábiles para contestar." },
      { titulo: "Usa y renueva", texto: "El no uso por 3 años habilita la cancelación. Renueva dentro de los 6 meses previos al vencimiento." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos viabilidad, clases y riesgos, y te conectamos con un abogado de marcas verificado." },
    ],
    faqs: [
      { pregunta: "¿La cámara de comercio protege mi nombre?", respuesta: "No. La matrícula mercantil no otorga derecho exclusivo sobre el signo. Solo el registro ante la SIC concede el uso exclusivo frente a terceros." },
      { pregunta: "¿Cuánto dura el trámite de registro de marca?", respuesta: "Sin oposiciones suele resolverse en pocos meses desde la radicación; con oposición el trámite se extiende por el traslado de 30 días hábiles y el debate probatorio." },
      { pregunta: "¿Qué pasa si presentan oposición a mi marca?", respuesta: "Tienes 30 días hábiles para contestar. Puedes acreditar diferencias, limitar productos o servicios, probar coexistencia pacífica o negociar un acuerdo con el opositor." },
      { pregunta: "¿Puedo perder mi marca si no la uso?", respuesta: "Sí. Si no se usa de manera real y efectiva durante tres años consecutivos, cualquier interesado puede solicitar su cancelación por no uso." },
      { pregunta: "¿Cuándo debo renovar el registro?", respuesta: "Dentro de los seis meses anteriores al vencimiento de los diez años, con un plazo de gracia de seis meses posteriores. Vencido, el registro se extingue." },
    ],
  },

  "propiedad-intelectual/patentes": {
    h1: "Registro de patente en Colombia",
    title: "Registro de patente en Colombia",
    description: "Novedad, nivel inventivo, plazos de protección y diferencia entre patente, modelo de utilidad y diseño.",
    respuesta:
      "Una patente de invención se concede en Colombia ante la Superintendencia de Industria y Comercio cuando la creación cumple tres requisitos: novedad —no estar comprendida en el estado de la técnica en ninguna parte del mundo—, nivel inventivo —no resultar obvia para un experto en la materia— y aplicación industrial (art. 14 de la Decisión Andina 486 de 2000). La protección dura 20 años improrrogables desde la fecha de presentación de la solicitud. El modelo de utilidad protege mejoras funcionales de menor altura inventiva por 10 años, y el diseño industrial protege la apariencia estética de un producto por 10 años. Divulgar la invención antes de radicar destruye la novedad, por eso la asesoría debe llegar antes del lanzamiento, no después.",
    parrafos: [
      "El estado de la técnica comprende todo lo que se ha hecho accesible al público en cualquier lugar del mundo, por cualquier medio, antes de la fecha de presentación: publicaciones, ferias, redes sociales, tesis, catálogos, ventas y demostraciones. La Decisión 486 prevé un plazo de gracia de un año para divulgaciones hechas por el propio inventor o derivadas de un abuso frente a él, pero confiar en esa excepción es riesgoso porque no todos los países la reconocen.",
      "La solicitud se compone de la descripción clara y completa que permita a un experto ejecutar la invención, las reivindicaciones que delimitan el alcance de la protección, los dibujos cuando corresponda y el resumen. Las reivindicaciones son la parte que realmente importa: redactarlas de forma demasiado amplia lleva al rechazo por falta de novedad; redactarlas demasiado estrechas concede una patente fácil de rodear.",
      "El trámite sigue etapas definidas: examen de forma, publicación transcurridos dieciocho meses desde la presentación o desde la prioridad, plazo para oposiciones de terceros, examen de fondo a solicitud del interesado y decisión. Es un procedimiento largo, que suele tomar varios años, durante el cual la solicitud ya genera derechos expectantes y fecha de prioridad oponible.",
      "La prioridad es el mecanismo clave para proteger en varios países: presentada la solicitud en Colombia, el solicitante cuenta con doce meses para radicar en otros países reivindicando la fecha original, sea país por país o mediante el Tratado de Cooperación en materia de Patentes (PCT), que difiere la decisión sobre países mientras se obtiene un informe de búsqueda internacional.",
      "No todo es patentable. Quedan excluidos los descubrimientos, las teorías científicas, los métodos matemáticos, los planes y métodos comerciales, los programas de ordenador como tales, las formas de presentar información, los métodos terapéuticos o quirúrgicos y las plantas y animales. El software se protege normalmente por derecho de autor, y solo puede llegar a patentarse cuando forma parte de una invención con efecto técnico concreto.",
      "El modelo de utilidad es la vía adecuada para mejoras funcionales de productos y herramientas que aportan una ventaja técnica sin alcanzar el nivel inventivo de una patente. Exige novedad y aplicación industrial, se tramita más rápido y protege diez años; para muchas pymes manufactureras es una opción más realista que la patente de invención.",
      "El diseño industrial protege la apariencia: formas, líneas, contornos, configuración, textura o material del producto, sin considerar aspectos técnicos ni funcionales. Es especialmente útil en mobiliario, empaques, calzado, joyería y electrodomésticos, y puede combinarse con marca tridimensional y con derecho de autor sobre el mismo objeto.",
      "La patente concedida otorga el derecho de impedir que terceros fabriquen, ofrezcan, vendan, usen o importen el producto o el procedimiento patentado sin autorización, con acciones jurisdiccionales ante la SIC, medidas cautelares e indemnización. A cambio, impone el pago de tasas anuales de mantenimiento: dejar de pagarlas produce la caducidad de la patente, un descuido que cuesta años de inversión.",
    ],
    norma: {
      articulo: "Art. 14 Decisión 486 de 2000",
      norma: "Régimen Común de Propiedad Industrial (CAN) · Ley 1915 de 2018",
      texto:
        "Los países miembros otorgarán patentes para las invenciones, sean de producto o de procedimiento, en todos los campos de la tecnología, siempre que sean nuevas, tengan nivel inventivo y sean susceptibles de aplicación industrial. La patente tendrá un plazo de duración de veinte años contado a partir de la fecha de presentación de la respectiva solicitud.",
    },
    plazo: PLAZO_OPOSICION,
    reclamar: {
      titulo: "Qué protege cada figura",
      parrafos: [
        "La elección de la figura correcta define el costo, la duración y la probabilidad de concesión. Muchas invenciones rechazadas como patente prosperan como modelo de utilidad o diseño industrial.",
        "En todos los casos, la divulgación previa destruye la novedad: primero se radica, después se muestra.",
      ],
      lista: [
        "Patente de invención: 20 años, exige nivel inventivo",
        "Modelo de utilidad: 10 años, mejoras funcionales",
        "Diseño industrial: 10 años, apariencia del producto",
        "Prioridad de 12 meses para proteger en el exterior",
        "Acciones por infracción y medidas cautelares ante la SIC",
        "Tasas anuales de mantenimiento so pena de caducidad",
      ],
    },
    pasos: [
      { titulo: "No divulgues antes de radicar", texto: "Ferias, redes, catálogos y demostraciones destruyen la novedad. Usa acuerdos de confidencialidad mientras tanto." },
      { titulo: "Haz búsqueda del estado de la técnica", texto: "En bases nacionales e internacionales, para saber si vale la pena invertir en el trámite." },
      { titulo: "Redacta bien las reivindicaciones", texto: "Definen el alcance real de la protección: demasiado amplias se rechazan, demasiado estrechas se rodean." },
      { titulo: "Planea la protección internacional", texto: "Tienes 12 meses de prioridad para radicar en otros países o entrar al PCT." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos si conviene patente, modelo de utilidad o diseño, y te conectamos con un abogado verificado." },
    ],
    faqs: [
      { pregunta: "¿Cuánto dura una patente en Colombia?", respuesta: "Veinte años improrrogables desde la fecha de presentación de la solicitud, sujeta al pago de las tasas anuales de mantenimiento." },
      { pregunta: "¿Puedo patentar si ya mostré el producto?", respuesta: "La divulgación previa destruye la novedad. Existe un plazo de gracia de un año para divulgaciones del propio inventor, pero no todos los países lo reconocen." },
      { pregunta: "¿El software se puede patentar?", respuesta: "Los programas de ordenador como tales están excluidos. El software se protege por derecho de autor y solo puede patentarse cuando integra una invención con efecto técnico concreto." },
      { pregunta: "¿Qué diferencia hay entre patente y modelo de utilidad?", respuesta: "El modelo de utilidad protege mejoras funcionales con menor exigencia de nivel inventivo, dura diez años y se tramita más rápido que la patente de invención." },
      { pregunta: "¿Cómo protejo mi invención en otros países?", respuesta: "Con la prioridad de doce meses desde la solicitud colombiana, radicando país por país o mediante el PCT, que permite diferir la elección de países." },
    ],
  },

  "propiedad-intelectual/derechos-de-autor": {
    h1: "Registro de derechos de autor en Colombia",
    title: "Registro de derechos de autor en Colombia",
    description: "Qué protege, cómo se registra ante la DNDA y por qué el contrato de cesión importa más que el registro.",
    respuesta:
      "En Colombia el derecho de autor protege las obras literarias, artísticas, musicales, audiovisuales y el software desde el momento mismo de su creación, sin necesidad de registro ni de formalidad alguna (Ley 23 de 1982 y Decisión Andina 351 de 1993). El registro ante la Dirección Nacional de Derecho de Autor es voluntario y cumple una función probatoria: da fecha cierta y publicidad a la titularidad, lo que resulta decisivo en un litigio. Lo que realmente define quién es dueño de una obra encargada no es el registro sino el contrato: sin cesión escrita de derechos patrimoniales, quien paga por un desarrollo, un diseño o un texto no necesariamente queda como titular.",
    parrafos: [
      "El derecho de autor se divide en dos dimensiones. Los derechos morales son perpetuos, inalienables e irrenunciables: paternidad, integridad, inédito, modificación y retracto; siempre pertenecen al autor persona natural, aunque haya cedido todo lo demás. Los derechos patrimoniales —reproducción, comunicación pública, distribución, transformación— sí son transferibles y son los que se negocian en la práctica comercial.",
      "La cesión de derechos patrimoniales debe constar por escrito y, para ser oponible a terceros, inscribirse en el registro de la DNDA. Debe precisar las modalidades de explotación cedidas, el territorio, el plazo y la remuneración; la Ley 1915 de 2018 estableció que la cesión se entiende limitada a las modalidades expresamente previstas, de modo que las cláusulas genéricas de «cesión total» no cubren usos no contemplados.",
      "En el caso del software, la regla es especialmente relevante. Cuando un desarrollador independiente crea un sistema por encargo, los derechos patrimoniales no pasan automáticamente al cliente por el solo hecho del pago: hace falta cesión escrita. La obra creada por un empleado dentro de sus funciones, en cambio, se presume transferida al empleador en los términos legales, aunque conviene dejarlo expreso en el contrato de trabajo.",
      "El registro ante la DNDA es gratuito o de bajo costo y se tramita en línea. Se registran obras literarias inéditas y editadas, obras artísticas, software con su código fuente parcial en sobre cerrado, fonogramas, contratos de cesión y actos vinculados al derecho de autor. En un litigio por copia, la fecha cierta que otorga el registro suele ser la diferencia entre probar la autoría y quedarse con afirmaciones.",
      "La protección se extiende durante toda la vida del autor y ochenta años después de su muerte para personas naturales, y setenta años desde la publicación cuando la titularidad es de una persona jurídica, conforme a la Ley 1915 de 2018. Vencido ese término la obra pasa al dominio público y puede usarse libremente respetando siempre los derechos morales de paternidad e integridad.",
      "Las limitaciones y excepciones permiten ciertos usos sin autorización: cita con indicación de fuente y autor, uso para fines educativos en las condiciones legales, reproducción para personas con discapacidad, parodia, copia privada en los términos previstos e informaciones de actualidad. Colombia no tiene una cláusula general de «uso justo» como el derecho estadounidense, de modo que el uso debe encajar en una excepción concreta.",
      "Frente a la infracción hay tres vías. La civil, para reclamar el cese del uso, la indemnización de perjuicios y la retribución de los beneficios obtenidos por el infractor; la jurisdiccional ante la DNDA, que conoce de conflictos de derecho de autor con procedimientos más ágiles; y la penal, porque los artículos 270 a 272 del Código Penal tipifican la violación de derechos morales y patrimoniales de autor. En internet, además, funcionan los mecanismos de retiro de contenido de las plataformas.",
      "Un punto práctico que evita la mayoría de los conflictos: documentar el proceso creativo. Versiones fechadas, correos, repositorios con historial, bocetos y archivos originales con metadatos constituyen prueba de autoría y de anterioridad. Junto con el registro y un contrato bien redactado, esa documentación es lo que convierte un derecho que existe desde la creación en un derecho efectivamente defendible.",
    ],
    norma: {
      articulo: "Art. 4 Ley 23 de 1982",
      norma: "Decisión Andina 351 de 1993 · Ley 1915 de 2018",
      texto:
        "La protección que esta ley otorga al autor tiene como título originario la creación intelectual, sin que se requiera registro alguno. Las formalidades que en ella se establecen son para la mayor seguridad jurídica de los titulares de los derechos que se protegen.",
    },
    plazo: PLAZO_OPOSICION,
    reclamar: {
      titulo: "Qué puedes exigir si copian tu obra",
      parrafos: [
        "El titular puede exigir el cese inmediato del uso, el retiro del material, la indemnización de perjuicios y la entrega de los beneficios que el infractor obtuvo con la explotación no autorizada.",
        "Los derechos morales se defienden siempre, incluso cuando los patrimoniales fueron cedidos: nadie puede publicar la obra sin reconocer al autor ni mutilarla.",
      ],
      lista: [
        "Cese del uso y retiro del contenido",
        "Indemnización de perjuicios patrimoniales",
        "Entrega de beneficios obtenidos por el infractor",
        "Reconocimiento de la paternidad de la obra",
        "Acción jurisdiccional ante la DNDA",
        "Denuncia penal por violación de derechos de autor",
      ],
    },
    pasos: [
      { titulo: "Documenta la creación", texto: "Versiones fechadas, correos, repositorios y archivos originales con metadatos. La prueba de anterioridad se construye desde el primer día." },
      { titulo: "Registra ante la DNDA", texto: "El registro es voluntario, pero otorga fecha cierta y publicidad, y en litigio suele decidir la discusión sobre autoría." },
      { titulo: "Firma la cesión por escrito", texto: "Detalla modalidades, territorio, plazo y remuneración. Sin cesión escrita, pagar por una obra no te hace titular." },
      { titulo: "Actúa rápido ante la copia", texto: "Requerimiento, retiro en plataformas y demanda civil o ante la DNDA. La demora debilita las medidas cautelares." },
      { titulo: "Cuéntanos tu caso", texto: "Revisamos titularidad, contratos y pruebas, y te conectamos con un abogado verificado." },
    ],
    faqs: [
      { pregunta: "¿Necesito registrar mi obra para tener derechos?", respuesta: "No. La protección nace con la creación. El registro ante la DNDA es voluntario y cumple una función probatoria de fecha cierta y publicidad." },
      { pregunta: "¿De quién es el software que mandé a desarrollar?", respuesta: "Del desarrollador, salvo que exista cesión escrita de derechos patrimoniales a tu favor. El pago por el desarrollo no transfiere la titularidad por sí solo." },
      { pregunta: "¿Cuánto dura la protección?", respuesta: "Toda la vida del autor y ochenta años después de su muerte para personas naturales, y setenta años desde la publicación cuando el titular es una persona jurídica." },
      { pregunta: "¿Puedo usar una obra ajena citándola?", respuesta: "La cita es una excepción legal si es breve, pertinente e indica autor y fuente. No existe en Colombia una cláusula general de uso justo: el uso debe encajar en una excepción concreta." },
      { pregunta: "¿Qué hago si copian mi contenido en internet?", respuesta: "Documenta la copia con capturas fechadas, requiere el cese, solicita el retiro ante la plataforma y, si persiste, demanda ante la jurisdicción civil o ante la DNDA." },
    ],
  },
};

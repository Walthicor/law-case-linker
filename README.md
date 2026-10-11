# Abogados Colombia

te comparto este proyecto para que revises lo que haremos " ASESORÍAS JURÍDICAS COLOMBIA
# GUÍA ÚNICA DE CONSTRUCCIÓN

**MARDIGITAL SAS · Agosto 2026**

Este documento reemplaza todos los anteriores. Bórralos.

---

## ÍNDICE

**I.** Qué es y propuesta de valor
**II.** Arquitectura del sitio
**III.** Sistema de diseño y efectos
**IV.** Contenido: 13 áreas, 5 herramientas, 33 guías
**V.** Formulario, calificación y entrega por correo
**VI.** SEO: keyword por página, títulos, schema, interlinking
**VII.** Los 24 prompts de Lovable
**VIII.** Checklist final
**IX.** Operaciones financieras: sentencias y factoring

---

# PARTE I — QUÉ ES Y PROPUESTA DE VALOR

## 1.1 — Qué hace la plataforma

Capta personas con necesidades jurídicas por búsqueda orgánica y pauta, perfila el caso con un formulario, lo califica y **lo entrega por correo automático a tu bandeja**. La clasificación y la asignación al abogado las hace tu equipo por fuera de la plataforma.

El sitio cubre captación y perfilamiento. Nada más.

## 1.2 — Las dos promesas

**Para la persona con el problema:**
> Tú no eliges entre 500 abogados. Nosotros leemos tu caso y te conectamos con el que sirve para lo tuyo.

Funciona porque nombra el problema del directorio: cuando alguien busca abogado en Google se enfrenta a cientos de perfiles idénticos sin forma de distinguir cuál sirve. Aquí no le dan más opciones — le dan que alguien decida por él.

**Para el abogado:**
> Casos que llegan ya explicados, en tu área y tu ciudad.

Funciona porque nombra el dolor del abogado independiente: no le faltan contactos, pierde horas en consultas que no eran nada.

**La regla que las mantiene claras:** el home le habla al usuario, `/unete` le habla al abogado. La única mezcla es la sección final del home, después de todo lo demás.

## 1.3 — Barra de confianza (reemplaza las cifras de los mockups)

Las cifras `25.000+ casos`, `4.8/5` y `1.500+ abogados` no se replican: la plataforma está lanzando y serían falsas. En su lugar:

| Escudo | Tarjeta profesional verificada | Confirmamos cada registro ante el Consejo Superior de la Judicatura |
| Reloj | Respuesta en 24 horas hábiles | Un abogado te contacta directamente |
| Candado | Tu caso es confidencial | Solo lo ve el abogado que se te asigna |
| Balanza | Sin costo para ti | Los honorarios los pactas directamente con tu abogado |

## 1.4 — Qué hacemos y qué no hacemos

| Lo que hacemos | Lo que no hacemos |
|---|---|
| Leemos tu caso y lo clasificamos por área y urgencia | No damos asesoría jurídica ni opinamos sobre tu caso |
| Te conectamos con un especialista en esa área, en tu ciudad | No somos un bufete ni representamos a nadie |
| Verificamos que su tarjeta profesional esté vigente | No te cobramos nada |
| Hacemos seguimiento a que te contacte a tiempo | No intervenimos en el acuerdo entre tú y tu abogado |

La columna derecha es la que convierte: responde las objeciones que el usuario no verbaliza. Y es el blindaje legal del sitio.

---

# PARTE II — ARQUITECTURA

## 2.1 — Estructura silo

Cada área del derecho es un silo cerrado de cuatro niveles: **pilar → subáreas → herramienta → guías**. Los enlaces circulan dentro del silo. El único cruce permitido es **pilar → pilar**, máximo dos por página.

Una guía de laboral nunca enlaza a una de familia. Eso es lo que concentra autoridad y hace que Google lea el sitio como especialista en cada área.

## 2.2 — Los 13 silos

| Silo | Subáreas |
|---|---|
| **Laboral** | despido-sin-justa-causa · liquidacion · acoso-laboral · reintegro · incapacidades · derecho-colectivo |
| **Riesgos laborales** | accidente-de-trabajo · enfermedad-laboral · perdida-de-capacidad-laboral · calificacion-de-origen · junta-de-calificacion |
| **Familia** | divorcio · custodia · alimentos · sucesiones · violencia-intrafamiliar |
| **Civil** | arrendamientos · proceso-ejecutivo · incumplimiento-de-contrato · responsabilidad-civil · obligaciones |
| **Administrativo** | tutela · derecho-de-peticion · nulidad-y-restablecimiento · responsabilidad-del-estado · contratacion-estatal · funcion-publica · derecho-disciplinario · sanciones-administrativas |
| **Penal** | defensa-penal · denuncias · libertades · delitos-querellables |
| **Comercial** | sociedades · conflictos-entre-socios · contratos-comerciales · cobro-de-cartera |
| **Inmobiliario** | compraventa · escrituracion · propiedad-horizontal · linderos |
| **Pensiones** | vejez · invalidez · sobrevivientes · reliquidacion |
| **Tránsito** | comparendos · accidentes · indemnizaciones |
| **Insolvencia** | persona-natural · negociacion-de-deudas |
| **Migratorio** | visas · cedula-de-extranjeria · nacionalizacion |
| **Propiedad intelectual** | marcas · patentes · derechos-de-autor |

## 2.3 — URLs

```
/                                     Home
/iniciar-caso                         Formulario 3 pasos
/gracias                              Confirmación

/areas                                Índice
/areas/{silo}                         Pilar ×13
/areas/{silo}/{subarea}               Subárea ×60

/herramientas
/herramientas/calculadora-liquidacion-laboral
/herramientas/derecho-de-peticion
/herramientas/accion-de-tutela
/herramientas/calculadora-cuota-alimentaria
/herramientas/contrato-de-arrendamiento

/guias
/guias/{slug}                         ×33

/abogados
/abogados/{slug}
/unete

/cobertura
/como-funciona
/contacto
/terminos-y-condiciones
/politica-de-privacidad
/politica-de-tratamiento-de-datos
/politica-de-cookies
```

**Total: ~130 páginas.**

Reglas: minúsculas, guiones, sin tildes ni ñ. Sin barra final. Sin fechas en las URLs de guías. Sin `www`, redirección 301. HTTPS forzado. Canonical autorreferencial en todas.

## 2.4 — Las ciudades

La ciudad es un atributo, no una página. **No se crean páginas por ciudad.**

| Región | Ciudades |
|---|---|
| Centro | Bogotá, Tunja, Ibagué, Villavicencio, Neiva |
| Antioquia | Medellín |
| Eje Cafetero | Pereira, Manizales, Armenia |
| Valle y sur | Cali, Popayán, Pasto |
| Caribe | Barranquilla, Cartagena, Santa Marta, Valledupar, Montería |
| Santanderes | Bucaramanga, Cúcuta |

**Dónde aparecen:** schema `areaServed` en el `Organization` global y en cada pilar · franja de pastillas en el home (etiquetas, no enlaces) · la página `/cobertura` · el campo del formulario con autocompletado DANE completo · una mención contextual en el cuerpo de cada pilar · filtro del directorio con `noindex`.

**Prohibido:** páginas por ciudad o ciudad × área · las 19 enlazadas en el footer · fichas de Google Business Profile por ciudad (no hay oficinas físicas, Google suspende el perfil) · direcciones por ciudad.

---

# PARTE III — DISEÑO Y EFECTOS

## 3.1 — Dirección

Concepto **"el expediente"**: papel bond, tinta, sellos, radicados. Moderno, ejecutivo, limpio.

Nada de azul marino con dorado, fotos de stock de abogados, balanzas doradas, martillos de juez, gradientes decorativos ni sombras flotantes.

## 3.2 — Tokens

```css
--papel:        #FBFAF7;   /* fondo base */
--papel-hueso:  #F2EFE8;   /* superficies elevadas */
--tinta:        #12212B;   /* texto principal */
--tinta-suave:  #5C6B73;   /* texto secundario */
--esmeralda:    #0F5C4A;   /* acento: acción, avance */
--esmeralda-cl: #E3F0EB;
--esmeralda-lum:#4EA88C;   /* acento sobre fondo oscuro */
--sello:        #B4472E;   /* SOLO plazos y urgencia */
--sello-cl:     #FBF3F0;
--linea:        #E0DBD1;
```

El color `sello` tiene un solo trabajo: plazos y caducidad. Nunca decorativo.

## 3.3 — Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display | **Fraunces** 400/600 | H1, H2, cifras grandes |
| Cuerpo | **Public Sans** 400/500/600 | Todo el texto |
| Utilidad | **JetBrains Mono** 500 | Radicados, cifras, artículos de ley, numeración |

```
.display-xl clamp(2.75rem,6vw,4.5rem) Fraunces 600 lh1.05 ls-0.02em
.display-lg clamp(2rem,4vw,3rem)      Fraunces 600 lh1.1  ls-0.015em
.display-md clamp(1.5rem,3vw,2rem)    Fraunces 600 lh1.2
.eyebrow    0.75rem  Public Sans 600 uppercase ls0.12em
.mono-tag   0.9375rem JetBrains Mono 500 ls0.02em
cuerpo      1rem Public Sans 400 lh1.65 · lectura larga máx 680px
```

## 3.4 — Layout

Contenedor 1200px · lectura 680px · escala de 8 · radio **6px** en todo · separación por borde 1px, casi sin sombras.

## 3.5 — Los cuatro efectos firmados

| Efecto | Dónde | Duración |
|---|---|---|
| **Pulso** | 4 botones exactos (ver abajo) | 3,2s en bucle |
| **Anillo** | Botones circulares de WhatsApp | 2,8s en bucle + trazo al hover |
| **Balanza** | El par de botones del hero | 300ms |
| **Sello** | Al enviar el formulario | 600ms |

**El pulso va en exactamente cuatro lugares.** Si aparece en más, quítalo:
1. `Contar mi caso →` del hero
2. `Continuar →` del formulario del hero
3. Botón de conversión bajo el resultado de cada calculadora
4. `Enviar mi caso` del paso 3

**La balanza:** el par de botones cuelga de un travesaño con fulcro triangular. Al pasar el cursor sobre uno, el conjunto se inclina 1,5° y los botones contrarrotan para que el texto quede recto.

**El sello:** la carátula se atenúa, el sello llega rotado −8°, se endereza a −2°, baja a escala 0,96 y rebota. Aparece `RADICADO` en mono con el número completo. Es el único momento maximalista del sitio.

## 3.6 — Efectos de soporte

| Efecto | Especificación |
|---|---|
| Radicado completándose | Un dígito por campo, 200ms |
| Entrada de sección al scroll | opacity 0→1 + translateY 12px→0, 500ms, una vez |
| Tarjetas escalonadas | 60ms entre hermanas |
| Hover de tarjeta | translateY(−2px) + borde esmeralda, 180ms |
| Transición entre pasos | Slide horizontal 280ms |
| Check en `/gracias` | stroke-dasharray, 500ms |
| Resultado de calculadora | fade + slide 300ms con `aria-live` |
| Documento escribiéndose | Previsualización en vivo en los generadores |
| Header al scroll | Transparente sobre el hero → fondo papel, 240ms |
| Barra fija de captación | Entra desde abajo, 240ms |

**Prohibido:** parallax, contadores que suben, partículas, gradientes animados, texto que se escribe solo, carruseles automáticos, librerías de animación externas.

**`prefers-reduced-motion: reduce` desactiva todo.** Solo quedan cambios de opacidad.

## 3.7 — El video del hero

**Qué grabar:** macro de papel con luz desplazándose, tinta escribiendo en plano cenital, o sellos sobre documentos. Movimiento lento — el peso del archivo depende del movimiento, no de la duración.

Nada de abogados, oficinas ni apretones de manos.

```bash
ffmpeg -i original.mov -t 12 -vf "scale=1280:-2,fps=24" \
  -c:v libx264 -crf 32 -preset veryslow -profile:v main \
  -pix_fmt yuv420p -movflags +faststart -an hero.mp4

ffmpeg -i original.mov -t 12 -vf "scale=1280:-2,fps=24" \
  -c:v libvpx-vp9 -crf 40 -b:v 0 -an hero.webm

ffmpeg -i hero.mp4 -vframes 1 -q:v 2 poster.png
cwebp -q 75 poster.png -o hero-poster.webp
```

Si no baja de 1 MB, sube a `crf 36` o recorta a 8 segundos. No bajes de 1280px de ancho.

**Reglas de carga, todas obligatorias:** en móvil no se carga el video, solo el poster · se monta después del evento `load` dentro de `requestIdleCallback` · no se carga con `prefers-reduced-motion` · no se carga con `saveData` o conexión 2G · sin audio.

---

# PARTE IV — CONTENIDO

## 4.1 — Copy de los 13 pilares

Cada uno trae H1, entrada, 6 situaciones, norma y plazo.

> ⚠️ **Los plazos son borradores. Un abogado tiene que verificarlos y firmarlos antes de publicar.**

---

**LABORAL** → `/areas/laboral`

H1: Abogados laborales en Colombia

Entrada: Si te despidieron, no te pagaron lo que te corresponde o estás viviendo una situación difícil en tu trabajo, hay plazos que corren y derechos que la ley te reconoce aunque nadie te los haya explicado.

Situaciones: Te despidieron sin justa causa y no sabes qué te corresponde · No te han pagado la liquidación, la prima o las cesantías · Sufres acoso laboral y no sabes cómo denunciarlo · Te cambiaron las condiciones o el salario sin tu consentimiento · Tu empleador no paga tu seguridad social · Quieres reclamar horas extras, dominicales o recargos

Norma: Código Sustantivo del Trabajo · Código Procesal del Trabajo y de la Seguridad Social

Plazo: Las acciones laborales prescriben en **3 años** desde que la obligación se hizo exigible (CST art. 488).

---

**RIESGOS LABORALES** → `/areas/riesgos-laborales`

H1: Abogados de riesgos laborales en Colombia

Entrada: Cuando un accidente o una enfermedad tienen origen en el trabajo, la ley reconoce prestaciones que la ARL no siempre otorga de entrada. Muchas negativas y muchas calificaciones bajas se revierten cuando alguien las impugna a tiempo.

Situaciones: Sufriste un accidente de trabajo y la ARL no reconoce el origen · Tienes una enfermedad que crees relacionada con tu trabajo · No estás de acuerdo con el porcentaje de pérdida de capacidad laboral · La ARL calificó tu caso como de origen común y crees que es laboral · Necesitas impugnar un dictamen ante la Junta de Calificación · Te negaron la pensión de invalidez de origen laboral

Norma: Ley 1562 de 2012 · Decreto 1072 de 2015 · Decreto 1507 de 2014 · Ley 776 de 2002

Plazo: **10 días hábiles** para manifestar inconformidad con un dictamen ante la Junta Regional, y **10 días hábiles** más para apelar ante la Nacional.

---

**FAMILIA** → `/areas/familia`

H1: Abogados de familia en Colombia

Entrada: Los conflictos familiares se resuelven mejor cuando alguien te explica qué dice la ley antes de que las cosas escalen. Divorcio, custodia, alimentos o herencias: hay caminos más rápidos y baratos de los que crees.

Situaciones: Quieres divorciarte, con o sin acuerdo · Necesitas fijar, aumentar o reducir la cuota alimentaria · Hay desacuerdo sobre la custodia o las visitas · El otro progenitor no cumple con los alimentos · Falleció un familiar y hay que hacer la sucesión · Vives una situación de violencia intrafamiliar

Norma: Código Civil · Ley 1098 de 2006 · Ley 1564 de 2012

Plazo: El derecho a reclamar alimentos no prescribe mientras el hijo sea menor de edad. Las cuotas ya causadas y no pagadas prescriben a los **5 años**.

---

**CIVIL** → `/areas/civil`

H1: Abogados civiles en Colombia

Entrada: Contratos que no se cumplen, deudas que no te pagan, arriendos que se complican, daños que alguien te causó. El derecho civil cubre casi todo lo que sale mal entre particulares.

Situaciones: Te deben dinero y no te pagan · Tu arrendatario no paga o no quiere desocupar · Te arrendaron y quieren sacarte sin causa · Alguien incumplió un contrato que firmaste · Sufriste un daño y quieres que te indemnicen · Necesitas cobrar un pagaré, cheque o letra

Norma: Código Civil · Código General del Proceso · Ley 820 de 2003

Plazo: La acción ejecutiva prescribe en **5 años** y la ordinaria en **10 años** (Código Civil art. 2536, modificado por la Ley 791 de 2002).

---

**ADMINISTRATIVO** → `/areas/administrativo`

H1: Abogados administrativos en Colombia

Entrada: Cuando el problema es con el Estado —una EPS que no autoriza, una entidad que no responde, una sanción injusta, un contrato estatal que se torció, un proceso disciplinario— las reglas son distintas y los plazos son mucho más cortos.

Situaciones: Una entidad no responde tu derecho de petición · Tu EPS niega un tratamiento o cirugía · Te declararon incumplido un contrato estatal o te impusieron una multa · Te abrieron una investigación disciplinaria · Te declararon insubsistente o te desvincularon del cargo · Una entidad pública te causó un daño

Norma: Constitución Política art. 23 y 86 · Ley 1755 de 2015 · Decreto 2591 de 1991 · Ley 1437 de 2011 · Ley 80 de 1993 · Ley 1952 de 2019 · Ley 909 de 2004

Plazo: Los términos aquí son cortos y fatales. Nulidad y restablecimiento caduca a los **4 meses**. Reparación directa, a los **2 años**. Controversias contractuales, a los **2 años**.

---

**PENAL** → `/areas/penal`

H1: Abogados penalistas en Colombia

Entrada: Si te denunciaron, te imputaron o eres víctima de un delito, lo primero que necesitas es entender en qué etapa estás y qué puedes hacer ahora. Las decisiones de los primeros días marcan todo el proceso.

Situaciones: Te citaron a una audiencia y no sabes qué esperar · Te imputaron cargos y necesitas defensa · Fuiste víctima de un delito y quieres denunciar · Buscas una libertad, caución o medida sustitutiva · Quieres llegar a un preacuerdo · Te denunciaron por un delito querellable y quieres conciliar

Norma: Ley 599 de 2000 · Ley 906 de 2004

Plazo: Los delitos querellables tienen **6 meses** de caducidad para la querella.

---

**COMERCIAL** → `/areas/comercial`

H1: Abogados comerciales y societarios en Colombia

Entrada: Conflictos entre socios, contratos que no se cumplen, cartera que no se recupera, sociedades que hay que reorganizar o liquidar. Los problemas de empresa se vuelven caros cuando se dejan crecer.

Situaciones: Tienes un conflicto con tus socios · Un cliente o proveedor incumplió un contrato · Necesitas recuperar cartera vencida · Vas a constituir, transformar o liquidar una sociedad · Quieres revisar o redactar contratos comerciales · Necesitas proteger los activos de tu empresa

Norma: Código de Comercio · Ley 1258 de 2008 · Ley 222 de 1995

Plazo: Las acciones cambiarias de títulos valores prescriben en **3 años** (Código de Comercio art. 789).

---

**INMOBILIARIO** → `/areas/inmobiliario`

H1: Abogados inmobiliarios en Colombia

Entrada: Comprar, vender o administrar un inmueble en Colombia tiene trampas que solo se ven cuando ya es tarde. Un estudio de títulos a tiempo cuesta mucho menos que un pleito de años.

Situaciones: Vas a comprar y quieres verificar que el inmueble esté sano · Hay problemas con la escrituración o el registro · Tienes un conflicto con la administración de tu conjunto · Hay disputa de linderos con un vecino · Te entregaron un inmueble distinto al prometido · Necesitas revisar una promesa de compraventa

Norma: Código Civil · Ley 675 de 2001 · Decreto 1077 de 2015

Plazo: La acción por vicios ocultos prescribe en **1 año** para inmuebles desde la entrega (Código Civil art. 1923).

---

**PENSIONES** → `/areas/pensiones`

H1: Abogados de pensiones en Colombia

Entrada: Negar o reducir una pensión es más común de lo que debería. Muchas negativas se revierten cuando alguien revisa la historia laboral con cuidado.

Situaciones: Te negaron la pensión de vejez, invalidez o sobrevivientes · Tu historia laboral tiene semanas que no aparecen · Crees que tu mesada está mal liquidada · Tuviste un accidente laboral y la ARL no responde · Necesitas cambiar de régimen · Falleció tu familiar pensionado y reclamas la sustitución

Norma: Ley 100 de 1993 · Ley 797 de 2003 · Decreto 1833 de 2016

Plazo: El derecho a la pensión es imprescriptible, pero las mesadas causadas prescriben a los **3 años**.

---

**TRÁNSITO** → `/areas/transito`

H1: Abogados de tránsito en Colombia

Entrada: Un comparendo mal impuesto o un accidente sin asesoría se convierten en deudas y responsabilidades que se arrastran por años.

Situaciones: Te impusieron un comparendo injusto · Tuviste un accidente y hay discusión de responsabilidad · Necesitas reclamar indemnización por lesiones o daños · La aseguradora o el SOAT te niegan el pago · Te suspendieron la licencia · Te embargaron por una multa

Norma: Ley 769 de 2002 · Ley 1383 de 2010

Plazo: **11 días hábiles** para impugnar un comparendo. Las reclamaciones al SOAT prescriben a los **3 años**.

---

**INSOLVENCIA** → `/areas/insolvencia`

H1: Abogados de insolvencia en Colombia

Entrada: Si las deudas superaron tu capacidad de pago, la ley colombiana tiene un procedimiento que te permite negociar con todos tus acreedores a la vez y frenar los cobros y embargos.

Situaciones: Tienes deudas que no puedes pagar y te están embargando · Quieres negociar con todos tus acreedores al tiempo · Te llaman de cobranzas todos los días · Necesitas saber si calificas · Ya intentaste negociar sin acuerdo · Quieres proteger tu vivienda de un remate

Norma: Ley 1564 de 2012 Título IV · Ley 1116 de 2006

Requisito: cesación de pagos con dos o más obligaciones en mora superior a **90 días**, y deudas no inferiores al 50% del pasivo total.

---

**MIGRATORIO** → `/areas/migratorio`

H1: Abogados migratorios en Colombia

Entrada: Los trámites migratorios se caen por detalles: un documento sin apostillar, un plazo vencido, una categoría de visa equivocada. Hacerlo bien la primera vez sale más barato.

Situaciones: Necesitas tramitar o renovar una visa · Te negaron una visa y quieres saber por qué · Vas a solicitar la cédula de extranjería · Buscas la nacionalización colombiana · Necesitas un Permiso por Protección Temporal · Tienes una sanción o proceso migratorio

Norma: Decreto 1067 de 2015 · Resolución 5477 de 2022

Plazo: La cédula de extranjería se tramita dentro de los **15 días hábiles** siguientes a la entrada o a la expedición de la visa.

---

**PROPIEDAD INTELECTUAL** → `/areas/propiedad-intelectual`

H1: Abogados de propiedad intelectual en Colombia

Entrada: Si construiste una marca, un producto o una obra, protegerla legalmente es lo que impide que alguien más se quede con lo que hiciste.

Situaciones: Quieres registrar tu marca ante la SIC · Alguien está usando tu marca sin permiso · Te opusieron el registro · Necesitas registrar una patente o diseño industrial · Usaron tu obra sin autorización · Vas a firmar un contrato de licencia o cesión

Norma: Decisión Andina 486 de 2000 · Ley 23 de 1982 · Ley 1915 de 2018

Plazo: **30 días hábiles** para oponerte al registro de una marca desde la publicación en la Gaceta de Propiedad Industrial.

## 4.2 — Las 5 herramientas

**Son el activo SEO principal: ~88.000 búsquedas mensuales.**

| Herramienta | Silo | Volumen combinado |
|---|---|---|
| Generador de derecho de petición | Administrativo | ~39.200 |
| Calculadora de liquidación laboral | Laboral | ~35.500 |
| Generador de acción de tutela | Administrativo | ~9.000 |
| Calculadora de cuota alimentaria | Familia | ~3.400 |
| Generador de contrato de arrendamiento | Civil | ~1.000 |

### Acceso: gratis, sin registro, sin pago

Si pones un muro, el usuario llega, lo ve y se devuelve a Google. Esa señal le dice a Google que la página no sirve y se cae del ranking — pierdes la única razón por la que la página existe.

El correo se pide **una sola vez**, para el PDF, y con escape visible:
> Descargar el cálculo en PDF · `[correo]` `[Descargar]`
> o *[descárgalo sin dejar tu correo]* ← obligatorio

Distintivo en el hero de cada herramienta: pastilla esmeralda-claro con `GRATIS · SIN REGISTRO`.

### Donde está la conversión

El bloque debajo del resultado, contextualizado:
> Tu liquidación es **$8.450.000**. Si te despidieron sin justa causa, además te corresponde una indemnización de **$4.200.000** que las empresas suelen omitir o calcular mal.
> **[ Revisar mi caso con un abogado → ]**

### Fórmulas de liquidación (CST)

```
salarioBase = salarioMensual + (auxilioTransporte ? AUXILIO_2026 : 0)
diasTrabajados = días entre fechas, base 360
cesantias = salarioBase × diasTrabajados / 360
interesesCesantias = cesantias × diasTrabajados × 0.12 / 360
prima = salarioBase × diasEnSemestre / 360
vacaciones = salarioMensual × diasTrabajados / 720 − díasDisfrutados

indemnización (sin justa causa, indefinido):
  salario < 10 SMLMV → 30 días primer año + 20 por año adicional
  salario ≥ 10 SMLMV → 20 días primer año + 15 por año adicional
indemnización (término fijo) = salarios del tiempo faltante
```

Constantes `SMLMV` y `AUXILIO_2026` arriba del archivo, con comentario de actualización cada 1 de enero.

**El dato que más convierte:** la sanción moratoria del art. 65 CST — un día de salario por cada día de retraso.

**Nota legal al pie de cada herramienta:** es una estimación, no constituye asesoría jurídica, el valor puede variar según pactos convencionales o salario variable.

## 4.3 — Las 33 guías

Estructura fija: respuesta directa → qué dice la ley → qué te corresponde → **plazos (bloque sello)** → paso a paso → cuándo necesitas abogado y cuándo no → FAQ con schema → CTA al pilar.

**Cada guía firmada por un abogado con nombre y tarjeta profesional visible.** Sin ese dato, Google no le da autoridad a contenido jurídico (categoría YMYL).

| # | Slug | Silo | Vol | KD |
|---|---|---|---|---|
| 1 | `/guias/derecho-de-peticion-como-hacerlo` | Administrativo | 27.100 | 27 |
| 2 | `/guias/liquidacion-laboral-que-te-corresponde` | Laboral | 22.200 | 34 |
| 3 | `/guias/accion-de-tutela-cuando-procede` | Administrativo | 8.100 | 34 |
| 4 | `/guias/acoso-laboral-que-hacer` | Laboral | 8.100 | 30 |
| 5 | `/guias/accidente-de-trabajo-que-prestaciones` | Riesgos lab. | 5.400 | 28 |
| 6 | `/guias/enfermedad-laboral-como-se-califica` | Riesgos lab. | 3.600 | 19 |
| 7 | `/guias/contratacion-estatal-declaratoria-de-incumplimiento` | Administrativo | 2.900 | 18 |
| 8 | `/guias/cuota-alimentaria-como-se-fija` | Familia | 2.400 | 21 |
| 9 | `/guias/negociacion-colectiva-como-funciona` | Laboral | 2.400 | 30 |
| 10 | `/guias/proceso-ejecutivo-como-cobrar-una-deuda` | Civil | 1.300 | 20 |
| 11 | `/guias/nulidad-y-restablecimiento-del-derecho` | Administrativo | 1.300 | 18 |
| 12 | `/guias/fuero-sindical-que-te-protege` | Laboral | 1.000 | 19 |
| 13 | `/guias/contrato-de-arrendamiento-que-debe-incluir` | Civil | 1.000 | 21 |
| 14 | `/guias/incapacidad-laboral-quien-paga` | Laboral | 1.000 | 27 |
| 15 | `/guias/despido-sin-justa-causa-indemnizacion` | Laboral | 880 | 21 |
| 16 | `/guias/proceso-disciplinario-etapas-y-defensa` | Administrativo | 880 | 21 |
| 17 | `/guias/custodia-de-hijos-como-se-decide` | Familia | 720 | 19 |
| 18 | `/guias/demanda-de-alimentos-paso-a-paso` | Familia | 720 | 14 |
| 19 | `/guias/pension-de-invalidez-requisitos` | Pensiones | 720 | 18 |
| 20 | `/guias/reparacion-directa-demandas-contra-el-estado` | Administrativo | 720 | 19 |
| 21 | `/guias/insubsistencia-cuando-se-puede-controvertir` | Administrativo | 590 | 21 |
| 22 | `/guias/demanda-laboral-como-presentarla` | Laboral | 590 | 17 |
| 23 | `/guias/insolvencia-persona-natural` | Insolvencia | 590 | 23 |
| 24 | `/guias/perdida-de-capacidad-laboral-como-se-calcula` | Riesgos lab. | 480 | 17 |
| 25 | `/guias/proceso-de-sucesion-en-colombia` | Familia | 480 | 19 |
| 26 | `/guias/divorcio-opciones-tiempos-y-costos` | Familia | 390 | 24 |
| 27 | `/guias/incumplimiento-de-contrato-como-demandar` | Civil | 260 | 21 |
| 28 | `/guias/sucesion-notarial-requisitos` | Familia | 210 | 9 |
| 29 | `/guias/como-es-un-proceso-laboral-etapas-y-duracion` | Laboral | — | — |
| 30 | `/guias/como-es-un-proceso-civil-etapas-y-tiempos` | Civil | — | — |
| 31 | `/guias/como-funciona-un-proceso-contencioso-administrativo` | Administrativo | — | — |
| 32 | `/guias/que-pasa-en-una-audiencia-penal` | Penal | — | — |
| 33 | `/guias/conciliacion-cuando-es-obligatoria-antes-de-demandar` | Civil | — | — |

**Ritmo:** 3 por semana son 11 semanas. Decide el ritmo antes de empezar — de eso depende todo el cronograma.

---

# PARTE V — FORMULARIO Y ENTREGA

## 5.1 — El formulario

Tres pasos, **un paso visible a la vez**.

### Paso 1 — Tu situación
1. ¿Con qué tipo de caso necesitas ayuda? `*` — select agrupado:
   - **PERSONAS:** Laboral · Riesgos laborales y ARL · Familia · Pensiones · Tránsito
   - **DINERO Y BIENES:** Civil · Inmobiliario · Insolvencia
   - **EMPRESAS:** Comercial · Propiedad intelectual
   - **ESTADO:** Administrativo · Penal
   - **OTROS:** Migratorio · No estoy seguro
2. ¿En qué ciudad o municipio ocurrió el caso? `*` — autocompletado DANE
3. ¿En qué punto está tu caso? `*` — Apenas necesito asesoría / Voy a iniciar un proceso / Ya tengo un proceso judicial / Quiero apelar / Necesito cambiar de abogado

*"Con esto ya sabemos qué tipo de abogado necesitas."*

### Paso 2 — Los detalles
4. Cuéntanos brevemente qué ocurrió `*` — textarea 40–1000, contador en mono
   *Nota:* "No incluyas datos de salud, origen étnico o información sobre menores si no lo consideras necesario."
5. ¿Qué tan urgente es tu caso? `*` — Hoy mismo / Esta semana / Este mes / Solo orientación
6. ¿Tienes documentos del caso? `*` — Todos / Algunos / Ninguno / No sé cuáles

*"Ya podemos empezar a buscar. Solo faltan tus datos de contacto."*

### Paso 3 — Contacto
7. Nombre completo `*` · 8. Correo `*` · 9. WhatsApp `*` (+57, 10 dígitos, empieza por 3)
10. ¿Valor aproximado en discusión? *(opcional)*
11. ☐ Autorizo el tratamiento de mis datos conforme a la Política de Tratamiento. `*`
12. ☐ Autorizo que mi información sea transmitida al abogado que me sea asignado. `*`

**Dos casillas separadas.** La Ley 1581 de 2012 las exige separadas cuando hay transmisión a terceros identificables.

## 5.2 — Calificación 0–100

```
URGENCIA (30)    hoy 30 · semana 22 · mes 12 · orientación 3
ESTADO (25)      iniciar 25 · judicial 24 · cambiar 22 · apelar 20 · asesoría 8
VALOR (25)       >300M 25 · 50-300M 21 · 10-50M 15 · <10M 8 · no responde 11
DOCUMENTOS (10)  todos 10 · algunos 7 · no sé 4 · ninguno 2
CALIDAD (10)     descripción >150 car +5 · WhatsApp válido +3 · correo real +2
```

| Score | Tier | Para el equipo |
|---|---|---|
| 70–100 | A | Revisar de inmediato |
| 45–69 | B | Revisar el mismo día |
| 20–44 | C | Revisar cuando haya tiempo |
| < 20 | D | Consulta informativa |

## 5.3 — Entrega: sin base de datos

```
Usuario envía el formulario
      ├─→ Función edge calcula el radicado y valida
      ├─→ Correo a tu bandeja
      ├─→ Correo de confirmación al usuario
      └─→ Redirect a /gracias?radicado=XXX
```

Sin Supabase, sin n8n, sin webhooks.

**Nota técnica:** Cloudflare Email Routing recibe correo en tu dominio, pero no lo envía. Para el envío del formulario necesitas un endpoint que dispare el correo. La ruta más simple: una **función edge del propio sitio** que llame a un servicio de envío (Resend es el más simple: una clave API, una llamada `fetch`, sin configuración de SMTP). El dominio y la recepción siguen en Cloudflare.

**Importante:** como no hay base de datos, **el correo es tu único registro.** Por eso incluye la IP y la fecha de la autorización de datos — esa es tu prueba de consentimiento de habeas data si la SIC alguna vez pregunta. No la quites del formato.

## 5.4 — El correo

**Asunto:** `[TIER A · 84] Laboral · Medellín · AJC-2026-04871`

El tier y el puntaje van adelante para que priorices desde la bandeja sin abrir nada.

```
CASO NUEVO — AJC-2026-04871
Recibido: 21 ago 2026, 2:14 p. m.
Puntaje: 84 / 100  ·  Tier A

─── CASO ────────────────────────────
Área              Laboral
Ciudad            Medellín, Antioquia
Estado            Voy a iniciar un proceso
Urgencia          Necesito ayuda hoy mismo
Valor estimado    Entre $10 y $50 millones
Documentos        Tengo algunos

─── DESCRIPCIÓN ─────────────────────
"Trabajé 3 años en una empresa con contrato a término
indefinido. Me despidieron el 15 de julio sin darme
razón y no me han pagado la liquidación..."

─── CONTACTO ────────────────────────
Nombre            María Fernanda Rodríguez
Correo            mf.rodriguez@correo.com
WhatsApp          +57 310 234 5678
                  → Abrir WhatsApp

─── ORIGEN ──────────────────────────
Página            /herramientas/calculadora-liquidacion-laboral
Campaña           google / organic

─── AUTORIZACIÓN DE DATOS ───────────
Tratamiento       Sí · 21 ago 2026, 2:14 p. m.
Transmisión       Sí · 21 ago 2026, 2:14 p. m.
IP                181.xx.xx.xx
```

Texto plano monoespaciado — se lee igual en Gmail, Outlook y celular. El enlace de WhatsApp abre `wa.me` con el número cargado.

---

# PARTE VI — SEO

## 6.1 — Títulos: máximo 60 caracteres

```js
const SUFIJO = " | Asesorías Jurídicas";   // 22 caracteres
title = base.length + 22 <= 60 ? base + SUFIJO : base;
```

| Página | Plantilla | Ejemplo | Car. |
|---|---|---|---|
| Home | `Abogados verificados en toda Colombia` + sufijo | — | 59 |
| Pilar | `Abogados {área} en Colombia` + condicional | Abogados laborales en Colombia \| Asesorías Jurídicas | 53 |
| Pilar largo | sin sufijo | Abogados de propiedad intelectual en Colombia | 45 |
| Subárea | el término exacto | Despido sin justa causa: cuánto te deben pagar | 46 |
| Herramienta | `{Herramienta} 2026 \| Gratis` | Calculadora de liquidación laboral 2026 \| Gratis | 48 |
| Guía | la pregunta que resuelve | Derecho de petición: cómo hacerlo y plazos 2026 | 47 |
| Cobertura | — | Cobertura: abogados en 19 ciudades de Colombia | 46 |
| Perfil | `{Nombre}, abogado de {área} en {ciudad}` | Juan David Alarcón, abogado civil en Medellín | 45 |

## 6.2 — Descripciones: máximo 120 caracteres

| Página | Plantilla | Car. |
|---|---|---|
| Home | `Cuéntanos tu caso y te conectamos con un abogado especialista verificado en tu ciudad. Sin costo para ti.` | 105 |
| Pilar | `¿Buscas abogado de {área} en Colombia? Cuéntanos tu caso y te conectamos con un especialista.` | 94–108 |
| Herramienta | `Calcula cesantías, intereses, prima, vacaciones e indemnización según el Código Sustantivo del Trabajo.` | 102 |
| Cobertura | `Conectamos con abogados verificados en Bogotá, Medellín, Cali y 16 ciudades más del país.` | 89 |

## 6.3 — Keyword por página

**Una página, una keyword.** Si dos persiguen lo mismo, Google no sabe cuál mostrar y baja las dos.

La keyword principal va en **cuatro lugares**: H1, title, primer párrafo (primeras 25 palabras) y URL. Las secundarias en los H2 y el cuerpo, sin forzar. No repitas la frase exacta más de 4 o 5 veces.

`Vol` = búsquedas/mes en Colombia. `KD` = dificultad 0-100. ✓ = medido en Semrush (agosto 2026). `—` = long-tail sin medir: **mídelo antes de escribir la página.**

### Páginas principales

| Página | Keyword | Vol | KD |
|---|---|---|---|
| `/` | abogados | 22.200 ✓ | 44 |
| `/areas` | áreas del derecho | — | — |
| `/herramientas` | herramientas jurídicas gratis | — | — |
| `/guias` | guías legales Colombia | — | — |
| `/abogados` | directorio de abogados Colombia | — | — |
| `/cobertura` | abogados en Colombia por ciudad | — | — |
| `/unete` | red de abogados Colombia | — | — |

El home con KD 44 no se gana el primer año. Recibe autoridad de los silos y llega en el mes 12-18. Quien trae tráfico mientras tanto son las herramientas y las guías.

### Los 13 pilares

| Página | Keyword | Vol | KD |
|---|---|---|---|
| `/areas/laboral` | abogado laboral | 1.600 ✓ | 26 |
| `/areas/riesgos-laborales` | accidente de trabajo | 5.400 ✓ | 28 |
| `/areas/familia` | abogado de familia | 1.900 ✓ | 19 |
| `/areas/civil` | abogado civil | — | — |
| `/areas/administrativo` | derecho administrativo | — | — |
| `/areas/penal` | abogado penal | 1.600 ✓ | 29 |
| `/areas/comercial` | derecho comercial | 1.000 ✓ | 20 |
| `/areas/inmobiliario` | abogado inmobiliario | 590 ✓ | **11** |
| `/areas/pensiones` | abogado de pensiones | — | — |
| `/areas/transito` | abogado de tránsito | 320 ✓ | 19 |
| `/areas/insolvencia` | insolvencia persona natural | 590 ✓ | 23 |
| `/areas/migratorio` | abogado migratorio Colombia | — | — |
| `/areas/propiedad-intelectual` | registro de marca Colombia | — | — |

**Empieza por inmobiliario** (KD 11 y el CPC más alto del sitio), **riesgos laborales** (5.400 búsquedas) y **familia** (KD 19 con 1.900). Son los que dan resultado más rápido.

### Las 60 subáreas

| Página | Keyword | Vol | KD |
|---|---|---|---|
| `laboral/despido-sin-justa-causa` | despido sin justa causa indemnización | 880 ✓ | 21 |
| `laboral/liquidacion` | cuándo me deben pagar la liquidación | — | — |
| `laboral/acoso-laboral` | acoso laboral | 8.100 ✓ | 30 |
| `laboral/reintegro` | reintegro laboral | 260 ✓ | 12 |
| `laboral/incapacidades` | incapacidad laboral | 1.000 ✓ | 27 |
| `laboral/derecho-colectivo` | negociación colectiva | 2.400 ✓ | 30 |
| `riesgos-laborales/accidente-de-trabajo` | accidente de trabajo | 5.400 ✓ | 28 |
| `riesgos-laborales/enfermedad-laboral` | enfermedad laboral | 3.600 ✓ | 19 |
| `riesgos-laborales/perdida-de-capacidad-laboral` | pérdida de capacidad laboral | 480 ✓ | **17** |
| `riesgos-laborales/calificacion-de-origen` | calificación de origen laboral | 30 ✓ | — |
| `riesgos-laborales/junta-de-calificacion` | junta de calificación de invalidez | 480 ✓ | 42 |
| `familia/divorcio` | divorcio express Colombia | 390 ✓ | 24 |
| `familia/custodia` | custodia de hijos | 720 ✓ | 19 |
| `familia/alimentos` | demanda de alimentos | 720 ✓ | **14** |
| `familia/sucesiones` | proceso de sucesión | 480 ✓ | 19 |
| `familia/violencia-intrafamiliar` | violencia intrafamiliar denuncia | — | — |
| `civil/arrendamientos` | restitución de inmueble arrendado | — | — |
| `civil/proceso-ejecutivo` | proceso ejecutivo | 1.300 ✓ | 20 |
| `civil/incumplimiento-de-contrato` | demanda por incumplimiento de contrato | 260 ✓ | 21 |
| `civil/responsabilidad-civil` | responsabilidad civil extracontractual | — | — |
| `civil/obligaciones` | cobro de deudas Colombia | — | — |
| `administrativo/tutela` | cuándo procede la tutela | — | — |
| `administrativo/derecho-de-peticion` | qué hacer si no responden mi derecho de petición | — | — |
| `administrativo/nulidad-y-restablecimiento` | nulidad y restablecimiento del derecho | 1.300 ✓ | **18** |
| `administrativo/responsabilidad-del-estado` | responsabilidad del estado | 210 ✓ | 18 |
| `administrativo/contratacion-estatal` | contratación estatal | **2.900** ✓ | **18** |
| `administrativo/funcion-publica` | carrera administrativa | 880 ✓ | 21 |
| `administrativo/derecho-disciplinario` | proceso disciplinario | 880 ✓ | 21 |
| `administrativo/sanciones-administrativas` | sanción administrativa recurso | — | — |
| `penal/defensa-penal` | abogado defensor penal | — | — |
| `penal/denuncias` | cómo poner una denuncia Colombia | — | — |
| `penal/libertades` | audiencia de control de garantías | — | — |
| `penal/delitos-querellables` | delitos querellables | — | — |
| `comercial/sociedades` | liquidación de sociedad | 140 ✓ | 15 |
| `comercial/conflictos-entre-socios` | conflicto entre socios | 30 ✓ | 10 |
| `comercial/contratos-comerciales` | contrato comercial Colombia | — | — |
| `comercial/cobro-de-cartera` | cobro jurídico de cartera | — | — |
| `inmobiliario/compraventa` | promesa de compraventa | — | — |
| `inmobiliario/escrituracion` | escrituración de inmueble | — | — |
| `inmobiliario/propiedad-horizontal` | abogado propiedad horizontal | 210 ✓ | **9** |
| `inmobiliario/linderos` | deslinde y amojonamiento | — | — |
| `pensiones/vejez` | requisitos pensión de vejez | — | — |
| `pensiones/invalidez` | pensión de invalidez | 720 ✓ | 18 |
| `pensiones/sobrevivientes` | pensión de sobrevivientes | — | — |
| `pensiones/reliquidacion` | reliquidación de pensión | — | — |
| `transito/comparendos` | cómo impugnar un comparendo | — | — |
| `transito/accidentes` | accidente de tránsito indemnización | — | — |
| `transito/indemnizaciones` | reclamación SOAT | — | — |
| `insolvencia/persona-natural` | insolvencia persona natural | 590 ✓ | 23 |
| `insolvencia/negociacion-de-deudas` | negociar deudas con bancos | — | — |
| `migratorio/visas` | visa Colombia requisitos | — | — |
| `migratorio/cedula-de-extranjeria` | cédula de extranjería | — | — |
| `migratorio/nacionalizacion` | nacionalidad colombiana por adopción | — | — |
| `propiedad-intelectual/marcas` | registro de marca SIC | — | — |
| `propiedad-intelectual/patentes` | registro de patente Colombia | — | — |
| `propiedad-intelectual/derechos-de-autor` | registro de derechos de autor | — | — |

### Las 5 herramientas

| Página | Keyword | Vol | KD | Secundarias |
|---|---|---|---|---|
| `/herramientas/derecho-de-peticion` | modelo derecho de petición | **12.100** ✓ | **19** | derecho de petición (27.100 ✓) |
| `/herramientas/calculadora-liquidacion-laboral` | cómo calcular liquidación laboral | **9.900** ✓ | 36 | liquidación laboral (22.200 ✓), calculadora liquidación (2.400 ✓) |
| `/herramientas/accion-de-tutela` | acción de tutela modelo | 590 ✓ | **13** | tutela (8.100 ✓), cómo poner una tutela (320 ✓) |
| `/herramientas/contrato-de-arrendamiento` | contrato de arrendamiento modelo | 1.000 ✓ | 21 | formato contrato arrendamiento |
| `/herramientas/calculadora-cuota-alimentaria` | cuota alimentaria | 2.400 ✓ | 21 | cómo calcular cuota alimentaria |

**Estas cinco páginas son el 60% del tráfico orgánico del proyecto.**

### Las tres canibalizaciones ya resueltas

`tutela` y `derecho de petición` los tenían la subárea y la herramienta. **Gana la herramienta** — quien busca "tutela" quiere hacer una, no leer sobre ella. Las subáreas se movieron a "cuándo procede la tutela" y "qué hacer si no responden". Igual con `liquidación laboral` y `contrato de arrendamiento`.

`responsabilidad del estado` (210) y `reparación directa` (720) van en **una sola página**, con un H2 dedicado a la reparación directa.

## 6.4 — Schema

| Página | Schemas |
|---|---|
| Todas | `Organization` (con `areaServed` de las 19 ciudades) + `WebSite` con `SearchAction` |
| Pilar | `LegalService` + `BreadcrumbList` + `FAQPage` |
| Subárea | `Service` + `BreadcrumbList` + `FAQPage` |
| Herramienta | `WebApplication` + `HowTo` + `FAQPage` + `BreadcrumbList` |
| Guía | `Article` (author, reviewedBy, datePublished, dateModified) + `FAQPage` + `BreadcrumbList` + `Speakable` |
| Perfil | `Person` con `jobTitle: Abogado` |
| Cobertura | `Service` con `areaServed` completo |

**Nunca `AggregateRating`** hasta tener reseñas reales verificables.

## 6.5 — Interlinking

| Desde | Hacia | Cantidad | Cruza silos |
|---|---|---|---|
| Home | 13 pilares · 5 herramientas · /cobertura | 19 | — |
| Pilar | sus subáreas · su herramienta · sus guías | 9–14 | ❌ |
| Pilar | 2 pilares relacionados | 2 | ✅ único caso |
| Subárea | su pilar · 2 guías del silo · su herramienta | 4 | ❌ |
| Herramienta | su pilar · 3 guías del silo · 1 subárea | 5 | ❌ |
| Guía | su pilar · su herramienta · 3 guías del silo · perfil del revisor | 6 | ❌ |
| /gracias | guía + herramienta del silo del caso | 3 | ❌ |

**Ancla:** máximo una exacta por página hacia el mismo destino. El resto descriptivo. Prohibido `clic aquí` / `ver más` como ancla única — si el diseño usa "Ver más →", el título de la tarjeta también es enlace. Mínimo **3 enlaces dentro del cuerpo** de cada guía.

**Higiene:** cero huérfanas (toda página recibe enlaces de al menos 2) · máximo 3 clics desde el home · migas marcadas con `BreadcrumbList` · enlaces salientes a fuentes oficiales sin `nofollow` · nunca `nofollow` interno · el footer solo lleva navegación estructural.

## 6.6 — Técnico

- Canonical absoluto y autorreferencial en todas
- `noindex` en `/gracias`, filtros del directorio y legales salvo la política de tratamiento
- Sitemap índice segmentado
- LCP < 2,0 s móvil (el LCP es el H1, texto puro) · CLS < 0,05 · INP < 200 ms
- Preload de Fraunces 600, `font-display: swap`
- Sin librerías de animación externas: CSS + `IntersectionObserver`
- Contraste AA, focus visible, un solo H1 por página

## 6.7 — Google Ads

**Pautar:** `abogado inmobiliario` (CPC 1,39) · `proceso ejecutivo` (1,28) · `abogado disciplinario` (1,12) · `abogado tributario` (0,97) · `abogados en bogotá` / `medellín` (~0,80) · `abogado penal` (0,82) · `abogado de familia` (0,77).

**No pautar:** `abogado gratis`, `asesoría jurídica gratis` (intención de no pagar) ni términos informacionales como `tutela` o `liquidación laboral` (eso se gana con SEO).

**Negativas día 1:** gratis, gratuito, pro bono, defensoría, defensor público, consultorio jurídico, universidad, estudiante, empleo, vacante, salario abogado, cuánto gana un abogado, carrera de derecho, pdf, descargar, **secop, secop ii, función pública, dafp, sigep, concurso cnsc, convocatoria**.

*(Las últimas seis son trampas: `secop` tiene 301.000 búsquedas y `función pública` 40.500, pero ambas son navegacionales hacia plataformas del Estado, no hacia un abogado.)*

**Configuración:** solo Red de Búsqueda. **Search partners desactivado.** Concordancia de frase. $30.000 COP/día inicial en Bogotá y Medellín.

---

# PARTE VII — LOS 24 PROMPTS DE LOVABLE

## Cómo usarlos

Ejecuta en orden. Revisa el preview después de cada uno. **No juntes tandas** — están divididas porque juntas Lovable las trunca.

| # | Prompt | Tanda |
|---|---|---|
| ☐ 01 | Fundación | — |
| ☐ 02 | Hero con video y formulario | — |
| ☐ 03 | Resto del home | — |
| ☐ 04 | Formulario completo | — |
| ☐ 05 | Confirmación | — |
| ☐ 06 | Índice de áreas y plantilla de pilar | — |
| ☐ 07a–c | Los 13 pilares | 3 tandas |
| ☐ 08 | Plantilla de subárea | — |
| ☐ 09a–e | Las 60 subáreas | 5 tandas |
| ☐ 10 | Calculadora de liquidación | — |
| ☐ 11 | Generadores de documentos | — |
| ☐ 12 | Cuota alimentaria e índice | — |
| ☐ 13 | Guías: índice y plantilla | — |
| ☐ 14 | Guías, de 3 en 3 | 11 tandas |
| ☐ 15 | Cobertura | — |
| ☐ 16 | Directorio y perfiles | — |
| ☐ 17 | Únete | — |
| ☐ 18 | Legales y cookies | — |
| ☐ 19 | Cierre técnico | — |"

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://law-case-linker.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/aa73718c-11eb-4b64-8fb0-6cc53f88d52d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

import { useState } from "react";
import { HojaCarta, HojaParrafo, HojaTitulo, Pendiente } from "./HojaCarta";
import { MarcoGenerador } from "./MarcoGenerador";
import {
  CampoArea,
  CampoMulti,
  CampoSelect,
  CampoSi,
  CampoTexto,
  ListaDinamica,
} from "./campos";

const DERECHOS = [
  "Petición",
  "Salud",
  "Vida digna",
  "Debido proceso",
  "Trabajo",
  "Educación",
  "Seguridad social",
  "Mínimo vital",
  "Igualdad",
  "Habeas data",
  "Otro",
] as const;

const DOCUMENTOS = ["Cédula de ciudadanía", "Cédula de extranjería", "Pasaporte"] as const;

const HOY = new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date());

type Datos = {
  derechos: string[];
  accionada: string;
  nombre: string;
  tipoDoc: string;
  numeroDoc: string;
  direccion: string;
  ciudad: string;
  correo: string;
  telefono: string;
  hechos: string;
  pretensiones: string;
  medidaProvisional: boolean;
  motivoMedida: string;
  otraTutela: boolean;
  anexos: string[];
};

const INICIAL: Datos = {
  derechos: ["Petición"],
  accionada: "",
  nombre: "",
  tipoDoc: "Cédula de ciudadanía",
  numeroDoc: "",
  direccion: "",
  ciudad: "",
  correo: "",
  telefono: "",
  hechos: "",
  pretensiones: "",
  medidaProvisional: false,
  motivoMedida: "",
  otraTutela: false,
  anexos: [],
};

export function GeneradorTutela() {
  const [d, setD] = useState<Datos>(INICIAL);
  const set = <K extends keyof Datos>(k: K, v: Datos[K]) => setD((s) => ({ ...s, [k]: v }));

  const pasos = [
    {
      titulo: "Derechos y accionado",
      contenido: (
        <>
          <CampoMulti
            etiqueta="Derechos fundamentales vulnerados"
            opciones={DERECHOS}
            valores={d.derechos}
            onChange={(v) => set("derechos", v)}
            nota="Puedes marcar varios. Se listan en el escrito y en la petición al juez."
          />
          <CampoTexto
            etiqueta="¿Contra quién presentas la tutela?"
            valor={d.accionada}
            onChange={(v) => set("accionada", v)}
            placeholder="EPS Sanitas / Colpensiones / Alcaldía de Cali"
            nota="Entidad pública, particular que preste un servicio público o particular en posición dominante."
          />
          <CampoTexto
            etiqueta="Ciudad donde ocurrió la vulneración"
            valor={d.ciudad}
            onChange={(v) => set("ciudad", v)}
            placeholder="Cali"
            nota="Determina el juez competente: cualquiera del lugar de los hechos."
          />
        </>
      ),
    },
    {
      titulo: "Tus datos",
      contenido: (
        <>
          <CampoTexto
            etiqueta="Nombre completo"
            valor={d.nombre}
            onChange={(v) => set("nombre", v)}
            placeholder="Juan Carlos Peña Ruiz"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <CampoSelect
              etiqueta="Tipo de documento"
              valor={d.tipoDoc}
              onChange={(v) => set("tipoDoc", v)}
              opciones={DOCUMENTOS}
            />
            <CampoTexto
              etiqueta="Número de documento"
              valor={d.numeroDoc}
              onChange={(v) => set("numeroDoc", v)}
              placeholder="79.456.123"
            />
          </div>
          <CampoTexto
            etiqueta="Dirección de notificación"
            valor={d.direccion}
            onChange={(v) => set("direccion", v)}
            placeholder="Carrera 8 # 20-45"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <CampoTexto
              etiqueta="Correo electrónico"
              valor={d.correo}
              onChange={(v) => set("correo", v)}
              tipo="email"
              placeholder="tucorreo@ejemplo.com"
            />
            <CampoTexto
              etiqueta="Teléfono"
              valor={d.telefono}
              onChange={(v) => set("telefono", v)}
              tipo="tel"
              placeholder="300 000 0000"
            />
          </div>
        </>
      ),
    },
    {
      titulo: "Hechos y petición",
      contenido: (
        <>
          <CampoArea
            etiqueta="Hechos con fechas"
            valor={d.hechos}
            onChange={(v) => set("hechos", v)}
            placeholder="El 12 de marzo de 2026 radiqué la solicitud No. 4587 ante..."
            nota="Un hecho por línea, en orden cronológico. Se numeran automáticamente."
          />
          <CampoArea
            etiqueta="Qué pides que ordene el juez"
            valor={d.pretensiones}
            onChange={(v) => set("pretensiones", v)}
            filas={5}
            placeholder="Ordenar a la EPS autorizar la cirugía en un plazo de 48 horas."
          />
        </>
      ),
    },
    {
      titulo: "Medida, juramento y anexos",
      contenido: (
        <>
          <CampoSi
            etiqueta="¿Solicitas medida provisional?"
            valor={d.medidaProvisional}
            onChange={(v) => set("medidaProvisional", v)}
            nota="Sirve cuando esperar el fallo puede causar un daño irreparable (art. 7 Decreto 2591 de 1991)."
          />
          {d.medidaProvisional ? (
            <CampoArea
              etiqueta="Por qué es urgente"
              valor={d.motivoMedida}
              onChange={(v) => set("motivoMedida", v)}
              filas={3}
              placeholder="El tratamiento está suspendido y mi estado de salud se deteriora cada día."
            />
          ) : null}
          <CampoSi
            etiqueta="¿Has presentado otra tutela por los mismos hechos?"
            valor={d.otraTutela}
            onChange={(v) => set("otraTutela", v)}
            nota="El juramento sobre este punto es obligatorio (art. 37 Decreto 2591 de 1991)."
          />
          <ListaDinamica
            etiqueta="Pruebas y anexos"
            items={d.anexos}
            onChange={(v) => set("anexos", v)}
            placeholder="Copia de la solicitud radicada el 12/03/2026"
            textoAgregar="Agregar prueba o anexo"
          />
        </>
      ),
    },
  ];

  const lineas = (t: string) => t.split("\n").map((l) => l.trim()).filter(Boolean);
  const hechos = lineas(d.hechos);
  const pretensiones = lineas(d.pretensiones);
  const anexos = d.anexos.filter((a) => a.trim());
  const listaDerechos =
    d.derechos.length > 0 ? d.derechos.join(", ").toLowerCase() : "[derechos vulnerados]";

  const vista = (
    <HojaCarta>
      <p>
        {d.ciudad || <Pendiente>[Ciudad]</Pendiente>}, {HOY}
      </p>

      <p className="mt-[1.6em] font-semibold">Señor</p>
      <p className="font-semibold uppercase">Juez (reparto)</p>
      <p>{d.ciudad || <Pendiente>[Ciudad]</Pendiente>}</p>
      <p className="mt-[0.4em]">E. S. D.</p>

      <p className="mt-[1.4em]">
        <span className="font-semibold">Ref.:</span> Acción de tutela de{" "}
        {d.nombre || <Pendiente>[nombre]</Pendiente>} contra{" "}
        {d.accionada || <Pendiente>[entidad accionada]</Pendiente>}
      </p>

      <HojaParrafo>
        {d.nombre || <Pendiente>[nombre completo]</Pendiente>}, mayor de edad, identificado(a) con{" "}
        {d.tipoDoc.toLowerCase()} No.{" "}
        {d.numeroDoc || <Pendiente>[número de documento]</Pendiente>}, actuando en nombre propio,
        acudo ante su Despacho para promover ACCIÓN DE TUTELA, con fundamento en el artículo 86 de
        la Constitución Política y en el Decreto 2591 de 1991, contra{" "}
        {d.accionada || <Pendiente>[entidad accionada]</Pendiente>}, por la vulneración de mis
        derechos fundamentales a {listaDerechos}, con base en los siguientes hechos.
      </HojaParrafo>

      <HojaTitulo>I. Partes</HojaTitulo>
      <HojaParrafo>
        Accionante: {d.nombre || <Pendiente>[nombre]</Pendiente>}, {d.tipoDoc.toLowerCase()} No.{" "}
        {d.numeroDoc || <Pendiente>[número]</Pendiente>}.{"\n"}
        Accionada: {d.accionada || <Pendiente>[entidad accionada]</Pendiente>}.
      </HojaParrafo>

      <HojaTitulo>II. Hechos</HojaTitulo>
      {hechos.length > 0 ? (
        <ol className="mt-[0.6em] space-y-[0.5em]">
          {hechos.map((h, i) => (
            <li key={i} className="text-justify">
              {i + 1}. {h}
            </li>
          ))}
        </ol>
      ) : (
        <HojaParrafo>
          <Pendiente>[Narra los hechos con fechas en el paso 3.]</Pendiente>
        </HojaParrafo>
      )}

      <HojaTitulo>III. Derechos fundamentales vulnerados</HojaTitulo>
      <HojaParrafo>
        Considero vulnerados mis derechos fundamentales a {listaDerechos}, reconocidos en la
        Constitución Política y desarrollados por la jurisprudencia de la Corte Constitucional.
      </HojaParrafo>

      <HojaTitulo>IV. Petición</HojaTitulo>
      {pretensiones.length > 0 ? (
        <ol className="mt-[0.6em] space-y-[0.5em]">
          {pretensiones.map((p, i) => (
            <li key={i} className="text-justify">
              {i + 1}. {p}
            </li>
          ))}
        </ol>
      ) : (
        <HojaParrafo>
          <Pendiente>[Escribe qué debe ordenar el juez, en el paso 3.]</Pendiente>
        </HojaParrafo>
      )}

      <HojaTitulo>V. Fundamentos de derecho</HojaTitulo>
      <HojaParrafo>
        Invoco el artículo 86 de la Constitución Política, que permite reclamar ante los jueces, en
        todo momento y lugar, mediante un procedimiento preferente y sumario, la protección
        inmediata de los derechos constitucionales fundamentales cuando resulten vulnerados o
        amenazados por la acción u omisión de cualquier autoridad pública o de particulares en los
        casos previstos en la ley; y el Decreto 2591 de 1991, que reglamenta su ejercicio, en
        especial sus artículos 1, 5, 6, 7, 29 y 37. No cuento con otro medio de defensa judicial
        idóneo y eficaz para obtener la protección que solicito, o el existente resulta insuficiente
        frente a la urgencia de la afectación.
      </HojaParrafo>

      {d.medidaProvisional ? (
        <>
          <HojaTitulo>VI. Medida provisional</HojaTitulo>
          <HojaParrafo>
            Con fundamento en el artículo 7 del Decreto 2591 de 1991, solicito decretar medida
            provisional mientras se resuelve el fondo del asunto, por cuanto{" "}
            {d.motivoMedida || <Pendiente>[explica la urgencia en el paso 4]</Pendiente>}.
          </HojaParrafo>
        </>
      ) : null}

      <HojaTitulo>{d.medidaProvisional ? "VII" : "VI"}. Juramento</HojaTitulo>
      <HojaParrafo>
        Bajo la gravedad del juramento manifiesto que{" "}
        {d.otraTutela
          ? "he presentado otra acción de tutela por los mismos hechos y derechos, e informo de ello al Despacho para lo de su competencia"
          : "no he presentado ninguna otra acción de tutela por los mismos hechos y derechos, ante ninguna autoridad judicial"}{" "}
        (artículo 37 del Decreto 2591 de 1991).
      </HojaParrafo>

      <HojaTitulo>{d.medidaProvisional ? "VIII" : "VII"}. Pruebas y anexos</HojaTitulo>
      {anexos.length > 0 ? (
        <ol className="mt-[0.6em] space-y-[0.4em]">
          {anexos.map((a, i) => (
            <li key={i}>
              {i + 1}. {a}
            </li>
          ))}
        </ol>
      ) : (
        <HojaParrafo>
          <Pendiente>[Relaciona las pruebas y anexos en el paso 4.]</Pendiente>
        </HojaParrafo>
      )}

      <HojaTitulo>{d.medidaProvisional ? "IX" : "VIII"}. Notificaciones</HojaTitulo>
      <HojaParrafo>
        Recibiré notificaciones en {d.direccion || <Pendiente>[dirección]</Pendiente>}, de la ciudad
        de {d.ciudad || <Pendiente>[ciudad]</Pendiente>}, en el correo electrónico{" "}
        {d.correo || <Pendiente>[correo]</Pendiente>} y en el teléfono{" "}
        {d.telefono || <Pendiente>[teléfono]</Pendiente>}. La entidad accionada podrá ser notificada
        en su domicilio principal.
      </HojaParrafo>

      <p className="mt-[2.4em]">Atentamente,</p>
      <p className="mt-[3em] border-t border-[#1a1a1a] pt-[0.5em]">
        {d.nombre || <Pendiente>[nombre completo]</Pendiente>}
      </p>
      <p>
        {d.tipoDoc} No. {d.numeroDoc || <Pendiente>[número]</Pendiente>}
      </p>
    </HojaCarta>
  );

  return <MarcoGenerador pasos={pasos} vistaPrevia={vista} />;
}

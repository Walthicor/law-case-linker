import { useState } from "react";
import { HojaCarta, HojaParrafo, HojaTitulo, Pendiente } from "./HojaCarta";
import { MarcoGenerador } from "./MarcoGenerador";
import { CampoArea, CampoSelect, CampoSi, CampoTexto, ListaDinamica } from "./campos";

const TIPOS = [
  "Información",
  "Documentos",
  "Consulta",
  "Queja o reclamo",
  "Solicitud de actuación",
] as const;

const DOCUMENTOS = ["Cédula de ciudadanía", "Cédula de extranjería", "NIT", "Pasaporte"] as const;

const HOY = new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date());

type Datos = {
  tipo: string;
  entidad: string;
  ciudadEntidad: string;
  nombre: string;
  tipoDoc: string;
  numeroDoc: string;
  direccion: string;
  ciudad: string;
  correo: string;
  telefono: string;
  hechos: string;
  peticion: string;
  anexos: string[];
  informacionPublica: boolean;
};

const INICIAL: Datos = {
  tipo: "Información",
  entidad: "",
  ciudadEntidad: "",
  nombre: "",
  tipoDoc: "Cédula de ciudadanía",
  numeroDoc: "",
  direccion: "",
  ciudad: "",
  correo: "",
  telefono: "",
  hechos: "",
  peticion: "",
  anexos: [],
  informacionPublica: false,
};

export function GeneradorPeticion() {
  const [d, setD] = useState<Datos>(INICIAL);
  const set = <K extends keyof Datos>(k: K, v: Datos[K]) => setD((s) => ({ ...s, [k]: v }));

  const anexos = d.anexos.filter((a) => a.trim());

  const pasos = [
    {
      titulo: "La petición",
      contenido: (
        <>
          <CampoSelect
            etiqueta="Tipo de petición"
            valor={d.tipo}
            onChange={(v) => set("tipo", v)}
            opciones={TIPOS}
            nota="El tipo define el plazo legal de respuesta."
          />
          <CampoTexto
            etiqueta="Entidad destinataria"
            valor={d.entidad}
            onChange={(v) => set("entidad", v)}
            placeholder="Secretaría de Movilidad de Bogotá"
          />
          <CampoTexto
            etiqueta="Ciudad de la entidad"
            valor={d.ciudadEntidad}
            onChange={(v) => set("ciudadEntidad", v)}
            placeholder="Bogotá D.C."
          />
          <CampoSi
            etiqueta="¿Es una petición de información o documentos públicos?"
            valor={d.informacionPublica}
            onChange={(v) => set("informacionPublica", v)}
            nota="Si lo es, el plazo de respuesta baja a 10 días hábiles."
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
            placeholder="María Fernanda Gómez Ríos"
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
              placeholder="1.020.345.678"
            />
          </div>
          <CampoTexto
            etiqueta="Dirección de notificación"
            valor={d.direccion}
            onChange={(v) => set("direccion", v)}
            placeholder="Calle 45 # 12-30, apto 402"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <CampoTexto
              etiqueta="Ciudad"
              valor={d.ciudad}
              onChange={(v) => set("ciudad", v)}
              placeholder="Medellín"
            />
            <CampoTexto
              etiqueta="Teléfono"
              valor={d.telefono}
              onChange={(v) => set("telefono", v)}
              tipo="tel"
              placeholder="300 000 0000"
            />
          </div>
          <CampoTexto
            etiqueta="Correo electrónico"
            valor={d.correo}
            onChange={(v) => set("correo", v)}
            tipo="email"
            placeholder="tucorreo@ejemplo.com"
            nota="La entidad puede notificarte por correo si lo autorizas."
          />
        </>
      ),
    },
    {
      titulo: "Hechos y petición",
      contenido: (
        <>
          <CampoArea
            etiqueta="Hechos"
            valor={d.hechos}
            onChange={(v) => set("hechos", v)}
            placeholder="Escribe qué pasó, con fechas. Un hecho por línea."
            nota="Cada línea se numera automáticamente en el documento."
          />
          <CampoArea
            etiqueta="Petición concreta"
            valor={d.peticion}
            onChange={(v) => set("peticion", v)}
            filas={5}
            placeholder="Qué quieres que la entidad haga o entregue. Una petición por línea."
          />
        </>
      ),
    },
    {
      titulo: "Anexos",
      contenido: (
        <ListaDinamica
          etiqueta="Anexos"
          items={d.anexos}
          onChange={(v) => set("anexos", v)}
          placeholder="Copia del comparendo No. 11001..."
          textoAgregar="Agregar anexo"
        />
      ),
    },
  ];

  const lineas = (t: string) => t.split("\n").map((l) => l.trim()).filter(Boolean);
  const hechos = lineas(d.hechos);
  const peticiones = lineas(d.peticion);

  const plazo = d.informacionPublica
    ? "diez (10) días hábiles"
    : d.tipo === "Consulta"
      ? "treinta (30) días hábiles"
      : d.tipo === "Documentos"
        ? "diez (10) días hábiles"
        : "quince (15) días hábiles";

  const vista = (
    <HojaCarta>
      <p>
        {d.ciudad || <Pendiente>[Ciudad]</Pendiente>}, {HOY}
      </p>

      <p className="mt-[1.6em] font-semibold">Señores</p>
      <p className="font-semibold uppercase">
        {d.entidad || <Pendiente>[NOMBRE DE LA ENTIDAD]</Pendiente>}
      </p>
      <p>{d.ciudadEntidad || <Pendiente>[Ciudad de la entidad]</Pendiente>}</p>

      <p className="mt-[1.4em]">
        <span className="font-semibold">Ref.:</span> Derecho de petición —{" "}
        {d.tipo.toLowerCase()}
      </p>

      <HojaParrafo>
        Yo, {d.nombre || <Pendiente>[nombre completo]</Pendiente>}, identificado(a) con{" "}
        {d.tipoDoc.toLowerCase()} No.{" "}
        {d.numeroDoc || <Pendiente>[número de documento]</Pendiente>}, en ejercicio del derecho de
        petición consagrado en el artículo 23 de la Constitución Política y reglamentado por la Ley
        1755 de 2015, respetuosamente me permito solicitar:
      </HojaParrafo>

      <HojaTitulo>Hechos</HojaTitulo>
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
          <Pendiente>[Describe los hechos, con fechas, en el paso 3.]</Pendiente>
        </HojaParrafo>
      )}

      <HojaTitulo>Petición</HojaTitulo>
      {peticiones.length > 0 ? (
        <ol className="mt-[0.6em] space-y-[0.5em]">
          {peticiones.map((p, i) => (
            <li key={i} className="text-justify">
              {i + 1}. {p}
            </li>
          ))}
        </ol>
      ) : (
        <HojaParrafo>
          <Pendiente>[Escribe tu petición concreta en el paso 3.]</Pendiente>
        </HojaParrafo>
      )}

      <HojaTitulo>Fundamentos de derecho</HojaTitulo>
      <HojaParrafo>
        Fundamento esta solicitud en el artículo 23 de la Constitución Política, que consagra el
        derecho de toda persona a presentar peticiones a las autoridades y a obtener pronta
        resolución; en la Ley 1755 de 2015, que sustituyó el Título II del Código de Procedimiento
        Administrativo y de lo Contencioso Administrativo y reguló el ejercicio de este derecho
        fundamental
        {d.informacionPublica
          ? "; y en la Ley 1712 de 2014, de transparencia y acceso a la información pública nacional"
          : ""}
        . Conforme a esas normas, la entidad debe resolver esta petición dentro de {plazo}{" "}
        siguientes a su recepción, y de no ser posible, informarme antes del vencimiento las razones
        de la demora y el plazo en que responderá.
      </HojaParrafo>

      <HojaTitulo>Anexos</HojaTitulo>
      {anexos.length > 0 ? (
        <ol className="mt-[0.6em] space-y-[0.4em]">
          {anexos.map((a, i) => (
            <li key={i}>
              {i + 1}. {a}
            </li>
          ))}
        </ol>
      ) : (
        <HojaParrafo>Sin anexos.</HojaParrafo>
      )}

      <HojaTitulo>Notificaciones</HojaTitulo>
      <HojaParrafo>
        Recibiré notificaciones en {d.direccion || <Pendiente>[dirección]</Pendiente>}, de la ciudad
        de {d.ciudad || <Pendiente>[ciudad]</Pendiente>}, en el correo electrónico{" "}
        {d.correo || <Pendiente>[correo]</Pendiente>} y en el teléfono{" "}
        {d.telefono || <Pendiente>[teléfono]</Pendiente>}.
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

  return <MarcoGenerador pasos={pasos} vistaPrevia={vista} nombre="derecho-de-peticion" />;
}

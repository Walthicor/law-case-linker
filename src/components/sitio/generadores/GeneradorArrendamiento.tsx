import { useState } from "react";
import { HojaCarta, HojaParrafo, HojaTitulo, Pendiente } from "./HojaCarta";
import { MarcoGenerador } from "./MarcoGenerador";
import { CampoArea, CampoSelect, CampoSi, CampoTexto, ListaDinamica } from "./campos";

const FORMAS_PAGO = [
  "Transferencia bancaria",
  "Consignación en cuenta",
  "Efectivo con recibo",
  "Pago electrónico (PSE o billetera)",
] as const;

const GARANTIAS = [
  "Codeudor solidario",
  "Póliza o seguro de arrendamiento",
  "Aval de compañía afianzadora",
  "Sin garantía",
] as const;

const HOY = new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date());

const miles = (v: string) => {
  const n = v.replace(/[^\d]/g, "");
  return n ? new Intl.NumberFormat("es-CO").format(Number(n)) : "";
};

type Datos = {
  arrendador: string;
  docArrendador: string;
  arrendatario: string;
  docArrendatario: string;
  direccionInmueble: string;
  ciudad: string;
  descripcion: string;
  canon: string;
  formaPago: string;
  diaPago: string;
  duracion: string;
  inicio: string;
  garantia: string;
  serviciosArrendatario: string;
  serviciosArrendador: string;
  inventario: string[];
  codeudor: string;
  docCodeudor: string;
  mascotas: boolean;
};

const INICIAL: Datos = {
  arrendador: "",
  docArrendador: "",
  arrendatario: "",
  docArrendatario: "",
  direccionInmueble: "",
  ciudad: "",
  descripcion: "",
  canon: "",
  formaPago: "Transferencia bancaria",
  diaPago: "5",
  duracion: "12",
  inicio: "",
  garantia: "Codeudor solidario",
  serviciosArrendatario: "Energía, acueducto y alcantarillado, gas, internet",
  serviciosArrendador: "Administración de la copropiedad",
  inventario: [],
  codeudor: "",
  docCodeudor: "",
  mascotas: false,
};

export function GeneradorArrendamiento() {
  const [d, setD] = useState<Datos>(INICIAL);
  const set = <K extends keyof Datos>(k: K, v: Datos[K]) => setD((s) => ({ ...s, [k]: v }));
  const inventario = d.inventario.filter((i) => i.trim());

  const pasos = [
    {
      titulo: "Las partes",
      contenido: (
        <>
          <CampoTexto
            etiqueta="Nombre del arrendador"
            valor={d.arrendador}
            onChange={(v) => set("arrendador", v)}
            placeholder="Luis Alberto Mejía Torres"
          />
          <CampoTexto
            etiqueta="Documento del arrendador"
            valor={d.docArrendador}
            onChange={(v) => set("docArrendador", v)}
            placeholder="C.C. 8.345.678"
          />
          <CampoTexto
            etiqueta="Nombre del arrendatario"
            valor={d.arrendatario}
            onChange={(v) => set("arrendatario", v)}
            placeholder="Ana Lucía Rincón Vargas"
          />
          <CampoTexto
            etiqueta="Documento del arrendatario"
            valor={d.docArrendatario}
            onChange={(v) => set("docArrendatario", v)}
            placeholder="C.C. 1.019.876.543"
          />
        </>
      ),
    },
    {
      titulo: "El inmueble",
      contenido: (
        <>
          <CampoTexto
            etiqueta="Dirección del inmueble"
            valor={d.direccionInmueble}
            onChange={(v) => set("direccionInmueble", v)}
            placeholder="Carrera 15 # 82-40, apto 601, Edificio Alcalá"
          />
          <CampoTexto
            etiqueta="Ciudad"
            valor={d.ciudad}
            onChange={(v) => set("ciudad", v)}
            placeholder="Bogotá D.C."
          />
          <CampoArea
            etiqueta="Descripción del inmueble"
            valor={d.descripcion}
            onChange={(v) => set("descripcion", v)}
            filas={4}
            placeholder="Apartamento de 68 m², 2 habitaciones, 2 baños, cocina integral, un parqueadero cubierto y depósito."
          />
          <CampoSi
            etiqueta="¿Se autorizan mascotas?"
            valor={d.mascotas}
            onChange={(v) => set("mascotas", v)}
          />
        </>
      ),
    },
    {
      titulo: "Canon y plazo",
      contenido: (
        <>
          <CampoTexto
            etiqueta="Canon mensual"
            valor={d.canon}
            onChange={(v) => set("canon", miles(v))}
            nota="El canon de vivienda urbana no puede exceder el 1% del valor comercial del inmueble."
            placeholder="2.300.000"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <CampoSelect
              etiqueta="Forma de pago"
              valor={d.formaPago}
              onChange={(v) => set("formaPago", v)}
              opciones={FORMAS_PAGO}
            />
            <CampoTexto
              etiqueta="Día de pago de cada mes"
              valor={d.diaPago}
              onChange={(v) => set("diaPago", v.replace(/[^\d]/g, ""))}
              placeholder="5"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <CampoTexto
              etiqueta="Duración en meses"
              valor={d.duracion}
              onChange={(v) => set("duracion", v.replace(/[^\d]/g, ""))}
              nota="Si no se pacta, la ley presume 12 meses."
              placeholder="12"
            />
            <CampoTexto
              etiqueta="Fecha de inicio"
              valor={d.inicio}
              onChange={(v) => set("inicio", v)}
              tipo="date"
            />
          </div>
          <CampoSelect
            etiqueta="Garantía"
            valor={d.garantia}
            onChange={(v) => set("garantia", v)}
            opciones={GARANTIAS}
            nota="La Ley 820 de 2003 prohíbe exigir depósitos en dinero para garantizar el contrato."
          />
        </>
      ),
    },
    {
      titulo: "Servicios, inventario y codeudor",
      contenido: (
        <>
          <CampoTexto
            etiqueta="Servicios a cargo del arrendatario"
            valor={d.serviciosArrendatario}
            onChange={(v) => set("serviciosArrendatario", v)}
          />
          <CampoTexto
            etiqueta="Servicios a cargo del arrendador"
            valor={d.serviciosArrendador}
            onChange={(v) => set("serviciosArrendador", v)}
          />
          <ListaDinamica
            etiqueta="Inventario de entrega"
            items={d.inventario}
            onChange={(v) => set("inventario", v)}
            placeholder="Estufa de 4 puestos en buen estado"
            textoAgregar="Agregar ítem al inventario"
          />
          <CampoTexto
            etiqueta="Codeudor (opcional)"
            valor={d.codeudor}
            onChange={(v) => set("codeudor", v)}
            placeholder="Jorge Enrique Rincón Ospina"
          />
          <CampoTexto
            etiqueta="Documento del codeudor"
            valor={d.docCodeudor}
            onChange={(v) => set("docCodeudor", v)}
            placeholder="C.C. 79.123.456"
          />
        </>
      ),
    },
  ];

  const vista = (
    <HojaCarta>
      <p className="text-center font-semibold uppercase tracking-[0.06em]">
        Contrato de arrendamiento de vivienda urbana
      </p>
      <p className="mt-[0.4em] text-center">Ley 820 de 2003</p>

      <HojaParrafo>
        Entre {d.arrendador || <Pendiente>[nombre del arrendador]</Pendiente>}, identificado(a) con{" "}
        {d.docArrendador || <Pendiente>[documento]</Pendiente>}, quien en adelante se denominará EL
        ARRENDADOR, y {d.arrendatario || <Pendiente>[nombre del arrendatario]</Pendiente>},
        identificado(a) con {d.docArrendatario || <Pendiente>[documento]</Pendiente>}, quien en
        adelante se denominará EL ARRENDATARIO, se celebra el presente contrato de arrendamiento de
        vivienda urbana, regido por la Ley 820 de 2003 y por las siguientes cláusulas:
      </HojaParrafo>

      <HojaTitulo>Primera. Objeto</HojaTitulo>
      <HojaParrafo>
        EL ARRENDADOR entrega a título de arrendamiento a EL ARRENDATARIO el inmueble ubicado en{" "}
        {d.direccionInmueble || <Pendiente>[dirección del inmueble]</Pendiente>}, de la ciudad de{" "}
        {d.ciudad || <Pendiente>[ciudad]</Pendiente>}
        {d.descripcion ? `, con las siguientes características: ${d.descripcion}` : ""}. El
        inmueble se destina exclusivamente a vivienda de EL ARRENDATARIO y su núcleo familiar, y no
        podrá destinarse a un uso distinto sin autorización escrita de EL ARRENDADOR.
      </HojaParrafo>

      <HojaTitulo>Segunda. Canon y forma de pago</HojaTitulo>
      <HojaParrafo>
        El canon mensual es de ${d.canon || <Pendiente>[valor]</Pendiente>} pesos, que EL
        ARRENDATARIO pagará por {d.formaPago.toLowerCase()} dentro de los primeros{" "}
        {d.diaPago || <Pendiente>[día]</Pendiente>} días de cada mes. EL ARRENDADOR expedirá
        comprobante de cada pago recibido, conforme al artículo 9 de la Ley 820 de 2003.
      </HojaParrafo>

      <HojaTitulo>Tercera. Duración</HojaTitulo>
      <HojaParrafo>
        El contrato tendrá una duración de {d.duracion || "12"} meses contados a partir del{" "}
        {d.inicio ? (
          new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(
            new Date(`${d.inicio}T00:00:00`),
          )
        ) : (
          <Pendiente>[fecha de inicio]</Pendiente>
        )}
        , y se entenderá prorrogado en iguales condiciones y por el mismo término siempre que las
        partes cumplan sus obligaciones y no medie aviso de terminación en los términos legales.
      </HojaParrafo>

      <HojaTitulo>Cuarta. Incremento anual</HojaTitulo>
      <HojaParrafo>
        Cada doce meses de ejecución del contrato, EL ARRENDADOR podrá incrementar el canon en una
        proporción que no exceda el ciento por ciento (100%) del incremento del índice de precios al
        consumidor del año calendario inmediatamente anterior, según el artículo 20 de la Ley 820 de
        2003. El incremento se informará por escrito con la antelación prevista en la ley.
      </HojaParrafo>

      <HojaTitulo>Quinta. Garantía</HojaTitulo>
      <HojaParrafo>
        El cumplimiento de las obligaciones de EL ARRENDATARIO se respalda con:{" "}
        {d.garantia.toLowerCase()}
        {d.codeudor
          ? `, siendo codeudor solidario ${d.codeudor}, identificado con ${d.docCodeudor || "[documento]"}`
          : ""}
        . En cumplimiento del artículo 16 de la Ley 820 de 2003, las partes declaran que no se
        exigen ni se entregan depósitos en dinero ni cauciones reales para garantizar este contrato.
      </HojaParrafo>

      <HojaTitulo>Sexta. Servicios públicos</HojaTitulo>
      <HojaParrafo>
        Estarán a cargo de EL ARRENDATARIO:{" "}
        {d.serviciosArrendatario || <Pendiente>[servicios]</Pendiente>}. Estarán a cargo de EL
        ARRENDADOR: {d.serviciosArrendador || "ninguno"}. EL ARRENDATARIO se obliga a entregar los
        recibos de pago al terminar el contrato y responde por las sanciones o reconexiones
        derivadas de su mora.
      </HojaParrafo>

      <HojaTitulo>Séptima. Inventario y estado del inmueble</HojaTitulo>
      {inventario.length > 0 ? (
        <ol className="mt-[0.6em] space-y-[0.4em]">
          {inventario.map((i, idx) => (
            <li key={idx}>
              {idx + 1}. {i}
            </li>
          ))}
        </ol>
      ) : (
        <HojaParrafo>
          El inmueble se entrega en buen estado de conservación y aseo, y EL ARRENDATARIO se obliga a
          restituirlo en el mismo estado, salvo el deterioro natural por el uso legítimo.
        </HojaParrafo>
      )}

      <HojaTitulo>Octava. Obligaciones de las partes</HojaTitulo>
      <HojaParrafo>
        EL ARRENDADOR se obliga a entregar el inmueble en estado de servir para su destinación, a
        mantenerlo en ese estado realizando las reparaciones necesarias no imputables a EL
        ARRENDATARIO, y a garantizar el goce pacífico del bien. EL ARRENDATARIO se obliga a pagar
        oportunamente el canon y los servicios a su cargo, a usar el inmueble conforme a lo pactado,
        a no subarrendar ni ceder sin autorización escrita, a cumplir el reglamento de propiedad
        horizontal y a realizar las reparaciones locativas derivadas de su uso.
        {d.mascotas
          ? " Las partes acuerdan que EL ARRENDATARIO podrá tener mascotas, respondiendo por los daños que causen."
          : " Las partes acuerdan que no se autoriza la tenencia de mascotas en el inmueble."}
      </HojaParrafo>

      <HojaTitulo>Novena. Terminación</HojaTitulo>
      <HojaParrafo>
        El contrato podrá terminarse por las causales de los artículos 22 y 24 de la Ley 820 de
        2003, entre ellas la mora en el pago del canon o de los servicios, el subarriendo o cesión
        no autorizados, la destinación distinta a vivienda, los daños al inmueble y la realización
        de mejoras sin autorización. EL ARRENDATARIO podrá terminar unilateralmente en cualquier
        tiempo dando aviso escrito con tres meses de antelación y pagando la indemnización
        equivalente a tres meses de canon; durante las prórrogas, con el preaviso legal y el pago de
        mes y medio. EL ARRENDADOR podrá terminar a la expiración del plazo, con preaviso de tres
        meses y en los casos previstos en la ley.
      </HojaParrafo>

      <HojaTitulo>Décima. Notificaciones y ley aplicable</HojaTitulo>
      <HojaParrafo>
        Las partes recibirán comunicaciones en las direcciones registradas en este contrato y
        someten sus diferencias a la ley colombiana y a los jueces del lugar del inmueble.
      </HojaParrafo>

      <HojaParrafo>
        Para constancia se firma en {d.ciudad || <Pendiente>[ciudad]</Pendiente>}, el {HOY}.
      </HojaParrafo>

      <div className="mt-[3em] grid grid-cols-2 gap-[8%]">
        <div>
          <p className="border-t border-[#1a1a1a] pt-[0.5em]">
            {d.arrendador || <Pendiente>[arrendador]</Pendiente>}
          </p>
          <p>{d.docArrendador || <Pendiente>[documento]</Pendiente>}</p>
          <p>Arrendador</p>
        </div>
        <div>
          <p className="border-t border-[#1a1a1a] pt-[0.5em]">
            {d.arrendatario || <Pendiente>[arrendatario]</Pendiente>}
          </p>
          <p>{d.docArrendatario || <Pendiente>[documento]</Pendiente>}</p>
          <p>Arrendatario</p>
        </div>
      </div>

      {d.codeudor ? (
        <div className="mt-[2.4em]">
          <p className="border-t border-[#1a1a1a] pt-[0.5em]">{d.codeudor}</p>
          <p>{d.docCodeudor || <Pendiente>[documento]</Pendiente>}</p>
          <p>Codeudor solidario</p>
        </div>
      ) : null}
    </HojaCarta>
  );

  return <MarcoGenerador pasos={pasos} vistaPrevia={vista} />;
}

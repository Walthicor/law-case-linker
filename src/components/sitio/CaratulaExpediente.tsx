import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const AREAS: { grupo: string; opciones: string[] }[] = [
  {
    grupo: "PERSONAS",
    opciones: ["Laboral", "Riesgos laborales y ARL", "Familia", "Pensiones", "Tránsito"],
  },
  { grupo: "DINERO Y BIENES", opciones: ["Civil", "Inmobiliario", "Insolvencia"] },
  { grupo: "EMPRESAS", opciones: ["Comercial", "Propiedad intelectual"] },
  { grupo: "ESTADO", opciones: ["Administrativo", "Penal"] },
  { grupo: "OTROS", opciones: ["Migratorio", "No estoy seguro"] },
];

const ESTADOS = [
  "Apenas necesito asesoría",
  "Voy a iniciar un proceso",
  "Ya tengo un proceso judicial en curso",
  "Quiero apelar una decisión",
  "Necesito cambiar de abogado",
];

const CIUDADES = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Cúcuta",
  "Bucaramanga",
  "Pereira",
  "Santa Marta",
  "Ibagué",
  "Manizales",
  "Villavicencio",
  "Pasto",
  "Neiva",
  "Armenia",
  "Montería",
  "Valledupar",
  "Popayán",
  "Sincelejo",
];

const PASOS = ["Tu situación", "Los detalles", "Contacto"];

export function CaratulaExpediente() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [estado, setEstado] = useState("");

  const completados = useMemo(
    () => [area, ciudad, estado].filter((v) => v.trim().length > 0).length,
    [area, ciudad, estado],
  );

  // Los 5 puntos del radicado se vuelven dígitos a medida que se completan campos.
  const digitos = useMemo(
    () => ["7", "3", "1", "4", "9"].map((d, i) => (i < completados ? d : "·")),
    [completados],
  );

  const listo = completados === 3;

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    if (!listo) return;
    navigate({ to: "/iniciar-caso", search: { area, ciudad, estado } });
  };

  return (
    <div
      className="overflow-hidden rounded-[6px] border border-linea bg-papel"
      style={{ boxShadow: "0 1px 2px rgba(18,33,43,.06), 0 12px 40px rgba(18,33,43,.16)" }}
    >
      <div className="h-[3px] w-full bg-esmeralda" />

      <div className="border-b border-linea px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Expediente</p>
          <p className="mono-tag text-tinta-suave" aria-live="polite">
            AJC-2026-
            {digitos.map((d, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block transition-all duration-200",
                  d === "·" ? "text-tinta-suave/60" : "text-esmeralda",
                )}
              >
                {d}
              </span>
            ))}
          </p>
        </div>
        <h2 className="display-md mt-3">Cuéntanos tu caso</h2>
        <p className="mt-2 text-[0.9rem] text-tinta-suave">
          Completa el formulario y te conectamos con el abogado indicado.
        </p>
      </div>

      <ol className="flex border-b border-linea" aria-label="Pasos del formulario">
        {PASOS.map((etiqueta, i) => {
          const activo = i === 0;
          const completado = false;
          return (
            <li
              key={etiqueta}
              aria-current={activo ? "step" : undefined}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 border-r border-linea px-2 py-3 text-[0.8125rem] last:border-r-0",
                activo && "-mt-0.5 border-t-2 border-t-esmeralda bg-papel font-semibold text-tinta",
                completado && "bg-esmeralda-claro text-esmeralda",
                !activo && !completado && "bg-papel-hueso text-tinta-suave",
              )}
            >
              {completado ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <span className="font-mono text-[0.8125rem]">{i + 1}</span>
              )}
              <span className="truncate">{etiqueta}</span>
            </li>
          );
        })}
      </ol>

      <form onSubmit={enviar} className="space-y-5 px-6 py-6">
        <div>
          <label htmlFor="hero-area" className="block text-sm font-medium text-tinta">
            ¿Con qué tipo de caso necesitas ayuda?
          </label>
          <select
            id="hero-area"
            className="campo mt-2"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Selecciona el tipo de caso</option>
            {AREAS.map((g) => (
              <optgroup key={g.grupo} label={g.grupo}>
                {g.opciones.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="hero-ciudad" className="block text-sm font-medium text-tinta">
            ¿En qué ciudad o municipio ocurrió el caso?
          </label>
          <input
            id="hero-ciudad"
            className="campo mt-2"
            list="hero-ciudades"
            autoComplete="off"
            placeholder="Escribe tu ciudad o municipio"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <datalist id="hero-ciudades">
            {CIUDADES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="hero-estado" className="block text-sm font-medium text-tinta">
            ¿En qué punto está tu caso?
          </label>
          <select
            id="hero-estado"
            className="campo mt-2"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            {ESTADOS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!listo}
          className={cn(
            "btn-primario w-full",
            listo ? "btn-pulso" : "cursor-not-allowed opacity-55",
          )}
        >
          Continuar →
        </button>
        <p className="text-center text-[0.8rem] text-tinta-suave">
          Con esto ya sabemos qué tipo de abogado necesitas.
        </p>
      </form>

      <div className="flex items-start gap-2 border-t border-linea bg-papel-hueso px-6 py-3.5">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tinta-suave" aria-hidden="true" />
        <p className="text-[0.8rem] leading-relaxed text-tinta-suave">
          Tu información es confidencial y solo se comparte con el abogado que te sea asignado.
        </p>
      </div>
    </div>
  );
}

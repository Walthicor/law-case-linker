import { useId } from "react";
import { Plus, X } from "lucide-react";

export function Etiqueta({ children, htmlFor }: { children: string; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-tinta">
      {children}
    </label>
  );
}

export function CampoTexto({
  etiqueta,
  valor,
  onChange,
  placeholder,
  nota,
  tipo = "text",
}: {
  etiqueta: string;
  valor: string;
  onChange: (v: string) => void;
  placeholder?: string;
  nota?: string;
  tipo?: "text" | "email" | "tel" | "date" | "number";
}) {
  const id = useId();
  return (
    <div>
      <Etiqueta htmlFor={id}>{etiqueta}</Etiqueta>
      <input
        id={id}
        type={tipo}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="campo mt-2"
      />
      {nota ? <p className="mt-2 text-[0.8rem] text-tinta-suave">{nota}</p> : null}
    </div>
  );
}

export function CampoArea({
  etiqueta,
  valor,
  onChange,
  placeholder,
  nota,
  filas = 6,
}: {
  etiqueta: string;
  valor: string;
  onChange: (v: string) => void;
  placeholder?: string;
  nota?: string;
  filas?: number;
}) {
  const id = useId();
  return (
    <div>
      <Etiqueta htmlFor={id}>{etiqueta}</Etiqueta>
      <textarea
        id={id}
        rows={filas}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="campo mt-2 resize-y"
      />
      {nota ? <p className="mt-2 text-[0.8rem] text-tinta-suave">{nota}</p> : null}
    </div>
  );
}

export function CampoSelect({
  etiqueta,
  valor,
  onChange,
  opciones,
  nota,
}: {
  etiqueta: string;
  valor: string;
  onChange: (v: string) => void;
  opciones: readonly string[];
  nota?: string;
}) {
  const id = useId();
  return (
    <div>
      <Etiqueta htmlFor={id}>{etiqueta}</Etiqueta>
      <select
        id={id}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="campo mt-2"
      >
        {opciones.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {nota ? <p className="mt-2 text-[0.8rem] text-tinta-suave">{nota}</p> : null}
    </div>
  );
}

export function CampoSi({
  etiqueta,
  valor,
  onChange,
  nota,
}: {
  etiqueta: string;
  valor: boolean;
  onChange: (v: boolean) => void;
  nota?: string;
}) {
  return (
    <div>
      <span className="block text-sm font-medium text-tinta">{etiqueta}</span>
      <button
        type="button"
        role="switch"
        aria-checked={valor}
        onClick={() => onChange(!valor)}
        className={`mt-2 flex w-full items-center justify-between gap-3 rounded-[4px] border px-4 py-3 text-left text-[0.95rem] transition-colors ${
          valor ? "border-esmeralda bg-esmeralda-claro" : "border-linea bg-papel"
        }`}
      >
        <span>{valor ? "Sí" : "No"}</span>
        <span
          aria-hidden="true"
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
            valor ? "bg-esmeralda" : "bg-linea"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-papel transition-all ${
              valor ? "left-[22px]" : "left-0.5"
            }`}
          />
        </span>
      </button>
      {nota ? <p className="mt-2 text-[0.8rem] text-tinta-suave">{nota}</p> : null}
    </div>
  );
}

export function CampoMulti({
  etiqueta,
  opciones,
  valores,
  onChange,
  nota,
}: {
  etiqueta: string;
  opciones: readonly string[];
  valores: string[];
  onChange: (v: string[]) => void;
  nota?: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-tinta">{etiqueta}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {opciones.map((o) => {
          const activo = valores.includes(o);
          return (
            <button
              key={o}
              type="button"
              aria-pressed={activo}
              onClick={() =>
                onChange(activo ? valores.filter((v) => v !== o) : [...valores, o])
              }
              className={`rounded-full border px-3 py-1.5 text-[0.85rem] transition-colors ${
                activo
                  ? "border-esmeralda bg-esmeralda-claro text-esmeralda"
                  : "border-linea bg-papel text-tinta-suave hover:border-esmeralda"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {nota ? <p className="mt-2 text-[0.8rem] text-tinta-suave">{nota}</p> : null}
    </fieldset>
  );
}

export function ListaDinamica({
  etiqueta,
  items,
  onChange,
  placeholder,
  textoAgregar = "Agregar",
}: {
  etiqueta: string;
  items: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
  textoAgregar?: string;
}) {
  return (
    <div>
      <span className="block text-sm font-medium text-tinta">{etiqueta}</span>
      <div className="mt-2 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={item}
              onChange={(e) => onChange(items.map((v, j) => (j === i ? e.target.value : v)))}
              placeholder={placeholder}
              className="campo"
            />
            <button
              type="button"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              aria-label={`Quitar ${etiqueta.toLowerCase()} ${i + 1}`}
              className="shrink-0 rounded-[4px] border border-linea px-3 text-tinta-suave transition-colors hover:border-sello hover:text-sello"
            >
              <X className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="mt-3 inline-flex items-center gap-2 text-[0.88rem] text-esmeralda underline decoration-esmeralda/30 underline-offset-4"
      >
        <Plus className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
        {textoAgregar}
      </button>
    </div>
  );
}

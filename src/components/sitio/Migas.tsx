import { Link } from "@tanstack/react-router";

export type Miga = { titulo: string; to?: string };

export function Migas({ items }: { items: Miga[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="text-[0.82rem] text-tinta-suave">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((m, i) => (
          <li key={m.titulo} className="flex items-center gap-2">
            {m.to ? (
              <Link to={m.to} className="transition-colors hover:text-esmeralda">
                {m.titulo}
              </Link>
            ) : (
              <span aria-current="page" className="text-tinta">
                {m.titulo}
              </span>
            )}
            {i < items.length - 1 ? <span aria-hidden="true">›</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

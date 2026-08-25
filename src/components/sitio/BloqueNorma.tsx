type Props = { articulo: string; norma: string; texto: string };

export function BloqueNorma({ articulo, norma, texto }: Props) {
  return (
    <div className="bloque-norma">
      <p className="font-mono text-[0.8rem] font-semibold tracking-[0.05em] text-esmeralda">
        {articulo}
      </p>
      <p className="mt-1 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-tinta-suave">
        {norma}
      </p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-tinta">{texto}</p>
    </div>
  );
}

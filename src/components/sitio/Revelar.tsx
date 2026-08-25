import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Retardo escalonado en ms */
  retardo?: number;
  id?: string;
};

/** Entrada al scroll: opacity 0→1 + translateY 12px→0, una sola vez. */
export function Revelar({ children, className = "", as, retardo = 0, id }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    obs.observe(nodo);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref}
      className={`revelar${visible ? " revelado" : ""} ${className}`}
      style={retardo ? { transitionDelay: `${retardo}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

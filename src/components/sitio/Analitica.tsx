import { useEffect } from "react";
import { cargarAnalitica, consentimientoAnalitico } from "@/lib/analitica";

/**
 * Monta la analítica solo cuando existe consentimiento. Escucha el evento del
 * banner para cargarla en el mismo momento en que el visitante acepta.
 */
export function Analitica() {
  useEffect(() => {
    if (consentimientoAnalitico()) cargarAnalitica();
    const alConsentir = () => {
      if (consentimientoAnalitico()) cargarAnalitica();
    };
    window.addEventListener("ajc:consentimiento", alConsentir);
    return () => window.removeEventListener("ajc:consentimiento", alConsentir);
  }, []);

  return null;
}

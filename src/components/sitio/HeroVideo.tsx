import { useEffect, useState } from "react";
import videoTribunal from "@/assets/hero-tribunal.mp4.asset.json";
import { evento } from "@/lib/analitica";

const POSTER = "/hero-poster.jpg";


type Conexion = { saveData?: boolean; effectiveType?: string };

function puedeMontarVideo() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const conexion = (navigator as Navigator & { connection?: Conexion }).connection;
  if (conexion?.saveData === true) return false;
  if (conexion?.effectiveType === "2g" || conexion?.effectiveType === "slow-2g") return false;
  return true;
}

/**
 * Fondo del hero. El poster se pinta siempre como background-image (CLS 0, el LCP
 * es el H1). El <video> solo se monta en escritorio, después del evento load y
 * dentro de requestIdleCallback.
 */
export function HeroVideo() {
  const [montarVideo, setMontarVideo] = useState(false);

  useEffect(() => {
    let cancelado = false;

    const programar = () => {
      const idle =
        (window as Window & { requestIdleCallback?: (cb: () => void) => number })
          .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 400));
      idle(() => {
        if (cancelado || !puedeMontarVideo()) return;
        setMontarVideo(true);
        evento("video_hero_cargado", {
          dispositivo: window.matchMedia("(min-width:1024px)").matches ? "escritorio" : "movil",
        });
      });
    };

    if (document.readyState === "complete") {
      programar();
      return () => {
        cancelado = true;
      };
    }
    window.addEventListener("load", programar, { once: true });
    return () => {
      cancelado = true;
      window.removeEventListener("load", programar);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden bg-tinta bg-cover bg-center"
      style={{ backgroundImage: `url(${POSTER})` }}
    >
      {montarVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={POSTER}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoTribunal.url} type="video/mp4" />
        </video>
      )}

    </div>
  );
}

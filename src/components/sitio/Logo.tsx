import { Link } from "@tanstack/react-router";
import logoOscuro from "@/assets/logo-texto.png.asset.json";
import logoClaro from "@/assets/logo-texto-claro.png.asset.json";

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Asesorías Jurídicas Colombia">
      <img
        src={claro ? logoClaro.url : logoOscuro.url}
        alt="Asesorías Jurídicas Colombia"
        width={230}
        height={35}
        className="h-auto w-[180px] md:w-[230px]"
      />
    </Link>
  );
}

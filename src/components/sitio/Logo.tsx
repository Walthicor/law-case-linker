import { Link } from "@tanstack/react-router";
import logoOscuro from "@/assets/logo-ajc-v2.png.asset.json";
import logoClaro from "@/assets/logo-ajc-v2-claro.png.asset.json";

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Asesorías Jurídicas Colombia">
      <img
        src={claro ? logoClaro.url : logoOscuro.url}
        alt="Asesorías Jurídicas Colombia"
        width={163}
        height={100}
        className="h-[100px] w-auto translate-y-[10px]"
      />
    </Link>
  );
}

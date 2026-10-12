import { describe, expect, test } from "bun:test";
import { AREAS } from "./areas";
import { IMAGENES_AREAS, IMAGENES_JURIDICAS, IMAGENES_POR_SILO } from "./imagenes-juridicas";

describe("Fotografías indicadas en el chat del 27 de agosto", () => {
  test("las 13 áreas no repiten propiedad intelectual", () => {
    expect(AREAS).toHaveLength(13);
    expect(AREAS.filter((a) => a.titulo === "Propiedad intelectual")).toHaveLength(1);
  });
  test("inicio y Áreas comparten las mismas 13 fotografías", () => {
    expect(Object.values(IMAGENES_POR_SILO).sort()).toEqual([...IMAGENES_AREAS].sort());
    expect(IMAGENES_POR_SILO.transito).toBe("transito-accidentes");
    expect(IMAGENES_POR_SILO.penal).toBe("derecho-penal");
  });
  test("se conservan los 25 originales únicos sin repetir la foto penal", () => {
    expect(Object.keys(IMAGENES_JURIDICAS)).toHaveLength(25);
    expect(new Set(Object.values(IMAGENES_JURIDICAS).map((i) => i.src)).size).toBe(25);
  });
});
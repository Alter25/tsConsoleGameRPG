import { MAPSIZE } from "../gameConfigs/globalConfig";
export type Menu = "Nueva partida" | "Continuar partida" | "Ayuda" | "Salir";



export class Position {
  #x: number = 0;
  #y: number = 0;
  #z: number = 0;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set x(v: number) {
    this.#x = v <= 0 ? 0 : v < MAPSIZE ? v : MAPSIZE - 1;
  }
  get x(): number {
    return this.#x;
  }
  set y(v: number) {
    this.#y = v <= 0 ? 0 : v < MAPSIZE ? v : MAPSIZE - 1;
  }
  get y(): number {
    return this.#y;
  }
  set z(v: number) {
    this.#z = v <= 0 ? 0 : v < MAPSIZE ? v : MAPSIZE - 1;
  }
  get z(): number {
    return this.#z;
  }
  isHere(x: number, y: number, z: number): boolean;
  isHere(x: number, y: number): boolean;

  isHere(x: number, y: number, z?: number) {
    if (z === undefined) {
      return this.x === x && this.y === y;
    }
    else {
      return this.x === x && this.y === y && this.z === z;
    }
  }
}


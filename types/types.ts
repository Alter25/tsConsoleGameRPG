export type Menu = "Nueva partida" | "Continuar partida" | "Ayuda" | "Salir";

export class Valor {
  #valor: number = 0;
  upperLimit: number = 100;
  lowerLimit: number = -100;
  constructor(valor: number = 0, upperLimit: number = 100, lowerLimit: number = -100) {
    this.#valor = valor >= lowerLimit && valor <= upperLimit ? valor : 0;
    this.lowerLimit = lowerLimit;
    this.upperLimit = upperLimit;
  }
  get valor(): number {
    return this.#valor;
  }
  set valor(valor: number) {
    this.#valor = valor >= this.lowerLimit && valor <= this.upperLimit ? valor : 0;
  }
}

export class Position {
  x: Valor = new Valor(0, 20, 20);
  y: Valor = new Valor(0, 20, 20);
  z: Valor = new Valor(0, 4, 0);
  consturctor(x: Valor, y: Valor, z: Valor) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(nPos: Position): void {
    this.x = nPos.x;
    this.y = nPos.y;
    this.z = nPos.z;
  }
  where(): string {
    return `x:${this.x} y:${this.y} z:${this.z}`;
  }
}

export interface Stats {
  name?: string;
  health?: number;
  mana?: number;
  ad?: number;
  def?: number;
  lucky: number; /*from 1 to 100*/
}
export interface Info {
  story: string;
  misions?: unknown;
}
export interface Fighter {
  battle(enemy: Being): void;
}
export interface Being {
  isAlive: boolean;
  position: Position;
  movesLeft?: number; //how may moves left
  move(newPos: Position): void;
}
export abstract class NPC implements Partial<Being>, Partial<Stats>, Partial<Info> {
  position: Position = new Position();
  name?: string | undefined = "No Player";
  lucky?: number | undefined = Math.random();
  story?: string | undefined;
  Constructor(name: string) {
    this.name = name;
  }
}


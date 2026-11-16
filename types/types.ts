export type Menu = "Nueva partida" | "Continuar partida" | "Ayuda" | "Salir";
interface IPosition {
  x: number;
  xLimit: number;
  y: number;
  yLimit: number;
  z: number;
  zLimit: number;
}
class Position implements IPosition {
  x: number = 0;
  xLimit: number = 100;
  y: number = 0;
  yLimit: number = 100;
  z: number = 0;
  zLimit: number = 5;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  move(pos: Position): void {
    this.x = pos.x;
    this.y = pos.y;
    this.z = pos.z;
  }
}

export interface Ente {
  name?: string;
  health?: number;
  mana?: number;
  ad?: number;
  def?: number;
}
export interface Extras {
  lucky: number; /*from 1 to 100*/
  story: string;
}
export abstract class Fighter implements Partial<Ente> {
  health?: number | undefined;
  mana?: number | undefined;
  ad?: number | undefined;
  def?: number | undefined;
  abstract atacar(): void;
}
export abstract class Being implements Ente {
  position: Position = new Position(0, 0, 0);
  name?: string | undefined = "NPC";
  health?: number | undefined = 100;
}

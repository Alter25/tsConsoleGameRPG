import { MAPSIZE } from "../gameConfigs/globalConfig";
import { Position } from "../types/types";
interface Stats {
  health: number;
  mana: number;
  ad: number;
  def: number;
  lucky: number;
}
interface Info {
  misions: string[];
  story: string;
}
interface Drawable {
  char: string;
  position: Position;
  selfDraw(mapa: string[][]): void;
}

export abstract class Entity implements Drawable {
  char: string = "";
  position: Position = new Position();
  get x(): number {
    return this.position.x;
  }
  get y(): number {
    return this.position.y;
  }
  selfDraw(mapa: string[][]): void {
    //aqui ira el codigo de modificacion del mapa real y se colocara
    //el caracter correspondiente a la instancia.
    for (let i = 0; i < MAPSIZE; i++) {
      for (let j = 0; j < MAPSIZE; j++) {
        if (this.position.x === i && this.position.y === j) {
          mapa[i][j] = this.char ?? "U";
        }
      }
    }
  }
}

export default class Base extends Entity implements Stats, Info {
  isAlive: boolean = true;
  name: string = "Player";
  override char: string = "P";
  private _health: number = 0;
  private _mana: number = 0;
  private _ad: number = 0;
  private _def: number = 0;
  story: string = "";
  private _lucky: number = 0;
  private _movesLeft: number = 0;
  misions: string[] = [];
  constructor(name: string, health: number, mana: number, ad: number, def: number, story: string, movesLeft: number = 4) {
    super();
    this.isAlive = true;
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.ad = ad;
    this.def = def;
    this.story = story;
    this.lucky = Math.random() * 10;
    this.movesLeft = movesLeft;
  }
  set health(h: number) {
    if (h <= 0) {
      this._health = 0;
      this.isAlive = false;
      return;
    }
    this._health = h;
  }
  set mana(m: number) {
    this._mana = m < 0 ? 0 : m;
  }
  set ad(ad: number) {
    this._ad = ad;
  }
  set def(d: number) {
    this._def = d < 0 ? 0 : d;
  }
  set movesLeft(ml: number) {
    this._movesLeft = ml < 0 ? 0 : ml;
  }
  set lucky(l: number) {
    this._lucky = l < 0 ? 0 : l;
  }
}



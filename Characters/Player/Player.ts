import { Position } from "../../types/types";
import type Base from "../base";



export default class Player implements Base {
  isAlive: boolean = true;
  name: string = "";
  #health: number = 0;
  #mana: number = 0;
  #ad: number = 0;
  #def: number = 0;
  story: string = "";
  #lucky: number = 0;
  position: Position = new Position();
  #movesLeft: number = 0;
  misions: string[] = [];
  constructor(name: string, health: number, mana: number, ad: number, def: number, story: string, movesLeft: number = 4) {
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
    if (h < 0) {
      this.#health = 0;
      this.isAlive = false;
    }
  }
  set mana(m: number) {
    this.#mana = m < 0 ? 0 : m;
  }
  set ad(ad: number) {
    this.#ad = ad;
  }
  set def(d: number) {
    this.#def = d < 0 ? 0 : d;
  }
  set movesLeft(ml: number) {
    this.#movesLeft = ml < 0 ? 0 : ml;
  }
  set lucky(l: number) {
    this.#lucky = l < 0 ? 0 : l;
  }

}

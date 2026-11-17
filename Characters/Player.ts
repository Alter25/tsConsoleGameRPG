import { print } from "../inputs/IO";
import { Position } from "../types/types";
import type { Being, Fighter, Stats, Info } from "../types/types";

export default class Player implements Being, Fighter, Stats, Info {
  isAlive: boolean;
  name: string;
  health: number;
  mana: number;
  ad: number;
  def: number;
  story: string;
  lucky: number;
  position: Position;
  movesLeft: number;
  constructor(name: string, health: number, mana: number, ad: number, def: number, story: string, movesLeft: number = 4) {
    this.isAlive = true;
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.ad = ad;
    this.def = def;
    this.story = story;
    this.lucky = Math.random() * 10;
    this.position = new Position();
    this.movesLeft = movesLeft;
  }
  battle(enemy: Being): void {

  }
  nextTurn(): void {
    this.movesLeft = Math.random();
  }
  move(newPos: Position): void {
    if (this.movesLeft > 1) {
      this.position = newPos;
      this.movesLeft--;
      print(`${this.name} se ha movido a ${this.position.where()}`)
    }
    print(`${this.name} no tiene mas movimientos por este turno!`);
  }
}

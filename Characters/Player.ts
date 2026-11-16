import type { Ente, Extras } from "../types/types";
export default class Player implements Ente, Extras {
  name: string;
  health: number;
  mana: number;
  ad: number;
  def: number;
  story: string;
  lucky: number;
  constructor(name: string, health: number, mana: number, ad: number, def: number, story: string) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.ad = ad;
    this.def = def;
    this.story = story;
    this.lucky = Math.random();
  }
}

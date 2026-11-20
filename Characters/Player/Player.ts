import { Position } from "../../types/types";
import Base from "../base";


export default class Player extends Base {
  constructor(name: string, health: number, mana: number, ad: number, def: number, story: string, movesLeft: number = 4) {
    super(name, health, mana, ad, def, story, movesLeft);
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

}

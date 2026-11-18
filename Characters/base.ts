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

export default interface Base extends Stats, Info {
  isAlive: boolean;
  movesLeft: number;
  position: Position;
}

import { print } from "../inputs/IO";
import { MAPCHAR, MAPSIZE } from "../gameConfigs/globalConfig";


const map: string[][] = [];
(function initMap() {
  for (let i = 0; i < MAPSIZE; i++) {
    const row = new Array(MAPSIZE).fill(MAPCHAR);
    map.push(row);
  }
}())

export default function drawMap() {
  for (let i = 0; i < MAPSIZE; i++) {
    print(map[i]!.join("  "));
  }
}

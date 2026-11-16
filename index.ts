import { readLine, print } from "./inputs/IO";
import actionMenu from "./Menu/main";
import { frame } from "./Menu/main";
//esto sera un bucle que cumpla ciertas condiciones para seguir.
const historia = `Todo comienza Aqui. En la Taberna del gran pony.`;
let action;
frame(historia);
do {
  action = await actionMenu(["nueva partida", "continuar partida", "ayuda", "salir"]);
} while (action != "salir");
print("Vuelve pronto!");

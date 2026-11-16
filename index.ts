import { print } from "./inputs/IO";
import actionMenu from "./Menu/main";
import { frame } from "./Menu/main";
//esto sera un bucle que cumpla ciertas condiciones para seguir.
const historia = `Todo comienza Aqui. En la Taberna del gran pony.`;
let action;
print(frame(historia));
do {
  action = await actionMenu(["Nueva partida", "Continuar partida", "Ayuda", "Salir"]);
  if (action === "Nueva partida") {

  }
} while (action != "Salir");
print("Vuelve pronto!");

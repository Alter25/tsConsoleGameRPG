import { print } from "./inputs/IO";
import startMenu from "./Menu/main";
import { frame } from "./Menu/main";
//esto sera un bucle que cumpla ciertas condiciones para seguir.
const historia = `Todo comienza Aqui. En la Taberna del gran pony.`;
print(frame(historia));
startMenu();
print("Vuelve pronto!");

import drawMap from "../Map/map";
import { print, readLine } from "../inputs/IO";
import { MAXCHAR, FRAMECHAR, MENUOPTIONS, MenuChoise } from "../gameConfigs/globalConfig";
//menu donde se muestran las opciones
//sera una funcion que recibe un array
//de opciones y retorna la opcion seleccionada
export const frame = (text: string): string => {
  const resultText = [];
  const tempText = text.split("");
  const tab = " ".repeat(2);
  resultText.push(FRAMECHAR.repeat(MAXCHAR + 6), "\n");
  resultText.push(FRAMECHAR, tab, " ".repeat(MAXCHAR), tab, FRAMECHAR, "\n");
  while (tempText.length > 0) {
    const rightMargin = MAXCHAR - tempText.length;
    resultText.push(FRAMECHAR, tab, tempText.splice(0, MAXCHAR).join(""), tempText.length < 1 ? " ".repeat(rightMargin) : "", tab, FRAMECHAR, "\n");
  }
  resultText.push(FRAMECHAR, tab, " ".repeat(MAXCHAR), tab, FRAMECHAR, "\n");
  resultText.push(FRAMECHAR.repeat(MAXCHAR + 6), "\n");
  return resultText.join("");
}
export default async function startMenu() {
  print("que decision tomaras?:    ");
  let action;
  let salir = false;
  do {
    MENUOPTIONS.forEach((element: string, index: number) => print(`> [${index + 1}]: ${element}`));
    action = await readLine();
    action = String(action).toLowerCase().trim();
    switch (action) {
      case "1":
      case MenuChoise[1]?.toString().toLowerCase(): {
        ;
      } break;
      case "2":
      case MenuChoise[2]?.toString().toLowerCase(): {
        ;
      } break;
      case "3":
      case MenuChoise[3]?.toString().toLowerCase(): {
        drawMap();
      } break;
      case "4":
      case MenuChoise[4]?.toString().toLowerCase(): {
        ;
      } break;
      case "5":
      case MenuChoise[5]?.toString().toLowerCase(): {
        salir = true;
      } break;
      default: {
        print("No existe esa opcion!")
      }
    }
  } while (!salir);
}

import { print, readLine } from "../inputs/IO";
import { MAXCHAR, FRAMECHAR } from "../gameConfigs/globalConfig";
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
  console.log(tempText.length);
  return resultText.join("");
}
export default async function actionMenu(options: string) {
  print(options);
  const op = await readLine();
  return op;
}

import * as readline from "node:readline/promises";

export async function readLine() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const res = await rl.question("");
  rl.close();
  return res;
}
export function print(message: string | number) {
  console.log(message);
}

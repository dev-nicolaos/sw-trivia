import { printQuestion } from "./mod.ts";

export async function getUserInput(prompt: string = ""): Promise<string> {
  if (prompt) {
    printQuestion(prompt);
  }

  const buffer = new Uint8Array(1024);
  const n = await Deno.stdin.read(buffer);

  if (n !== Deno.EOF) {
    const line = new TextDecoder().decode(buffer);
    return line.substring(0, n).trim();
  } else {
    throw Error("Encountered end of file");
  }
}

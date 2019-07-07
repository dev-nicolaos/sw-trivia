import { EOL, printQuestion } from './mod.ts';

export async function getUserInput(prompt: string = ''): Promise<string> {
  if (prompt) {
    printQuestion(prompt);
  }

  const { stdin, platform } = Deno;
  const decoder = new TextDecoder();
  const byteArray = new Uint8Array(1024);

  await stdin.read(byteArray);
  const line = decoder.decode(byteArray);
  return line.substring(0, line.indexOf(EOL));
}

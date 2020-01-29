import { GET_NUMERIC_INPUT_OPTIONS } from "interfaces";
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

export async function getYesNoResponse(question: string): Promise<boolean> {
  const response = (await getUserInput(`${question} (y/n)`))
    .trim()
    .toLowerCase();

  return response === "y" || response === "yes";
}

export async function getNumericInput({
  prompt,
  min = 1,
  max,
  round = true,
}: GET_NUMERIC_INPUT_OPTIONS): Promise<number> {
  let response = +(await getUserInput(`${prompt} (min: ${min}, max: ${max})`));

  if (round) {
    response = Math.round(response);
  }

  if (response >= min && response <= max) {
    return response;
  } else {
    console.clear();
    console.log(`Please enter a number between ${min} and ${max}`);
    return await getNumericInput({ prompt, min, max, round });
  }
}

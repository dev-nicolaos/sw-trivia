import { readLines } from "std/io/mod.ts";
import { GET_NUMERIC_INPUT_OPTIONS } from "types";
import { printQuestion } from "./mod.ts";

const encoder = new TextEncoder();

function cursorUp(): void {
  Deno.writeAllSync(Deno.stdout, encoder.encode("\x1b[1A"));
}

export function getUserInput(prompt = ""): Promise<string> {
  if (prompt) {
    printQuestion(prompt);
  }

  const reader = readLines(Deno.stdin);

  async function processInput(retry = false): Promise<string> {
    if (retry) {
      cursorUp();
    }
    const userInput = (await reader.next()).value.trim();
    return userInput || processInput(true);
  }

  return processInput();
}

const isDefined = (x: unknown): boolean => x !== undefined;

export async function getNumericInput({
  max,
  min,
  prompt = "",
  round = true,
}: GET_NUMERIC_INPUT_OPTIONS = {}): Promise<number> {
  function constructPrompt(): string {
    let constructedPrompt = prompt;

    if (prompt && (isDefined(min) || isDefined(max))) {
      constructedPrompt += " (";

      if (isDefined(min)) {
        constructedPrompt += `min: ${min}`;

        if (isDefined(max)) {
          constructedPrompt += ", ";
        }
      }

      if (isDefined(max)) {
        constructedPrompt += `max: ${max}`;
      }

      constructedPrompt += ")";
    }

    return constructedPrompt;
  }

  async function handleInvalid(message: string): Promise<number> {
    if (prompt) {
      console.clear();
    }
    console.warn(message);
    return await getNumericInput({ max, min, prompt, round });
  }

  let response = +(await getUserInput(constructPrompt()));

  if (round) {
    response = Math.round(response);
  }

  return min && response < min
    ? handleInvalid(`Please enter a number greater than or equal to ${min}`)
    : max && response > max
    ? handleInvalid(`Please enter a number less than or equal to ${max}`)
    : response;
}

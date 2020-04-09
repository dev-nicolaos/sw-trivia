import { readLines } from "std/io/mod.ts";
import { GET_NUMERIC_INPUT_OPTIONS } from "types";
import { printQuestion } from "./mod.ts";

export async function getUserInput(prompt: string = ""): Promise<string> {
  if (prompt) {
    printQuestion(prompt);
  }

  const reader = readLines(Deno.stdin);
  const { value } = await reader.next();
  return value.trim();
}

export async function getYesNoResponse(question: string): Promise<boolean> {
  const response = (await getUserInput(`${question} (y/n)`))
    .trim()
    .toLowerCase();

  return response === "y" || response === "yes";
}

const isDefined = (x: any): boolean => x !== undefined;

export async function getNumericInput({
  max,
  min,
  prompt = "",
  round = true,
}: GET_NUMERIC_INPUT_OPTIONS = {}): Promise<number> {
  function constructPrompt(): string {
    let constructedPrompt = prompt;

    if (isDefined(min) || isDefined(max)) {
      constructedPrompt += " (";

      if (isDefined(min)) {
        constructedPrompt += `min: ${min}`;
      }

      if (isDefined(min) && isDefined(max)) {
        constructedPrompt += ", ";
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
    ? handleInvalid(`Please enter a number greater than ${min}`)
    : max && response > max
    ? handleInvalid(`Please enter a number less than ${max}`)
    : response;
}

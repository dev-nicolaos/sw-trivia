import { getYesNoResponse } from "helpers";

const VERSION = "0.6.0";
const DENO_VERSION = "0.36.0";

export function printVersion(): void {
  console.log("Star Wars Trivia:", VERSION);
  console.log("Built on Deno:", DENO_VERSION);
}

export async function checkRuntimeVersion(): Promise<void> {
  const { version: { deno } } = Deno;

  if (DENO_VERSION !== deno) {
    console.warn(`Potentially incompatibale runtime detected (Deno v${deno})`);
    console.warn(`If you experience errors, try using Deno v${DENO_VERSION}`);

    if (!(await getYesNoResponse("Continue?"))) {
      Deno.exit();
    }
  }
}

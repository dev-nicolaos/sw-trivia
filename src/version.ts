import { getYesNoResponse } from "helpers";

const VERSION = "0.3.0";
const DENO_VERSION = "0.28.0";

export function printVersion(): void {
  console.log("Star Wars Trivia:", VERSION);
  console.log("Built on Deno:", DENO_VERSION);
}

export async function checkRuntimeVersion(): Promise<void> {
  if (DENO_VERSION !== Deno.version.deno) {
    console.warn("Potentially incompatibale runtime version detected.");
    console.warn(`If you experience errors, try using Deno v${DENO_VERSION}`);

    if (!(await getYesNoResponse("Continue?"))) {
      Deno.exit();
    }
  }
}

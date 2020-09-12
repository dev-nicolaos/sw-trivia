import { getYesNoResponse } from "helpers";

const SW_TRIVIA_VERSION = "0.10.0";
const TARGET_DENO_VERSION = "1.3.3";

export function printVersion(): void {
  console.log("Star Wars Trivia:", SW_TRIVIA_VERSION);
  console.log("Built on Deno:", TARGET_DENO_VERSION);
}

export async function checkRuntimeVersion(): Promise<void> {
  const {
    version: { deno: runtimeVersion },
  } = Deno;

  if (TARGET_DENO_VERSION !== runtimeVersion) {
    console.warn(
      `Potentially incompatible runtime detected (Deno v${runtimeVersion})`,
    );
    console.warn(
      `If you experience errors, try using Deno v${TARGET_DENO_VERSION}`,
    );

    if (!(await getYesNoResponse("Continue?"))) {
      Deno.exit();
    }
  }
}

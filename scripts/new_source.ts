import { MEDIA_TYPE, SOURCE } from "types";
import { getUserInput, printPositive, printQuestion } from "helpers";
import { generateBasicTriviaTemplate } from "./templates.ts";

const formatFileName = (sourceName: string): string =>
  sourceName
    .replace(/'/g, "")
    .split(/[- _,:—]+/)
    .join("_")
    .toLowerCase() + ".ts";

const getProjectRootPath = (): string =>
  import.meta.url.slice(
    8, // file:///
    import.meta.url.lastIndexOf("/", import.meta.url.lastIndexOf("/") - 1),
  );

async function handleDeniedPermission(source: SOURCE): Promise<void> {
  console.log(
    "This script requires write access to create a new trivia source file",
  );
  console.log(
    "To avoid this error in the future, run this script with the --allow-write flag",
  );
  const retry = await getUserInput("Retry command? y/n");
  if (retry === "y" || retry === "yes") {
    createSourceFile(source);
  }
}

function createSourceFile(source: SOURCE): void {
  const { name, mediaType } = source;

  const targetDir = `${getProjectRootPath()}/src/trivia/${mediaType.toLowerCase()}s`;
  const fileName = formatFileName(name);
  const encodedTemplate = new TextEncoder().encode(
    generateBasicTriviaTemplate(source),
  );

  try {
    Deno.chdir(targetDir);
    Deno.writeFileSync(fileName, encodedTemplate);
    printPositive(
      `Success! Don't forget to import ${name} in ${targetDir}/mod.ts`,
    );
  } catch (err) {
    if (err.name === "PermissionDenied") {
      handleDeniedPermission(source);
    } else {
      console.error(err);
    }
  }
}

async function getNewSourceDetails(): Promise<SOURCE> {
  const supportedMediaTypes: MEDIA_TYPE[] = ["Book", "Film", "Game"];

  printQuestion(
    "What type of source would you like to create?",
    supportedMediaTypes,
  );

  const selectedMediaIndex = +(await getUserInput()) - 1;

  const mediaType = supportedMediaTypes[selectedMediaIndex];

  if (mediaType) {
    const name = await getUserInput("What is the name of the source?");
    if (name) {
      return { name, mediaType };
    } else {
      console.log("An empty string is not a valid source name");
    }
  } else {
    console.log("Please selected a valid option");
  }
  return getNewSourceDetails();
}

window.addEventListener("load", async () => {
  const newSource = await getNewSourceDetails();
  createSourceFile(newSource);
});

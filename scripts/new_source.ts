import { grantOrThrow } from "std/permissions/mod.ts";
import { MEDIA_TYPE, SOURCE } from "types";
import {
  getNumericInput,
  getUserInput,
  printPositive,
  printQuestion,
} from "helpers";
import {
  generateBasicTriviaTemplate,
  generateComicTemplate,
} from "./templates.ts";

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

async function createSourceFile(source: SOURCE): Promise<void> {
  const { name, mediaType } = source;

  const targetDir = `${getProjectRootPath()}/src/trivia/${mediaType.toLowerCase()}s`;

  const fileName = formatFileName(name);

  const template =
    mediaType === "Comic"
      ? generateComicTemplate(name)
      : generateBasicTriviaTemplate(source);
  const encodedTemplate = new TextEncoder().encode(template);

  try {
    await grantOrThrow({ name: "write" });
    Deno.chdir(targetDir);
    Deno.writeFileSync(fileName, encodedTemplate);
    printPositive(
      `Success! Don't forget to import ${name} in ${targetDir}/mod.ts`,
    );
  } catch (err) {
    if (err instanceof Deno.errors.PermissionDenied) {
      console.error("Error: Write access required to create a new trivia file");
    } else {
      console.error(err);
    }
  }
}

async function getNewSourceDetails(): Promise<SOURCE> {
  const supportedMediaTypes: MEDIA_TYPE[] = ["Book", "Comic", "Film", "Game"];

  printQuestion(
    "What type of source would you like to create?",
    supportedMediaTypes,
  );

  const selectedMediaIndex =
    (await getNumericInput({
      max: supportedMediaTypes.length,
      min: 1,
    })) - 1;

  const name = await getUserInput("What is the name of the source?");

  if (name) {
    return { name, mediaType: supportedMediaTypes[selectedMediaIndex] };
  }

  console.log("An empty string is not a valid source name");
  return getNewSourceDetails();
}

createSourceFile(await getNewSourceDetails());

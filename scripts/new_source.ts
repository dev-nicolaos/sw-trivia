import { ensureDirSync, existsSync } from "std/fs/mod.ts";
import { dirname, relative, fromFileUrl } from "std/path/mod.ts";
import { grantOrThrow } from "std/permissions/mod.ts";

import { MEDIA_TYPE, SOURCE } from "types";
import {
  generateBasicTriviaTemplate,
  generateComicTemplate,
  generateTVTemplate,
  getNumericInput,
  getUserInput,
  printPositive,
  printQuestion,
} from "helpers";
import { checkRuntimeVersion } from "../src/version.ts";

const getPathToProjectRoot = (): string => {
  const projectRoot = fromFileUrl(dirname(dirname(import.meta.url)));
  const path = `${relative(Deno.cwd(), projectRoot)}` || ".";
  return path.startsWith(".") ? path : `./${path}`;
};

const formatSourceName = (sourceName: string): string =>
  sourceName
    .replace(/'/g, "")
    .split(/[- _,:—]+/)
    .join("_")
    .toLowerCase();

async function createSourceFile({ name, mediaType }: SOURCE): Promise<void> {
  const targetDir = `${getPathToProjectRoot()}/src/trivia/${mediaType.toLowerCase()}${
    mediaType !== "Television" ? "s" : ""
  }`;

  const fileName = `${formatSourceName(name)}.ts`;

  const template =
    mediaType === "Television"
      ? generateTVTemplate(name)
      : mediaType === "Comic"
      ? generateComicTemplate(name)
      : generateBasicTriviaTemplate({ mediaType, name });

  const fullPath = `${targetDir}/${fileName}`;

  try {
    await grantOrThrow(
      { name: "read", path: targetDir },
      { name: "write", path: targetDir },
    );

    if (existsSync(fullPath)) {
      throw `Trivia file already exists for ${name}`;
    }

    ensureDirSync(targetDir);
    Deno.writeTextFileSync(fullPath, template);

    printPositive(
      `Success! Don't forget to import ${fileName} in ${targetDir}/mod.ts`,
    );
  } catch (err) {
    if (err instanceof Deno.errors.PermissionDenied) {
      console.error(
        "Error: read (to ensure a trivia file doesn't already exist) and write (to create a new trivia file) access required",
      );
    } else {
      console.error(err);
    }
  }
}

async function getSourceDetails(): Promise<SOURCE> {
  const supportedMediaTypes: MEDIA_TYPE[] = [
    "Book",
    "Comic",
    "Film",
    "Game",
    "Television",
  ];

  printQuestion(
    "What type of source would you like to create?",
    supportedMediaTypes,
  );

  const mediaType =
    supportedMediaTypes[
      (await getNumericInput({
        max: supportedMediaTypes.length,
        min: 1,
      })) - 1
    ];

  const prompt = `What is the name of the ${
    mediaType === "Television" ? "series" : mediaType.toLowerCase()
  }?`;

  const name = await getUserInput(prompt);
  return { name, mediaType };
}

await checkRuntimeVersion();
createSourceFile(await getSourceDetails());

import { ensureDirSync, existsSync } from "std/fs/mod.ts";
import { dirname, relative } from "std/path/mod.ts";
import { grantOrThrow } from "std/permissions/mod.ts";

import { MEDIA_TYPE } from "types";
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

interface SOURCE_FILE_DETAILS {
  name: string;
  mediaType: MEDIA_TYPE;
  season?: number;
}

const encoder = new TextEncoder();

const getPathToProjectRoot = (): string => {
  let projectRoot = dirname(dirname(location.pathname));
  if (Deno.build.os === "win") {
    // location.pathname returns a leading slash on windows that breaks the relative function
    projectRoot = projectRoot.slice(1);
  }
  const path = `${relative(Deno.cwd(), projectRoot)}` || ".";
  return path.startsWith(".") ? path : `./${path}`;
};

const formatSourceName = (sourceName: string): string =>
  sourceName
    .replace(/'/g, "")
    .split(/[- _,:—]+/)
    .join("_")
    .toLowerCase();

async function createSourceFile({
  name,
  mediaType,
  season,
}: SOURCE_FILE_DETAILS): Promise<void> {
  let targetDir: string = `${getPathToProjectRoot()}/src/trivia/`;
  let fileName: string;
  let template: string;

  if (season) {
    targetDir += `television/${formatSourceName(name)}`;
    fileName = `season_${season}.ts`;
    template = generateTVTemplate(name);
  } else {
    targetDir += `${mediaType.toLowerCase()}s`;
    fileName = `${formatSourceName(name)}.ts`;
    template =
      mediaType === "Comic"
        ? generateComicTemplate(name)
        : generateBasicTriviaTemplate({ mediaType, name });
  }

  const fullPath = `${targetDir}/${fileName}`;
  const encodedTemplate = encoder.encode(template);

  try {
    await grantOrThrow(
      { name: "read", path: targetDir },
      { name: "write", path: targetDir },
    );

    if (existsSync(fullPath)) {
      throw `Trivia file already exists for ${name}${
        season ? ` season ${season}` : ""
      }`;
    }

    ensureDirSync(targetDir);
    Deno.writeFileSync(fullPath, encodedTemplate);

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

async function getTVSourceDetails() {
  const name = await getUserInput("What is the name of the series?");
  const season = await getNumericInput({
    min: 1,
    prompt: "Which season would you like to create a file for?",
  });

  return { name, season };
}

async function getSourceDetails(): Promise<SOURCE_FILE_DETAILS> {
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

  if (mediaType === "Television") {
    const { name, season } = await getTVSourceDetails();
    return { name, mediaType, season };
  } else {
    const name = await getUserInput(
      `What is the name of the ${mediaType.toLowerCase()}?`,
    );
    return { name, mediaType };
  }
}

checkRuntimeVersion();
createSourceFile(await getSourceDetails());

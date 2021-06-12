import {
  ensureDirSync,
  existsSync,
  generateBasicTriviaTemplate,
  generateComicTemplate,
  generateTVTemplate,
  getPathToProjectRoot,
  grantOrThrow,
  SOURCE,
} from "./_utils.ts";

const formatSourceName = (sourceName: string): string =>
  sourceName
    .replace(/'/g, "")
    .split(/[- _,:—]+/)
    .join("_")
    .toLowerCase();

async function createSourceFile({ name, mediaType }: SOURCE): Promise<void> {
  const targetDir = `${
    getPathToProjectRoot()
  }/src/trivia/${mediaType.toLowerCase()}${
    mediaType !== "Television" ? "s" : ""
  }`;

  const fileName = `${formatSourceName(name)}.ts`;

  const template = mediaType === "Television"
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

    console.log(
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

function getSourceDetails(): SOURCE {
  const supportedMediaTypes = [
    "Book",
    "Comic",
    "Film",
    "Game",
    "Television",
  ];

  supportedMediaTypes.forEach((mediaType, i) => console.log(`${i + 1}) ${mediaType}`));
  const mediaTypeResponse = prompt("Which of the above source types would you like to create?");

  if (!mediaTypeResponse || +mediaTypeResponse < 1 || +mediaTypeResponse > supportedMediaTypes.length) {
    throw new Error('Please select a valid number');
  }

  const mediaType = supportedMediaTypes[+mediaTypeResponse - 1];

  const name = prompt(`What is the name of the ${
    mediaType === "Television" ? "series" : mediaType.toLowerCase()
  }?`);

  if (!name) throw new Error('Please enter a valid name');

  return { name, mediaType };
}

createSourceFile(getSourceDetails());

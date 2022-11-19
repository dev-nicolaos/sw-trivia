import { dirname, fromFileUrl } from "std/path/mod.ts";
import { parse } from "std/flags/mod.ts";

import { ensureDirSync } from "std/fs/mod.ts";
import { grantOrThrow } from "std/permissions/mod.ts";

import { Source, SUPPORTED_MEDIA_TYPES } from "types";

const getPathToProjectRoot = () =>
  fromFileUrl(dirname(dirname(import.meta.url)));

const capitalize = (myString: string) =>
  myString.charAt(0).toUpperCase() + myString.slice(1);

const composeTemplate = (...lines: string[]) => lines.join("\n\n") + "\n";

const standardExport = [
  "const trivia: Trivia[] = [];",
  "export default trivia;",
];

const generateBasicTriviaTemplate = ({ mediaType, name }: Source) =>
  composeTemplate(
    `import { Trivia } from "types";\nimport { generate${
      capitalize(mediaType)
    }Source } from "../generate_source.ts";`,
    `const source = generate${capitalize(mediaType)}Source("${name}");`,
    ...standardExport,
  );

const generateTVTemplate = (seriesName: string) =>
  composeTemplate(
    'import { Trivia } from "types";\nimport { generateTVSource } from "../generate_source.ts";',
    `const genSource = (episode: string) => generateTVSource("${seriesName}", episode);`,
    ...standardExport,
  );

const generateComicTemplate = (seriesName: string) =>
  composeTemplate(
    'import { Trivia } from "types";\nimport { generateComicSource } from "../generate_source.ts";',
    `const genSource = (issue: number) => generateComicSource("${seriesName}", issue);`,
    ...standardExport,
  );

const formatSourceName = (sourceName: string) =>
  sourceName
    .replace(/'/g, "")
    .split(/[- _,:—]+/)
    .join("_")
    .toLowerCase();

async function createSourceFile({ name, mediaType }: Source) {
  const targetDir = `${getPathToProjectRoot()}/src/trivia/${mediaType}${
    mediaType !== "television" ? "s" : ""
  }`;

  const fileName = `${formatSourceName(name)}.ts`;

  const template = mediaType === "television"
    ? generateTVTemplate(name)
    : mediaType === "comic"
    ? generateComicTemplate(name)
    : generateBasicTriviaTemplate({ mediaType, name });

  const fullPath = `${targetDir}/${fileName}`;

  try {
    await grantOrThrow(
      { name: "read", path: targetDir },
      { name: "write", path: targetDir },
    );

    Deno.openSync(fullPath);

    throw `Trivia file already exists for ${name} (${mediaType})`;
  } catch (err) {
    if (err instanceof Deno.errors.PermissionDenied) {
      console.error(
        `Error: This script requires permission to read from (to ensure a trivia file doesn't already exist) and write to (to create a new trivia file) ${targetDir}`,
      );
      Deno.exit(2);
    } else if (err instanceof Deno.errors.NotFound) {
      ensureDirSync(targetDir);
      Deno.writeTextFileSync(fullPath, template);
      console.log(
        `Success! Don't forget to import ${fileName} in ${targetDir}/mod.ts`,
      );
    } else {
      throw err;
    }
  }
}

const { name, type } = parse(Deno.args, {
  alias: { n: "name", t: "type" },
  string: ["name", "type"],
});

const errorMessages = [];

if (!name) {
  errorMessages.push(
    "Please include the name of the trivia source using the --name (-n for short) argument",
  );
}

if (!type) {
  errorMessages.push(
    "Please include the media type of the trivia source using the --type (-t for short) argument",
    `Valid media types are ${SUPPORTED_MEDIA_TYPES.join(", ")}`,
  );
  // @ts-expect-error Known TS issue: https://github.com/microsoft/TypeScript/issues/26255
} else if (!SUPPORTED_MEDIA_TYPES.includes(type.toLowerCase())) {
  errorMessages.push(`${type} is not a supported media type`);
}

if (errorMessages.length) {
  for (const err of errorMessages) console.error(err);
  Deno.exit(1);
} else {
  // @ts-expect-error TS doesn't realize we've accounted for undefined
  createSourceFile({ name, mediaType: type });
}

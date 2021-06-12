import { getPathToProjectRoot } from "./_utils.ts";

const pathToProjectRoot = getPathToProjectRoot();
const sourcePath = `${pathToProjectRoot}/src/mod.ts`;
const importMapPath = `${pathToProjectRoot}/import_map.json`;

const process = Deno.run({
  cmd: [
    "deno",
    "run",
    `--import-map=${importMapPath}`,
    sourcePath,
    ...Deno.args,
  ],
});

await process.status();

import { getPathToProjectRoot, grantOrThrow } from "./_utils.ts";

const pathToProjectRoot = getPathToProjectRoot();
const sourcePath = `${pathToProjectRoot}/src/mod.ts`;
const importMapPath = `${pathToProjectRoot}/import_map.json`;
const cmd = [
  "deno",
  "run",
  `--import-map=${importMapPath}`,
  sourcePath,
  ...Deno.args,
];

try {
  grantOrThrow({ name: "run", command: "deno" });
  const process = Deno.run({ cmd });

  await process.status();
} catch (err) {
  if (err instanceof Deno.errors.PermissionDenied) {
    console.error(
      `Error: this script requires permission to spawn a subprocess in order to run ${cmd}`,
    );
    Deno.exit(1);
  } else {
    throw err;
  }
}

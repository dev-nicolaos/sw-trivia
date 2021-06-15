import {
  ensureDirSync,
  getPathToProjectRoot,
  grantOrThrow,
  parse,
} from "./_utils.ts";

const executableName = "sw-trivia";

const pathToProjectRoot = getPathToProjectRoot();
const sourcePath = `${pathToProjectRoot}/src/mod.ts`;
const importMapPath = `${pathToProjectRoot}/import_map.json`;

const compileForDebug = async () => {
  const outputDirPath = `${pathToProjectRoot}/target/debug`;
  const cmd = [
    "deno",
    "compile",
    `--import-map=${importMapPath}`,
    "-o",
    `${outputDirPath}/${executableName}`,
    sourcePath,
  ];

  try {
    await grantOrThrow(
      { name: "read", path: outputDirPath },
      { name: "write", path: outputDirPath },
      { name: "run", command: "deno" },
    );
    ensureDirSync(outputDirPath);

    console.log(`Creating executable...`);
    const process = Deno.run({ cmd });

    await process.status();
  } catch (err) {
    if (err instanceof Deno.errors.PermissionDenied) {
      console.error(
        `Error: This script requires permission to read from and write to ${outputDirPath} and run subprocesses in order to run "${
          cmd.join(" ")
        }"`,
      );
      Deno.exit(1);
    } else {
      throw err;
    }
  }
};

const compileForRelease = async () => {
  const releaseDirPath = `${pathToProjectRoot}/target/release`;
  const getReleaseOutputDirPath = (platformName: string) =>
    `${releaseDirPath}/${platformName}`;

  try {
    await grantOrThrow(
      { name: "read", path: releaseDirPath },
      { name: "write", path: releaseDirPath },
      { name: "run", command: "deno" },
    );

    for (
      const [platformName, platformTargetValue] of [
        ["linux", "x86_64-unknown-linux-gnu"],
        ["windows", "x86_64-pc-windows-msvc"],
        ["macos-intel", "x86_64-apple-darwin"],
        ["macos-apple", "aarch64-apple-darwin"],
      ]
    ) {
      const releaseOutputDirPath = getReleaseOutputDirPath(platformName);
      ensureDirSync(releaseOutputDirPath);

      console.log(`Creating ${platformName} executable...`);
      const process = Deno.run({
        cmd: [
          "deno",
          "compile",
          "--target",
          platformTargetValue,
          `--import-map=${importMapPath}`,
          "-o",
          `${releaseOutputDirPath}/${executableName}`,
          sourcePath,
        ],
      });

      await process.status();
    }
  } catch (err) {
    if (err instanceof Deno.errors.PermissionDenied) {
      console.error(
        `Error: This script requires permission to read from and write to ${releaseDirPath} and run subprocesses in order to compile the executables`,
      );
      Deno.exit(1);
    } else {
      throw err;
    }
  }
};

const { release } = parse(Deno.args, { alias: { r: "release" } });

if (release) {
  compileForRelease();
} else {
  compileForDebug();
}

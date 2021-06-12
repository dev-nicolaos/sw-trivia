import { ensureDirSync, getPathToProjectRoot, parse } from "./_utils.ts";

const executableName = "sw-trivia";

const pathToProjectRoot = getPathToProjectRoot();
const sourcePath = `${pathToProjectRoot}/src/mod.ts`;
const importMapPath = `${pathToProjectRoot}/import_map.json`;

const compileForDebug = async () => {
  const outputDirPath = `${pathToProjectRoot}/target/debug`;
  ensureDirSync(outputDirPath);

  console.log(`Creating executable...`);
  const process = Deno.run({
    cmd: [
      "deno",
      "compile",
      `--import-map=${importMapPath}`,
      "-o",
      `${outputDirPath}/${executableName}`,
      sourcePath,
    ],
  });

  await process.status();
};

const compileForRelease = async () => {
  const getReleaseOutputDirPath = (platformName: string) =>
    `${pathToProjectRoot}/target/release/${platformName}`;

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
};

const { release } = parse(Deno.args, { alias: { r: "release" } });

if (release) {
  compileForRelease();
} else {
  compileForDebug();
}

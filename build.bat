@echo off

IF NOT EXIST %~dp0bin (
  mkdir %~dp0bin
)

deno compile --unstable --lite --import-map=%~dp0import_map.json -o %~dp0bin\sw-trivia %~dp0src\mod.ts

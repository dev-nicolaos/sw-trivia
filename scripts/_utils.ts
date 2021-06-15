import { dirname, fromFileUrl } from "https://deno.land/std@0.98.0/path/mod.ts";

export { parse } from "https://deno.land/std@0.98.0/flags/mod.ts";
export {
  ensureDirSync,
  existsSync,
} from "https://deno.land/std@0.98.0/fs/mod.ts";
export { grantOrThrow } from "https://deno.land/std@0.98.0/permissions/mod.ts";

export const getPathToProjectRoot = (): string =>
  fromFileUrl(dirname(dirname(import.meta.url)));

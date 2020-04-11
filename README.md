# Star Wars Trivia

A command line trivia game with content from all types of Star Wars cannon media.

## Development

This project is built with [Deno](https://deno.land)

Because Deno is still pre 1.0 and in rapid development, this project is built against a specific version of Deno and its standard library. This version number is listed in `src/version.ts`.

### Scripts

#### Run Program

`deno --importmap=import_map.json src/mod.ts`

##### Flags

`-v`, `--version`: Show application version

`-s`, `--stats`: Show statistics about trivia contents

#### Scaffold New Trivia File (doesn't support television yet)

`deno --importmap=import_map.json scripts/new_source.ts`

Pass `deno` the `--alow-write` flag to avoid the permission prompt

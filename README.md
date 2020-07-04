# Star Wars Trivia

A command line trivia game with content from all types of Star Wars cannon media.

## Development

This project is built with [Deno](https://deno.land)

Although this project uses a stable version of Deno, it still makes use of the [Deno standard library](https://deno.land/std) which is pre 1.0, and makes use of the `--unstable` flag for import maps. Because of this, it is still recommended to use the specific version of Deno and the standard library listed in `src/version.ts`. The program will warn the user if the version of Deno being run does not match.

### Scripts

#### Run Program

Windows: `./start` or `./start.bat`

Mac/Linux: `./start.sh`

##### Flags

`-v`, `--version`: Show application version

`-s`, `--stats`: Show statistics about trivia contents

#### Scaffold New Trivia File

Windows: `./new` or `./new.bat`

Mac/Linux: `./new.sh`

# Star Wars Trivia

A command line trivia game with content from all types of Star Wars cannon media.

## Development

This project is built with [Deno](https://deno.land)

Although this project uses a stable version of Deno, it still makes use of the [Deno standard library](https://deno.land/std) which is pre 1.0, and makes use of the `--unstable` flag for import maps. Because of this, it is still recommended to use the specific version of Deno and the standard library listed in `src/version.ts`. The program will warn the user if the version of Deno being run does not match.

### Scripts

| Action | Windows Command | Mac/Linux Command | Flags |
|-|-|-|-|
| Run Program | `./start` or `./start.bat` | `./start.sh` | `-v`, `--version`: Show app version info<br>`-s`, `--stats`: Show statistics about trivia content |
| Scaffold New Trivia File | `./new` or `./new.bat` | `./new.sh` | NA |
| Build Exectuable | `./build` or `./build.bat` | `./build.sh` | NA |

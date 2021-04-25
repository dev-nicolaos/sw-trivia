# Star Wars Trivia

A command line trivia game with content from all types of Star Wars cannon media.

## Development

This project is built with [Deno](https://deno.land)

Although this project uses a stable version of Deno, it needs the `--unstable` flag for a few APIs and makes use of the [Deno Standard Modules](https://deno.land/std) which are pre 1.0. Because of this, it is still recommended to use the specific version of Deno listed in `src/version.ts`. The program will warn the user if the version of Deno being run does not match the version listed there.

### Scripts

| Action | Windows Command | Mac/Linux Command | Flags |
|-|-|-|-|
| Run Program | `./start` or `./start.bat` | `./start.sh` | `-v`, `--version`: Show app version info<br>`-s`, `--stats`: Show statistics about trivia content |
| Scaffold New Trivia File | `./new` or `./new.bat` | `./new.sh` | NA |
| Build Executable | `./build` or `./build.bat` | `./build.sh` | NA |

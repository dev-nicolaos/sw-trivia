# Star Wars Trivia

A command line trivia game with content from all types of Star Wars cannon media.

## How to Install the Game

1. Go to the [latest release page](https://github.com/dev-nicolaos/sw-trivia/releases/latest)
   and download the executable that corresponds to your platform
2. Save the executable to a folder somewhere in your file system
3. If that folder is not already in your [system or user path](https://en.wikipedia.org/wiki/PATH_(variable)),
   you'll need to add it (see instructions below if you need help doing this)
   - [How to Add to Windows PATH Environment Variable](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/)
   - [Adding a Directory to PATH in MacOS](https://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/)
   - [How to Add a Directory to Your $PATH in Linux](https://www.howtogeek.com/658904/how-to-add-a-directory-to-your-path-in-linux/)

## How to Start the Game

1. Open a terminal or command prompt
2. Type `sw-trivia` to start the game
   - add the `--version` flag (`-v` for short) to see version information about the game
   - add the `--stats` flag (`-s` for short) to see statistics about the game's trivia content
3. Type the number of the option you'd like to select and press `Enter` to proceed

## How to Contribute to the project

You can submit a new trivia question or report a bug [using one of our issue templates](https://github.com/dev-nicolaos/sw-trivia/issues/new/choose).

## Development

This project is built with [Deno](https://deno.land)

Although this project uses a stable version of Deno, it needs the `--unstable` flag for a few APIs and makes use of the [Deno Standard Modules](https://deno.land/std) which are pre 1.0.
Because of this, it is still recommended to use the specific version of Deno listed in `src/version.ts`.
The program will warn the user if the version of Deno being run does not match the version listed there.

### Scripts

**Note:** Unlike the final executable, arguments to dev scripts must be passed after an additional `--` (e.g. `deno task start -- --version`)

#### Run Program

`deno task start`

##### Optional Arguments

- `-v`, `--version`: Show app version info
- `-s`, `--stats`: Show statistics about trivia content

#### Scaffold New Trivia Source File

`deno task new`

##### Required Arguments

- `-n`, `--name`: The name of the new trivia source
- `-t`, `--type`: The media type of the new trivia source
  - valid types: book, comic, film, game, television

#### Build Debug Executable

`deno task compile-debug`

Will create an executable for the current platform in `target/debug`.

#### Build Release Executables

`deno task compile-release`

Will create executables for all platforms in `target/release/[platform-name]`.
